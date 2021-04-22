import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from './Header';

const layoutStyle = {
    maxWidth: 650,
};

export const Layout = ({children}) => {
    return (
        <>
          <Helmet
            title="Altmeta.org Pixel Test"
            meta={[
              {
                name: 'description',
                content: 'a website for testing facebook pixel',
              },
              { name: 'keywords', content: 'facebook, pixel' },
              { name: 'author', content: 'Zack Spellman' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div style={layoutStyle}>
            <Header />
            {children}
          </div>
        </>
    );
} 