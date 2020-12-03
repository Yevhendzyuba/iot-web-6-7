import React from 'react';
import {Container, CardWrappers, CardWrapper} from "../../components/Global.styled";
import {IntroWrapper,IntroLogo,IntroText,IntroTextTitle,IntroTextDescription,CardButtonWrapper} from "./Home.styled";
import Cosmetology from "../../icons/homepage_logo.jpg";
import {data} from "../../components/data";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";



function Home() {
    return (
        <Container>
            <IntroWrapper>
                <IntroLogo src = {Cosmetology} alt="CosmetologyLogoIntro"></IntroLogo>
                <IntroText>
                    <IntroTextTitle>Ella Bella Cosmetology</IntroTextTitle>
                    <IntroTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.<br/> Dignissimos
                        et expedita iure minus
                        temporibus. Asperiores blanditiis<br/> corporis dolore earum fugit laudantium nam perspiciatis,
                        reiciendis<br/> repellendus unde. Atque delectus exercitationem
                        ratione.</IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardWrapper>
                {data.map(({cosmetologyName,forWhat,capacityInMl,price},idx) => (
                    <Card
                        cosmetologyName = {cosmetologyName}
                        forWhat = {forWhat}
                        capacityInMl = {capacityInMl}
                        price = {price}
                    />
                ))}
            </CardWrapper>
            <CardButtonWrapper>
                <Button buttonText="View more" backgroundColor="#ffb6c1" color="#fff" fontSize="16" padding="17px 50px" border="none" />
            </CardButtonWrapper>
        </Container>

    );
}


export default Home;