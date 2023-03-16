import React from 'react'
import {ImQuotesLeft} from "react-icons/im";
const TestaCard = () => {
  return (
    <div className='testa_card'>
    <div className='test_comment'>
    <ImQuotesLeft className='testa_icon'/>
      <p>Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management</p>
      <h4>March 13,2023</h4>
    </div>
      <div className='test_user'>
          <img src='./images/comment.jpg' alt='user'/>
          <div className='text_user_details'>
          <h4>jhon doe</h4>
          <p>Director of company</p>
          </div>
      </div>
  </div>
  )
}

export default TestaCard