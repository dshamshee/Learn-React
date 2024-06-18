import { useState } from "react"


function App() {
 
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
      <div id="baar" className="flex flex-wrap justify-center gap-3 shadow-xl bg-white p-3 rounded-lg"> 

        <button className="border border-black rounded-lg px-2 text-white outline-none bg-red-600" 
        onClick={() => setColor("red")} >
          Red</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-green-600" 
        onClick={() => setColor("green")} >
          Green</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-blue-600" 
        onClick={() => setColor("blue")} >
          Blue</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none" style={{backgroundColor: "olive"}} 
        onClick={() => setColor("olive")} >
          Olive</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-gray-600" 
        onClick={() => setColor("gray")} >
          Gray</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-yellow-600" 
        onClick={() => setColor("yellow")} >
          Yellow</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-pink-600" 
        onClick={() => setColor("pink")} >
          Pink</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-purple-600" 
        onClick={() => setColor("purple")} >
          Purple</button>
        <button className="border border-black rounded-lg px-2 text-black outline-none" style={{backgroundColor: "lavender"}} 
        onClick={() => setColor("lavender")} >
          Lavender</button>
        <button className="border border-black rounded-lg px-2 text-black outline-none bg-white" 
        onClick={() => setColor("white")} >
          White</button>
        <button className="border border-black rounded-lg px-2 text-white outline-none bg-black" 
        onClick={() => setColor("black")} >
          Black</button>

        </div>


    </div>

   </div>
  )
}

export default App
