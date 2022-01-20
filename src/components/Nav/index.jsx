import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    
`

const StyledLinks = styled.div`
    display: flex;

    //Hide on mobile view
    @media (max-width: 768px) {
        display: none;
    }
`

const Nav = () => {
    return (
        <StyledNav>
            <StyledLinks>
                {/* Dynamically Generate Links */}
            </StyledLinks>
        </StyledNav>
    )
}

export default Nav;