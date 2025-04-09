import React from "react";
import {
  HomeContainer,
  ContentWrapper,
  Photo,
  TextContent,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
} from "./HomeStyle.js";

const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <Photo src="logos/photo.JPG" alt="Profile" />
        <TextContent>
          <HeroTitle>Sushant Singh</HeroTitle>
          <HeroSubtitle>
            Backend Developer at heart <br /> Hardstuck{" "}
            <span style={{ color: "#D2A560" }}>Bronze</span> by profession{" "}
          </HeroSubtitle>
          <a
            href="https://github.com/sushant7326"
            target="_blank"
            rel="noreferrer"
          >
            <CTAButton>Tech Stacks</CTAButton>
          </a>
        </TextContent>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
