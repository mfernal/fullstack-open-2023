// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name} you're {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = 'Manuel'
  const age = '29'
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Manuel' age={29 + 10}/>
      <Hello name={name} age={age}/>
      <Hello name='Jimena'/>
    </div>
  )
}

export default App