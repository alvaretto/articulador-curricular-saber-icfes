/**
 * Planes de aula de Ciencias Naturales - Grados 6° a 11°
 * Estructura: 4 periodos x 10 semanas x 4 horas/semana = 160 horas/año
 * Basado en Estándares Básicos de Competencias (EBC) del MEN - Colombia
 * Competencias ICFES: Uso comprensivo del conocimiento, Explicación de fenómenos, Indagación
 */

const PLANES_NATURALES = {

  // ============================================================
  // GRADO 6
  // ============================================================
  '6': {
    grado: '6°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Desarrollar competencias científicas básicas a través del estudio de la célula, los ecosistemas colombianos, las propiedades de la materia y las fuerzas y movimiento, articulando entorno vivo, entorno físico y CTS',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Verifico y explico el papel de los organelos celulares en el funcionamiento de la célula como unidad de vida.',
          'Comparo sistemas de división celular y explico cómo la célula se relaciona con los tejidos, órganos y organismos.',
          'Relaciono la estructura de los organelos celulares con sus funciones en el mantenimiento de la vida.'
        ],

        dba: 'Comprende la célula como unidad estructural y funcional de los seres vivos, describe sus organelos principales, distingue células procariotas de eucariotas y establece relaciones entre la estructura celular y las funciones vitales.',

        ejesTematicos: [
          'La célula: historia e importancia',
          'Estructura celular: membrana, citoplasma, núcleo y organelos',
          'Células procariotas y eucariotas: diferencias fundamentales',
          'Células animales y vegetales: características específicas',
          'Organización: célula, tejido, órgano, sistema y organismo'
        ],

        tiposPensamiento: ['Entorno Vivo'],

        preguntaProblema: '¿Qué es la célula, cómo está organizada y de qué manera sus estructuras internas permiten que los seres vivos realicen sus funciones vitales?',

        diagnostico: 'El 58% de los estudiantes no conoce los organelos celulares ni comprende la diferencia entre células procariotas y eucariotas, limitándose a identificar la célula como "la unidad más pequeña de la vida".',

        competenciasICFES: {
          usoConocimiento: 'Identifica los organelos celulares y los relaciona con las funciones vitales que realiza la célula.',
          explicacion: 'Explica las diferencias entre células procariotas y eucariotas, y entre células animales y vegetales, con base en su estructura.',
          indagacion: 'Utiliza el microscopio y esquemas para observar, describir y registrar estructuras celulares en muestras biológicas sencillas.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe las funciones de los organelos celulares y los relaciona con las funciones vitales de la célula.',
            'Establece diferencias entre células procariotas y eucariotas, y entre células animales y vegetales.'
          ]
        },

        aprendizajesICFES: ['nat-s9-01'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Identifica y describe los organelos celulares principales: membrana, núcleo, mitocondria, retículo endoplásmico, ribosomas, vacuola y cloroplasto.',
          'Distingue células procariotas de eucariotas con base en la presencia o ausencia de núcleo definido.',
          'Diferencia células animales de células vegetales identificando estructuras exclusivas (pared celular, cloroplasto, vacuola central).',
          'Establece la relación jerárquica célula → tejido → órgano → sistema → organismo con ejemplos del cuerpo humano.',
          'Prepara y observa muestras sencillas al microscopio (cebolla, mejilla) y registra sus observaciones.'
        ],

        estrategiasMetodologicas: [
          'Construcción de modelos de células en 3D con materiales reciclados (plastilina, gelatina, objetos cotidianos).',
          'Observación al microscopio de células de epidermis de cebolla y mucosa bucal.',
          'Comparación guiada de imágenes de células procariotas y eucariotas en fichas de trabajo.',
          'Juego de roles: cada estudiante representa un organelo y explica su función al grupo.',
          'Elaboración de atlas celular ilustrado con descripciones de cada organelo y su función.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 6° (editorial Norma o Santillana)',
          'Microscopio o microscopio virtual (CellsAlive.com)',
          'Materiales para modelos 3D: plastilina, gelatina, objetos reciclados',
          'Fichas de comparación celular elaboradas por el docente',
          'Videos: CrashCourse Biology "Intro to Cells" (con subtítulos en español)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enumera y describe los organelos celulares principales y sus funciones.',
            'Define célula procariota y eucariota e indica ejemplos de organismos de cada tipo.',
            'Explica la jerarquía de organización de los seres vivos: célula, tejido, órgano, sistema, organismo.'
          ],
          hacer: [
            'Construye un modelo tridimensional de la célula identificando y etiquetando sus organelos.',
            'Observa y dibuja células al microscopio registrando sus observaciones con precisión.',
            'Elabora cuadros comparativos entre tipos de células con criterios específicos.'
          ],
          ser: [
            'Cuida los materiales del laboratorio y sigue las normas de seguridad durante las prácticas.',
            'Participa activamente en actividades grupales con respeto y colaboración.',
            'Demuestra curiosidad científica al formular preguntas sobre la vida a nivel celular.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre la importancia de la higiene y los hábitos saludables como formas de cuidar las células del propio cuerpo, estableciendo relaciones entre la salud individual y el bienestar colectivo.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico las relaciones entre los componentes bióticos y abióticos de los ecosistemas colombianos.',
          'Analizo el ecosistema como resultado de las interacciones entre los seres vivos y los factores físicos del ambiente.',
          'Describo y evalúo el impacto de las acciones humanas sobre los ecosistemas y propongo alternativas de conservación.'
        ],

        dba: 'Comprende los componentes bióticos y abióticos de los ecosistemas colombianos, describe las relaciones ecológicas (cadenas y redes tróficas, simbiosis, competencia) y analiza el impacto de las actividades humanas sobre estos ecosistemas.',

        ejesTematicos: [
          'Ecosistema: componentes bióticos y abióticos',
          'Ecosistemas colombianos: características y biodiversidad',
          'Cadenas y redes tróficas: productores, consumidores, descomponedores',
          'Relaciones ecológicas: depredación, simbiosis, parasitismo, competencia',
          'Impacto humano sobre los ecosistemas y conservación'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cómo se organizan y relacionan los seres vivos en los ecosistemas colombianos y qué consecuencias tienen las acciones humanas sobre su equilibrio?',

        diagnostico: 'El 55% de los estudiantes no distingue los componentes bióticos de los abióticos y no comprende cómo se transfiere la energía a través de una cadena trófica.',

        competenciasICFES: {
          usoConocimiento: 'Identifica los componentes bióticos y abióticos de un ecosistema y describe las relaciones que se establecen entre ellos.',
          explicacion: 'Explica el flujo de energía y materia a través de cadenas y redes tróficas en ecosistemas colombianos.',
          indagacion: 'Analiza información sobre ecosistemas amenazados en Colombia para proponer acciones concretas de conservación.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Explica la fotosíntesis como proceso de captación de energía solar y producción de materia orgánica.',
            'Describe las relaciones tróficas en un ecosistema e identifica productores, consumidores y descomponedores.'
          ]
        },

        aprendizajesICFES: ['nat-s9-03', 'nat-s9-09'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Clasifica los componentes de un ecosistema en bióticos (flora, fauna, microorganismos) y abióticos (temperatura, agua, suelo, luz).',
          'Describe al menos tres ecosistemas colombianos (selva amazónica, páramo, manglar) y sus características principales.',
          'Construye cadenas tróficas de ecosistemas locales identificando productores, consumidores primarios, secundarios y descomponedores.',
          'Explica tipos de relaciones ecológicas: mutualismo, comensalismo, parasitismo, depredación y competencia con ejemplos colombianos.',
          'Argumenta sobre el impacto de la deforestación, la minería y la ganadería en los ecosistemas colombianos.'
        ],

        estrategiasMetodologicas: [
          'Salida de campo o recorrido por el entorno escolar para identificar componentes bióticos y abióticos.',
          'Construcción de terrarios o ecosistemas en botella para observar interacciones biótico-abióticas.',
          'Elaboración de redes tróficas en papel kraft usando imágenes de fauna y flora colombiana.',
          'Análisis de noticias sobre deforestación y minería ilegal para identificar impactos en ecosistemas.',
          'Proyecto de investigación: "¿Qué ecosistema hay cerca de mi municipio y cómo podemos protegerlo?"'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 6°',
          'Imágenes y fichas de fauna y flora de ecosistemas colombianos',
          'Materiales para terrario: botellas PET, tierra, plantas, agua',
          'Mapa de ecosistemas de Colombia (IDEAM)',
          'Recursos web: Sistema de Información sobre Biodiversidad de Colombia (SiB Colombia)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define ecosistema, cadena trófica, red trófica, nicho ecológico y las principales relaciones ecológicas.',
            'Describe las características de tres ecosistemas colombianos y su biodiversidad.',
            'Explica el concepto de flujo de energía en una cadena trófica.'
          ],
          hacer: [
            'Construye redes tróficas de ecosistemas locales identificando niveles tróficos y relaciones.',
            'Diseña y mantiene un ecosistema en botella registrando sus observaciones.',
            'Presenta un informe sobre el impacto humano en un ecosistema colombiano con propuestas de solución.'
          ],
          ser: [
            'Demuestra compromiso con la conservación del ambiente en sus hábitos cotidianos.',
            'Argumenta con respeto en debates sobre problemas ambientales locales y nacionales.',
            'Valora la biodiversidad colombiana como patrimonio que debe protegerse.'
          ]
        },

        competenciaCiudadana: 'Asume compromisos concretos con la conservación de los ecosistemas colombianos, reconociendo su responsabilidad como ciudadano en la protección de la biodiversidad y el ambiente de su región.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico las propiedades físicas y químicas de la materia y las relaciono con los cambios que experimenta.',
          'Identifico y describo los estados de la materia y las condiciones en que ocurren los cambios de estado.',
          'Clasifico los cambios de la materia en físicos y químicos, e identifico sus características y evidencias.'
        ],

        dba: 'Comprende las propiedades físicas y químicas de la materia, describe los estados de agregación y los cambios de estado, y diferencia los cambios físicos de los cambios químicos con base en evidencias observables.',

        ejesTematicos: [
          'La materia: definición y propiedades físicas (masa, volumen, densidad)',
          'Estados de la materia: sólido, líquido y gaseoso',
          'Cambios de estado: fusión, solidificación, evaporación, condensación, sublimación',
          'Cambios físicos de la materia: ejemplos y características',
          'Cambios químicos de la materia: evidencias y ejemplos cotidianos'
        ],

        tiposPensamiento: ['Entorno Físico'],

        preguntaProblema: '¿Cómo podemos describir y clasificar la materia que nos rodea, y cómo distinguir cuándo un cambio en la materia es físico o químico?',

        diagnostico: 'El 52% de los estudiantes confunde cambios físicos con químicos y no comprende la diferencia entre propiedades físicas y químicas de la materia.',

        competenciasICFES: {
          usoConocimiento: 'Identifica las propiedades físicas de la materia (masa, volumen, densidad, punto de fusión) y las usa para caracterizar sustancias.',
          explicacion: 'Explica los cambios de estado de la materia en términos de las fuerzas de atracción entre partículas y la transferencia de energía.',
          indagacion: 'Diseña experimentos sencillos para distinguir cambios físicos de cambios químicos e identifica las evidencias que permiten diferenciarlos.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe la evolución de los modelos atómicos y sus aportes al conocimiento de la materia.',
            'Identifica reactivos y productos en ecuaciones químicas sencillas y reconoce evidencias de cambio químico.'
          ]
        },

        aprendizajesICFES: ['nat-s9-06', 'nat-s9-07'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Mide y calcula propiedades físicas de la materia: masa, volumen y densidad con instrumentos adecuados.',
          'Describe los estados sólido, líquido y gaseoso en términos de la disposición y movimiento de las partículas.',
          'Identifica y explica los cambios de estado: fusión, solidificación, evaporación, condensación y sublimación.',
          'Diferencia cambios físicos de cambios químicos y da al menos tres ejemplos de cada tipo.',
          'Identifica evidencias de cambio químico: color, olor, temperatura, precipitado, producción de gas.'
        ],

        estrategiasMetodologicas: [
          'Prácticas de laboratorio: medición de masa y volumen con balanza y probeta, cálculo de densidad.',
          'Experimentos de cambios de estado: fusión de hielo, evaporación del agua, sublimación del hielo seco (video).',
          'Tabla comparativa: cambios físicos vs. cambios químicos con ejemplos del entorno cotidiano.',
          'Experimentos de cambios químicos: vinagre y bicarbonato, oxidación del hierro, combustión de papel.',
          'Mapa conceptual colaborativo sobre propiedades y cambios de la materia.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 6°',
          'Balanza de laboratorio, probetas, vasos de precipitados',
          'Materiales para experimentos: vinagre, bicarbonato, agua, hielo, aceite',
          'Fichas de laboratorio elaboradas por el docente',
          'Videos de cambios de estado y reacciones químicas cotidianas'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define materia, propiedad física, propiedad química, cambio físico y cambio químico.',
            'Describe los estados de la materia y las condiciones en que ocurren los cambios de estado.',
            'Enumera al menos tres evidencias que permiten identificar un cambio químico.'
          ],
          hacer: [
            'Mide masa, volumen y calcula densidad de diferentes sustancias con precisión.',
            'Realiza experimentos para observar cambios físicos y químicos y los registra correctamente.',
            'Clasifica situaciones cotidianas como cambios físicos o químicos justificando su respuesta.'
          ],
          ser: [
            'Sigue con cuidado las normas de seguridad en el laboratorio.',
            'Colabora con sus compañeros en la realización de prácticas experimentales.',
            'Reflexiona sobre el impacto ambiental de los cambios químicos (contaminación, reacciones de combustión).'
          ]
        },

        competenciaCiudadana: 'Relaciona el conocimiento sobre los cambios químicos con problemas ambientales cotidianos (contaminación del agua, del aire), desarrollando conciencia sobre el uso responsable de productos químicos en el hogar y la comunidad.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico y descripto los tipos de fuerza que actúan sobre los objetos y explico sus efectos sobre el movimiento.',
          'Explico el funcionamiento de las máquinas simples y su aplicación en la vida cotidiana para facilitar el trabajo.',
          'Relaciono el concepto de fuerza con los cambios de movimiento de los objetos en situaciones del entorno.'
        ],

        dba: 'Comprende el concepto de fuerza como interacción entre objetos, identifica los tipos de fuerza presentes en situaciones cotidianas, describe sus efectos sobre el movimiento y explica el principio de funcionamiento de las máquinas simples.',

        ejesTematicos: [
          'Fuerza: concepto, características y unidades de medida (Newton)',
          'Tipos de fuerza: gravitacional, normal, fricción, tensión, elástica',
          'Movimiento: posición, velocidad, aceleración y trayectoria',
          'Las leyes del movimiento de Newton (introducción conceptual)',
          'Máquinas simples: palanca, polea, plano inclinado, rueda, tornillo'
        ],

        tiposPensamiento: ['Entorno Físico'],

        preguntaProblema: '¿Cómo actúan las fuerzas sobre los objetos y de qué manera las máquinas simples nos ayudan a realizar trabajo con menor esfuerzo?',

        diagnostico: 'El 57% de los estudiantes no distingue los diferentes tipos de fuerza y no comprende cómo estas fuerzas producen o modifican el movimiento de los cuerpos.',

        competenciasICFES: {
          usoConocimiento: 'Identifica los tipos de fuerza que actúan sobre un objeto y predice cualitativamente los cambios en su movimiento.',
          explicacion: 'Explica el funcionamiento de las máquinas simples aplicando el concepto de fuerza y relacionándolas con su uso en la vida cotidiana.',
          indagacion: 'Diseña y realiza experimentos sencillos para medir fuerzas y analizar el efecto de diferentes tipos de máquinas simples.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Aplica la ley de conservación de la energía a situaciones cotidianas.',
            'Diferencia entre energía cinética y energía potencial e identifica conversiones entre ellas.'
          ]
        },

        aprendizajesICFES: ['nat-s9-04', 'nat-s9-05'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Define fuerza, describe sus características (magnitud, dirección, sentido) y reconoce el Newton como unidad de medida.',
          'Identifica y clasifica los tipos de fuerza (gravitacional, normal, fricción, tensión, elástica) en situaciones cotidianas.',
          'Describe el movimiento de un objeto usando los conceptos de posición, velocidad, aceleración y trayectoria.',
          'Explica cualitativamente las tres leyes del movimiento de Newton con ejemplos de la vida diaria.',
          'Identifica y describe el funcionamiento de las máquinas simples: palanca, polea, plano inclinado, rueda y tornillo.'
        ],

        estrategiasMetodologicas: [
          'Experimentos con dinamómetros para medir fuerzas de fricción, tensión y peso de objetos.',
          'Construcción de modelos de máquinas simples con materiales reciclados (palancas con reglas, poleas con carretes).',
          'Análisis de situaciones cotidianas para identificar tipos de fuerza: empujar la puerta, deslizarse por un tobogán.',
          'Simulaciones interactivas de fuerzas y movimiento (PhET Interactive Simulations).',
          'Proyecto: diseñar una máquina simple para resolver un problema cotidiano y presentarlo al grupo.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 6°',
          'Dinamómetros, resortes, poleas y planos inclinados de laboratorio',
          'Materiales para construir máquinas simples: reglas, carretes, cuerdas, tablas',
          'Simulaciones PhET: Forces and Motion Basics (disponible en español)',
          'Fichas de laboratorio sobre fuerzas y máquinas simples'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define fuerza, describe sus características y enumera al menos cinco tipos de fuerza.',
            'Explica los conceptos de posición, velocidad y aceleración en el contexto del movimiento.',
            'Describe el funcionamiento de las cinco máquinas simples con un ejemplo de uso cotidiano para cada una.'
          ],
          hacer: [
            'Mide fuerzas con dinamómetros y registra los datos en tablas organizadas.',
            'Construye y demuestra el funcionamiento de al menos una máquina simple.',
            'Resuelve problemas cualitativos sobre el efecto de fuerzas sobre el movimiento de objetos.'
          ],
          ser: [
            'Demuestra creatividad e ingenio al diseñar soluciones a problemas con máquinas simples.',
            'Trabaja en equipo respetando los aportes y roles de cada compañero.',
            'Relaciona el conocimiento sobre fuerzas con la comprensión de fenómenos naturales como terremotos y vientos.'
          ]
        },

        competenciaCiudadana: 'Aplica el conocimiento sobre fuerzas y máquinas simples para comprender y valorar las tecnologías presentes en su entorno cotidiano, reflexionando sobre el papel de la ingeniería en la mejora de las condiciones de vida de las comunidades.'
      }
    ]
  },

  // ============================================================
  // GRADO 7
  // ============================================================
  '7': {
    grado: '7°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Profundizar en el estudio de los sistemas del cuerpo humano, la clasificación de la materia, las formas y transformaciones de la energía y los mecanismos de reproducción y herencia biológica, articulando entorno vivo, entorno físico y CTS',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico la organización y el funcionamiento de los sistemas del cuerpo humano y los relaciono con las funciones vitales de nutrición, circulación y respiración.',
          'Analizo las relaciones entre los sistemas digestivo, circulatorio y respiratorio y describo cómo su funcionamiento coordina la obtención y distribución de nutrientes y oxígeno.',
          'Relaciono las enfermedades más frecuentes de estos sistemas con factores de riesgo y propongo medidas de prevención.'
        ],

        dba: 'Comprende la organización y función de los sistemas digestivo, circulatorio y respiratorio del cuerpo humano, establece relaciones entre su estructura y las funciones de nutrición, transporte y respiración, y reconoce hábitos saludables para su cuidado.',

        ejesTematicos: [
          'Sistema digestivo: órganos, proceso de digestión y absorción de nutrientes',
          'Sistema circulatorio: corazón, vasos sanguíneos, sangre y circulación',
          'Sistema respiratorio: órganos, mecánica respiratoria e intercambio gaseoso',
          'Relaciones entre los sistemas: coordinación para el mantenimiento de la vida',
          'Enfermedades comunes y hábitos saludables'
        ],

        tiposPensamiento: ['Entorno Vivo'],

        preguntaProblema: '¿Cómo funcionan los sistemas digestivo, circulatorio y respiratorio del cuerpo humano y de qué manera se relacionan para mantener el organismo con vida?',

        diagnostico: 'El 54% de los estudiantes no puede describir con precisión el recorrido de los alimentos por el sistema digestivo ni el circuito de la sangre en el cuerpo, y confunde la función del sistema respiratorio con la simple inhalación de aire.',

        competenciasICFES: {
          usoConocimiento: 'Identifica los órganos de los sistemas digestivo, circulatorio y respiratorio y los relaciona con sus funciones específicas.',
          explicacion: 'Explica el proceso de digestión, circulación y respiración como funciones integradas que garantizan el mantenimiento de la vida.',
          indagacion: 'Analiza casos de enfermedades relacionadas con estos sistemas para identificar factores de riesgo y proponer medidas preventivas.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe las funciones de los organelos celulares y los relaciona con las funciones vitales de la célula.',
            'Explica cómo se integran célula, tejido, órgano, sistema y organismo en la organización de los seres vivos.'
          ]
        },

        aprendizajesICFES: ['nat-s9-01', 'nat-s9-02'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe el recorrido de los alimentos por el sistema digestivo identificando los órganos que intervienen y las transformaciones que ocurren.',
          'Explica el circuito de la sangre (circulación mayor y menor) identificando el papel del corazón, arterias, venas y capilares.',
          'Describe el proceso de respiración: mecánica respiratoria e intercambio gaseoso en los alveolos.',
          'Establece relaciones entre los tres sistemas: cómo los nutrientes absorbidos y el oxígeno se transportan a las células.',
          'Identifica factores de riesgo para enfermedades cardiovasculares, digestivas y respiratorias y propone hábitos preventivos.'
        ],

        estrategiasMetodologicas: [
          'Disección virtual del cuerpo humano usando aplicaciones 3D (Visible Body o similar).',
          'Construcción de maquetas del sistema digestivo usando materiales reciclados.',
          'Simulación del bombeo del corazón con globos y tubos para visualizar la circulación.',
          'Experimento: medición de la frecuencia cardíaca y respiratoria antes y después del ejercicio.',
          'Análisis de casos clínicos: identificar síntomas de enfermedades digestivas, circulatorias y respiratorias.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 7° (editorial Norma o Santillana)',
          'Modelos anatómicos del cuerpo humano (sistema digestivo, circulatorio)',
          'Aplicación Visible Body o BioDigital Human (versión gratuita)',
          'Estetoscopio y cronómetro para medición de constantes vitales',
          'Guías de laboratorio y fichas de trabajo elaboradas por el docente'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enumera los órganos de los sistemas digestivo, circulatorio y respiratorio y describe su función.',
            'Explica el proceso de digestión mecánica y química en el sistema digestivo.',
            'Describe la circulación mayor y menor e identifica los componentes de la sangre.'
          ],
          hacer: [
            'Construye una maqueta o diagrama del sistema digestivo o circulatorio identificando sus componentes.',
            'Mide y registra la frecuencia cardíaca y respiratoria en reposo y en actividad física.',
            'Analiza un caso clínico e identifica el sistema afectado y los factores de riesgo asociados.'
          ],
          ser: [
            'Reflexiona críticamente sobre la importancia de los hábitos saludables para el cuidado del cuerpo.',
            'Participa con responsabilidad en actividades experimentales respetando normas de seguridad.',
            'Valora la salud como un derecho y asume compromisos concretos de autocuidado.'
          ]
        },

        competenciaCiudadana: 'Promueve hábitos de vida saludable en su entorno familiar y escolar, reconociendo la salud como un derecho fundamental y tomando decisiones responsables sobre alimentación, actividad física e higiene para el cuidado de sus sistemas corporales.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Clasifico la materia en elementos, compuestos y mezclas con base en sus propiedades y composición.',
          'Identifico y aplico métodos de separación de mezclas apropiados según las propiedades físicas de sus componentes.',
          'Explico la organización de los elementos en la tabla periódica y establezco relaciones entre su posición y sus propiedades.'
        ],

        dba: 'Comprende la clasificación de la materia en elementos, compuestos y mezclas, identifica las propiedades que permiten diferenciarlos, aplica métodos de separación de mezclas y reconoce la tabla periódica como herramienta de organización del conocimiento químico.',

        ejesTematicos: [
          'Clasificación de la materia: sustancias puras (elementos y compuestos) y mezclas',
          'Diferencia entre mezclas homogéneas y heterogéneas',
          'Métodos de separación de mezclas: filtración, decantación, destilación, cristalización, tamización',
          'Introducción a la tabla periódica: organización y grupos principales',
          'Símbolos y fórmulas químicas: H₂O, CO₂, NaCl, O₂'
        ],

        tiposPensamiento: ['Entorno Físico'],

        preguntaProblema: '¿Cómo clasificamos la materia que nos rodea y qué métodos podemos usar para separar las mezclas que encontramos en la naturaleza y en la industria?',

        diagnostico: 'El 56% de los estudiantes no distingue con claridad entre elementos, compuestos y mezclas, y no conoce los métodos adecuados para separar diferentes tipos de mezclas.',

        competenciasICFES: {
          usoConocimiento: 'Clasifica muestras de materia en elementos, compuestos, mezclas homogéneas y mezclas heterogéneas usando criterios científicos.',
          explicacion: 'Explica el fundamento de los métodos de separación de mezclas en términos de las propiedades físicas que los hacen posibles.',
          indagacion: 'Diseña procedimientos experimentales para separar mezclas específicas seleccionando el método más adecuado según sus componentes.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe la evolución de los modelos atómicos y sus aportes al conocimiento de la materia.',
            'Usa la tabla periódica para clasificar elementos y predecir propiedades de compuestos simples.'
          ]
        },

        aprendizajesICFES: ['nat-s9-06', 'nat-s9-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Distingue entre sustancias puras (elementos y compuestos) y mezclas (homogéneas y heterogéneas) con ejemplos cotidianos.',
          'Identifica el método de separación adecuado para diferentes mezclas según las propiedades físicas de sus componentes.',
          'Realiza experimentos de separación de mezclas: filtración, decantación, evaporación y tamización.',
          'Interpreta la organización de la tabla periódica identificando grupos, periodos y familias principales.',
          'Usa símbolos y fórmulas químicas sencillas para representar elementos y compuestos comunes.'
        ],

        estrategiasMetodologicas: [
          'Laboratorio de clasificación: separar mezclas de arena-sal-hierro usando imanes, agua y filtración.',
          'Preparación de soluciones y suspensiones para comparar mezclas homogéneas y heterogéneas.',
          'Exploración interactiva de la tabla periódica (ptable.com) identificando grupos y periodos.',
          'Experimento de cristalización: crecimiento de cristales de sal o azúcar.',
          'Juego de tarjetas: clasificar sustancias en elementos, compuestos o mezclas justificando la decisión.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 7°',
          'Materiales de laboratorio: vasos, embudos, papel filtro, imanes, tamices',
          'Sustancias: sal, arena, limaduras de hierro, agua, aceite, azúcar',
          'Tabla periódica interactiva: ptable.com',
          'Fichas de práctica de laboratorio sobre métodos de separación'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define elemento, compuesto, mezcla homogénea y mezcla heterogénea con un ejemplo de cada uno.',
            'Describe el fundamento de cinco métodos de separación de mezclas.',
            'Explica la organización de la tabla periódica e identifica los grupos principales.'
          ],
          hacer: [
            'Realiza experimentos de separación de mezclas seleccionando el método adecuado y registrando resultados.',
            'Clasifica correctamente muestras de materia usando criterios de composición y propiedades.',
            'Interpreta la tabla periódica para obtener información sobre elementos específicos.'
          ],
          ser: [
            'Aplica normas de seguridad en el manejo de sustancias en el laboratorio.',
            'Trabaja con orden y rigor en la realización y registro de experimentos.',
            'Relaciona el conocimiento sobre mezclas con procesos industriales y ambientales (purificación del agua, reciclaje).'
          ]
        },

        competenciaCiudadana: 'Aplica el conocimiento sobre mezclas y métodos de separación para comprender procesos de purificación del agua y tratamiento de residuos, promoviendo el uso responsable y sostenible del recurso hídrico en su comunidad.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico y descripto los diferentes tipos de energía, sus fuentes y las transformaciones que ocurren en situaciones cotidianas.',
          'Aplico el principio de conservación de la energía para analizar situaciones en las que la energía se transforma pero no se crea ni se destruye.',
          'Evalúo las implicaciones del uso de diferentes fuentes de energía en el ambiente y en la sociedad colombiana.'
        ],

        dba: 'Comprende los tipos de energía (cinética, potencial, térmica, lumínica, eléctrica, química), describe sus transformaciones en situaciones cotidianas, aplica el principio de conservación de la energía y evalúa el impacto ambiental y social del uso de fuentes de energía renovables y no renovables.',

        ejesTematicos: [
          'Concepto de energía: características y unidades (Joule)',
          'Tipos de energía: cinética, potencial, térmica, lumínica, eléctrica, química, nuclear',
          'Transformaciones de la energía: cadenas y conversiones en situaciones cotidianas',
          'Conservación de la energía: ley de conservación',
          'Fuentes de energía renovables y no renovables: impacto ambiental y CTS'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo se transforma la energía en los procesos naturales y tecnológicos, y qué consecuencias tiene el uso de diferentes fuentes de energía para el ambiente y la sociedad?',

        diagnostico: 'El 53% de los estudiantes no puede identificar las transformaciones de energía en situaciones cotidianas y confunde los conceptos de energía con los de fuerza y trabajo.',

        competenciasICFES: {
          usoConocimiento: 'Identifica los tipos de energía presentes en situaciones cotidianas y describe las transformaciones que ocurren entre ellos.',
          explicacion: 'Explica el principio de conservación de la energía y lo aplica para analizar cadenas de transformación energética.',
          indagacion: 'Analiza el impacto ambiental y social del uso de fuentes de energía renovables y no renovables en Colombia para argumentar decisiones informadas.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Aplica la ley de conservación de la energía a situaciones cotidianas (caída libre, resortes, circuitos eléctricos).',
            'Diferencia entre energía cinética y energía potencial e identifica conversiones entre ellas.'
          ]
        },

        aprendizajesICFES: ['nat-s9-04', 'nat-s9-09'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Identifica y clasifica los tipos de energía presentes en al menos diez situaciones cotidianas.',
          'Construye cadenas de transformación de energía para situaciones concretas (bombillo, automóvil, planta fotovoltaica).',
          'Aplica el principio de conservación de la energía para explicar que la energía total se conserva aunque cambie de forma.',
          'Compara fuentes de energía renovables (solar, eólica, hídrica) y no renovables (carbón, petróleo, gas) en términos de disponibilidad e impacto ambiental.',
          'Argumenta sobre la importancia de la transición energética en Colombia a partir de datos sobre recursos naturales disponibles.'
        ],

        estrategiasMetodologicas: [
          'Experimentos de conversión de energía: péndulo (potencial → cinética), pila de limón (química → eléctrica).',
          'Análisis de diagramas de flujo de energía en dispositivos tecnológicos del hogar.',
          'Investigación sobre las fuentes de energía en Colombia: hidroeléctricas, termoeléctricas y energías limpias.',
          'Debate sobre las ventajas y desventajas de la minería de carbón y el petróleo vs. energías renovables.',
          'Proyecto: diseño de una propuesta de ahorro energético para el colegio o el hogar.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 7°',
          'Materiales para experimento de pila de limón (limones, electrodos de cobre y zinc, LED)',
          'Materiales para péndulo simple y rampas (bolas, rieles, cinta métrica)',
          'Infografías sobre la matriz energética de Colombia (UPME)',
          'Recursos web: UPME Colombia, Portal de Energías Renovables'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define energía, enuncia los principales tipos y explica el principio de conservación de la energía.',
            'Distingue entre fuentes de energía renovables y no renovables con ejemplos de Colombia.',
            'Explica al menos tres cadenas de transformación de energía en dispositivos cotidianos.'
          ],
          hacer: [
            'Realiza experimentos de conversión de energía registrando los tipos de energía que intervienen.',
            'Construye diagramas de flujo de energía para situaciones cotidianas identificando entradas y salidas.',
            'Elabora una propuesta fundamentada de ahorro energético para un espacio de su entorno.'
          ],
          ser: [
            'Reflexiona sobre sus hábitos de consumo energético y propone cambios sostenibles.',
            'Argumenta con evidencias científicas en debates sobre el modelo energético de Colombia.',
            'Valora las energías renovables como alternativa para un desarrollo más sostenible y equitativo.'
          ]
        },

        competenciaCiudadana: 'Asume compromisos concretos de ahorro energético en su hogar y colegio, comprende la relación entre el modelo energético y los derechos ambientales, y participa en discusiones sobre la transición hacia fuentes de energía limpias en Colombia.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico los mecanismos de reproducción celular (mitosis y meiosis) y los relaciono con el crecimiento, la reparación y la reproducción de los organismos.',
          'Describo los fundamentos de la herencia biológica y aplico las leyes de Mendel para predecir características en la descendencia.',
          'Relaciono la reproducción sexual y asexual con la variabilidad genética de las poblaciones.'
        ],

        dba: 'Comprende los procesos de mitosis y meiosis como mecanismos de división celular, establece sus diferencias y funciones biológicas, describe los principios de la herencia mendeliana y aplica los conceptos de genotipo, fenotipo, dominante y recesivo para predecir características hereditarias.',

        ejesTematicos: [
          'División celular: mitosis (etapas y función biológica)',
          'Meiosis: etapas, diferencias con la mitosis y función en la reproducción sexual',
          'Reproducción asexual y sexual: ventajas y desventajas',
          'Herencia biológica: ADN, genes, cromosomas y alelos',
          'Leyes de Mendel: segregación y distribución independiente; cuadros de Punnett'
        ],

        tiposPensamiento: ['Entorno Vivo'],

        preguntaProblema: '¿Cómo se dividen las células y de qué manera los genes se transmiten de padres a hijos determinando las características de los descendientes?',

        diagnostico: 'El 58% de los estudiantes no comprende la diferencia entre mitosis y meiosis, y no ha sido introducido aún a los conceptos de herencia genética y leyes de Mendel.',

        competenciasICFES: {
          usoConocimiento: 'Distingue entre mitosis y meiosis identificando sus etapas, productos y funciones biológicas en el contexto de la reproducción y el crecimiento.',
          explicacion: 'Explica los principios de la herencia mendeliana usando los conceptos de genotipo, fenotipo, dominante, recesivo, homocigoto y heterocigoto.',
          indagacion: 'Aplica los cuadros de Punnett para predecir la probabilidad de rasgos en la descendencia e interpreta los resultados en términos de herencia.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Describe el papel del ADN como portador de la información genética.',
            'Aplica las leyes de Mendel para predecir la probabilidad de que un rasgo aparezca en la descendencia.'
          ]
        },

        aprendizajesICFES: ['nat-s9-02', 'nat-s9-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe las etapas de la mitosis (profase, metafase, anafase, telofase) y explica su función en el crecimiento y reparación de tejidos.',
          'Compara mitosis y meiosis en términos de número de divisiones, células resultantes y función biológica.',
          'Diferencia reproducción asexual de sexual y explica las ventajas de cada una para la variabilidad genética.',
          'Explica la relación entre ADN, genes, cromosomas y alelos como base molecular de la herencia.',
          'Aplica las leyes de Mendel para resolver cruces monohíbridos usando cuadros de Punnett e interpreta las proporciones genotípicas y fenotípicas.'
        ],

        estrategiasMetodologicas: [
          'Modelado de las etapas de la mitosis y meiosis con materiales manipulativos (cordones de colores como cromosomas).',
          'Comparación visual con diagramas: mitosis vs. meiosis en tablas de doble entrada.',
          'Talleres de genética: resolución de cruces monohíbridos con cuadros de Punnett usando fichas de colores.',
          'Análisis de genealogías familiares para identificar rasgos dominantes y recesivos.',
          'Investigación sobre enfermedades hereditarias comunes en Colombia y su patrón de herencia.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 7°',
          'Cordones o cadenas de colores para modelar cromosomas y divisiones celulares',
          'Fichas de alelos para talleres de cuadros de Punnett',
          'Videos animados de mitosis y meiosis (Khan Academy en español)',
          'Guías de genética mendeliana elaboradas por el docente'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las etapas de la mitosis y explica su función biológica en el crecimiento y la reparación.',
            'Diferencia mitosis de meiosis indicando el número de células resultantes y su función en la reproducción.',
            'Define genotipo, fenotipo, alelo dominante, alelo recesivo, homocigoto y heterocigoto con ejemplos.'
          ],
          hacer: [
            'Modela las etapas de la mitosis y la meiosis usando materiales manipulativos.',
            'Resuelve cruces monohíbridos usando cuadros de Punnett e interpreta las proporciones resultantes.',
            'Analiza una genealogía familiar e identifica el patrón de herencia de un rasgo determinado.'
          ],
          ser: [
            'Reflexiona con respeto sobre la diversidad biológica entre personas como resultado de la herencia genética.',
            'Participa activamente en los talleres de genética con disposición para aprender de los errores.',
            'Reconoce las implicaciones éticas del conocimiento genético en decisiones personales y sociales.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre las implicaciones éticas y sociales del conocimiento genético, rechaza la discriminación basada en características heredadas y comprende la diversidad humana como riqueza biológica y cultural.'
      }
    ]
  },

  // ============================================================
  // GRADO 8
  // ============================================================
  '8': {
    grado: '8°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Desarrollar competencias científicas a través del estudio de los sistemas del cuerpo humano, la genética básica, las reacciones químicas, la energía y los ecosistemas, articulando entorno vivo, entorno físico y CTS',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico la variabilidad en las poblaciones y la diversidad biológica como consecuencia de estrategias de reproducción, cambios genéticos y selección natural.',
          'Explico las funciones de las proteínas, los ácidos nucleicos, los lípidos y los carbohidratos en el organismo.',
          'Explico la transmisión del impulso nervioso y los efectos de drogas y sustancias psicoactivas en el sistema nervioso.'
        ],

        dba: 'Comprende la organización y funciones de los sistemas del cuerpo humano (nervioso, endocrino, reproductor) y establece relaciones entre su estructura y las funciones vitales.',

        ejesTematicos: [
          'Sistemas del cuerpo humano: nervioso y endocrino',
          'Sistema reproductor humano y desarrollo',
          'Genética básica: herencia y cromosomas',
          'Leyes de Mendel y cuadros de Punnett',
          'Macromoléculas biológicas (carbohidratos, lípidos, proteínas, ácidos nucleicos)'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cómo el cuerpo humano coordina sus funciones vitales y qué mecanismos determinan la herencia de los caracteres de padres a hijos?',

        diagnostico: 'El 54% de los estudiantes no distingue entre los sistemas de coordinación del cuerpo humano ni comprende la relación entre ADN, genes y herencia biológica.',

        competenciasICFES: {
          usoConocimiento: 'Identifica las funciones de los sistemas nervioso y endocrino y los relaciona con el mantenimiento de la homeostasis corporal.',
          explicacion: 'Explica la transmisión de caracteres hereditarios usando las leyes de Mendel y los cuadros de Punnett.',
          indagacion: 'Formula hipótesis sobre la probabilidad de herencia de rasgos y las verifica mediante cruce de genotipos.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe las funciones de los organelos celulares y los relaciona con las funciones vitales.',
            'Aplica las leyes de Mendel para predecir la probabilidad de que un rasgo aparezca en la descendencia.'
          ]
        },

        aprendizajesICFES: ['nat-s9-01', 'nat-s9-02'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe la estructura y función de los sistemas nervioso central y periférico.',
          'Explica el mecanismo del impulso nervioso y los efectos de sustancias psicoactivas.',
          'Distingue entre hormona, glándula y órgano diana en el sistema endocrino.',
          'Aplica las leyes de Mendel para resolver cruces monohíbridos y dihíbridos.',
          'Diferencia entre genotipo y fenotipo, dominante y recesivo, homocigoto y heterocigoto.'
        ],

        estrategiasMetodologicas: [
          'Disección virtual del cuerpo humano usando aplicaciones 3D o modelos anatómicos.',
          'Juego de roles: simulación del recorrido de un impulso nervioso en el aula.',
          'Talleres de genética con cruces monohíbridos y dihíbridos usando cuadros de Punnett.',
          'Análisis de genealogías familiares para identificar rasgos dominantes y recesivos.',
          'Debate sobre el impacto de las drogas en el sistema nervioso con casos reales.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 8° (editorial Norma o Santillana)',
          'Modelos anatómicos del sistema nervioso y reproductor',
          'Fichas de cruces genéticos para trabajo manipulativo',
          'Videos sobre el sistema endocrino (CrashCourse Biology en español)',
          'Guías de laboratorio elaboradas por el docente'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enuncia las funciones principales del sistema nervioso central y periférico.',
            'Define los conceptos: gen, alelo, genotipo, fenotipo, dominante y recesivo.',
            'Describe los tipos de macromoléculas biológicas y sus funciones en el organismo.'
          ],
          hacer: [
            'Resuelve cruces genéticos monohíbridos y dihíbridos usando cuadros de Punnett.',
            'Interpreta genealogías para determinar el patrón de herencia de un rasgo.',
            'Elabora esquemas del sistema nervioso identificando sus componentes.',
            'Relaciona el consumo de sustancias psicoactivas con alteraciones del sistema nervioso.'
          ],
          ser: [
            'Reflexiona críticamente sobre el impacto de las drogas en la salud personal y colectiva.',
            'Participa activamente en los debates con argumentos sustentados en evidencia científica.',
            'Demuestra respeto por las diferencias biológicas y genéticas entre individuos.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre las consecuencias del consumo de sustancias psicoactivas en el sistema nervioso y promueve hábitos de vida saludable en la comunidad escolar.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico y explico los cambios químicos en situaciones cotidianas y describo la reacción química que los explica.',
          'Realizo cálculos cuantitativos de situaciones cotidianas que involucran cambios físicos y/o químicos de la materia.',
          'Explico la estructura atómica de la materia y la tabla periódica como herramienta de organización de los elementos.'
        ],

        dba: 'Comprende la estructura atómica de la materia, utiliza la tabla periódica para clasificar elementos y describe las reacciones químicas que ocurren en la cotidianidad.',

        ejesTematicos: [
          'Estructura atómica: modelos atómicos',
          'Tabla periódica: grupos, periodos y propiedades',
          'Enlace químico: iónico y covalente',
          'Reacciones químicas: tipos y balanceo',
          'Factores que afectan la velocidad de reacción'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo la estructura de la materia a nivel atómico determina las propiedades de las sustancias y su comportamiento en las reacciones químicas?',

        diagnostico: 'El 51% de los estudiantes no comprende el modelo atómico moderno ni puede balancear ecuaciones químicas sencillas por el método del tanteo.',

        competenciasICFES: {
          usoConocimiento: 'Usa la tabla periódica para identificar propiedades de los elementos y predecir el tipo de enlace que forman.',
          explicacion: 'Explica los cambios químicos que ocurren en la cotidianidad (oxidación, combustión, fermentación) usando modelos de reacción.',
          indagacion: 'Diseña experimentos sencillos para identificar factores que aceleran o retardan una reacción química.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe la evolución de los modelos atómicos y sus aportes al conocimiento de la materia.',
            'Identifica reactivos y productos en ecuaciones químicas y las balancea por tanteo.'
          ]
        },

        aprendizajesICFES: ['nat-s9-06', 'nat-s9-07'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe los modelos atómicos (Dalton, Thomson, Rutherford, Bohr, cuántico) y sus contribuciones.',
          'Usa la tabla periódica para clasificar elementos por grupos, periodos y propiedades periódicas.',
          'Diferencia compuestos iónicos y covalentes por sus propiedades y tipos de enlace.',
          'Balancea ecuaciones químicas sencillas por el método del tanteo.',
          'Clasifica reacciones químicas (síntesis, descomposición, sustitución, doble sustitución) con ejemplos cotidianos.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo de los modelos atómicos: construcción colaborativa en carteleras.',
          'Uso de la tabla periódica interactiva (ptable.com) para explorar propiedades de elementos.',
          'Prácticas de laboratorio con reacciones simples: vinagre y bicarbonato, oxidación del hierro.',
          'Experimentos sobre velocidad de reacción: temperatura, concentración, superficie de contacto.',
          'Resolución de ecuaciones químicas con fichas de átomos de colores.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 8°',
          'Tabla periódica impresa y recursos interactivos en línea (ptable.com)',
          'Materiales de laboratorio: vinagre, bicarbonato, agua oxigenada, hierro',
          'Fichas de átomos de colores para modelar moléculas y reacciones',
          'Videos de CrashCourse Chemistry sobre modelos atómicos y tabla periódica'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los aportes de cada modelo atómico al conocimiento de la estructura de la materia.',
            'Enuncia los tipos de enlace químico y las propiedades de los compuestos que forman.',
            'Define reactivo, producto, catalizador y ecuación química balanceada.'
          ],
          hacer: [
            'Usa la tabla periódica para determinar propiedades de elementos y predecir tipos de enlace.',
            'Balancea ecuaciones químicas sencillas aplicando la ley de conservación de la masa.',
            'Clasifica reacciones químicas según sus características y escribe ejemplos cotidianos.',
            'Realiza prácticas de laboratorio identificando variables que afectan la velocidad de reacción.'
          ],
          ser: [
            'Manipula materiales de laboratorio con precaución y sigue las normas de seguridad.',
            'Trabaja de forma cooperativa en las actividades experimentales respetando los roles.',
            'Mantiene registros ordenados de sus observaciones y resultados de laboratorio.'
          ]
        },

        competenciaCiudadana: 'Reconoce el papel de la química en el desarrollo de medicamentos, materiales y energía, y reflexiona sobre el uso responsable de sustancias químicas en el hogar y la industria.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Relaciono masa, peso, aceleración y fuerza en situaciones de movimiento de cuerpos.',
          'Explico el principio de conservación de la energía en sistemas mecánicos, eléctricos y térmicos.',
          'Identifico y describo los diferentes tipos de energía (mecánica, eléctrica, térmica, química, radiante, nuclear).'
        ],

        dba: 'Comprende los conceptos de fuerza, masa, movimiento y energía, y los aplica para explicar fenómenos mecánicos del entorno usando el marco conceptual de Newton.',

        ejesTematicos: [
          'Movimiento: posición, velocidad, aceleración',
          'Leyes de Newton: inercia, F=ma, acción y reacción',
          'Trabajo, energía cinética y potencial',
          'Principio de conservación de la energía',
          'Tipos de energía y sus transformaciones'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo las leyes del movimiento y la conservación de la energía explican el comportamiento de los objetos en la vida cotidiana y en la tecnología?',

        diagnostico: 'El 57% de los estudiantes confunde masa con peso y no aplica correctamente las leyes de Newton para calcular la fuerza resultante sobre un objeto.',

        competenciasICFES: {
          usoConocimiento: 'Aplica las leyes de Newton para calcular la fuerza neta, la aceleración y el peso de objetos en diferentes situaciones.',
          explicacion: 'Explica las transformaciones de energía en sistemas mecánicos, eléctricos y térmicos usando el principio de conservación.',
          indagacion: 'Diseña experiencias para verificar las leyes de Newton y medir variables cinemáticas.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Aplica la ley de conservación de la energía a situaciones cotidianas.',
            'Diferencia entre energía cinética y energía potencial e identifica conversiones entre ellas.'
          ]
        },

        aprendizajesICFES: ['nat-s9-04', 'nat-s9-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Distingue entre posición, velocidad y aceleración, y los calcula en movimientos rectilíneos.',
          'Aplica la segunda ley de Newton (F = ma) en situaciones de equilibrio y movimiento.',
          'Diferencia entre masa y peso, y calcula el peso en diferentes planetas.',
          'Calcula la energía cinética y potencial de un objeto y verifica su conservación.',
          'Identifica y describe transformaciones de energía en máquinas y dispositivos del entorno.'
        ],

        estrategiasMetodologicas: [
          'Experimentos con carritos y planos inclinados para medir velocidad y aceleración.',
          'Simulaciones PhET (Forces and Motion, Energy Skate Park) para visualizar fuerzas y energía.',
          'Cálculo del peso de objetos cotidianos y comparación entre planetas del sistema solar.',
          'Análisis de videos de deportes extremos para identificar conversiones de energía.',
          'Construcción de máquinas simples (palancas, poleas) para aplicar conceptos de trabajo y energía.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 8°',
          'Simulaciones PhET: Forces and Motion Basics, Energy Skate Park',
          'Materiales de laboratorio: resortes, masas, planos inclinados, dinamómetros',
          'Balanza de platillos y pesas calibradas',
          'Videos de fenómenos físicos: caída libre, colisiones, montañas rusas'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enuncia las tres leyes de Newton y las describe con ejemplos del entorno.',
            'Define trabajo, energía cinética, energía potencial y principio de conservación de la energía.',
            'Distingue entre masa y peso y explica la diferencia conceptual.'
          ],
          hacer: [
            'Calcula la fuerza neta y la aceleración de objetos usando F = ma.',
            'Calcula energía cinética (Ec = ½mv²) y energía potencial (Ep = mgh) en situaciones concretas.',
            'Verifica el principio de conservación de la energía en sistemas mecánicos sencillos.',
            'Usa simulaciones digitales para explorar las leyes del movimiento y reporta resultados.'
          ],
          ser: [
            'Demuestra curiosidad científica al relacionar la física con fenómenos del entorno.',
            'Trabaja con rigor y precisión en los cálculos y mediciones de laboratorio.',
            'Comparte sus conclusiones con sus compañeros con actitud respetuosa y argumentada.'
          ]
        },

        competenciaCiudadana: 'Reconoce cómo la comprensión de las leyes físicas ha permitido el desarrollo de tecnologías (vehículos, máquinas, energías renovables) y reflexiona sobre su impacto social y ambiental.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico el flujo de materia y energía en los ecosistemas y las consecuencias de las interacciones de los seres vivos con el entorno.',
          'Establezco relaciones entre el origen de los combustibles fósiles, su uso cotidiano y las consecuencias ambientales.',
          'Propongo alternativas para conservar la fauna y flora de mi región.'
        ],

        dba: 'Comprende el funcionamiento de los ecosistemas, el flujo de energía y materia en las cadenas tróficas, y analiza el impacto de las actividades humanas sobre la biodiversidad y el clima.',

        ejesTematicos: [
          'Ecosistemas: componentes, niveles tróficos y relaciones interespecíficas',
          'Flujo de energía y ciclos de materia (carbono, nitrógeno, agua)',
          'Biodiversidad: importancia y amenazas',
          'Impacto ambiental: deforestación, contaminación, cambio climático',
          'Proyecto integrador: plan de conservación ambiental local'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cómo el funcionamiento de los ecosistemas y la biodiversidad sustentan la vida en la Tierra, y qué responsabilidad tenemos los seres humanos en su conservación?',

        diagnostico: 'El 49% de los estudiantes no explica correctamente el flujo de energía en las cadenas tróficas ni relaciona las actividades humanas con la pérdida de biodiversidad y el cambio climático.',

        competenciasICFES: {
          usoConocimiento: 'Describe los componentes de un ecosistema, los niveles tróficos y las relaciones interespecíficas que mantienen el equilibrio ecológico.',
          explicacion: 'Explica cómo la alteración de los ciclos biogeoquímicos por actividades humanas genera desequilibrios ambientales.',
          indagacion: 'Evalúa el impacto ambiental de actividades productivas locales y propone alternativas sustentadas en evidencia científica.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'indagacion',
          afirmaciones: [
            'Explica las causas y consecuencias del cambio climático usando conceptos científicos.',
            'Propone acciones individuales y colectivas para mitigar problemas ambientales y las sustenta con evidencia.'
          ]
        },

        aprendizajesICFES: ['nat-s9-09', 'nat-s9-10'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Construye redes tróficas de ecosistemas locales identificando productores, consumidores y descomponedores.',
          'Explica la transferencia de energía del 10% entre niveles tróficos y sus implicaciones.',
          'Describe los ciclos del carbono, nitrógeno y agua, e identifica la intervención humana en ellos.',
          'Analiza las causas y consecuencias del cambio climático usando conceptos científicos.',
          'Elabora un plan de acción para conservar la biodiversidad de su entorno escolar o municipal.'
        ],

        estrategiasMetodologicas: [
          'Construcción de redes tróficas con tarjetas de organismos del ecosistema local.',
          'Análisis de casos: impacto ambiental de actividades productivas de la región (minería, agricultura, ganadería).',
          'Proyecto integrador: diagnóstico y plan de conservación ambiental del entorno escolar.',
          'Uso de mapas satelitales (Google Earth) para evidenciar cambios en la cobertura vegetal.',
          'Debate científico: desarrollo económico versus conservación ambiental.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 8°',
          'Google Earth para análisis de cambios en la cobertura vegetal',
          'Tarjetas de organismos del ecosistema local para redes tróficas',
          'Documentales sobre biodiversidad colombiana (BBC, WWF Colombia)',
          'Informes del IDEAM sobre cambio climático en Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define ecosistema, bioma, cadena trófica, red trófica y nicho ecológico.',
            'Describe los ciclos biogeoquímicos del carbono, nitrógeno y agua.',
            'Explica las causas del cambio climático y la pérdida de biodiversidad.'
          ],
          hacer: [
            'Construye redes tróficas de ecosistemas locales identificando niveles y relaciones.',
            'Calcula la eficiencia energética entre niveles tróficos y la interpreta en contexto.',
            'Analiza el impacto de actividades humanas sobre el equilibrio de un ecosistema.',
            'Presenta un plan de conservación ambiental fundamentado en evidencia científica.'
          ],
          ser: [
            'Asume compromisos concretos para reducir su huella ambiental en el cotidiano.',
            'Argumenta con datos y evidencias en debates sobre problemas ambientales.',
            'Demuestra solidaridad intergeneracional al reflexionar sobre el futuro del planeta.'
          ]
        },

        competenciaCiudadana: 'Asume compromisos ciudadanos frente a la conservación del ambiente, promueve prácticas sostenibles en su comunidad y participa activamente en la defensa de los ecosistemas locales.'
      }
    ]
  },

  // ============================================================
  // GRADO 9
  // ============================================================
  '9': {
    grado: '9°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Profundizar en los mecanismos de la evolución y la taxonomía, la química orgánica básica, la electricidad y el magnetismo, y la bioética, articulando el pensamiento científico con aplicaciones tecnológicas y sociales',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico la variabilidad en las poblaciones y la diversidad biológica como consecuencia de estrategias de reproducción, cambios genéticos y selección natural.',
          'Describo aplicaciones de la biotecnología en la cotidianidad.',
          'Describo y explico los ciclos biológicos de los organismos y los eventos de desarrollo.'
        ],

        dba: 'Comprende los mecanismos de la evolución biológica (selección natural, mutación, deriva génica) y los usa para explicar la diversidad de los seres vivos y su clasificación en la taxonomía moderna.',

        ejesTematicos: [
          'Evolución biológica: Darwin y la selección natural',
          'Evidencias de la evolución (fósiles, anatomía comparada, biogeografía, biología molecular)',
          'Genética de poblaciones: variabilidad y adaptación',
          'Taxonomía: criterios de clasificación y cinco reinos',
          'Biodiversidad colombiana y conservación'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cómo los mecanismos de la evolución explican la diversidad de los seres vivos y qué criterios usamos para clasificarlos?',

        diagnostico: 'El 53% de los estudiantes confunde la evolución con un proceso dirigido y no comprende el papel de la variabilidad genética en la selección natural.',

        competenciasICFES: {
          usoConocimiento: 'Describe los mecanismos evolutivos (selección natural, mutación, deriva génica) y los relaciona con la variabilidad de las poblaciones.',
          explicacion: 'Explica cómo la selección natural actúa sobre la variación genética para producir adaptaciones y nuevas especies.',
          indagacion: 'Analiza evidencias de la evolución (fósiles, anatomía comparada, biología molecular) para argumentar el parentesco entre organismos.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Explica cómo la selección natural actúa sobre la variación genética en una población.',
            'Interpreta árboles filogenéticos para establecer relaciones evolutivas entre organismos.'
          ]
        },

        aprendizajesICFES: ['nat-s9-02', 'nat-s9-08'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe las ideas de Darwin sobre la selección natural y las diferencia de la teoría de Lamarck.',
          'Analiza evidencias de la evolución: registro fósil, anatomía comparada, embriología y biología molecular.',
          'Explica el papel de la mutación, la reproducción sexual y la selección natural en la variabilidad.',
          'Aplica criterios taxonómicos para clasificar organismos en los cinco reinos.',
          'Construye árboles filogenéticos sencillos para establecer relaciones de parentesco.'
        ],

        estrategiasMetodologicas: [
          'Análisis comparativo de estructuras análogas y homólogas en diferentes especies.',
          'Simulación de selección natural con tarjetas de "depredadores y presas" de diferentes colores.',
          'Construcción de árboles filogenéticos usando características moleculares y morfológicas.',
          'Estudio de casos: evolución de la resistencia bacteriana a antibióticos.',
          'Investigación sobre fauna y flora endémica de Colombia amenazada de extinción.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 9°',
          'Colección de imágenes de estructuras análogas y homólogas',
          'Tarjetas de clasificación taxonómica de organismos representativos',
          'Fichas para simulación de selección natural por color de camuflaje',
          'Recursos web: Tree of Life Web Project (tolweb.org)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los postulados de la teoría de la evolución por selección natural de Darwin.',
            'Enuncia los mecanismos evolutivos: mutación, selección natural, deriva génica y flujo génico.',
            'Describe los criterios taxonómicos para clasificar a los seres vivos en los cinco reinos.'
          ],
          hacer: [
            'Analiza evidencias de la evolución e identifica cuáles son más sólidas científicamente.',
            'Resuelve ejercicios de selección natural usando modelos de genética de poblaciones.',
            'Clasifica organismos en grupos taxonómicos usando claves dicotómicas.',
            'Construye árboles filogenéticos sencillos a partir de matrices de caracteres.'
          ],
          ser: [
            'Acepta la evolución como paradigma científico con evidencia sólida, con apertura crítica.',
            'Valora la biodiversidad colombiana como patrimonio natural y cultural.',
            'Argumenta con evidencia y respeta diferentes perspectivas en debates científicos.'
          ]
        },

        competenciaCiudadana: 'Valora la biodiversidad como resultado de millones de años de evolución y asume compromisos frente a su conservación, reconociendo la responsabilidad colectiva ante la extinción de especies.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico y explico los cambios químicos en situaciones cotidianas y describo la reacción química que los explica.',
          'Realizo cálculos cuantitativos de situaciones cotidianas que involucran cambios físicos y/o químicos de la materia.',
          'Explico la estructura atómica de la materia y la tabla periódica como herramienta de organización de los elementos.'
        ],

        dba: 'Comprende la estructura y propiedades de los compuestos orgánicos básicos (hidrocarburos, alcoholes, ácidos carboxílicos) y sus aplicaciones en la vida cotidiana y en la industria.',

        ejesTematicos: [
          'Química orgánica: carbono y sus propiedades de enlace',
          'Hidrocarburos: alcanos, alquenos y alquinos',
          'Grupos funcionales: alcoholes, ácidos carboxílicos, ésteres',
          'Reacciones orgánicas básicas: combustión, esterificación, saponificación',
          'Polímeros naturales y sintéticos: aplicaciones industriales'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo la capacidad del carbono para formar cadenas largas y complejas explica la enorme diversidad de compuestos orgánicos presentes en la vida y en la industria?',

        diagnostico: 'El 58% de los estudiantes no comprende por qué el carbono es el elemento fundamental de la química orgánica ni distingue entre los principales grupos funcionales.',

        competenciasICFES: {
          usoConocimiento: 'Identifica y clasifica compuestos orgánicos según su grupo funcional y los relaciona con sus propiedades físicas y químicas.',
          explicacion: 'Explica las reacciones orgánicas básicas (combustión, esterificación, polimerización) y sus aplicaciones industriales.',
          indagacion: 'Diseña experimentos para identificar propiedades de compuestos orgánicos del entorno (aceites, alcoholes, jabones).'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Diferencia compuestos iónicos y covalentes por sus propiedades y tipos de enlace.',
            'Clasifica reacciones químicas con ejemplos cotidianos y explica su importancia.'
          ]
        },

        aprendizajesICFES: ['nat-s9-06', 'nat-s9-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe las propiedades del carbono que le permiten formar una gran diversidad de compuestos.',
          'Clasifica hidrocarburos (alcanos, alquenos, alquinos) por su fórmula y tipo de enlace.',
          'Identifica los grupos funcionales (–OH, –COOH, –COO–) y los relaciona con las propiedades del compuesto.',
          'Escribe y balancea reacciones de combustión de hidrocarburos.',
          'Describe el proceso de saponificación y la producción industrial de jabones y detergentes.'
        ],

        estrategiasMetodologicas: [
          'Modelado molecular con esferas de icopor para representar cadenas de hidrocarburos.',
          'Práctica de laboratorio: saponificación y elaboración de jabón artesanal.',
          'Análisis de etiquetas de productos del hogar para identificar compuestos orgánicos.',
          'Investigación sobre la industria petroquímica en Colombia y sus derivados.',
          'Comparación de propiedades de alcoholes, ácidos carboxílicos y ésteres del entorno.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 9°',
          'Kit de modelos moleculares (esferas y varillas) o esferas de icopor',
          'Materiales de laboratorio: aceite, hidróxido de sodio, etanol, indicadores de pH',
          'Etiquetas de productos del hogar con compuestos orgánicos',
          'Videos sobre la industria petroquímica y los plásticos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las propiedades del carbono que explican la diversidad de compuestos orgánicos.',
            'Clasifica los principales grupos funcionales orgánicos y los relaciona con sus propiedades.',
            'Define polímero y describe la diferencia entre polímeros naturales y sintéticos.'
          ],
          hacer: [
            'Representa fórmulas estructurales de hidrocarburos sencillos.',
            'Identifica grupos funcionales en fórmulas estructurales de compuestos orgánicos.',
            'Balancea reacciones de combustión de hidrocarburos.',
            'Realiza la práctica de saponificación y explica el proceso químico.'
          ],
          ser: [
            'Reflexiona sobre el impacto ambiental de los plásticos y los combustibles fósiles.',
            'Cumple las normas de seguridad en el laboratorio con responsabilidad.',
            'Investiga con honestidad académica y cita correctamente las fuentes consultadas.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre el impacto ambiental de los compuestos orgánicos de síntesis (plásticos, derivados del petróleo) y promueve prácticas de consumo responsable y reciclaje en la comunidad.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico el principio de conservación de la energía en sistemas mecánicos, eléctricos y térmicos.',
          'Identifico y describo los diferentes tipos de energía (mecánica, eléctrica, térmica, química, radiante, nuclear.',
          'Explico la formación del universo, las características del sistema solar y la dinámica de los cuerpos celestes.'
        ],

        dba: 'Comprende los fenómenos eléctricos y magnéticos, aplica la ley de Ohm para analizar circuitos básicos y relaciona la electricidad y el magnetismo con aplicaciones tecnológicas del entorno.',

        ejesTematicos: [
          'Carga eléctrica, campo eléctrico y fuerza de Coulomb',
          'Corriente eléctrica, diferencia de potencial y resistencia',
          'Ley de Ohm y circuitos en serie y paralelo',
          'Magnetismo: imanes, campo magnético y electromagnetismo',
          'Inducción electromagnética: generadores y motores'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo los fenómenos eléctricos y magnéticos, que parecen tan distintos, están profundamente relacionados y son la base de la tecnología moderna?',

        diagnostico: 'El 55% de los estudiantes no distingue entre voltaje, corriente e intensidad, y no puede calcular la resistencia en circuitos simples usando la ley de Ohm.',

        competenciasICFES: {
          usoConocimiento: 'Aplica la ley de Ohm y las leyes de Kirchhoff para analizar circuitos eléctricos en serie y paralelo.',
          explicacion: 'Explica los fenómenos de inducción electromagnética y los relaciona con el funcionamiento de generadores y motores eléctricos.',
          indagacion: 'Diseña circuitos eléctricos para verificar la ley de Ohm y mide corriente y voltaje con instrumentos adecuados.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Aplica la ley de conservación de la energía a situaciones de circuitos eléctricos.',
            'Diferencia las características de circuitos en serie y paralelo y predice su comportamiento.'
          ]
        },

        aprendizajesICFES: ['nat-s9-04', 'nat-s9-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe la carga eléctrica, el campo eléctrico y la fuerza de Coulomb con ejemplos.',
          'Aplica la ley de Ohm (V = IR) para calcular voltaje, corriente y resistencia en circuitos.',
          'Analiza circuitos en serie y paralelo calculando resistencia equivalente, voltaje y corriente.',
          'Describe el principio del electromagnetismo y la inducción de Faraday.',
          'Explica el funcionamiento de generadores y motores eléctricos usando el electromagnetismo.'
        ],

        estrategiasMetodologicas: [
          'Construcción de circuitos eléctricos sencillos con pilas, bombillas y cables.',
          'Uso del simulador PhET (Circuit Construction Kit) para circuitos en serie y paralelo.',
          'Fabricación de un electroimán con clavo, alambre de cobre y pila para explorar el electromagnetismo.',
          'Análisis de la factura de energía eléctrica del hogar: potencia, consumo y costo.',
          'Investigación sobre fuentes de energía eléctrica en Colombia: hidroeléctrica, solar, eólica.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 9°',
          'Kit de electrónica básica: pilas, bombillas LED, cables, interruptores, resistencias',
          'Multímetro digital o simulador PhET: Circuit Construction Kit',
          'Clavo grande, alambre de cobre esmaltado y pila para electroimán',
          'Factura de servicio de energía eléctrica para análisis de consumo'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enuncia la ley de Ohm y describe las variables que relaciona.',
            'Describe las diferencias entre circuitos en serie y en paralelo.',
            'Explica el principio del electromagnetismo y la inducción electromagnética de Faraday.'
          ],
          hacer: [
            'Calcula voltaje, corriente y resistencia en circuitos simples usando la ley de Ohm.',
            'Determina la resistencia equivalente en circuitos en serie y paralelo.',
            'Construye un circuito eléctrico básico y verifica la ley de Ohm experimentalmente.',
            'Fabrica un electroimán y verifica el efecto de la corriente sobre el campo magnético.'
          ],
          ser: [
            'Usa la energía eléctrica con responsabilidad y reflexiona sobre el ahorro energético.',
            'Sigue las normas de seguridad eléctrica en las prácticas de laboratorio.',
            'Comparte sus hallazgos con sus compañeros con actitud colaborativa.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre el uso responsable de la energía eléctrica, promueve el ahorro energético en el hogar y la escuela, y valora las fuentes de energía renovable como alternativa sostenible.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico la importancia del desarrollo de criterios propios frente a los dilemas éticos que plantea la ciencia y la tecnología.',
          'Identifico y evalúo el impacto de las actividades humanas sobre el clima y la biodiversidad global.',
          'Identifica y explica avances tecnológicos para la producción de alimentos, medicamentos y para el cuidado de la salud.'
        ],

        dba: 'Analiza críticamente las implicaciones éticas, sociales y ambientales de los avances biotecnológicos (transgénicos, clonación, terapia génica) y formula posiciones argumentadas sobre su uso responsable.',

        ejesTematicos: [
          'Biotecnología: historia y conceptos fundamentales',
          'Ingeniería genética: ADN recombinante, PCR y secuenciación',
          'Aplicaciones: alimentos transgénicos, medicamentos biológicos, terapia génica',
          'Dilemas bioéticos: clonación, experimentación animal, patentes de vida',
          'Proyecto integrador: propuesta bioética argumentada'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cuáles son los beneficios y los riesgos de la biotecnología moderna, y cómo debemos tomar decisiones responsables sobre su uso en la sociedad?',

        diagnostico: 'El 61% de los estudiantes no distingue entre los conceptos de biotecnología, ingeniería genética y transgénicos, y carece de argumentos científicos para evaluar dilemas bioéticos.',

        competenciasICFES: {
          usoConocimiento: 'Describe las técnicas de ingeniería genética (ADN recombinante, PCR) y las aplica en la comprensión de procesos biotecnológicos.',
          explicacion: 'Explica las aplicaciones de la biotecnología en la salud, la alimentación y el medio ambiente, con sus ventajas y riesgos.',
          indagacion: 'Evalúa críticamente dilemas bioéticos y argumenta posiciones sustentadas en evidencia científica y principios éticos.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'indagacion',
          afirmaciones: [
            'Analiza ventajas y desventajas de aplicaciones tecnológicas como los transgénicos y los antibióticos.',
            'Reconoce dilemas éticos en la investigación científica y los argumenta desde diferentes perspectivas.'
          ]
        },

        aprendizajesICFES: ['nat-s9-09', 'nat-s9-10'],
        nivelEsperado: 'Avanzado',

        evidenciasAprendizaje: [
          'Describe las técnicas básicas de ingeniería genética: ADN recombinante, vectores, PCR.',
          'Explica el proceso de producción de insulina humana mediante bacterias modificadas genéticamente.',
          'Analiza los argumentos a favor y en contra del cultivo de alimentos transgénicos.',
          'Evalúa los riesgos y beneficios de la terapia génica para enfermedades hereditarias.',
          'Presenta una posición argumentada sobre un dilema bioético usando evidencia científica y principios éticos.'
        ],

        estrategiasMetodologicas: [
          'Seminario socrático: debate estructurado sobre transgénicos usando evidencia científica.',
          'Análisis de casos reales: insulina recombinante, vacunas de ARNm, CRISPR-Cas9.',
          'Juego de roles: comité de bioética evaluando una propuesta de investigación genética.',
          'Investigación sobre el etiquetado de alimentos transgénicos en Colombia y el mundo.',
          'Proyecto integrador: propuesta bioética argumentada con evidencia científica.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 9°',
          'Artículos de divulgación científica sobre CRISPR-Cas9 y terapia génica',
          'Documentales: "Alimentar al mundo" (National Geographic), "The Gene" (PBS)',
          'Noticias de prensa sobre alimentos transgénicos y debates regulatorios',
          'Guías de debate estructurado sobre dilemas bioéticos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las técnicas de ingeniería genética y sus aplicaciones en biotecnología.',
            'Enuncia los principios bioéticos básicos (beneficencia, no maleficencia, autonomía, justicia).',
            'Explica qué son los alimentos transgénicos y cómo se producen.'
          ],
          hacer: [
            'Analiza con evidencia científica las ventajas y riesgos de aplicaciones biotecnológicas.',
            'Construye argumentos coherentes sobre dilemas bioéticos desde múltiples perspectivas.',
            'Participa con rigor argumentativo en debates sobre ciencia, tecnología y sociedad.',
            'Presenta un proyecto bioético escrito con fuentes científicas citadas correctamente.'
          ],
          ser: [
            'Desarrolla criterios propios sobre dilemas éticos de la ciencia con apertura y respeto.',
            'Escucha y valora argumentos distintos a los suyos en debates científico-éticos.',
            'Demuestra honestidad intelectual al reconocer la incertidumbre científica en algunos temas.'
          ]
        },

        competenciaCiudadana: 'Desarrolla capacidad de tomar decisiones informadas sobre dilemas científico-éticos de relevancia social (transgénicos, clonación, uso de datos genéticos) y participa activamente en debates ciudadanos sobre ciencia y tecnología.'
      }
    ]
  },

  // ============================================================
  // GRADO 10
  // ============================================================
  '10': {
    grado: '10°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Desarrollar comprensión profunda de la biología celular y molecular, la química inorgánica, la mecánica clásica y la termodinámica, articulando el pensamiento científico con aplicaciones tecnológicas y análisis crítico de problemas contemporáneos',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico los mecanismos de herencia en términos de los postulados de Mendel y de la estructura del ADN.',
          'Explico la función de las enzimas como catalizadores de reacciones bioquímicas.',
          'Explico los mecanismos de regulación del organismo (homeostasis) y las respuestas al estrés ambiental.'
        ],

        dba: 'Comprende la estructura y función de la célula como unidad de vida, los procesos de división celular (mitosis y meiosis) y los mecanismos moleculares de la herencia genética (replicación, transcripción y traducción del ADN).',

        ejesTematicos: [
          'Célula eucariota y procariota: estructura y función de organelos',
          'Mitosis: fases y significado biológico',
          'Meiosis: fases, variabilidad y reproducción sexual',
          'ADN: estructura, replicación y reparación',
          'Dogma central de la biología: transcripción y traducción'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cómo la información genética almacenada en el ADN dirige todos los procesos celulares y se transmite con fidelidad de generación en generación?',

        diagnostico: 'El 56% de los estudiantes no comprende la diferencia entre mitosis y meiosis, ni el proceso de síntesis de proteínas a partir del ADN.',

        competenciasICFES: {
          usoConocimiento: 'Describe el proceso de replicación del ADN y explica los mecanismos que garantizan la fidelidad de la copia.',
          explicacion: 'Explica cómo la información genética del ADN se transcribe a ARN y se traduce en proteínas, relacionando cada etapa con las estructuras celulares involucradas.',
          indagacion: 'Diseña experimentos para evidenciar procesos celulares (división, respiración, fotosíntesis) y analiza los resultados.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe el proceso de transcripción y traducción del ADN y su relación con la síntesis de proteínas.',
            'Explica cómo las mutaciones génicas pueden causar enfermedades hereditarias.'
          ]
        },

        aprendizajesICFES: ['nat-s11-01', 'nat-s11-06'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Compara las estructuras y funciones de células procariotas y eucariotas (animales y vegetales).',
          'Describe las fases de la mitosis e identifica su importancia en el crecimiento y reparación de tejidos.',
          'Diferencia mitosis y meiosis, y relaciona la meiosis con la reproducción sexual y la variabilidad genética.',
          'Describe la estructura del ADN (doble hélice, nucleótidos, bases nitrogenadas) y el proceso de replicación.',
          'Explica el proceso de transcripción y traducción, identificando los roles del ADN, ARNm, ARNt y ribosomas.'
        ],

        estrategiasMetodologicas: [
          'Observación de células en mitosis con microscopio (raíces de cebolla o preparados comerciales).',
          'Modelado de la estructura del ADN con materiales reciclables (esferas de icopor, palillos).',
          'Simulación del proceso de traducción proteica con tarjetas de codones y anticodones.',
          'Análisis de animaciones interactivas sobre mitosis y meiosis (HHMI BioInteractive).',
          'Elaboración de maquetas comparativas de célula animal y vegetal.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 10°',
          'Microscopio óptico y preparados de raíces de cebolla en mitosis',
          'Animaciones HHMI BioInteractive sobre mitosis, meiosis y síntesis de proteínas',
          'Esferas de colores y palillos para modelar la estructura del ADN',
          'Tarjetas de codones y anticodones para simular la traducción proteica'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe la estructura del ADN, los tipos de ARN y sus roles en la síntesis de proteínas.',
            'Distingue mitosis y meiosis por sus fases, productos y función biológica.',
            'Enuncia el dogma central de la biología molecular y las enzimas involucradas en cada etapa.'
          ],
          hacer: [
            'Identifica las fases de la mitosis en preparados microscópicos.',
            'Construye un modelo tridimensional de la doble hélice del ADN.',
            'Simula el proceso de traducción usando tarjetas de codones y el código genético.',
            'Predice las consecuencias de una mutación puntual o de una deleción en la secuencia de ADN.'
          ],
          ser: [
            'Muestra curiosidad científica por los mecanismos moleculares de la vida.',
            'Trabaja con cuidado y precisión en las observaciones microscópicas.',
            'Valora la investigación en biología molecular como fundamento de la medicina moderna.'
          ]
        },

        competenciaCiudadana: 'Comprende las bases moleculares de enfermedades hereditarias y reflexiona sobre las implicaciones éticas y sociales de la medicina genómica y la terapia génica.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico los modelos atómicos que sustentan el desarrollo de la química y la física moderna.',
          'Explico el enlace químico y las propiedades de los compuestos orgánicos e inorgánicos.',
          'Verifico la conservación de la masa en reacciones químicas y establezco relaciones estequiométricas.'
        ],

        dba: 'Comprende los principios de la química inorgánica: nomenclatura, enlace químico, tipos de reacciones y estequiometría, y los aplica para analizar procesos químicos industriales y cotidianos.',

        ejesTematicos: [
          'Nomenclatura de compuestos inorgánicos: óxidos, hidróxidos, ácidos y sales',
          'Enlace químico: covalente, iónico y metálico; geometría molecular',
          'Soluciones: concentración, solubilidad y coloides',
          'Estequiometría: mol, masa molar, reactivo limitante',
          'Equilibrio químico y principio de Le Chatelier'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo la nomenclatura, la estequiometría y el equilibrio químico nos permiten predecir qué sucede en las reacciones y diseñar procesos industriales eficientes?',

        diagnostico: 'El 60% de los estudiantes tiene dificultades para nombrar compuestos inorgánicos correctamente y no comprende el concepto de mol ni puede realizar cálculos estequiométricos básicos.',

        competenciasICFES: {
          usoConocimiento: 'Aplica las reglas de nomenclatura IUPAC para nombrar compuestos inorgánicos y las relaciona con su composición y propiedades.',
          explicacion: 'Realiza cálculos estequiométricos para determinar cantidades de reactivos y productos en reacciones químicas.',
          indagacion: 'Aplica el principio de Le Chatelier para predecir el efecto de cambios en las condiciones de equilibrio.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Aplica el principio de Le Chatelier para predecir el efecto de cambios en concentración, temperatura o presión.',
            'Relaciona conceptos de pH, ácidos, bases y soluciones tampón con procesos biológicos.'
          ]
        },

        aprendizajesICFES: ['nat-s11-05', 'nat-s11-06'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Nombra y escribe fórmulas de óxidos, hidróxidos, ácidos y sales usando nomenclatura IUPAC.',
          'Distingue compuestos iónicos y covalentes por su geometría molecular y propiedades físicas.',
          'Calcula la concentración de soluciones (molaridad, normalidad, % en masa).',
          'Realiza cálculos estequiométricos identificando el reactivo limitante y el rendimiento de una reacción.',
          'Predice el efecto de cambios de temperatura, presión y concentración sobre un equilibrio químico.'
        ],

        estrategiasMetodologicas: [
          'Práctica de nomenclatura: juego de tarjetas con nombres y fórmulas de compuestos inorgánicos.',
          'Laboratorio de soluciones: preparación de soluciones de concentración conocida.',
          'Cálculos estequiométricos con situaciones reales: producción de acero, fabricación de cemento.',
          'Simulación del equilibrio con globos inflados para ilustrar el principio de Le Chatelier.',
          'Análisis del proceso industrial Haber-Bosch para síntesis de amoníaco.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 10°',
          'Tabla periódica y tabla de valencias para nomenclatura',
          'Materiales de laboratorio: soluciones, indicadores de pH, bureta, erlenmeyer',
          'Simulador de equilibrio químico (PhET Reactions & Rates)',
          'Ficha técnica del proceso Haber-Bosch para síntesis de amoníaco'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las reglas de nomenclatura IUPAC para los principales compuestos inorgánicos.',
            'Define mol, masa molar y estequiometría, y explica el concepto de reactivo limitante.',
            'Enuncia el principio de Le Chatelier y describe sus aplicaciones en la industria química.'
          ],
          hacer: [
            'Nombra y escribe fórmulas de compuestos inorgánicos correctamente.',
            'Calcula la molaridad de soluciones y las prepara en el laboratorio.',
            'Resuelve cálculos estequiométricos incluyendo reactivo limitante y rendimiento.',
            'Predice y explica el desplazamiento del equilibrio ante perturbaciones externas.'
          ],
          ser: [
            'Maneja con responsabilidad los reactivos químicos en el laboratorio siguiendo protocolos.',
            'Trabaja con orden y precisión en los cálculos estequiométricos.',
            'Reflexiona sobre las aplicaciones de la química en la industria y el bienestar social.'
          ]
        },

        competenciaCiudadana: 'Relaciona el conocimiento químico con problemas sociales como la contaminación por metales pesados, la acidificación de océanos y la producción sostenible de alimentos, valorando la química como herramienta para el desarrollo.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico las leyes del movimiento de Newton y las aplico en situaciones cotidianas.',
          'Relaciono el trabajo y la energía con las máquinas simples y los sistemas mecánicos.',
          'Explico los principios de la termodinámica y sus aplicaciones en máquinas térmicas.'
        ],

        dba: 'Comprende los principios de la mecánica clásica de Newton, aplica las leyes del movimiento para resolver problemas de dinámica y analiza la termodinámica en sistemas mecánicos y térmicos del entorno.',

        ejesTematicos: [
          'Cinemática: MRU, MRUA, caída libre y movimiento parabólico',
          'Dinámica: fuerzas, diagramas de cuerpo libre y leyes de Newton',
          'Trabajo, potencia y energía mecánica',
          'Colisiones: cantidad de movimiento y su conservación',
          'Termodinámica: temperatura, calor y leyes termodinámicas'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo las leyes de Newton y los principios termodinámicos explican el movimiento de los objetos y el funcionamiento de las máquinas que transforman energía?',

        diagnostico: 'El 52% de los estudiantes no puede trazar diagramas de cuerpo libre correctamente ni aplicar las leyes de Newton para calcular la aceleración de un sistema con múltiples fuerzas.',

        competenciasICFES: {
          usoConocimiento: 'Aplica las leyes de Newton para analizar situaciones de movimiento con múltiples fuerzas usando diagramas de cuerpo libre.',
          explicacion: 'Explica la conservación de la cantidad de movimiento en colisiones y la relaciona con el principio de Newton de acción y reacción.',
          indagacion: 'Diseña y realiza experimentos para medir aceleración, fuerza y trabajo, verificando las leyes de Newton experimentalmente.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Aplica el primer principio de la termodinámica (conservación de energía) en situaciones concretas.',
            'Explica el segundo principio de la termodinámica en términos de entropía y procesos espontáneos.'
          ]
        },

        aprendizajesICFES: ['nat-s11-03', 'nat-s11-06'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Calcula posición, velocidad y aceleración en MRU, MRUA y caída libre.',
          'Traza diagramas de cuerpo libre y calcula la fuerza neta y la aceleración de un sistema.',
          'Calcula trabajo, potencia y energía mecánica en situaciones concretas.',
          'Aplica la conservación de la cantidad de movimiento en colisiones elásticas e inelásticas.',
          'Explica las leyes de la termodinámica y las aplica al análisis de máquinas térmicas.'
        ],

        estrategiasMetodologicas: [
          'Experimentos con carritos de inercia en pistas de aire para verificar las leyes de Newton.',
          'Simulaciones PhET: Forces and Motion, Collision Lab para dinámica y colisiones.',
          'Cálculo de la eficiencia de una máquina térmica simple usando el ciclo de Carnot.',
          'Análisis del movimiento en videos de deportes (lanzamiento de proyectiles, saltos).',
          'Resolución de problemas de dinámica con diagramas de cuerpo libre paso a paso.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 10°',
          'Simulaciones PhET: Forces and Motion Basics, Collision Lab, Energy Skate Park',
          'Carros de inercia, planos inclinados, dinamómetros y cronómetros',
          'Videos de análisis de movimiento (Tracker: herramienta de análisis de video)',
          'Calculadora científica'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enuncia las tres leyes de Newton y las aplica en ejemplos del entorno.',
            'Define trabajo, potencia, energía cinética y potencial, y el principio de conservación.',
            'Describe las leyes de la termodinámica y el concepto de entropía.'
          ],
          hacer: [
            'Traza diagramas de cuerpo libre y calcula aceleración con múltiples fuerzas.',
            'Resuelve problemas de cinemática (MRU, MRUA, proyectiles) con precisión.',
            'Calcula la cantidad de movimiento antes y después de colisiones y verifica su conservación.',
            'Analiza la eficiencia de una máquina térmica usando los principios de la termodinámica.'
          ],
          ser: [
            'Trabaja con rigor y precisión en la resolución de problemas de mecánica.',
            'Relaciona los conceptos físicos con aplicaciones en ingeniería y tecnología.',
            'Demuestra perseverancia ante la dificultad de problemas de múltiples pasos.'
          ]
        },

        competenciaCiudadana: 'Relaciona los principios de la mecánica y la termodinámica con el diseño de tecnologías de transporte, construcción y producción de energía, reflexionando sobre el impacto ambiental del consumo energético.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Describo el comportamiento eléctrico y magnético de la materia y explico principios de electromagnetismo.',
          'Relaciono los conocimientos científicos y tecnológicos con aplicaciones en la vida cotidiana.',
          'Evalúo el impacto del uso de recursos naturales en el desarrollo económico de Colombia y el mundo.'
        ],

        dba: 'Comprende los fenómenos ondulatorios y su naturaleza, analiza la naturaleza dual de la luz (onda-corpúsculo) y las interacciones de las ondas con la materia, y relaciona estos principios con aplicaciones tecnológicas.',

        ejesTematicos: [
          'Movimiento ondulatorio: propiedades de las ondas',
          'Sonido: producción, propagación e intensidad',
          'Luz: naturaleza dual, reflexión, refracción y difracción',
          'Espectro electromagnético y sus aplicaciones',
          'Proyecto integrador: física de la comunicación y la tecnología'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo la comprensión de la naturaleza ondulatoria de la luz y el sonido ha posibilitado el desarrollo de tecnologías de comunicación que transforman la sociedad moderna?',

        diagnostico: 'El 50% de los estudiantes no comprende la diferencia entre ondas mecánicas y electromagnéticas, ni la naturaleza dual (onda-corpúsculo) de la luz.',

        competenciasICFES: {
          usoConocimiento: 'Describe las propiedades de las ondas (amplitud, frecuencia, longitud de onda, velocidad) y las aplica para explicar fenómenos de sonido y luz.',
          explicacion: 'Explica los fenómenos de reflexión, refracción, difracción e interferencia de la luz usando el modelo ondulatorio.',
          indagacion: 'Diseña experimentos ópticos para verificar las leyes de reflexión y refracción y medir el índice de refracción.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Identifica las características de las ondas: amplitud, frecuencia, longitud de onda y velocidad.',
            'Explica fenómenos como la reflexión, la refracción y la difracción de la luz con ejemplos del entorno.'
          ]
        },

        aprendizajesICFES: ['nat-s11-04', 'nat-s11-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe las propiedades de las ondas y calcula frecuencia, longitud de onda y velocidad.',
          'Diferencia ondas mecánicas y electromagnéticas, y clasifica el espectro electromagnético.',
          'Aplica las leyes de reflexión y refracción para explicar la formación de imágenes en espejos y lentes.',
          'Explica la dispersión de la luz blanca por un prisma y la formación del arco iris.',
          'Describe aplicaciones del espectro electromagnético: radares, microondas, rayos X, ultrasonido.'
        ],

        estrategiasMetodologicas: [
          'Laboratorio de óptica: reflexión y refracción con espejo, vidrio y medidor de ángulos.',
          'Experimento de dispersión de la luz con prisma o CD.',
          'Análisis de la ecografía y los rayos X como aplicaciones médicas de las ondas.',
          'Simulaciones PhET: Wave on a String, Bending Light, Sound.',
          'Proyecto: diseño de un instrumento musical analizando la física del sonido.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 10°',
          'Materiales de óptica: espejo plano, prisma, lentes convergentes y divergentes',
          'Simulaciones PhET: Wave on a String, Bending Light, Sound and Waves',
          'Diapasones de diferentes frecuencias para experimentos de sonido',
          'Imágenes del espectro electromagnético y sus aplicaciones'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define las propiedades de las ondas y describe las diferencias entre ondas mecánicas y electromagnéticas.',
            'Enuncia las leyes de reflexión y refracción y describe el índice de refracción.',
            'Describe el espectro electromagnético y las aplicaciones tecnológicas de cada región.'
          ],
          hacer: [
            'Calcula frecuencia, período, longitud de onda y velocidad de ondas.',
            'Verifica experimentalmente las leyes de reflexión y refracción con espejos y prismas.',
            'Construye diagramas de rayos para determinar la imagen en espejos y lentes.',
            'Relaciona aplicaciones tecnológicas (ecografía, radar, fibra óptica) con principios ondulatorios.'
          ],
          ser: [
            'Muestra curiosidad científica al descubrir la naturaleza ondulatoria del mundo.',
            'Trabaja colaborativamente en las prácticas de laboratorio de óptica.',
            'Reflexiona sobre el papel de la ciencia en el desarrollo de tecnologías de comunicación.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre el impacto de las tecnologías de comunicación basadas en ondas electromagnéticas (internet, telefonía, radar) en la sociedad y promueve su uso responsable y equitativo.'
      }
    ]
  },

  // ============================================================
  // GRADO 11
  // ============================================================
  '11': {
    grado: '11°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Integrar y profundizar los conocimientos de genética molecular, biotecnología, química orgánica avanzada, física moderna y análisis crítico de problemas científico-ambientales globales, preparando al estudiante para la vida universitaria y las pruebas Saber 11',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico los mecanismos de herencia en términos de los postulados de Mendel y de la estructura del ADN.',
          'Describo y explico técnicas de ingeniería genética y sus aplicaciones en la producción de alimentos, fármacos y terapias.',
          'Argumento ética y científicamente en torno a aplicaciones de la biotecnología (clonación, transgénicos, terapia génica).'
        ],

        dba: 'Comprende los mecanismos moleculares de regulación génica, los patrones de herencia no mendeliana y las técnicas de ingeniería genética moderna, y argumenta con criterios éticos sobre sus aplicaciones.',

        ejesTematicos: [
          'Regulación génica: operones, factores de transcripción y epigenética',
          'Herencia no mendeliana: codominancia, dominancia incompleta, ligamiento al sexo',
          'Ingeniería genética: CRISPR-Cas9, secuenciación genómica y bioinformática',
          'Genómica y proteómica: proyectos de secuenciación del genoma',
          'Terapia génica y medicina de precisión: avances y dilemas éticos'
        ],

        tiposPensamiento: ['Entorno Vivo', 'CTS'],

        preguntaProblema: '¿Cómo la comprensión de los mecanismos moleculares de la herencia y las nuevas herramientas de edición genómica están transformando la medicina y generando nuevos dilemas éticos?',

        diagnostico: 'El 55% de los estudiantes no comprende la herencia ligada al sexo ni los mecanismos de regulación génica, y no tiene argumentos sólidos para debatir sobre bioética en genómica.',

        competenciasICFES: {
          usoConocimiento: 'Describe los mecanismos de regulación génica y los relaciona con la diferenciación celular y el desarrollo embrionario.',
          explicacion: 'Explica patrones de herencia no mendeliana (codominancia, herencia ligada al sexo) y los aplica para predecir fenotipos en cruces genéticos.',
          indagacion: 'Evalúa críticamente las aplicaciones de la ingeniería genética (CRISPR, terapia génica) desde perspectivas científicas y éticas.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Describe el proceso de transcripción y traducción del ADN y su relación con la síntesis de proteínas.',
            'Relaciona la regulación génica con procesos de diferenciación celular y desarrollo embrionario.'
          ]
        },

        aprendizajesICFES: ['nat-s11-01', 'nat-s11-07'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe el modelo del operón lac y explica la regulación génica en procariotas.',
          'Resuelve problemas de herencia ligada al sexo, codominancia y dominancia incompleta.',
          'Explica el funcionamiento del sistema CRISPR-Cas9 como herramienta de edición genómica.',
          'Analiza el impacto del Proyecto Genoma Humano en la medicina personalizada.',
          'Argumenta con criterios éticos sobre el uso de la terapia génica en enfermedades hereditarias.'
        ],

        estrategiasMetodologicas: [
          'Análisis de genealogías de enfermedades ligadas al sexo (hemofilia, daltonismo).',
          'Estudio de caso: uso de CRISPR para curar anemia falciforme (publicaciones recientes).',
          'Debate bioético: ¿es éticamente aceptable modificar el genoma de embriones humanos?',
          'Investigación sobre el Proyecto Genoma Humano y la medicina de precisión.',
          'Uso de herramientas de bioinformática gratuitas (BLAST, NCBI) para comparar secuencias de ADN.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 11°',
          'Artículos de divulgación: "CRISPR y el futuro de la medicina genética" (Investigación y Ciencia)',
          'Herramientas de bioinformática en línea: BLAST (NCBI), Genome Browser',
          'Genealogías de familias reales con enfermedades ligadas al sexo',
          'Documental: "The Gene" de Ken Burns (PBS) - selección de capítulos relevantes'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los mecanismos de regulación génica en procariotas (operón lac, operón trp).',
            'Enuncia los patrones de herencia no mendeliana y los distingue de la herencia mendeliana clásica.',
            'Explica el funcionamiento del sistema CRISPR-Cas9 y sus aplicaciones actuales.'
          ],
          hacer: [
            'Resuelve cruces genéticos de herencia ligada al sexo, codominancia y dominancia incompleta.',
            'Analiza genealogías para determinar el patrón de herencia de una enfermedad.',
            'Usa herramientas básicas de bioinformática para comparar secuencias de ADN.',
            'Elabora un ensayo argumentativo sobre un dilema bioético en genómica.'
          ],
          ser: [
            'Desarrolla criterios éticos propios sobre la modificación del genoma humano.',
            'Valora la honestidad intelectual al reconocer incertidumbres en el conocimiento científico.',
            'Demuestra respeto por posiciones diferentes en debates sobre bioética y genómica.'
          ]
        },

        competenciaCiudadana: 'Desarrolla criterios éticos propios sobre el uso de la biotecnología y la edición genómica, y participa informada y responsablemente en debates ciudadanos sobre las implicaciones sociales de la genómica.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explico el enlace químico y las propiedades de los compuestos orgánicos e inorgánicos.',
          'Verifico la conservación de la masa en reacciones químicas y establezco relaciones estequiométricas.',
          'Explico los modelos atómicos que sustentan el desarrollo de la química y la física moderna.'
        ],

        dba: 'Comprende la química orgánica avanzada: nomenclatura sistemática, propiedades de compuestos con varios grupos funcionales, y los mecanismos de reacciones orgánicas relevantes en bioquímica e industria.',

        ejesTematicos: [
          'Nomenclatura IUPAC de compuestos orgánicos polifuncionales',
          'Isomería: estructural (cadena, posición, función) y estereoisomería',
          'Reacciones de sustitución, adición y eliminación en compuestos orgánicos',
          'Biomoléculas avanzadas: aminoácidos, proteínas, nucleótidos y ácidos nucleicos',
          'Química verde y síntesis sostenible'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo la estructura tridimensional de las moléculas orgánicas determina su reactividad, sus propiedades biológicas y sus aplicaciones en la industria farmacéutica y alimentaria?',

        diagnostico: 'El 62% de los estudiantes no puede nombrar compuestos orgánicos con más de un grupo funcional ni distinguir entre diferentes tipos de isomería.',

        competenciasICFES: {
          usoConocimiento: 'Identifica y nombra compuestos orgánicos polifuncionales, distingue tipos de isomería y relaciona la estructura molecular con las propiedades del compuesto.',
          explicacion: 'Explica los mecanismos de reacciones orgánicas básicas (sustitución, adición, eliminación) y los relaciona con procesos bioquímicos.',
          indagacion: 'Diseña síntesis orgánicas sencillas seleccionando reactivos y condiciones de reacción adecuados.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Describe los tipos de enlace químico y las propiedades de los compuestos que forman.',
            'Clasifica reacciones químicas según su tipo y describe su importancia en la industria y la vida.'
          ]
        },

        aprendizajesICFES: ['nat-s11-05', 'nat-s11-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Nombra y escribe fórmulas de compuestos orgánicos polifuncionales usando la nomenclatura IUPAC.',
          'Distingue isómeros estructurales y estereoisómeros (enantiómeros, diastereómeros) con ejemplos.',
          'Predice los productos de reacciones de sustitución nucleofílica, adición y eliminación.',
          'Describe la estructura de los 20 aminoácidos esenciales y su formación en péptidos.',
          'Analiza principios de la química verde y los aplica al diseño de procesos sostenibles.'
        ],

        estrategiasMetodologicas: [
          'Modelado molecular con kits 3D para visualizar isómeros y estereoisómeros.',
          'Práctica de laboratorio: síntesis del ácido acetilsalicílico (aspirina) como modelo de síntesis orgánica.',
          'Análisis de prospectos de medicamentos: relación entre estructura molecular y acción farmacológica.',
          'Investigación sobre la química verde: reacciones enzimáticas versus síntesis convencional.',
          'Ejercicios de nomenclatura con software de dibujado molecular (ChemDraw gratis o Marvin Sketch).'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 11°',
          'Kit de modelos moleculares tridimensionales para química orgánica',
          'Materiales de laboratorio para síntesis de aspirina: ácido salicílico, anhídrido acético, H₂SO₄',
          'Software de dibujado molecular: ChemDoodle Web o Marvin Sketch (gratuitos)',
          'Prospectos de medicamentos para análisis de estructura molecular'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los tipos de isomería orgánica (estructural y estereoisomería) con ejemplos.',
            'Enuncia los mecanismos básicos de reacciones orgánicas de sustitución, adición y eliminación.',
            'Define los principios de la química verde y su importancia para el desarrollo sostenible.'
          ],
          hacer: [
            'Nombra y escribe estructuras de compuestos orgánicos polifuncionales.',
            'Identifica pares de enantiómeros y diastereómeros usando modelos moleculares.',
            'Predice productos de reacciones orgánicas básicas y balancea las ecuaciones.',
            'Realiza la síntesis de aspirina y analiza el rendimiento de la reacción.'
          ],
          ser: [
            'Trabaja con responsabilidad en las prácticas de química orgánica siguiendo protocolos de seguridad.',
            'Valora la química como base de la industria farmacéutica y alimentaria.',
            'Reflexiona sobre la importancia de la química verde para un desarrollo sostenible.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre el papel de la industria química en el desarrollo social y económico, y promueve el uso de principios de química verde para minimizar el impacto ambiental de los procesos productivos.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Explica la naturaleza ondulatoria de la luz y su comportamiento al interactuar con distintos materiales.',
          'Reconozco aplicaciones de la física moderna (relatividad, física cuántica) en la tecnología actual.',
          'Diseñan investigaciones y evalúan la solidez de sus conclusiones a partir de criterios lógicos y metodológicos.'
        ],

        dba: 'Comprende los fundamentos de la física moderna: la teoría cuántica de la luz, el efecto fotoeléctrico, la dualidad onda-partícula y los principios de la relatividad especial, relacionándolos con tecnologías actuales.',

        ejesTematicos: [
          'Crisis de la física clásica: radiación del cuerpo negro y efecto fotoeléctrico',
          'Cuantización de la energía: el cuanto de Planck y el fotón de Einstein',
          'Dualidad onda-partícula: experimento de la doble rendija y principio de incertidumbre',
          'Relatividad especial de Einstein: postulados, dilatación del tiempo y equivalencia masa-energía',
          'Física nuclear: estructura del núcleo, radiactividad y fisión-fusión nuclear'
        ],

        tiposPensamiento: ['Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo la física moderna (cuántica y relativista) revolucionó nuestra comprensión del universo y posibilitó tecnologías como el láser, la energía nuclear y los semiconductores?',

        diagnostico: 'El 65% de los estudiantes no tiene ningún referente conceptual sobre física cuántica o relatividad, y no puede relacionar estos conceptos con tecnologías del mundo actual.',

        competenciasICFES: {
          usoConocimiento: 'Describe los postulados de la relatividad especial y calcula la energía equivalente a una masa usando E = mc².',
          explicacion: 'Explica el efecto fotoeléctrico y la dualidad onda-partícula como evidencias de la necesidad de la física cuántica.',
          indagacion: 'Analiza críticamente aplicaciones de la física nuclear (medicina, energía) evaluando sus beneficios y riesgos.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Explica el electromagnetismo y sus aplicaciones (motores, generadores, transformadores).',
            'Describe los modelos atómicos y su evolución hacia el modelo cuántico.'
          ]
        },

        aprendizajesICFES: ['nat-s11-04', 'nat-s11-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica la cuantización de la energía como solución al problema de la radiación del cuerpo negro.',
          'Describe el efecto fotoeléctrico y calcula la energía de fotones usando E = hf.',
          'Explica la dualidad onda-partícula y el principio de incertidumbre de Heisenberg.',
          'Enuncia los postulados de la relatividad especial y calcula efectos relativistas simples.',
          'Describe los tipos de radiactividad (α, β, γ) y calcula períodos de semidesintegración.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo de la física moderna: desde Maxwell hasta el modelo estándar.',
          'Análisis del experimento de la doble rendija con simulaciones interactivas.',
          'Resolución de problemas de efecto fotoeléctrico y cálculo de energía de fotones.',
          'Debate: ¿debe Colombia incorporar energía nuclear en su matriz energética?',
          'Investigación sobre aplicaciones de la física cuántica: láser, LED, resonancia magnética.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 11° (capítulos de física moderna)',
          'Simulación del experimento de la doble rendija (Young\'s Double Slit - PhET)',
          'Videos: "Física Cuántica para principiantes" (YouTube - Canal de ciencias)',
          'Artículos de divulgación sobre aplicaciones de la física cuántica',
          'Tabla de isótopos radiactivos y sus períodos de semidesintegración'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el experimento del efecto fotoeléctrico y su importancia para el desarrollo de la física cuántica.',
            'Enuncia los dos postulados de la relatividad especial y sus consecuencias (dilatación del tiempo, contracción de la longitud).',
            'Describe los tipos de radiactividad y el principio de conservación en reacciones nucleares.'
          ],
          hacer: [
            'Calcula la energía de fotones y la longitud de onda umbral para el efecto fotoeléctrico.',
            'Calcula la energía de reposo usando E = mc² en situaciones de reacciones nucleares.',
            'Determina la cantidad de sustancia radiactiva restante después de n períodos de semidesintegración.',
            'Analiza con evidencia científica el balance costo-beneficio de la energía nuclear.'
          ],
          ser: [
            'Demuestra apertura conceptual ante ideas radicalmente nuevas de la física cuántica y relativista.',
            'Reflexiona con responsabilidad ciudadana sobre el uso de la energía nuclear.',
            'Valora la historia de la física como proceso de construcción colectiva del conocimiento.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre las implicaciones éticas, sociales y ambientales de la energía nuclear y las tecnologías cuánticas emergentes, y participa informadamente en debates sobre la matriz energética del futuro.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Analizo críticamente implicaciones éticas, sociales, económicas y ambientales de desarrollos tecnológicos.',
          'Establezco relaciones entre el modelo energético global y el cambio climático.',
          'Propongo alternativas de producción y consumo sostenibles.'
        ],

        dba: 'Integra los conocimientos de biología, química y física para analizar problemas ambientales globales (cambio climático, pérdida de biodiversidad, contaminación), y desarrolla propuestas fundamentadas de producción y consumo sostenibles.',

        ejesTematicos: [
          'Ciclos biogeoquímicos avanzados: carbono, nitrógeno, fósforo e interacciones',
          'Cambio climático: causas, evidencias científicas y proyecciones',
          'Pérdida de biodiversidad: causas, consecuencias y estrategias de conservación',
          'Energías renovables y transición energética',
          'Proyecto integrador Saber 11: síntesis interdisciplinar de ciencias naturales'
        ],

        tiposPensamiento: ['Entorno Vivo', 'Entorno Físico', 'CTS'],

        preguntaProblema: '¿Cómo los conocimientos integrados de biología, química y física nos permiten comprender los problemas ambientales globales y proponer soluciones sostenibles fundamentadas en evidencia científica?',

        diagnostico: 'El 58% de los estudiantes no puede integrar conceptos de biología, química y física para explicar el cambio climático, y no tiene argumentos sólidos para las pruebas Saber 11 en ciencias.',

        competenciasICFES: {
          usoConocimiento: 'Integra conceptos de biología, química y física para explicar los mecanismos del cambio climático y la pérdida de biodiversidad.',
          explicacion: 'Explica cómo la alteración de los ciclos biogeoquímicos por actividades humanas genera desequilibrios ambientales con consecuencias globales.',
          indagacion: 'Diseña y presenta una propuesta de investigación o acción para abordar un problema ambiental local o global, con metodología científica rigurosa.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'indagacion',
          afirmaciones: [
            'Evalúa las implicaciones éticas, sociales y ambientales de tecnologías emergentes.',
            'Argumenta posiciones sobre problemas científico-ambientales globales usando evidencia y múltiples perspectivas.'
          ]
        },

        aprendizajesICFES: ['nat-s11-07', 'nat-s11-10'],
        nivelEsperado: 'Avanzado',

        evidenciasAprendizaje: [
          'Describe los ciclos del carbono, nitrógeno, fósforo y agua, e identifica los impactos humanos en cada uno.',
          'Explica el efecto invernadero, el calentamiento global y las consecuencias del cambio climático con datos científicos actualizados.',
          'Analiza las principales causas de pérdida de biodiversidad y evalúa estrategias de conservación.',
          'Compara fuentes de energía renovable y no renovable evaluando su impacto ambiental y viabilidad.',
          'Resuelve simulacros de preguntas tipo Saber 11 en el área de Ciencias Naturales con nivel satisfactorio.'
        ],

        estrategiasMetodologicas: [
          'Análisis de informes del IPCC y del IDEAM sobre cambio climático en Colombia.',
          'Proyecto integrador: propuesta de solución a un problema ambiental local con metodología científica.',
          'Simulacros semanales de preguntas tipo Saber 11 en ciencias naturales con análisis de errores.',
          'Visita virtual o presencial a una planta de energía solar o eólica de la región.',
          'Presentación y defensa del proyecto integrador ante un comité evaluador (pares y docentes).'
        ],

        materialesEducativos: [
          'Cuadernillo de simulacros ICFES Saber 11 - Ciencias Naturales (pruebas anteriores)',
          'Informe IPCC 2023 (resumen para responsables de políticas, versión en español)',
          'Informe IDEAM sobre el estado del ambiente en Colombia',
          'Videos: "Años de vida en el planeta" (NASA Earth Observatory)',
          'Herramientas de análisis de datos ambientales: Our World in Data, Climate Trace'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los ciclos biogeoquímicos y explica cómo su alteración genera impactos ambientales.',
            'Enuncia las causas y consecuencias del cambio climático con base en el consenso científico.',
            'Compara las ventajas y desventajas de las principales fuentes de energía renovable y no renovable.'
          ],
          hacer: [
            'Analiza datos climáticos e identifica tendencias y anomalías significativas.',
            'Resuelve simulacros Saber 11 de ciencias naturales con desempeño en nivel satisfactorio o superior.',
            'Diseña y presenta un proyecto de investigación ambiental con metodología científica rigurosa.',
            'Integra conceptos de biología, química y física en la resolución de problemas ambientales complejos.'
          ],
          ser: [
            'Asume compromisos concretos de ciudadanía ambiental en su vida cotidiana.',
            'Reflexiona con madurez sobre su proceso de aprendizaje en ciencias naturales durante la educación media.',
            'Valora las ciencias naturales como herramienta indispensable para afrontar los desafíos ambientales globales.'
          ]
        },

        competenciaCiudadana: 'Asume compromisos ciudadanos frente a la crisis climática y la pérdida de biodiversidad, promueve la transición energética y el consumo sostenible, y participa activamente en espacios de diálogo y decisión sobre el futuro ambiental de Colombia y el mundo.'
      }
    ]
  }

};

// Exportar para uso en módulos (CommonJS y ESM)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANES_NATURALES };
}
