import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";

const Page = styled.div`
    background: #1A1A1A;
    height: 100vh;
    width: 100%;
`;
const Year = styled.div`
    color: #2D2D2D;
    text-align: center;
`;

const Text = styled.p`
    font-size: 10em;
`

const Redtext = styled.span`
    color: #FF0000;
`;

const Info = styled.div`
    color: #FFFFFF;
`;

const History = () => {
    return(
        <>
            <Page>
                <div className="row" style={{height: "100vh"}}>
                    <Year className="col align-self-center">
                        <FontAwesomeIcon icon={faChevronUp} style={{color: "#FF0000", fontSize: "2em"}}/>
                        <Text>19
                            <Redtext>
                                50
                            </Redtext>
                        </Text>
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#FF0000", fontSize: "2em"}}/>
                    </Year>
                    <Info className="col align-self-center">
                        <Row>
                            <Col style={{textAlign: "left"}}>6월 25일 &nbsp;&nbsp;&nbsp;북한군 전면 남침</Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: "left"}}>6월 28일 &nbsp;&nbsp;&nbsp;북한군 서울 점령</Col>
                        </Row>
                    </Info>
                </div>
            </Page>
        </>
    );
}

export default History;