import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <div className=" bg_Lightwhite">
        <div style={{ zIndex:" 123 ",position:"relative"}}>
          <Nav />
        </div>
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
