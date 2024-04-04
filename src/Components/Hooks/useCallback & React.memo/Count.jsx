import React from 'react'

const Count = ({text, value}) => {
    console.log(text + " Rendered");
  return (
    <div>
      <h3>{text}: {value}</h3>
    </div>
  )
}

export default React.memo(Count)
