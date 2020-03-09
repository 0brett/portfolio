import React from 'react';

import { Pane, Text } from 'evergreen-ui';

const Footer = () => {
  const currentYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(new Date());

  return (
    <Pane
      display="flex"
      justifyContent="center"
      background="tint2"
      padding={24}
      borderRadius={4}
    >
      <Text>© {currentYear} 🥑 brettf ‹•› I love 🥑 </Text>
    </Pane>
  );
};

export default Footer;
