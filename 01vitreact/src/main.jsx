import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Welocme to Custom React</h1>
    </div>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Clisk me to visit Google"
// }

const CustomElement = (
  <a href="https://google.com" target='_blank'>Click me visit Google</a>
)

const CustomElement2 = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <MyApp />
    // CustomElement
    CustomElement2
 
)
