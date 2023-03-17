import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Time } from './components/Time'

function App() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date('May 30, 2023, 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        // stop our time
        clearInterval(interval.current)
      } else {
        //update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return() => {
      clearInterval(interval.current)
    }
  },[])

  return (
    <div>

      <section className='timer-container'>
        <div className='timer'>
          <div>
            <span className='mdi mdi-calendar-clock timer-icon'></span>
            <h1>big sale on lifetime plan</h1>
            <span className='text'>there is very little left</span>
          </div>
          <div className='times'>
            <section>
              <p>{timerDays}</p>
              <span>days</span>
            </section>
            <span>|</span>
            <section>
              <p>{timerHours}</p>
              <span>hours</span>
            </section>
            <span>|</span>
            <section>
              <p>{timerMinutes}</p>
              <span>minutes</span>
            </section>
            <span>|</span>
            <section>
              <p>{timerSeconds}</p>
              <span>seconds</span>
            </section>
          </div>
          {/* <Time /> */}
        </div>
      </section>
      
    </div>
  )
}

export default App
