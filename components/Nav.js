import React from 'react';

import { Heading, Button } from 'evergreen-ui';

const Nav = () => {
  return (
    <div className="nav">
      <Heading is="h1" size={600}>
        <span className="logo" style={{ fontWeight: '900' }}>
          BRETT FLORA
        </span>
      </Heading>
      <div>
        <Button
          is="a"
          href="https://linkedin.com/in/brett-flora"
          appearance="minimal"
        >
          LinkedIn
        </Button>
        <Button is="a" href="https://github.com/notbrett" appearance="minimal">
          Github
        </Button>
      </div>
      <style jsx>{`
        .nav {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 8px;
        }
        @media (min-width: 356px) {
          .nav {
            flex-direction: row;
          }
          .logo {
            margin-right: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
