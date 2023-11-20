import { UpdatesData } from '../../Data/Data'
import './Updates.css'

const Updates = () => {
  return (
    <div className='updates'>
      {UpdatesData.map((update,index)=>{
        return(
            <div key={index} className='update'>
               <img src={update.img} alt='' />
             <div className='not1'>
              <div style={{marginBottom:'0.5rem'}}>
                <span>{update.name} </span><br/>
                <span>{update.notification}</span>
              </div>
                <span>{update.time}</span>
             </div>
             <div>
             </div>
            </div>
        )
      })}
    </div>
  )
}

export default Updates
