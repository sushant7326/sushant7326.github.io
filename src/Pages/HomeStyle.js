import styled from "styled-components";

export const HomeContainer = styled.div`
  /* Ensure the content scrolls behind the sticky footer if content overflows */
  min-height: calc(100vh - 110px);
  //   background: linear-gradient(135deg, #242424, #1a1a1a);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 0; /* so content stays behind the footer's z-index if needed */
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Photo = styled.img`
  width: 300px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 250px;
    margin-bottom: 1rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #fff;
  color: #1a1a1a;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-3px);
  }
`;