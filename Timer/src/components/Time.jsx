export const Time = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  
  return (
    <div className='times'>
    <section>
      <p className="num">{timerDays}</p>
      <span>days</span>
    </section>
    <span className="num">|</span>
    <section>
      <p className="num">{timerHours}</p>
      <span>hours</span>
    </section>
    <span className="num">|</span>
    <section>
      <p className="num">{timerMinutes}</p>
      <span>minutes</span>
    </section>
    <span className="num">|</span>
    <section>
      <p className="num">{timerSeconds}</p>
      <span>seconds</span>
    </section>
  </div>
  )
}