import React from 'react';

import { Pane, Text } from 'evergreen-ui';
import Card from './Card';

const Body = () => {
  return (
    <Pane
      display="flex"
      flexFlow="row wrap"
      justifyContent="space-between"
      marginBottom={16}
    >
      <Card
        img="/code.jpg"
        title="Horse_eBooks Poem Generator"
        desc="Mobile-first React with React Router app for generating a poem from the historical tweets of Twitter account @horse_ebooks."
        tech="React, React Router, Node.js, Express.js, Knex, SQLite"
        role="Development, Design"
        app="https://epoems.glitch.me/"
        code="https://github.com/notbrett/horse_epoems"
      />
      <Card
        img="/code.jpg"
        title="Bible Translation Medley"
        desc="Single Page React App to fetch Bible text and allow a reader to dynamically “swap” individual verses in context with different translations."
        tech="React, Redux, Redux Thunk, Node.js, Express.js"
        role="Development, Design"
        app="https://medley.glitch.me/"
        code="https://github.com/notbrett/translation-medley"
      />
      <Card
        img="/code.jpg"
        title="Foreman Tool Tracker"
        desc="Mobile-first React app for a construction company’s foreman to be able to easily view, report, and request tools from the company’s central Shop."
        tech="React, React Router, Bootstrap/Reactstrap, Airtable"
        role="Development, Design"
        app="https://tmtools.now.sh"
        code="https://github.com/notbrett/tools"
      />
    </Pane>
  );
};

export default Body;
