import { RxCross2 } from "react-icons/rx";
import {useLocation} from "react-router-dom"
const Porths = ({hide}) => {
    const params=useLocation()
  return (
    <>
        <div className='porths_con'>
        <div className='porths_icon'>
        <RxCross2 className="portCross" onClick={hide}/>
        <img src={`./images/${params.state.img}`} alt='port'></img>
        <div className='porths_desc'>
            <h6>Featured - <span>{params.state.head}</span></h6>
            <h4>Modern Design for Website And also for other</h4>
            <p>Web development refers to the building, creating, and maintaining of websites. It includes aspects </p>
            <h6>Created - <span>13 march 20223</span></h6>
            <h6>Technologies - <span>React</span></h6>
            <h6>Role - <span>React developer</span></h6>
            <h6 className='porthsh6last'>View - <span>www.ankur.com</span></h6>
        </div>
        </div>
        </div>
    </>
  )
}

export default Porths