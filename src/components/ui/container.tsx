
import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-4 max-w-7xl", className)}>
      {children}
    </div>
  );
};
import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn("container mx-auto px-4 md:px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};
