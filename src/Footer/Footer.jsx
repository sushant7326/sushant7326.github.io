import React from "react";
import {
  FooterContainer,
  IconContainer,
  FooterIcon,
  FooterText,
} from "./FooterStyle";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";

const handleEmailClick = (e) => {
  e.preventDefault();
  window.open(`mailto:${process.env.REACT_APP_EMAIL}`, "_blank");
};

// const style_left = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-evenly",
//   textAlign: "left",
//   alignItems: "flex-start",
//   height: "100%",
// };

const style_right = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  textAlign: "left",
  alignItems: "flex-end",
  height: "100%",
};

export default function Footer() {
  return (
    <FooterContainer>
      {/* <div style={style_left} className="text-left">
        <FooterText>
          built on top of <span></span>{" "}
        </FooterText>
        <FooterText>
          inspired by the ONE TRUE GAWD{" "}
          <span>
            {" "}
            <a href="https://sneaky-potato.github.io/" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>🙇🏻🛐</a>
          </span>{" "}
        </FooterText>
      </div> */}
      <IconContainer>
        <a
          href={process.env.REACT_APP_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterIcon>
            <span className="top-left-corner"></span>
            <span className="bottom-right-corner"></span>
            <FaGithub />
          </FooterIcon>
        </a>
        <a
          href={process.env.REACT_APP_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterIcon>
            <span className="top-left-corner"></span>
            <span className="bottom-right-corner"></span>
            <FaLinkedin />
          </FooterIcon>
        </a>
        {/* <a href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer">
          <FooterIcon>
            <span className="top-left-corner"></span>
            <span className="bottom-right-corner"></span>
            <FaTwitter />
          </FooterIcon>
        </a> */}
        <a
          href={process.env.REACT_APP_EMAIL}
          onClick={handleEmailClick}
          rel="noopener noreferrer"
        >
          <FooterIcon>
            <span className="top-left-corner"></span>
            <span className="bottom-right-corner"></span>
            <FaAt />
          </FooterIcon>
        </a>
      </IconContainer>
      <div style={style_right}>
        <FooterText>
          e-mail id: <span>{process.env.REACT_APP_EMAIL}</span>{" "}
        </FooterText>
      </div>
    </FooterContainer>
  );
}
