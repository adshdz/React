import React from 'react';



export function App() {

        return (
                <div className="login">
                        <div className="form-container">
                                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fii.ct-stc.com%2F1%2Flogos%2Fempresas%2F2019%2F08%2F21%2F73f9877becce4bc0a744222341163thumbnail.png&imgrefurl=https%3A%2F%2Fwww.computrabajo.com.co%2Fempresas%2Fofertas-de-trabajo-de-cobrando-sas-7C6B208CD9DC5281&tbnid=_hfMblMTYP0AlM&vet=12ahUKEwiEpsKB4K_2AhVHD98KHdqvD74QMygBegQIARAf..i&docid=r2PXA6T7VmGL-M&w=200&h=152&q=cobrando.sas%2F&ved=2ahUKEwiEpsKB4K_2AhVHD98KHdqvD74QMygBegQIARAf" alt="logo cobrandoS.sas" className="logo" />

                                <form action="/" className="form">
                                <label for="email" className="label">Email address</label>
                                <input type="text" id="email" placeholder="ingresa@tucorreo.com" className="input input-email" />

                                <label for="password" className="label">Password</label>
                                <input type="password" id="password" placeholder="*********" className="input input-password" />

                                <a href="/" className="primary-button create-button" onclick="bienvenida()">login</a>
                                <span>Forgot my password</span>
                                <input type="submit" value="Create an account" className="primary-button create-button" />
                        </form>


                </div>
              </div>
              
              );
}
