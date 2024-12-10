import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  const baseClasses = 'transition-colors duration-200 hover:text-indigo-600';
  return (
    <a 
      href={href} 
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}