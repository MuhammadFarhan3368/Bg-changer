import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className="w-screen h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-5 bg-slate-100 rounded-3xl p-2 shadow-3xl'>

        <button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}
        >Red</button>

<button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >green</button>

        <button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}
        >Blue</button>

        <button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"violet"}}
        onClick={()=>setColor("violet")}
        >Violet</button>

        <button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"indigo"}}
        onClick={()=>setColor("indigo")}
        >Indigo</button>

        <button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"orange"}}
        onClick={()=>setColor("orange")}
        >Orange</button>

        <button className='bg-red-600 outline-none text-white py-0 px-5 shadow-lg'
        style={{backgroundColor:"yellow"}}
        onClick={()=>setColor("yellow")}
        >Yellow</button>
        </div>

      </div>
    </div>
  )
}

export default App
