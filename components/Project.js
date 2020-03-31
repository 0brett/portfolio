import React from 'react';

export default function(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="sources">
        <a target="_blank" href={props.app}>
          View App
        </a>
        <a target="_blank" href={props.code}>
          View Code
        </a>
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <p>
          <strong>Tech Used: </strong>
          {props.tech}
        </p>
        <p>
          <strong>Role: </strong>
          {props.role}
        </p>
      </div>
    </div>
  );
}
