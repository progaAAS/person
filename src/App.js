import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import PreviewPage from "./Page/PreviewPage/PreviewPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/preview" component={ PreviewPage }/>
      </Switch>
    </div>
  );
}

export default App;