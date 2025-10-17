import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

interface FooterLinkProps {
  IconTag: React.FC<React.SVGProps<SVGSVGElement>>;
  to: string;
  className?: string;
  iconClass?: string;
}

export const FooterLink = ({ IconTag, to, className, iconClass } : FooterLinkProps) => {
  return (
    <Link
      className={cn(
        "size-4 text-neutral-500 hover:text-neutral-700",
        className,
      )}
      to={to}
    >
      <IconTag
        className={cn(
          "h-4 w-4 text-neutral-500 hover:text-neutral-700",
          iconClass,
        )}
      />
    </Link>
  );
};

