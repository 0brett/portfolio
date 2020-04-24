import React from 'react';

import Project from './Project';

const Body = () => {
  return (
    <div className="grid">
      <Project
        img="/poem.jpg"
        title="Horse_eBooks Poem Generator"
        desc="React using React Router for generating a poem from the historical tweets of famous spam-bot Twitter account, @horse_ebooks. Uses Node/Express to dynamically save generated poems to a URL UUID in a SQLite3 database."
        tech="React, React Router, Node.js, Express.js, Knex, SQLite"
        role="Full Stack Development, Design"
        app="https://epoems.herokuapp.com"
        code="https://github.com/notbrett/horse_epoems"
      />
      <Project
        img="/bible.jpg"
        title="Bible Translation Medley"
        desc='Single Page React App to fetch Bible text from various APIs and allow a user to dynamically "swap" individual verses in context with different translations. Uses Redux for state management and Node/Express API.'
        tech="React, Redux, Redux Thunk, Node.js, Express.js"
        role="Full Stack Development, Design"
        app="https://medley.now.sh"
        code="https://github.com/notbrett/translation-medley"
      />
      <Project
        img="/tools.jpg"
        title="Foreman Tool Tracker"
        desc="Built a mobile-first React app for a construction company's foreman to be able to easily view, report, and request tools from the company's central Shop. Uses Airtable on the backend."
        tech="React, React Router, Bootstrap/Reactstrap, Airtable"
        role="Full Stack Development, Design"
        app="https://tmtools.now.sh"
        code="https://github.com/notbrett/tools"
      />
      <Project
        img="/nasa.jpg"
        title="NASA's Photo of the Day"
        desc="React app using the official NASA API and Moment.js for date traversal. Shows the NASA space photo of the day and allows for going back to previous day’s photos."
        tech="React"
        role="Development"
        app="https://brett-apod.netlify.com"
        code="https://github.com/notbrett/nasa-photo-of-the-day"
      />
      <Project
        img="/wedding.jpg"
        title="Wedding Planner Portfolio"
        desc="The Marketing/Landing page for potential clients of a Wedding Planner."
        tech="HTML, LESS, Flexbox, Grid"
        role="Development"
        app="https://weddinghome.netlify.com"
        code="https://github.com/Build-Week-Wedding-Planner-Portfolio/Marketing"
      />
      <Project
        img="/code.jpg"
        title="Simple Calculator"
        desc="HTML, CSS, and JavaScript with logic to match the “basic” calculators from the 80s/90s and the default one on the iPhone."
        tech="React, Flexbox, Grid"
        role="Development"
        app="https://brett-calc.netlify.com"
        code="https://github.com/notbrett/lambda-calculator"
      />
    </div>
  );
};

export default Body;
