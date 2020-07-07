import React from 'react'

import Project from './Project'

const Body = () => {
  return (
    <div className="grid">
      <Project
        img="/poem.jpg"
        title="Horse_eBooks Poem Generator"
        desc="This app enables (somewhat) randomized poem generation from the tweets of defunct Twitter spam-bot @horse_ebooks. The frontend is built with React, React Router and styled using Emotion.js. The backend is built on Node.js with Express.js for API routing. User-generated poems can be saved and later retrieved (when sharing the poem’s unique link) from a PostgreSQL database managed with Knex.js and deployed on Heroku."
        tech="React, React Router, Emotion.js, Node.js, Express.js, Knex.js, PostgreSQL, Heroku"
        role="Full Stack Development, Design"
        app="https://epoems.herokuapp.com"
        code="https://github.com/notbrett/horse_epoems"
      />
      <Project
        img="/bible.jpg"
        title="Bible Translation Medley"
        desc="This app retrieves Bible passages and enables dynamic swapping of individual verses. Each swap is a different translation than the original and is placed in the flow of the original passage. The new, swapped passage is now a medley of various translations providing a unique reading experience and potential new insights on the text. The frontend is built with React, Redux. The backend is built on Node.js with Express.js for API routing and querying different Bible APIs."
        tech="React, Redux, Node.js, Express.js"
        role="Full Stack Development, Design"
        app="https://medley.now.sh"
        code="https://github.com/notbrett/translation-medley"
      />
      <Project
        img="/tools.jpg"
        title="Foreman Tool Tracker"
        desc="The Tool Tracker gives foremen at Total Mechanical, a Vancouver, WA-based construction company, a mobile-first web experience for viewing, reporting, and requesting tools from the central shop while onsite at a job. The shop manages all the tools, tracking, and reporting through Airtable, which acts as the backend. The frontend is built with React, React Router and styled using Bootstrap / Reactstrap. The frontend is deployed on Vercel and consumes the shop’s Airtable API."
        tech="React, React Router, Bootstrap/Reactstrap, Airtable, Vercel"
        role="Full Stack Development, Design"
        app="https://tmtools.now.sh"
        code="https://github.com/TotalMechanical/tools"
      />
    </div>
  )
}

export default Body
