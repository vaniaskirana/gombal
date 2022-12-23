import React from 'react'
import { Link } from 'react-router-dom'

function Gombal1() {

const Baik = (e) => {
    e.preventDefault()
    alert("Alhamdulillahhhhh ikut cenengggg :* ")
} 
const Gitu = (e) => {
    e.preventDefault()
    alert("Apapun masalahnya tetep Semangat yahhh ayaankk kuh, kan udah ngopi hari ini wekkk wkwkwk")
} 
const Capek = (e) => {
    e.preventDefault()
    alert("uuhh, insyaAllah lelah mu berkah byy. Allah cayank ama bebi. Semangat halalin akoh AWOKAWOWAKWAO ")
} 


  return (
    <>    
    <center>
        <h1>Gimana hari ini ?</h1>
        <br/>
        <img src="https://i.pinimg.com/originals/4c/1e/8a/4c1e8a96ac479f90c6cde35bd8614a06.gif" width={200}/>
        <br/>
        <br/>
        <br/>
        
        <button className='ayaangbutton1' onClick={Baik}>Baik-baik ajaa</button>
        <button className='ayaangbutton1' onClick={Gitu}>Yaaa gitu deh</button>
        <button className='ayaangbutton1' onClick={Capek}>Capeeekk</button>
        <br/>
        <br/>
        <br/>
        <Link to="/gombal2"><button className='ayaangbutton'>Lanjutt yuuuuk</button></Link>
        <br/>
        <Link to="/"><h5>Kembali</h5></Link>
    </center>
</>
  )
}

export default Gombal1