import React from "react";
import Banner from "../layout/Banner";
import CardsContainer from "../layout/CardsContainer";

function Home() {
    return (
        <React.Fragment>
            <Banner></Banner>
            <CardsContainer
                hasIcons={true}
                title="Ações perto de você esse mês"
            ></CardsContainer>
            <CardsContainer
                hasIcons={false}
                title="Encontre ações solidárias de acordo com a sua causa"
            ></CardsContainer>
        </React.Fragment>
    );
}

export default Home;
