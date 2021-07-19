import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles'
import useScript from '../../hooks/useScript'

const Pagenation = () => {
  useScript(`

  function init(){
    
  }

  $(window).scroll(function() {
    winScrollTop = $(window).scrollTop();
  })

  $(function() {
      init();
  })
  `)

  return (
    <div
      className="fixed-bottom"
      style={{
        width: '97%',
        height: '14vh',
        background: 'transparent',
      }}
    >
      <Container className="nav_list float-end" style={{ margin: '5px' }}>
        <a id="intro_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a id="history_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a id="exhibition_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a id="involved_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
      </Container>
    </div>
  )
}

export default Pagenation
