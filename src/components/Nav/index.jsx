import React from "react";
import styled from "styled-components";
import { navLinks } from "config";
import { FaGithub } from "react-icons/fa";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding-right: 50px;
  padding-left: 50px;

  .logo {
    color: ${({ theme }) => theme.palette.primaryColorLightest};
  }
`;

const StyledLinks = styled.div`
  display: flex;
  margin-left: auto;

  /* Hide on mobile view */
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
    margin: 10px 0;

    a {
      display: inline-block;
      text-decoration: none;
      padding: 10px;

      color: ${({ theme }) => theme.palette.primaryColorLightest};

      &::after {
        display: block;
        content: "";
        border-bottom: solid 3px
          ${({ theme }) => theme.palette.primaryColorLightest};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
      }

      &:hover::after {
        transform: scaleX(1);
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
      <div className="logo">
        <h2>Creed Zagrzebski</h2>
      </div>

      <StyledLinks>
        {/* Dynamically Generate Links */}
        <ul>
          {navLinks?.map(({ name, url }) => {
            return (
              <li>
                <a href={url}>{name}</a>
              </li>
            );
          })}
        </ul>
      </StyledLinks>
    </StyledNav>
  );
};

export default Nav;
