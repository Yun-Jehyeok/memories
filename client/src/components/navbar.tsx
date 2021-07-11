import React from 'react';
import Container from '@material-ui/core/Container';
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.div`
    bottom: 0;
`;

const Bar = styled.div`
    background: transparent;
    height: 10vh;
`;

const Header = () => {
    return(
        <Navbar className="sticky-top">
            <Bar>
            <FontAwesomeIcon icon={faBars} style={{color: "#FFFFFF", fontSize: "2em", float: "right", margin: "30px", cursor: "pointer"}}/>
            </Bar>
        </Navbar>
    );
};

export default Header;