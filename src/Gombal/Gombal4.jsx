import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Gombal4() {
  const Maaciww = (e) => 
  { e.preventDefault()
    alert("Maaciwwwwwwwwwwwwwwwwww ayaaaaaaaaaaank") 
  }
 
  // var too = document.querySelector('button.yyy')
// too.addEventListener("mouseover", mouseHover)




  return (
    
<>    
    <center>
        <h1>I Love Youuuuuuuuuuu Bebiihhhh</h1>
        <p>Semoga ini bisa menghibur kamuuu di hari ini yaaahhh</p>
        <br/>
        <img src="https://media.tenor.com/6W3uiyAxkXUAAAAi/tkthao219-bubududu.gif" width={200}/>
        <br/>
        <br/>
        <br/>
        <button className='ayaangbutton1' onClick={Maaciww}>I Love you too</button>
        {/* <button id="btn-too" className='ayaangbutton1 yyy' >y</button> */}

      
        {/* <Link to="/gombal3"><button className='ayaangbutton' onClick={Macama}>Lanjutt yuuukkkk </button></Link> */}
        <br/>
        <Link to="/"><h5>Kembali ke awalll</h5></Link>
    </center>
    <script src="./App.js"></script>
</>    )
}

export default Gombal4