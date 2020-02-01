import { useEffect, useRef } from 'react'

/**
 * Custom hook to set up and clear down intervals whenever a delay changes
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param {function} callback - callback function (usually update to state)
 * @param {number} delay - duration between intervals
 */
const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // remember latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // setup the interval
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
