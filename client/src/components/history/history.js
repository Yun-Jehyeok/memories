import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'reactstrap';
import { Page, Year, Text, Redtext, Info, Column } from './styles';

// json 파일 //
import RevolutionFile from 'file/eventfile.json';

const History = () => {
  const century = [19, 20];
  const year = [
    48,
    49,
    50,
    51,
    52,
    53,
    60,
    61,
    64,
    65,
    66,
    71,
    72,
    73,
    75,
    79,
    80,
    10, // 17
    15,
  ];
  const [cent, setCent] = useState(0);
  const [count, setCount] = useState(10);
  const onCountUp = () => {
    setCount(count + 1);
    if (count === 16) {
      setCent(1);
    }
    // 리셋
    if (count === 18) {
      setCount(0);
      setCent(0);
    }
  };
  const onCountDown = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(18);
      setCent(1);
    }
    if (count === 17) {
      setCent(0);
    }
  };

  var printData = RevolutionFile.filter((event) =>
    event.date.includes(year[count]),
  );

  const ArrayData = printData.map((event, index) => {
    return (
      <Row key={index}>
        <Column className="col-3 text-center" style={{ paddingLeft: '20px' }}>
          {event.date.slice(5, 7)}월 {event.date.slice(8, 10)}일
        </Column>
        <Column className="col-9">{event.description}</Column>
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
              {century[cent]}
              <Redtext>{year[count]}</Redtext>
            </Text>
            <button onClick={onCountUp}>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: '#FF0000', fontSize: '2em' }}
              />
            </button>
          </div>
        </Year>
        <Info className="col align-self-center" id="infomation">
          <p></p>
          {ArrayData}
        </Info>
      </div>
    </Page>
  );
};

export default History;
