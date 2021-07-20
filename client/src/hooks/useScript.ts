import { useEffect } from 'react'

const useScript = (url: string) => {
  const script = document.createElement('script')

  script.innerHTML = url
  script.async = true

  const element = () => {
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }
  setInterval(element, 500)
}

export default useScript
