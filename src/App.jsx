import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <p>hello world</p>
     <button>Tap me</button>
     <div><img src="https://cdn.forbes.ru/files/1082x683/photo_galleries/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp" alt="" /></div>
    </div>
  )
}

export default App
