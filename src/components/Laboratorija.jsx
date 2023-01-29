import React from 'react'

function Laboratorija(props) {
  return (
    <div className="col">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-5 col-sm-4">
                            <img className="img-fluid w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0G23aRfOZetBF5KBpnv5SXYcn2_-MHyqiA&usqp=CAU"  alt='Lab' />
                        </div>
                        <div className="col-7 col-sm-8">
                            <div className="card-body">
                                <h2 className="card-title">{props.laboratorija.naziv}</h2>
                                <h4 className="card-text">{props.laboratorija.adresa}</h4>
                                <br/>
                                <p className="card-text"> <b>E-mail:</b> {props.laboratorija.email}</p>
                                <p className="card-text"><b>Website:</b> {props.laboratorija.website}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Laboratorija
