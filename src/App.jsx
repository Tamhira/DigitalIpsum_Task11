import './App.css'
import Sidebar from './components/Sidebar'
import Search from './components/Search'
import Top from './components/Top'
import Bottom from './components/Bottom'
function App() {

  return (
    <>
    <div className='bg-[#F6F8FE] p-8 flex'>
      <Sidebar></Sidebar>
      <div className=''>
        <div><Search></Search></div>
        <div ><Top></Top></div>
        <div><Bottom></Bottom></div>
      </div>
    </div>
      
    </>
  )
}

export default App
