import React from 'react';

import { Avatar, Paragraph } from 'evergreen-ui';

const Intro = () => {
  return (
    <div className="intro">
      <Avatar
        src="/profile.jpg"
        name="Brett Flora"
        size={120}
        border="1px solid #234361"
        marginX={16}
        marginBottom={12}
      />
      <Paragraph maxWidth="25rem" size={500} paddingX={16} marginBottom={12}>
        I'm a full stack engineer with fluency in React, Node, Express, SQL, and
        the entirety of the Design discipline. I have almost a decade of
        experience in tech and previously was a Lead Product Designer.{' '}
      </Paragraph>
      <style jsx>{`
        .intro {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
        @media (min-width: 550px) {
          .intro {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
