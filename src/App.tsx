import { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
import { motion } from "framer-motion"

function App() {

  const dateNow = Date.now()
  const updateInterval = 23 // the smaller number, the quicker
  const [timer, setTimer] = useState(dateNow)
  //const timeFormat = "dddd, mmmm dS, yyyy, h:MM:ss TT Z"
  //const timeFormat = ":MM"

  useEffect(() => {

    setInterval(()=> {setTimer(Date.now())}, updateInterval)
    return;

  }, []);

    //justify-content-center align-items-center

  return (
    // <div className='row d-inline'>
    //   <span className="col-10 text-light fw-bold fs-1">{`${dateFormat(timer, timeFormat)}`}</span>
    //   <span className="col-2 text-light fs-5" style={{minWidth: '30px'}}>{`${timer.toString().slice(-3)}`}</span>
    // </div>
    
<div className="container-fluid d-flex bg-dark vh-100">
  {/* <div className="row align-items-start">
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div> */}
  <div className="row align-items-center vw-100">

    <div className="col-6 d-flex justify-content-end fs-1 fw-bold text-light p-0">
      {`${dateFormat(timer, 'hh:MM:')}`}
    </div>

    <motion.div className="col-auto d-inline fs-1 fw-bold text-warning p-0"
    initial={{ opacity: 0, scale: 4.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 10.0 }}>{`${dateFormat(timer, 'ss')}`}</motion.div>

    {/* <div className="col d-flex align-items-end fs-4 text-light">
      {`${timer.toString().slice(-3)}`}
    </div> */}



    <div className="col d-flex align-items-end fs-4 text-light"
    // animate={{
    //   scale: [1, 0.99, 1]
    // }}
    // transition={{
    //   duration: 0.5,
    //   ease: "easeInOut",
    //   times: [0, 0.25, 0.5],
    //   repeat: Infinity,
    //   repeatDelay: 0.2
    // }}
  >{`${timer.toString().slice(-3)}`}</div>



  </div>
  {/* <div className="row align-items-end">
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div> */}
</div>

    
  )
}



export default App
