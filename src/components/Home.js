import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header className="dark-mode" handleToggleDarkMode={setDarkMode} />
        <h3 className="sub-title">
          {" "}
          “The most damaging phrase in the language is... it's always been done
          this way” - Grace Hopper
        </h3>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Where is the code review?!"
          >
            {" "}
            <Link className="link" to="codereview">
              <h3 className="vertical-timeline-element-title">Code Review</h3>
              <p>¿Qué es y para qué utilizar el code review?</p>
            </Link>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Hiding the internals of the object protects its integrity by preventing users from setting the internal data of the component into an invalid or inconsistent state."
          >
            <Link className="link" to="modifiers">
              <h3 className="vertical-timeline-element-title">Modificadores</h3>
              <p>
                ¿Cuáles son los niveles de acceso y cómo funcionan?
                (Modificadores)
              </p>{" "}
            </Link>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="To create architecure is to put in order, put what in order? function and objects"
          >
            <Link className="link" to="architecture">
              <h3 className="vertical-timeline-element-title">
                Patrones de Arquitectura
              </h3>
              <p>
                ¿Qué patrones de arquitectura conoces y cómo funcionan? (Capas,
                Cliente-Servidor, Maestro-Esclavo, MVC, Etc..)
              </p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Design Patterns, design patterns everywhere"
          >
            <Link className="link" to="designpatterns">
              <h3 className="vertical-timeline-element-title">
                Patrones de Diseño
              </h3>
              <p>
                ¿Qué patrones de diseño conoces y cómo funcionan? (Creacionales,
                Estructurales, Comportamiento)
              </p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read"
          >
            <Link className="link" to="solid">
              <h3 className="vertical-timeline-element-title">
                Principio SOLID
              </h3>
              <p>¿Qué es SOLID?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="A class is written by a programmer in a defined structure to create an object (computer science) in an object oriented programming language"
          >
            <Link className="link" to="clases">
              <h3 className="vertical-timeline-element-title">Clases</h3>
              <p>POO: ¿Que es una Clase?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="extensible program-code-template for creating objects"
          >
            <Link className="link" to="inheritance">
              <h3 className="vertical-timeline-element-title">Herencia</h3>
              <p>POO: ¿Qué es y para que se utiliza la herencia?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Inheritance has recently fallen out of favor as a programming design solution in many programming languages"
          >
            <Link className="link" to="interfaces">
              <h3 className="vertical-timeline-element-title">Interfaces</h3>
              <p>POO: ¿Qué es y para que se utilizan las interfaces?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="the fact that oo languages provide safe and convenient polymorphism means that any source code dependency, no matter where it is, can be inverted"
          >
            <Link className="link" to="polymorphism">
              <h3 className="vertical-timeline-element-title">Polimorfismo</h3>
              <p>POO: ¿Qué es el polimorfismo?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Use the API, Luke"
          >
            <Link className="link" to="apiweb">
              <h3 className="vertical-timeline-element-title">API Web</h3>
              <p>¿Qué es y cómo funciona una API web?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="You tried adding a RESTFUL API?"
          >
            <Link className="link" to="apiwebtools">
              <h3 className="vertical-timeline-element-title">
                Herramientas API Web
              </h3>
              <p>¿Qué herramientas se pueden utilizar para probar Web APIs?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Have you tried turning it of and on again? HTTP 403 FORBIDDEN You shall not pass"
          >
            <Link className="link" to="errormanagement">
              <h3 className="vertical-timeline-element-title">
                Manejo de errores
              </h3>
              <p>¿Qué herramienta has utilizado para el manejo de errores?</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Testing leads to failure, and failure leads to understanding"
          >
            <Link className="link" to="testdriven">
              <h3 className="vertical-timeline-element-title">Test</h3>
              <p>Test Driven Development</p>{" "}
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement />
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
