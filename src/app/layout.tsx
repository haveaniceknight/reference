// layout.tsx
import React from 'react';
import Link from 'next/link';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                {/* Header content here */}
            </header>
            <nav className="navigation-bar">
                <Link href="/now" className="nav-item nav-item--active">now</Link>
                <Link href="/message" className="nav-item">message</Link>
                <Link href="/new-post" className="nav-item">new post</Link>
                <Link href="/profile" className="nav-item">profile</Link>
                {/* ... other nav items ... */}
            </nav>
            <main>{children}</main>
            <footer>
                {/* Footer content here */}
            </footer>
        </>
    );
};

export default Layout;
