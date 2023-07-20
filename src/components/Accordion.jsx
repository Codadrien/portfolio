import React, { useState } from 'react'
import '../styles/Accordion.scss'

function Accordion({ title, content }) {
  const [active, setActive] = useState(false)

  const handleToggle = (e) => {
    setActive(!active)
  }
  return (
    <div className={`accordion ${active && 'active'}`}>
      <div className="accordion__title" onClick={handleToggle}>
        {title}
      </div>
      <div className="accordion__content">
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          : content}
      </div>
    </div>
  )
}

export default Accordion
