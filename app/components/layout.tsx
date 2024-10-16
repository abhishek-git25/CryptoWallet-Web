// components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './header';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
