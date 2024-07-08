import "./App.css";
import Footer from "./Components/Footer/Footer.js";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp.jsx"; // Import the LoginPage component
import Main from "./Components/Main/Main.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <LoginSignUp />
      <Main />
      <Footer />
      
    </div>
  );
};

export default App;
