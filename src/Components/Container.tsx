import { cn } from "../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className } : ContainerProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl font-inter md:py-8 md:pb-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
