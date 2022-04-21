import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { socialLinks } from "config";

const Container = styled.section`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 95vh;

    align-items: center;
    
    padding-bottom: 0;
   

    color: ${({ theme }) => theme.palette.primaryColorLightest}; 
    

    h1 {
        font-size: ${({ theme }) => theme.font.heading};
        text-align: center;
        padding: 0;
        margin: 0;
    }

    p {
      
        text-align: center;
        font-size: ${({ theme }) => theme.font.xxl};
    }

`;

const SocialButtons = styled.div`
    display: flex;
    gap: 20px;

   

    width: 100%;

    justify-content: center ;
  
    button {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.palette.primaryColorLightest};
        text-decoration: none;
        color: ${({ theme }) => theme.palette.primaryColorLightest};
        padding: 10px 18px;
        transition-duration: 0.5s;
        border-radius: 10px;
        font-size: ${({ theme }) => theme.font.xl};

        &:hover {
            color: ${({ theme }) => theme.palette.secondaryColorPrimary};
            border: 2px solid ${({ theme }) => theme.palette.secondaryColorPrimary};
            background-color: ${({ theme }) => theme.palette.hoverSecondaryColor};
            cursor: pointer;
          
        }
        
    }
`;

const PlaceHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    background-color: lightskyblue;
    color: black;
    text-align: center;
`;


const Hero = () => {
    return (
        <Container>
            <div>
                <h1> Hi, I'm Creed Zagrzebski. </h1>
                <p> Site under construction </p>
                <SocialButtons>
                    <a href={socialLinks.github} target="_blank" rel="noreferrer"><button><FaGithub/> Github</button></a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><button><FaLinkedin/> LinkedIn</button></a>
                    <a href={socialLinks.resume} target="_blank" rel="noreferrer"><button><FaFileAlt/> Resume</button></a>
                </SocialButtons>
            </div>
        </Container>
    )
}

export default Hero;


