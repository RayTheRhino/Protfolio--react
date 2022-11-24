import './intro.scss'
import { Typewriter } from 'react-simple-typewriter'


export default function intro() {

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets\me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I`M</h2>
          <h1>Chen Maimon</h1>
          <h3>A <Typewriter
          words ={['Software Engineer', 'Frontend Developer','Fullstack Developer']}
          loop = {5}
          cursor
          cursorStyle='_'
          typeSpeed={150}
          delaySpeed={1000}
          deleteSpeed={80}
          
          />
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

