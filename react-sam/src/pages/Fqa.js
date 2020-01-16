import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Fqa() {

  const question = document.getElementsByClassName('question');

  const showTheAnswer = (e) => {
    console.log(e.target);
    let show = e.target.nextElementSibling;
    console.log(show);
    show.classList.toggle('hidden');
  }

  return (
    <React.Fragment>
      <Header />
      <section className="FAQ top">
        <h1 className='main-title'>Preguntas frecuentes</h1>
        <ul>
          <li className="question" onClick={showTheAnswer}>
            <a href="#faq1">¿Mi licencia de software caduca?</a>
            <p className="hidden" id="faq1">El número de serie adquirido debe ser activado dentro de los 12 meses. Los
                códigos generados a partir de esta activación
                sólo funcionarán en la versión del software disponible al momento de la activación.
                Recomendamos que guarde una copia de seguridad del archivo de instalación en un CD o una unidad USB
                a ser usada para
                instalar de nuevo el software en caso de ser necesario. También recomendamos que mantenga una copia
                del código de
                    registro.</p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#faq2">¿Como puedo comprar su software?</a>
            <p className="hidden" id="faq2">La manera más fácil es hacer la compra en línea. Nuestro proceso de compra
                en línea es seguro y aceptamos tarjetas de
                    crédito VISA y MasterCard, o puede elegir "pagar con PayPal"</p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#faq3">¿Como funciona la compra? ¿cual es el proceso</a>
            <p className="hidden" id="faq3">La compra y el registro son un proceso muy fácil que incluye 4 pasos
                sencillos:
                Compra - Comprar el software en línea. No necesita esperar por una copia en CD. Sólo compre una
                "licencia" para el
                software. Después de la compra, recibirá un número de serie de la licencia de 13 dígitos en la
                página web o por correo
                electrónico en sólo segundos después que haber presionado el botón de comprar.
                Descarga e instalación - Si todavía no tiene la versión de prueba, necesita descargar el programa.
                La descarga es muy
                rápida y debe tomar menos de un minuto con una conexión normal. Puede omitir este paso si ya tiene
                la versión de prueba
                instalada. Con todos nuestros programas, la versión de prueba es la versión auténtica del programa
                que simplemente no ha
                sido activada todavía.
                Activar - Active el software completar este formulario.
                Para realizar la activación necesita su número de serie de 13 dígitos que recibió al hacer la compra
                en el paso 1. Una
                vez que haya activado el software, recibirá un código de registro con 4 campos - nombre, ubicación o
                correo electrónico,
                ID y clave.
                Registro - Abra la casilla 'registrar software' desde el menú en el programa e introduzca dentro del
                programa el código
                    de registro que recibió en el paso 3.</p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#faq4">¿Cuales de las opciones de clases de licencia necesario?</a>
            <p className="hidden" id="faq4">Cuando visita la página de compra, va a ver una serie de opciones con
                distintas clases de licencia. Esto significa que
                tenemos precios diferentes para las diversas funcionalidades y el código de activación y registro
                que reciba puede ser
                que limite el uso del software de una manera u otra.
                Para averiguar cuál opción es la más adecuada para usted, haga clic en el enlace "más info..."
                localizado debajo de las
                clases de licencia. Ahí encontrará información más detallada sobre las clases. Si tiene dudas
                descargue gratis la
                versión de demostración para un mejor entendimiento sobre como funciona el software y decidir cuales
                funcionalidades se
                    ajustan mejor a sus necesidades.</p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#faq5">¿Que restricciones se aplican a la licencia?</a>
            <p className="hidden" id="faq5">Cuando visita la página de compra, va a ver una serie de opciones con
                distintas clases de licencia. Esto significa que
                tenemos precios diferentes para las diversas funcionalidades y el código de activación y registro
                que reciba puede ser
                que limite el uso del software de una manera u otra.
                Para averiguar cuál opción es la más adecuada para usted, haga clic en el enlace "más info..."
                localizado debajo de las
                clases de licencia. Ahí encontrará información más detallada sobre las clases. Si tiene dudas
                descargue gratis la
                versión de demostración para un mejor entendimiento sobre como funciona el software y decidir cuales
                funcionalidades se
                    ajustan mejor a sus necesidades.</p>
          </li>
        </ul>
      </section>
      <Footer />
    </React.Fragment>
  )
}