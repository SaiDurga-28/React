import { useState } from 'react'
import Myimage from './assets/react.svg'
import viteLogo from '/vite.svg'
// import NameComponent from './NameComponent'
// import EmailComponent from './EmailComponent'
// import GenderComponent from './GenderComponent'
import './App.css'
import Component1 from './Component1'
import Component2 from './Component2'
import Component from './Component'
// import FunctionalComponent from './FunctionComponent.jsx'
// import FormComponent from './FormComponent'
// import SkillsComponent from './SkillsComponent'
// import NumberComponent from './NumberComponent'
// import SubmitComponent from './SubmitComponent'

function App() {
  // const [count, setCount] = useState(0)
  // var mycards=[
  //   {"image":Myimage,
  //   "price":1500,
  //   "brand":"Adidas"},
  //    {"image":Myimage,
  //   "price":2000,
  //   "brand":"Puma"},
  //    {"image":Myimage,
  //   "price":1200,
  //   "brand":"RareRabbit"}
  // ]
  var x=true;
  // if(x==true){
  //   return(
  //     <>
  //     <Component1/>
  //     </>
  //   )
  // }
  // else{
  //   return(
  //     <>
  //     <Component1/>
  //     </>
  //   )
  // }
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <h1>App.jsx</h1> */}
      {/* <NameComponent />
      <NumberComponent />
      <EmailComponent />
      <GenderComponent />
      <SkillsComponent />
      <SubmitComponent /> */}
      {/* <div className="parent">
      {
        mycards.map(ele=>{
           return <FunctionalComponent data={ele}/>
        })
}
</div> */}
{/* <Component1/>
<Component2/>
{
  x==false ? <Component1/> : <Component2/>
} */}
<Component/>
    </>
  )
}

export default App
