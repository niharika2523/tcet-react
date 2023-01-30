import React, { useState } from 'react'

export default function sqr() {
    const [num, setNum] = useState(0);
  return (
    <div>sqr
        <input type="text" onChange= (event => setNum(event.target.value)) />
    </div>
  )
}
