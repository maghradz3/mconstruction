import Link from "next/link";
import React from "react";

const links = [
  { href: "/main", label: "HomePage" },
  { href: "/galery", label: "Gallery" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const NavLinks = () => {
  return (
    <ul className="menu base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link className="capitalize text-secondary" href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
