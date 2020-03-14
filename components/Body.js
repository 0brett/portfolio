import React from 'react';

import Project from './Project';

const Body = () => {
  return (
    <div className="grid">
      <Project
        img="/poem.jpg"
        title="Horse_eBooks Poem Generator"
        desc="Mobile-first React with React Router app for generating a poem from the historical tweets of Twitter account @horse_ebooks."
        tech="React, React Router, Node.js, Express.js, Knex, SQLite"
        role="Full Stack Development, Design"
        app="https://epoems.herokuapp.com"
        code="https://github.com/notbrett/horse_epoems"
      />
      <Project
        img="/bible.jpg"
        title="Bible Translation Medley"
        desc="Single Page React App to fetch Bible text and allow a reader to dynamically “swap” individual verses in context with different translations."
        tech="React, Redux, Redux Thunk, Node.js, Express.js"
        role="Full Stack Development, Design"
        app="https://medley.glitch.me"
        code="https://github.com/notbrett/translation-medley"
      />
      <Project
        img="/tools.jpg"
        title="Foreman Tool Tracker"
        desc="Mobile-first React app for a construction company’s foreman to be able to easily view, report, and request tools from the company’s central Shop."
        tech="React, React Router, Bootstrap/Reactstrap, Airtable"
        role="Full Stack Development, Design"
        app="https://tmtools.now.sh"
        code="https://github.com/notbrett/tools"
      />
      <Project
        img="/nasa.jpg"
        title="NASA's Photo of the Day"
        desc="React app that pulls the current Space photo of the day from NASA's API. Back-tracking through dates loosely supported."
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
        desc="Wired up the logic for a simple calculator."
        tech="React, Flexbox, Grid"
        role="Development"
        app="https://brett-calc.netlify.com"
        code="https://github.com/notbrett/lambda-calculator"
      />
      <style jsx>{`
        .grid {
          display: grid;
          margin-bottom: 16px;
        }
        @media (min-width: 550px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 824px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Body;
