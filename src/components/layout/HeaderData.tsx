import React from "react";
import Link from 'next/link'

export const NavItems = () => {

  const navItems = [
    { name: 'Home', to: '/' }, // Using a string for to (optional with anchor tags)
    { name: 'products', to: '/product' },

  ];

  const renderNavItem = (item: { name: string; to: string }) => (
    <li key={item.name}>
        <Link href={item.to}>{item.name}</Link>

    </li>
  );

  return (
    <ul>
      {navItems.map(renderNavItem)}
    </ul>
  );
};
