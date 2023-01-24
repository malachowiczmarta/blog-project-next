import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' }
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <nav className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="text-slate-50 hover:text-blue-600">
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>

      <footer>{new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
