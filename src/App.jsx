import "./App.css";
import Header from "./components/Header/header";
import Projet from "./components/Projet/projet";
import Message from "./components/Message/message";
import Footer from "./components/Footer/footer";
import Technos from "./components/Technos/technos";

function App() {
  return (
    <div
      id="container"
      className="bg-grey text-grey-text h-screen max-w-full flex flex-col overflow-scroll items-center"
    >
      <div className="inner-container flex flex-col justify-between w-10/12 md:w-screen md:p-20">
        <Header />
        <div className="projects flex flex-col md:flex-row">
          <Message />
          <Projet />
        </div>
        <Technos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
