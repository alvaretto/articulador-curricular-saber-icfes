/**
 * Planes de aula de Lenguaje - Grados 8° a 11°
 * Estructura: 4 periodos x 10 semanas x 4 horas/semana = 160 horas/año
 * Basado en Estándares Básicos de Competencias (EBC) del MEN - Colombia
 * Articulado con Marco de Referencia ICFES Lectura Crítica (Saber 9° y Saber 11°)
 */

const PLANES_LENGUAJE = {

  // ============================================================
  // GRADO 8
  // ============================================================
  '8': {
    grado: '8°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Desarrollar competencias de comprensión e interpretación textual, producción argumentativa y análisis literario, con énfasis en textos narrativos, líricos y mediáticos propios del grado',

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
          'Leo con sentido crítico textos literarios de diferentes géneros y épocas',
          'Reconozco y analizo los recursos retóricos del discurso literario y los relaciono con la producción de sentido',
          'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto'
        ],

        diagnostico: 'El 54% de los estudiantes no identifica las figuras literarias en textos líricos ni establece relaciones entre el contexto histórico y la obra narrativa.',

        competenciaCiudadana: 'Reconoce en la literatura un espacio para explorar la condición humana y desarrollar empatía hacia realidades distintas a la propia.',

        competenciasICFES: {
          identificar: 'Identifica figuras retóricas (metáfora, símil, hipérbole, personificación) en textos narrativos y líricos, y reconoce su efecto de sentido.',
          comprender: 'Establece relaciones entre la estructura narrativa (narrador, tiempo, espacio, personajes) y el sentido global de la obra literaria.',
          reflexionar: 'Evalúa el punto de vista del narrador y los recursos estilísticos utilizados en función del propósito comunicativo del texto.'
        },

        dba: 'Lee y analiza obras literarias representativas de diferentes épocas y culturas, identificando sus características y el contexto histórico.',

        preguntaProblema: '¿Cómo los recursos literarios y la voz narrativa construyen el sentido de una obra y revelan la visión del mundo del autor?',

        ejesTematicos: [
          'Textos narrativos: cuento y novela',
          'Elementos del relato: narrador, tiempo, espacio, personajes',
          'Textos líricos: poesía y sus formas',
          'Figuras literarias: metáfora, símil, hipérbole, personificación, aliteración',
          'Análisis literario básico',
          'Estadísticas de comprensión lectora: interpretación de resultados'
        ],

        evidenciasAprendizaje: [
          'Identifica y explica el efecto de al menos tres figuras literarias en textos poéticos.',
          'Analiza el tipo de narrador y su influencia en la historia en cuentos leídos en clase.',
          'Relaciona el contexto histórico-cultural de una obra con los temas que desarrolla.',
          'Escribe un análisis literario breve de un cuento o poema siguiendo una estructura básica.',
          'Interpreta el sentido connotativo y denotativo de expresiones en textos líricos y narrativos.'
        ],

        matrizReferencia: {
          componente: 'Semántico',
          competencia: 'Identificar y entender contenidos locales',
          afirmaciones: [
            'Reconoce figuras retóricas y recursos estilísticos en textos literarios y explica su función.',
            'Identifica el tipo de narrador y los elementos del relato que construyen el sentido del texto.'
          ],
          evidenciasICFES: [
            'Reconoce metáforas, símiles, hipérboles y personificaciones en textos literarios.',
            'Interpreta el efecto de los recursos estilísticos en la construcción de sentido del texto.'
          ]
        },

        aprendizajesICFES: ['lc-s9-01', 'lc-s9-03'],
        evidenciasICFES: ['lc-s9-01-e1', 'lc-s9-01-e3', 'lc-s9-03-e1', 'lc-s9-03-e2'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Antología de cuentos colombianos e hispanoamericanos',
          'Poemarios seleccionados (García Lorca, Pablo Neruda, Jorge Artel)',
          'Guías de análisis literario elaboradas por el docente',
          'Diccionario de términos literarios',
          'Fragmentos de novelas juveniles contemporáneas'
        ],

        estrategiasMetodologicas: [
          'Lectura en voz alta y análisis colectivo de poemas para identificar figuras literarias.',
          'Círculos de lectura: discusión de cuentos cortos con preguntas guía.',
          'Escritura creativa: producción de un poema con al menos tres figuras literarias.',
          'Análisis comparativo: dos versiones de una misma historia con narradores distintos.',
          'Prueba diagnóstica inicial de comprensión lectora con textos narrativos.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Reconoce y define las principales figuras literarias (metáfora, símil, hipérbole, personificación).',
            'Identifica los elementos del relato (narrador, personajes, tiempo, espacio, argumento).',
            'Distingue los géneros literarios básicos (lírico, narrativo, dramático) por sus características.'
          ],
          hacer: [
            'Analiza figuras literarias en textos poéticos identificando su efecto de sentido.',
            'Redacta un análisis del narrador y los personajes de un cuento leído.',
            'Escribe un poema o texto narrativo breve usando recursos literarios trabajados en clase.',
            'Interpreta el sentido connotativo de expresiones en textos líricos.'
          ],
          ser: [
            'Muestra disposición al disfrute estético de la literatura durante las lecturas compartidas.',
            'Respeta las interpretaciones de sus compañeros en los círculos de lectura.',
            'Entrega oportunamente los escritos y participa activamente en las actividades.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Comprensión', 'Literatura', 'Producción']
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
          'Produzco textos escritos que evidencian el conocimiento que tengo de la estructura de cada texto y de la complejidad de las relaciones entre su forma y su contenido',
          'Elaboro planes de escritura para organizar mis ideas y las desarrollo oportunamente en el escrito'
        ],

        diagnostico: 'El 49% de los estudiantes no estructura correctamente un texto argumentativo: confunde tesis con argumento y no emplea conectores lógicos adecuados.',

        competenciaCiudadana: 'Desarrolla la capacidad de defender posiciones propias con argumentos razonados, habilidad fundamental para la participación democrática y la resolución de conflictos.',

        competenciasICFES: {
          identificar: 'Identifica la tesis, los argumentos y la conclusión en textos argumentativos de complejidad media.',
          comprender: 'Reconoce la función de los conectores lógicos (causa, contraste, conclusión) en la cohesión de textos argumentativos.',
          reflexionar: 'Evalúa la validez y solidez de los argumentos presentados en un texto y distingue entre hechos y opiniones.'
        },

        dba: 'Produce textos escritos con intención argumentativa o expositiva, usando estrategias retóricas y recursos discursivos adecuados.',

        preguntaProblema: '¿Cómo construir un texto argumentativo sólido que defienda una posición con evidencias pertinentes y convenza al lector?',

        ejesTematicos: [
          'Texto argumentativo: estructura (tesis, argumentos, conclusión)',
          'Tipos de argumentos: de autoridad, ejemplificación, causalidad, analogía',
          'Conectores lógicos y marcadores discursivos',
          'Coherencia y cohesión textual',
          'El ensayo: características y escritura básica',
          'Ortografía y normativa gramatical aplicada'
        ],

        evidenciasAprendizaje: [
          'Identifica la tesis y los argumentos principales en textos argumentativos dados.',
          'Produce un texto argumentativo de mínimo dos cuartillas con tesis clara, al menos tres argumentos y conclusión.',
          'Usa conectores de causa, contraste y conclusión correctamente en sus escritos.',
          'Distingue hechos de opiniones en textos periodísticos y argumentativos.',
          'Revisa y mejora sus propios textos aplicando criterios de coherencia y cohesión.'
        ],

        matrizReferencia: {
          componente: 'Sintáctico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Identifica la tesis, los argumentos y la conclusión en un texto argumentativo.',
            'Reconoce la función de los conectores lógicos en la cohesión del texto.'
          ],
          evidenciasICFES: [
            'Identifica la tesis central y los argumentos de apoyo en textos argumentativos complejos.',
            'Evalúa si la selección de conectores es adecuada para mantener la coherencia del texto.'
          ]
        },

        aprendizajesICFES: ['lc-s9-04', 'lc-s9-05', 'lc-s9-08'],
        evidenciasICFES: ['lc-s9-04-e1', 'lc-s9-04-e2', 'lc-s9-05-e1', 'lc-s9-05-e2', 'lc-s9-08-e2'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Guía de escritura argumentativa con ejemplos y plantillas',
          'Textos editoriales y artículos de opinión de prensa colombiana',
          'Diccionario de conectores y marcadores discursivos',
          'Rúbricas de evaluación de texto argumentativo',
          'Ensayos breves de autores colombianos contemporáneos'
        ],

        estrategiasMetodologicas: [
          'Deconstrucción de textos argumentativos: identificar tesis, argumentos y conclusión en textos reales.',
          'Escritura progresiva: primero la tesis, luego cada argumento con su desarrollo, finalmente la conclusión.',
          'Debate estructurado en el aula: equipos defienden posiciones opuestas sobre un tema de interés.',
          'Coevaluación de escritos con rúbrica: cada estudiante revisa el ensayo de un compañero.',
          'Análisis de falacias comunes en publicidad y discursos políticos para reforzar el pensamiento crítico.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define los elementos de un texto argumentativo (tesis, argumento, conclusión).',
            'Identifica y clasifica tipos de argumentos en textos dados.',
            'Reconoce la función de los conectores de causa, contraste, conclusión y adición.'
          ],
          hacer: [
            'Produce un ensayo argumentativo con estructura clara y argumentos pertinentes.',
            'Usa conectores lógicos apropiados para dar cohesión a su texto.',
            'Distingue hechos de opiniones en textos periodísticos.',
            'Revisa y corrige su texto según criterios de coherencia, cohesión y ortografía.'
          ],
          ser: [
            'Argumenta sus puntos de vista con respeto por las posiciones de los demás.',
            'Acepta con apertura las correcciones y sugerencias de sus compañeros y docente.',
            'Muestra responsabilidad en la entrega de borradores y versiones finales.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Producción', 'Comprensión', 'Ética']
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
          'Comprendo y utilizo de manera crítica los medios de comunicación masiva para consultar, procesar y divulgar información',
          'Analizo el uso del lenguaje en la publicidad y en otros discursos de los medios masivos'
        ],

        diagnostico: 'El 51% de los estudiantes no distingue entre información y opinión en los medios, ni reconoce las estrategias de persuasión utilizadas en la publicidad.',

        competenciaCiudadana: 'Desarrolla pensamiento crítico frente a los mensajes de los medios de comunicación, reconociendo su responsabilidad como consumidor y productor de información.',

        competenciasICFES: {
          identificar: 'Identifica la intención comunicativa y el propósito del autor en textos periodísticos y publicitarios de complejidad media.',
          comprender: 'Analiza las estrategias argumentativas y persuasivas utilizadas en discursos mediáticos (publicidad, editorial, noticia).',
          reflexionar: 'Asume una posición crítica frente a los mensajes de los medios, sustentada con argumentos y evidencias del texto.'
        },

        dba: 'Comprende el discurso periodístico y publicitario, identificando sus estrategias de persuasión e información.',

        preguntaProblema: '¿Cómo los medios de comunicación construyen realidades y qué herramientas críticas necesito para no ser manipulado por sus mensajes?',

        ejesTematicos: [
          'Géneros periodísticos: noticia, crónica, editorial, caricatura, reportaje',
          'Lenguaje publicitario: persuasión, slogan, imágenes y texto',
          'Lenguaje audiovisual: estructura y análisis básico',
          'Análisis crítico de medios: veracidad, fuentes y sesgo',
          'Medios digitales y redes sociales: ventajas y riesgos',
          'Producción de un texto periodístico'
        ],

        evidenciasAprendizaje: [
          'Diferencia entre noticia, crónica, editorial y reportaje por sus características formales.',
          'Analiza un anuncio publicitario identificando sus estrategias de persuasión y el público objetivo.',
          'Evalúa la veracidad de una noticia verificando fuentes y distinguiendo hechos de opiniones.',
          'Produce una noticia o crónica sobre un evento del contexto escolar siguiendo el formato periodístico.',
          'Compara el tratamiento de un mismo tema en dos medios distintos, identificando diferencias de enfoque.'
        ],

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Reflexionar y evaluar un texto',
          afirmaciones: [
            'Identifica las estrategias argumentativas que usa el autor para persuadir al lector en textos mediáticos.',
            'Distingue entre la información objetiva y la valoración subjetiva del autor en textos periodísticos.'
          ],
          evidenciasICFES: [
            'Identifica las estrategias argumentativas que usa el autor para persuadir al lector.',
            'Distingue entre la información objetiva y la valoración subjetiva del autor.',
            'Reconoce el tono del texto (irónico, crítico, informativo, persuasivo).'
          ]
        },

        aprendizajesICFES: ['lc-s9-06', 'lc-s9-08', 'lc-s9-09'],
        evidenciasICFES: ['lc-s9-06-e1', 'lc-s9-06-e2', 'lc-s9-08-e1', 'lc-s9-08-e2', 'lc-s9-08-e3', 'lc-s9-09-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Periódicos impresos y digitales (El Tiempo, El Espectador, periódicos regionales)',
          'Colección de anuncios publicitarios impresos y en video',
          'Guía de análisis crítico de medios',
          'Fragmentos de documentales sobre manipulación mediática',
          'Plantilla de producción de textos periodísticos'
        ],

        estrategiasMetodologicas: [
          'Análisis comparativo de noticias: mismo hecho en tres medios distintos con perspectivas diferentes.',
          'Deconstrucción de publicidades: identificar colores, slogan, público objetivo y estrategia de persuasión.',
          'Proyecto de periódico escolar digital: cada grupo produce una sección diferente.',
          'Debate sobre desinformación y fake news: verificación de fuentes en tiempo real.',
          'Visita virtual a una redacción periodística o invitación de un periodista al aula.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Diferencia los géneros periodísticos por sus características formales y propósitos.',
            'Reconoce las estrategias de persuasión usadas en la publicidad.',
            'Describe las diferencias entre medios impresos, audiovisuales y digitales.'
          ],
          hacer: [
            'Analiza críticamente noticias identificando fuentes, hechos y opiniones.',
            'Deconstruye un anuncio publicitario identificando las estrategias de persuasión.',
            'Produce un texto periodístico (noticia o crónica) con estructura y registro adecuados.',
            'Compara el tratamiento de un tema en dos medios distintos.'
          ],
          ser: [
            'Demuestra responsabilidad al consumir y compartir información en medios digitales.',
            'Cuestiona con argumentos los mensajes de los medios sin descalificar a sus compañeros.',
            'Valora la importancia del periodismo responsable para la democracia.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Medios', 'Comprensión', 'Ética']
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
          'Reflexiono y tomo posición frente a las situaciones que propician o dificultan la comunicación',
          'Identifico y rechazo las formas de discriminación, exclusión e imposición cultural presentes en el lenguaje',
          'Reconozco las manifestaciones de poder en el lenguaje y las cuestiono con argumentos'
        ],

        diagnostico: 'El 46% de los estudiantes desconoce la diversidad lingüística de Colombia y no reflexiona sobre el uso del lenguaje como instrumento de poder o exclusión.',

        competenciaCiudadana: 'Valora la diversidad lingüística y cultural de Colombia como patrimonio colectivo, y reflexiona sobre el uso ético y responsable del lenguaje en sus interacciones cotidianas.',

        competenciasICFES: {
          identificar: 'Reconoce variantes lingüísticas (dialectos, registros, jergas) y comprende su relación con contextos sociales y culturales específicos.',
          comprender: 'Analiza cómo el lenguaje construye identidades, perpetúa estereotipos o genera inclusión y exclusión social.',
          reflexionar: 'Evalúa situaciones comunicativas identificando usos del lenguaje que generan discriminación o favorecen la convivencia, y propone alternativas respetuosas.'
        },

        dba: 'Participa en situaciones comunicativas que requieren el uso de registros formales e informales según el contexto.',

        preguntaProblema: '¿Cómo el lenguaje puede ser un instrumento de poder, exclusión o liberación, y qué responsabilidad tenemos al comunicarnos?',

        ejesTematicos: [
          'Diversidad lingüística en Colombia: lenguas indígenas, creole, palenquero',
          'Registros lingüísticos: formal, informal, coloquial, técnico',
          'Lenguaje incluyente y no discriminatorio',
          'El lenguaje como herramienta de poder y resistencia',
          'Comunicación intercultural y respeto por la diferencia',
          'Proyecto integrador: comunicación responsable'
        ],

        evidenciasAprendizaje: [
          'Identifica las principales lenguas habladas en Colombia y reflexiona sobre su valor cultural.',
          'Distingue y usa correctamente diferentes registros lingüísticos según la situación comunicativa.',
          'Analiza textos o situaciones donde el lenguaje reproduce estereotipos o genera exclusión.',
          'Produce un texto reflexivo sobre el uso responsable del lenguaje en redes sociales y vida cotidiana.',
          'Presenta un proyecto integrador sobre comunicación responsable en su comunidad.'
        ],

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Reflexionar y evaluar un texto',
          afirmaciones: [
            'Formula una opinión sobre el contenido de textos que tratan temas de diversidad lingüística y los sustenta con evidencias.',
            'Compara su punto de vista con el del autor identificando coincidencias y divergencias sobre el uso del lenguaje.'
          ],
          evidenciasICFES: [
            'Formula una opinión sobre el contenido del texto y la sustenta con evidencias textuales.',
            'Compara su punto de vista con el del autor identificando coincidencias y divergencias.',
            'Relaciona el contenido de un texto con el contexto histórico, social o cultural en el que fue producido.'
          ]
        },

        aprendizajesICFES: ['lc-s9-09', 'lc-s9-10'],
        evidenciasICFES: ['lc-s9-09-e1', 'lc-s9-09-e2', 'lc-s9-10-e1', 'lc-s9-10-e2'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Mapa lingüístico de Colombia (MEN)',
          'Fragmentos de textos en lenguas indígenas colombianas con traducción',
          'Documentales sobre diversidad lingüística y cultural de Colombia',
          'Artículos sobre lenguaje incluyente y comunicación no discriminatoria',
          'Rúbrica del proyecto integrador de comunicación responsable'
        ],

        estrategiasMetodologicas: [
          'Exploración de la diversidad lingüística: escucha de fragmentos en lenguas indígenas y reflexión.',
          'Análisis de situaciones comunicativas: ¿cómo cambio mi forma de hablar según el contexto?',
          'Taller de lenguaje incluyente: reescribir textos evitando estereotipos de género y etnia.',
          'Debate sobre uso del lenguaje en redes sociales: responsabilidad y consecuencias.',
          'Proyecto integrador: campaña de comunicación responsable para la comunidad escolar.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Identifica la diversidad lingüística de Colombia y su importancia cultural.',
            'Define el concepto de registro lingüístico y da ejemplos de cada tipo.',
            'Explica qué es el lenguaje incluyente y por qué es relevante.'
          ],
          hacer: [
            'Adapta su registro lingüístico según la situación comunicativa dada.',
            'Analiza textos identificando usos del lenguaje que discriminan o excluyen.',
            'Produce un texto reflexivo sobre el uso ético del lenguaje.',
            'Presenta el proyecto integrador de comunicación responsable con claridad.'
          ],
          ser: [
            'Demuestra respeto por las diferencias lingüísticas y culturales de sus compañeros.',
            'Asume una actitud crítica y propositiva frente al uso del lenguaje en su entorno.',
            'Reflexiona con honestidad sobre sus propias prácticas comunicativas.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Ética', 'Comprensión', 'Producción']
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
    objetivo: 'Consolidar la lectura crítica y la producción argumentativa a través de la literatura colombiana, el análisis de textos mediáticos y la exploración semiótica, articulando lenguaje, cultura e identidad',

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
          'Leo con sentido crítico diversas manifestaciones literarias de la tradición oral colombiana',
          'Identifico las huellas del contexto histórico y cultural en los textos literarios',
          'Establezco relaciones entre los textos literarios y la realidad que representan'
        ],

        diagnostico: 'El 52% de los estudiantes no relaciona la literatura colombiana con su contexto histórico-social, ni identifica las corrientes literarias a las que pertenecen las obras.',

        competenciaCiudadana: 'Valora la literatura colombiana como expresión de la identidad nacional y como memoria colectiva de los conflictos, alegrías y esperanzas del pueblo colombiano.',

        competenciasICFES: {
          identificar: 'Identifica características de géneros y corrientes literarias colombianas (costumbrismo, realismo mágico, literatura de la violencia) en textos representativos.',
          comprender: 'Establece relaciones entre los temas de la literatura colombiana y el contexto histórico, social y cultural de su producción.',
          reflexionar: 'Evalúa el significado de obras literarias colombianas en relación con la identidad cultural y los problemas actuales del país.'
        },

        dba: 'Lee y analiza obras literarias de diferentes géneros, épocas y corrientes estéticas, estableciendo relaciones intertextuales.',

        preguntaProblema: '¿Cómo la literatura colombiana refleja y transforma la realidad histórica y cultural del país, y qué nos dice sobre nuestra identidad como nación?',

        ejesTematicos: [
          'Literatura colombiana: tradición oral, costumbrismo y modernismo',
          'Novela colombiana: María, La vorágine, El coronel no tiene quien le escriba',
          'Cuento colombiano: Tomás González, Marvel Moreno, Óscar Collazos',
          'Poesía colombiana: José Asunción Silva, León de Greiff, Raúl Gómez Jattin',
          'Contexto histórico-literario: violencia, Boom latinoamericano, realismo mágico',
          'Intertextualidad y tradición literaria'
        ],

        evidenciasAprendizaje: [
          'Ubica obras de la literatura colombiana en su corriente literaria y contexto histórico correspondiente.',
          'Analiza un fragmento de novela o cuento colombiano identificando temas, personajes y relación con el contexto histórico.',
          'Establece relaciones intertextuales entre al menos dos obras colombianas de épocas diferentes.',
          'Escribe una reseña crítica de una obra colombiana leída, argumentando su valor literario.',
          'Recita o lee un poema colombiano, explicando su contexto y recursos literarios.'
        ],

        matrizReferencia: {
          componente: 'Semántico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Relaciona información de diferentes párrafos o fragmentos para construir una interpretación global de la obra literaria.',
            'Compara la perspectiva de dos o más textos sobre un mismo tema de la realidad colombiana.'
          ],
          evidenciasICFES: [
            'Relaciona información de diferentes párrafos para construir una interpretación global.',
            'Compara la perspectiva de dos o más textos sobre un mismo tema.',
            'Relaciona el contenido de un texto con el contexto histórico, social o cultural en el que fue producido.'
          ]
        },

        aprendizajesICFES: ['lc-s9-02', 'lc-s9-03', 'lc-s9-10'],
        evidenciasICFES: ['lc-s9-02-e1', 'lc-s9-02-e2', 'lc-s9-03-e1', 'lc-s9-10-e1', 'lc-s9-10-e2'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Selección de capítulos de El coronel no tiene quien le escriba (García Márquez)',
          'Cuentos de Tomás González y Marvel Moreno',
          'Antología de poesía colombiana del siglo XX',
          'Línea de tiempo de la literatura colombiana',
          'Documentales sobre el Boom latinoamericano'
        ],

        estrategiasMetodologicas: [
          'Lectura guiada de novela colombiana con diario de lectura reflexivo.',
          'Análisis de personajes: relación entre su psicología y el contexto histórico colombiano.',
          'Proyección y análisis de adaptaciones cinematográficas de obras colombianas.',
          'Tertulia literaria: discusión libre sobre temas de las obras y su vigencia actual.',
          'Escritura de reseña crítica con estructura guiada: presentación, análisis, valoración.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Ubica obras colombianas en su contexto histórico y corriente literaria.',
            'Define las características del realismo mágico y el costumbrismo colombiano.',
            'Enuncia autores representativos de la literatura colombiana y sus obras principales.'
          ],
          hacer: [
            'Analiza fragmentos de novela o cuento colombiano con base en elementos narrativos y contexto.',
            'Escribe una reseña crítica argumentada de una obra colombiana leída.',
            'Establece relaciones intertextuales entre obras de diferentes épocas de la literatura colombiana.',
            'Expone oralmente sobre un autor o corriente de la literatura colombiana.'
          ],
          ser: [
            'Demuestra interés genuino por la literatura colombiana como patrimonio cultural.',
            'Respeta las interpretaciones distintas de sus compañeros durante las tertulias.',
            'Valora la lectura como herramienta de comprensión de la realidad nacional.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Literatura', 'Comprensión', 'Producción']
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
          'Comprendo e interpreto textos con actitud crítica y capacidad argumentativa',
          'Evalúo críticamente los argumentos y posturas expresadas en los textos que leo',
          'Reconozco y analizo las estrategias argumentativas utilizadas en un texto'
        ],

        diagnostico: 'El 55% de los estudiantes no realiza inferencias sobre el punto de vista del autor ni distingue la argumentación sólida de la basada en falacias o generalizaciones.',

        competenciaCiudadana: 'Desarrolla la habilidad de leer críticamente textos de diversa índole para tomar decisiones informadas y participar como ciudadano activo en la sociedad.',

        competenciasICFES: {
          identificar: 'Identifica el punto de vista del autor, sus premisas y la conclusión a la que llega en textos argumentativos de complejidad media-alta.',
          comprender: 'Analiza la estructura argumentativa de textos académicos y periodísticos, evaluando la solidez de los argumentos presentados.',
          reflexionar: 'Asume una posición crítica fundamentada frente a textos argumentativos, identificando supuestos, implicaciones y posibles falacias.'
        },

        dba: 'Produce textos escritos argumentativos (ensayo, reseña crítica) con postura propia, argumentos sólidos y manejo de fuentes.',

        preguntaProblema: '¿Cómo leer entre líneas para descubrir las intenciones, supuestos y sesgos del autor de un texto argumentativo?',

        ejesTematicos: [
          'Lectura crítica: niveles literal, inferencial y crítico',
          'El punto de vista del autor y la intención comunicativa',
          'Tipos de argumentos y falacias comunes',
          'Análisis de textos filosóficos y académicos sencillos',
          'Inferencia y presuposición en el texto',
          'Reseña crítica: escritura y estructura'
        ],

        evidenciasAprendizaje: [
          'Infiere la posición del autor en textos argumentativos que no la expresan explícitamente.',
          'Identifica al menos dos tipos de falacias en textos o discursos dados.',
          'Analiza el nivel literal, inferencial y crítico de un texto dado.',
          'Escribe una reseña crítica de un texto académico o periodístico con postura propia y argumentos.',
          'Compara el punto de vista de dos textos sobre un mismo tema, identificando coincidencias y diferencias.'
        ],

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Reflexionar y evaluar un texto',
          afirmaciones: [
            'Asume una posición crítica frente a lo leído y la sustenta con argumentos del texto y conocimiento previo.',
            'Identifica las estrategias argumentativas que usa el autor para persuadir al lector.'
          ],
          evidenciasICFES: [
            'Formula una opinión sobre el contenido del texto y la sustenta con evidencias textuales.',
            'Compara su punto de vista con el del autor identificando coincidencias y divergencias.',
            'Compara la perspectiva de dos o más textos sobre un mismo tema.'
          ]
        },

        aprendizajesICFES: ['lc-s9-01', 'lc-s9-08', 'lc-s9-09', 'lc-s9-10'],
        evidenciasICFES: ['lc-s9-01-e2', 'lc-s9-01-e3', 'lc-s9-08-e1', 'lc-s9-08-e3', 'lc-s9-09-e1', 'lc-s9-09-e2', 'lc-s9-10-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Selección de textos académicos y filosóficos adaptados para el grado',
          'Artículos de opinión de columnistas colombianos (Semana, El Espectador)',
          'Guía de identificación de falacias argumentativas con ejemplos',
          'Plantilla de reseña crítica',
          'Textos con puntos de vista contrastantes sobre temas de actualidad'
        ],

        estrategiasMetodologicas: [
          'Análisis de textos en tres niveles: literal (qué dice), inferencial (qué implica), crítico (cómo lo evalúo).',
          'Identificación de falacias en discursos políticos y publicitarios reales.',
          'Debate socrático: preguntas que profundizan en los supuestos de los textos leídos.',
          'Escritura por etapas de la reseña crítica: paráfrasis, análisis, valoración.',
          'Comparación de textos opuestos sobre el mismo tema para identificar sesgos.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define los tres niveles de lectura (literal, inferencial, crítico) y los diferencia con ejemplos.',
            'Identifica falacias argumentativas comunes (generalización, apelación a la autoridad, ad hominem).',
            'Explica qué es el punto de vista del autor y cómo se manifiesta en el texto.'
          ],
          hacer: [
            'Aplica los tres niveles de lectura a textos argumentativos dados.',
            'Identifica falacias en textos o discursos reales.',
            'Escribe una reseña crítica argumentada sobre un texto académico o periodístico.',
            'Compara y contrasta los puntos de vista de dos textos sobre un mismo tema.'
          ],
          ser: [
            'Mantiene una actitud crítica y reflexiva frente a los textos que lee, sin descalificar a sus compañeros.',
            'Fundamenta sus opiniones con evidencias del texto y no solo con creencias personales.',
            'Valora la lectura crítica como herramienta de emancipación intelectual.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Comprensión', 'Producción', 'Ética']
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
          'Produzco textos escritos argumentativos (ensayo, reseña crítica) con postura propia, argumentos sólidos y manejo de fuentes',
          'Comprendo y analizo textos académicos y científicos, usando estrategias de lectura crítica'
        ],

        diagnostico: 'El 48% de los estudiantes no sabe citar fuentes correctamente ni distingue entre paráfrasis, cita directa e idea propia en un texto académico.',

        competenciaCiudadana: 'Reconoce la importancia de la honestidad intelectual y el respeto a la autoría en la producción de textos académicos, valores fundamentales para la vida universitaria y ciudadana.',

        competenciasICFES: {
          identificar: 'Identifica las marcas del discurso académico (citaciones, referencias, lenguaje técnico, registro formal) en textos especializados.',
          comprender: 'Comprende la estructura de la crónica y la reseña crítica, y analiza cómo cada parte contribuye al sentido global del texto.',
          reflexionar: 'Evalúa la pertinencia y calidad de las fuentes utilizadas en un texto académico y formula argumentos propios a partir de ellas.'
        },

        dba: 'Comprende y analiza textos académicos y científicos, usando estrategias de lectura crítica.',

        preguntaProblema: '¿Cómo escribir textos académicos que integren fuentes externas de manera honesta, organizando las ideas propias y ajenas con claridad y rigor?',

        ejesTematicos: [
          'Reseña crítica: estructura, propósito y redacción',
          'Crónica literaria y periodística',
          'Cita directa, paráfrasis y referencia bibliográfica básica',
          'Escritura creativa: cuento, microficción',
          'El proceso de escritura: planeación, redacción, revisión',
          'Lectura de textos académicos adaptados'
        ],

        evidenciasAprendizaje: [
          'Produce una reseña crítica con presentación del texto, análisis y valoración argumentada.',
          'Escribe una crónica sobre un evento real del contexto escolar o comunitario.',
          'Usa correctamente la cita directa y la paráfrasis en un texto académico corto.',
          'Elabora la referencia bibliográfica de al menos tres fuentes consultadas.',
          'Escribe un cuento o microficción aplicando recursos literarios aprendidos en el año.'
        ],

        matrizReferencia: {
          componente: 'Sintáctico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Identifica las variantes dentro de una tipología textual (crónica, editorial, ensayo, reseña).',
            'Reconoce las marcas del discurso académico en textos especializados.'
          ],
          evidenciasICFES: [
            'Diferencia entre textos narrativos, expositivos, argumentativos, descriptivos e instructivos por sus rasgos formales.',
            'Identifica variantes dentro de una tipología (crónica, editorial, ensayo, reseña).',
            'Identifica marcas del discurso académico (citaciones, referencias, lenguaje técnico, registro formal).'
          ]
        },

        aprendizajesICFES: ['lc-s9-06', 'lc-s9-07'],
        evidenciasICFES: ['lc-s9-06-e1', 'lc-s9-06-e2', 'lc-s9-07-e1', 'lc-s9-07-e2'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Reseñas críticas de obras literarias y libros académicos como modelos',
          'Crónicas de Tomás González, Piedad Bonnett y cronistas colombianos',
          'Guía de citación básica (estilo APA adaptado para bachillerato)',
          'Antología de microficción latinoamericana',
          'Rúbricas de evaluación de reseña y crónica'
        ],

        estrategiasMetodologicas: [
          'Análisis y deconstrucción de reseñas modelo antes de producir la propia.',
          'Taller de escritura creativa: microficción con restricciones formales (150 palabras).',
          'Práctica de citación: parafrasear y citar párrafos de textos académicos dados.',
          'Proceso de escritura en etapas: borrador 1, revisión entre pares, versión final.',
          'Portfolio de escritura: cada estudiante colecciona sus producciones del periodo.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define la reseña crítica y la crónica, e identifica sus características formales.',
            'Explica la diferencia entre cita directa, paráfrasis e idea propia.',
            'Enuncia los elementos de una referencia bibliográfica básica.'
          ],
          hacer: [
            'Produce una reseña crítica argumentada siguiendo la estructura trabajada.',
            'Escribe una crónica con estructura periodística y registro apropiado.',
            'Usa correctamente la cita directa y la paráfrasis en sus textos académicos.',
            'Elabora referencias bibliográficas de las fuentes consultadas.'
          ],
          ser: [
            'Asume la honestidad intelectual en el uso de fuentes, evitando el plagio.',
            'Acepta las correcciones de sus pares con actitud receptiva y madura.',
            'Demuestra constancia en el proceso de escritura: borradores, revisión y versión final.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Producción', 'Comprensión', 'Literatura']
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
          'Reconoce y analiza las características del discurso político y publicitario, identificando sus estrategias de persuasión',
          'Reflexiona sobre el uso del lenguaje como medio de construcción de identidad, cultura y poder'
        ],

        diagnostico: 'El 50% de los estudiantes no comprende la dimensión semiótica de la comunicación ni reconoce que los signos, imágenes y gestos construyen significados en contextos culturales específicos.',

        competenciaCiudadana: 'Desarrolla conciencia semiótica para comprender cómo los sistemas de signos — lingüísticos y no lingüísticos — construyen realidades culturales y ejercen poder simbólico.',

        competenciasICFES: {
          identificar: 'Identifica la función y el significado de signos, símbolos e imágenes en textos multimodales y en prácticas comunicativas del entorno digital.',
          comprender: 'Analiza cómo distintos sistemas simbólicos (lingüístico, visual, sonoro, gestual) interactúan para construir el sentido en textos multimodales.',
          reflexionar: 'Evalúa críticamente cómo el lenguaje digital y las redes sociales construyen identidades y transforman las prácticas comunicativas contemporáneas.'
        },

        dba: 'Reconoce y analiza las características del discurso político y publicitario, identificando sus estrategias de persuasión.',

        preguntaProblema: '¿Cómo los signos, símbolos y sistemas de comunicación no verbal construyen significados y moldean nuestra identidad cultural en la era digital?',

        ejesTematicos: [
          'Semiótica básica: signo, significante, significado (Saussure)',
          'Comunicación no verbal: gestos, proxémica, kinésica',
          'Textos multimodales: imagen, texto, sonido y movimiento',
          'Lenguaje digital: emoticones, memes, hipertexto, hashtag',
          'Identidad y lenguaje en redes sociales',
          'Proyecto integrador: análisis semiótico de un texto multimodal'
        ],

        evidenciasAprendizaje: [
          'Explica los conceptos de signo, significante y significado con ejemplos de su entorno.',
          'Analiza un texto multimodal (afiche, meme, video) identificando los sistemas simbólicos que lo componen.',
          'Describe cómo la comunicación no verbal complementa o contradice el mensaje verbal.',
          'Reflexiona sobre el uso del lenguaje digital y su impacto en la identidad y las relaciones.',
          'Presenta un análisis semiótico de un texto multimodal elegido por el estudiante.'
        ],

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Reflexionar y evaluar un texto',
          afirmaciones: [
            'Relaciona el contenido de un texto con el contexto histórico, social o cultural en el que fue producido.',
            'Reconoce los presupuestos ideológicos o culturales que subyacen a un texto multimodal.'
          ],
          evidenciasICFES: [
            'Relaciona el contenido de un texto con el contexto histórico, social o cultural.',
            'Compara la perspectiva de dos o más textos sobre un mismo tema.',
            'Reconoce el tono del texto (irónico, crítico, informativo, persuasivo).'
          ]
        },

        aprendizajesICFES: ['lc-s9-08', 'lc-s9-09', 'lc-s9-10'],
        evidenciasICFES: ['lc-s9-08-e1', 'lc-s9-08-e3', 'lc-s9-09-e1', 'lc-s9-09-e2', 'lc-s9-10-e2'],
        nivelEsperado: 'Avanzado',

        materialesEducativos: [
          'Introducción a la semiótica: texto adaptado para bachillerato',
          'Colección de textos multimodales (afiches, infografías, publicidades, memes)',
          'Fragmentos de videos publicitarios y videos de redes sociales para análisis',
          'Artículos sobre comunicación no verbal y lenguaje corporal',
          'Guía del proyecto integrador de análisis semiótico'
        ],

        estrategiasMetodologicas: [
          'Introducción a la semiótica con ejemplos del cotidiano: logos, señales de tránsito, banderas.',
          'Análisis de publicidades: identificar sistemas simbólicos y su efecto de sentido.',
          'Taller de comunicación no verbal: actuación y análisis de escenas sin palabras.',
          'Análisis crítico de memes: contexto, intertextualidad y propósito.',
          'Proyecto integrador: cada grupo elige un texto multimodal y presenta su análisis semiótico.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define signo, significante y significado con ejemplos del entorno cotidiano.',
            'Explica las diferencias entre comunicación verbal y no verbal.',
            'Describe las características del lenguaje digital y los textos multimodales.'
          ],
          hacer: [
            'Analiza un texto multimodal identificando los sistemas simbólicos presentes.',
            'Describe y evalúa el uso de la comunicación no verbal en situaciones dadas.',
            'Reflexiona por escrito sobre el impacto del lenguaje digital en la identidad.',
            'Presenta el proyecto de análisis semiótico con claridad y argumentación.'
          ],
          ser: [
            'Muestra apertura intelectual ante nuevas formas de comprender la comunicación.',
            'Participa con respeto y curiosidad en los análisis y debates del periodo.',
            'Reflexiona con honestidad sobre sus propios usos del lenguaje digital.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Medios', 'Comprensión', 'Ética']
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
    objetivo: 'Desarrollar competencias de lectura crítica avanzada y producción textual académica a través de la literatura universal, el análisis lingüístico y la comprensión de la comunicación como práctica social y cultural',

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
          'Leo con sentido crítico obras literarias de autores colombianos, latinoamericanos y universales',
          'Identifico las características de los principales movimientos literarios y los relaciono con sus contextos históricos y culturales',
          'Interpreto el simbolismo, la ironía y otros recursos literarios en función de la producción de sentido'
        ],

        diagnostico: 'El 56% de los estudiantes no relaciona los movimientos literarios universales (Renacimiento, Barroco, Romanticismo) con sus contextos históricos ni identifica sus características formales en textos concretos.',

        competenciaCiudadana: 'Comprende la literatura universal como expresión de las grandes preguntas de la humanidad — el amor, la muerte, la justicia, la libertad — y reflexiona sobre su vigencia en el mundo actual.',

        competenciasICFES: {
          identificar: 'Identifica características estilísticas y temáticas de los grandes movimientos literarios (Renacimiento, Barroco, Ilustración, Romanticismo) en textos representativos.',
          comprender: 'Establece relaciones entre la literatura universal y su contexto histórico-cultural, analizando cómo cada época genera formas literarias específicas.',
          reflexionar: 'Evalúa la vigencia de obras literarias universales en relación con los problemas contemporáneos, construyendo interpretaciones sustentadas.'
        },

        dba: 'Lee obras literarias canónicas y contemporáneas de literatura universal, relacionándolas con su contexto de producción y recepción.',

        preguntaProblema: '¿Cómo la literatura universal es un espejo de los grandes dilemas de cada época histórica y qué nos enseña sobre nuestra propia condición humana?',

        ejesTematicos: [
          'Renacimiento: humanismo, Cervantes, Shakespeare',
          'Barroco: Quevedo, Góngora, Sor Juana Inés de la Cruz',
          'Ilustración y Neoclasicismo: Voltaire, Rousseau',
          'Romanticismo: características, Víctor Hugo, Mary Shelley, Gustavo Adolfo Bécquer',
          'Realismo y Naturalismo: Tolstoi, Flaubert, Balzac',
          'Contexto histórico de cada movimiento: Renacimiento, Reforma, Ilustración, Revolución Industrial'
        ],

        evidenciasAprendizaje: [
          'Ubica en línea de tiempo los principales movimientos literarios universales con sus fechas y características.',
          'Analiza un fragmento de obra renacentista o barroca identificando características del movimiento.',
          'Compara el tratamiento del amor romántico en poemas de dos movimientos diferentes.',
          'Escribe un ensayo analítico sobre una obra del Romanticismo relacionándola con su contexto histórico.',
          'Expone oralmente sobre un autor universal, situando su obra en el movimiento correspondiente.'
        ],

        matrizReferencia: {
          componente: 'Semántico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Sintetiza el contenido de un texto complejo identificando las ideas principales y sus relaciones.',
            'Relaciona el contenido de un texto con el contexto histórico y cultural de su producción.'
          ],
          evidenciasICFES: [
            'Sintetiza el contenido de un texto complejo identificando las ideas principales y sus relaciones.',
            'Relaciona el contenido de un texto con el contexto histórico y cultural de su producción.',
            'Reconoce cómo un texto alude, cita o transforma ideas de otros textos.'
          ]
        },

        aprendizajesICFES: ['lc-s11-01', 'lc-s11-02', 'lc-s11-09'],
        evidenciasICFES: ['lc-s11-01-e1', 'lc-s11-01-e2', 'lc-s11-02-e1', 'lc-s11-02-e2', 'lc-s11-09-e1'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Antología de textos de la literatura universal por movimientos (adaptada para bachillerato)',
          'Fragmentos de El Quijote, Hamlet, Madame Bovary, Frankenstein',
          'Línea de tiempo de la historia literaria universal',
          'Documentales sobre los grandes movimientos literarios',
          'Guía de análisis de obras por movimiento literario'
        ],

        estrategiasMetodologicas: [
          'Lectura por movimientos: un texto representativo de cada época con análisis guiado.',
          'Galería literaria: cada grupo monta una exposición sobre un movimiento literario.',
          'Análisis comparativo: cómo trata el tema del amor el Renacimiento vs el Romanticismo.',
          'Lectura de fragmentos adaptados de obras canónicas con preguntas de comprensión crítica.',
          'Escritura de ensayo analítico con estructura introducción-desarrollo-conclusión.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Ubica los principales movimientos literarios en su contexto histórico.',
            'Describe las características formales y temáticas de al menos cuatro movimientos literarios.',
            'Identifica autores representativos de cada movimiento con sus obras principales.'
          ],
          hacer: [
            'Analiza fragmentos de obras universales identificando características del movimiento al que pertenecen.',
            'Escribe un ensayo analítico sobre una obra universal relacionándola con su contexto histórico.',
            'Compara el tratamiento de un tema en dos movimientos literarios diferentes.',
            'Expone oralmente sobre un autor o movimiento literario universal.'
          ],
          ser: [
            'Muestra apertura y curiosidad intelectual ante la literatura de otras culturas y épocas.',
            'Valora la diversidad de las expresiones literarias como riqueza de la humanidad.',
            'Asume con responsabilidad las lecturas asignadas para el análisis y el debate.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Literatura', 'Comprensión', 'Producción']
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
          'Comprendo e interpreto textos con actitud crítica y capacidad argumentativa, reconociendo los múltiples sentidos que puede tener un texto',
          'Produzco ensayos de carácter argumentativo en los que planteo tesis y las desarrollo con argumentos de diversa índole'
        ],

        diagnostico: 'El 53% de los estudiantes no distingue entre afirmaciones verificables y valoraciones subjetivas en textos filosóficos y académicos, ni produce ensayos con argumentación variada y sólida.',

        competenciaCiudadana: 'Desarrolla el pensamiento argumentativo como herramienta para participar en debates académicos y tomar decisiones fundamentadas en evidencias verificables.',

        competenciasICFES: {
          identificar: 'Distingue entre afirmaciones verificables empíricamente y valoraciones subjetivas en textos filosóficos, científicos y académicos.',
          comprender: 'Analiza estrategias discursivas de textos argumentativos complejos: ejemplificación, analogía, contraargumentación, apelación a la autoridad.',
          reflexionar: 'Evalúa la validez de los argumentos del autor usando evidencia del texto y conocimiento externo, formulando contraargumentos razonados.'
        },

        dba: 'Produce textos argumentativos complejos (ensayo académico) con estructura, argumentación sólida y fuentes citadas.',

        preguntaProblema: '¿Cómo distinguir un argumento sólido de uno débil o falaz, y cómo construir un ensayo académico que defienda una tesis con rigor intelectual?',

        ejesTematicos: [
          'Textos filosóficos: características y estrategias de lectura',
          'Ensayo académico: estructura, tesis y tipos de argumentos',
          'Afirmaciones verificables vs valoraciones subjetivas',
          'Estrategias retóricas: ejemplificación, analogía, contraargumentación',
          'Cita y paráfrasis: manejo de fuentes académicas',
          'Normas ortográficas y gramaticales avanzadas'
        ],

        evidenciasAprendizaje: [
          'Distingue afirmaciones empíricas de valoraciones subjetivas en textos filosóficos y científicos.',
          'Identifica estrategias retóricas (analogía, contraargumentación, apelación a la autoridad) en ensayos académicos.',
          'Produce un ensayo académico con tesis clara, argumentos de tres tipos diferentes y conclusión.',
          'Cita correctamente fuentes académicas usando normas básicas (APA o MLA).',
          'Evalúa un argumento ajeno identificando posibles falacias o debilidades.'
        ],

        matrizReferencia: {
          componente: 'Sintáctico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Analiza las estrategias discursivas de textos argumentativos de alta complejidad.',
            'Diferencia entre afirmaciones verificables empíricamente y valoraciones subjetivas.'
          ],
          evidenciasICFES: [
            'Identifica falacias argumentativas, generalizaciones indebidas y razonamientos circulares.',
            'Reconoce las estrategias retóricas del autor (ejemplificación, analogía, contraargumentación, apelación a la autoridad).',
            'Diferencia entre afirmaciones verificables empíricamente y valoraciones subjetivas.'
          ]
        },

        aprendizajesICFES: ['lc-s11-04', 'lc-s11-05', 'lc-s11-06'],
        evidenciasICFES: ['lc-s11-04-e1', 'lc-s11-04-e2', 'lc-s11-05-e1', 'lc-s11-05-e2', 'lc-s11-06-e1', 'lc-s11-06-e2'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Fragmentos filosóficos adaptados (Descartes, Platón, Simone de Beauvoir)',
          'Ensayos académicos modelos de diversas disciplinas',
          'Guía de identificación de estrategias retóricas y falacias',
          'Manual básico de citación académica (APA adaptado)',
          'Rúbrica de evaluación del ensayo académico'
        ],

        estrategiasMetodologicas: [
          'Lectura analítica de textos filosóficos: separar premisas de conclusiones.',
          'Taller de identificación de estrategias retóricas en ensayos modelo.',
          'Escritura progresiva del ensayo: tesis + esquema argumentativo → borradores → versión final.',
          'Análisis de falacias: debate sobre argumentos falaces encontrados en la prensa.',
          'Revisión entre pares del ensayo con rúbrica detallada.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define ensayo académico y describe sus componentes estructurales.',
            'Explica la diferencia entre afirmaciones verificables y valoraciones subjetivas.',
            'Identifica y define al menos cuatro estrategias retóricas argumentativas.'
          ],
          hacer: [
            'Produce un ensayo académico con tesis, argumentos variados y conclusión.',
            'Cita fuentes académicas correctamente en su ensayo.',
            'Analiza textos filosóficos distinguiendo premisas, argumentos y conclusiones.',
            'Evalúa argumentos de textos dados identificando debilidades o falacias.'
          ],
          ser: [
            'Demuestra rigor intelectual en la fundamentación de sus posturas.',
            'Respeta las posiciones filosóficas y académicas distintas a las propias.',
            'Asume con honestidad el uso correcto de fuentes, evitando el plagio.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Comprensión', 'Producción', 'Ética']
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
          'Reflexiono sobre la historia de la lengua española y su diversidad dialectal y sociolingüística',
          'Comprendo y produzco textos propios de ámbitos académicos y profesionales (informes, reseñas, ponencias breves)'
        ],

        diagnostico: 'El 50% de los estudiantes desconoce los conceptos básicos de lingüística (sintaxis, semántica, pragmática) y no los aplica para reflexionar sobre su propia competencia comunicativa.',

        competenciaCiudadana: 'Valora la diversidad dialectal del español como riqueza cultural y comprende que todas las variedades lingüísticas son igualmente válidas como sistemas de comunicación.',

        competenciasICFES: {
          identificar: 'Identifica marcas del discurso académico y profesional (terminología técnica, registro formal, organización lógica) en textos especializados.',
          comprender: 'Analiza la función pragmática de enunciados en contextos comunicativos específicos, reconociendo cómo el contexto determina el significado.',
          reflexionar: 'Reflexiona sobre la diversidad lingüística del español y evalúa el impacto de las variaciones dialectales y sociolectales en la comunicación.'
        },

        dba: 'Reflexiona sobre la historia de la lengua española y su diversidad dialectal y sociolingüística.',

        preguntaProblema: '¿Cómo el conocimiento de la estructura y diversidad de la lengua me permite comunicarme con mayor precisión y valorar la riqueza lingüística de nuestra cultura?',

        ejesTematicos: [
          'Lingüística: niveles de análisis (fonológico, morfológico, sintáctico, semántico, pragmático)',
          'Sintaxis: estructura oracional, tipos de oraciones',
          'Semántica: campo semántico, polisemia, sinonimia, antonimia, hiponimia',
          'Pragmática: actos de habla, implicaturas, contexto comunicativo',
          'Variaciones dialectales del español: Colombia y el mundo hispanohablante',
          'Sociolingüística: registros, diglosia, contacto de lenguas'
        ],

        evidenciasAprendizaje: [
          'Analiza oraciones identificando su estructura sintáctica básica (sujeto, predicado, complementos).',
          'Clasifica palabras por campo semántico e identifica relaciones de sinonimia, antonimia e hiperonimia.',
          'Explica el concepto de implicatura con ejemplos de conversaciones cotidianas.',
          'Describe diferencias entre el español de Colombia y el de otras regiones hispanohablantes.',
          'Produce un informe académico breve aplicando la terminología lingüística trabajada.'
        ],

        matrizReferencia: {
          componente: 'Sintáctico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Identifica marcas del discurso académico (citaciones, referencias, lenguaje técnico, registro formal).',
            'Evalúa la organización de un texto y la progresión temática.'
          ],
          evidenciasICFES: [
            'Identifica marcas del discurso académico (citaciones, referencias, lenguaje técnico, registro formal).',
            'Diferencia entre afirmaciones verificables empíricamente y valoraciones subjetivas.',
            'Evalúa la organización de un texto y la progresión temática.'
          ]
        },

        aprendizajesICFES: ['lc-s11-02', 'lc-s11-04', 'lc-s11-06'],
        evidenciasICFES: ['lc-s11-02-e1', 'lc-s11-02-e2', 'lc-s11-04-e2', 'lc-s11-04-e3', 'lc-s11-06-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Introducción a la lingüística: texto adaptado para bachillerato',
          'Atlas lingüístico de Colombia (fragmentos)',
          'Artículos sobre diversidad dialectal del español',
          'Guía de análisis sintáctico y semántico',
          'Audios y videos de variedades del español latinoamericano'
        ],

        estrategiasMetodologicas: [
          'Análisis lingüístico de canciones, refranes y conversaciones cotidianas.',
          'Comparación de textos en distintos dialectos del español: ¿qué cambia y qué permanece?',
          'Taller de pragmática: interpretar actos de habla en situaciones reales.',
          'Informe académico sobre una variación dialectal investigada por el estudiante.',
          'Juego de roles: comunicación formal vs informal en diferentes contextos.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define los niveles de análisis lingüístico (fonológico, morfológico, sintáctico, semántico, pragmático).',
            'Explica los conceptos de sinonimia, antonimia, polisemia e hiperonimia con ejemplos.',
            'Describe las principales variaciones dialectales del español en Colombia y América Latina.'
          ],
          hacer: [
            'Analiza la estructura sintáctica de oraciones complejas.',
            'Identifica relaciones semánticas entre palabras en textos dados.',
            'Explica actos de habla e implicaturas en situaciones comunicativas reales.',
            'Produce un informe académico aplicando terminología lingüística.'
          ],
          ser: [
            'Valora todas las variedades dialectales del español como expresiones legítimas de la diversidad cultural.',
            'Muestra curiosidad intelectual por la estructura de la lengua que usa cotidianamente.',
            'Reflexiona críticamente sobre sus propias prácticas comunicativas.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Comprensión', 'Producción', 'Medios']
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
          'Comprendo y produzco con sentido crítico textos propios de los medios de comunicación masiva para establecer posturas frente a ellos',
          'Reconozco la función del lenguaje en la construcción y transformación de las relaciones de poder',
          'Asumo una posición crítica frente al uso que los medios de comunicación hacen del lenguaje y de las representaciones sociales'
        ],

        diagnostico: 'El 47% de los estudiantes no analiza el lenguaje del discurso político como estrategia de persuasión ni reflexiona sobre la construcción de representaciones sociales en los medios.',

        competenciaCiudadana: 'Comprende que el lenguaje de los medios y la política no es neutral, y desarrolla herramientas críticas para detectar propaganda, manipulación e ideología en los discursos públicos.',

        competenciasICFES: {
          identificar: 'Identifica mecanismos de construcción y transmisión de la información en discursos políticos y mediáticos, reconociendo su intencionalidad ideológica.',
          comprender: 'Analiza el rol de los medios de comunicación en la producción y difusión de representaciones sociales, estereotipos e identidades culturales.',
          reflexionar: 'Evalúa el uso del lenguaje en el discurso político y los medios digitales, asumiendo una postura crítica fundamentada en argumentos.'
        },

        dba: 'Analiza el lenguaje de los medios de comunicación y las nuevas tecnologías como prácticas sociales y culturales.',

        preguntaProblema: '¿Cómo el discurso político y los medios de comunicación construyen versiones de la realidad que moldean nuestra percepción del mundo y nuestras decisiones?',

        ejesTematicos: [
          'Discurso político: características, retórica y estrategias de persuasión',
          'Propaganda: historia y técnicas contemporáneas',
          'Ética en los medios digitales: desinformación, bulos y verificación',
          'Representaciones sociales en los medios: género, etnia, clase',
          'Análisis crítico del discurso (ACD): conceptos básicos',
          'Proyecto integrador: análisis de un discurso político o mediático'
        ],

        evidenciasAprendizaje: [
          'Analiza un discurso político identificando estrategias retóricas y mecanismos de persuasión.',
          'Identifica representaciones sociales (de género, etnia, clase) en medios de comunicación masiva.',
          'Evalúa la veracidad de una noticia viral aplicando herramientas de verificación de fuentes.',
          'Reflexiona por escrito sobre la responsabilidad ética en la producción y difusión de contenidos digitales.',
          'Presenta el proyecto integrador: análisis crítico de un discurso político o mediático contemporáneo.'
        ],

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Reflexionar y evaluar un texto',
          afirmaciones: [
            'Contextualiza textos en su marco social, histórico, cultural e ideológico.',
            'Reconoce los presupuestos ideológicos o culturales que subyacen a un texto.'
          ],
          evidenciasICFES: [
            'Relaciona el contenido de un texto con el contexto histórico y cultural de su producción.',
            'Reconoce los presupuestos ideológicos o culturales que subyacen a un texto.',
            'Evalúa la validez de los argumentos del autor usando evidencia del texto y conocimiento externo.'
          ]
        },

        aprendizajesICFES: ['lc-s11-07', 'lc-s11-08', 'lc-s11-09'],
        evidenciasICFES: ['lc-s11-07-e1', 'lc-s11-07-e2', 'lc-s11-08-e1', 'lc-s11-08-e2', 'lc-s11-09-e1', 'lc-s11-09-e2'],
        nivelEsperado: 'Avanzado',

        materialesEducativos: [
          'Selección de discursos políticos colombianos e internacionales (texto y audio)',
          'Artículos sobre propaganda y desinformación contemporánea',
          'Guía de verificación de fuentes y fact-checking',
          'Análisis de portadas de medios sobre el mismo evento para comparar encuadres',
          'Rúbrica del proyecto integrador de análisis del discurso'
        ],

        estrategiasMetodologicas: [
          'Análisis de discursos históricos y contemporáneos: detectar estrategias retóricas y de persuasión.',
          'Ejercicio de fact-checking: verificar noticias virales con herramientas digitales.',
          'Análisis de portadas de prensa: cómo el encuadre (framing) construye la noticia.',
          'Debate sobre ética en los medios digitales: responsabilidad individual y colectiva.',
          'Proyecto integrador: cada grupo elige un discurso político o mediático y lo analiza críticamente.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Describe las principales estrategias retóricas del discurso político.',
            'Explica qué son las representaciones sociales y cómo las construyen los medios.',
            'Define los conceptos básicos del análisis crítico del discurso.'
          ],
          hacer: [
            'Analiza críticamente un discurso político identificando estrategias de persuasión e ideología.',
            'Evalúa la veracidad de una noticia aplicando herramientas de verificación.',
            'Identifica representaciones estereotipadas en textos mediáticos.',
            'Presenta el proyecto de análisis del discurso con argumentos sólidos y evidencias.'
          ],
          ser: [
            'Asume una postura crítica y reflexiva frente a los medios, sin caer en el escepticismo radical.',
            'Demuestra responsabilidad ética en el consumo y difusión de información.',
            'Respeta las distintas interpretaciones de sus compañeros durante los debates.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Medios', 'Ética', 'Comprensión']
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
    objetivo: 'Consolidar la competencia de lectura crítica para las pruebas Saber 11, desarrollar producción textual académica compleja e integrar los aprendizajes de lenguaje a través de un proyecto de investigación autónomo',

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
          'Lee con sentido crítico obras literarias de diferentes tradiciones culturales, construyendo interpretaciones sustentadas',
          'Reconoce y compara las concepciones del mundo presentes en textos literarios de diferentes épocas y culturas'
        ],

        diagnostico: 'El 58% de los estudiantes no identifica las características de las vanguardias literarias del siglo XX ni establece relaciones entre el Boom latinoamericano y el contexto político-social de la región.',

        competenciaCiudadana: 'Comprende la literatura contemporánea como respuesta estética y política a los grandes traumas del siglo XX, y reflexiona sobre el papel de los escritores como voces críticas de su tiempo.',

        competenciasICFES: {
          identificar: 'Identifica características de las vanguardias literarias (surrealismo, expresionismo, dadaísmo) y del Boom latinoamericano en textos representativos.',
          comprender: 'Establece relaciones intertextuales entre textos de diferentes épocas y tradiciones, identificando influencias y diálogos entre ellos.',
          reflexionar: 'Evalúa críticamente textos de la literatura contemporánea relacionándolos con su contexto histórico y cultural, construyendo interpretaciones argumentadas.'
        },

        dba: 'Lee y analiza críticamente textos literarios de diferentes tradiciones culturales, construyendo interpretaciones sustentadas.',

        preguntaProblema: '¿Cómo la literatura contemporánea — vanguardias, Boom latinoamericano y narrativa actual — responde a los grandes conflictos y transformaciones del mundo del siglo XX y XXI?',

        ejesTematicos: [
          'Vanguardias literarias del siglo XX: surrealismo, dadaísmo, expresionismo',
          'Boom latinoamericano: García Márquez, Vargas Llosa, Cortázar, Fuentes',
          'Literatura colombiana del siglo XX: Cien años de soledad, El amor en los tiempos del cólera',
          'Posmodernismo y literatura actual: narrativa fragmentada, metaliteratura',
          'Intertextualidad y relaciones entre textos literarios de diferentes épocas',
          'Literatura testimonial y de la memoria en Colombia y América Latina'
        ],

        evidenciasAprendizaje: [
          'Ubica el Boom latinoamericano en su contexto histórico y político, identificando sus características literarias.',
          'Analiza un capítulo de una obra del Boom identificando el uso del realismo mágico, la fragmentación temporal o el narrador múltiple.',
          'Establece relaciones intertextuales entre una obra del Boom y una vanguardia europea que la influenció.',
          'Escribe una interpretación argumentada de un texto literario contemporáneo sustentada con evidencias textuales.',
          'Compara el tratamiento de la violencia en dos obras colombianas de épocas distintas.'
        ],

        matrizReferencia: {
          componente: 'Pragmático',
          competencia: 'Reflexionar y evaluar un texto',
          afirmaciones: [
            'Establece relaciones intertextuales entre textos de diferentes épocas, géneros y tradiciones.',
            'Contextualiza textos en su marco social, histórico, cultural e ideológico.'
          ],
          evidenciasICFES: [
            'Compara perspectivas de diferentes autores sobre un mismo tema o problema.',
            'Reconoce cómo un texto alude, cita o transforma ideas de otros textos.',
            'Relaciona el contenido de un texto con el contexto histórico y cultural de su producción.'
          ]
        },

        aprendizajesICFES: ['lc-s11-09', 'lc-s11-10'],
        evidenciasICFES: ['lc-s11-09-e1', 'lc-s11-09-e2', 'lc-s11-10-e1', 'lc-s11-10-e2'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Selección de capítulos de Cien años de soledad y Rayuela (Cortázar)',
          'Manifiestos de las vanguardias (Manifiesto Surrealista, adaptado)',
          'Antología de cuentos del Boom latinoamericano',
          'Artículos sobre el Boom y su contexto político latinoamericano',
          'Selección de narrativa colombiana contemporánea (Piedad Bonnett, Tomás González)'
        ],

        estrategiasMetodologicas: [
          'Lectura de capítulos del Boom con análisis de técnicas narrativas innovadoras.',
          'Comparación vanguardia-Boom: ¿cómo influyó el surrealismo en García Márquez?',
          'Tertulia literaria sobre Cien años de soledad: interpretaciones y preguntas abiertas.',
          'Escritura de interpretación argumentada con evidencias textuales y contexto histórico.',
          'Línea de tiempo interactiva: de las vanguardias al posmodernismo literario.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Ubica el Boom latinoamericano en su contexto histórico y describe sus características literarias.',
            'Define las principales vanguardias del siglo XX y sus rasgos formales.',
            'Identifica autores y obras representativas del Boom y la literatura colombiana del siglo XX.'
          ],
          hacer: [
            'Analiza un fragmento del Boom identificando técnicas narrativas y contexto histórico.',
            'Establece relaciones intertextuales entre obras de diferentes tradiciones.',
            'Escribe una interpretación argumentada de un texto literario contemporáneo.',
            'Compara el tratamiento de un tema en dos obras colombianas de épocas distintas.'
          ],
          ser: [
            'Demuestra apreciación genuina por la literatura latinoamericana como patrimonio cultural.',
            'Participa activamente en las tertulias con posturas razonadas y respetuosas.',
            'Asume con autonomía las lecturas extensas del periodo.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Literatura', 'Comprensión', 'Producción']
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
          'Comprendo e interpreto textos con actitud crítica y capacidad argumentativa, reconociendo los múltiples sentidos que puede tener un texto',
          'Analizo los aspectos textuales, conceptuales y formales de textos de diferentes géneros, propósitos y contextos'
        ],

        diagnostico: 'El 61% de los estudiantes obtiene resultados por debajo del nivel satisfactorio en simulacros de Lectura Crítica Saber 11, especialmente en preguntas de nivel inferencial crítico con textos discontinuos.',

        competenciaCiudadana: 'Comprende que la lectura crítica es una competencia ciudadana fundamental que le permite tomar decisiones informadas, participar en la vida pública y resistir la manipulación.',

        competenciasICFES: {
          identificar: 'Interpreta textos continuos y discontinuos de alta complejidad (ensayo, artículo científico, infografía, tabla estadística) identificando información explícita e implícita.',
          comprender: 'Comprende cómo se articulan las partes de textos complejos para construir el sentido global, evaluando la progresión temática y la coherencia.',
          reflexionar: 'Reflexiona y evalúa textos de alta complejidad, validando o cuestionando los planteamientos del autor con argumentos propios y de otras fuentes.'
        },

        dba: 'Lee y analiza críticamente textos literarios de diferentes tradiciones culturales, construyendo interpretaciones sustentadas.',

        preguntaProblema: '¿Cómo desarrollar las estrategias de lectura crítica que exige el ICFES para leer textos complejos con rapidez, precisión y pensamiento crítico?',

        ejesTematicos: [
          'Prueba Saber 11 Lectura Crítica: estructura, tipos de preguntas y niveles de competencia',
          'Textos continuos: ensayo, artículo científico, texto filosófico',
          'Textos discontinuos: gráficas, tablas, infografías, mapas conceptuales',
          'Estrategias de lectura: subrayado, síntesis, inferencia, evaluación crítica',
          'Tipos de preguntas ICFES: identificar, comprender, reflexionar',
          'Simulacros cronometrados y análisis de errores'
        ],

        evidenciasAprendizaje: [
          'Resuelve simulacros de Lectura Crítica Saber 11 con un mínimo del 60% de acierto.',
          'Extrae información de textos discontinuos (gráficas, tablas) y la relaciona con el texto escrito.',
          'Identifica la tesis y los argumentos de textos filosóficos y académicos de alta complejidad.',
          'Evalúa la validez de los argumentos del autor usando evidencias del texto y conocimiento externo.',
          'Analiza sus errores en simulacros e identifica las competencias que necesita reforzar.'
        ],

        matrizReferencia: {
          componente: 'Semántico',
          competencia: 'Identificar y entender contenidos locales',
          afirmaciones: [
            'Identifica información explícita e implícita en textos de alta complejidad.',
            'Interpreta textos discontinuos (gráficas, tablas, infografías) relacionándolos con textos continuos.'
          ],
          evidenciasICFES: [
            'Comprende el significado de palabras y expresiones de uso especializado en contextos académicos.',
            'Identifica información explícita e implícita en textos de alta complejidad.',
            'Extrae información de gráficas, tablas estadísticas e infografías y la relaciona con el texto escrito.'
          ]
        },

        aprendizajesICFES: ['lc-s11-01', 'lc-s11-02', 'lc-s11-03', 'lc-s11-04'],
        evidenciasICFES: ['lc-s11-01-e1', 'lc-s11-01-e2', 'lc-s11-02-e1', 'lc-s11-03-e1', 'lc-s11-03-e2', 'lc-s11-04-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Cuadernillo oficial de preguntas liberadas ICFES Saber 11 (Lectura Crítica)',
          'Textos discontinuos reales: infografías, tablas de datos, mapas',
          'Fragmentos de ensayos filosóficos y científicos de alta complejidad',
          'Guía de estrategias de lectura para la prueba Saber 11',
          'Simuladores en línea ICFES y aplicaciones de práctica'
        ],

        estrategiasMetodologicas: [
          'Simulacros cronometrados semanales con análisis colectivo de errores.',
          'Entrenamiento por tipo de pregunta: identificar, comprender, reflexionar.',
          'Análisis de textos discontinuos: extracción de datos y relación con el texto continuo.',
          'Estrategia de descarte: cómo eliminar opciones incorrectas en preguntas difíciles.',
          'Portfolio de progreso: registro de puntajes en simulacros para evidenciar mejora.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Describe la estructura de la prueba Saber 11 de Lectura Crítica y sus tres competencias.',
            'Explica las estrategias de lectura para textos continuos y discontinuos.',
            'Identifica los tipos de preguntas del ICFES y lo que evalúa cada una.'
          ],
          hacer: [
            'Resuelve simulacros de Lectura Crítica con mínimo 60% de acierto.',
            'Extrae e interpreta información de textos discontinuos complejos.',
            'Evalúa la validez de argumentos en textos académicos y filosóficos.',
            'Analiza sus propios errores en simulacros e implementa estrategias de mejora.'
          ],
          ser: [
            'Asume con disciplina y constancia la práctica de simulacros.',
            'Reflexiona honestamente sobre sus fortalezas y debilidades en lectura crítica.',
            'Apoya a sus compañeros en la comprensión de estrategias de lectura.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Comprensión', 'Medios', 'Producción']
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
          'Produzco textos escritos complejos (ensayos, artículos) con argumentación sólida, manejo de fuentes y postura crítica propia',
          'Incorporo procedimientos formales en el proceso de escritura: planeación, elaboración de borradores y revisión'
        ],

        diagnostico: 'El 55% de los estudiantes no estructura correctamente un artículo de opinión ni una monografía básica, y no maneja adecuadamente las normas de citación académica.',

        competenciaCiudadana: 'Valora la escritura académica como herramienta de participación en la vida intelectual y universitaria, y como medio para comunicar ideas con rigor, claridad y ética.',

        competenciasICFES: {
          identificar: 'Identifica las características formales del artículo de opinión, la monografía y el ensayo académico, y las distingue de otros géneros textuales.',
          comprender: 'Comprende cómo se articulan la tesis, los argumentos, las fuentes y la conclusión para construir un texto académico coherente y cohesionado.',
          reflexionar: 'Evalúa la calidad académica de textos propios y ajenos aplicando criterios de coherencia, cohesión, pertinencia argumentativa y manejo ético de fuentes.'
        },

        dba: 'Produce textos escritos complejos (ensayos, artículos) con argumentación sólida, manejo de fuentes y postura crítica propia.',

        preguntaProblema: '¿Cómo construir textos académicos complejos — artículo de opinión y monografía — que comuniquen una postura propia con rigor intelectual y manejo ético de las fuentes?',

        ejesTematicos: [
          'Artículo de opinión: características, estructura y escritura',
          'Monografía básica: partes, proceso y escritura',
          'Normas de citación: APA 7 básico para bachillerato',
          'Paráfrasis, cita directa y síntesis en la escritura académica',
          'Proceso de escritura: planificación, redacción, revisión y edición',
          'Revisión entre pares con rúbricas de evaluación académica'
        ],

        evidenciasAprendizaje: [
          'Produce un artículo de opinión con tesis clara, argumentos variados, manejo de fuentes y conclusión.',
          'Elabora un esquema de monografía básica con planteamiento del problema, objetivos y estructura.',
          'Cita correctamente fuentes académicas usando normas APA 7 básico.',
          'Revisa críticamente el texto de un compañero aplicando rúbrica académica con criterios precisos.',
          'Reescribe un borrador propio a partir de retroalimentación recibida, mejorando la argumentación y la estructura.'
        ],

        matrizReferencia: {
          componente: 'Sintáctico',
          competencia: 'Comprender cómo se articulan las partes de un texto',
          afirmaciones: [
            'Identifica la tesis central y los argumentos de apoyo en textos argumentativos complejos.',
            'Reconoce las estrategias retóricas del autor (ejemplificación, analogía, contraargumentación, apelación a la autoridad).'
          ],
          evidenciasICFES: [
            'Identifica la tesis central y los argumentos de apoyo en textos argumentativos complejos.',
            'Evalúa la organización de un texto y la progresión temática.',
            'Reconoce la función de los párrafos en la estructura global del texto.'
          ]
        },

        aprendizajesICFES: ['lc-s11-04', 'lc-s11-05', 'lc-s11-06'],
        evidenciasICFES: ['lc-s11-04-e1', 'lc-s11-04-e2', 'lc-s11-04-e3', 'lc-s11-05-e2', 'lc-s11-06-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Artículos de opinión de columnistas académicos (texto modelo)',
          'Monografías estudiantiles de grado modelo (adaptadas)',
          'Guía APA 7 para bachillerato: normas simplificadas',
          'Rúbrica de evaluación de artículo de opinión y monografía',
          'Aplicaciones de gestión bibliográfica: Zotero o Mendeley (básico)'
        ],

        estrategiasMetodologicas: [
          'Análisis de artículos de opinión como modelos antes de producir el propio.',
          'Proceso de escritura por etapas: esquema → borrador → revisión entre pares → versión final.',
          'Taller de citación: práctica de APA 7 con fuentes diversas (libros, artículos, páginas web).',
          'Revisión entre pares con rúbrica: retroalimentación estructurada y respetuosa.',
          'Socialización de artículos de opinión: presentación oral de la tesis y principales argumentos.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define el artículo de opinión y la monografía, e identifica sus componentes estructurales.',
            'Explica las normas básicas de citación APA 7 y los tipos de cita (directa, indirecta).',
            'Describe el proceso de escritura académica: planeación, redacción, revisión, edición.'
          ],
          hacer: [
            'Produce un artículo de opinión con tesis, argumentos, fuentes y conclusión.',
            'Elabora el esquema y la introducción de una monografía básica sobre un tema de interés.',
            'Cita correctamente fuentes académicas en sus textos usando APA 7 básico.',
            'Revisa textos de sus compañeros con rúbrica académica y ofrece retroalimentación pertinente.'
          ],
          ser: [
            'Asume la honestidad intelectual como principio fundamental en la escritura académica.',
            'Muestra perseverancia en el proceso de revisión y mejora de sus textos.',
            'Valora la escritura como herramienta de pensamiento, aprendizaje y comunicación.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Producción', 'Comprensión', 'Ética']
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
          'Desarrolla proyectos de investigación y comunicación que articulan lenguaje, literatura y otras disciplinas',
          'Valora la lectura y la escritura como herramientas de aprendizaje, participación ciudadana y desarrollo personal'
        ],

        diagnostico: 'El 44% de los estudiantes no articula los conocimientos de lenguaje con otras disciplinas para resolver problemas complejos ni presenta sus proyectos con la estructura metodológica requerida.',

        competenciaCiudadana: 'Reflexiona sobre su trayectoria académica en lenguaje, proyecta sus competencias comunicativas hacia la vida universitaria y ciudadana, y valora la investigación como forma de transformar la realidad.',

        competenciasICFES: {
          identificar: 'Identifica y articula contenidos de los diferentes campos del lenguaje (lectura crítica, literatura, lingüística, producción textual) para resolver situaciones comunicativas complejas.',
          comprender: 'Comprende la metodología básica de investigación en lenguaje y comunicación: planteamiento del problema, revisión bibliográfica, análisis y presentación de resultados.',
          reflexionar: 'Reflexiona sobre sus propias competencias en lenguaje y comunicación, evaluando su desarrollo a lo largo del bachillerato y proyectando su formación futura.'
        },

        dba: 'Desarrolla proyectos de investigación y comunicación que articulan lenguaje, literatura y otras disciplinas.',

        preguntaProblema: '¿Cómo mis competencias en lenguaje, literatura y comunicación me preparan para los desafíos académicos, laborales y ciudadanos que vienen?',

        ejesTematicos: [
          'Metodología básica de investigación: problema, objetivos, marco teórico, metodología, resultados',
          'Revisión bibliográfica: búsqueda, evaluación y uso de fuentes académicas',
          'Presentación oral académica: estructura, recursos y manejo del auditorio',
          'Preparación final Saber 11: repaso integral de Lectura Crítica',
          'Proyecto de vida y lenguaje: comunicación en el mundo profesional y universitario',
          'Síntesis del bachillerato: competencias en lenguaje y metas personales'
        ],

        evidenciasAprendizaje: [
          'Desarrolla un proyecto de investigación básico en lenguaje o comunicación con metodología clara.',
          'Realiza una revisión bibliográfica sobre el tema investigado, citando correctamente las fuentes.',
          'Presenta el proyecto de investigación oralmente con estructura, claridad y manejo del auditorio.',
          'Resuelve simulacros finales de Lectura Crítica Saber 11 con nivel satisfactorio o avanzado.',
          'Escribe una reflexión sobre su proceso de aprendizaje en lenguaje durante el bachillerato y sus metas futuras.'
        ],

        matrizReferencia: {
          componente: 'Multidimensional (semántico, sintáctico, pragmático)',
          competencia: 'Identificar, comprender y reflexionar — integración de competencias',
          afirmaciones: [
            'Integra competencias de identificación, comprensión y reflexión crítica para resolver situaciones comunicativas complejas.',
            'Articula conocimientos de literatura, lingüística, producción textual y lectura crítica en el proyecto de investigación.'
          ],
          evidenciasICFES: [
            'Identifica información explícita e implícita en textos de alta complejidad.',
            'Evalúa la validez de los argumentos del autor usando evidencia del texto y conocimiento externo.',
            'Contextualiza textos en su marco social, histórico, cultural e ideológico.'
          ]
        },

        aprendizajesICFES: ['lc-s11-01', 'lc-s11-04', 'lc-s11-07', 'lc-s11-09', 'lc-s11-10'],
        evidenciasICFES: ['lc-s11-01-e2', 'lc-s11-04-e1', 'lc-s11-07-e1', 'lc-s11-07-e2', 'lc-s11-09-e1', 'lc-s11-10-e1'],
        nivelEsperado: 'Avanzado',

        materialesEducativos: [
          'Guía de metodología de investigación básica para bachillerato',
          'Cuadernillo de simulacros ICFES Saber 11 (Lectura Crítica) — pruebas anteriores',
          'Bases de datos académicas accesibles: Scielo, Redalyc, Google Académico',
          'Rúbrica de evaluación del proyecto de investigación y la presentación oral',
          'Recursos de apoyo: Khan Academy, plataforma ICFES interactiva'
        ],

        estrategiasMetodologicas: [
          'Asesoría individual del proyecto de investigación: seguimiento por etapas.',
          'Simulacros finales Saber 11 con retroalimentación focalizada por competencia.',
          'Revisión bibliográfica colaborativa: cada grupo construye una base de datos de fuentes.',
          'Presentaciones orales ante jurado (docentes y pares) con rúbrica de evaluación.',
          'Reflexión final: carta a mi yo del primer grado de bachillerato sobre lo aprendido en lenguaje.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Describe la metodología básica de investigación y sus etapas.',
            'Explica los criterios para evaluar la calidad de una fuente académica.',
            'Reconoce las tres competencias de Lectura Crítica ICFES y lo que evalúa cada una.'
          ],
          hacer: [
            'Desarrolla un proyecto de investigación básico con metodología, resultados y conclusiones.',
            'Realiza una revisión bibliográfica pertinente y la incorpora al proyecto.',
            'Presenta el proyecto oralmente con estructura, claridad y dominio del tema.',
            'Resuelve simulacros Saber 11 con desempeño en nivel satisfactorio o avanzado.'
          ],
          ser: [
            'Reflexiona con madurez y honestidad sobre su proceso de aprendizaje en lenguaje.',
            'Demuestra autonomía e iniciativa en el desarrollo del proyecto de investigación.',
            'Valora la lectura, la escritura y la investigación como herramientas para su proyecto de vida.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Comprensión', 'Producción', 'Literatura', 'Medios', 'Ética']
      }
    ]
  }

};

// Exportar para uso en módulos (CommonJS y ESM)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANES_LENGUAJE };
}
