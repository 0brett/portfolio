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
      margin={8}
      marginBottom={24}
      padding={8}
      borderRadius={4}
    >
      <Text>© {currentYear} 🥑brettf ‹•› Crafted by Hand-ish</Text>
    </Pane>
  );
};

export default Footer;
