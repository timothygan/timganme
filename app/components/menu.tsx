import './../styles/animation.css'
import './../styles/layout.css'
import * as React from 'react'

interface NavHandler {
  navHandler: Function;
}
export default function Menu({children}:{
  children: React.ReactNode[]
}) {
  return (
    <ul>
      {children.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function MenuItem({children}:{
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    );
}

