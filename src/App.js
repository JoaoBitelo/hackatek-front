import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Event from "./components/pages/Event";
import Home from "./components/pages/Home";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/event" component={Event}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
