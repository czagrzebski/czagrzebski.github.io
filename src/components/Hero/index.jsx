import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
    FaGraduationCap,
    FaGithub,
    FaLinkedin,
    FaFileAlt,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { socialLinks } from "config";
import Globe from "react-globe.gl";

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    gap: 50px;

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
            border: 2px solid
                ${({ theme }) => theme.palette.secondaryColorPrimary};
            background-color: ${({ theme }) =>
                theme.palette.hoverSecondaryColor};
            cursor: pointer;
        }
    }
`;

const Introduction = styled.div`
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

const GlobeDiv = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
`;

const Hero = () => {
    const globeEl = useRef()

    useEffect(() => {
        const globeInstance = globeEl.current
        globeInstance.controls().autoRotate = true
        globeInstance.controls().autoRotateSpeed = 2.5

        // disable scroll zoom
        globeInstance.controls().enableZoom = false

        // Disable click and drag
        globeInstance.controls().enablePan = false

        // Set Initial Globe Position
        globeInstance.pointOfView({ lat: 44.5236, lng: -89.5746, altitude: 2 }, 0)
    }, [])
    return (
        <Container>
            <Introduction>
                <h1> Hi, I'm Creed Zagrzebski. </h1>
                <p>
                    I am a passionate student and developer interested in
                    Software Engineering, Computer Science, and Robotics. I
                    enjoy learning new technologies and applying them to create
                    real-world applications.
                </p>
                <p>
                    <HiLocationMarker /> Stevens Point, Wisconsin
                </p>
                <p>
                    <FaGraduationCap /> Computer Science Student at the
                    University of Wisconsin-La Crosse
                </p>
                <SocialButtons>
                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>
                            <FaGithub /> Github
                        </button>
                    </a>
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>
                            <FaLinkedin /> LinkedIn
                        </button>
                    </a>
                    <a
                        href={socialLinks.resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>
                            <FaFileAlt /> Resume
                        </button>
                    </a>
                </SocialButtons>
            </Introduction>
            <GlobeDiv>
                <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    backgroundColor="rgba(0,0,0,0)"
                    width={600}
                    height={600}
                    labelsData={[
                        { lat: 44.5236, lng: -89.5746, text: "Stevens Point, Wisconsin"},
                    ]}
                    labelSize={2}
                    labelDotRadius={1}
                />
            </GlobeDiv>
        </Container>
    );
};

export default Hero;
