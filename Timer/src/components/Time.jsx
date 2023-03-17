export const Time = (timerDays) => {
  
  return (
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
  )
}