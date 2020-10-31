import * as React from 'react'
import ImgWithFallback from './ImgWithFallback'

export default function Project(props) {
  return (
    <div className="card">
      <ImgWithFallback
        src={`/${props.img}.webp`}
        fallback={`/${props.img}.jpg`}
        alt={props.alt}
      />
      <div className="sources">
        <a target="_blank" href={props.app}>
          Live App
        </a>
        <a target="_blank" href={props.code}>
          Github
        </a>
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}
