import { useState, useEffect } from 'react'
// import dateFormat from 'dateformat'
import { motion } from "framer-motion"

function App() {

  //const dateNow = Date.now()
  const updateInterval = 123 // the smaller number, the quicker
  const [timer, setTimer] = useState({day:'0', hour:'0', min:'0', sec:'0', milliseconds:'0'})

  useEffect(() => {

    const updateIntervalTimer = setInterval(() => {

       const targetTimestamp = 1812211200000;

      //const targetTimestamp = 1703152913000;

      const theCountDown = targetTimestamp - Date.now()

      const tempDiff = theCountDown > 0 ? theCountDown : 0

      if(!tempDiff) clearInterval(updateIntervalTimer) // clear timer if diff < 0


      const r = convertDiffToHumanDate(tempDiff)

      setTimer(r);

    }, updateInterval)


    return () => {
      clearInterval(updateIntervalTimer)
    }

  }, []);

  //justify-content-center align-items-center

  return (

    <div className="container-fluid d-flex bg-dark vh-100">

      <div className="row align-items-center vw-100">

        <div className="col-4 d-flex justify-content-end fs-2 fw-bold text-light">
          {`${timer.day}天`}
        </div>

        <div className="col-auto d-flex justify-content-end fs-2 fw-bold text-light">
          {`${timer.hour}時`}
        </div>

        <div className="col-auto d-flex justify-content-end fs-2 fw-bold text-light">
          {`${timer.min}分`}
        </div>

        <motion.div className="col-auto d-inline fs-1 fw-bold text-warning p-0"
          initial={{ opacity: 0, scale: 5 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 10.0 }}
        >         
          {`${timer.sec}`}
        </motion.div>

        <div className="col-auto d-flex justify-content-end fs-5 fw-bold text-light">
          {`${timer.milliseconds}`}
        </div>

      </div>

    </div>


  )
}

function convertDiffToHumanDate(count: number) {

  //const count = 1703152913000;

  const r = {day:'0', hour:'0', min:'0', sec:'0', milliseconds:'0'};

  const dayUnit = 24 * 60 * 60 * 1000;
  const hourUnit = 60 * 60 * 1000;
  const minUnit = 60 * 1000;
  const secUnit = 1000;

  const day = Math.floor(count / dayUnit).toString();
  let hour = Math.floor(count%dayUnit / hourUnit).toString();
  let min = Math.floor(count%dayUnit%hourUnit / minUnit).toString();
  let sec = Math.floor(count%dayUnit%hourUnit%minUnit / secUnit).toString();
  const milliseconds = count.toString().slice(-3);

  if(hour.length == 1) hour = `0${hour}`
  if(min.length == 1) min = `0${min}`
  if(sec.length == 1) sec = `0${sec}`

  r.day = day;
  r.hour = hour;
  r.min = min;
  r.sec = sec;
  r.milliseconds = milliseconds;

  return r;
}


export default App
