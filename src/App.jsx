import "./App.css"
import Header from "./components/Header/header"
import Projet from "./components/Projet/projet"
import Message from "./components/Message/message"

function App() {

  return (
    <div id="container" className="bg-grey text-grey-text h-screen max-w-full flex flex-col overflow-hidden items-center">

      
      <div className="inner-container flex flex-col justify-between p-20 max-w-7xl w-screen">
        <Header />
        <div className="projects flex flex-col md:flex-row">
        <Message/>
        <Projet />
        </div>
        
      </div>
      <footer className="absolute bottom-0"> WIP </footer>
    </div>  
  )
}

export default App
