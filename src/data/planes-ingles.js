/**
 * Planes de aula de Inglés - Grados 6° a 11°
 * Estructura: 4 periodos x 10 semanas x 3 horas/semana = 120 horas/año
 * Basado en Estándares Básicos de Competencias en Lenguas Extranjeras: Inglés (MEN - Colombia)
 * Marco de referencia: Marco Común Europeo de Referencia (MCER/CEFR)
 * Programa Nacional de Bilingüismo - Colombia
 *
 * Grupos EBC:
 *   6° y 7° → Grupo 6-7 (Nivel A1 — Básico)
 *   8° y 9° → Grupo 8-9 (Nivel B1.1 — Pre-intermedio 1)
 *   10° y 11° → Grupo 10-11 (Nivel B1.2 — Pre-intermedio 2)
 *
 * ICFES: Solo Saber 11° (Inglés no se evalúa en Saber 9°)
 * Niveles CEFR evaluados: A-, A1, A2, B1, B+
 */

const PLANES_INGLES = {

  // ============================================================
  // GRADO 6
  // ============================================================
  '6': {
    grado: '6°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    nivelCEFR: 'A1',
    grupoEBC: '6-7',
    pruebaSaber: 'saber-11',
    objetivo: 'Introducir al estudiante en el aprendizaje del inglés como lengua extranjera, desarrollando habilidades básicas de escucha, lectura, escritura y producción oral en el nivel A- del MCER, a partir de contextos cotidianos como la identidad personal, las rutinas, la alimentación y los lugares del entorno',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Entiendo palabras y expresiones muy básicas relacionadas con mi entorno inmediato cuando se habla despacio y con claridad.',
          'Comprendo textos muy cortos y sencillos sobre información personal básica.',
          'Escribo frases y oraciones sencillas sobre mí mismo y las personas que conozco.',
          'Me presento y presento a otros usando frases preparadas y expresiones memorizadas.',
          'Respondo preguntas básicas sobre mi nombre, edad, origen y preferencias.'
        ],

        dba: 'Saluda, se presenta y da información personal básica (nombre, edad, nacionalidad, gustos) usando el verbo to be en sus formas afirmativa, negativa e interrogativa.',

        ejesTematicos: [
          'Greetings and farewells: formal and informal',
          'Personal information: name, age, nationality, address',
          'Verb to be: affirmative, negative and questions',
          'Subject pronouns and possessive adjectives',
          'Reading: short identification and personal profile texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo me presento y doy información básica sobre mí mismo en inglés de manera clara y apropiada?',

        diagnostico: 'La mayoría de los estudiantes llegan sin conocimientos previos formales de inglés; algunos reconocen saludos básicos (hello, bye) y números del contexto de medios digitales y entretenimiento.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce frases muy sencillas sobre información personal básica usando el verbo to be en contextos de presentación e identificación.',
          pragmatica: 'Reconoce y usa fórmulas de saludo, despedida y presentación adecuadas al contexto formal e informal.',
          linguistica: 'Usa correctamente el verbo to be en sus tres formas (afirmativa, negativa e interrogativa) con todos los pronombres personales.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Usa el verbo to be correctamente para dar información personal en oraciones afirmativas, negativas e interrogativas.',
            'Reconoce vocabulario básico de identificación personal en textos cortos y sencillos.'
          ]
        },

        aprendizajesICFES: ['ing-s11-01', 'ing-s11-09'],

        nivelEsperado: 'A-',

        evidenciasAprendizaje: [
          'Completa una ficha de presentación personal con nombre, edad, nacionalidad y gustos básicos.',
          'Formula y responde preguntas usando el verbo to be con los pronombres correctos.',
          'Realiza una presentación oral breve (nombre, edad, ciudad) ante el grupo.',
          'Lee tarjetas de presentación e identifica la información personal solicitada.',
          'Diferencia saludos formales e informales y los usa en situaciones simuladas.'
        ],

        estrategiasMetodologicas: [
          'Tarjetas de identidad: cada estudiante elabora su ID card en inglés con foto y datos personales.',
          'Juego de roles: presentaciones en parejas usando diálogos estructurados.',
          'Canción introductoria: "Hello, my name is..." para practicar presentaciones de forma lúdica.',
          'Diagnóstico inicial lúdico: bingo de vocabulario básico para identificar saberes previos.',
          'Lectura compartida: fichas de personajes famosos jóvenes para identificar información personal.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 6° (editorial SM, Richmond o Pearson)',
          'Flashcards de pronombres personales y formas del verbo to be',
          'Guías elaboradas por el docente con diálogos modelos de presentación',
          'Videos cortos de YouTube: saludos y presentaciones en inglés para niños',
          'Diccionario bilingüe ilustrado inglés-español'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Reconoce las formas del verbo to be con todos los pronombres personales.',
            'Identifica vocabulario básico de presentación e información personal.',
            'Diferencia saludos formales e informales en inglés.'
          ],
          hacer: [
            'Completa oraciones con la forma correcta del verbo to be.',
            'Produce frases escritas de presentación personal con precisión gramatical básica.',
            'Realiza una presentación oral breve usando expresiones memorizadas.',
            'Lee textos muy cortos de identificación personal y extrae datos específicos.'
          ],
          ser: [
            'Participa con disposición y confianza en las actividades orales de presentación.',
            'Muestra respeto hacia las producciones orales y escritas de sus compañeros.',
            'Demuestra interés y curiosidad por el aprendizaje del inglés.'
          ]
        },

        competenciaCiudadana: 'Reconoce la importancia de saber presentarse en inglés como habilidad para comunicarse con personas de diferentes culturas, valorando la diversidad lingüística y cultural del mundo.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo frases y expresiones relacionadas con áreas de experiencia inmediata cuando se pronuncian de manera clara y pausada.',
          'Entiendo instrucciones sencillas y rutinas de clase explicadas en inglés.',
          'Escribo frases y oraciones cortas sobre actividades cotidianas con conectores básicos.',
          'Describo verbalmente mi rutina diaria usando el presente simple con corrección básica.',
          'Interactúo en conversaciones sencillas sobre hábitos y rutinas cotidianas.'
        ],

        dba: 'Describe rutinas y hábitos cotidianos propios y de otras personas usando el presente simple con adverbios de frecuencia (always, usually, sometimes, never) con precisión gramatical básica.',

        ejesTematicos: [
          'Present Simple: affirmative, negative and questions',
          'Third person singular: he/she/it + -s/-es',
          'Frequency adverbs: always, usually, often, sometimes, never',
          'Daily routines vocabulary: morning, afternoon, evening activities',
          'Writing: short descriptive paragraphs about daily life'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo describo mi rutina diaria y los hábitos de las personas de mi entorno en inglés de forma clara y organizada?',

        diagnostico: 'El 65% de los estudiantes omite la -s/-es en la tercera persona singular del presente simple y no ubica correctamente los adverbios de frecuencia en la oración.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos escritos sencillos sobre rutinas y hábitos cotidianos usando el presente simple con adverbios de frecuencia.',
          pragmatica: 'Organiza la información sobre rutinas en una secuencia lógica usando conectores de tiempo (first, then, after that, finally) en párrafos descriptivos.',
          linguistica: 'Aplica las reglas del presente simple incluyendo la tercera persona singular (-s/-es) y forma correctamente las oraciones negativas (do not / does not) e interrogativas (do/does).'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Usa el presente simple con corrección básica para describir hábitos y rutinas incluyendo la tercera persona singular.',
            'Ubica los adverbios de frecuencia en la posición correcta dentro de la oración.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-09'],

        nivelEsperado: 'A-',

        evidenciasAprendizaje: [
          'Produce un párrafo corto describiendo su rutina diaria con al menos cinco oraciones en presente simple.',
          'Usa adverbios de frecuencia en la posición correcta dentro de las oraciones.',
          'Transforma oraciones afirmativas a negativas e interrogativas en presente simple.',
          'Describe oralmente la rutina de un compañero o familiar usando la tercera persona correctamente.',
          'Lee un texto breve sobre la rutina de un personaje e identifica los hábitos descritos.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo de la rutina diaria: los estudiantes dibujan y etiquetan en inglés su día.',
          'Juego "Find someone who...": encuesta de hábitos con preguntas en presente simple.',
          'Escritura guiada: párrafo descriptivo de rutina con plantilla de apoyo.',
          'Análisis inductivo: los estudiantes descubren la regla de la tercera persona a partir de ejemplos.',
          'Video de rutinas: ver un corto animado y completar un cuadro de actividades en presente simple.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 6° (editorial SM, Richmond o Pearson)',
          'Flashcards de vocabulario de rutinas diarias y adverbios de frecuencia',
          'Guías de escritura guiada elaboradas por el docente',
          'Videos cortos animados sobre rutinas diarias en inglés',
          'Diccionario bilingüe ilustrado inglés-español'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la regla de la tercera persona singular del presente simple con ejemplos.',
            'Identifica el adverbio de frecuencia adecuado para expresar distintas costumbres.',
            'Reconoce vocabulario de actividades cotidianas en textos orales y escritos.'
          ],
          hacer: [
            'Produce un párrafo descriptivo sobre su rutina diaria con precisión gramatical básica.',
            'Usa los auxiliares do/does correctamente en oraciones negativas e interrogativas.',
            'Describe oralmente la rutina de otra persona usando la tercera persona singular.',
            'Lee textos breves sobre rutinas e identifica información específica.'
          ],
          ser: [
            'Muestra constancia y dedicación en la producción de sus escritos en inglés.',
            'Participa activamente en las actividades de interacción oral de la clase.',
            'Entrega sus producciones escritas en los tiempos acordados con el docente.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre sus propios hábitos y rutinas al compararlos con los de estudiantes de otras culturas angloparlantes, desarrollando conciencia sobre estilos de vida diversos y saludables.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos cortos sobre temas cercanos a mi experiencia cuando están escritos en lenguaje sencillo.',
          'Entiendo el vocabulario relacionado con alimentos, cantidades y compras en contextos cotidianos.',
          'Produzco listas, notas y textos cortos usando vocabulario de alimentación y compras.',
          'Expreso preferencias alimentarias y hablo sobre lo que hay en un lugar usando there is / there are.',
          'Interactúo en situaciones sencillas de compra y venta usando fórmulas básicas de cortesía.'
        ],

        dba: 'Describe alimentos, cantidades y situaciones de compra cotidiana usando sustantivos contables e incontables, there is / there are y expresiones de cantidad (some, any, a lot of, a few, a little).',

        ejesTematicos: [
          'Food vocabulary: fruits, vegetables, drinks, meals',
          'Countable and uncountable nouns',
          'There is / There are: affirmative, negative and questions',
          'Quantifiers: some, any, a lot of, a few, a little, much, many',
          'Reading: menus, shopping lists and simple food-related texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo describo los alimentos de mi entorno y participo en situaciones de compra básicas usando el inglés?',

        diagnostico: 'El 70% de los estudiantes no diferencia sustantivos contables de incontables y usa incorrectamente some/any; la mayoría desconoce el vocabulario de alimentos en inglés.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos cortos sobre alimentos y compras usando there is/are, sustantivos contables e incontables y cuantificadores en contextos cotidianos.',
          pragmatica: 'Reconoce y usa fórmulas básicas de compra y venta (How much is it? I would like...) y de descripción de cantidades en situaciones comunicativas simuladas.',
          linguistica: 'Aplica correctamente la distinción entre sustantivos contables e incontables para seleccionar el cuantificador apropiado (some/any, much/many, a few/a little) según el contexto.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona el cuantificador correcto (some/any, much/many, a few/a little) según el tipo de sustantivo y el contexto oracional.',
            'Usa there is / there are correctamente para describir la existencia de alimentos u objetos en un lugar.'
          ]
        },

        aprendizajesICFES: ['ing-s11-01', 'ing-s11-04', 'ing-s11-09'],

        nivelEsperado: 'A-',

        evidenciasAprendizaje: [
          'Clasifica una lista de alimentos en contables e incontables con precisión.',
          'Escribe un texto corto describiendo los alimentos que hay en su casa usando there is / there are.',
          'Usa some y any correctamente en oraciones afirmativas, negativas e interrogativas.',
          'Lee un menú sencillo de restaurante e identifica los platos disponibles y sus precios.',
          'Participa en un juego de roles de compra en una tienda usando fórmulas básicas.'
        ],

        estrategiasMetodologicas: [
          'Proyecto "My ideal menu": diseñar un menú de restaurante en inglés con ilustraciones y precios.',
          'Juego "Guess the food": describir alimentos usando there is/are y los compañeros adivinar.',
          'Lectura de menús reales adaptados: identificar platos, precios e ingredientes.',
          'Encuesta de hábitos alimentarios: preguntas con do you eat...? / Is there any...?',
          'Video de cocina infantil en inglés: tomar nota de los ingredientes mencionados.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 6° (editorial SM, Richmond o Pearson)',
          'Flashcards de vocabulario de alimentos y cuantificadores',
          'Menús de restaurantes adaptados al nivel',
          'Videos cortos de cocina o programas infantiles en inglés',
          'Guías de trabajo sobre sustantivos contables e incontables'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Distingue entre sustantivos contables e incontables con ejemplos de alimentos.',
            'Reconoce el cuantificador apropiado para cada tipo de sustantivo.',
            'Identifica vocabulario de alimentos y compras en textos orales y escritos.'
          ],
          hacer: [
            'Usa there is / there are correctamente en descripciones orales y escritas.',
            'Selecciona some o any según la oración sea afirmativa, negativa o interrogativa.',
            'Diseña un menú de restaurante sencillo en inglés con vocabulario apropiado.',
            'Participa en un diálogo de compra usando fórmulas básicas de cortesía.'
          ],
          ser: [
            'Muestra curiosidad por el vocabulario de alimentos de otras culturas.',
            'Participa con entusiasmo en las actividades lúdicas de clase.',
            'Respeta las preferencias alimentarias y culturales de sus compañeros.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre la diversidad gastronómica de los países de habla inglesa, valorando las diferencias culturales en los hábitos alimentarios y reconociendo la importancia de una alimentación saludable.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos muy cortos con vocabulario relacionado con lugares de la ciudad y su función.',
          'Entiendo instrucciones sencillas de orientación espacial cuando se apoyan con gestos o imágenes.',
          'Escribo descripciones breves de lugares usando preposiciones de lugar con precisión básica.',
          'Describo la ubicación de lugares en mi ciudad y doy indicaciones sencillas para llegar a ellos.',
          'Interactúo en conversaciones breves para pedir y dar indicaciones en inglés.'
        ],

        dba: 'Describe la ubicación de lugares en su entorno urbano y da indicaciones básicas para llegar a ellos usando preposiciones de lugar (next to, opposite, between, in front of) e imperativos de dirección (turn left/right, go straight).',

        ejesTematicos: [
          'Places in town: school, hospital, park, bank, market, library, supermarket',
          'Prepositions of place: next to, opposite, between, behind, in front of, on the corner of',
          'Giving directions: turn left/right, go straight on, take the first/second street',
          'Imperatives for directions: Go, Turn, Take, Cross',
          'Writing: simple descriptions of a neighborhood or town map'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo describo los lugares de mi ciudad y doy indicaciones para llegar a ellos en inglés de manera clara?',

        diagnostico: 'El 68% de los estudiantes confunde preposiciones de lugar con preposiciones de tiempo y tiene dificultades para orientarse en un mapa usando únicamente el inglés.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos cortos que describen la ubicación de lugares en la ciudad y dan indicaciones básicas usando preposiciones de lugar e imperativos de dirección.',
          pragmatica: 'Usa fórmulas apropiadas para pedir y dar indicaciones (Excuse me, where is the...? / Go straight and turn left) en situaciones comunicativas simuladas.',
          linguistica: 'Usa correctamente las preposiciones de lugar y los imperativos de dirección para describir la posición de lugares y guiar a otros en un mapa.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona la preposición de lugar correcta (next to, opposite, between, in front of) para describir la ubicación de un lugar.',
            'Usa imperativos de dirección (turn, go, take, cross) para dar indicaciones básicas en un mapa.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-09'],

        nivelEsperado: 'A-',

        evidenciasAprendizaje: [
          'Describe la ubicación de cinco lugares en un mapa usando preposiciones de lugar correctamente.',
          'Sigue indicaciones orales sencillas y traza la ruta en un mapa.',
          'Escribe un párrafo corto describiendo cómo llegar desde su colegio a un lugar de su barrio.',
          'Participa en un juego de roles pidiendo y dando indicaciones con cortesía.',
          'Lee una descripción sencilla de un vecindario e identifica la ubicación de los lugares mencionados.'
        ],

        estrategiasMetodologicas: [
          'Proyecto "My town map": diseñar e ilustrar un mapa imaginario de una ciudad con lugares en inglés.',
          'Juego de roles: un estudiante tiene los ojos vendados y sigue indicaciones de un compañero.',
          'Dictado de mapa: el docente da indicaciones orales y los estudiantes marcan la ruta.',
          'Escritura guiada: párrafo describiendo cómo llegar a un lugar desde el colegio.',
          'Lectura de mapas: identificar lugares y rutas en planos simplificados de ciudades reales.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 6° (editorial SM, Richmond o Pearson)',
          'Flashcards de lugares en la ciudad y preposiciones de lugar',
          'Mapas simplificados de ciudades para actividades de orientación',
          'Videos cortos de Google Maps o Street View de ciudades angloparlantes',
          'Guías de trabajo elaboradas por el docente sobre preposiciones y direcciones'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Reconoce el vocabulario de lugares de la ciudad en inglés.',
            'Identifica las preposiciones de lugar y las diferencia de las preposiciones de tiempo.',
            'Comprende indicaciones de dirección dadas en inglés con apoyo visual.'
          ],
          hacer: [
            'Describe la ubicación de lugares usando preposiciones de lugar con precisión.',
            'Da indicaciones orales para llegar a un destino en un mapa con fluidez básica.',
            'Escribe un párrafo corto describiendo cómo llegar a un lugar con conectores básicos.',
            'Lee un texto descriptivo de un vecindario e identifica la ubicación de los lugares.'
          ],
          ser: [
            'Valora el inglés como herramienta práctica para orientarse y comunicarse en el mundo.',
            'Colabora con sus compañeros durante las actividades de juego de roles.',
            'Muestra autonomía y esfuerzo en la construcción de su proyecto del mapa de la ciudad.'
          ]
        },

        competenciaCiudadana: 'Reconoce la importancia de saber orientarse y comunicarse en inglés en contextos urbanos, desarrollando habilidades de colaboración y convivencia al interactuar respetuosamente con sus compañeros en situaciones simuladas.'
      }
    }
  },

  // ============================================================
  // GRADO 7
  // ============================================================
  '7': {
    grado: '7°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    nivelCEFR: 'A1',
    grupoEBC: '6-7',
    pruebaSaber: 'saber-11',
    objetivo: 'Consolidar y ampliar las habilidades comunicativas en inglés desarrolladas en sexto grado, avanzando hacia el nivel A2 del MCER mediante el trabajo con el pasado simple, los comparativos y superlativos, el futuro y los verbos modales en contextos cotidianos de mayor complejidad',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos cortos y sencillos sobre personas famosas, eventos históricos y hechos del pasado.',
          'Identifico información específica en narraciones sobre eventos pasados escritas en lenguaje simple.',
          'Narro eventos y experiencias del pasado usando el pasado simple con verbos regulares e irregulares comunes.',
          'Hablo sobre mi vida y la vida de personas conocidas usando el pasado simple.',
          'Interactúo en conversaciones breves sobre eventos pasados usando el pasado simple con corrección básica.'
        ],

        dba: 'Narra hechos y eventos de la vida de personas conocidas o personajes históricos usando el pasado simple con verbos regulares e irregulares, conectores temporales (first, then, later, finally) y expresiones de tiempo pasado (yesterday, last week, in + year).',

        ejesTematicos: [
          'Past Simple: regular verbs (-ed endings and spelling rules)',
          'Past Simple: common irregular verbs (was/were, had, went, came, saw, etc.)',
          'Past Simple: negative (did not) and questions (Did...?)',
          'Biographies and life events: birth, school, achievements, death',
          'Reading: simple biographies of famous people'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo narro eventos y momentos importantes de la vida de una persona en inglés usando el pasado simple?',

        diagnostico: 'El 72% de los estudiantes no memoriza los verbos irregulares más comunes y agrega -ed a todos los verbos en pasado; el 60% no usa did para formar preguntas y negaciones.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos biográficos sencillos sobre eventos de la vida de personas reales o ficticias usando el pasado simple con verbos regulares e irregulares.',
          pragmatica: 'Organiza la información biográfica en orden cronológico usando conectores temporales (first, then, later, after that, finally) en textos escritos y producciones orales.',
          linguistica: 'Usa correctamente el pasado simple en sus formas afirmativa (verbos regulares e irregulares), negativa (did not) e interrogativa (Did + subject + verb?) con los cambios ortográficos necesarios.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Usa el pasado simple con verbos regulares e irregulares comunes para narrar eventos biográficos.',
            'Organiza eventos en una línea de tiempo usando conectores temporales y expresiones de tiempo pasado.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-07', 'ing-s11-09'],

        nivelEsperado: 'A1',

        evidenciasAprendizaje: [
          'Escribe una biografía corta (cinco oraciones mínimo) sobre una persona conocida usando pasado simple.',
          'Transforma oraciones afirmativas en pasado a su forma negativa e interrogativa con corrección.',
          'Narra oralmente tres eventos importantes de su propia vida usando el pasado simple.',
          'Lee una biografía sencilla e identifica los eventos principales en orden cronológico.',
          'Completa una línea de tiempo biográfica a partir de un texto leído.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo biográfica: los estudiantes crean la línea de tiempo de un personaje famoso.',
          'Proyecto biográfico: investigar y presentar la vida de un personaje a elección propia.',
          'Juego de memoria de verbos irregulares: pares de infinitivo y pasado.',
          'Lectura compartida: biografías adaptadas de personajes conocidos con preguntas de comprensión.',
          'Entrevista en parejas: un estudiante entrevista al otro sobre su pasado usando Did you...?'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 7° (editorial SM, Richmond o Pearson)',
          'Lista de los 50 verbos irregulares más frecuentes con tarjetas de memoria',
          'Biografías adaptadas al nivel A1 de personajes históricos y contemporáneos',
          'Videos biográficos cortos con subtítulos en inglés',
          'Guías de trabajo elaboradas por el docente sobre el pasado simple'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Reconoce los verbos irregulares más comunes en su forma de pasado simple.',
            'Explica las reglas de ortografía del pasado regular (-ed: doubled consonant, -ied).',
            'Identifica conectores temporales para organizar narraciones cronológicamente.'
          ],
          hacer: [
            'Produce una biografía escrita breve usando el pasado simple con precisión básica.',
            'Forma correctamente las oraciones negativas e interrogativas en pasado simple.',
            'Narra eventos de su propia vida usando el pasado simple con fluidez básica.',
            'Lee una biografía sencilla e identifica los eventos principales.'
          ],
          ser: [
            'Demuestra perseverancia en el aprendizaje de los verbos irregulares del inglés.',
            'Valora la historia de vida de personas de diferentes culturas con respeto.',
            'Participa con entusiasmo en las actividades de presentación oral de biografías.'
          ]
        },

        competenciaCiudadana: 'Conoce la vida y aportes de personajes históricos y contemporáneos de países de habla inglesa, desarrollando respeto por la diversidad cultural y valorando las contribuciones individuales al patrimonio de la humanidad.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo descripciones detalladas de personas, lugares y objetos en textos cortos y de vocabulario familiar.',
          'Identifico el punto de comparación en textos descriptivos sencillos sobre personas y lugares.',
          'Produzco textos descriptivos cortos que comparan personas, lugares y objetos usando comparativos y superlativos.',
          'Describo y comparo personas y lugares de mi entorno en inglés con fluidez básica.',
          'Participo en conversaciones breves comparando características de personas y cosas.'
        ],

        dba: 'Compara personas, lugares y objetos usando correctamente los comparativos (taller than, more interesting than) y los superlativos (the tallest, the most interesting) con adjetivos de una y varias sílabas.',

        ejesTematicos: [
          'Comparatives: adjective + -er + than (short adjectives)',
          'Comparatives: more + adjective + than (long adjectives)',
          'Superlatives: the + adjective + -est / the most + adjective',
          'Irregular comparatives: good/better/best, bad/worse/worst',
          'Writing: descriptive and comparative paragraphs about people and places'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo comparo las características de personas y lugares en inglés usando comparativos y superlativos de forma correcta?',

        diagnostico: 'El 68% de los estudiantes aplica la regla del comparativo corto (-er) a todos los adjetivos sin distinguir los largos (more + adj); el 55% olvida el artículo the en los superlativos.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos descriptivos cortos que comparan personas, lugares y objetos usando comparativos y superlativos con precisión gramatical básica.',
          pragmatica: 'Identifica y usa adjetivos evaluativos y de descripción física en textos comparativos para expresar opiniones y preferencias sobre personas y lugares.',
          linguistica: 'Aplica correctamente las reglas de formación de comparativos y superlativos con adjetivos cortos (-er/-est) y largos (more/the most), incluyendo los irregulares (good/better/best, bad/worse/worst).'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona la forma comparativa o superlativa correcta según el número de sílabas del adjetivo.',
            'Usa comparativos y superlativos para describir diferencias entre personas, lugares u objetos en textos escritos.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-09'],

        nivelEsperado: 'A1',

        evidenciasAprendizaje: [
          'Escribe un párrafo comparativo sobre dos lugares o dos personas conocidas.',
          'Forma comparativos y superlativos correctamente con una lista de adjetivos variados.',
          'Describe oralmente las diferencias entre dos imágenes usando comparativos.',
          'Lee un texto descriptivo comparativo e identifica el adjetivo y su forma usada.',
          'Usa los comparativos irregulares (good/better/best, bad/worse/worst) con corrección.'
        ],

        estrategiasMetodologicas: [
          'Proyecto "My country vs. an English-speaking country": comparar Colombia con un país angloparlante.',
          'Juego de tarjetas: comparar superhéroes, animales o deportistas usando comparativos.',
          'Escritura guiada: párrafo comparativo con plantilla de apoyo y banco de adjetivos.',
          'Debate oral: "Which is better, living in the city or in the country?" con comparativos.',
          'Análisis de anuncios publicitarios: identificar superlativos usados en marketing.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 7° (editorial SM, Richmond o Pearson)',
          'Flashcards de adjetivos descriptivos con sus formas comparativa y superlativa',
          'Imágenes de personas y lugares para actividades de comparación oral',
          'Anuncios publicitarios en inglés con superlativos para análisis',
          'Guías de trabajo elaboradas por el docente sobre comparativos y superlativos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la regla de formación de comparativos y superlativos para adjetivos cortos y largos.',
            'Reconoce los comparativos y superlativos irregulares más comunes.',
            'Identifica adjetivos descriptivos de personas y lugares en textos orales y escritos.'
          ],
          hacer: [
            'Produce un párrafo comparativo con precisión gramatical básica.',
            'Usa comparativos y superlativos correctamente en producción oral espontánea.',
            'Transforma oraciones usando el comparativo y el superlativo del mismo adjetivo.',
            'Lee textos descriptivos y reconoce las estructuras comparativas usadas.'
          ],
          ser: [
            'Acepta con respeto las diferencias y similitudes entre personas y culturas.',
            'Participa con confianza en las actividades de comparación y debate oral.',
            'Muestra creatividad y esfuerzo en la producción de su párrafo comparativo.'
          ]
        },

        competenciaCiudadana: 'Desarrolla la capacidad de comparar y valorar diferencias entre personas, lugares y culturas sin emitir juicios de valor negativos, promoviendo el respeto a la diversidad y la no discriminación.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos cortos sobre planes, predicciones y eventos futuros escritos en lenguaje sencillo.',
          'Entiendo la diferencia de uso entre will y going to en textos y conversaciones breves.',
          'Produzco textos cortos sobre planes personales y predicciones usando will y going to con corrección básica.',
          'Hablo sobre mis planes futuros y hago predicciones sencillas sobre el mundo que me rodea.',
          'Interactúo en conversaciones breves sobre planes y proyectos futuros.'
        ],

        dba: 'Expresa planes personales (going to), predicciones basadas en evidencias (going to) y decisiones espontáneas o predicciones generales (will) usando el futuro en inglés en textos orales y escritos breves.',

        ejesTematicos: [
          'Future with will: spontaneous decisions, predictions, promises',
          'Future with going to: plans, intentions, predictions based on evidence',
          'Future time expressions: tomorrow, next week/month/year, in the future, soon',
          'Short answers with will and going to',
          'Reading: texts about plans, predictions and future events'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo expreso mis planes para el futuro y hago predicciones sobre el mundo usando will y going to en inglés?',

        diagnostico: 'El 74% de los estudiantes usa will para todos los casos de futuro sin distinguir cuándo usar going to; el 61% no forma correctamente las oraciones negativas con will (will not / won\'t).',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos breves sobre planes personales y predicciones usando will y going to en contextos comunicativos cotidianos con corrección básica.',
          pragmatica: 'Diferencia el uso comunicativo de will (decisiones espontáneas, promesas, predicciones generales) y going to (planes e intenciones previas, predicciones con evidencia) según el contexto.',
          linguistica: 'Forma correctamente las estructuras de will (will + base verb, will not/won\'t) y going to (am/is/are + going to + base verb) en sus formas afirmativa, negativa e interrogativa.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona will o going to según la intención comunicativa (plan previo vs. decisión espontánea o predicción).',
            'Usa expresiones temporales de futuro (tomorrow, next..., in the future) para contextualizar planes y predicciones.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-07', 'ing-s11-09'],

        nivelEsperado: 'A1',

        evidenciasAprendizaje: [
          'Escribe un texto corto sobre sus planes para las próximas vacaciones usando going to.',
          'Hace predicciones sobre el futuro del planeta usando will con expresiones temporales.',
          'Diferencia el uso de will y going to en situaciones comunicativas presentadas en clase.',
          'Lee un texto sobre predicciones de futuro e identifica las estructuras usadas.',
          'Participa en un diálogo sobre planes del fin de semana usando going to correctamente.'
        ],

        estrategiasMetodologicas: [
          'Proyecto "My future": cada estudiante elabora un afiche con sus planes de vida usando going to.',
          'Predicciones sobre el futuro: discutir en grupos usando will sobre temas como tecnología y medio ambiente.',
          'Análisis de contexto: situaciones donde los estudiantes deciden si usar will o going to.',
          'Escritura guiada: párrafo de planes para las próximas vacaciones con plantilla.',
          'Lectura de textos de predicciones científicas adaptados al nivel y debate posterior.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 7° (editorial SM, Richmond o Pearson)',
          'Tarjetas de situaciones para practicar will vs. going to',
          'Artículos cortos sobre predicciones del futuro adaptados al nivel A1-A2',
          'Videos cortos de predicciones del futuro con lenguaje sencillo',
          'Guías de trabajo elaboradas por el docente sobre will y going to'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la diferencia de uso entre will y going to con ejemplos propios.',
            'Reconoce expresiones temporales de futuro y las usa en contexto.',
            'Identifica la estructura correcta de will y going to en sus tres formas.'
          ],
          hacer: [
            'Produce un texto escrito sobre planes futuros usando going to con corrección.',
            'Hace predicciones usando will en conversaciones y escritos breves.',
            'Diferencia el uso de will y going to en situaciones comunicativas concretas.',
            'Lee textos sobre planes y predicciones e identifica las estructuras de futuro usadas.'
          ],
          ser: [
            'Reflexiona sobre sus planes y metas personales al producir textos en inglés.',
            'Muestra respeto hacia los planes y sueños futuros de sus compañeros.',
            'Demuestra interés por el mundo y el futuro al participar en debates sobre predicciones.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre su proyecto de vida y el futuro de su comunidad, desarrollando pensamiento prospectivo y responsabilidad al pensar en las consecuencias de las decisiones presentes sobre el futuro colectivo.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos cortos sobre reglas, obligaciones, consejos y posibilidades escritos en inglés sencillo.',
          'Identifico el significado de los verbos modales can, must y should en textos de normas y recomendaciones.',
          'Produzco textos cortos sobre reglas de juego, normas escolares y consejos usando los modales correctos.',
          'Doy y recibo consejos, expreso habilidades y explico reglas básicas usando can, must y should.',
          'Interactúo en situaciones comunicativas donde expreso posibilidad, obligación y consejo en inglés.'
        ],

        dba: 'Usa los verbos modales can (habilidad/posibilidad), must (obligación) y should (consejo/recomendación) para expresar reglas, dar consejos y hablar sobre habilidades en textos orales y escritos breves.',

        ejesTematicos: [
          'Modal verb can: ability and possibility (can/cannot/can\'t)',
          'Modal verb must: obligation and prohibition (must/must not/mustn\'t)',
          'Modal verb should: advice and recommendation (should/should not/shouldn\'t)',
          'Rules and signs: school rules, traffic signs, game rules',
          'Writing: rules and advice texts (posters, lists, recommendation paragraphs)'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo expreso habilidades, obligaciones y consejos en inglés usando los verbos modales can, must y should?',

        diagnostico: 'El 70% de los estudiantes no distingue el significado de must y should y los usa indistintamente; el 65% añade incorrectamente -s a los verbos modales en la tercera persona.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos breves sobre reglas, consejos y habilidades usando can, must y should en contextos comunicativos cotidianos como el colegio, el hogar y los juegos.',
          pragmatica: 'Diferencia el valor pragmático de can (capacidad), must (obligación fuerte) y should (recomendación) para seleccionar el modal apropiado según la situación comunicativa.',
          linguistica: 'Usa los verbos modales can, must y should con la estructura correcta (modal + base verb, sin to) en sus formas afirmativa, negativa e interrogativa, sin añadir -s en la tercera persona.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona el verbo modal adecuado (can, must, should) según el valor comunicativo requerido (habilidad, obligación o consejo).',
            'Usa los verbos modales sin marca de tercera persona singular y con la base verbal correcta en textos escritos y orales.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-07', 'ing-s11-09'],

        nivelEsperado: 'A1',

        evidenciasAprendizaje: [
          'Produce un cartel de normas del salón de clase en inglés usando must y must not.',
          'Escribe cinco consejos de salud usando should y should not.',
          'Describe cinco habilidades propias y de sus compañeros usando can y cannot.',
          'Lee un texto de reglas de un juego o deporte e identifica los modales usados.',
          'Diferencia must y should en situaciones comunicativas concretas presentadas en clase.'
        ],

        estrategiasMetodologicas: [
          'Proyecto "Our classroom rules": crear un cartel de normas del salón usando must/must not.',
          'Consultorio de consejos: juego de roles donde un estudiante da consejos a otro usando should.',
          'Encuesta de habilidades: "What can you do?" — encuesta oral con can/cannot.',
          'Análisis de señales de tráfico y letreros públicos: identificar el modal implícito.',
          'Lectura de reglas de juegos de mesa en inglés: identificar y clasificar los modales.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 7° (editorial SM, Richmond o Pearson)',
          'Tarjetas de situaciones para practicar can, must y should',
          'Señales de tráfico y letreros públicos en inglés para análisis',
          'Reglas de juegos de mesa en inglés adaptadas al nivel',
          'Guías de trabajo elaboradas por el docente sobre verbos modales'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica el significado de can, must y should con ejemplos propios.',
            'Reconoce que los verbos modales no llevan -s en la tercera persona singular.',
            'Diferencia el nivel de obligación entre must (fuerte) y should (recomendación).'
          ],
          hacer: [
            'Produce un texto de normas o consejos usando must/must not y should/should not correctamente.',
            'Describe habilidades usando can y cannot con precisión gramatical.',
            'Selecciona el modal correcto en situaciones comunicativas variadas.',
            'Lee textos con modales e identifica su función comunicativa (obligación, consejo, habilidad).'
          ],
          ser: [
            'Reflexiona sobre la importancia de seguir normas para la convivencia escolar.',
            'Muestra disposición para dar y recibir consejos constructivos en inglés.',
            'Valora sus propias habilidades y las de sus compañeros con una actitud positiva.'
          ]
        },

        competenciaCiudadana: 'Comprende la importancia de las normas y los consejos para la convivencia en la escuela y la sociedad, desarrollando actitudes de responsabilidad, respeto a las reglas y solidaridad al orientar a sus compañeros con consejos constructivos.'
      }
    }
  },

  // ============================================================
  // GRADO 8
  // ============================================================
  '8': {
    grado: '8°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    nivelCEFR: 'B1.1',
    objetivo: 'Desarrollar las cinco habilidades comunicativas en inglés (escucha, lectura, escritura, monólogo y conversación) en el nivel B1.1, consolidando el uso de tiempos verbales, la descripción de rutinas y experiencias, y la comprensión de textos de mediana complejidad',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Entiendo lo que me dicen el profesor y mis compañeros en interacciones cotidianas dentro del aula, sin necesidad de repetición.',
          'Comprendo la idea principal de textos orales de mediana complejidad sobre temas académicos y de la vida diaria.',
          'Produzco textos coherentes de mediana extensión sobre temas personales y académicos.',
          'Hablo de manera fluida y comprensible sobre temas personales, académicos y de actualidad.',
          'Inicio, mantengo y termino conversaciones sobre temas conocidos y de interés personal.'
        ],

        dba: 'Comprende y produce textos orales y escritos sobre rutinas diarias y hábitos personales usando el presente simple y continuo con precisión.',

        ejesTematicos: [
          'Present Simple: affirmative, negative, questions',
          'Present Continuous: ongoing actions and future plans',
          'Daily routines and habits vocabulary',
          'Describing people: physical appearance and personality',
          'Reading: short descriptive and informative texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo describo mi vida diaria, mis hábitos y las personas de mi entorno en inglés de manera clara y precisa?',

        diagnostico: 'El 58% de los estudiantes confunde el presente simple con el presente continuo y tiene dificultades para formular preguntas en tercera persona singular (he/she/it).',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos orales y escritos sobre rutinas y descripciones personales usando el presente simple y continuo en contextos cotidianos.',
          pragmatica: 'Reconoce y usa fórmulas apropiadas para describir hábitos, hablar de acciones en progreso y describir personas según el contexto comunicativo.',
          linguistica: 'Usa correctamente el presente simple y continuo, incluyendo la tercera persona singular, las formas negativas y las preguntas con auxiliares do/does/am/is/are.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona el tiempo verbal correcto (presente simple o continuo) según el contexto de la oración.',
            'Usa vocabulario relacionado con rutinas diarias y descripción de personas en contextos comunicativos reales.'
          ]
        },

        aprendizajesICFES: ['ing-s11-01', 'ing-s11-04', 'ing-s11-09'],

        nivelEsperado: 'A2',

        evidenciasAprendizaje: [
          'Produce un párrafo descriptivo sobre su rutina diaria usando presente simple con corrección gramatical.',
          'Distingue entre acciones habituales (presente simple) y acciones en progreso (presente continuo) en textos orales y escritos.',
          'Describe personas de su entorno usando adjetivos de apariencia física y personalidad.',
          'Formula y responde preguntas sobre rutinas y hábitos en interacciones orales.',
          'Identifica la idea principal y detalles específicos en textos descriptivos cortos.'
        ],

        estrategiasMetodologicas: [
          'Actividad de "Daily routine timeline": los estudiantes dibujan y describen su día usando presente simple.',
          'Juego de roles: entrevistas en parejas sobre rutinas y hábitos personales.',
          'Lectura compartida: textos cortos sobre personajes famosos y sus rutinas.',
          'Gramática inductiva: los estudiantes descubren las reglas del presente simple/continuo a partir de ejemplos.',
          'Prueba diagnóstica inicial para identificar saberes previos sobre tiempos del presente.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 8° (editorial SM, Richmond o Pearson)',
          'Flashcards de vocabulario sobre rutinas diarias y adjetivos descriptivos',
          'Guías de trabajo elaboradas por el docente',
          'Videos cortos de YouTube sobre rutinas de estudiantes angloparlantes',
          'Diccionario bilingüe inglés-español (físico o digital)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Conoce las reglas del presente simple (afirmativo, negativo e interrogativo) incluyendo la tercera persona singular.',
            'Identifica la diferencia conceptual entre presente simple y presente continuo.',
            'Reconoce vocabulario relacionado con rutinas diarias y descripción de personas.'
          ],
          hacer: [
            'Produce textos escritos sobre rutinas personales con precisión gramatical.',
            'Formula y responde preguntas usando los auxiliares do/does y am/is/are correctamente.',
            'Describe personas usando adjetivos de apariencia física y personalidad.',
            'Identifica información específica en textos descriptivos de mediana extensión.'
          ],
          ser: [
            'Participa con disposición positiva en las actividades orales de clase.',
            'Respeta el turno de palabra durante las interacciones en inglés.',
            'Muestra responsabilidad en la entrega oportuna de producciones escritas.'
          ]
        },

        competenciaCiudadana: 'Valora la diversidad cultural de los países de habla inglesa al aprender sobre rutinas y estilos de vida diferentes al propio, desarrollando respeto intercultural.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico el punto de vista del autor en textos de opinión cortos sobre temas conocidos.',
          'Comprendo textos de diferentes tipos y fuentes: noticias, blogs, artículos divulgativos sencillos.',
          'Uso con mayor precisión tiempos verbales (presente simple y continuo, pasado simple y continuo, futuro).',
          'Hablo sobre experiencias pasadas usando el pasado simple con verbos regulares e irregulares comunes.',
          'Expreso y defiendo mis opiniones en discusiones, aceptando o rechazando educadamente las ideas de otros.'
        ],

        dba: 'Narra experiencias pasadas y cuenta historias usando el pasado simple y el pasado continuo con verbos regulares e irregulares.',

        ejesTematicos: [
          'Past Simple: regular and irregular verbs',
          'Past Continuous: interrupted actions and simultaneous events',
          'Time expressions: yesterday, last week, ago, while, when',
          'Narrating past events and telling stories',
          'Reading: narrative texts and short stories'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo narro eventos pasados y cuento historias en inglés usando los tiempos correctos?',

        diagnostico: 'El 62% de los estudiantes no distingue el uso del pasado simple del pasado continuo y comete errores frecuentes con los verbos irregulares más comunes.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce narraciones sobre eventos pasados usando el pasado simple y continuo en textos orales y escritos de mediana extensión.',
          pragmatica: 'Identifica y usa conectores temporales (when, while, after, before) y expresiones de tiempo para organizar narraciones con coherencia.',
          linguistica: 'Usa correctamente la forma afirmativa, negativa e interrogativa del pasado simple con verbos regulares e irregulares, y diferencia su uso del pasado continuo.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona el tiempo verbal correcto (pasado simple o continuo) según el contexto narrativo.',
            'Usa conectores temporales apropiados para organizar la secuencia de eventos en una narración.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-07', 'ing-s11-09'],

        nivelEsperado: 'A2',

        evidenciasAprendizaje: [
          'Narra eventos pasados usando el pasado simple con verbos regulares e irregulares correctamente.',
          'Distingue y usa el pasado simple y el pasado continuo para referirse a acciones pasadas interrumpidas y simultáneas.',
          'Escribe una narración breve sobre una experiencia personal o un cuento usando conectores temporales.',
          'Identifica la secuencia de eventos en textos narrativos de mediana extensión.',
          'Formula y responde preguntas sobre eventos pasados en intercambios orales.'
        ],

        estrategiasMetodologicas: [
          'Storytelling cooperativo: grupos construyen una historia en pasado simple encadenando oraciones.',
          'Análisis de textos narrativos auténticos: identificar tiempos verbales y conectores.',
          'Lista de los 50 verbos irregulares más comunes: memorización activa con juegos.',
          'Actividad "What were you doing when...?": práctica del pasado continuo en contexto.',
          'Escritura de una anécdota personal con retroalimentación entre pares.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 8°',
          'Lista de verbos irregulares con traducción y ejemplos',
          'Cuentos cortos en inglés nivel A2-B1 (graded readers)',
          'Guías de trabajo con ejercicios graduados de pasado simple y continuo',
          'Videos de historias narradas en inglés con subtítulos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Reconoce la forma correcta del pasado simple de al menos 40 verbos irregulares comunes.',
            'Explica la diferencia entre el pasado simple y el pasado continuo con ejemplos propios.',
            'Identifica conectores temporales y su función en textos narrativos.'
          ],
          hacer: [
            'Conjuga verbos en pasado simple (regulares e irregulares) en contextos orales y escritos.',
            'Escribe narraciones breves con secuencia temporal coherente y conectores adecuados.',
            'Lee textos narrativos y responde preguntas de comprensión de literal e inferencial.',
            'Participa en intercambios orales narrando experiencias pasadas.'
          ],
          ser: [
            'Muestra perseverancia ante la dificultad de los verbos irregulares.',
            'Colabora con respeto durante las actividades de escritura cooperativa.',
            'Asume con responsabilidad la corrección y mejora de sus producciones escritas.'
          ]
        },

        competenciaCiudadana: 'Desarrolla empatía al escuchar y narrar historias de vida de personas de culturas anglosajonas, valorando las experiencias ajenas como fuente de aprendizaje.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Localizo información específica en textos más largos sin necesidad de leerlos completamente.',
          'Produzco textos coherentes de mediana extensión sobre temas personales y académicos.',
          'Redacto párrafos argumentativos expresando mi opinión y sustentándola con razones.',
          'Expongo mi punto de vista sobre un tema y lo argumento con razones y ejemplos.',
          'Participo activamente en debates sencillos sobre temas relevantes para mi comunidad.'
        ],

        dba: 'Expresa planes, predicciones e intenciones futuras usando will, going to y el presente continuo como futuro, diferenciando sus usos en contexto.',

        ejesTematicos: [
          'Future tenses: will, going to, Present Continuous for future',
          'Making predictions and expressing intentions',
          'Comparatives and superlatives: adjectives and adverbs',
          'Describing places and making comparisons',
          'Reading: informative texts about travel, places and environment'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo expreso planes futuros, hago predicciones y comparo lugares o situaciones en inglés?',

        diagnostico: 'El 55% de los estudiantes usa "will" para todos los contextos de futuro sin distinguir su uso del "going to", y el 49% forma incorrectamente los comparativos de adjetivos largos.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos orales y escritos sobre planes futuros, predicciones y comparaciones usando las estructuras gramaticales apropiadas.',
          pragmatica: 'Reconoce la intención comunicativa al expresar planes, predicciones espontáneas y decisiones tomadas en el momento del habla según el contexto.',
          linguistica: 'Usa correctamente will (predicciones y decisiones espontáneas), going to (planes previos) y comparativos/superlativos de adjetivos regulares e irregulares.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Distingue y usa will y going to según la intención comunicativa (predicción vs. plan previo).',
            'Forma correctamente comparativos y superlativos para comparar lugares, objetos y situaciones.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-06', 'ing-s11-09'],

        nivelEsperado: 'A2',

        evidenciasAprendizaje: [
          'Distingue y usa will y going to en contextos comunicativos apropiados (predicciones vs. planes).',
          'Escribe un párrafo sobre sus planes para el futuro usando going to y will correctamente.',
          'Forma comparativos y superlativos de adjetivos de una y múltiples sílabas sin errores.',
          'Compara dos lugares, personas o situaciones en una presentación oral breve.',
          'Localiza información específica en textos informativos sobre lugares y medio ambiente.'
        ],

        estrategiasMetodologicas: [
          'Actividad "My future plans": collage visual con predicciones y planes personales narrados en inglés.',
          'Debate comparativo: "Which city is better to live in?" usando superlativos y comparativos.',
          'Análisis de contexto: situaciones que requieren will vs. going to con justificación.',
          'Lectura de artículos sobre lugares del mundo y guías turísticas simplificadas.',
          'Mini-presentación oral: comparar dos destinos turísticos colombianos o mundiales.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 8°',
          'Imágenes y guías turísticas de países de habla inglesa',
          'Guías de trabajo sobre tiempos futuros y comparativos',
          'Videos sobre lugares del mundo con narración en inglés nivel B1',
          'Mapas y materiales visuales para actividades de comparación'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la diferencia entre will y going to con ejemplos en contexto.',
            'Enuncia las reglas para formar comparativos y superlativos de adjetivos cortos y largos.',
            'Reconoce vocabulario relacionado con viajes, lugares y medio ambiente.'
          ],
          hacer: [
            'Usa will y going to correctamente en producciones escritas y orales.',
            'Construye comparaciones usando comparativos y superlativos sin errores sistemáticos.',
            'Busca y localiza información específica en textos informativos de mediana extensión.',
            'Presenta oralmente la comparación de dos lugares con coherencia y vocabulario adecuado.'
          ],
          ser: [
            'Muestra curiosidad por conocer lugares y culturas de habla inglesa.',
            'Respeta las opiniones de sus compañeros durante los debates comparativos.',
            'Demuestra honestidad al autoevaluar el nivel de su producción oral.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre el impacto ambiental al comparar diferentes lugares y estilos de vida, desarrollando conciencia ecológica desde una perspectiva global en inglés.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Leo y comprendo textos literarios sencillos (cuentos cortos, poemas) identificando personajes, temas y emociones.',
          'Entiendo el argumento central y los argumentos de apoyo en textos persuasivos breves.',
          'Escribo cartas, correos formales e informales adecuando el registro al destinatario.',
          'Narro eventos en diferentes tiempos verbales conectando las ideas de manera lógica.',
          'Manejo situaciones imprevistas durante una conversación buscando palabras alternativas.'
        ],

        dba: 'Produce textos escritos de mediana extensión (narraciones, correos formales e informales) usando adecuadamente los tiempos verbales aprendidos durante el año y conectores de cohesión.',

        ejesTematicos: [
          'Formal and informal writing: emails, letters and messages',
          'Present Perfect: life experiences and recent actions',
          'Connectors: addition, contrast, cause and result',
          'Reading comprehension strategies: skimming and scanning',
          'Integrative project: portfolio of written productions'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo escribo textos formales e informales en inglés con coherencia, cohesión y el registro adecuado al destinatario?',

        diagnostico: 'El 51% de los estudiantes no diferencia el registro formal del informal en sus producciones escritas y el 47% no usa conectores para cohesionar sus textos.',

        competenciasICFES: {
          comunicativa: 'Produce textos escritos coherentes y cohesivos de diferentes tipos (correos, narraciones, párrafos argumentativos) usando los tiempos verbales y conectores apropiados.',
          pragmatica: 'Adapta el registro (formal/informal) y el tono según el destinatario y el propósito comunicativo del texto producido.',
          linguistica: 'Usa conectores de adición (also, in addition), contraste (however, although), causa (because, since) y resultado (therefore, so) para cohesionar textos escritos.'
        },

        matrizReferencia: {
          componente: 'Pragmático / Gramatical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona el registro apropiado (formal o informal) para producir textos escritos según el destinatario.',
            'Usa conectores lógicos para organizar y cohesionar sus producciones escritas.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-07', 'ing-s11-09'],

        nivelEsperado: 'A2',

        evidenciasAprendizaje: [
          'Escribe un correo formal y uno informal sobre el mismo tema adaptando el registro correctamente.',
          'Usa conectores de adición, contraste, causa y resultado para cohesionar sus textos.',
          'Aplica estrategias de comprensión lectora (skimming y scanning) para localizar información.',
          'Usa el presente perfecto para hablar de experiencias de vida y acciones recientes.',
          'Presenta su portafolio de producciones escritas del año con reflexión sobre su progreso.'
        ],

        estrategiasMetodologicas: [
          'Análisis comparativo de un correo formal y uno informal: identificar diferencias de registro.',
          'Taller de conectores: reescribir párrafos incoherentes usando los conectores apropiados.',
          'Introducción al Present Perfect a través de experiencias de vida (Have you ever...?).',
          'Proyecto de portafolio: compilar y revisar las mejores producciones escritas del año.',
          'Autoevaluación y coevaluación de los textos del portafolio con rúbrica.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 8°',
          'Modelos de correos formales e informales en inglés',
          'Rúbricas de evaluación de escritura adaptadas al nivel B1.1',
          'Carpetas o plataformas digitales para el portafolio de escritura',
          'Guías de conectores con ejemplos en contexto'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Reconoce las diferencias entre el registro formal e informal en textos escritos.',
            'Identifica y clasifica conectores según su función (adición, contraste, causa, resultado).',
            'Explica el uso del presente perfecto para experiencias de vida y acciones recientes.'
          ],
          hacer: [
            'Produce correos formales e informales adecuados al destinatario y el propósito.',
            'Cohesiona sus textos usando conectores variados de manera apropiada.',
            'Lee textos de mediana complejidad aplicando skimming y scanning eficientemente.',
            'Presenta su portafolio reflexionando sobre su proceso de aprendizaje en inglés.'
          ],
          ser: [
            'Demuestra orgullo por sus avances en el aprendizaje del inglés durante el año.',
            'Valora la escritura como herramienta de comunicación en un mundo globalizado.',
            'Asume con responsabilidad la revisión y mejora de sus producciones escritas.'
          ]
        },

        competenciaCiudadana: 'Reconoce el inglés como herramienta de comunicación global que le permite conectarse con personas de diferentes culturas y acceder a oportunidades académicas y laborales.'
      }
    }
  },

  // ============================================================
  // GRADO 9
  // ============================================================
  '9': {
    grado: '9°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    nivelCEFR: 'B1.1',
    objetivo: 'Consolidar el nivel B1.1 desarrollando la comprensión y producción de textos de mayor complejidad, el uso de estructuras gramaticales avanzadas (condicionales, pasiva, estilo indirecto básico) y la expresión de opiniones argumentadas en inglés',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico el punto de vista del autor en textos de opinión cortos sobre temas conocidos.',
          'Comprendo textos de diferentes tipos y fuentes: noticias, blogs, artículos divulgativos sencillos.',
          'Uso con mayor precisión tiempos verbales (presente simple y continuo, pasado simple y continuo, futuro).',
          'Expreso y defiendo mis opiniones en discusiones, aceptando o rechazando educadamente las ideas de otros.',
          'Entiendo lo que me dicen el profesor y mis compañeros en interacciones cotidianas dentro del aula, sin necesidad de repetición.'
        ],

        dba: 'Comprende y usa el presente perfecto simple y continuo para hablar de experiencias de vida, acciones recientes y situaciones que comenzaron en el pasado y continúan en el presente.',

        ejesTematicos: [
          'Present Perfect Simple: experiences, recent actions, unfinished time',
          'Present Perfect Continuous: duration of ongoing actions',
          'Since vs. For: time expressions with Perfect tenses',
          'Have you ever...? Talking about life experiences',
          'Reading: opinion articles and informative texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo el presente perfecto me permite hablar de experiencias de vida y conectar el pasado con el presente en inglés?',

        diagnostico: 'El 64% de los estudiantes confunde el presente perfecto con el pasado simple, especialmente al expresar experiencias de vida y acciones con relevancia presente.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos sobre experiencias de vida y situaciones que conectan el pasado con el presente usando el presente perfecto simple y continuo.',
          pragmatica: 'Distingue cuándo usar el presente perfecto (relevancia presente) y el pasado simple (tiempo definido en el pasado) según el contexto comunicativo.',
          linguistica: 'Usa correctamente el presente perfecto simple y continuo con marcadores temporales: ever, never, already, yet, just, since, for, recently.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Distingue el uso del presente perfecto del pasado simple en contextos comunicativos específicos.',
            'Usa since y for correctamente con el presente perfecto para expresar duración temporal.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-02', 'ing-s11-09'],

        nivelEsperado: 'A2',

        evidenciasAprendizaje: [
          'Usa el presente perfecto simple para hablar de experiencias de vida y acciones recientes sin error sistemático.',
          'Distingue en contexto cuándo usar el pasado simple y cuándo el presente perfecto.',
          'Usa since y for correctamente con el presente perfecto continuo para expresar duración.',
          'Escribe un párrafo sobre sus experiencias de vida usando el presente perfecto.',
          'Identifica el punto de vista del autor en artículos de opinión de nivel B1.'
        ],

        estrategiasMetodologicas: [
          'Actividad "The Experience Board": cada estudiante comparte sus experiencias únicas con "Have you ever...?".',
          'Comparación de oraciones en pasado simple y presente perfecto: análisis del cambio de significado.',
          'Lectura de perfiles biográficos de personas famosas: identificar usos del presente perfecto.',
          'Juego "Find someone who has...": entrevistas orales con el presente perfecto.',
          'Escritura guiada: "My Life Experiences" con andamiaje gramatical.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 9° (editorial SM, Richmond o Pearson)',
          'Artículos de opinión y textos informativos nivel B1 adaptados',
          'Guías de trabajo sobre el presente perfecto simple y continuo',
          'Videos con testimonios de personas hablando de sus experiencias',
          'Diccionario bilingüe y de colocaciones léxicas'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica los usos del presente perfecto simple y continuo con ejemplos en contexto.',
            'Distingue since y for e identifica cuándo usar cada uno.',
            'Reconoce los marcadores temporales del presente perfecto: ever, never, already, yet, just.'
          ],
          hacer: [
            'Usa el presente perfecto simple en afirmativas, negativas e interrogativas sin errores sistemáticos.',
            'Distingue y selecciona correctamente entre pasado simple y presente perfecto según el contexto.',
            'Escribe producciones sobre experiencias de vida con coherencia y precisión gramatical.',
            'Identifica el punto de vista del autor y la idea principal en textos de opinión.'
          ],
          ser: [
            'Muestra apertura para compartir sus experiencias personales en inglés.',
            'Valora los errores como oportunidades de aprendizaje durante las correcciones.',
            'Demuestra autonomía al consultar el diccionario y los recursos gramaticales disponibles.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre sus propias experiencias de vida y las compara con las de sus compañeros, desarrollando empatía y respeto por las diferentes trayectorias vitales.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Entiendo el argumento central y los argumentos de apoyo en textos persuasivos breves.',
          'Redacto párrafos argumentativos expresando mi opinión y sustentándola con razones.',
          'Expongo mi punto de vista sobre un tema y lo argumento con razones y ejemplos.',
          'Manejo situaciones imprevistas durante una conversación buscando palabras alternativas.',
          'Identifico información específica (datos, fechas, nombres) en mensajes de audio y videos cortos.'
        ],

        dba: 'Comprende y usa las condicionales de tipo 0, 1 y 2 para expresar hechos generales, situaciones reales posibles e hipotéticas, diferenciando su uso según el grado de probabilidad.',

        ejesTematicos: [
          'Zero Conditional: general truths and facts',
          'First Conditional: real and possible situations',
          'Second Conditional: hypothetical and unreal situations',
          'Modals of probability: might, could, would',
          'Reading: persuasive and argumentative texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo expresar condiciones, posibilidades e hipótesis en inglés para argumentar y tomar posición frente a diferentes situaciones?',

        diagnostico: 'El 59% de los estudiantes mezcla los tipos de condicionales y el 53% no selecciona el modal adecuado (might, could, would) para expresar diferentes grados de probabilidad.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos que expresan condiciones, posibilidades e hipótesis usando las condicionales de tipo 0, 1 y 2 en contextos comunicativos reales.',
          pragmatica: 'Identifica el grado de probabilidad que expresa cada tipo de condicional y selecciona el modal apropiado (might, could, would) según la intención del hablante.',
          linguistica: 'Construye correctamente oraciones condicionales de tipo 0 (if + present/present), tipo 1 (if + present/will) y tipo 2 (if + past/would), usando la estructura adecuada en cada caso.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Distingue y usa correctamente las condicionales de tipo 0, 1 y 2 según el grado de probabilidad.',
            'Selecciona el modal apropiado (might, could, would) para expresar posibilidad e hipótesis.'
          ]
        },

        aprendizajesICFES: ['ing-s11-05', 'ing-s11-06', 'ing-s11-04'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Construye oraciones condicionales de tipo 0, 1 y 2 sin errores en la estructura.',
          'Distingue en contexto el tipo de condicional apropiado según el grado de probabilidad.',
          'Usa modales de probabilidad (might, could, would) con el significado adecuado.',
          'Escribe un párrafo argumentativo expresando una posición y sustentándola con condicionales.',
          'Identifica el argumento central en textos persuasivos de nivel B1.'
        ],

        estrategiasMetodologicas: [
          'Análisis inductivo: clasificar oraciones condicionales por tipo antes de dar la regla explícita.',
          'Debate hipotético: "What would you do if...?" con el segundo condicional.',
          'Actividad "Cause and Effect Chain": construir cadenas de condicionales tipo 1 en grupos.',
          'Lectura y análisis de textos persuasivos: identificar condicionales y argumentos.',
          'Escritura argumentativa: ensayo corto con posición personal sustentada con condicionales.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 9°',
          'Textos persuasivos y argumentativos nivel B1 adaptados',
          'Guías de condicionales con ejercicios de transformación y contexto',
          'Tarjetas de situaciones hipotéticas para debates orales',
          'Videos de debates en inglés nivel intermedio con subtítulos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la estructura y el uso de cada tipo de condicional (0, 1, 2) con ejemplos.',
            'Distingue el significado de might, could y would en contextos de probabilidad e hipótesis.',
            'Identifica el argumento central y los argumentos de apoyo en textos persuasivos.'
          ],
          hacer: [
            'Construye oraciones condicionales de tipo 0, 1 y 2 con la estructura correcta.',
            'Usa modales de probabilidad apropiadamente en producciones escritas y orales.',
            'Escribe párrafos argumentativos con posición clara, razones y ejemplos coherentes.',
            'Participa en debates orales usando condicionales e hipótesis para sustentar argumentos.'
          ],
          ser: [
            'Demuestra pensamiento crítico al evaluar argumentos durante los debates.',
            'Respeta las posiciones contrarias a la propia durante las discusiones en inglés.',
            'Muestra iniciativa al formular hipótesis sobre problemas sociales relevantes.'
          ]
        },

        competenciaCiudadana: 'Desarrolla pensamiento crítico y capacidad argumentativa al debatir temas de interés social en inglés, valorando el diálogo respetuoso como herramienta democrática.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos de diferentes tipos y fuentes: noticias, blogs, artículos divulgativos sencillos.',
          'Identifico el punto de vista del autor en textos de opinión cortos sobre temas conocidos.',
          'Uso con mayor precisión tiempos verbales (presente simple y continuo, pasado simple y continuo, futuro).',
          'Hago presentaciones preparadas sobre temas académicos con estructura clara.',
          'Interactúo con hablantes nativos en situaciones cotidianas con cierta fluidez.'
        ],

        dba: 'Comprende y produce textos en voz pasiva, reconociendo su función de enfatizar el objeto o resultado de una acción y su frecuencia en textos académicos, noticias y textos formales.',

        ejesTematicos: [
          'Passive Voice: simple tenses (present, past, future passive)',
          'Active vs. Passive: when and why to use passive voice',
          'Formal writing: news reports and informative articles',
          'Academic vocabulary: reporting verbs and passive structures',
          'Reading: news articles and academic informative texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Por qué la voz pasiva es tan frecuente en textos académicos y noticias, y cómo la uso correctamente en inglés?',

        diagnostico: 'El 61% de los estudiantes no sabe construir la voz pasiva correctamente y el 57% no identifica su función comunicativa en textos académicos y periodísticos.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos formales usando la voz pasiva en diferentes tiempos verbales, reconociendo su función en noticias, textos académicos y textos de divulgación.',
          pragmatica: 'Identifica cuándo y por qué se usa la voz pasiva: para enfatizar el objeto/resultado, omitir el agente cuando es desconocido o irrelevante, y para dar formalidad al texto.',
          linguistica: 'Forma correctamente la voz pasiva con los tiempos presente simple (is/are + past participle), pasado simple (was/were + past participle) y futuro (will be + past participio).'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Comprensión de lectura / Uso de la lengua en contexto',
          afirmaciones: [
            'Identifica el agente y el paciente en oraciones en voz pasiva y reconoce su función comunicativa.',
            'Transforma oraciones de voz activa a pasiva correctamente en diferentes tiempos verbales.'
          ]
        },

        aprendizajesICFES: ['ing-s11-05', 'ing-s11-02', 'ing-s11-03'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Construye oraciones en voz pasiva en presente, pasado y futuro sin errores sistemáticos.',
          'Transforma oraciones de voz activa a pasiva y viceversa correctamente.',
          'Identifica y explica la función comunicativa de la voz pasiva en textos periodísticos.',
          'Escribe un texto informativo breve (noticia o informe) usando voz pasiva apropiadamente.',
          'Lee y comprende artículos periodísticos de nivel B1 identificando información clave.'
        ],

        estrategiasMetodologicas: [
          'Análisis de titulares de noticias reales en inglés: identificar voz pasiva y su función.',
          'Transformación activa-pasiva: actividad de tarjetas que los estudiantes emparejan.',
          'Escritura de una noticia breve sobre un evento escolar usando voz pasiva.',
          'Comparación de textos formales e informales: frecuencia de voz pasiva en cada registro.',
          'Presentación oral: exponer un tema académico usando voz pasiva apropiadamente.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 9°',
          'Artículos de noticias en inglés de nivel B1 (BBC Learning English, VOA Learning English)',
          'Guías de trabajo sobre voz pasiva en diferentes tiempos verbales',
          'Titulares de periódicos en inglés para análisis',
          'Rúbrica de evaluación de producciones escritas formales'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la estructura de la voz pasiva en presente, pasado y futuro simple.',
            'Describe las razones por las que se usa la voz pasiva en textos formales.',
            'Identifica vocabulario académico y de reporte en textos periodísticos.'
          ],
          hacer: [
            'Construye oraciones en voz pasiva en diferentes tiempos verbales sin errores.',
            'Transforma oraciones entre voz activa y pasiva manteniendo el significado.',
            'Escribe un texto informativo breve usando voz pasiva con el registro formal adecuado.',
            'Lee textos periodísticos y responde preguntas de comprensión de diferente nivel.'
          ],
          ser: [
            'Muestra interés por los eventos actuales del mundo de habla inglesa.',
            'Desarrolla responsabilidad al verificar la información antes de usarla en sus textos.',
            'Colabora de manera efectiva en las actividades de análisis de textos auténticos.'
          ]
        },

        competenciaCiudadana: 'Desarrolla habilidades de lectura crítica de medios en inglés, identificando el propósito y la perspectiva de las noticias para formar una opinión informada como ciudadano global.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Produzco textos coherentes de mediana extensión sobre temas personales y académicos.',
          'Reviso y corrijo mis producciones escritas con apoyo de recursos (diccionario, gramática) o del profesor.',
          'Hablo de manera fluida y comprensible sobre temas personales, académicos y de actualidad.',
          'Entiendo las ideas principales de presentaciones, conferencias cortas y programas de radio sobre temas de mi interés.',
          'Participo activamente en debates sencillos sobre temas relevantes para mi comunidad.'
        ],

        dba: 'Produce textos escritos formales e informales de mediana extensión integrando los conocimientos gramaticales del año (presente perfecto, condicionales, voz pasiva) con coherencia, cohesión y registro adecuado.',

        ejesTematicos: [
          'Reported Speech: statements, questions and commands',
          'Writing formal letters and emails: structure and conventions',
          'Integrative review: Perfect tenses, Conditionals, Passive Voice',
          'Oral presentations: structure, delivery and interaction',
          'Integrative project: written and oral production portfolio'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo integro las estructuras gramaticales aprendidas este año para comunicarme con eficacia en inglés tanto de forma oral como escrita?',

        diagnostico: 'El 48% de los estudiantes presenta dificultades para integrar varios tiempos verbales en un mismo texto y el 52% no organiza sus presentaciones orales con una estructura clara.',

        competenciasICFES: {
          comunicativa: 'Produce textos escritos y orales de mediana complejidad integrando coherentemente diferentes tiempos verbales y estructuras gramaticales aprendidas durante el año.',
          pragmatica: 'Adapta el estilo indirecto para reportar lo que otras personas dijeron, preguntaron o pidieron, haciendo los cambios de tiempo y pronombre necesarios.',
          linguistica: 'Usa el estilo indirecto (reported speech) para transformar afirmaciones, preguntas y órdenes en discurso reportado, aplicando los cambios de tiempo verbal y pronombre requeridos.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Transforma afirmaciones y preguntas a estilo indirecto con los cambios de tiempo y pronombre correctos.',
            'Integra múltiples estructuras gramaticales del nivel B1.1 en producciones escritas y orales coherentes.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-07', 'ing-s11-09'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Transforma oraciones directas a estilo indirecto haciendo los cambios de tiempo y pronombre correctamente.',
          'Escribe una carta formal adecuada en formato, registro y convenciones del inglés escrito.',
          'Produce un texto de mediana extensión integrando presente perfecto, condicionales y voz pasiva.',
          'Realiza una presentación oral estructurada (introducción, desarrollo, conclusión) sobre un tema académico.',
          'Presenta su portafolio integrador reflexionando sobre su progreso comunicativo en inglés.'
        ],

        estrategiasMetodologicas: [
          'Actividad "Telephone Game" en inglés: practicar el estilo indirecto oralmente.',
          'Análisis de cartas formales auténticas: identificar estructura y convenciones.',
          'Escritura guiada de carta formal con retroalimentación por pares usando rúbrica.',
          'Proyecto integrador: producción escrita y presentación oral sobre un tema de interés.',
          'Autoevaluación del portafolio con reflexión escrita sobre el progreso del año.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 9°',
          'Modelos de cartas formales en inglés',
          'Guías de estilo indirecto con tablas de cambios de tiempo verbal',
          'Rúbricas de evaluación de presentaciones orales y producción escrita',
          'Grabaciones de los estudiantes para autoevaluación de la producción oral'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica los cambios de tiempo verbal y pronombre en el estilo indirecto.',
            'Describe la estructura y las convenciones de una carta formal en inglés.',
            'Reconoce las estructuras gramaticales del nivel B1.1 en textos auténticos.'
          ],
          hacer: [
            'Transforma oraciones en estilo directo a indirecto con los cambios correctos.',
            'Produce una carta formal con estructura, registro y convenciones adecuadas.',
            'Realiza una presentación oral coherente, estructurada y comprensible.',
            'Presenta un portafolio que evidencia su progreso en las cinco habilidades comunicativas.'
          ],
          ser: [
            'Reflexiona con honestidad sobre sus fortalezas y debilidades en el inglés.',
            'Valora el esfuerzo y el progreso de sus compañeros con una actitud constructiva.',
            'Proyecta con motivación el aprendizaje del inglés como herramienta para su futuro.'
          ]
        },

        competenciaCiudadana: 'Reconoce el inglés como una herramienta para ampliar sus horizontes académicos, culturales y profesionales, y se compromete con su aprendizaje continuo como ciudadano del mundo.'
      }
    }
  },

  // ============================================================
  // GRADO 10
  // ============================================================
  '10': {
    grado: '10°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    nivelCEFR: 'B1.2',
    objetivo: 'Alcanzar el nivel B1.2 desarrollando la comprensión de textos complejos de diferente tipología, la producción de ensayos argumentativos y textos formales, el uso de estructuras gramaticales avanzadas y la participación en debates con argumentos estructurados',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos de diferentes tipos y fuentes sobre temas de interés general y académico.',
          'Analizo la estructura y la coherencia de textos argumentativos, expositivos y descriptivos.',
          'Escribo textos bien estructurados sobre una amplia gama de temas usando vocabulario variado.',
          'Hablo con fluidez y espontaneidad sobre una amplia variedad de temas personales y académicos.',
          'Entiendo instrucciones para ejecutar acciones cotidianas con razonable fluidez.'
        ],

        dba: 'Comprende y produce textos sobre situaciones hipotéticas complejas usando el tercer condicional y modales perfectos (could have, should have, would have), reflexionando sobre situaciones del pasado.',

        ejesTematicos: [
          'Third Conditional: hypothetical past situations',
          'Mixed Conditionals: past hypothesis with present consequences',
          'Perfect modals: could have, should have, would have, might have',
          'Expressing regret, criticism and speculation about the past',
          'Reading: complex argumentative and expository texts'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo reflexionamos en inglés sobre decisiones pasadas, errores cometidos y situaciones hipotéticas usando el tercer condicional y los modales perfectos?',

        diagnostico: 'El 67% de los estudiantes no usa el tercer condicional correctamente y el 71% no diferencia el significado de los modales perfectos para expresar arrepentimiento, crítica y especulación sobre el pasado.',

        competenciasICFES: {
          comunicativa: 'Comprende y produce textos que expresan hipótesis sobre el pasado, arrepentimiento, crítica y especulación usando el tercer condicional y los modales perfectos en contextos comunicativos apropiados.',
          pragmatica: 'Identifica la intención comunicativa (arrepentimiento con should have, posibilidad con could have, especulación con might have) de los modales perfectos en textos y diálogos.',
          linguistica: 'Construye correctamente el tercer condicional (if + past perfect / would have + past participle) y usa los modales perfectos con el significado pragmático adecuado al contexto.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Pragmático',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Construye el tercer condicional para expresar situaciones hipotéticas contrarias al pasado real.',
            'Selecciona el modal perfecto adecuado (could/should/would/might have) según la intención comunicativa.'
          ]
        },

        aprendizajesICFES: ['ing-s11-05', 'ing-s11-06', 'ing-s11-04'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Construye oraciones en tercer condicional sin errores sistemáticos en la estructura.',
          'Usa should have, could have, would have y might have con los significados apropiados.',
          'Escribe un texto reflexivo sobre una situación histórica o personal usando el tercer condicional.',
          'Lee textos argumentativos y expositivos de nivel B1+ identificando su estructura y argumentos.',
          'Debate hipótesis sobre eventos históricos usando el tercer condicional y modales perfectos.'
        ],

        estrategiasMetodologicas: [
          'Análisis de situaciones históricas: "What would have happened if...?" con tercer condicional.',
          'Diferenciación pragmática: ejercicios con should have (arrepentimiento), might have (especulación), could have (posibilidad).',
          'Escritura reflexiva: carta a uno mismo del pasado con consejos usando perfect modals.',
          'Debate histórico: grupos defienden versiones alternativas de eventos históricos.',
          'Lectura analítica: identificar la estructura (tesis, argumentos, conclusión) de textos argumentativos.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 10° (editorial SM, Pearson o Cambridge)',
          'Textos argumentativos y expositivos nivel B1-B2 de fuentes auténticas',
          'Guías de trabajo sobre el tercer condicional y los modales perfectos',
          'Videos de documentales históricos con narración en inglés nivel B1',
          'Artículos de revistas académicas adaptados al nivel'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la estructura del tercer condicional con ejemplos propios.',
            'Describe el significado específico de cada modal perfecto con ejemplos en contexto.',
            'Identifica la estructura de un texto argumentativo (tesis, argumentos, conclusión).'
          ],
          hacer: [
            'Construye oraciones en tercer condicional y las transforma desde el segundo condicional.',
            'Usa los modales perfectos con el significado pragmático correcto en producciones escritas.',
            'Lee textos argumentativos complejos y analiza su estructura y argumentación.',
            'Participa en debates usando hipótesis sobre el pasado con coherencia y fluidez.'
          ],
          ser: [
            'Reflexiona con madurez sobre decisiones y errores pasados propios y ajenos.',
            'Demuestra pensamiento crítico al evaluar argumentos durante los debates históricos.',
            'Muestra tolerancia ante interpretaciones diferentes de los eventos históricos debatidos.'
          ]
        },

        competenciaCiudadana: 'Desarrolla la capacidad de reflexionar críticamente sobre decisiones históricas y sus consecuencias en inglés, valorando el pensamiento contrafáctico como herramienta de aprendizaje y ciudadanía crítica.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo la estructura y la coherencia de textos argumentativos, expositivos y descriptivos.',
          'Redacto ensayos argumentativos presentando y desarrollando un punto de vista con evidencias.',
          'Sustento y defiendo posiciones con argumentos organizados, ejemplos y evidencias.',
          'Comprendo el contenido de emisiones de radio, podcasts y videos sobre temas de interés general.',
          'Debato y discuto con argumentos estructurados y con respeto hacia los interlocutores.'
        ],

        dba: 'Produce ensayos argumentativos de cinco párrafos presentando una tesis, argumentos sustentados con evidencias y una conclusión coherente, usando vocabulario académico y conectores argumentativos.',

        ejesTematicos: [
          'Essay writing: five-paragraph argumentative essay structure',
          'Academic vocabulary: hedging language and reporting verbs',
          'Discourse markers: argument connectors and transitions',
          'Relative clauses: defining and non-defining',
          'Reading: evaluating arguments in opinion articles'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo estructuro un ensayo argumentativo en inglés que presente una tesis clara y la defienda con evidencias convincentes?',

        diagnostico: 'El 73% de los estudiantes no estructura sus ensayos con una tesis clara ni desarrolla los argumentos con evidencias; el 65% no usa vocabulario académico ni conectores argumentativos apropiados.',

        competenciasICFES: {
          comunicativa: 'Produce ensayos argumentativos estructurados de cinco párrafos con tesis, argumentos sustentados y conclusión, usando vocabulario académico y conectores de argumentación.',
          pragmatica: 'Identifica y usa lenguaje de mitigación (hedging: it seems, it is argued that, some people believe) y verbos de reporte (claim, suggest, argue) en textos académicos.',
          linguistica: 'Usa oraciones de relativo especificativas y explicativas (who, which, that, where, whose) para añadir información y precisión en textos académicos y argumentativos.'
        },

        matrizReferencia: {
          componente: 'Pragmático / Lexical',
          competencia: 'Comprensión de lectura / Uso de la lengua en contexto',
          afirmaciones: [
            'Evalúa la validez de los argumentos presentados en textos argumentativos de nivel B1-B2.',
            'Produce ensayos con estructura clara usando vocabulario académico y conectores argumentativos.'
          ]
        },

        aprendizajesICFES: ['ing-s11-03', 'ing-s11-07', 'ing-s11-10'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Escribe un ensayo argumentativo de cinco párrafos con tesis, argumentos y conclusión claramente diferenciados.',
          'Usa conectores argumentativos (furthermore, however, on the other hand, therefore, in conclusion) correctamente.',
          'Incorpora oraciones de relativo para añadir información y precisión en sus textos.',
          'Evalúa la validez de los argumentos en artículos de opinión de nivel B1-B2.',
          'Defiende oralmente su posición en un debate estructurado con argumentos organizados.'
        ],

        estrategiasMetodologicas: [
          'Análisis de ensayos modelo: identificar tesis, argumentos, evidencias y conectores.',
          'Escritura por etapas: tesis → argumentos → evidencias → conclusión con retroalimentación en cada fase.',
          'Debate Oxford format: equipos defienden posiciones contrarias sobre un tema social.',
          'Taller de oraciones relativas: transformar pares de oraciones simples a complejas.',
          'Coevaluación de ensayos con rúbrica: identificar fortalezas y áreas de mejora.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 10°',
          'Artículos de opinión de periódicos en inglés nivel B1-B2 (The Guardian, BBC)',
          'Guías de escritura académica con modelos de ensayos de cinco párrafos',
          'Diccionario de conectores y vocabulario académico en inglés',
          'Rúbricas de evaluación de ensayos argumentativos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe la estructura de un ensayo argumentativo de cinco párrafos.',
            'Explica la diferencia entre oraciones de relativo especificativas y explicativas.',
            'Identifica y clasifica conectores argumentativos según su función discursiva.'
          ],
          hacer: [
            'Produce un ensayo argumentativo con tesis clara, argumentos sustentados y conclusión coherente.',
            'Usa oraciones de relativo para añadir información de manera precisa en sus escritos.',
            'Evalúa la calidad de los argumentos en textos de opinión con criterios explícitos.',
            'Participa en debates con argumentos estructurados, evidencias y respeto al interlocutor.'
          ],
          ser: [
            'Muestra disposición para revisar y mejorar sus ensayos a partir de la retroalimentación.',
            'Desarrolla pensamiento crítico al evaluar la validez de los argumentos ajenos.',
            'Demuestra respeto y apertura intelectual durante los debates argumentativos.'
          ]
        },

        competenciaCiudadana: 'Desarrolla la capacidad de argumentar posiciones informadas sobre temas sociales en inglés, fortaleciendo la participación democrática y la ciudadanía crítica en contextos globales.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos de diferentes tipos y fuentes sobre temas de interés general y académico.',
          'Identifico el propósito, la audiencia y el tono del autor en textos escritos de complejidad media.',
          'Produzco textos formales (informes, solicitudes, reseñas) con el registro adecuado.',
          'Presento temas complejos de manera estructurada adaptando el lenguaje a la audiencia.',
          'Identifico el argumento central y los detalles de apoyo en conferencias y discursos formales.'
        ],

        dba: 'Comprende e identifica el propósito, la audiencia, el tono y las características formales de diferentes tipos de texto (narrativo, descriptivo, expositivo, argumentativo, instructivo) para producir textos apropiados según el contexto.',

        ejesTematicos: [
          'Text types and features: narrative, descriptive, expository, argumentative, instructional',
          'Critical reading: purpose, audience, tone and bias',
          'Advanced reading comprehension strategies: inference and evaluation',
          'Formal writing: reports, reviews and proposals',
          'Academic English: nominalization and complex sentence structures'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo identifico el propósito, la audiencia y el tono de un texto en inglés para leer críticamente y producir textos formales apropiados?',

        diagnostico: 'El 69% de los estudiantes no identifica el tono y la posición del autor en textos argumentativos, y el 63% no sabe producir textos formales como informes y reseñas con el registro adecuado.',

        competenciasICFES: {
          comunicativa: 'Comprende textos de diferente tipología identificando el propósito, la audiencia, el tono y la posición del autor, y produce textos formales (informes, reseñas) con el registro y la estructura correctos.',
          pragmatica: 'Reconoce la posición e intenciones del autor, diferencia entre hechos y opiniones, e identifica técnicas persuasivas y de sesgo en textos argumentativos y periodísticos.',
          linguistica: 'Usa nominalizaciones, estructuras de cláusula nominal y vocabulario formal-académico para producir textos con el nivel de formalidad adecuado al tipo de texto y audiencia.'
        },

        matrizReferencia: {
          componente: 'Pragmático / Lexical',
          competencia: 'Comprensión de lectura',
          afirmaciones: [
            'Identifica el propósito, el tono y la posición del autor en textos de mediana a alta complejidad.',
            'Diferencia entre hechos y opiniones e identifica técnicas persuasivas en textos argumentativos.'
          ]
        },

        aprendizajesICFES: ['ing-s11-03', 'ing-s11-10', 'ing-s11-01'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Identifica el propósito, la audiencia y el tono del autor en textos de diferente tipología.',
          'Diferencia entre información factual y opinión en artículos y textos argumentativos.',
          'Produce un informe o una reseña formal con estructura, registro y vocabulario adecuados.',
          'Hace inferencias y saca conclusiones a partir de información implícita en textos complejos.',
          'Presenta un tema complejo con estructura clara adaptando el lenguaje a la audiencia.'
        ],

        estrategiasMetodologicas: [
          'Análisis comparativo de textos del mismo tema en diferentes tipos (noticia, ensayo, reseña).',
          'Lectura crítica: identificar sesgos, hechos vs. opiniones y técnicas persuasivas.',
          'Escritura de una reseña de película, libro o evento cultural en inglés.',
          'Presentación académica: exponer un tema de otra asignatura en inglés con soporte visual.',
          'Taller de inferencia: responder preguntas que requieren leer entre líneas del texto.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 10°',
          'Textos auténticos de diferente tipología (artículos, reseñas, informes, noticias)',
          'Guías de análisis textual y lectura crítica',
          'Modelos de informes y reseñas formales en inglés',
          'Podcast y videos académicos en inglés con guías de comprensión'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las características de los principales tipos de texto en inglés.',
            'Explica las diferencias entre registro formal e informal con ejemplos en texto.',
            'Identifica técnicas argumentativas y persuasivas en textos de opinión.'
          ],
          hacer: [
            'Analiza textos de diferente tipología identificando propósito, audiencia, tono y argumento.',
            'Diferencia entre hechos y opiniones e identifica sesgos en textos argumentativos.',
            'Produce textos formales (informe o reseña) con estructura y registro adecuados.',
            'Hace presentaciones académicas estructuradas adaptando el lenguaje a la audiencia.'
          ],
          ser: [
            'Desarrolla pensamiento crítico para cuestionar y evaluar la información que lee.',
            'Muestra responsabilidad académica al citar las fuentes de información que usa.',
            'Valora la lectura en inglés como herramienta de acceso al conocimiento global.'
          ]
        },

        competenciaCiudadana: 'Desarrolla lectura crítica de medios en inglés para identificar sesgos y manipulación informativa, formando ciudadanos capaces de evaluar críticamente la información en un mundo globalizado.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Leo con comprensión textos literarios (novelas cortas, obras de teatro, poesía) e identifico sus características.',
          'Evalúo la validez de los argumentos presentados en textos de opinión y artículos periodísticos.',
          'Reviso, edito y mejoro mis textos aplicando criterios de coherencia, cohesión y adecuación.',
          'Uso recursos retóricos (énfasis, pausa, reformulación) para hacer mi discurso más efectivo.',
          'Adapto mi lenguaje y tono según el contexto formal o informal de la conversación.'
        ],

        dba: 'Lee y comprende textos literarios en inglés de complejidad media (cuentos cortos, poesía, fragmentos de novela) identificando recursos literarios, temas y la perspectiva del autor.',

        ejesTematicos: [
          'Literary reading: short stories and poetry in English',
          'Literary devices: metaphor, simile, imagery, irony, symbolism',
          'Narrative perspective: first and third person narrators',
          'Creative writing: short story and descriptive writing',
          'Integrative project: literary analysis and creative production'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo la literatura en inglés nos permite explorar experiencias humanas universales y desarrollar nuestra sensibilidad cultural e intercultural?',

        diagnostico: 'El 72% de los estudiantes no identifica recursos literarios (metáfora, ironía, símbolo) en textos en inglés y el 66% tiene dificultades para escribir creativamente en inglés con cohesión y originalidad.',

        competenciasICFES: {
          comunicativa: 'Lee textos literarios en inglés identificando el tema, los personajes, la perspectiva narrativa y los recursos literarios, y produce textos creativos propios inspirados en las lecturas.',
          pragmatica: 'Identifica el tono (irónico, melancólico, humorístico, crítico), la perspectiva del narrador y la intención del autor en textos literarios de diferente género.',
          linguistica: 'Identifica y usa recursos literarios (metáfora, símil, ironía, simbolismo, imágenes sensoriales) en el análisis de textos y en sus propias producciones creativas escritas.'
        },

        matrizReferencia: {
          componente: 'Lexical / Pragmático',
          competencia: 'Comprensión de lectura',
          afirmaciones: [
            'Identifica el tema, los personajes y los recursos literarios en textos literarios de nivel B1-B2.',
            'Deduce la intención del autor y el estado de ánimo de los personajes a partir de pistas del texto.'
          ]
        },

        aprendizajesICFES: ['ing-s11-10', 'ing-s11-03', 'ing-s11-01'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Identifica el tema central, los personajes y la perspectiva narrativa en cuentos cortos en inglés.',
          'Reconoce y explica el uso de metáforas, símiles, ironía y simbolismo en textos literarios.',
          'Escribe un cuento corto o un poema en inglés usando al menos tres recursos literarios.',
          'Analiza el tono y la intención del autor en textos literarios y lo sustenta con evidencia textual.',
          'Presenta un análisis literario oral de un cuento corto leído durante el periodo.'
        ],

        estrategiasMetodologicas: [
          'Lectura compartida y analítica de cuentos cortos en inglés nivel B1 (O. Henry, R. Dahl adaptado).',
          'Círculo literario: discusión en grupos sobre el tema, los personajes y los recursos del texto.',
          'Taller de escritura creativa: imitar el estilo del autor leído para crear un texto propio.',
          'Análisis de poesía: trabajar con poemas cortos de autores anglófonos relevantes.',
          'Proyecto integrador: análisis literario escrito y presentación oral de un cuento seleccionado.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 10°',
          'Antología de cuentos cortos en inglés nivel B1-B2 (graded readers, adaptaciones)',
          'Poemas seleccionados de autores de habla inglesa con guías de análisis',
          'Guías de recursos literarios con ejemplos en inglés',
          'Grabaciones de cuentos narrados en inglés para comprensión auditiva'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define y ejemplifica los principales recursos literarios en inglés (metáfora, símil, ironía, símbolo).',
            'Describe las diferencias entre el narrador en primera y tercera persona.',
            'Identifica las características de los géneros literarios trabajados (cuento, poema).'
          ],
          hacer: [
            'Analiza textos literarios identificando tema, personajes, perspectiva y recursos literarios.',
            'Escribe un cuento corto o un poema usando recursos literarios con creatividad y cohesión.',
            'Presenta un análisis literario oral con argumentos sustentados en evidencia textual.',
            'Evalúa el texto literario propio y ajeno con criterios de calidad estética y lingüística.'
          ],
          ser: [
            'Desarrolla sensibilidad estética y apreciación por la literatura en lengua inglesa.',
            'Muestra creatividad y valentía al compartir sus producciones literarias con el grupo.',
            'Valora la literatura como reflejo de las experiencias humanas universales.'
          ]
        },

        competenciaCiudadana: 'Desarrolla empatía y comprensión intercultural al explorar experiencias humanas universales a través de la literatura en inglés, ampliando su perspectiva como ciudadano del mundo.'
      }
    }
  },

  // ============================================================
  // GRADO 11
  // ============================================================
  '11': {
    grado: '11°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    nivelCEFR: 'B1.2',
    objetivo: 'Alcanzar y consolidar el nivel B1.2 desarrollando la comprensión crítica de textos complejos, la producción de textos formales académicos, la participación fluida en debates y la preparación específica para la prueba Saber 11 de Inglés',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos de diferentes tipos y fuentes sobre temas de interés general y académico.',
          'Analizo la estructura y la coherencia de textos argumentativos, expositivos y descriptivos.',
          'Redacto ensayos argumentativos presentando y desarrollando un punto de vista con evidencias.',
          'Sustento y defiendo posiciones con argumentos organizados, ejemplos y evidencias.',
          'Reconozco las posiciones e intenciones de los hablantes en debates y entrevistas.'
        ],

        dba: 'Lee con comprensión crítica textos argumentativos y expositivos de nivel B1-B2, evaluando la validez de los argumentos, identificando sesgos y distinguiendo entre hechos y opiniones sustentadas.',

        ejesTematicos: [
          'Advanced reading comprehension: inference, evaluation and critical analysis',
          'Discourse analysis: cohesion, coherence and text organization',
          'Complex grammar review: conditionals, passive voice, reported speech',
          'Academic vocabulary in context: collocations and word families',
          'ICFES Saber 11 preparation: reading comprehension strategies'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo desarrollo la lectura crítica en inglés para evaluar argumentos, identificar sesgos y hacer inferencias complejas en los textos del examen Saber 11?',

        diagnostico: 'El 68% de los estudiantes tiene dificultades para hacer inferencias complejas en inglés y el 74% no identifica el sesgo del autor ni evalúa la solidez de los argumentos en textos de nivel B1-B2.',

        competenciasICFES: {
          comunicativa: 'Lee textos complejos de diferente tipología haciendo inferencias, evaluando argumentos e identificando la posición del autor con evidencia textual explícita e implícita.',
          pragmatica: 'Evalúa la validez de los argumentos, reconoce el sesgo del autor y diferencia entre hechos verificables y opiniones en textos argumentativos y periodísticos de nivel B1-B2.',
          linguistica: 'Identifica y analiza los mecanismos de cohesión textual (referencia, sustitución, elipsis, conectores) que dan coherencia a textos complejos en inglés.'
        },

        matrizReferencia: {
          componente: 'Lexical / Pragmático',
          competencia: 'Comprensión de lectura',
          afirmaciones: [
            'Evalúa la validez de los argumentos presentados en textos argumentativos identificando falacias y sesgos.',
            'Extrae conclusiones lógicas a partir de información explícita e implícita en textos de nivel B1-B2.'
          ]
        },

        aprendizajesICFES: ['ing-s11-02', 'ing-s11-03', 'ing-s11-10'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Identifica información explícita e implícita en textos complejos respondiendo preguntas de diferente nivel cognitivo.',
          'Evalúa la solidez de los argumentos e identifica falacias y sesgos en textos argumentativos.',
          'Resuelve simulacros de comprensión lectora ICFES nivel B1 con desempeño satisfactorio.',
          'Analiza la organización y los mecanismos de cohesión de textos complejos.',
          'Escribe un ensayo argumentativo usando vocabulario académico y estructuras complejas.'
        ],

        estrategiasMetodologicas: [
          'Simulacros guiados de comprensión lectora ICFES: análisis de errores y estrategias.',
          'Actividad "Fact or Opinion": evaluar la solidez de argumentos en artículos auténticos.',
          'Lectura estratégica: aplicar skimming, scanning e inferencia en textos de examen.',
          'Repaso integrado de gramática compleja: condicionales, voz pasiva y estilo indirecto.',
          'Construcción de mapas de cohesión: identificar referentes y conectores en textos complejos.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 11° (editorial SM, Pearson o Cambridge)',
          'Cuadernillos de preparación ICFES Saber 11 - componente de Inglés',
          'Textos auténticos nivel B1-B2 de diferentes fuentes (BBC, The Economist nivel básico)',
          'Guías de estrategias de comprensión lectora para exámenes estandarizados',
          'Aplicación de simulacros ICFES en línea'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las estrategias de comprensión lectora para abordar textos complejos y preguntas de examen.',
            'Identifica los mecanismos de cohesión en textos y explica su función.',
            'Reconoce las estructuras gramaticales complejas revisadas (condicionales, pasiva, reported speech).'
          ],
          hacer: [
            'Lee textos complejos haciendo inferencias y evaluando argumentos con evidencia textual.',
            'Resuelve ejercicios de comprensión tipo ICFES identificando el nivel cognitivo de cada pregunta.',
            'Escribe ensayos argumentativos con tesis clara, argumentos y vocabulario académico.',
            'Identifica y analiza mecanismos de cohesión en textos auténticos de nivel B1-B2.'
          ],
          ser: [
            'Asume con responsabilidad y disciplina la preparación para la prueba Saber 11.',
            'Muestra perseverancia al enfrentar textos complejos sin rendirse ante la dificultad.',
            'Desarrolla una actitud autocrítica al analizar sus errores en los simulacros.'
          ]
        },

        competenciaCiudadana: 'Desarrolla lectura crítica como herramienta de ciudadanía activa, cuestionando la información que recibe en inglés y formando opiniones informadas sobre temas globales.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo el contenido de emisiones de radio, podcasts y videos sobre temas de interés general.',
          'Identifico el argumento central y los detalles de apoyo en conferencias y discursos formales.',
          'Entiendo textos orales que contienen argot, modismos y expresiones coloquiales comunes.',
          'Participo con fluidez en conversaciones sobre temas abstractos, académicos y sociales.',
          'Negocio significados, solicito aclaraciones y reformulo ideas cuando no soy comprendido.'
        ],

        dba: 'Comprende textos orales de mediana a alta complejidad (podcasts, entrevistas, conferencias breves) identificando el argumento central, los detalles de apoyo y la posición del hablante.',

        ejesTematicos: [
          'ICFES listening simulation: dialogues, interviews and announcements',
          'Pragmatics: speech acts, register and intonation meaning',
          'Idiomatic expressions and collocations in context',
          'Oral interaction: academic debates and discussions',
          'ICFES Saber 11 preparation: use of language section'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo identifico el propósito, el argumento y la posición del hablante en textos orales y situaciones comunicativas del examen Saber 11?',

        diagnostico: 'El 70% de los estudiantes tiene dificultades con la sección de simulación de comprensión auditiva del ICFES y el 65% no identifica la intención comunicativa (consejo, queja, sugerencia) en los diálogos escritos.',

        competenciasICFES: {
          comunicativa: 'Comprende diálogos y situaciones comunicativas escritas que simulan contextos de escucha, identificando el propósito, el argumento central y la posición de los hablantes.',
          pragmatica: 'Identifica actos de habla (consejos, sugerencias, quejas, invitaciones, disculpas) y la intención comunicativa de los hablantes en diálogos y transcripciones de nivel B1-B2.',
          linguistica: 'Reconoce expresiones idiomáticas, coloquiales y de registro informal frecuentes en el inglés hablado, deduciendo su significado en contexto.'
        },

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Comprensión auditiva / Uso de la lengua en contexto',
          afirmaciones: [
            'Identifica el propósito y el tema principal de diálogos y situaciones comunicativas escritas.',
            'Deduce información implícita a partir de lo que dicen los participantes en un intercambio comunicativo.'
          ]
        },

        aprendizajesICFES: ['ing-s11-06', 'ing-s11-08', 'ing-s11-01'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Identifica el propósito y el tema de diálogos escritos tipo ICFES (simulación de comprensión auditiva).',
          'Deduce información implícita a partir de las intervenciones de los hablantes en un diálogo.',
          'Reconoce actos de habla (consejo, sugerencia, queja, invitación) en intercambios comunicativos.',
          'Identifica expresiones idiomáticas y coloquiales comunes en textos y diálogos.',
          'Participa en debates académicos con fluidez, negociando significados y solicitando aclaraciones.'
        ],

        estrategiasMetodologicas: [
          'Simulacros de la sección de uso del lenguaje y comprensión del ICFES con análisis de respuestas.',
          'Análisis de actos de habla: identificar la intención comunicativa en diálogos escritos.',
          'Taller de expresiones idiomáticas: deducir significado por contexto y practicar en situaciones.',
          'Role-play académico: simular situaciones de debate y negociación de significados.',
          'Comprensión de podcasts y entrevistas con guías de escucha activa.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 11°',
          'Cuadernillos ICFES Saber 11 - componente Inglés con sección de uso del lenguaje',
          'Colección de diálogos y transcripciones de situaciones comunicativas nivel B1-B2',
          'Listas de expresiones idiomáticas comunes en inglés con ejemplos en contexto',
          'Podcasts en inglés nivel B1: BBC Learning English, ESL Pod'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los tipos de actos de habla y cómo identificarlos en situaciones comunicativas.',
            'Identifica expresiones idiomáticas comunes y explica su significado en contexto.',
            'Reconoce las estrategias para abordar la sección de uso del lenguaje del ICFES.'
          ],
          hacer: [
            'Resuelve ejercicios tipo ICFES de comprensión auditiva simulada con desempeño satisfactorio.',
            'Identifica actos de habla e intención comunicativa en diálogos escritos de mediana complejidad.',
            'Deduce el significado de expresiones idiomáticas en contextos comunicativos.',
            'Participa en debates académicos con fluidez, negociando significados y reformulando ideas.'
          ],
          ser: [
            'Muestra iniciativa para escuchar contenidos en inglés fuera del aula (podcasts, videos).',
            'Desarrolla confianza en sus habilidades de comunicación oral en inglés.',
            'Asume con seriedad y compromiso la preparación para el examen Saber 11.'
          ]
        },

        competenciaCiudadana: 'Desarrolla la capacidad de comunicarse con eficacia en inglés en contextos académicos y cotidianos, ampliando su participación como ciudadano en espacios internacionales y globales.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Uso correctamente signos de puntuación, ortografía y estructuras gramaticales complejas.',
          'Reviso, edito y mejoro mis textos aplicando criterios de coherencia, cohesión y adecuación.',
          'Hago resúmenes de artículos, documentales y textos académicos de manera coherente.',
          'Comprendo textos de diferentes tipos y fuentes sobre temas de interés general y académico.',
          'Interactúo de manera efectiva con hablantes nativos sobre temas de interés general.'
        ],

        dba: 'Usa correctamente las estructuras gramaticales avanzadas evaluadas en el ICFES (tiempos verbales, modales, voz pasiva, condicionales, oraciones de relativo, conectores) en contextos de uso real de la lengua.',

        ejesTematicos: [
          'ICFES grammar review: all tenses in context',
          'Complex sentences: relative clauses, noun clauses, adverbial clauses',
          'Lexical accuracy: word formation, collocations and vocabulary in context',
          'Writing for accuracy: editing, proofreading and error correction',
          'ICFES Saber 11 preparation: integrated grammar practice'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo uso con precisión las estructuras gramaticales del inglés en contextos reales de comunicación y en el formato del examen Saber 11?',

        diagnostico: 'El 65% de los estudiantes comete errores sistemáticos de selección de tiempo verbal en contexto y el 60% no usa conectores y oraciones complejas de manera apropiada en sus producciones escritas.',

        competenciasICFES: {
          comunicativa: 'Usa con precisión las estructuras gramaticales del inglés en contextos comunicativos reales y en el formato evaluado por el ICFES, eligiendo la forma verbal y el conector adecuados.',
          pragmatica: 'Selecciona la palabra o expresión más apropiada para completar textos según el contexto, el registro y el significado preciso requerido por la situación comunicativa.',
          linguistica: 'Usa correctamente la formación de palabras (prefijos, sufijos, familias de palabras), las colocaciones léxicas frecuentes y el vocabulario de uso general y académico en contexto.'
        },

        matrizReferencia: {
          componente: 'Gramatical / Lexical',
          competencia: 'Uso de la lengua en contexto',
          afirmaciones: [
            'Selecciona el tiempo verbal, el modal o el conector adecuado para completar textos según el contexto.',
            'Elige la palabra o expresión más precisa para completar un texto formal o informal según el registro.'
          ]
        },

        aprendizajesICFES: ['ing-s11-04', 'ing-s11-05', 'ing-s11-09'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Selecciona el tiempo verbal correcto para completar textos según el contexto comunicativo.',
          'Completa textos con el conector lógico apropiado (however, therefore, although, in addition).',
          'Usa oraciones de relativo, nominales y adverbiales para construir textos complejos.',
          'Edita y corrige errores gramaticales y léxicos en textos propios y ajenos con rúbrica.',
          'Resuelve simulacros de la sección de uso del lenguaje del ICFES con desempeño en nivel B1.'
        ],

        estrategiasMetodologicas: [
          'Repaso sistemático por tipo de estructura: una semana por categoría gramatical.',
          'Corrección de errores frecuentes: identificar y corregir los errores más comunes del nivel.',
          'Simulacros cronometrados de la sección de uso del lenguaje del ICFES.',
          'Taller de edición: corregir textos con errores previamente sembrados.',
          'Construcción de oraciones complejas: combinar oraciones simples con cláusulas relativas y adverbiales.'
        ],

        materialesEducativos: [
          'Texto escolar de Inglés 11°',
          'Cuadernillos ICFES Saber 11 - sección de uso del lenguaje',
          'Guías de revisión gramatical completa nivel B1-B2',
          'Diccionario de colocaciones léxicas del inglés (Oxford Collocations Dictionary)',
          'Banco de ejercicios de selección múltiple tipo ICFES organizados por estructura gramatical'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las reglas de uso de los principales tiempos verbales evaluados en el ICFES.',
            'Describe la formación de palabras usando prefijos y sufijos comunes en inglés.',
            'Identifica el tipo de cláusula (relativa, nominal, adverbial) en oraciones complejas.'
          ],
          hacer: [
            'Selecciona el tiempo verbal o modal correcto para completar textos en contexto.',
            'Usa conectores lógicos apropiados para organizar y cohesionar textos.',
            'Edita y corrige producciones escritas propias y ajenas aplicando criterios gramaticales y léxicos.',
            'Resuelve simulacros ICFES de uso del lenguaje con desempeño en nivel B1 o superior.'
          ],
          ser: [
            'Demuestra disciplina y organización en el repaso sistemático de la gramática del inglés.',
            'Asume con responsabilidad la identificación y corrección de sus errores más frecuentes.',
            'Muestra confianza en sus capacidades lingüísticas al afrontar los simulacros de examen.'
          ]
        },

        competenciaCiudadana: 'Reconoce que el dominio del inglés le abre oportunidades académicas, laborales y ciudadanas en un mundo globalizado, motivándose para alcanzar el nivel B1 en la prueba Saber 11.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo textos de diferentes tipos y fuentes sobre temas de interés general y académico.',
          'Identifico el propósito, la audiencia y el tono del autor en textos escritos de complejidad media.',
          'Evalúo la validez de los argumentos presentados en textos de opinión y artículos periodísticos.',
          'Hablo con fluidez y espontaneidad sobre una amplia variedad de temas personales y académicos.',
          'Interactúo de manera efectiva con hablantes nativos sobre temas de interés general.'
        ],

        dba: 'Demuestra nivel B1 en las habilidades comunicativas del inglés: comprende textos de mediana complejidad, infiere significados, usa estructuras gramaticales con precisión y se comunica con fluidez en situaciones académicas y cotidianas, preparado para la prueba Saber 11.',

        ejesTematicos: [
          'ICFES Saber 11 integrated simulation: full-length practice tests',
          'Reading strategies: time management and question analysis',
          'Vocabulary consolidation: high-frequency academic word list',
          'Oral fluency and confidence: presentations and discussions',
          'Integrative project: English portfolio and self-assessment'
        ],

        tiposPensamiento: ['Escucha', 'Lectura', 'Escritura', 'Monólogo', 'Conversación'],

        preguntaProblema: '¿Cómo demuestro mi nivel B1 de inglés en el examen Saber 11 y cómo me preparo para usar el inglés en mi vida académica y profesional futura?',

        diagnostico: 'El 55% de los estudiantes no logra el nivel B1 en los simulacros del ICFES y el 49% no tiene confianza suficiente para comunicarse oralmente en inglés en situaciones académicas.',

        competenciasICFES: {
          comunicativa: 'Integra todas las competencias comunicativas desarrolladas durante la educación media para demostrar nivel B1 en la prueba Saber 11 y para comunicarse con eficacia en contextos académicos reales.',
          pragmatica: 'Infiere significados sofisticados, reconoce matices pragmáticos y retóricos, y evalúa críticamente la información en textos de diferente tipología y complejidad del nivel B1-B2.',
          linguistica: 'Usa con precisión y fluidez el vocabulario académico de alta frecuencia, las estructuras gramaticales complejas y los mecanismos de cohesión del inglés en producciones orales y escritas.'
        },

        matrizReferencia: {
          componente: 'Lexical / Gramatical / Pragmático',
          competencia: 'Comprensión de lectura / Uso de la lengua en contexto',
          afirmaciones: [
            'Resuelve preguntas de comprensión lectora y uso del lenguaje del ICFES Saber 11 con desempeño en nivel B1 o superior.',
            'Infiere significados y hace deducciones complejas a partir de información explícita e implícita en textos del nivel B1-B2.'
          ]
        },

        aprendizajesICFES: ['ing-s11-01', 'ing-s11-02', 'ing-s11-03', 'ing-s11-04', 'ing-s11-05', 'ing-s11-06', 'ing-s11-07', 'ing-s11-08', 'ing-s11-09', 'ing-s11-10'],

        nivelEsperado: 'B1',

        evidenciasAprendizaje: [
          'Resuelve simulacros completos del ICFES Saber 11 de Inglés alcanzando desempeño en nivel B1 o superior.',
          'Aplica estrategias de gestión del tiempo y análisis de preguntas en exámenes cronometrados.',
          'Comprende textos de diferente tipología a nivel B1-B2 con estrategias de lectura eficientes.',
          'Se comunica oralmente con fluidez y confianza en presentaciones y discusiones académicas.',
          'Presenta un portafolio integrador que evidencia su desarrollo comunicativo en inglés a lo largo de la Media.'
        ],

        estrategiasMetodologicas: [
          'Simulacros completos cronometrados del ICFES con análisis detallado de resultados por competencia.',
          'Estrategias de examen: gestión del tiempo, eliminación de distractores y análisis de enunciados.',
          'Presentación final oral: exponer un proyecto personal en inglés ante el grupo.',
          'Portafolio integrador: seleccionar y reflexionar sobre las mejores producciones del año escolar.',
          'Autoevaluación y proyección: reflexionar sobre el nivel alcanzado y las metas de inglés futuras.'
        ],

        materialesEducativos: [
          'Cuadernillos de simulacros ICFES Saber 11 - Inglés (pruebas anteriores liberadas por el ICFES)',
          'Aplicación oficial ICFES o plataformas de simulación en línea',
          'Lista de vocabulario académico de alta frecuencia (Academic Word List - Coxhead)',
          'Rúbricas de evaluación de producciones orales y escritas nivel B1-B2',
          'Recursos en línea: BBC Learning English, British Council - LearnEnglish, Duolingo English Test'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Reconoce las estrategias de examen más eficientes para cada sección del ICFES de Inglés.',
            'Identifica su nivel actual en cada competencia evaluada (comprensión lectora, uso de lengua).',
            'Describe los recursos y estrategias para continuar mejorando su inglés más allá del colegio.'
          ],
          hacer: [
            'Resuelve simulacros ICFES completos con desempeño en nivel B1 o superior.',
            'Aplica estrategias de lectura eficientes (skimming, scanning, inferencia) en exámenes cronometrados.',
            'Realiza una presentación oral final en inglés con fluidez, coherencia y confianza.',
            'Presenta un portafolio que evidencia su progreso en las cinco habilidades comunicativas del inglés.'
          ],
          ser: [
            'Reflexiona con madurez y honestidad sobre su proceso de aprendizaje del inglés a lo largo de la Media.',
            'Proyecta con motivación y realismo el uso del inglés en su vida académica y profesional futura.',
            'Valora el inglés como herramienta indispensable para la ciudadanía global y el desarrollo personal.'
          ]
        },

        competenciaCiudadana: 'Reconoce el inglés como puerta de acceso a la educación superior, las oportunidades laborales y la participación ciudadana en un mundo globalizado, comprometiéndose con su aprendizaje continuo.'
      }
    }
  }

};

// Exportar para uso en módulos (CommonJS y ESM)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANES_INGLES };
}
