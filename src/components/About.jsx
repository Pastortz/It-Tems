import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Sobre nosotros</h1>
                        <p className="lead mb-4">
                        Somos  una tienda virtual ubicada en Rancho de Teja, San Francisco El Alto, Totonicapán, Guatemala, dedicada a la compra y venta de productos en línea. Nos especializamos en brindar una experiencia de comercio electrónico moderna, accesible y confiable para satisfacer las necesidades de nuestros clientes tanto a nivel Nacional como Internacional. 

                            Nuestra misión es conectar a las personas con productos de calidad a través de una plataforma intuitiva y segura. Con un enfoque en la innovación y el servicio al cliente, trabajamos para construir relaciones duraderas con nuestros usuarios y contribuir al crecimiento del comercio digital en Guatemala.

                            En IT Tems, valoramos la confianza, la excelencia y la sostenibilidad. Nos esforzamos por ser un referente en el mercado electrónico, ofreciendo no solo productos, sino también una experiencia única que resalte la riqueza cultural y comercial de nuestro país. 

                            ¡Únete a nuestra comunidad y descubre cómo hacemos del comercio en línea algo más sencillo, eficiente y emocionante!


                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contacta con nosotros</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
