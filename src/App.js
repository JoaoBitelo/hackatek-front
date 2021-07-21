import "./App.css";

import Header from "./components/layout/Header";
import CardsContainer from "./components/layout/CardsContainer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <CardsContainer></CardsContainer>
            <CardsContainer></CardsContainer>
        </div>
    );
}

export default App;
