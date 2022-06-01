import logo from "./logo.svg";
import "./App.css";
import Users from "./components/User";
import Posts from "./components/Posts";
import Friends from "./components/Friends";
function App() {
  return (
    <div className="App">
      <Users />
      <Friends />
      <Posts />
    </div>
  );
}

export default App;
