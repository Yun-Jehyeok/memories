import React from 'react'
import { useSelector } from 'react-redux'

export default function (ComposedClass, reload) {
  function AuthenticationCheck(props) {
    const { isAuthenticated } = useSelector((state) => state.auth);
    
    if(!isAuthenticated) {
      if(reload) {
        alert('로그인을 하고 이용해주세요.')
        props.history.push('/login')
      }
    } else {
      if(reload === false) {
        alert('로그인이 된 사용자는 접근할 수 없는 페이지입니다.')
        props.history.push('/goods')
      }
    }

    return (
      <ComposedClass {...props} />
    )
  }

  return AuthenticationCheck
}