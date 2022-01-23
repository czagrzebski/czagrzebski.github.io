import React from "react";
import styled from "styled-components";
import { navLinks } from "config";
import { FaGithub } from "react-icons/fa";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: center;

  /* Hide on mobile view */
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    list-style-type: none;
    margin: 10px 0;
    padding: 0;

    a {
      display: inline-block;
      text-decoration: none;
      padding: 10px;

      color: ${({ theme }) => theme.palette.primaryColorLightest};

      &::after {
        display: block;
        content: '';
        border-bottom: solid 3px ${({ theme }) => theme.palette.primaryColorLightest};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
      }

      &:hover::after {
        transform: scaleX(1)
      }

      &:hover::before {
        width: 100%;
      }
    }

  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLinks>
        {/* Dynamically Generate Links */}
        <ul>
          {navLinks &&
            navLinks.map(({ name, url }) => {
              return <li><a href={url}>{name}</a></li>;
            })}
        </ul>
      </StyledLinks>
    </StyledNav>
  );
};

export default Nav;
