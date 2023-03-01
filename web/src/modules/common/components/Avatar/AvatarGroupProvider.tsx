import React, { createContext, useContext, useMemo } from 'react';

interface ContextValue {
  spacing: number;
}

const AvatarGroupContext = createContext<ContextValue | null>(null);

interface AvatarGroupProviderProps extends ContextValue {
  children: React.ReactNode;
}

export function AvatarGroupProvider({ spacing, children }: AvatarGroupProviderProps) {
  const value = useMemo(() => ({ spacing }), [spacing]);

  return <AvatarGroupContext.Provider value={value}>{children}</AvatarGroupContext.Provider>;
}

export function useAvatarGroupContext() {
  const ctx = useContext(AvatarGroupContext);

  if (ctx) {
    return { ...ctx, withinGroup: true };
  }

  return { spacing: null, withinGroup: false };
}
