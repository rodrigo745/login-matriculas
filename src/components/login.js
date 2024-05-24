import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";
import LogoJoseDeLaVega from "./logo_jose_de_la_vega.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';



export default function Login(){
    return(
        <div className="d-flex vh-100">
            <div className="d-none d-md-flex  justify-content-center align-items-center w-50 text-light contenedor-izq">  {/* Lado Izquierda */}
                <div className="d-flex  flex-column  pe-5">
                    <h2 className="fw-bold fs-1">IEJDV Matriculas</h2>
                    <p className="fw-semibold text-start">Gestor de matriculas estudiantiles</p>
                    <button className="btn izq-btn">Sitio web</button>
                </div>
                <div className="ps-5 w-25">
                    <img src={LogoJoseDeLaVega} width={200} height={200} alt="logo" 
                        className="opacity-25"/>
                </div>
                {/* Lineas inferiores */}
                <div className="linea-inferior"></div>
                <div className="linea-inferior l-i-padd"></div>
            </div>

            
            <div className="col-md-6 col-12 h-100 d-flex justify-content-center  align-items-center pe-md-5 pt-5"> {/* Lado Derecho */}

                <form className="col-md-6 col-10 h-50 text-start  me-md-5">
                    <Link to="/" className="text-left fw-bold text-black text-decoration-none fs-2">Hello Admin!</Link>
                    <p className="fw-semibold mt-2 mb-5">Bienvenido de vuelta</p>
                    <div className="form-control d-flex rounded-5 ps-3 pb-2 col-12 col-md-10 shadow-sm">
                        <i className="fa fa-envelope mt-3 me-1"/>
                        <input type="email" class="form-control rounded-end-5 border-0 m-1" placeholder="Correo electrónico"/>
                    </div>
                    <div className="mt-4 form-control d-flex rounded-5 ps-3 pb-2 col-12 col-md-10 shadow-sm">
                        <i className="fa fa-lock mt-3 me-1"/>
                        <input type="password" class="form-control rounded-end-5 border-0 m-1" placeholder="Contraseña"/>
                    </div>
                    <div className="mt-3 ms-2">
                        <input type="checkbox" className="me-2 btn" />
                        <label >Recordarme</label>
                    </div>
                    <button className="btn btn-primary rounded-5 col-12  mt-3 p-3 shadow-sm">Ingresar</button>
                    <Link to="/" className="btn text-center col-12">Recuperar contraseña</Link>
                </form>


            </div>
        </div>
    )
}