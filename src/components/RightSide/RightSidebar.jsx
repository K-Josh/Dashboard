import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './RightSidebar.css'

const RightSidebar = () => {
  return (
    <div className='RightSide'>
      <div className='right'>
       <h2 className='header'>Updates</h2>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  )
}

export default RightSidebar
