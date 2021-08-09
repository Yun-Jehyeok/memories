import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'reactstrap';
import { Page, Year, Text, Redtext, Info, Column } from './styles';

// json 파일 //
import AprilRevolution from 'file/419.json';
import MayRevolution from 'file/518.json';
import JuneWar from 'file/625.json';
import ModernIncidient from 'file/근현대.json';
import VietnamWar from 'file/월남전.json';
import JapanOccupation from 'file/일제강점기.json';

const History = () => {
  const [count, setCount] = useState(50);
  const onCountUp = () => {
    setCount(count + 1);
  };
  const onCountDown = () => {
    setCount(count - 1);
  };

  const AprilArrayData = AprilRevolution.map((incident, index) => {
    return (
      <Row key={index[0]}>
        <Column className="col-2" style={{ paddingLeft: '20px' }}>
          {incident.date.slice(5, 7)}월 {incident.date.slice(8, 10)}일
        </Column>
        <Column className="col-10">{incident.description}</Column>
      </Row>
    );
  });

  return (
    <Page className="page_section" id="history_area">
      <div
        className="row justify-content-md-center"
        style={{
          height: '100vh',
          margin: '0',
          width: '100%',
        }}
      >
        <Year className="col align-self-center">
          <div className="float-end">
            <button type="button" onClick={onCountDown}>
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ color: '#FF0000', fontSize: '2em' }}
              />
            </button>
            <Text>
              19
              <Redtext>{count}</Redtext>
            </Text>
            <button onClick={onCountUp}>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: '#FF0000', fontSize: '2em' }}
              />
            </button>
          </div>
        </Year>
        <Info className="col align-self-center">
          <Row>
            <Column
              className="col-2"
              style={{
                paddingLeft: '20px',
                paddingTop: '10px',
              }}
            >
              <p></p>
              6월 25일
            </Column>
            <Column className="col-10" style={{ paddingTop: '28px' }}>
              북한군 전면 남침
            </Column>
          </Row>
          <Row>
            <Column className="col-2" style={{ paddingLeft: '20px' }}>
              6월 28일
            </Column>
            <Column className="col-10">북한군 서울 점령</Column>
          </Row>
        </Info>
      </div>
    </Page>
  );
};

export default History;
