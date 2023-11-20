import Cards from '../Cards/Cards'
import BasicTable from '../Table/Table'
import './Main.css'

const Main = () => {
  return (
    <div className='mainDash'>
      <h1 className='header'>Dashboard</h1>
       <Cards />
       <BasicTable/>
    </div>
  )
}

export default Main