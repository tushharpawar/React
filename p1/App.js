import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
const App = () => {
  return (
  <>
    <Navbar title="Blog" aboutText="About Us"></Navbar>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse below"></TextForm>
    </div>
  </>
  );
};

export default App;
