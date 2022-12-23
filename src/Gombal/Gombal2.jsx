import React from 'react'
import { Link } from 'react-router-dom'

function Gombal2() {
const Macama = () => {
    //  e.preventDefault()
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
        <Link to="/gombal3"><button className='ayaangbutton1' onClick={Macama}>Maaciww</button></Link>
        <br/>
        <br/>
        <br/>
        {/* <Link to="/gombal3"><button className='ayaangbutton' onClick={Macama}>Lanjutt yuuukkkk </button></Link> */}
        <br/>
        <Link to="/gombal1"><h5>Kembali</h5></Link>
    </center>
</>  
)
}

export default Gombal2