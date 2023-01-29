import React from 'react'
import KontaktForma from './KontaktForma'

function KontaktPage() {

  function obavestenje(poruka) {
      alert('Poštovani/a '+ poruka.ime + ', uspesno ste zakazali termin za '+ poruka.datum + ' slanjem mejla na zeljenu adresu! 24h pre zakazanog termina primicete obavestenje na mejl koji ste naveli: ' + poruka.email_posiljalac + '.' )
  }

  return (
    <div>
      <img className='slika-home' src='https://png2.cleanpng.com/sh/567a4ae0f708e8138959625f1446a4fd/L0KzQYq3U8I2N5lriJH0aYP2gLBuTfxiapD3eeZ4comwg7Twhf5kbV5uhtZAc4T1iX76gBhwd50ye9pubXn2hMPCTfxwa5JxRd5ybnWwfL3qTfNwdaFmhus2aHBwdX68g8k6OpU2T6ZqMXW8RnA3VMA6P2Y8TKMANUO4RIO7UsM0OGQ7RuJ3Zx==/kisspng-laboratory-science-industry-school-chemistry-local-line-llc-company-home-5c992d174a1e96.0409757415535424233036.png'
      height={250} alt="Naslov slika"></img> 
      <h1 id="naslov-home" >LAB IS</h1>
      <h4 id="podnaslov-home" >Molimo Vas da proverite mejl zeljene laboratorije na pocetnoj strani</h4>
      <KontaktForma funkcija={obavestenje}/>
    </div>
  )
}

export default KontaktPage
