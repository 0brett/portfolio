import React from 'react';

import { Pane, Button, Heading, Paragraph, Text, Strong } from 'evergreen-ui';

const Card = props => {
  return (
    <Pane
      flex="0 0 30%"
      border="default"
      margin={8}
      marginBottom={16}
      padding={8}
      borderRadius={4}
    >
      <img src={props.img} style={{ marginBottom: '8px', width: '100%' }} />
      <Pane marginBottom={8}>
        <Heading marginBottom={4} size={400}>
          <span
            style={{
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '.5px'
            }}
          >
            {props.title}
          </span>
        </Heading>
        <Paragraph marginBottom={4}>{props.desc}</Paragraph>
        <Paragraph marginBottom={4}>
          <Strong>Tech Used:</Strong> {props.tech}
        </Paragraph>
        <Text marginBottom={4}>
          <Strong>Role:</Strong> {props.role}
        </Text>
      </Pane>
      <Pane>
        <Button
          is="a"
          target="_blank"
          href={props.app}
          appearance="primary"
          marginRight={8}
          iconBefore="application"
        >
          View App
        </Button>
        <Button is="a" target="_blank" href={props.code} iconBefore="code">
          View Code
        </Button>
      </Pane>
    </Pane>
  );
};

export default Card;
