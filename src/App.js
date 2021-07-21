import "./App.css";

import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import CardsContainer from "./components/layout/CardsContainer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <CardsContainer
                hasIcons={true}
                title="Ações perto de você esse mês"
            ></CardsContainer>
            <CardsContainer
                hasIcons={false}
                title="Encontre ações solidárias de acordo com a sua causa"
            ></CardsContainer>
        </div>
    );
}

export default App;
