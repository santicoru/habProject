import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Legal() {
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
      <section class="FAQ">
        <h1 className='main-title top'>Información legal</h1>
        <ul>
          <li className="question" onClick={showTheAnswer}>
            <a href="#legal1">Condiciones de Uso y venta</a>
            <p className="hidden" id="legal1">
              Te rogamos que leas detenidamente las presentes condiciones antes de utilizar los Servicios de SAM.
              Al utilizar los
              Servicios de SAM, aceptas quedar vinculado por las presentes condiciones. Ofrecemos una amplia gama
              de Servicios de
              SAM y en ocasiones pueden aplicarse condiciones adicionales. Además, cada vez que utilices cualquier
              Servicio de
              SAM, (por ejemplo: SAM MP3, Lista de Deseos, Cheques regalo o aplicaciones de SAM para dispositivos
              móviles),
              estarás igualmente sujeto a los términos y condiciones generales y a las condiciones particulares
              aplicables a dichos
              Servicios de SAM (las "Condiciones Generales de los Servicios"). Las Condiciones Generales de los
              Servicios
              prevalecerán sobre las presentes Condiciones de Uso en caso de discrepancia entre ambas.
                </p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#legal2">Privacidad</a>
            <p className="hidden" id="legal2">
              Información que nos Facilitas: recibimos y almacenamos toda la información que nos facilitas en
              relación con los
              Servicios de SAM. Haz clic aquí para ver algunos ejemplos de información que recopilamos. Puedes
              elegir no facilitar
              cierta información, pero si así lo haces, no podrás disfrutar de muchos de los Servicios de SAM.
              Información Automática: cada vez que utilizas los Servicios de SAM, recibimos y almacenamos de forma
              automática
              ciertos tipos de información, tales como información sobre el uso, incluyendo tu interacción con el
              contenido y los
              servicios disponibles a través de los Servicios de SAM. Por ejemplo, al igual que hacen muchas otras
              páginas web,
              utilizamos "cookies" y otros identificadores únicos para recabar cierta información cuando tu
              navegador de Internet o tu
              dispositivo acceden a los Servicios de SAM y a otros tipos de contenidos que te son ofrecidos por
              parte de o en
              nombre de SAM Europa en otras páginas web. Haz clic aquí para ver ejemplos de lo que recabamos.
              Información Procedente de Otras Fuentes: Es posible que recibamos información sobre ti de otras
              fuentes. Haz clic aquí
              para ver algunos ejemplos de la información que recibimos.
                </p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#legal3">Aviso de Cookies</a>
            <p className="hidden" id="legal3">
              Última actualización el 23 de mayo de 2018.

              Utilizamos cookies, píxels y otras tecnologías (en conjunto, “cookies”) para reconocer tu navegador,
              tu dispositivo,
              para saber más sobre tus intereses y para proporcionarte herramientas esenciales y servicios y para
              otros fines, por
              ejemplo:

              Reconocer cuando te registras para usar nuestros servicios, lo que nos permite ofrecerte
              recomendaciones de productos,
              mostrarte contenido personalizado, reconocerte como miembro de SAM, permitirte utilizar el
              pedido en "1-Clic",
              y ofrecerte otras funcionalidades y servicios personalizados.
              Mantener un registro de las preferencias seleccionadas por ti, lo que nos permite actuar en función
              de las mismas, como
              por ejemplo si deseas ver o no publicidad personalizada. Podrás elegir tus preferencias a través de
              Mi cuenta.
              Mantener un registro de los productos guardados en tu cesta.
              Llevar a cabo investigaciones y diagnósticos para mejorar el contenido, los productos y los
              servicios de SAM.
              Prevenir actividades fraudulentas.
              Mejorar la seguridad.
              Enviar contenidos, incluyendo anuncios, páginas de SAM y de terceros que podrían interesarte
              (consulta el Aviso sobre
              publicidad basada en los intereses del usuario para saber cómo utilizamos las cookies para mostrarte
              los anuncios
              basados en intereses).
              Informar. Esto nos permite considerar y analizar el rendimiento de nuestros servicios.
              Las cookies de SAM te ofrecen la posibilidad de aprovechar muchas de las funcionalidades
              esenciales de SAM. Por
              ejemplo, si rechazas o bloqueas nuestras cookies, no podrás añadir productos a la Cesta, acceder a
              la página de
              finalización del pedido ni usar ninguno de los productos o servicios de SAM que requieren que
              inicies una sesión.

              Los terceros autorizados también pueden utilizar cookies cuando interactúas con los servicios de
              SAM entre los que se
              incluyen motores de búsqueda, proveedores de servicios de medición y analíticos, redes sociales y
              compañías de
              publicidad. Los terceros utilizan cookies en el proceso para proporcionar contenidos, incluyendo
              anuncios relevantes
              para tus intereses, para medir la efectividad de sus anuncios y para prestar servicios en nombre de
              SAM. Haz clic
              aquí para saber más sobre los terceros que podrían utilizar cookies cuando utilizas los servicios de
              SAM.

              Puedes gestionar las cookies de tu navegador a través de la configuración de tu navegador. En la
              función “Ayuda” de la
              mayoría de los navegadores se indica cómo configurar tu navegador para que no acepte cookies nuevas,
              para que te
              notifique cada vez que recibes una nueva cookie, cómo desactivar cookies y cuándo caducarán las
              cookies. Si desactivas
              todas las cookies en tu navegador, ni nosotros ni terceros transferiremos cookies a tu navegador.
              Sin embargo, es
              probable que tengas que ajustar algunas de tus preferencias manualmente siempre que visites una
              página y que algunas de
              las herramientas y servicios no funcionen.

              Consulta nuestro Aviso de Privacidad para más información sobre los tipos de información que
              recabamos.
                </p>
          </li>
          <li className="question" onClick={showTheAnswer}>
            <a href="#legal4">Derechos legales del cliente</a>
            <p className="hidden" id="legal4">Derecho de Desistimiento
                Los clientes residentes en la Unión Europea tienen además garantizado por ley el derecho a desistir
                del contrato de
                compra de un producto durante 14 días naturales desde el día en que tú o un tercero que hayas
                indicado (distinto del
                transportista), recibas el producto comprado o desde que recibas el último artículo, en caso de
                entrega de un mismo
                pedido en varios envíos, o del último componente o pieza en caso de entrega de un bien compuesto por
                múltiples
                componentes o piezas. Este derecho es aplicable a todos nuestros productos, a excepción de los
                productos digitales (por
                ejemplo, MP3), si hubieras consentido la ejecución en el momento de la entrega, así como tampoco
                podemos aceptar
                desistimientos de compras de vídeos, DVD, audio, videojuegos, productos sexuales y eróticos, y
                productos de software
                cuyos precintos hayan sido abiertos (para más excepciones, consulta la sección Excepciones de
                nuestras Condiciones de
                    Uso y Venta.</p>
          </li>
        </ul>
      </section>
      <Footer />
    </React.Fragment>

  )
}