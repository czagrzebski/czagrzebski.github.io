import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { socialLinks } from "config";

const Container = styled.section`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    gap: 20px;
    margin-top: 100px;

    color: ${({ theme }) => theme.palette.primaryColorLightest}; 
    
    padding-left: 400px;
    padding-right: 300px;

    h1 {
        font-size: ${({ theme }) => theme.font.heading};
    }

    p {
        font-size: ${({ theme }) => theme.font.lg};
    }

`;

const SocialButtons = styled.div`
    display: flex;
    gap: 20px;
  
    button {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.palette.primaryColorLightest};
        text-decoration: none;
        color: ${({ theme }) => theme.palette.primaryColorLightest};
        padding: 8px 16px;
        transition-duration: 0.8s;

        &:hover {
            color: ${({ theme }) => theme.palette.secondaryColorPrimary};
            border: 2px solid ${({ theme }) => theme.palette.secondaryColorPrimary};
            background-color: ${({ theme }) => theme.palette.hoverSecondaryColor};
          
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
                <p>I am a passionate student and developer interested in Software Engineering and Computer Science. I enjoy learning new technologies and applying them to create real-world applications.</p>
                <p>
                    <FaGraduationCap /> Computer Student Student at the University of Wisconsin-La Crosse
                </p>
                <SocialButtons>
                    <a href={socialLinks.github} target="_blank"><button><FaGithub/> Github</button></a>
                    <a href={socialLinks.linkedin} target="_blank"><button><FaLinkedin/> LinkedIn</button></a>
                    <a href={socialLinks.resume} target="_blank"><button><FaFileAlt/> Resume</button></a>
                </SocialButtons>
            </div>
            <PlaceHolder>
                Placeholder 
            </PlaceHolder>
        </Container>
    )
}

export default Hero;


