import React from 'react'

import Project from './Project'

const Body = () => {
  return (
    <div className="grid">
      <Project
        img="/poem.jpg"
        title="Horse_eBooks Poem Generator"
        desc="React using React Router for generating a poem from the historical tweets of famous spam-bot Twitter account, @horse_ebooks. Uses Node/Express to dynamically save generated poems to a URL UUID in a PostgreSQL database on Heroku."
        tech="React, React Router, Node.js, Express.js, Knex, PostgreSQL, Heroku"
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
    </div>
  )
}

export default Body
