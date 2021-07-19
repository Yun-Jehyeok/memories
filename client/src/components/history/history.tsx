import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'reactstrap'
import { Page, Year, Text, Redtext, Info } from './styles'

const History = () => {
  const [count, setCount] = useState<number>(50)
  const onCountUp = () => {
    setCount(count + 1)
  }
  const onCountDown = () => {
    setCount(count - 1)
  }

  return (
    <>
      <Page className="page_section" id="history_area">
        <div
          className="row"
          style={{
            height: '100vh',
            margin: '0',
            width: '100%',
          }}
        >
          <Year className="col align-self-center">
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
          </Year>
          <Info className="col align-self-center">
            <Row>
              <Col style={{ textAlign: 'left', fontSize: '1.3rem' }}>
                6월 25일 &nbsp;&nbsp;&nbsp;북한군 전면 남침
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: 'left', fontSize: '1.3rem' }}>
                6월 28일 &nbsp;&nbsp;&nbsp;북한군 서울 점령
              </Col>
            </Row>
          </Info>
        </div>
      </Page>
    </>
  )
}

export default History
