import React, { useState } from 'react';
import { Row } from 'reactstrap';
import {
  Page,
  HistorySection,
  Year,
  Text,
  Redtext,
  Filptext,
  Info,
  Column,
  Yeartext,
  ChevronDown,
  ChevronUp,
  Sel,
} from './styles';
import HistoryModal from './historyModal';
import { Select } from 'antd';

// json 파일 //
import RevolutionFile from 'file/eventfile.json';

const History = () => {
  const [option, setOption] = useState('all');
  const [count, setCount] = useState(0);

  // sort //
  var Yearfilter = RevolutionFile.filter((category) => {
    return option === 'all' ? category : category.event.includes(option);
  }).map((category) => {
    return category.date.slice(0, 4);
  });
  const set1 = new Set(Yearfilter);
  const yearoption = [...set1];

  // count //
  const onCountUp = () => {
    setCount(count + 1);
    if (count === yearoption.length - 1) {
      setCount(0);
    }
  };
  const onCountDown = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(yearoption.length - 1);
    }
  };
  const { Option } = Select;

  const handleChange = (value) => {
    setCount(0);
    setOption(value);
  };
  const onSelect = (value) => {
    setCount(0);
    setOption(value);
  };

  var printData = RevolutionFile.filter((category) =>
    category.date.includes(yearoption[count]),
  );

  const ArrayData = printData.slice(0, 8).map((event, index) => {
    return (
      <Row key={index}>
        <Column className="col-3 text-center" style={{ paddingLeft: '20px' }}>
          {event.date.slice(5, 7)}월 {event.date.slice(8, 10)}일
        </Column>
        <Column className="col-9" style={{ width: '50%' }}>
          {event.description}
        </Column>
      </Row>
    );
  });

  return (
    <Page className="page_section section" id="history_area">
      <HistorySection className="row justify-content-md-center">
        <Year className="col align-self-center">
          <Sel
            defaultValue="all"
            style={{ width: '120px' }}
            onChange={handleChange}
            onSelect={onSelect}
          >
            <Option value="all">전체</Option>
            <Option value="419">4.19혁명</Option>
            <Option value="625">6.25전쟁</Option>
            <Option value="월남전">월남전</Option>
            <Option value="518">5.18민주화운동</Option>
            <Option value="근현대">근현대</Option>
          </Sel>
          {/* 년도 표시 */}
          <Yeartext className="float-end">
            <button type="button" onClick={onCountDown}>
              <ChevronUp />
            </button>
            <Text>
              {yearoption[count].slice(0, 2)}
              <Filptext className="year_animate">
                {count === 0 ? <></> : yearoption[count - 1].slice(2, 4)}
              </Filptext>
              <Redtext>{yearoption[count].slice(2, 4)}</Redtext>
              <Filptext className="year_animate">
                {count === yearoption.length - 1 ? (
                  <></>
                ) : (
                  yearoption[count + 1].slice(2, 4)
                )}
              </Filptext>
            </Text>
            <button onClick={onCountUp}>
              <ChevronDown />
            </button>
          </Yeartext>
        </Year>
        {/* 데이터 표시 */}
        <Info className="col align-self-center" id="infomation">
          <p></p>
          {ArrayData}
          <Row>
            <Column className="col-12 text-center">
              <HistoryModal printData={printData} />
            </Column>
          </Row>
        </Info>
      </HistorySection>
    </Page>
  );
};

export default History;
