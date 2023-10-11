import "./App.css"
import Message from "./components/Message/message"
import Header from "./components/Header/header"

function App() {

  return (
    <div id="container" className="bg-grey text-grey-text p-20 h-screen">
      <Header />
      <Message />
    </div>  
  )
}

export default App
