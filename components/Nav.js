import React from 'react';

import { Pane, Heading, Button } from 'evergreen-ui';

const Nav = () => {
  return (
    <>
      <Pane display="flex" margin={8}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading is="h1" size={600}>
            <span style={{ fontWeight: '900' }}>BRETT FLORA</span>
          </Heading>
        </Pane>
        <Pane display="flex">
          <Button
            is="a"
            href="https://linkedin.com/in/brett-flora"
            appearance="minimal"
          >
            LinkedIn
          </Button>
          <Button
            is="a"
            href="https://github.com/notbrett"
            appearance="minimal"
          >
            Github
          </Button>
        </Pane>
      </Pane>
    </>
  );
};

export default Nav;
