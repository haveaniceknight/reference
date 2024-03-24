import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                {/* Header content here */}
            </header>
            <nav>
                {/* Navigation links */}
            </nav>
            <main>{children}</main>
            <footer>
                {/* Footer content here */}
            </footer>
        </>
    );
};

export default Layout;
