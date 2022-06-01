import logo from "./logo.svg";
import "./App.css";
import Users from "./components/User";
import Posts from "./components/Posts";
import Friends from "./components/Friends";
// import Inputfield from "./components/inputfield";
function App() {
  return (
    <div className="App">
      <br />
      <Users />
      {/* <Friends /> */}
      {/* <Posts /> */}
    </div>
  );
}

export default App;
