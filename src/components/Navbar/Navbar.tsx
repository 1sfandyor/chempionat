import React from 'react';
import { NavItem } from '@/config/constants/Navbar';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {NavItem.map(item => (
          <li key={item.id}>
            <Link href={item.route}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
