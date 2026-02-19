/**
 * Planes de aula de Ciencias Sociales - Grados 6° a 11°
 * Estructura: 4 periodos x 10 semanas x 3 horas/semana = 120 horas/año
 * Basado en Estándares Básicos de Competencias (EBC) del MEN - Colombia
 * Competencias ICFES: Pensamiento social, Interpretación y análisis de perspectivas,
 *                     Pensamiento reflexivo y sistémico
 */

const PLANES_SOCIALES = {

  // ============================================================
  // GRADO 6
  // ============================================================
  '6': {
    grado: '6°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Desarrollar el pensamiento social básico mediante el estudio de las civilizaciones antiguas, la geografía física de Colombia, la organización política del Estado y los pueblos prehispánicos colombianos, fortaleciendo la identidad cultural y el sentido de pertenencia territorial',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco y describo las características de las principales civilizaciones antiguas (Mesopotamia, Egipto, Grecia y Roma) y sus aportes a la humanidad.',
          'Establezco relaciones entre las condiciones geográficas y el desarrollo de las civilizaciones antiguas.',
          'Identifico los aportes culturales, científicos y políticos de las civilizaciones antiguas a la sociedad occidental.'
        ],

        dba: 'Comprende las características de las civilizaciones antiguas de Mesopotamia, Egipto, Grecia y Roma, identificando sus aportes culturales, políticos y científicos, y establece relaciones entre el contexto geográfico y el desarrollo de cada civilización.',

        ejesTematicos: [
          'Mesopotamia: las primeras civilizaciones entre el Tigris y el Éufrates',
          'El Antiguo Egipto: geografía del Nilo, faraones y pirámides',
          'La antigua Grecia: polis, democracia y legado cultural',
          'El Imperio Romano: organización, expansión y caída',
          'Aportes de las civilizaciones antiguas a la humanidad'
        ],

        tiposPensamiento: ['Historia', 'Territorio'],

        preguntaProblema: '¿Por qué las civilizaciones antiguas de Mesopotamia, Egipto, Grecia y Roma siguen siendo referentes fundamentales para comprender la organización política, cultural y científica del mundo de hoy?',

        diagnostico: 'El 60% de los estudiantes no identifica las características básicas de las civilizaciones antiguas ni establece relaciones entre el contexto geográfico y el desarrollo civilizatorio.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica las principales características de las civilizaciones antiguas y sus aportes al desarrollo político, cultural y científico de la humanidad.',
          interpretacion: 'Reconoce y compara las formas de organización social, política y cultural de las civilizaciones de Mesopotamia, Egipto, Grecia y Roma.',
          pensamientoSistemico: 'Establece relaciones entre el contexto geográfico (ríos, valles, costas) y el surgimiento y desarrollo de las civilizaciones antiguas.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Comprende las dimensiones temporales y espaciales de las civilizaciones antiguas como fundamento de la cultura occidental.',
            'Identifica los aportes culturales, políticos y científicos de las civilizaciones antiguas para explicar continuidades en el presente.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-03'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe la ubicación geográfica y las condiciones naturales que favorecieron el surgimiento de Mesopotamia y Egipto.',
          'Identifica los principales aportes de la civilización griega: democracia, filosofía, teatro y ciencias.',
          'Explica la organización del Imperio Romano: república, república tardía e Imperio.',
          'Establece semejanzas y diferencias entre las civilizaciones antiguas estudiadas.',
          'Interpreta líneas de tiempo y mapas históricos de las civilizaciones antiguas.'
        ],

        estrategiasMetodologicas: [
          'Construcción colectiva de línea de tiempo: desde Mesopotamia hasta la caída de Roma.',
          'Trabajo con mapas históricos: ubicar las civilizaciones en el espacio geográfico.',
          'Análisis de imágenes: monumentos, construcciones y objetos de las civilizaciones antiguas.',
          'Comparación en cuadro: formas de gobierno, religión, aportes culturales de cada civilización.',
          'Lectura guiada de mitos y leyendas fundacionales (Gilgamesh, mitos griegos).'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 6° (editorial Norma o Santillana)',
          'Mapas históricos de las civilizaciones antiguas',
          'Imágenes y fotografías de monumentos (pirámides, Partenón, Coliseo)',
          'Líneas de tiempo en formato mural para el aula',
          'Videos documentales cortos sobre cada civilización (YouTube educativo)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las características geográficas y organizativas de las civilizaciones antiguas.',
            'Identifica los principales aportes culturales, políticos y científicos de Grecia y Roma.',
            'Explica la importancia de los ríos en el surgimiento de Mesopotamia y Egipto.'
          ],
          hacer: [
            'Elabora una línea de tiempo ilustrada de las civilizaciones antiguas.',
            'Completa mapas históricos ubicando las civilizaciones en su contexto geográfico.',
            'Construye un cuadro comparativo entre las civilizaciones estudiadas.',
            'Interpreta imágenes y fuentes visuales de la Antigüedad.'
          ],
          ser: [
            'Valora los aportes de las civilizaciones antiguas como patrimonio de la humanidad.',
            'Muestra curiosidad e interés por el estudio de culturas diferentes a la propia.',
            'Participa con respeto en las actividades grupales de análisis histórico.'
          ]
        },

        competenciaCiudadana: 'Reconoce que la democracia, la justicia y los derechos son conceptos que tienen raíces en las civilizaciones antiguas y reflexiona sobre la importancia de preservar y valorar el patrimonio cultural de la humanidad.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo y explico las regiones naturales de Colombia, sus características físicas, climáticas e hidrográficas.',
          'Identifico la diversidad geográfica de Colombia como factor de riqueza natural y cultural.',
          'Establezco relaciones entre las condiciones geográficas de las regiones colombianas y las formas de vida de sus habitantes.'
        ],

        dba: 'Comprende las características físicas, climáticas e hidrográficas de las regiones naturales de Colombia, estableciendo relaciones entre la geografía y las formas de vida de sus habitantes.',

        ejesTematicos: [
          'Las regiones naturales de Colombia: Andina, Caribe, Pacífica, Orinoquía, Amazonia e Insular',
          'Hidrografía de Colombia: principales ríos y cuencas hidrográficas',
          'Clima y pisos térmicos en Colombia',
          'Biodiversidad y recursos naturales por región',
          'Relación entre geografía y formas de vida de las comunidades'
        ],

        tiposPensamiento: ['Territorio'],

        preguntaProblema: '¿Cómo la diversidad geográfica de Colombia (regiones, ríos, climas) determina las formas de vida, la cultura y la economía de sus habitantes?',

        diagnostico: 'El 58% de los estudiantes no identifica las regiones naturales de Colombia ni establece relaciones entre la geografía y las condiciones de vida de las comunidades.',

        competenciasICFES: {
          pensamientoSocial: 'Describe las características geográficas de las regiones naturales de Colombia, relacionando condiciones físicas con las formas de vida de sus pobladores.',
          interpretacion: 'Reconoce la diversidad geográfica de Colombia como un recurso de riqueza natural y cultural que debe ser valorado y protegido.',
          pensamientoSistemico: 'Establece relaciones entre las condiciones climáticas, hidrográficas y el uso del suelo en las diferentes regiones de Colombia.'
        },

        matrizReferencia: {
          componente: 'relaciones-espaciales-ambientales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Identifica y describe las características físicas, climáticas e hidrográficas de las regiones naturales de Colombia.',
            'Establece relaciones entre las condiciones geográficas y las formas de vida, actividades económicas y manifestaciones culturales de las comunidades.'
          ]
        },

        aprendizajesICFES: ['soc-s9-06', 'soc-s9-07'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Ubica en el mapa las seis regiones naturales de Colombia e identifica sus características físicas.',
          'Nombra y localiza los principales ríos y cuencas hidrográficas de Colombia.',
          'Describe los pisos térmicos y relaciona el clima con la vegetación y la actividad económica.',
          'Explica por qué Colombia es uno de los países más biodiversos del mundo.',
          'Relaciona la región geográfica con las formas de vida y la cultura de sus habitantes.'
        ],

        estrategiasMetodologicas: [
          'Elaboración de mapas de Colombia identificando regiones y principales accidentes geográficos.',
          'Trabajo con fotografías: identificar a qué región pertenecen distintos paisajes colombianos.',
          'Análisis de infografías sobre biodiversidad y recursos naturales por región.',
          'Salida virtual o recorrido fotográfico por las regiones de Colombia.',
          'Proyecto: "Mi región colombiana" – descripción geográfica con mapas e imágenes.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 6°',
          'Atlas geográfico de Colombia',
          'Mapas mudos de Colombia para colorear y señalar',
          'Fotografías representativas de cada región natural',
          'Infografías de biodiversidad y recursos naturales de Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra y describe las seis regiones naturales de Colombia.',
            'Identifica los principales ríos y cuencas hidrográficas.',
            'Explica qué son los pisos térmicos y cómo influyen en el clima.'
          ],
          hacer: [
            'Elabora mapas de Colombia señalando regiones, ríos y relieves.',
            'Construye una infografía sobre una región natural de Colombia.',
            'Interpreta mapas físicos y climáticos de Colombia.',
            'Relaciona datos geográficos con formas de vida y economía regional.'
          ],
          ser: [
            'Valora la diversidad geográfica de Colombia como riqueza natural y cultural.',
            'Muestra actitud de cuidado y respeto hacia el medio ambiente.',
            'Participa con entusiasmo en actividades de exploración geográfica.'
          ]
        },

        competenciaCiudadana: 'Reconoce la diversidad geográfica de Colombia como un bien colectivo que debe ser protegido, y asume actitudes de cuidado ambiental y valoración del territorio desde su cotidianidad.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y explico los conceptos básicos de Estado, gobierno y democracia, y los relaciono con la organización política de Colombia.',
          'Describo la estructura del Estado colombiano y las funciones de sus ramas del poder público.',
          'Reconozco la importancia de la participación ciudadana en la vida democrática y los mecanismos que la hacen posible.'
        ],

        dba: 'Comprende los conceptos básicos de Estado, gobierno y democracia, identificando la estructura del Estado colombiano, las funciones de las ramas del poder público y los mecanismos de participación ciudadana.',

        ejesTematicos: [
          'El Estado: concepto, elementos y tipos de Estado',
          'El gobierno: formas de gobierno y sistemas políticos',
          'La democracia: principios, tipos y condiciones',
          'La organización política de Colombia: ramas del poder público',
          'Participación ciudadana: mecanismos y formas de participación'
        ],

        tiposPensamiento: ['Ético-Político'],

        preguntaProblema: '¿Por qué es importante conocer la organización política del Estado colombiano y participar activamente en los mecanismos democráticos para construir una sociedad más justa?',

        diagnostico: 'El 62% de los estudiantes no distingue entre Estado y gobierno, ni identifica las ramas del poder público ni los mecanismos de participación ciudadana.',

        competenciasICFES: {
          pensamientoSocial: 'Describe los elementos del Estado, las formas de gobierno y los principios de la democracia, relacionándolos con la organización política de Colombia.',
          interpretacion: 'Reconoce las funciones de las ramas del poder público y evalúa la importancia de la separación de poderes para la democracia.',
          pensamientoSistemico: 'Establece relaciones entre los principios democráticos, la organización del Estado colombiano y las posibilidades de participación ciudadana.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Identifica la estructura del Estado colombiano, las funciones de las ramas del poder público y los mecanismos de participación ciudadana.',
            'Comprende los principios de la democracia y evalúa su importancia para la convivencia y la garantía de derechos.'
          ]
        },

        aprendizajesICFES: ['soc-s9-02', 'soc-s9-05'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Define los conceptos de Estado, nación, gobierno y democracia.',
          'Identifica los elementos del Estado colombiano: territorio, población, soberanía y gobierno.',
          'Describe las funciones de las tres ramas del poder público en Colombia.',
          'Explica qué es la democracia y cuáles son sus principios fundamentales.',
          'Identifica los mecanismos de participación ciudadana: voto, referendo, consulta popular, cabildo abierto.'
        ],

        estrategiasMetodologicas: [
          'Construcción de organigrama del Estado colombiano y las ramas del poder público.',
          'Simulacro de elecciones estudiantiles: vivencia de los mecanismos democráticos.',
          'Análisis de noticias sobre el funcionamiento del Estado y la participación ciudadana.',
          'Comparación de formas de gobierno: democracia, monarquía, dictadura.',
          'Debate: ¿por qué es importante separar los poderes del Estado?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 6°',
          'Constitución Política de Colombia 1991 (versión pedagógica para estudiantes)',
          'Infografías sobre las ramas del poder público',
          'Noticias actuales sobre participación ciudadana y democracia',
          'Videos cortos sobre mecanismos de participación (Registraduría Nacional)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define los conceptos de Estado, gobierno y democracia.',
            'Describe las funciones de las tres ramas del poder público.',
            'Identifica los mecanismos de participación ciudadana.'
          ],
          hacer: [
            'Elabora un organigrama de las ramas del poder público.',
            'Participa en el simulacro de elecciones estudiantiles.',
            'Analiza noticias relacionadas con el funcionamiento del Estado.',
            'Argumenta sobre la importancia de la participación ciudadana.'
          ],
          ser: [
            'Valora la democracia como sistema de gobierno que garantiza derechos.',
            'Muestra disposición para participar en los mecanismos democráticos del colegio.',
            'Asume actitudes de respeto frente a la diferencia de opiniones políticas.'
          ]
        },

        competenciaCiudadana: 'Comprende la importancia de la organización política del Estado y la democracia, y asume compromisos de participación activa en los mecanismos democráticos disponibles en su entorno escolar y comunitario.'
      },

      // ----------------------------------------------------------
      // GRADO 6 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco y describo las principales culturas prehispánicas de Colombia (muiscas, taironas, quimbayas, zenúes) y sus aportes a la identidad nacional.',
          'Identifico las formas de organización social, política, económica y cultural de los pueblos prehispánicos colombianos.',
          'Valoro la herencia cultural prehispánica como parte fundamental de la identidad colombiana y latinoamericana.'
        ],

        dba: 'Comprende las características de las principales culturas prehispánicas de Colombia, identificando sus formas de organización, sus aportes culturales y su legado en la identidad colombiana.',

        ejesTematicos: [
          'Los muiscas: organización política, economía y cosmogonía',
          'Los taironas: ciudad, arquitectura y relación con la naturaleza',
          'Los quimbayas: orfebrería y expresión cultural',
          'Los zenúes: manejo del agua y territorio',
          'Legado prehispánico en la identidad cultural colombiana'
        ],

        tiposPensamiento: ['Historia'],

        preguntaProblema: '¿Qué nos enseñan las culturas prehispánicas colombianas (muiscas, taironas, quimbayas y zenúes) sobre formas de organización social, política y ambiental que podrían inspirar soluciones a problemas actuales?',

        diagnostico: 'El 65% de los estudiantes desconoce las características de las principales culturas prehispánicas colombianas y no reconoce su legado en la identidad y el patrimonio cultural del país.',

        competenciasICFES: {
          pensamientoSocial: 'Describe las características culturales, políticas y económicas de las principales culturas prehispánicas colombianas, identificando sus formas de organización y sus aportes al patrimonio cultural.',
          interpretacion: 'Reconoce y compara las formas de organización y los aportes culturales de los muiscas, taironas, quimbayas y zenúes, valorando su diversidad.',
          pensamientoSistemico: 'Establece relaciones entre las condiciones geográficas, la organización social y los desarrollos culturales de los pueblos prehispánicos colombianos.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Comprende las formas de organización social, política y económica de los pueblos prehispánicos colombianos en su contexto histórico y geográfico.',
            'Reconoce el legado cultural de los pueblos prehispánicos como parte constitutiva del patrimonio e identidad de Colombia.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-04'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe la organización política y social de los muiscas: zipazgo, cacicazgo, zaque.',
          'Explica la importancia de Ciudad Perdida (Teyuna) como centro cultural y político de los taironas.',
          'Identifica los aportes artísticos y culturales de los quimbayas, especialmente en orfebrería.',
          'Describe el ingenio hidráulico de los zenúes y su relación con el territorio.',
          'Establece el legado de las culturas prehispánicas en la identidad cultural colombiana actual.'
        ],

        estrategiasMetodologicas: [
          'Análisis de piezas de orfebrería prehispánica: imágenes del Museo del Oro.',
          'Elaboración de mapa de Colombia ubicando las culturas prehispánicas por región.',
          'Proyecto: álbum o mural "Culturas prehispánicas de Colombia".',
          'Lectura de leyendas y mitos prehispánicos colombianos (El Dorado, la Laguna de Guatavita).',
          'Comparación de las culturas prehispánicas con las civilizaciones antiguas estudiadas en el periodo 1.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 6°',
          'Imágenes de piezas del Museo del Oro (catálogo pedagógico)',
          'Mapas de Colombia con distribución de culturas prehispánicas',
          'Leyendas y mitos colombianos prehispánicos (selección docente)',
          'Documental: "Pueblos indígenas prehispánicos de Colombia" (YouTube educativo)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las características organizativas de los muiscas, taironas, quimbayas y zenúes.',
            'Identifica los principales aportes culturales de cada civilización prehispánica.',
            'Explica la relación entre las culturas prehispánicas y el territorio colombiano.'
          ],
          hacer: [
            'Elabora un mapa de Colombia con la distribución de las culturas prehispánicas.',
            'Construye un cuadro comparativo de las características de cada cultura.',
            'Analiza imágenes de orfebrería y arquitectura prehispánica.',
            'Relaciona el legado prehispánico con manifestaciones culturales actuales.'
          ],
          ser: [
            'Valora el legado cultural de los pueblos prehispánicos como patrimonio de la humanidad.',
            'Muestra actitud de respeto y valoración hacia la diversidad cultural colombiana.',
            'Reconoce la importancia de preservar el patrimonio arqueológico y cultural del país.'
          ]
        },

        competenciaCiudadana: 'Reconoce el legado de los pueblos prehispánicos como parte de su identidad cultural colombiana y asume compromisos de valoración y protección del patrimonio arqueológico e histórico del país.'
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
    objetivo: 'Desarrollar el pensamiento histórico y social mediante el estudio de la Edad Media, el Renacimiento, la conquista y colonia de América, la geografía humana colombiana y los derechos humanos, articulando los procesos mundiales con la realidad histórica y social de Colombia',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo y analizo las características de la Edad Media europea y los cambios que trajo el Renacimiento en la ciencia, el arte y el pensamiento.',
          'Establezco relaciones entre el feudalismo, la iglesia y la organización social medieval.',
          'Identifico los principales cambios culturales, científicos y artísticos del Renacimiento y su impacto en la historia de Occidente.'
        ],

        dba: 'Comprende las características de la Edad Media y el Renacimiento, identificando las transformaciones sociales, culturales, científicas y artísticas que marcaron el tránsito hacia la modernidad.',

        ejesTematicos: [
          'La caída de Roma y el inicio de la Edad Media',
          'El feudalismo: estructura social, política y económica',
          'La Iglesia Católica en la Edad Media: poder e influencia',
          'El Renacimiento: humanismo, ciencia y arte',
          'Los grandes descubrimientos y la visión del mundo en el siglo XV'
        ],

        tiposPensamiento: ['Historia'],

        preguntaProblema: '¿Qué transformaciones culturales, científicas y artísticas trajo el Renacimiento frente a la Edad Media, y cómo estos cambios sentaron las bases del mundo moderno?',

        diagnostico: 'El 57% de los estudiantes no identifica las características del feudalismo ni comprende los cambios que representó el Renacimiento frente a la cosmovisión medieval.',

        competenciasICFES: {
          pensamientoSocial: 'Describe las características de la Edad Media (feudalismo, iglesia, cruzadas) y del Renacimiento (humanismo, ciencias, artes), identificando cambios y continuidades históricas.',
          interpretacion: 'Reconoce y compara las visiones del mundo medieval y renacentista, analizando las perspectivas de diferentes actores históricos.',
          pensamientoSistemico: 'Establece relaciones entre la crisis del feudalismo, el renacimiento del comercio y el surgimiento del humanismo como contexto del Renacimiento.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Comprende las dimensiones temporales y espaciales de la Edad Media y el Renacimiento como procesos históricos interconectados.',
            'Identifica los cambios culturales, científicos y artísticos del Renacimiento como punto de quiebre en la historia de Occidente.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-03'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe la estructura social del feudalismo: señor feudal, vasallos y siervos.',
          'Explica el papel de la Iglesia Católica en la sociedad medieval: poder temporal y espiritual.',
          'Identifica los principales artistas y científicos del Renacimiento: Leonardo da Vinci, Galileo, Copérnico.',
          'Describe las características del humanismo y su diferencia con la cosmovisión medieval.',
          'Establece relaciones entre el Renacimiento, los grandes descubrimientos y el inicio de la modernidad.'
        ],

        estrategiasMetodologicas: [
          'Análisis de obras de arte medievales y renacentistas: comparación de estilos y mensajes.',
          'Línea de tiempo: de la caída de Roma al Renacimiento.',
          'Lectura y análisis de fragmentos de textos medievales y humanistas.',
          'Proyecto: "El mundo en el Renacimiento" – análisis de inventos, descubrimientos y obras de arte.',
          'Debate: ¿El Renacimiento representó una ruptura total con la Edad Media?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 7° (editorial Norma o Santillana)',
          'Imágenes de arte medieval (mosaicos, catedrales góticas) y renacentista (La Gioconda, El Vitruvio)',
          'Líneas de tiempo ilustradas de la Edad Media al Renacimiento',
          'Fragmentos de textos humanistas (Erasmo, Pico della Mirandola)',
          'Documental: "El Renacimiento: el arte y las ideas" (YouTube educativo)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las características del feudalismo y la sociedad medieval.',
            'Identifica los principales cambios del Renacimiento en ciencia, arte y pensamiento.',
            'Explica el concepto de humanismo y su importancia histórica.'
          ],
          hacer: [
            'Elabora una línea de tiempo de la Edad Media al Renacimiento.',
            'Compara obras de arte medievales y renacentistas identificando sus diferencias.',
            'Analiza fuentes históricas medievales y renacentistas.',
            'Argumenta sobre los cambios que trajo el Renacimiento para el mundo occidental.'
          ],
          ser: [
            'Valora el patrimonio artístico y cultural de la Edad Media y el Renacimiento.',
            'Muestra actitud de respeto y curiosidad hacia culturas y épocas históricas diferentes.',
            'Participa con responsabilidad en las actividades grupales de análisis histórico.'
          ]
        },

        competenciaCiudadana: 'Reconoce que los cambios históricos son producto del pensamiento crítico, la creatividad y el cuestionamiento de las ideas establecidas, y reflexiona sobre la importancia del conocimiento y la cultura para transformar la sociedad.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Explico el proceso de conquista y colonización de América por parte de las potencias europeas y sus consecuencias para los pueblos indígenas.',
          'Describo el sistema de la encomienda y la mita como formas de explotación colonial, y analizo sus consecuencias sociales.',
          'Identifico el proceso de mestizaje cultural, étnico y social que resultó del encuentro de culturas en América durante la colonia.'
        ],

        dba: 'Comprende el proceso de conquista y colonia en América, identificando las causas del encuentro cultural, los mecanismos de explotación (encomienda, mita) y las consecuencias del mestizaje para la conformación de las sociedades latinoamericanas.',

        ejesTematicos: [
          'Los viajes de exploración y el "descubrimiento" de América (1492)',
          'La conquista de América: procesos, actores y resistencias indígenas',
          'El sistema colonial: encomienda, mita y organización de la colonia',
          'El mestizaje: mezcla étnica, cultural y religiosa',
          'La Nueva Granada: organización colonial del territorio colombiano'
        ],

        tiposPensamiento: ['Historia'],

        preguntaProblema: '¿Cómo el proceso de conquista y colonización de América, con sus mecanismos de explotación y su encuentro de culturas, configuró la sociedad latinoamericana que conocemos hoy?',

        diagnostico: 'El 53% de los estudiantes no comprende el sistema colonial ni las consecuencias del encuentro de culturas, y no reconoce la resistencia indígena ante la conquista.',

        competenciasICFES: {
          pensamientoSocial: 'Analiza el proceso de conquista y colonización de América, identificando los mecanismos de explotación colonial y las consecuencias del encuentro de culturas para las sociedades americanas.',
          interpretacion: 'Reconoce y compara las perspectivas de los conquistadores europeos, los pueblos indígenas y los africanos esclavizados frente al proceso de conquista y colonia.',
          pensamientoSistemico: 'Establece relaciones entre el sistema colonial (encomienda, mita, esclavitud), el mestizaje y la conformación de las sociedades latinoamericanas actuales.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Reconoce y compara las perspectivas de los diferentes actores del proceso de conquista y colonización de América.',
            'Comprende el proceso de mestizaje como resultado del encuentro forzado de culturas europeas, indígenas y africanas en América.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-05'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe los motivos de los viajes de exploración europeos y el contexto del "descubrimiento" de América.',
          'Explica el proceso de conquista de América, identificando actores, mecanismos y resistencias indígenas.',
          'Describe el sistema colonial: encomienda, mita, esclavitud y organización administrativa.',
          'Explica el proceso de mestizaje étnico, cultural y religioso en América colonial.',
          'Identifica las características de la Nueva Granada como parte del sistema colonial español.'
        ],

        estrategiasMetodologicas: [
          'Análisis de fuentes primarias: fragmentos de crónicas de conquista desde la perspectiva indígena y española.',
          'Debate: ¿"Descubrimiento", "encuentro" o "invasión"? Perspectivas sobre 1492.',
          'Mapa histórico: rutas de exploración y conquista en América.',
          'Análisis de la película o documental sobre la conquista desde la perspectiva de los pueblos indígenas.',
          'Construcción de cuadro comparativo: vida antes y después de la conquista para indígenas, europeos y africanos.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 7°',
          'Crónicas de Indias (fragmentos seleccionados, perspectivas indígena y española)',
          'Mapas históricos de las rutas de conquista y la organización colonial',
          'Fragmentos de "Visión de los vencidos" (León Portilla) adaptados para estudiantes',
          'Documental o video sobre la conquista de América y la resistencia indígena'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el proceso de conquista y colonización de América.',
            'Explica los mecanismos de explotación colonial: encomienda y mita.',
            'Define el concepto de mestizaje y sus dimensiones étnica, cultural y religiosa.'
          ],
          hacer: [
            'Elabora un mapa histórico de las rutas de exploración y conquista.',
            'Compara las perspectivas de los distintos actores de la conquista.',
            'Analiza fuentes primarias sobre el proceso colonial.',
            'Relaciona el sistema colonial con la conformación de la sociedad latinoamericana actual.'
          ],
          ser: [
            'Reconoce y rechaza las formas de explotación y dominación que caracterizaron la colonia.',
            'Valora la resistencia de los pueblos indígenas y africanos como expresión de dignidad.',
            'Muestra disposición para analizar los hechos históricos desde múltiples perspectivas.'
          ]
        },

        competenciaCiudadana: 'Comprende que la diversidad étnica y cultural de Colombia es resultado del encuentro y choque de culturas durante la conquista y la colonia, y asume una postura crítica frente a toda forma de discriminación, explotación o negación de la dignidad humana.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo y analizo las características de la geografía humana de Colombia: distribución de la población, procesos migratorios y urbanización.',
          'Identifico los factores que determinan la distribución de la población en el territorio colombiano.',
          'Establezco relaciones entre los procesos de migración y urbanización y los problemas sociales y ambientales de las ciudades colombianas.'
        ],

        dba: 'Comprende los conceptos de geografía humana aplicados a Colombia, analizando la distribución de la población, los procesos migratorios internos y externos, y los fenómenos de urbanización y sus consecuencias sociales y ambientales.',

        ejesTematicos: [
          'Geografía humana: concepto, ramas y herramientas',
          'La población colombiana: distribución, densidad y crecimiento',
          'Migraciones internas en Colombia: causas y consecuencias',
          'La urbanización en Colombia: ciudades, problemas y oportunidades',
          'Problemas sociales y ambientales de las grandes ciudades colombianas'
        ],

        tiposPensamiento: ['Territorio'],

        preguntaProblema: '¿Cómo los procesos de migración y urbanización en Colombia han transformado el territorio, la población y las condiciones de vida, generando tanto oportunidades como nuevos problemas sociales y ambientales?',

        diagnostico: 'El 56% de los estudiantes no comprende los conceptos de densidad poblacional, migración y urbanización, ni establece relaciones entre estos procesos y los problemas sociales colombianos.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la distribución de la población colombiana, los procesos de migración interna y la urbanización, relacionándolos con las condiciones sociales y ambientales del territorio.',
          interpretacion: 'Reconoce las perspectivas de los migrantes y las comunidades receptoras frente a los procesos migratorios y de urbanización en Colombia.',
          pensamientoSistemico: 'Establece relaciones entre los procesos de desplazamiento forzado, la migración interna, la urbanización y los problemas sociales y ambientales de las ciudades colombianas.'
        },

        matrizReferencia: {
          componente: 'relaciones-espaciales-ambientales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Identifica y analiza los factores que determinan la distribución de la población en el territorio colombiano y los procesos migratorios.',
            'Establece relaciones entre la urbanización, el crecimiento de las ciudades colombianas y los problemas sociales y ambientales derivados.'
          ]
        },

        aprendizajesICFES: ['soc-s9-06', 'soc-s9-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe la distribución de la población colombiana e identifica las zonas de mayor y menor densidad.',
          'Explica las causas de las migraciones internas en Colombia: conflicto armado, búsqueda de oportunidades económicas.',
          'Describe el proceso de urbanización en Colombia y las principales ciudades receptoras de migración.',
          'Identifica los problemas sociales y ambientales asociados al crecimiento acelerado de las ciudades.',
          'Propone alternativas para mejorar las condiciones de vida en las ciudades colombianas.'
        ],

        estrategiasMetodologicas: [
          'Análisis de mapas de densidad poblacional de Colombia.',
          'Lectura y análisis de testimonios de personas desplazadas y migrantes internos.',
          'Estudio de caso: una ciudad colombiana y sus problemas de urbanización (Bogotá, Medellín, Barranquilla).',
          'Análisis de estadísticas del DANE sobre población, migración y urbanización.',
          'Construcción de pirámide de población colombiana y análisis de tendencias demográficas.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 7°',
          'Atlas de Colombia con mapas de distribución poblacional',
          'Estadísticas del DANE sobre población y ciudades (versión simplificada)',
          'Testimonios de migrantes internos (selección docente)',
          'Imágenes aéreas y fotografías de ciudades colombianas (crecimiento urbano)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica los conceptos de densidad de población, migración y urbanización.',
            'Describe la distribución de la población colombiana por regiones.',
            'Identifica las principales causas y consecuencias de la migración interna en Colombia.'
          ],
          hacer: [
            'Interpreta mapas de densidad poblacional de Colombia.',
            'Elabora un cuadro sobre causas y consecuencias de la migración interna.',
            'Analiza estadísticas sobre urbanización y crecimiento de ciudades.',
            'Propone alternativas de solución a problemas urbanos concretos.'
          ],
          ser: [
            'Muestra empatía hacia las personas en situación de desplazamiento y migración.',
            'Valora la diversidad cultural que resulta de los procesos migratorios.',
            'Asume actitudes de responsabilidad frente a los problemas ambientales urbanos.'
          ]
        },

        competenciaCiudadana: 'Comprende los procesos de migración y urbanización como fenómenos que transforman la sociedad colombiana, y asume actitudes de empatía, solidaridad y compromiso con la construcción de ciudades más justas, inclusivas y sostenibles.'
      },

      // ----------------------------------------------------------
      // GRADO 7 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y explico los derechos humanos, su historia y las instituciones encargadas de su protección a nivel nacional e internacional.',
          'Reconozco los mecanismos de participación ciudadana establecidos en la Constitución Política de Colombia para la protección de los derechos.',
          'Analizo situaciones de vulneración de derechos humanos y propongo alternativas de protección y defensa desde el ámbito escolar y comunitario.'
        ],

        dba: 'Comprende el concepto de derechos humanos, su historia y sus generaciones, identifica los mecanismos de participación y protección establecidos en la Constitución colombiana, y analiza situaciones cotidianas de vulneración y defensa de derechos.',

        ejesTematicos: [
          'Los derechos humanos: historia, concepto y generaciones',
          'La Constitución Política de Colombia y los derechos fundamentales',
          'Mecanismos de participación ciudadana: tutela, voto, referendo, consulta popular',
          'Instituciones de protección de derechos: Defensoría del Pueblo, Procuraduría, Personería',
          'Participación ciudadana juvenil: derechos y formas de participación de los jóvenes'
        ],

        tiposPensamiento: ['Ético-Político'],

        preguntaProblema: '¿Cómo los derechos humanos y los mecanismos de participación ciudadana establecidos en la Constitución de 1991 permiten a los colombianos defender su dignidad y construir una sociedad más justa?',

        diagnostico: 'El 61% de los estudiantes no identifica los derechos humanos por generaciones ni conoce los mecanismos de participación ciudadana para su protección en el contexto colombiano.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la historia y las generaciones de los derechos humanos, relacionándolos con los derechos fundamentales consagrados en la Constitución Política de Colombia.',
          interpretacion: 'Reconoce y compara los mecanismos de participación ciudadana disponibles en Colombia para la protección de los derechos, evaluando su alcance y limitaciones.',
          pensamientoSistemico: 'Establece relaciones entre la historia de las luchas por los derechos humanos, los mecanismos constitucionales de participación y las situaciones de vulneración de derechos en Colombia.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Reconoce y describe los derechos humanos y sus generaciones, relacionándolos con los derechos fundamentales de la Constitución colombiana.',
            'Identifica los mecanismos de participación ciudadana para la protección de derechos y evalúa su efectividad en casos concretos.'
          ]
        },

        aprendizajesICFES: ['soc-s9-02', 'soc-s9-05', 'soc-s9-09'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica el concepto de derechos humanos y describe las tres generaciones de derechos.',
          'Identifica los derechos fundamentales consagrados en la Constitución Política de Colombia.',
          'Describe los mecanismos de participación ciudadana: tutela, habeas corpus, derecho de petición, voto.',
          'Identifica las instituciones encargadas de la protección de derechos en Colombia.',
          'Analiza situaciones cotidianas de vulneración de derechos y propone el mecanismo de protección adecuado.'
        ],

        estrategiasMetodologicas: [
          'Análisis de casos reales de vulneración de derechos en Colombia e identificación del mecanismo de protección adecuado.',
          'Simulación: ejercicio de tutela escolar para defender un derecho vulnerado en el colegio.',
          'Lectura y análisis de la Declaración Universal de Derechos Humanos (versión adaptada).',
          'Debate: ¿Todos los derechos se respetan por igual en Colombia? Perspectivas y evidencias.',
          'Investigación: ¿qué hace la Defensoría del Pueblo y la Personería Municipal en tu ciudad?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 7°',
          'Constitución Política de Colombia 1991 (versión pedagógica)',
          'Declaración Universal de Derechos Humanos (versión adaptada para jóvenes)',
          'Casos de tutela seleccionados por el docente (lenguaje accesible)',
          'Infografías sobre las instituciones de protección de derechos en Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las generaciones de los derechos humanos.',
            'Identifica los mecanismos de participación ciudadana establecidos en la Constitución.',
            'Nombra las instituciones de protección de derechos en Colombia y sus funciones.'
          ],
          hacer: [
            'Analiza casos de vulneración de derechos e identifica el mecanismo de protección adecuado.',
            'Participa en la simulación de una tutela escolar.',
            'Elabora una infografía sobre los derechos humanos y sus generaciones.',
            'Argumenta sobre la importancia de los derechos humanos y la participación ciudadana.'
          ],
          ser: [
            'Valora los derechos humanos como fundamento de la dignidad y la convivencia.',
            'Muestra disposición para defender los derechos propios y ajenos.',
            'Asume compromisos concretos de participación ciudadana en su entorno escolar y comunitario.'
          ]
        },

        competenciaCiudadana: 'Comprende los derechos humanos como fundamento de la dignidad y la convivencia democrática, utiliza los mecanismos constitucionales de participación para defender los propios y los de los demás, y asume compromisos de ciudadanía activa y responsable.'
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
    objetivo: 'Desarrollar el pensamiento histórico y crítico mediante el análisis de la Revolución Industrial, el colonialismo, los derechos humanos y la geografía económica, articulando los procesos mundiales con la realidad colombiana y latinoamericana',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Explico el surgimiento y las consecuencias del imperialismo y la colonización en Asia, África y América Latina.',
          'Analizo la distribución desigual de los recursos naturales en el mundo y su relación con la geopolítica.',
          'Analizo las causas y consecuencias de conflictos sociales y políticos en Colombia y el mundo, y propongo alternativas de solución.'
        ],

        dba: 'Comprende el proceso de industrialización y colonialismo del siglo XIX, identificando causas, actores y consecuencias para los pueblos colonizados de Asia, África y América Latina.',

        ejesTematicos: [
          'Revolución Industrial: causas, etapas y consecuencias',
          'El capitalismo industrial y el surgimiento del proletariado',
          'El imperialismo y la colonización de Asia y África',
          'Consecuencias del colonialismo en los pueblos colonizados',
          'Geografía económica: distribución de recursos y riqueza'
        ],

        tiposPensamiento: ['Historia', 'Territorio', 'Ético-Político'],

        preguntaProblema: '¿Por qué la Revolución Industrial y el colonialismo del siglo XIX siguen siendo factores que explican las desigualdades económicas entre países ricos y países pobres en el mundo actual?',

        diagnostico: 'El 54% de los estudiantes no establece relaciones causales entre la Revolución Industrial y las desigualdades económicas actuales, ni identifica los mecanismos del colonialismo europeo.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica y usa los conceptos de industrialización, imperialismo y colonialismo para explicar los cambios sociales, económicos y políticos del siglo XIX.',
          interpretacion: 'Reconoce y compara las perspectivas de los colonizadores europeos y de los pueblos colonizados frente al proceso imperialista del siglo XIX.',
          pensamientoSistemico: 'Evalúa las causas y consecuencias del colonialismo, estableciendo relaciones entre los procesos históricos del siglo XIX y las desigualdades globales contemporáneas.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Comprende dimensiones espaciales y temporales del colonialismo y la Revolución Industrial como procesos interdependientes.',
            'Identifica y usa conceptos económicos y políticos para analizar el imperialismo europeo del siglo XIX.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-03'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Explica las causas económicas y sociales de la Revolución Industrial y sus consecuencias en la organización del trabajo.',
          'Describe el proceso de colonización de África y Asia por las potencias europeas, identificando las motivaciones imperialistas.',
          'Relaciona la distribución desigual de recursos naturales con los intereses coloniales del siglo XIX.',
          'Analiza las consecuencias del colonialismo para los pueblos colonizados (pérdida de soberanía, explotación de recursos, imposición cultural).',
          'Interpreta mapas históricos del reparto colonial del mundo.'
        ],

        estrategiasMetodologicas: [
          'Análisis de fuentes primarias: fragmentos de discursos imperialistas y testimonios de pueblos colonizados.',
          'Trabajo con mapas históricos del reparto colonial de África y Asia (Conferencia de Berlín, 1884).',
          'Debate: ¿El colonialismo fue un proceso de "civilización" o de explotación? Argumentación desde distintas perspectivas.',
          'Línea de tiempo colaborativa sobre los hitos de la Revolución Industrial y el imperialismo.',
          'Análisis de imágenes y caricaturas políticas de la época imperialista.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 8° (editorial Norma o Santillana)',
          'Mapas históricos del reparto colonial de África y Asia',
          'Fuentes primarias seleccionadas: discursos y testimonios de la época',
          'Documental: "Colonialismo: historia y consecuencias" (YouTube)',
          'Atlas geográfico mundial'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las causas y etapas de la Revolución Industrial.',
            'Define los conceptos de imperialismo, colonialismo y colonización.',
            'Describe los mecanismos de explotación colonial en África y Asia.'
          ],
          hacer: [
            'Elabora una línea de tiempo sobre la Revolución Industrial y el imperialismo.',
            'Interpreta mapas históricos del reparto colonial del mundo.',
            'Argumenta desde múltiples perspectivas históricas sobre el colonialismo.',
            'Establece relaciones causales entre procesos históricos del siglo XIX y desigualdades actuales.'
          ],
          ser: [
            'Reconoce la dignidad de los pueblos colonizados y rechaza toda forma de racismo.',
            'Participa con respeto en debates que involucran perspectivas históricas divergentes.',
            'Muestra actitud crítica frente a los discursos que justifican la dominación de unos pueblos sobre otros.'
          ]
        },

        competenciaCiudadana: 'Reconoce que las desigualdades entre pueblos y naciones tienen raíces históricas concretas (colonialismo, imperialismo) y asume una posición de defensa de la dignidad y soberanía de todos los pueblos del mundo.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo el proceso de formación de los estados nacionales latinoamericanos y los relaciono con el contexto mundial del siglo XIX.',
          'Explico los mecanismos constitucionales de protección de los derechos fundamentales (tutela, habeas corpus, acción popular).',
          'Analizo las causas y consecuencias de conflictos sociales y políticos en Colombia y el mundo, y propongo alternativas de solución.'
        ],

        dba: 'Comprende el proceso de consolidación de los Estados latinoamericanos en el siglo XIX y las luchas sociales por la expansión de los derechos humanos, relacionándolos con la realidad colombiana.',

        ejesTematicos: [
          'Formación de los Estados nacionales en América Latina (siglo XIX)',
          'La Colombia del siglo XIX: guerras civiles y Regeneración',
          'Los derechos humanos: historia y generaciones',
          'Mecanismos de protección de derechos en Colombia (tutela, habeas corpus)',
          'Geografía de la desigualdad: urbanización y exclusión social'
        ],

        tiposPensamiento: ['Historia', 'Ético-Político', 'Territorio'],

        preguntaProblema: '¿Cómo la historia política del siglo XIX en Colombia y América Latina explica la fragilidad de nuestras democracias y la importancia de los mecanismos de protección de derechos?',

        diagnostico: 'El 49% de los estudiantes no identifica los mecanismos constitucionales de protección de derechos ni comprende el proceso de consolidación de los Estados latinoamericanos en el siglo XIX.',

        competenciasICFES: {
          pensamientoSocial: 'Describe el proceso de formación del Estado colombiano en el siglo XIX, relacionando las guerras civiles, la Constitución de 1886 y la Regeneración con el contexto latinoamericano.',
          interpretacion: 'Reconoce las perspectivas de diferentes actores (élites, pueblo, iglesia, liberales, conservadores) en la construcción del Estado-nación colombiano.',
          pensamientoSistemico: 'Establece relaciones entre las luchas históricas por los derechos y los mecanismos actuales de protección constitucional en Colombia, evaluando su efectividad.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Reconoce y compara perspectivas de diferentes actores sociales y políticos en la consolidación del Estado colombiano del siglo XIX.',
            'Analiza la vigencia de los derechos fundamentales, los mecanismos de protección y las instituciones relacionadas en Colombia.'
          ]
        },

        aprendizajesICFES: ['soc-s9-02', 'soc-s9-05'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Explica el proceso de consolidación del Estado colombiano en el siglo XIX, identificando los principales conflictos y actores.',
          'Describe las diferencias entre el proyecto liberal y el proyecto conservador en la Colombia del siglo XIX.',
          'Explica el surgimiento histórico de los derechos humanos y sus generaciones (civiles-políticos, económicos-sociales, solidaridad).',
          'Identifica y explica los mecanismos de protección de derechos en Colombia: tutela, habeas corpus, acción popular.',
          'Relaciona los procesos de urbanización con la exclusión social y las desigualdades territoriales en Colombia.'
        ],

        estrategiasMetodologicas: [
          'Estudio de caso: una guerra civil colombiana del siglo XIX (causas, actores, consecuencias).',
          'Simulación: ¿cuándo y cómo usar la tutela? Casos prácticos de vulneración de derechos.',
          'Análisis comparativo de constituciones colombianas (1863, 1886, 1991): qué derechos incluyen y cuáles excluyen.',
          'Mapa de conflictos: ubicar las guerras civiles colombianas del siglo XIX en el espacio y el tiempo.',
          'Lectura y análisis de sentencias de tutela sobre casos de discriminación o vulneración de derechos.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 8°',
          'Constitución Política de Colombia 1991 (versión pedagógica)',
          'Casos prácticos de tutela seleccionados por el docente',
          'Mapas históricos de Colombia en el siglo XIX',
          'Infografías sobre las generaciones de derechos humanos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el proceso de formación del Estado colombiano en el siglo XIX.',
            'Explica el concepto de derechos humanos y sus generaciones.',
            'Define los mecanismos constitucionales de protección de derechos (tutela, habeas corpus, acción popular).'
          ],
          hacer: [
            'Elabora un cuadro comparativo entre el proyecto liberal y el conservador en la Colombia del siglo XIX.',
            'Resuelve casos prácticos identificando cuál mecanismo de protección de derechos es el más adecuado.',
            'Analiza fuentes históricas sobre la consolidación del Estado colombiano.',
            'Interpreta mapas históricos de las guerras civiles colombianas.'
          ],
          ser: [
            'Valora los derechos humanos como conquistas históricas que deben ser defendidas.',
            'Muestra disposición para comprender los conflictos políticos desde múltiples perspectivas.',
            'Asume compromisos concretos de defensa de los derechos humanos en su entorno.'
          ]
        },

        competenciaCiudadana: 'Comprende que los derechos son conquistas históricas y utiliza los mecanismos constitucionales disponibles para defender los propios y los de los demás, especialmente los de las personas en situación de vulnerabilidad.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Explico el surgimiento de los movimientos sociales del siglo XX (feminismo, movimiento obrero, derechos civiles) y su impacto.',
          'Analizo las causas y consecuencias de conflictos sociales y políticos en Colombia y el mundo, y propongo alternativas de solución.',
          'Reconozco la importancia de la justicia transicional y la memoria histórica para la construcción de paz en Colombia.'
        ],

        dba: 'Analiza los movimientos sociales del siglo XX (obrero, feminista, derechos civiles) como procesos de ampliación de derechos, relacionándolos con las luchas por la igualdad en Colombia.',

        ejesTematicos: [
          'El movimiento obrero y el socialismo: origen y desarrollo',
          'El feminismo y la lucha por los derechos de la mujer',
          'El movimiento de derechos civiles en Estados Unidos',
          'Los movimientos sociales en Colombia: campesinos, indígenas, mujeres',
          'Geografía social: mapas de desigualdad de género y étnica'
        ],

        tiposPensamiento: ['Historia', 'Ético-Político', 'Territorio'],

        preguntaProblema: '¿Cómo los movimientos sociales del siglo XX lograron ampliar los derechos de grupos excluidos, y cuáles de esas luchas siguen vigentes en Colombia?',

        diagnostico: 'El 51% de los estudiantes no relaciona los movimientos sociales del siglo XX con la ampliación de derechos ni comprende la continuidad de esas luchas en el contexto colombiano actual.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica los movimientos sociales del siglo XX, sus demandas, estrategias y logros en la ampliación de derechos para grupos históricamente excluidos.',
          interpretacion: 'Analiza los movimientos sociales desde las perspectivas de los diferentes actores: organizaciones obreras, mujeres, comunidades afroamericanas e indígenas.',
          pensamientoSistemico: 'Establece relaciones entre las condiciones estructurales de desigualdad y el surgimiento de movimientos sociales, reconociendo la continuidad de estas luchas en el presente.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Identifica los intereses y expectativas de diferentes grupos sociales frente a las desigualdades estructurales del siglo XX.',
            'Analiza factores que generan desigualdad económica, social, política y cultural, y los relaciona con el surgimiento de movimientos sociales.'
          ]
        },

        aprendizajesICFES: ['soc-s9-05', 'soc-s9-09'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica el origen del movimiento obrero, sus demandas y los logros alcanzados en materia de derechos laborales.',
          'Describe las etapas del feminismo y los derechos conquistados por las mujeres en el siglo XX.',
          'Analiza el movimiento de derechos civiles en Estados Unidos (Martin Luther King, Rosa Parks) y sus logros.',
          'Identifica movimientos sociales colombianos (FARC, CRIC, organizaciones de mujeres) y sus demandas históricas.',
          'Propone acciones concretas para combatir la discriminación de género y étnica en su entorno.'
        ],

        estrategiasMetodologicas: [
          'Estudio de caso por grupos: cada grupo investiga un movimiento social (obrero, feminista, derechos civiles, indígena colombiano).',
          'Análisis de discursos históricos: "Tengo un sueño" (Luther King), manifiestos feministas.',
          'Debate: ¿los movimientos sociales son necesarios para lograr cambios? Argumentación con ejemplos históricos.',
          'Mapa de movimientos sociales en Colombia: ubicación geográfica y demandas.',
          'Galería de líderes sociales: quiénes fueron, qué lograron, qué riesgos asumieron.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 8°',
          'Fragmentos de discursos de líderes de movimientos sociales (Martin Luther King, Rosa Parks, Rigoberta Menchú)',
          'Documental sobre el movimiento obrero y el feminismo (selección del docente)',
          'Infografías sobre igualdad de género e indicadores de discriminación étnica en Colombia',
          'Noticias recientes sobre movimientos sociales en Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el movimiento obrero, el feminismo y el movimiento de derechos civiles: causas, demandas y logros.',
            'Explica el concepto de discriminación sistémica y sus formas (racial, de género, étnica, socioeconómica).',
            'Identifica movimientos sociales colombianos y sus reivindicaciones históricas.'
          ],
          hacer: [
            'Investiga y presenta un movimiento social del siglo XX identificando sus causas, estrategias y logros.',
            'Analiza discursos históricos de líderes sociales identificando argumentos y propósitos.',
            'Propone acciones concretas para combatir la discriminación en su entorno escolar y comunitario.',
            'Elabora un mapa de movimientos sociales en Colombia.'
          ],
          ser: [
            'Rechaza toda forma de discriminación racial, de género y étnica con argumentos concretos.',
            'Valora el papel de los movimientos sociales en la ampliación de derechos para todos.',
            'Muestra empatía hacia grupos históricamente excluidos y comparte sus luchas por la igualdad.'
          ]
        },

        competenciaCiudadana: 'Reconoce y valora el papel de los movimientos sociales en la conquista de derechos, asume compromisos concretos contra la discriminación y participa activamente en la defensa de la igualdad en su entorno.'
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo el conflicto armado colombiano: sus actores, causas históricas y consecuencias sociales.',
          'Explico los fenómenos de urbanización en el mundo y en Colombia y sus consecuencias ambientales y sociales.',
          'Relaciono el modelo de desarrollo económico predominante con el deterioro ambiental.'
        ],

        dba: 'Comprende el modelo de desarrollo económico predominante y sus consecuencias ambientales y sociales, analizando los problemas de la urbanización, la geografía económica y el deterioro del medio ambiente.',

        ejesTematicos: [
          'Geografía económica: distribución de la riqueza y el comercio mundial',
          'Urbanización en el mundo y en Colombia: causas y consecuencias',
          'Problemas ambientales globales: cambio climático y pérdida de biodiversidad',
          'El desarrollo económico de Colombia: regiones y desigualdades',
          'Proyecto integrador: análisis de la realidad local'
        ],

        tiposPensamiento: ['Territorio', 'Historia', 'Ético-Político'],

        preguntaProblema: '¿Cómo el modelo de desarrollo económico global genera desigualdades territoriales y deterioro ambiental, y qué alternativas existen para un desarrollo más justo y sostenible?',

        diagnostico: 'El 53% de los estudiantes no relaciona el modelo económico dominante con el deterioro ambiental ni interpreta críticamente los mapas de distribución de la riqueza y los recursos naturales.',

        competenciasICFES: {
          pensamientoSocial: 'Contextualiza temporal y espacialmente las desigualdades económicas y los problemas ambientales globales, relacionándolos con el modelo de desarrollo predominante.',
          interpretacion: 'Evalúa las causas y consecuencias del deterioro ambiental desde las perspectivas de comunidades, Estados y empresas con intereses distintos.',
          pensamientoSistemico: 'Establece relaciones entre el modelo de desarrollo económico, la urbanización, las desigualdades territoriales y el deterioro ambiental como fenómenos interdependientes.'
        },

        matrizReferencia: {
          componente: 'territorio',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Reconoce las causas y consecuencias de fenómenos ambientales y los relaciona con el modelo económico predominante.',
            'Identifica los intereses de diferentes grupos sociales (empresas, comunidades, Estado) frente a los problemas ambientales y de desarrollo.'
          ]
        },

        aprendizajesICFES: ['soc-s9-03', 'soc-s9-07', 'soc-s9-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Interpreta mapas de distribución de la riqueza, el comercio y los recursos naturales en el mundo.',
          'Explica el proceso de urbanización en Colombia, identificando causas (conflicto, pobreza rural) y consecuencias (informalidad, exclusión).',
          'Relaciona el modelo de desarrollo extractivista con el deterioro ambiental en Colombia.',
          'Analiza problemas ambientales globales (cambio climático, deforestación) y sus causas económicas.',
          'Desarrolla un proyecto integrador sobre la realidad económica y ambiental de su región.'
        ],

        estrategiasMetodologicas: [
          'Análisis de mapas temáticos: distribución del PIB, el comercio y los recursos naturales en el mundo.',
          'Estudio de caso local: cómo la urbanización ha transformado el municipio o la región.',
          'Aprendizaje basado en proyectos: investigación sobre un problema ambiental local y propuesta de solución.',
          'Debate: ¿el crecimiento económico es compatible con la sostenibilidad ambiental?',
          'Presentación final del proyecto integrador con análisis de la realidad local.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 8°',
          'Atlas geográfico mundial y mapas temáticos de Colombia',
          'Informe del PNUD sobre desarrollo humano (fragmentos seleccionados)',
          'Noticias sobre problemas ambientales locales y nacionales',
          'Hojas de cálculo para análisis de datos económicos y ambientales'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el modelo de desarrollo económico predominante y sus características principales.',
            'Explica las causas y consecuencias de la urbanización en Colombia.',
            'Define los principales problemas ambientales globales y sus causas económicas.'
          ],
          hacer: [
            'Interpreta mapas temáticos de distribución de la riqueza, el comercio y el deterioro ambiental.',
            'Desarrolla un proyecto de investigación sobre un problema económico o ambiental local.',
            'Elabora argumentos sustentados en evidencia sobre la relación entre desarrollo económico y deterioro ambiental.',
            'Presenta y sustenta el proyecto integrador ante el grupo.'
          ],
          ser: [
            'Asume compromisos concretos de responsabilidad ambiental en su vida cotidiana.',
            'Valora la importancia de los territorios y comunidades afectados por el modelo extractivista.',
            'Demuestra responsabilidad y compromiso en el desarrollo del proyecto integrador.'
          ]
        },

        competenciaCiudadana: 'Comprende las consecuencias del modelo de desarrollo económico sobre el medio ambiente y las comunidades, y propone y lidera acciones orientadas al desarrollo sostenible y la justicia ambiental en su entorno.'
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
    objetivo: 'Desarrollar el pensamiento histórico crítico mediante el análisis de las guerras mundiales, la Guerra Fría, los movimientos sociales del siglo XX y el conflicto colombiano, articulando la historia global con la realidad política y social de Colombia',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo causas y consecuencias de las guerras mundiales del siglo XX y su impacto en el orden global.',
          'Analizo las causas y consecuencias de conflictos sociales y políticos en Colombia y el mundo, y propongo alternativas de solución.',
          'Analizo los procesos de integración y fragmentación territorial en distintas regiones del mundo.'
        ],

        dba: 'Comprende las causas, el desarrollo y las consecuencias de las dos guerras mundiales del siglo XX, analizando su impacto en el orden internacional y en los procesos de construcción de paz.',

        ejesTematicos: [
          'La Primera Guerra Mundial: causas, actores y consecuencias',
          'El período de entreguerras: crisis del capitalismo y ascenso del totalitarismo',
          'La Segunda Guerra Mundial: causas, Holocausto y consecuencias',
          'El nuevo orden mundial: ONU y Declaración Universal de Derechos Humanos',
          'Geopolítica: reconfiguración del mapa mundial tras las guerras'
        ],

        tiposPensamiento: ['Historia', 'Territorio', 'Ético-Político'],

        preguntaProblema: '¿Qué condiciones políticas, económicas y sociales hicieron posibles las guerras mundiales del siglo XX y qué lecciones nos dejan para la construcción de paz hoy?',

        diagnostico: 'El 55% de los estudiantes no establece relaciones causales entre las guerras mundiales y no comprende el Holocausto como consecuencia del totalitarismo y el racismo institucionalizado.',

        competenciasICFES: {
          pensamientoSocial: 'Analiza las causas y consecuencias de las guerras mundiales, identificando actores, intereses y el impacto del nuevo orden internacional surgido tras 1945.',
          interpretacion: 'Reconoce y compara las perspectivas de los distintos actores involucrados en las guerras mundiales, incluyendo las víctimas del Holocausto y los pueblos colonizados.',
          pensamientoSistemico: 'Establece relaciones entre la crisis del capitalismo, el surgimiento del totalitarismo y el estallido de las guerras mundiales como fenómenos interconectados.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Contextualiza temporal y espacialmente las guerras mundiales como procesos que transformaron radicalmente el orden político internacional.',
            'Comprende el surgimiento de la ONU y la Declaración Universal de Derechos Humanos como respuestas históricas a las atrocidades de la Segunda Guerra Mundial.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-05'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Explica las causas de la Primera Guerra Mundial (nacionalismo, imperialismo, alianzas, asesinato de Sarajevo) y sus consecuencias.',
          'Analiza el período de entreguerras: crisis de 1929, ascenso del fascismo y el nazismo.',
          'Describe las causas, el desarrollo y las consecuencias de la Segunda Guerra Mundial.',
          'Explica el Holocausto como resultado del antisemitismo y el totalitarismo nazi.',
          'Comprende el surgimiento de la ONU y la Declaración Universal de Derechos Humanos como respuesta a las atrocidades de la guerra.'
        ],

        estrategiasMetodologicas: [
          'Análisis de fuentes primarias: fragmentos del Diario de Ana Frank, testimonios de sobrevivientes del Holocausto.',
          'Lectura de mapas geopolíticos antes y después de las guerras mundiales.',
          'Debate: ¿por qué fue posible el Holocausto? Responsabilidades individuales y colectivas.',
          'Línea de tiempo de la primera mitad del siglo XX (1900-1945).',
          'Análisis de propaganda política de los regímenes totalitarios.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 9°',
          'Fragmentos del Diario de Ana Frank (selección pedagógica)',
          'Mapas históricos de Europa antes y después de las guerras mundiales',
          'Documental sobre el Holocausto (fragmentos seleccionados y apropiados para el grado)',
          'Declaración Universal de Derechos Humanos (texto completo)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las causas de las dos guerras mundiales y sus principales consecuencias.',
            'Describe el período de entreguerras y el ascenso del totalitarismo.',
            'Define el Holocausto y explica sus causas históricas (antisemitismo, racismo, totalitarismo).'
          ],
          hacer: [
            'Elabora una línea de tiempo de la primera mitad del siglo XX.',
            'Interpreta mapas geopolíticos de Europa antes y después de las guerras mundiales.',
            'Analiza fuentes primarias sobre el Holocausto con actitud de memoria y respeto.',
            'Argumenta sobre las lecciones que dejan las guerras mundiales para la construcción de paz.'
          ],
          ser: [
            'Rechaza el totalitarismo, el racismo y el antisemitismo como ideologías contrarias a la dignidad humana.',
            'Valora la memoria histórica como herramienta para la no repetición de atrocidades.',
            'Muestra empatía hacia las víctimas de las guerras mundiales y el Holocausto.'
          ]
        },

        competenciaCiudadana: 'Comprende el Holocausto y las guerras mundiales como advertencias históricas sobre los peligros del totalitarismo y el racismo, y asume el compromiso de defender la democracia y los derechos humanos en todo momento.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo causas y consecuencias de las guerras mundiales del siglo XX y su impacto en el orden global.',
          'Evalúo críticamente las decisiones de las instituciones del Estado colombiano y su impacto en la sociedad.',
          'Analizo los procesos de integración y fragmentación territorial en distintas regiones del mundo.'
        ],

        dba: 'Comprende la Guerra Fría como conflicto geopolítico global, analizando sus causas, manifestaciones regionales y consecuencias para América Latina y Colombia, incluyendo los procesos de descolonización.',

        ejesTematicos: [
          'La Guerra Fría: bipolaridad, carrera armamentista y espacial',
          'Conflictos regionales de la Guerra Fría: Corea, Vietnam, Cuba, Angola',
          'La descolonización de África y Asia',
          'América Latina en la Guerra Fría: dictaduras, movimientos de liberación',
          'Colombia en la segunda mitad del siglo XX: Frente Nacional y sus consecuencias'
        ],

        tiposPensamiento: ['Historia', 'Territorio', 'Ético-Político'],

        preguntaProblema: '¿Cómo la Guerra Fría condicionó el desarrollo político de América Latina y Colombia, y de qué manera sus consecuencias siguen presentes en nuestra realidad?',

        diagnostico: 'El 52% de los estudiantes no comprende la lógica bipolar de la Guerra Fría ni su impacto en los conflictos latinoamericanos y en la realidad política colombiana de la segunda mitad del siglo XX.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la Guerra Fría como sistema de rivalidad global entre bloques, identificando sus manifestaciones en conflictos regionales y en la política latinoamericana.',
          interpretacion: 'Analiza la Guerra Fría desde las perspectivas de los países en conflicto, los movimientos de liberación nacional y las poblaciones afectadas por los conflictos regionales.',
          pensamientoSistemico: 'Establece relaciones entre la lógica de la Guerra Fría, el apoyo a dictaduras en América Latina y el surgimiento de movimientos guerrilleros, incluyendo en Colombia.'
        },

        matrizReferencia: {
          componente: 'historia',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Reconoce y compara perspectivas de diferentes actores (EEUU, URSS, movimientos de liberación, poblaciones civiles) en los conflictos de la Guerra Fría.',
            'Evalúa cómo los intereses geopolíticos de las superpotencias condicionaron el desarrollo político de América Latina.'
          ]
        },

        aprendizajesICFES: ['soc-s9-01', 'soc-s9-04'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Explica la lógica de la Guerra Fría: bipolaridad, carrera armamentista, ideología y conflictos por delegación.',
          'Describe conflictos regionales de la Guerra Fría (Vietnam, Cuba, Angola) identificando el papel de las superpotencias.',
          'Analiza el proceso de descolonización de África y Asia y el surgimiento del movimiento de No Alineados.',
          'Describe el impacto de la Guerra Fría en América Latina: dictaduras militares, movimientos guerrilleros, Doctrina Monroe.',
          'Explica el Frente Nacional en Colombia y sus consecuencias para la democracia y el surgimiento de grupos armados.'
        ],

        estrategiasMetodologicas: [
          'Análisis de mapas geopolíticos: bloques de la Guerra Fría y zonas de conflicto.',
          'Estudio de caso por grupos: conflictos regionales (Vietnam, Cuba, Chile, Nicaragua).',
          'Debate: ¿el Frente Nacional fue un avance o un retroceso para la democracia en Colombia?',
          'Línea de tiempo de la Guerra Fría y la descolonización (1945-1991).',
          'Análisis de propaganda de la Guerra Fría: afiche del american way of life vs. propaganda soviética.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 9°',
          'Mapas geopolíticos de la Guerra Fría',
          'Documentales sobre la Crisis de los Misiles, la Revolución Cubana (fragmentos)',
          'Textos sobre el Frente Nacional en Colombia',
          'Propaganda seleccionada de la Guerra Fría (análisis crítico)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las causas, la lógica y las manifestaciones de la Guerra Fría.',
            'Describe el proceso de descolonización y sus principales líderes (Nkrumah, Nasser, Ho Chi Minh).',
            'Explica el Frente Nacional y sus consecuencias políticas para Colombia.'
          ],
          hacer: [
            'Elabora una línea de tiempo de la Guerra Fría y la descolonización.',
            'Analiza un conflicto regional de la Guerra Fría desde las perspectivas de los distintos actores.',
            'Interpreta mapas geopolíticos de bloques de poder y zonas de conflicto.',
            'Argumenta sobre el impacto de la Guerra Fría en la democracia latinoamericana.'
          ],
          ser: [
            'Rechaza las formas de intervención externa que violan la soberanía de los pueblos.',
            'Muestra pensamiento crítico frente a las narrativas oficiales sobre la Guerra Fría.',
            'Valora la memoria histórica de las víctimas de las dictaduras latinoamericanas.'
          ]
        },

        competenciaCiudadana: 'Comprende cómo los intereses de potencias externas han condicionado la política interna de Colombia y América Latina, y asume una posición crítica y autónoma frente a las relaciones de poder en el sistema internacional.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Explico el surgimiento de los movimientos sociales del siglo XX (feminismo, movimiento obrero, derechos civiles) y su impacto.',
          'Describo los principales hitos del proceso de construcción de la nación colombiana en los siglos XIX y XX.',
          'Analizo la relación entre desigualdad económica, exclusión social y violación de derechos humanos.'
        ],

        dba: 'Analiza los movimientos sociales y políticos en Colombia durante el siglo XX, comprendiendo sus causas, actores y consecuencias en el marco de la historia política nacional.',

        ejesTematicos: [
          'Los movimientos populares en Colombia: el 9 de abril de 1948 y sus consecuencias',
          'La Violencia en Colombia (1948-1958): causas, actores y consecuencias',
          'El narcotráfico y su impacto en la sociedad y el Estado colombiano',
          'Movimientos sociales colombianos: indígenas, afrocolombianos, mujeres',
          'Geografía del conflicto: territorios más afectados por la violencia en Colombia'
        ],

        tiposPensamiento: ['Historia', 'Ético-Político', 'Territorio'],

        preguntaProblema: '¿Cómo la historia política colombiana del siglo XX (La Violencia, el Frente Nacional, el narcotráfico) explica las raíces del conflicto armado y las desigualdades que persisten hoy?',

        diagnostico: 'El 58% de los estudiantes no comprende la relación entre La Violencia de mediados del siglo XX, el narcotráfico y el surgimiento del conflicto armado colombiano como fenómenos históricamente conectados.',

        competenciasICFES: {
          pensamientoSocial: 'Describe los principales hitos de la historia política colombiana del siglo XX (9 de abril, La Violencia, narcotráfico, surgimiento de grupos armados), identificando causas y consecuencias.',
          interpretacion: 'Analiza La Violencia y el conflicto colombiano desde las perspectivas de diferentes actores: víctimas, combatientes, élites políticas y comunidades afectadas.',
          pensamientoSistemico: 'Establece relaciones entre la desigualdad económica, la exclusión política y el surgimiento de movimientos armados en Colombia durante el siglo XX.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Analiza factores que generan desigualdad económica, social y política en Colombia y los relaciona con el surgimiento de conflictos armados.',
            'Reconoce las causas y consecuencias del conflicto colombiano y su relación con otros fenómenos históricos nacionales.'
          ]
        },

        aprendizajesICFES: ['soc-s9-06', 'soc-s9-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica el 9 de abril de 1948 y sus consecuencias para la política y la sociedad colombiana.',
          'Describe el período de La Violencia (1948-1958): causas políticas, actores y consecuencias humanitarias.',
          'Analiza el surgimiento y el impacto del narcotráfico en la sociedad, el Estado y los territorios colombianos.',
          'Identifica movimientos sociales colombianos y sus demandas históricas.',
          'Elabora argumentos sustentados sobre las causas históricas del conflicto colombiano.'
        ],

        estrategiasMetodologicas: [
          'Análisis del informe del Centro Nacional de Memoria Histórica: "¡Basta Ya!" (fragmentos seleccionados).',
          'Mapa del conflicto: regiones más afectadas por La Violencia y el conflicto armado en Colombia.',
          'Estudio de caso: el impacto del narcotráfico en una región colombiana específica.',
          'Debate: ¿cuáles son las causas profundas del conflicto colombiano? Argumentación con evidencia histórica.',
          'Testimonios de víctimas: análisis de relatos del conflicto armado (con sensibilidad pedagógica).'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 9°',
          'Fragmentos del informe "¡Basta Ya!" del CNMH (selección pedagógica)',
          'Mapas del conflicto armado colombiano (CNMH, UARIV)',
          'Noticias y reportajes sobre el impacto del narcotráfico en Colombia',
          'Testimonios seleccionados de víctimas del conflicto (con enfoque reparador)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las causas y consecuencias del 9 de abril y La Violencia en Colombia.',
            'Describe el surgimiento y el impacto del narcotráfico en la sociedad y el Estado colombiano.',
            'Identifica movimientos sociales colombianos y sus demandas históricas.'
          ],
          hacer: [
            'Elabora una línea de tiempo de los principales hitos de la historia política colombiana del siglo XX.',
            'Analiza el informe "¡Basta Ya!" para identificar causas y consecuencias del conflicto.',
            'Construye argumentos sustentados en evidencia histórica sobre las causas del conflicto colombiano.',
            'Interpreta mapas del conflicto armado colombiano.'
          ],
          ser: [
            'Valora la memoria de las víctimas del conflicto colombiano con actitud de respeto y reconocimiento.',
            'Asume compromisos concretos con la construcción de paz desde su entorno.',
            'Rechaza toda forma de justificación de la violencia como solución a los conflictos políticos.'
          ]
        },

        competenciaCiudadana: 'Comprende las raíces históricas del conflicto colombiano desde la perspectiva de las víctimas y asume compromisos concretos con la memoria, la verdad, la justicia y la no repetición.'
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo el conflicto armado colombiano: sus actores, causas históricas y consecuencias sociales.',
          'Reconozco la importancia de la justicia transicional y la memoria histórica para la construcción de paz en Colombia.',
          'Reconozco la importancia de la cultura de paz, la reconciliación y la no violencia como fundamentos de la convivencia.'
        ],

        dba: 'Comprende el proceso de construcción de paz en Colombia, analizando los acuerdos con las FARC-EP, los mecanismos de justicia transicional y los retos de la reconciliación nacional.',

        ejesTematicos: [
          'El conflicto armado colombiano: actores, regiones y consecuencias humanitarias',
          'El proceso de paz y los Acuerdos de La Habana (2016)',
          'Justicia transicional: verdad, justicia, reparación y no repetición',
          'La implementación de los acuerdos: avances y obstáculos',
          'Proyecto integrador: propuestas para la construcción de paz local'
        ],

        tiposPensamiento: ['Ético-Político', 'Historia', 'Territorio'],

        preguntaProblema: '¿Qué significa construir paz en Colombia después de más de 50 años de conflicto armado, y cuáles son los principales retos para la reconciliación nacional y la no repetición?',

        diagnostico: 'El 50% de los estudiantes no comprende los mecanismos de justicia transicional ni los retos de la implementación de los Acuerdos de Paz, y no relaciona el conflicto con sus consecuencias humanitarias concretas.',

        competenciasICFES: {
          pensamientoSocial: 'Comprende el proceso de paz colombiano, identificando los actores del conflicto, los contenidos de los acuerdos y los mecanismos de justicia transicional establecidos.',
          interpretacion: 'Analiza el proceso de paz desde las perspectivas de las víctimas, las comunidades, los excombatientes, el Estado y la sociedad civil, reconociendo tensiones y expectativas diversas.',
          pensamientoSistemico: 'Evalúa los avances y obstáculos de la implementación de los Acuerdos de Paz, estableciendo relaciones entre el conflicto, la desigualdad y los retos de la reconciliación.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Analiza el proceso de paz colombiano desde la perspectiva de las víctimas y la sociedad civil, reconociendo los mecanismos de justicia transicional.',
            'Evalúa los acuerdos de paz y los retos de implementación desde perspectivas de diferentes sectores de la sociedad colombiana.'
          ]
        },

        aprendizajesICFES: ['soc-s9-06', 'soc-s9-07', 'soc-s9-09'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe el conflicto armado colombiano: actores (FARC, ELN, paramilitares, Estado), causas y consecuencias humanitarias.',
          'Explica los puntos principales de los Acuerdos de La Habana (2016).',
          'Describe los mecanismos de la justicia transicional: JEP, Comisión de la Verdad, garantías de no repetición.',
          'Evalúa los avances y obstáculos de la implementación del proceso de paz en Colombia.',
          'Propone acciones concretas para contribuir a la construcción de paz desde su entorno.'
        ],

        estrategiasMetodologicas: [
          'Análisis de los puntos de los Acuerdos de La Habana (versión pedagógica).',
          'Estudio de caso: una región de Colombia afectada por el conflicto y los avances de paz.',
          'Debate: ¿fue justo el proceso de paz con las FARC? Argumentación desde distintas perspectivas.',
          'Aprendizaje basado en proyectos: propuesta de acción para la construcción de paz local.',
          'Presentación final del proyecto integrador: ¿qué podemos hacer desde nuestra comunidad para construir paz?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 9°',
          'Resumen pedagógico de los Acuerdos de La Habana',
          'Informes de la Comisión de la Verdad (fragmentos seleccionados)',
          'Noticias sobre el proceso de paz y la JEP',
          'Testimonios de excombatientes y víctimas en proceso de reconciliación'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el conflicto armado colombiano: actores, causas y consecuencias humanitarias.',
            'Explica los puntos principales de los Acuerdos de La Habana y los mecanismos de justicia transicional.',
            'Define los conceptos de memoria histórica, justicia transicional y reconciliación.'
          ],
          hacer: [
            'Analiza los Acuerdos de La Habana identificando los temas que aborda y los compromisos asumidos.',
            'Evalúa los avances y obstáculos de la implementación del proceso de paz con evidencia concreta.',
            'Desarrolla y presenta un proyecto de acción para la construcción de paz en su comunidad.',
            'Analiza el conflicto colombiano desde la perspectiva de las víctimas y la sociedad civil.'
          ],
          ser: [
            'Demuestra empatía y solidaridad hacia las víctimas del conflicto armado colombiano.',
            'Asume compromisos concretos con la construcción de paz, la memoria y la no repetición.',
            'Rechaza toda forma de violencia como solución a los conflictos sociales y políticos.'
          ]
        },

        competenciaCiudadana: 'Comprende los retos de la construcción de paz en Colombia desde la perspectiva de las víctimas, lidera o participa en iniciativas de paz en su entorno y asume el compromiso de la no violencia y la reconciliación como valores fundamentales.'
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
    objetivo: 'Desarrollar el pensamiento político crítico mediante el análisis del Estado, la democracia colombiana, la Constitución de 1991, los sistemas económicos y la geopolítica contemporánea, formando ciudadanos capaces de comprender y transformar su realidad política y social',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo críticamente el funcionamiento del Estado colombiano, sus instituciones y los mecanismos de control democrático.',
          'Evalúo las políticas públicas en Colombia desde criterios de justicia, equidad e inclusión.',
          'Reconozco contribuciones de intelectuales, artistas y movimientos sociales latinoamericanos al pensamiento universal.'
        ],

        dba: 'Comprende la estructura y el funcionamiento del Estado colombiano desde la Constitución de 1991, analizando las ramas del poder, los organismos de control y los mecanismos de participación ciudadana.',

        ejesTematicos: [
          'El Estado: concepto, teorías y formas de organización',
          'El Estado colombiano: Constitución de 1991 y Estado Social de Derecho',
          'Las ramas del poder público y los organismos de control',
          'Mecanismos de participación ciudadana en Colombia',
          'El gobierno local: municipio, departamento y sus funciones'
        ],

        tiposPensamiento: ['Ético-Político', 'Historia', 'Territorio'],

        preguntaProblema: '¿En qué medida el Estado colombiano establecido por la Constitución de 1991 cumple con sus funciones de garantizar los derechos de todos los ciudadanos, especialmente los más vulnerables?',

        diagnostico: 'El 56% de los estudiantes no comprende las funciones de las ramas del poder público ni los organismos de control, y no identifica con claridad los mecanismos de participación ciudadana.',

        competenciasICFES: {
          pensamientoSocial: 'Conoce la organización del Estado colombiano según la Constitución de 1991: funciones y alcances de las ramas del poder, los organismos de control y los mecanismos de participación ciudadana.',
          interpretacion: 'Evalúa el funcionamiento del Estado colombiano desde perspectivas de diferentes actores: ciudadanos, organizaciones sociales, instituciones y grupos en situación de vulnerabilidad.',
          pensamientoSistemico: 'Analiza las relaciones entre las ramas del poder, los mecanismos de control y los instrumentos de participación como partes de un sistema político interdependiente.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Conoce el modelo de Estado social de derecho y su aplicación en Colombia según la Constitución de 1991.',
            'Conoce la organización del Estado: funciones y alcances de las ramas del poder y de los organismos de control.'
          ]
        },

        aprendizajesICFES: ['soc-s11-02', 'soc-s11-04'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Explica el concepto de Estado y las principales formas de organización política.',
          'Describe los principios fundamentales del Estado Social de Derecho establecidos en la Constitución de 1991.',
          'Explica las funciones de las ramas del poder público (legislativa, ejecutiva, judicial) y los mecanismos de control entre ellas.',
          'Identifica y explica los organismos de control (Contraloría, Procuraduría, Defensoría del Pueblo) y sus funciones.',
          'Describe los mecanismos de participación ciudadana: voto, referendo, plebiscito, consulta popular, cabildo abierto, iniciativa legislativa, revocatoria del mandato.'
        ],

        estrategiasMetodologicas: [
          'Análisis de la Constitución de 1991: lectura guiada de los primeros artículos y los principios fundamentales.',
          'Simulación de una sesión del Congreso: debate y votación de un proyecto de ley.',
          'Estudio de caso: una acción de tutela o acción popular reciente, su trámite y resultado.',
          'Mapa institucional del Estado colombiano: elaboración colaborativa.',
          'Investigación: ¿qué hace el alcalde o el gobernador de nuestra región? Evaluación ciudadana.'
        ],

        materialesEducativos: [
          'Constitución Política de Colombia 1991 (versión pedagógica)',
          'Texto escolar de Ciencias Sociales 10°',
          'Infografías sobre la estructura del Estado colombiano',
          'Noticias sobre el funcionamiento de la Contraloría, Procuraduría y Defensoría',
          'Guía de mecanismos de participación ciudadana (Registraduría Nacional)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define el Estado y describe sus elementos constitutivos (territorio, población, gobierno, soberanía).',
            'Explica los principios del Estado Social de Derecho de la Constitución de 1991.',
            'Describe las funciones de las ramas del poder público y los organismos de control en Colombia.'
          ],
          hacer: [
            'Elabora un mapa institucional del Estado colombiano.',
            'Analiza una acción de tutela o acción popular identificando los derechos vulnerados y las decisiones tomadas.',
            'Simula el uso de un mecanismo de participación ciudadana (voto, petición, tutela).',
            'Evalúa el desempeño de una institución del Estado colombiano desde criterios de justicia y equidad.'
          ],
          ser: [
            'Valora la Constitución de 1991 como pacto social que garantiza los derechos de todos los colombianos.',
            'Asume compromisos concretos de participación ciudadana en su entorno escolar y comunitario.',
            'Muestra actitud crítica frente al funcionamiento de las instituciones del Estado colombiano.'
          ]
        },

        competenciaCiudadana: 'Comprende el Estado colombiano como organización al servicio de todos los ciudadanos, exige el cumplimiento de sus funciones con base en la Constitución y participa activamente en los mecanismos democráticos disponibles.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo críticamente el funcionamiento del Estado colombiano, sus instituciones y los mecanismos de control democrático.',
          'Reconozco y defiendo los derechos de las minorías étnicas, raciales, de género y orientación sexual en Colombia y el mundo.',
          'Evalúo el impacto del Proceso de Paz en Colombia y las perspectivas para la construcción de una sociedad más justa.'
        ],

        dba: 'Analiza la democracia colombiana, sus fortalezas y debilidades, evaluando los mecanismos de control del poder, la corrupción y las condiciones para la participación política de todos los ciudadanos.',

        ejesTematicos: [
          'Democracia: concepto, tipos y fundamentos filosóficos',
          'La democracia colombiana: fortalezas, debilidades y retos',
          'La corrupción: causas, consecuencias y mecanismos de control',
          'Derechos políticos: garantías y restricciones en Colombia',
          'Participación política de minorías: mujeres, comunidades étnicas, LGBTIQ+'
        ],

        tiposPensamiento: ['Ético-Político', 'Historia', 'Territorio'],

        preguntaProblema: '¿Qué tan democrática es Colombia en la práctica? ¿Cuáles son los principales obstáculos para que todos los ciudadanos puedan participar en igualdad de condiciones en la vida política del país?',

        diagnostico: 'El 53% de los estudiantes identifica la democracia como sistema de gobierno pero no analiza sus limitaciones en la práctica, ni comprende el impacto de la corrupción en la calidad democrática.',

        competenciasICFES: {
          pensamientoSocial: 'Evalúa la participación política en Colombia: mecanismos electorales, comunitarios y en movimientos sociales, identificando barreras para la participación de grupos históricamente excluidos.',
          interpretacion: 'Analiza la corrupción y las debilidades democráticas desde las perspectivas de diferentes actores (ciudadanos, organizaciones anticorrupción, instituciones, grupos excluidos).',
          pensamientoSistemico: 'Establece relaciones entre la corrupción, la desigualdad política y la exclusión de minorías como factores que debilitan la democracia colombiana.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Identifica sesgos y limitaciones en los discursos sobre la democracia colombiana.',
            'Analiza la vigencia de los derechos políticos, los mecanismos de participación y las barreras de acceso para grupos excluidos.'
          ]
        },

        aprendizajesICFES: ['soc-s11-02', 'soc-s11-06'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica el concepto de democracia, sus fundamentos filosóficos y sus distintas formas (directa, representativa, participativa).',
          'Evalúa las fortalezas y debilidades de la democracia colombiana con evidencia concreta.',
          'Analiza la corrupción en Colombia: causas, consecuencias y mecanismos existentes para combatirla.',
          'Identifica los obstáculos para la participación política de mujeres, comunidades étnicas y LGBTIQ+.',
          'Propone acciones concretas para fortalecer la democracia en su entorno.'
        ],

        estrategiasMetodologicas: [
          'Análisis de indicadores de democracia: índice de democracia, percepción de corrupción (Transparencia Internacional).',
          'Debate: ¿Colombia es una democracia real o formal? Argumentación con evidencia.',
          'Estudio de caso: un escándalo de corrupción colombiano reciente, sus causas y consecuencias.',
          'Investigación sobre barreras para la participación política de mujeres e indígenas en Colombia.',
          'Propuesta de proyecto: ¿qué haría yo para fortalecer la democracia en mi municipio?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 10°',
          'Informe de Transparencia Internacional sobre percepción de corrupción',
          'Constitución Política de Colombia 1991',
          'Noticias sobre casos de corrupción y su tratamiento judicial',
          'Estadísticas de participación política de mujeres e indígenas en Colombia (MOE)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define democracia, explica sus fundamentos y tipos (directa, representativa, participativa).',
            'Describe las principales causas y consecuencias de la corrupción en Colombia.',
            'Identifica los obstáculos para la participación política de grupos históricamente excluidos.'
          ],
          hacer: [
            'Analiza indicadores de democracia y corrupción para evaluar la calidad democrática en Colombia.',
            'Estudia un caso de corrupción colombiano identificando actores, mecanismos y consecuencias.',
            'Propone acciones concretas para fortalecer la participación política inclusiva en su entorno.',
            'Argumenta con evidencia sobre las fortalezas y debilidades de la democracia colombiana.'
          ],
          ser: [
            'Rechaza la corrupción como práctica que destruye la democracia y la justicia social.',
            'Valora la participación política igualitaria de todos los ciudadanos, independientemente de su género o etnia.',
            'Muestra actitud crítica y propositiva frente a los problemas de la democracia colombiana.'
          ]
        },

        competenciaCiudadana: 'Evalúa críticamente la calidad de la democracia colombiana, reconoce la corrupción como obstáculo para el ejercicio pleno de los derechos y asume compromisos activos de participación democrática inclusiva.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo las dinámicas de la economía global: intercambios, dependencias, bloques económicos y crisis.',
          'Propongo y argumento alternativas de desarrollo sostenible y economía circular para Colombia y el mundo.',
          'Reconozco la importancia de la soberanía alimentaria y la seguridad hídrica como asuntos de justicia social.'
        ],

        dba: 'Comprende los sistemas económicos, la globalización y sus implicaciones para Colombia, analizando las desigualdades que genera el modelo económico predominante y las alternativas de desarrollo sostenible.',

        ejesTematicos: [
          'Sistemas económicos: capitalismo, socialismo y economías mixtas',
          'La globalización: características, actores y efectos',
          'Bloques económicos y tratados de libre comercio',
          'Desigualdad económica en Colombia y América Latina: indicadores y causas',
          'Alternativas de desarrollo: economía solidaria, soberanía alimentaria, desarrollo sostenible'
        ],

        tiposPensamiento: ['Ético-Político', 'Territorio', 'Historia'],

        preguntaProblema: '¿El modelo económico global genera riqueza para todos o concentra los beneficios en pocos? ¿Qué alternativas existen para un desarrollo más justo y sostenible en Colombia?',

        diagnostico: 'El 57% de los estudiantes no comprende los efectos diferenciados de la globalización entre países ricos y países en desarrollo, ni conoce alternativas al modelo económico predominante.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la estructura de la economía global, los bloques económicos y los efectos de la globalización en Colombia y América Latina.',
          interpretacion: 'Analiza la globalización desde las perspectivas de las multinacionales, los gobiernos nacionales, los trabajadores y las comunidades afectadas por los tratados de libre comercio.',
          pensamientoSistemico: 'Evalúa las tensiones entre el crecimiento económico, la equidad social y la sostenibilidad ambiental, argumentando sobre alternativas de desarrollo para Colombia.'
        },

        matrizReferencia: {
          componente: 'territorio',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Analiza y evalúa los efectos desiguales de la globalización en países desarrollados y en vías de desarrollo.',
            'Evalúa las causas y consecuencias de la desigualdad económica en Colombia y propone alternativas desde criterios de justicia social.'
          ]
        },

        aprendizajesICFES: ['soc-s11-03', 'soc-s11-10'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Compara los sistemas económicos (capitalismo, socialismo, economía mixta) identificando características, ventajas y limitaciones.',
          'Describe la globalización: integración de mercados, flujo de capitales, migración y cultura global.',
          'Analiza los efectos desiguales de la globalización entre países desarrollados y en desarrollo.',
          'Interpreta indicadores de desigualdad (índice de Gini, IDH, coeficiente de pobreza) para comparar países.',
          'Argumenta sobre alternativas de desarrollo: economía solidaria, buen vivir, soberanía alimentaria.'
        ],

        estrategiasMetodologicas: [
          'Análisis de indicadores de desarrollo humano y desigualdad: IDH, Gini, pobreza multidimensional.',
          'Estudio de caso: impacto de un TLC en un sector de la economía colombiana (agrícola, industrial).',
          'Debate: ¿la globalización beneficia o perjudica a Colombia? Argumentación desde distintas perspectivas.',
          'Investigación sobre un modelo de desarrollo alternativo (Buen Vivir en Ecuador, economía solidaria).',
          'Análisis de noticias económicas: ¿cómo afectan las crisis económicas globales a Colombia?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 10°',
          'Informe de Desarrollo Humano del PNUD (fragmentos seleccionados)',
          'Noticias y reportajes sobre los efectos de los TLC en Colombia',
          'Datos del DANE sobre pobreza y desigualdad en Colombia',
          'Documentales sobre economía solidaria y soberanía alimentaria'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las características de los principales sistemas económicos y sus implicaciones sociales.',
            'Define globalización e identifica sus dimensiones económica, cultural, tecnológica y política.',
            'Explica los indicadores de desigualdad (Gini, IDH) y su interpretación.'
          ],
          hacer: [
            'Compara sistemas económicos e interpreta indicadores de desigualdad para evaluar el impacto del modelo económico.',
            'Analiza el impacto de un TLC en la economía colombiana desde múltiples perspectivas.',
            'Argumenta sobre alternativas de desarrollo sostenible y justo para Colombia con evidencia.',
            'Elabora un análisis de la situación económica de su región utilizando indicadores de desarrollo.'
          ],
          ser: [
            'Cuestiona las desigualdades económicas como injusticias que pueden y deben transformarse.',
            'Valora las alternativas de desarrollo que priorizan el bienestar humano y la sostenibilidad ambiental.',
            'Muestra responsabilidad en el consumo, reconociendo su impacto en la economía y el medio ambiente.'
          ]
        },

        competenciaCiudadana: 'Comprende las desigualdades generadas por el modelo económico dominante, toma decisiones de consumo responsable y argumenta en favor de modelos de desarrollo que prioricen la justicia social y la sostenibilidad ambiental.'
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo la crisis climática global: causas, consecuencias, acuerdos internacionales y responsabilidades diferenciadas.',
          'Evalúo las políticas públicas de ordenamiento territorial en Colombia y sus impactos en las comunidades.',
          'Evalúo el papel de Colombia en el sistema internacional y su responsabilidad frente a desafíos globales.'
        ],

        dba: 'Comprende la geopolítica contemporánea, analizando el papel de los organismos multilaterales, los bloques de poder, la crisis climática y el lugar de Colombia en el sistema internacional.',

        ejesTematicos: [
          'Geopolítica contemporánea: el mundo multipolar',
          'Organismos multilaterales: ONU, OEA, OMC, FMI y su rol en el orden internacional',
          'La crisis climática: causas, impactos y acuerdos internacionales (Kyoto, París)',
          'Colombia en el sistema internacional: política exterior y tratados',
          'Proyecto integrador: Colombia frente a los desafíos globales'
        ],

        tiposPensamiento: ['Territorio', 'Ético-Político', 'Historia'],

        preguntaProblema: '¿Cuál es el papel de Colombia en el sistema internacional y cómo puede nuestro país contribuir a la solución de los grandes desafíos globales como la crisis climática, la desigualdad y los conflictos armados?',

        diagnostico: 'El 55% de los estudiantes no comprende el sistema de organismos multilaterales ni la posición de Colombia en el sistema internacional, y no relaciona la crisis climática con las responsabilidades diferenciadas entre países.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la configuración geopolítica del mundo actual, el papel de los organismos multilaterales y la posición de Colombia en el sistema internacional.',
          interpretacion: 'Analiza la crisis climática desde las perspectivas de países industrializados, países en desarrollo y comunidades vulnerables, reconociendo las responsabilidades diferenciadas.',
          pensamientoSistemico: 'Evalúa las relaciones entre geopolítica, economía global, crisis climática y derechos humanos como problemas interdependientes que requieren soluciones cooperativas.'
        },

        matrizReferencia: {
          componente: 'territorio',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Analiza la crisis climática global, sus causas, consecuencias y los acuerdos internacionales existentes, reconociendo responsabilidades diferenciadas.',
            'Establece relaciones entre la geopolítica, la economía mundial y los desafíos globales como la crisis climática y la desigualdad.'
          ]
        },

        aprendizajesICFES: ['soc-s11-08', 'soc-s11-10'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe la configuración multipolar del mundo actual y el papel de potencias emergentes.',
          'Explica el papel de organismos multilaterales (ONU, OMC, FMI) en la regulación del sistema internacional.',
          'Analiza la crisis climática: causas, impactos diferenciados y acuerdos internacionales (Kyoto, París).',
          'Describe la política exterior de Colombia y su participación en organismos internacionales.',
          'Desarrolla un proyecto integrador sobre la posición de Colombia frente a un desafío global.'
        ],

        estrategiasMetodologicas: [
          'Simulación de la ONU: los estudiantes representan países en una conferencia sobre cambio climático.',
          'Análisis de mapas geopolíticos del mundo actual: bloques de poder, zonas de conflicto.',
          'Debate: ¿qué responsabilidad tiene Colombia frente a la crisis climática? Argumentación con evidencia.',
          'Aprendizaje basado en proyectos: Colombia frente a un desafío global.',
          'Presentación del proyecto integrador ante el grupo.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 10°',
          'Mapas geopolíticos contemporáneos',
          'Acuerdo de París sobre cambio climático (versión pedagógica)',
          'Datos sobre huella de carbono y emisiones por país (Our World in Data)',
          'Noticias sobre la política exterior de Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe la configuración geopolítica del mundo actual y el papel de los organismos multilaterales.',
            'Explica las causas y consecuencias de la crisis climática y los acuerdos internacionales existentes.',
            'Describe la política exterior de Colombia y su participación en el sistema internacional.'
          ],
          hacer: [
            'Participa en una simulación de conferencia internacional sobre cambio climático representando un país.',
            'Analiza la crisis climática desde perspectivas de países con responsabilidades diferenciadas.',
            'Desarrolla y presenta un proyecto sobre Colombia frente a un desafío global.',
            'Interpreta mapas geopolíticos contemporáneos del mundo multipolar.'
          ],
          ser: [
            'Asume responsabilidad personal frente a la crisis climática con acciones concretas.',
            'Valora la cooperación internacional como mecanismo indispensable para resolver problemas globales.',
            'Demuestra compromiso con el bienestar del planeta y las generaciones futuras.'
          ]
        },

        competenciaCiudadana: 'Comprende los desafíos globales como la crisis climática y la desigualdad como problemas que requieren respuestas colectivas, asume compromisos de ciudadanía global y lidera acciones ambientales y sociales en su entorno.'
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
    objetivo: 'Desarrollar el pensamiento político contemporáneo mediante el análisis crítico del conflicto armado colombiano, la construcción de paz, la ciudadanía global y los desafíos éticos del mundo contemporáneo, formando ciudadanos capaces de asumir posiciones fundamentadas y actuar para transformar su realidad',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo el desarrollo político y económico de Colombia en el siglo XX: la Violencia, el Frente Nacional, el narcotráfico y el conflicto armado.',
          'Evalúo el impacto del Proceso de Paz en Colombia y las perspectivas para la construcción de una sociedad más justa.',
          'Analizo críticamente el funcionamiento del Estado colombiano, sus instituciones y los mecanismos de control democrático.'
        ],

        dba: 'Analiza el pensamiento político contemporáneo, sus corrientes ideológicas y su relación con los sistemas políticos y los movimientos sociales del siglo XXI, aplicándolo a la realidad colombiana.',

        ejesTematicos: [
          'El pensamiento político contemporáneo: liberalismo, socialismo, conservatismo, comunitarismo',
          'Las ideologías políticas y los sistemas de partidos en Colombia',
          'El neoliberalismo y sus críticos: debates sobre el Estado y el mercado',
          'Movimientos sociales del siglo XXI: feminismo, ambientalismo, antirracismo',
          'El pensamiento político latinoamericano: tradiciones y perspectivas'
        ],

        tiposPensamiento: ['Ético-Político', 'Historia', 'Territorio'],

        preguntaProblema: '¿Cómo las distintas corrientes del pensamiento político contemporáneo responden a los grandes desafíos de nuestro tiempo: la desigualdad, el cambio climático, la discriminación y la crisis de la democracia?',

        diagnostico: 'El 59% de los estudiantes no distingue con claridad entre las corrientes del pensamiento político contemporáneo ni comprende sus implicaciones para el diseño de políticas públicas y la acción social.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica y usa conceptos del pensamiento político contemporáneo (liberalismo, socialismo, conservatismo, feminismo) para analizar debates políticos actuales en Colombia y el mundo.',
          interpretacion: 'Reconoce y compara perspectivas ideológicas distintas sobre los grandes problemas del mundo contemporáneo: desigualdad, democracia, derechos, medio ambiente.',
          pensamientoSistemico: 'Establece relaciones entre las corrientes ideológicas, los sistemas políticos y los movimientos sociales contemporáneos, reconociendo su interdependencia y sus tensiones.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Reconoce y compara perspectivas ideológicas distintas (liberalismo, socialismo, conservatismo, feminismo) sobre los grandes problemas del mundo contemporáneo.',
            'Analiza los debates políticos actuales en Colombia y el mundo desde distintos marcos ideológicos, reconociendo sus supuestos y consecuencias.'
          ]
        },

        aprendizajesICFES: ['soc-s11-04', 'soc-s11-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica las principales corrientes del pensamiento político contemporáneo y sus posiciones frente a problemas como la desigualdad, el Estado y los derechos.',
          'Analiza el sistema de partidos colombiano desde las distintas corrientes ideológicas presentes.',
          'Compara las posiciones neoliberal y alternativa frente al papel del Estado en la economía.',
          'Describe los movimientos sociales del siglo XXI (feminismo, BLM, ambientalismo) y sus demandas.',
          'Analiza debates políticos actuales desde distintos marcos ideológicos con argumentos sustentados.'
        ],

        estrategiasMetodologicas: [
          'Cuadro comparativo de corrientes del pensamiento político: eje ideológico, posición frente al Estado, al mercado y a los derechos.',
          'Análisis de discursos políticos actuales: ¿desde qué perspectiva ideológica habla este político?',
          'Debate estructurado: ¿el Estado debe intervenir en la economía o debe predominar el mercado libre?',
          'Estudio de caso: un movimiento social del siglo XXI y su propuesta política.',
          'Investigación sobre el pensamiento político latinoamericano (Mariátegui, Freire, Betto, Lula).'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 11°',
          'Fragmentos de pensadores políticos: Rawls, Hayek, Marx, Fraser, Harvey',
          'Noticias y análisis políticos actuales de Colombia y América Latina',
          'Documentales sobre movimientos sociales del siglo XXI',
          'Textos de pensadores latinoamericanos seleccionados'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las principales corrientes del pensamiento político contemporáneo y sus posiciones frente al Estado, el mercado y los derechos.',
            'Define neoliberalismo y describe sus principios y consecuencias sociales.',
            'Identifica los movimientos sociales del siglo XXI y sus demandas políticas.'
          ],
          hacer: [
            'Analiza discursos políticos actuales identificando la corriente ideológica desde la que se expresan.',
            'Debate con argumentos sobre el papel del Estado en la economía y en la garantía de derechos.',
            'Investiga un movimiento social del siglo XXI y analiza su propuesta política.',
            'Compara posiciones ideológicas distintas sobre un problema político actual.'
          ],
          ser: [
            'Muestra respeto por la diversidad de posiciones políticas, argumentando con base en principios de justicia y derechos.',
            'Desarrolla una postura política propia fundamentada en valores democráticos y de justicia social.',
            'Participa activamente en debates políticos con argumentos y actitud de escucha.'
          ]
        },

        competenciaCiudadana: 'Desarrolla una postura política propia fundamentada en el conocimiento de las corrientes del pensamiento político contemporáneo y en valores de justicia, igualdad y dignidad humana, participando activamente en los debates de su tiempo.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Analizo el desarrollo político y económico de Colombia en el siglo XX: la Violencia, el Frente Nacional, el narcotráfico y el conflicto armado.',
          'Evalúo el impacto del Proceso de Paz en Colombia y las perspectivas para la construcción de una sociedad más justa.',
          'Propongo y lidero acciones colectivas orientadas al bien común, la convivencia pacífica y la justicia social.'
        ],

        dba: 'Analiza el conflicto armado colombiano en profundidad, comprende los mecanismos de la justicia transicional y evalúa los avances y retos del proceso de paz, asumiendo compromisos con la memoria y la reconciliación.',

        ejesTematicos: [
          'El conflicto armado colombiano: balance histórico y consecuencias',
          'Los Acuerdos de Paz: análisis crítico de sus seis puntos',
          'La Jurisdicción Especial para la Paz (JEP) y la Comisión de la Verdad',
          'Víctimas, excombatientes y comunidades: retos de la reintegración',
          'La paz territorial: avances, obstáculos y perspectivas'
        ],

        tiposPensamiento: ['Historia', 'Ético-Político', 'Territorio'],

        preguntaProblema: '¿Es posible lograr una paz duradera en Colombia? ¿Qué condiciones estructurales se deben transformar para que la paz sea completa, sostenible y con justicia para las víctimas?',

        diagnostico: 'El 57% de los estudiantes no comprende en profundidad los seis puntos de los Acuerdos de Paz ni los mecanismos de la JEP y la Comisión de la Verdad, y no relaciona el conflicto con las desigualdades estructurales que lo alimentan.',

        competenciasICFES: {
          pensamientoSocial: 'Analiza el conflicto armado colombiano en profundidad: causas históricas, actores, consecuencias humanitarias y el proceso de negociación que llevó a los Acuerdos de La Habana.',
          interpretacion: 'Evalúa el proceso de paz colombiano desde las perspectivas de las víctimas, los excombatientes, las comunidades rurales, el Estado y la sociedad civil, reconociendo tensiones y expectativas diversas.',
          pensamientoSistemico: 'Establece relaciones entre las condiciones estructurales que alimentan el conflicto (desigualdad, exclusión, narcotráfico) y los retos para lograr una paz duradera y con justicia en Colombia.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Analiza el proceso de paz colombiano desde la perspectiva de las víctimas y la justicia transicional.',
            'Evalúa las causas estructurales del conflicto colombiano y los retos para su transformación como condición para la paz.'
          ]
        },

        aprendizajesICFES: ['soc-s11-09', 'soc-s11-04'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Analiza el conflicto armado colombiano: actores, causas estructurales, consecuencias humanitarias y balance histórico.',
          'Explica los seis puntos de los Acuerdos de La Habana y su alcance en cada tema.',
          'Describe los mecanismos de la JEP y la Comisión de la Verdad, evaluando su efectividad.',
          'Analiza los retos de la reintegración de excombatientes y la atención a víctimas.',
          'Evalúa los avances y obstáculos de la paz territorial en Colombia con evidencia concreta.'
        ],

        estrategiasMetodologicas: [
          'Análisis del informe final de la Comisión de la Verdad: "Hay Futuro si Hay Verdad" (fragmentos seleccionados).',
          'Mapa de la paz: regiones con mayor avance y mayor rezago en la implementación del acuerdo.',
          'Estudio de caso: una víctima o un excombatiente en proceso de reintegración (relato trabajado pedagógicamente).',
          'Debate: ¿fue la firma de los Acuerdos suficiente para lograr la paz? ¿Qué falta?',
          'Propuesta de acción: ¿qué puede hacer nuestra comunidad para contribuir a la paz territorial?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 11°',
          'Informe "Hay Futuro si Hay Verdad" de la Comisión de la Verdad (fragmentos pedagógicos)',
          'Resumen de los Acuerdos de La Habana (versión pedagógica)',
          'Reportajes sobre la implementación del acuerdo de paz en regiones específicas',
          'Testimonios de víctimas y excombatientes (selección con enfoque reparador)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las causas estructurales y los actores del conflicto armado colombiano.',
            'Describe los seis puntos de los Acuerdos de La Habana.',
            'Define los mecanismos de justicia transicional: JEP, Comisión de la Verdad, UBPD.'
          ],
          hacer: [
            'Analiza el informe de la Comisión de la Verdad identificando las principales verdades reconocidas sobre el conflicto.',
            'Evalúa los avances y obstáculos de la implementación del acuerdo de paz con evidencia concreta.',
            'Propone una acción de paz comunitaria fundamentada en los aprendizajes del periodo.',
            'Debate con argumentos sobre los retos de la reconciliación en Colombia.'
          ],
          ser: [
            'Valora la memoria histórica de las víctimas como fundamento para la no repetición.',
            'Muestra empatía y solidaridad con las víctimas y comunidades afectadas por el conflicto.',
            'Asume compromisos concretos con la construcción de paz en su entorno.'
          ]
        },

        competenciaCiudadana: 'Comprende en profundidad el conflicto armado colombiano y el proceso de paz, asume la memoria de las víctimas como responsabilidad ciudadana y lidera o participa en acciones de paz, reconciliación y no repetición en su comunidad.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Argumento ética y políticamente frente a dilemas contemporáneos (desigualdad, migración, violencia de género, bienestar animal).',
          'Reconozco la importancia de la ética del cuidado, la empatía y la solidaridad como fundamentos de la ciudadanía activa.',
          'Reconozco el papel de los movimientos sociales en la transformación histórica y en la ampliación de derechos.'
        ],

        dba: 'Analiza los grandes dilemas éticos y políticos del mundo contemporáneo (desigualdad, migración, violencia de género, racismo, crisis ambiental), argumentando posiciones fundamentadas desde principios de justicia, dignidad y solidaridad.',

        ejesTematicos: [
          'Ética y política: fundamentos filosóficos (Kant, Bentham, Rawls, Nussbaum)',
          'Dilemas éticos contemporáneos: desigualdad, migración y refugio, violencia de género',
          'El racismo estructural y las luchas antirracistas',
          'La ética del cuidado y el medioambiente',
          'Los derechos humanos en el siglo XXI: avances y retrocesos'
        ],

        tiposPensamiento: ['Ético-Político', 'Historia', 'Territorio'],

        preguntaProblema: '¿Cómo la filosofía ética nos ayuda a tomar posiciones fundamentadas frente a los grandes dilemas del mundo de hoy: la desigualdad, la migración, la violencia de género y la crisis ambiental?',

        diagnostico: 'El 54% de los estudiantes no aplica principios éticos al análisis de dilemas contemporáneos ni argumenta posiciones fundamentadas sobre temas como la migración, la violencia de género o el racismo.',

        competenciasICFES: {
          pensamientoSocial: 'Aplica conceptos del pensamiento ético y político al análisis de dilemas contemporáneos (desigualdad, migración, violencia de género, racismo), identificando los valores en juego.',
          interpretacion: 'Reconoce y compara perspectivas éticas distintas (utilitarismo, deontología, ética del cuidado) frente a dilemas morales contemporáneos, evaluando sus fortalezas y limitaciones.',
          pensamientoSistemico: 'Evalúa decisiones políticas y sociales desde criterios de justicia, equidad y bienestar colectivo, reconociendo la interdependencia entre problemas éticos, políticos y ambientales.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Aplica principios éticos (utilitarismo, deontología, ética del cuidado) al análisis de dilemas morales contemporáneos.',
            'Evalúa decisiones políticas y sociales desde criterios de justicia, equidad y bienestar colectivo, reconociendo sesgos y limitaciones.'
          ]
        },

        aprendizajesICFES: ['soc-s11-06', 'soc-s11-09'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica las principales corrientes de la ética filosófica (utilitarismo, deontología, ética del cuidado) y las aplica a casos concretos.',
          'Argumenta posiciones éticas fundamentadas sobre dilemas contemporáneos: migración, violencia de género, racismo, cambio climático.',
          'Analiza el racismo estructural: concepto, manifestaciones y luchas antirracistas.',
          'Evalúa decisiones políticas concretas desde criterios de justicia y bienestar colectivo.',
          'Propone acciones de transformación social fundamentadas en principios éticos.'
        ],

        estrategiasMetodologicas: [
          'Análisis de dilemas éticos: cada grupo trabaja un dilema contemporáneo desde distintas perspectivas filosóficas.',
          'Debate socrático: ¿qué debemos hacer frente a la migración forzada? Argumentación ética.',
          'Estudio de caso: una situación de violencia de género, racismo o discriminación; análisis ético y propuesta de respuesta.',
          'Lectura de textos filosóficos breves (Rawls sobre justicia, Nussbaum sobre capacidades).',
          'Proyecto: campaña de concienciación sobre un dilema ético contemporáneo.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 11°',
          'Fragmentos de textos filosóficos: Rawls, Nussbaum, Butler, hooks',
          'Noticias sobre violencia de género, migración y racismo en Colombia y el mundo',
          'Informe sobre derechos humanos de Amnistía Internacional (fragmentos)',
          'Campañas de organismos de derechos humanos para análisis crítico'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las principales corrientes de la ética filosófica y sus principios.',
            'Define conceptos como racismo estructural, violencia de género y migración forzada.',
            'Explica la ética del cuidado y su relevancia para la ciudadanía activa.'
          ],
          hacer: [
            'Aplica principios éticos (utilitarismo, deontología, ética del cuidado) al análisis de dilemas contemporáneos.',
            'Argumenta posiciones éticas fundamentadas sobre temas como la migración, el racismo o la violencia de género.',
            'Desarrolla y presenta una campaña de concienciación sobre un dilema ético contemporáneo.',
            'Evalúa decisiones políticas desde criterios de justicia y bienestar colectivo.'
          ],
          ser: [
            'Muestra empatía y solidaridad frente a personas en situación de vulnerabilidad.',
            'Rechaza el racismo, la xenofobia y la violencia de género con argumentos fundamentados.',
            'Asume la ética del cuidado como principio para sus relaciones personales y sociales.'
          ]
        },

        competenciaCiudadana: 'Argumenta posiciones éticas fundamentadas frente a los grandes dilemas del mundo contemporáneo, rechaza activamente el racismo, la xenofobia y la violencia de género, y asume la ética del cuidado como principio de su ciudadanía activa.'
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Evalúo el papel de Colombia en el sistema internacional y su responsabilidad frente a desafíos globales (cambio climático, migraciones, derechos humanos).',
          'Propongo y lidero acciones colectivas orientadas al bien común, la convivencia pacífica y la justicia social.',
          'Reconozco la importancia de la ética del cuidado, la empatía y la solidaridad como fundamentos de la ciudadanía activa.'
        ],

        dba: 'Comprende la ciudadanía global y el papel de Colombia en el sistema internacional, asumiendo compromisos concretos con los derechos humanos, la democracia, la sostenibilidad y la justicia social como valores universales.',

        ejesTematicos: [
          'Ciudadanía global: derechos, responsabilidades y solidaridad',
          'Los Objetivos de Desarrollo Sostenible (ODS) y Colombia',
          'El papel de los movimientos ciudadanos globales: Fridays for Future, MeToo, BLM',
          'Colombia en el sistema internacional: derechos humanos, cooperación y desafíos',
          'Proyecto integrador: plan de acción ciudadana para el bien común'
        ],

        tiposPensamiento: ['Ético-Político', 'Territorio', 'Historia'],

        preguntaProblema: '¿Qué significa ser ciudadano en el siglo XXI? ¿Cómo podemos contribuir desde nuestra comunidad local a la construcción de un mundo más justo, sostenible y democrático?',

        diagnostico: 'El 51% de los estudiantes no relaciona su realidad local con los desafíos globales de la ciudadanía del siglo XXI ni comprende el alcance de los ODS y el papel de Colombia en el sistema internacional.',

        competenciasICFES: {
          pensamientoSocial: 'Comprende el concepto de ciudadanía global, los ODS y el papel de Colombia en el sistema internacional, identificando responsabilidades diferenciadas frente a desafíos comunes.',
          interpretacion: 'Analiza los movimientos ciudadanos globales del siglo XXI desde las perspectivas de sus protagonistas, los Estados y las organizaciones internacionales, evaluando su impacto.',
          pensamientoSistemico: 'Evalúa las conexiones entre los desafíos locales y los problemas globales, argumentando por qué la ciudadanía activa y la cooperación son condiciones necesarias para resolverlos.'
        },

        matrizReferencia: {
          componente: 'etico-politico',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Analiza y evalúa el papel de los movimientos ciudadanos globales como agentes de transformación social y política en el siglo XXI.',
            'Establece relaciones entre los desafíos locales y los problemas globales, argumentando la necesidad de la ciudadanía activa y la cooperación internacional.'
          ]
        },

        aprendizajesICFES: ['soc-s11-07', 'soc-s11-08', 'soc-s11-10'],
        nivelEsperado: 'Avanzado',

        evidenciasAprendizaje: [
          'Explica el concepto de ciudadanía global y las responsabilidades que implica frente a los desafíos comunes.',
          'Describe los ODS y evalúa el avance de Colombia en su cumplimiento.',
          'Analiza movimientos ciudadanos globales (Fridays for Future, MeToo, Black Lives Matter) identificando sus demandas y logros.',
          'Evalúa el papel de Colombia en el sistema internacional y sus compromisos con los derechos humanos y la sostenibilidad.',
          'Desarrolla y presenta un plan de acción ciudadana para contribuir al bien común desde su comunidad.'
        ],

        estrategiasMetodologicas: [
          'Análisis del informe de Colombia ante la ONU sobre los ODS: ¿en cuáles avanzamos y en cuáles retrocedemos?',
          'Simulación: asamblea de ciudadanos globales; cada estudiante representa un colectivo social.',
          'Estudio de caso: un movimiento ciudadano global, su origen, estrategias y logros.',
          'Aprendizaje basado en proyectos: plan de acción ciudadana para abordar un problema de su comunidad.',
          'Presentación y defensa del proyecto integrador ante un jurado (pares y docente).'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 11°',
          'Informe de Colombia ante la ONU sobre los ODS (fragmentos)',
          'Datos de Naciones Unidas sobre el avance global de los ODS',
          'Documentales sobre movimientos ciudadanos globales del siglo XXI',
          'Guía metodológica para la planificación de acciones ciudadanas'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define ciudadanía global y describe las responsabilidades que implica frente a desafíos comunes.',
            'Explica los ODS y evalúa el avance de Colombia en áreas clave.',
            'Describe los principales movimientos ciudadanos globales del siglo XXI y sus demandas.'
          ],
          hacer: [
            'Analiza el papel de Colombia en el sistema internacional con base en evidencia de organismos internacionales.',
            'Evalúa el impacto de un movimiento ciudadano global desde múltiples perspectivas.',
            'Desarrolla y presenta un plan de acción ciudadana para contribuir al bien común desde su comunidad.',
            'Defiende el proyecto integrador ante un jurado con argumentos fundamentados.'
          ],
          ser: [
            'Reflexiona sobre su proceso de aprendizaje en Ciencias Sociales y los compromisos ciudadanos que asume.',
            'Proyecta con responsabilidad su participación en la vida pública como ciudadano activo y comprometido.',
            'Valora la solidaridad, la empatía y la justicia como fundamentos de su identidad ciudadana.'
          ]
        },

        competenciaCiudadana: 'Asume la ciudadanía global como responsabilidad activa, lidera un plan de acción para el bien común en su comunidad, reflexiona sobre su proceso de aprendizaje ciudadano y proyecta con compromiso su participación en la vida pública y democrática.'
      }
    }
  }

};

// Exportar para uso en módulos (CommonJS y ESM)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANES_SOCIALES };
}
