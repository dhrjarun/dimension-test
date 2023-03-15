import React, { useEffect, Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { usePathname } from 'next/navigation';
import { Sidebar, Header, SecondaryHeader, Board, selectedProjectState } from '~/modules/project';
import { trpc } from '~/utils/api';

export default function ProjectPage() {
  const { data: projects } = trpc.project.getAll.useQuery();
  const [selectedProject, setSelectedProject] = useRecoilState(selectedProjectState);
  const currentPathname = usePathname();

  useEffect(() => {
    if (!projects) return;

    const p = projects.find((project) => {
      const { pathname: projectPathname } = new URL(project.url);
      if (currentPathname === projectPathname) {
        return true;
      }
      return false;
    });
    setSelectedProject(p || null);
  }, [currentPathname, projects, setSelectedProject]);

  return (
    <div className="flex">
      <Sidebar projects={projects || []} />
      <div className="grow">
        <Header project={selectedProject} />
        <SecondaryHeader />
        <Suspense fallback={<div>loading....</div>}>
          {selectedProject && <Board selectedProject={selectedProject} />}
        </Suspense>
      </div>
    </div>
  );
}
