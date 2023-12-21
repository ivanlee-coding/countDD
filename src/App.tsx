import { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
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

        <div className="col-6 d-flex justify-content-end fs-1 fw-bold text-light p-0">
          {`${timer.day}`}
        </div>
        {/* 
        <motion.div className="col-auto d-inline fs-1 fw-bold text-warning p-0"
          initial={{ opacity: 0, scale: 4.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 10.0 }}
        >         
          {`${timer}`}
        </motion.div> */}

        {/* <div className="col d-flex align-items-end fs-4 text-light">
          {`${timer.toString().slice(-3)}`}
        </div> */}

      </div>

    </div>


  )
}

function convertDiffToHumanDate(count) {

  //const count = 1703152913000;

  const r = {day:'0', hour:'0', min:'0', sec:'0', milliseconds:'0'};

  const dayUnit = 24 * 60 * 60 * 1000;
  const hourUnit = 60 * 60 * 1000;
  const minUnit = 60 * 1000;
  const secUnit = 1000;

  const day = Math.floor(count / dayUnit);
  let hour = Math.floor(count%dayUnit / hourUnit);
  let min = Math.floor(count%dayUnit%hourUnit / minUnit);
  let sec = Math.floor(count%dayUnit%hourUnit%minUnit / secUnit);
  const milliseconds = count.toString().slice(-3);

  if(hour < 10) hour = `0${hour}`
  if(min < 10) min = `0${min}`
  if(sec < 10) sec = `0${sec}`

  r.day = day.toString();
  r.hour = hour.toString();
  r.min = min.toString();
  r.sec = sec.toString();
  r.milliseconds = milliseconds.toString();

  return r;
}


export default App
