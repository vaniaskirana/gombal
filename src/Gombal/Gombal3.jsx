import React from 'react'
import { Link } from 'react-router-dom'

function Gombal3() {
    const Macama = (e) => {
        e.preventDefault()
       alert("Macamaaaa bebiiihhhh, mwaachhh :**")
       }
  return (
<>    
    <center>
        <h1>Semangat yaa</h1>
        <p>Aku selalu adaa ko kalau kamu butuh (muyahannya iqbal) oawkwaokao</p>
        <br/>
        <img src="https://media.tenor.com/jvSzEEo9HD4AAAAi/tkthao219-bubududu.gif" width={200}/>
        <br/>
        <br/>
        <br/>
        <button className='ayaangbutton1' onClick={Macama}>Maaciww</button><br/>
        <p>ceritanya abis dicium akuh : </p>
        <img src="https://media.tenor.com/9a2xDp9v0MgAAAAi/tkthao219-bubududu.gif" width={200}/>

        <br/>
        <br/>
        <br/>
        <Link to="/gombal4"><button className='ayaangbutton'>Lanjutt yuuuuk</button></Link>
        <br/>
        <Link to="/gombal2"><h5>Kembali</h5></Link>
    </center>
</>   )
}

export default Gombal3