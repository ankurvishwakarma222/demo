import React, { useState } from 'react'
import Heading from '../components/Heading';
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
const Faq = () => {
    const [shopara,setShowPara]=useState({
        id:0,
    })
  return (
    <>
    <Heading head="Frequently asked question" />
    <div className='faq_con'>
       <div className='faq_card'onClick={()=>{
                setShowPara(()=>{
            return {
                id:1,
            }
    })
       }}>
       <div className={`faq1 ${shopara.id===1?'active':''}`}>
        <h4>How can we contact you</h4>
        {
            shopara.id===1?<BiChevronDown className='faq_icon'/>: <BiChevronRight className='faq_icon'/>
        }
        </div>
       {
        shopara.id===1 &&
        <p>What is a Front-End Developer? A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
       }
       </div>
       <div className='faq_card' onClick={()=>{
                setShowPara(()=>{
            return {
                id:2
            }
    })
       }}>
       <div className={`faq1 ${shopara.id===2?'active':''}`}>
        <h4>How we can contact you ?</h4>
        {
            shopara.id===2?<BiChevronDown className='faq_icon'/>: <BiChevronRight className='faq_icon'/>
        }
        </div>
        {
            shopara.id===2 &&
            <p>What is a Front-End Developer? A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
        }
       </div>
       <div className='faq_card' onClick={()=>{
                setShowPara(()=>{
            return {
                id:3
            }
    })
       }}>
       <div className={`faq1 ${shopara.id===3?'active':''}`}>
        <h4>How we can contact you ?</h4>
        {
            shopara.id===3?<BiChevronDown className='faq_icon'/>: <BiChevronRight className='faq_icon'/>
        }
        </div>
        {
            shopara.id===3 &&
            <p>What is a Front-End Developer? A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
        }
       </div>
       <div className='faq_card' onClick={()=>{
                setShowPara(()=>{
            return {
                id:4
            }
    })
       }}>
       <div className={`faq1 ${shopara.id===4?'active':''}`}>
        <h4>How we can contact you ?</h4>
        {
            shopara.id===4?<BiChevronDown className='faq_icon'/>: <BiChevronRight className='faq_icon'/>
        }
        </div>
        {
            shopara.id===4 &&
            <p>What is a Front-End Developer? A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
        }
       </div>
       <div className='faq_card' onClick={()=>{
                setShowPara(()=>{
            return {
                id:5
            }
    })
       }}>
       <div className={`faq1 ${shopara.id===5?'active':''}`}>
        <h4>How we can contact you ?</h4>
        {
            shopara.id===5?<BiChevronDown className='faq_icon'/>: <BiChevronRight className='faq_icon'/>
        }
        </div>
        {
            shopara.id===5 &&
            <p>What is a Front-End Developer? A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
        }
       </div>
    </div>
    </>
  )
}

export default Faq