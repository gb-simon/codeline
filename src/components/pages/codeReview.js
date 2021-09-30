import "../styles.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function CodeReviewComponent() {
  return (
    <div className="body">
      <h1>Code Review</h1>
      <hr />
      <Link to="/">
        {" "}
        <MdArrowBack size={50} />
      </Link>
      <h2> ¿Que es Code Review? </h2>
      <img
        alt="meme sobre code review, wtf per minute"
        src="https://i2.wp.com/commadot.com/wp-content/uploads/2009/02/wtf.png?w=550&ssl=1"
      />
      <p>
        Una revisión de código es un proceso de proporcionar comentarios sobre
        el código de alguien, especialmente en lo que respecta a las solicitudes
        de extracción, que suelen ser un grupo de confirmaciones agrupadas para
        ofrecer una función en particular.{" "}
      </p>
      <p>
        Una revisión de código da como resultado el rechazo o la aprobación de
        cambios en la base de código, preferiblemente antes de que se
        implementen en producción.{" "}
      </p>
      <p>
        Una revisión de código es un examen sistemático del código fuente del
        software que podría generar una mejora incremental en la base del
        código.{" "}
      </p>
      <h2> ¿Para que sirve hacer Code Review? </h2>
      <h4> Las revisiones de código generalmente ayudan a:</h4>
      <ul>
        {" "}
        <li>
          {" "}
          Atrapando bichos (Localizar <i>bugs</i>){" "}
        </li>
        <li>Garantizar la legibilidad y el mantenimiento del código.</li>
        <li>Difundir el conocimiento del código base en el equipo</li>
        <li>Exponer a todos a diferentes enfoques</li>
      </ul>
      <img
        alt="code review descriptive"
        src="https://miro.medium.com/max/700/1*0Ydp3fxHWjDfZcu09109qw.png"
      />
      <p>
        Cuando un desarrollador termina de trabajar en un problema, otro
        desarrollador revisa el código y considera preguntas como:
      </p>
      <ul>
        <li>¿Hay errores lógicos obvios en el código?</li>
        <li>
          En cuanto a los requisitos, ¿están todos los casos completamente
          implementados?
        </li>
        <li>
          ¿Son suficientes las nuevas pruebas automatizadas para el nuevo
          código? Hacer existente Las pruebas automatizadas deben reescribirse
          para tener en cuenta los cambios en el ¿código?
        </li>
        <li>¿El nuevo código se ajusta a las pautas de estilo existentes?</li>
      </ul>
      <p>
        A medida que las revisiones de código exponen a los desarrolladores a
        nuevas ideas y tecnologías, escribir cada vez mejor código.
      </p>
      <ul>
        <li>
          Mejor calidad del código: mejore la calidad del código interno y
          mantenibilidad (legibilidad, uniformidad, comprensibilidad, etc.)
        </li>
        <li>
          Encontrar defectos: mejorar la calidad con respecto a los aspectos
          externos, especialmente la corrección, pero también encuentran
          problemas de rendimiento, seguridad vulnerabilidades, malware
          inyectado, ...
        </li>
        <li>
          Transferencia de aprendizaje / conocimiento: ayuda para transferir
          conocimientos sobre el base de código, enfoques de soluciones,
          expectativas de calidad, etc .; tanto a los revisores como al autor
        </li>
        <li>
          Incrementar el sentido de responsabilidad mutua - incrementar el
          sentido de código colectivo propiedad y solidaridad
        </li>
        <li>
          Encontrar mejores soluciones: generar ideas para nuevas y mejores
          soluciones e ideas que trascienden el código específico en cuestión.
        </li>
        <li>
          Cumpliendo con las pautas de control de calidad, las normas ISO / IEC:
          las revisiones del código son obligatorio en algunos contextos, por
          ejemplo, software de tráfico aéreo, software de seguridad crítica
        </li>
      </ul>
      <p>
        Las revisiones de código deben integrarse con el proceso existente de un
        equipo. Para ejemplo, si un equipo está usando flujos de trabajo de
        ramificación de tareas, inicie un código revisar después de que se haya
        escrito todo el código y se hayan realizado las pruebas automatizadas
        ejecutar y pasar, pero antes de que el código se fusione en sentido
        ascendente. Esto asegura la el tiempo del revisor de código se dedica a
        verificar las cosas que las máquinas pasan por alto, y evita que las
        malas decisiones de codificación contaminen la línea principal de
        desarrollo.
      </p>
      <span>
        <a href="https://blog.lelonek.me/how-should-we-do-code-reviews-ced54cede375">
          Fuente{" "}
        </a>
      </span>{" "}
      <br />
      <span>
        <a href="https://commadot.com/wtf-per-minute/">
          Buen articulo sobre el tema{" "}
        </a>
      </span>
    </div>
  );
}

export default CodeReviewComponent;
