import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Link,
} from "react-router-dom";
import Header from './Header'

function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleToggleDarkMode={setDarkMode} />
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"

                    > <Link to="codereview">
                            <h3 className="vertical-timeline-element-title">Code Review</h3>
                            <p>
                                ¿Qué es y para qué utilizar el code review?
                            </p>
                        </Link>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"

                    ><Link to="modifiers">
                            <h3 className="vertical-timeline-element-title">Modificadores</h3>
                            <p>
                                ¿Cuáles son los niveles de acceso y cómo funcionan? (Modificadores)
                            </p> </Link>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"

                    ><Link to="architecture">
                            <h3 className="vertical-timeline-element-title">Patrones de Arquitectura</h3>
                            <p>
                                ¿Qué patrones de arquitectura conoces y cómo funcionan?
                                (Capas, Cliente-Servidor, Maestro-Esclavo, MVC, Etc..)
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"

                    ><Link to="designpatterns">
                            <h3 className="vertical-timeline-element-title">Patrones de Diseño</h3>
                            <p>
                                ¿Qué patrones de diseño conoces y cómo funcionan?
                                (Creacionales, Estructurales, Comportamiento)

                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"

                    ><Link to="solid">
                            <h3 className="vertical-timeline-element-title">Principio SOLID</h3>
                            <p>
                                ¿Qué es SOLID?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="clases">
                            <h3 className="vertical-timeline-element-title">Clases</h3>
                            <p>
                                POO: ¿Que es una Clase?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="inherence">
                            <h3 className="vertical-timeline-element-title">Herencia</h3>
                            <p>
                            POO: ¿Qué es y para que se utiliza la herencia?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="interfaces">
                            <h3 className="vertical-timeline-element-title">Interfaces</h3>
                            <p>
                            POO: ¿Qué es y para que se utilizan las interfaces?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="polymorphism">
                            <h3 className="vertical-timeline-element-title">Polimorfismo</h3>
                            <p>
                            POO: ¿Qué es el polimorfismo?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="apiweb">
                            <h3 className="vertical-timeline-element-title">Api Web</h3>
                            <p>
                            ¿Qué es y cómo funciona una API web?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="apiwebtools">
                            <h3 className="vertical-timeline-element-title">Herramientas Api Web</h3>
                            <p>
                            ¿Qué herramientas se pueden utilizar para probar Web APIs?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="errormanagement">
                            <h3 className="vertical-timeline-element-title">Manejo de errores</h3>
                            <p>
                            ¿Qué herramienta has utilizado para el manejo de errores?
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"

                    ><Link to="testdriven">
                            <h3 className="vertical-timeline-element-title">Test</h3>
                            <p>
                            Test driven development
                            </p> </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement

                    />
                </VerticalTimeline>
            </div >
        </div >
    );
};

export default Home;