"use client"

import { useParams, useSearchParams,  } from "next/navigation";
import Link from "next/link";
import { ReactNode, HTMLProps } from "react";

interface NavLinkProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, className = "", ...props }) => {
  const param = useSearchParams()
  const path = param.get('tab') 

  
  return (
    <Link
      className={`?tab=${path}` === href ? `active ${className}` : className}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
