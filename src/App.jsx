import Main from './components/MainDash/Main'
import RightSidebar from './components/RightSide/RightSidebar'
import Sidebar from './components/Sidebar'
import './index.css'

const App = () => {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar />
        <Main />
        <RightSidebar/>
      </div>
    </div>
  )
}

export default App