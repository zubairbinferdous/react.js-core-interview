import './App.css'
import Device from './component/Device/Device'
import Watch from './component/Watch/Watch'

function App() {
  
  return (
    <div className='app'>
      <h1>this is me to</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint!</p>
      <Device name = 'IPhone'  phonePrice= '13000'></Device>
      <Device name = 'samsung'  phonePrice= '6754'></Device>
      <Watch></Watch>
    </div>
  )
}

export default App
