import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { socialLinks } from "config";

const Container = styled.section`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;

    color: ${({ theme }) => theme.palette.primaryColorLightest}; 
    
    padding-left: 400px;
    padding-right: 300px;

    h1 {
        font-size: ${({ theme }) => theme.font.heading};
    }

    p {
        font-size: ${({ theme }) => theme.font.xl};
    }

    overflow: auto;

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
        transition-duration: 0.6s;

        &:hover {
            color: ${({ theme }) => theme.palette.secondaryColorPrimary};
            border: 2px solid ${({ theme }) => theme.palette.secondaryColorPrimary};
            background-color: ${({ theme }) => theme.palette.hoverSecondaryColor};
            cursor: pointer;
          
        }
        
    }
`;

const Text  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    height: 100%;
    gap: 15px;

    p {
        margin: 0;
    }

    h1 {
        margin: 0;
    }


`;


const PlaceHolder = styled.div`;

`;


const Hero = () => {
    return (
        <Container>
            <Text>
                <h1> Hi, I'm Creed Zagrzebski. </h1>
                <p>I am a passionate student and developer interested in Software Engineering, Computer Science, and Robotics. I enjoy learning new technologies and applying them to create real-world applications.</p>
                <p>
                    < HiLocationMarker  /> Wisconsin, USA
                </p>
                <p>
                    <FaGraduationCap /> Computer Science Student at the University of Wisconsin-La Crosse
                </p>
                <SocialButtons>
                    <a href={socialLinks.github} target="_blank" rel="noreferrer"><button><FaGithub/> Github</button></a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><button><FaLinkedin/> LinkedIn</button></a>
                    <a href={socialLinks.resume} target="_blank" rel="noreferrer"><button><FaFileAlt/> Resume</button></a>
                </SocialButtons>
            </Text>
            <PlaceHolder>
            
            </PlaceHolder>
        </Container>
    )
}

export default Hero;


