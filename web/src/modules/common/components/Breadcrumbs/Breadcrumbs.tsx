import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { ChevronRightIcon } from './ChevronRightIcon';

export interface BreadcrumbsProps extends React.ComponentPropsWithoutRef<'div'> {
  /** React nodes */
  children: React.ReactNode;
}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (props: BreadcrumbsProps, ref) => {
    const { className, children, ...rest } = props;

    const childClasses = 'leading-none whitespace-nowrap';
    const separatorClasses = 'ml-1 mr-1';

    const items = React.Children.toArray(children).reduce<React.ReactNode[]>(
      (acc, child, index, array) => {
        const item = React.isValidElement(child) ? (
          React.cloneElement(child as React.ReactElement, {
            className: clsx(childClasses, child.props?.className),
            key: `child-${index}`,
          })
        ) : (
          <div className={childClasses} key={`child-${index}`}>
            {child}
          </div>
        );

        acc.push(item);

        if (index !== array.length - 1) {
          acc.push(<ChevronRightIcon className={separatorClasses} key={`separator-${index}`} />);
        }

        return acc;
      },
      []
    );

    return (
      <div className={clsx('flex items-center', className)} ref={ref} {...rest}>
        {items}
      </div>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
