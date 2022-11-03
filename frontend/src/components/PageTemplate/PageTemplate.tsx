import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';

type Props = {
    children: React.ReactNode;
    showHeader?: boolean
};

const PageTemplate = ({ children, showHeader = true} : Props) => (
    <>  
        <Helmet>
            <title>Connect Church</title>
            <meta name="description" content="connect-church, church, acc, connect, worship" />
        </Helmet>
        {showHeader && <Header />}
        <div>
            {children}
        </div>
    </>
);

export default PageTemplate;