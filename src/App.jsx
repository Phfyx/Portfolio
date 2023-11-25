import "./App.css"
import Header from "./components/Header/header"
import Projet from "./components/Projet/projet"

function App() {

  return (
    <div id="container" className="bg-grey text-grey-text p-20 h-screen w-screen">

      <Header />
      <div className="container flex flex-col md:flex-row p-20">
        <Projet />
      </div>
      <span> W.I.P </span>
    </div>  
  )
}

export default App
