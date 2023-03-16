import React from 'react'

const ExpBarCard = ({heading,smallH}) => {
  return (
    <div className="exp_bar">
    <div className="exp_bar_card">
      <div className="exp_bar_cdesc">
        <h6>{heading}</h6>
        <span>{smallH}</span>
      </div>
      <div className="exp_bar_line"><div className="exp_fillbar" style={{width:smallH}}></div></div>
    </div>
  </div>
  )
}

export default ExpBarCard;