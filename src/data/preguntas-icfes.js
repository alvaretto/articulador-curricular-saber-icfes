/**
 * Banco de Preguntas tipo ICFES - Uso Offline
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Preguntas originales inspiradas en el formato y nivel de dificultad
 * de las pruebas Saber 9° y Saber 11° de Colombia.
 * NO son preguntas copiadas de exámenes oficiales.
 *
 * Áreas cubiertas:
 *   - Matemáticas: Saber 9° (5 preguntas) y Saber 11° (5 preguntas)
 *   - Lectura Crítica: Saber 9° (5 preguntas) y Saber 11° (5 preguntas)
 *
 * Formato de ID: {area-abrev}-p-{prueba}-{numero}
 *   mat  = Matemáticas
 *   lc   = Lectura Crítica
 *   s9   = Saber 9°
 *   s11  = Saber 11°
 */

const PREGUNTAS_ICFES = {

  // ===========================================================
  // MATEMÁTICAS
  // ===========================================================
  matematicas: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Numérico-variacional + razonamiento
      {
        id: 'mat-p-s9-01',
        enunciado: 'Sea x un número real que satisface la ecuación 3(x − 2) + 5 = 2x + 1. ¿Cuál de las siguientes afirmaciones es VERDADERA respecto a x?',
        opciones: [
          { letra: 'A', texto: 'x es negativo porque al despejar se obtiene x = −2.' },
          { letra: 'B', texto: 'x es un número natural porque al despejar se obtiene x = 2.' },
          { letra: 'C', texto: 'x es un entero positivo porque al despejar se obtiene x = 4.' },
          { letra: 'D', texto: 'x es un número irracional porque la ecuación no tiene solución entera.' },
        ],
        clave: 'B',
        justificacion: 'Desarrollando: 3x − 6 + 5 = 2x + 1, es decir, 3x − 1 = 2x + 1, de donde x = 2. Por lo tanto x = 2, que es un número natural positivo. Las opciones A, C y D presentan valores incorrectos de x o clasificaciones equivocadas del número.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 2. Numérico-variacional + resolución
      {
        id: 'mat-p-s9-02',
        enunciado: 'En una tienda de Medellín, Valentina compra 3 cuadernos y 2 lápices por $14.500. Si un lápiz cuesta $500 más que un cuaderno, ¿cuánto cuesta cada cuaderno?',
        opciones: [
          { letra: 'A', texto: '$2.500' },
          { letra: 'B', texto: '$2.700' },
          { letra: 'C', texto: '$3.000' },
          { letra: 'D', texto: '$3.500' },
        ],
        clave: 'B',
        justificacion: 'Sea c el precio de un cuaderno. El lápiz vale c + 500. La ecuación es: 3c + 2(c + 500) = 14.500, lo que da 5c + 1.000 = 14.500, entonces 5c = 13.500 y c = 2.700. Verificación: cuaderno = $2.700, lápiz = $3.200; 3(2.700) + 2(3.200) = 8.100 + 6.400 = 14.500. Las otras opciones ($2.500, $3.000, $3.500) no satisfacen la ecuación al ser sustituidas.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 3. Geométrico-métrico + comunicación
      {
        id: 'mat-p-s9-03',
        enunciado: 'En el plano cartesiano, los vértices de un triángulo son A(1, 1), B(5, 1) y C(3, 4). ¿Cuál es la longitud de la base AB del triángulo y cuál es su altura?',
        opciones: [
          { letra: 'A', texto: 'Base = 4 unidades; altura = 3 unidades.' },
          { letra: 'B', texto: 'Base = 4 unidades; altura = 4 unidades.' },
          { letra: 'C', texto: 'Base = 5 unidades; altura = 3 unidades.' },
          { letra: 'D', texto: 'Base = 3 unidades; altura = 4 unidades.' },
        ],
        clave: 'A',
        justificacion: 'La base AB va de (1,1) a (5,1): longitud = 5 − 1 = 4 unidades (ambos puntos tienen y = 1, por lo que la distancia es la diferencia en x). La altura es la distancia vertical desde C(3, 4) hasta la recta y = 1: altura = 4 − 1 = 3 unidades. La opción B confunde la altura con la coordenada y de C; las opciones C y D tienen valores incorrectos para la base.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 4. Geométrico-métrico + razonamiento
      {
        id: 'mat-p-s9-04',
        enunciado: 'Un cable va desde la cima de un poste de 6 m hasta un punto en el suelo a 8 m de la base del poste. ¿Cuál es la longitud del cable?',
        opciones: [
          { letra: 'A', texto: '10 m' },
          { letra: 'B', texto: '14 m' },
          { letra: 'C', texto: '√28 m' },
          { letra: 'D', texto: '7 m' },
        ],
        clave: 'A',
        justificacion: 'El poste, el suelo y el cable forman un triángulo rectángulo donde los catetos miden 6 m y 8 m. Aplicando el Teorema de Pitágoras: hipotenusa² = 6² + 8² = 36 + 64 = 100, por tanto la hipotenusa = √100 = 10 m. La opción B suma los catetos en vez de aplicar Pitágoras; la opción C calcula incorrectamente; la opción D no corresponde a ningún cálculo válido.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 5. Aleatorio + resolución
      {
        id: 'mat-p-s9-05',
        enunciado: 'Las notas de un grupo de 7 estudiantes en un examen de ciencias fueron: 3,5 — 4,0 — 2,5 — 4,5 — 3,5 — 5,0 — 4,0. ¿Cuáles son la media y la mediana de estas notas?',
        opciones: [
          { letra: 'A', texto: 'Media = 3,86; mediana = 4,0.' },
          { letra: 'B', texto: 'Media = 4,0; mediana = 3,5.' },
          { letra: 'C', texto: 'Media = 3,86; mediana = 3,5.' },
          { letra: 'D', texto: 'Media = 4,0; mediana = 4,0.' },
        ],
        clave: 'A',
        justificacion: 'La suma de las notas es 3,5 + 4,0 + 2,5 + 4,5 + 3,5 + 5,0 + 4,0 = 27,0. La media es 27,0 ÷ 7 ≈ 3,86. Ordenando los datos: 2,5 — 3,5 — 3,5 — 4,0 — 4,0 — 4,5 — 5,0; el valor central (4.° de 7) es 4,0, por lo que la mediana = 4,0. Las opciones B y D tienen la media incorrecta; la opción C tiene la mediana incorrecta.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Numérico-variacional + razonamiento (funciones / límites)
      {
        id: 'mat-p-s11-01',
        enunciado: 'La función f(x) = (x² − 9) / (x − 3) no está definida en x = 3. Sin embargo, al analizar los valores de f(x) cuando x se aproxima a 3 desde ambos lados, se concluye que:',
        opciones: [
          { letra: 'A', texto: 'El límite cuando x → 3 no existe, porque la función no está definida en ese punto.' },
          { letra: 'B', texto: 'El límite cuando x → 3 es 0, porque el numerador se anula en x = 3.' },
          { letra: 'C', texto: 'El límite cuando x → 3 es 6, porque se puede simplificar f(x) = x + 3 para x ≠ 3.' },
          { letra: 'D', texto: 'El límite cuando x → 3 es infinito, porque hay una división por cero.' },
        ],
        clave: 'C',
        justificacion: 'El numerador x² − 9 = (x − 3)(x + 3). Para x ≠ 3, la expresión se simplifica a f(x) = x + 3. Cuando x → 3, f(x) → 3 + 3 = 6. El límite existe aunque f no esté definida en x = 3; la no definición en un punto no implica que el límite no exista (opción A). El límite no es 0 (opción B) ni infinito (opción D), pues la indeterminación 0/0 se resuelve al factorizar.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 2. Numérico-variacional + resolución (sistemas / optimización)
      {
        id: 'mat-p-s11-02',
        enunciado: 'Una finca productora de café en Huila debe distribuir 120 hectáreas entre dos variedades: Castillo y Colombia. La variedad Castillo genera una utilidad de $2.000.000 por hectárea y la Colombia de $1.500.000. Si se requiere plantar al menos 30 ha de cada variedad, ¿cuántas hectáreas de Castillo se deben plantar para maximizar la utilidad total?',
        opciones: [
          { letra: 'A', texto: '30 hectáreas de Castillo y 90 de Colombia.' },
          { letra: 'B', texto: '60 hectáreas de cada variedad.' },
          { letra: 'C', texto: '90 hectáreas de Castillo y 30 de Colombia.' },
          { letra: 'D', texto: '120 hectáreas de Castillo y 0 de Colombia.' },
        ],
        clave: 'C',
        justificacion: 'Sea c las hectáreas de Castillo. La función de utilidad es U = 2.000.000c + 1.500.000(120 − c) = 500.000c + 180.000.000, que es creciente en c. Para maximizar U, se debe maximizar c sujeto a: c ≥ 30 y 120 − c ≥ 30 (es decir, c ≤ 90). El máximo se alcanza en c = 90. La opción D viola la restricción mínima de 30 ha de Colombia; las opciones A y B no maximizan la utilidad.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 3. Geométrico-métrico + comunicación (vectores / transformaciones)
      {
        id: 'mat-p-s11-03',
        enunciado: 'El punto P(2, 5) es sometido primero a una reflexión sobre el eje x y luego a una traslación de vector (3, −1). ¿Cuáles son las coordenadas del punto imagen final P\'\'?',
        opciones: [
          { letra: 'A', texto: 'P\'\' = (5, −6)' },
          { letra: 'B', texto: 'P\'\' = (5, 4)' },
          { letra: 'C', texto: 'P\'\' = (−1, 6)' },
          { letra: 'D', texto: 'P\'\' = (5, −4)' },
        ],
        clave: 'A',
        justificacion: 'Reflexión de P(2, 5) sobre el eje x: P\'(2, −5) (la coordenada y cambia de signo). Traslación con vector (3, −1): P\'\'(2 + 3, −5 + (−1)) = P\'\'(5, −6). La opción B olvida cambiar el signo de y en la reflexión; la opción D aplica la traslación al punto original sin reflejar; la opción C comete errores en ambas transformaciones.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 4. Aleatorio + razonamiento (distribuciones / inferencia)
      {
        id: 'mat-p-s11-04',
        enunciado: 'En dos colegios de Bogotá se midió el tiempo de desplazamiento (en minutos) de los estudiantes. Colegio A: media = 25 min, desviación estándar = 5 min. Colegio B: media = 25 min, desviación estándar = 15 min. ¿Cuál afirmación es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Los estudiantes del colegio A tienen tiempos más homogéneos que los del colegio B.' },
          { letra: 'B', texto: 'Los estudiantes del colegio B tienen, en promedio, mayor tiempo de desplazamiento.' },
          { letra: 'C', texto: 'No es posible comparar los dos grupos porque tienen distribuciones diferentes.' },
          { letra: 'D', texto: 'La mediana del colegio A es mayor que la del colegio B porque su desviación estándar es menor.' },
        ],
        clave: 'A',
        justificacion: 'La desviación estándar mide la dispersión de los datos alrededor de la media. Como el colegio A tiene desviación estándar de 5 min (menor), sus tiempos están más concentrados cerca de la media de 25 min, es decir, son más homogéneos. La opción B es falsa porque ambas medias son iguales (25 min). La opción C es incorrecta: se pueden comparar grupos con diferentes dispersiones. La opción D confunde desviación estándar con mediana.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 5. Aleatorio + resolución (probabilidad condicional / conteo)
      {
        id: 'mat-p-s11-05',
        enunciado: 'En una urna hay 4 bolas rojas y 6 bolas azules. Se extraen dos bolas sin reposición. ¿Cuál es la probabilidad de que la segunda bola sea azul, dado que la primera también fue azul?',
        opciones: [
          { letra: 'A', texto: '6/10' },
          { letra: 'B', texto: '5/9' },
          { letra: 'C', texto: '5/10' },
          { letra: 'D', texto: '6/9' },
        ],
        clave: 'B',
        justificacion: 'Si la primera bola extraída fue azul, quedan en la urna 4 rojas y 5 azules (9 en total). La probabilidad de que la segunda sea azul dado que la primera lo fue es P(2.ª azul | 1.ª azul) = 5/9. La opción A usa el total inicial sin actualizar; la opción C divide incorrectamente; la opción D usa numerador incorrecto de 6 sin descontar la bola ya extraída.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },
    ],
  },

  // ===========================================================
  // LECTURA CRÍTICA (LENGUAJE)
  // ===========================================================
  lenguaje: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Semántico + identificar
      {
        id: 'lc-p-s9-01',
        enunciado: 'Lee el siguiente fragmento:\n\n"Los páramos son ecosistemas únicos del trópico andino. Su nombre proviene del latín paludem, que hace referencia a terrenos húmedos y pantanosos. En Colombia, los páramos regulan el ciclo del agua y abastecen a millones de personas; sin embargo, la minería y la expansión agropecuaria los han convertido en territorios en vilo."\n\nSegún el contexto del texto, la expresión "en vilo" significa que los páramos están:',
        opciones: [
          { letra: 'A', texto: 'En proceso de recuperación gracias a las políticas ambientales.' },
          { letra: 'B', texto: 'En una situación de riesgo e incertidumbre sobre su futuro.' },
          { letra: 'C', texto: 'En alto estado de conservación, libres de amenazas.' },
          { letra: 'D', texto: 'En zona de reserva internacional protegida.' },
        ],
        clave: 'B',
        justificacion: '"En vilo" es una expresión que indica una situación de suspenso, incertidumbre o peligro. El contexto confirma este sentido: el texto menciona que la minería y la expansión agropecuaria representan amenazas concretas para los páramos. Las opciones A, C y D contradicen el tono de alerta del párrafo, que presenta a los páramos como ecosistemas amenazados, no protegidos ni en recuperación.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 2. Semántico + comprender
      {
        id: 'lc-p-s9-02',
        enunciado: 'Lee el siguiente párrafo:\n\n"La lectura no es un lujo reservado a los intelectuales: es una herramienta de emancipación al alcance de cualquier persona. Quien lee amplía su mundo, cuestiona la realidad y construye autonomía de pensamiento. En un país donde la desigualdad es estructural, el acceso a los libros debería ser una política pública prioritaria."\n\n¿Cuál es la idea principal del párrafo?',
        opciones: [
          { letra: 'A', texto: 'Solo los intelectuales tienen acceso real a la lectura en Colombia.' },
          { letra: 'B', texto: 'La lectura es un derecho fundamental que el Estado debe garantizar como herramienta de transformación social.' },
          { letra: 'C', texto: 'Los libros son caros y por eso la gente no lee en países desiguales.' },
          { letra: 'D', texto: 'La autonomía de pensamiento se logra únicamente a través de la educación formal.' },
        ],
        clave: 'B',
        justificacion: 'El párrafo argumenta que la lectura emancipa y que, dada la desigualdad del país, el acceso a los libros debe ser una prioridad del Estado. Esa es la tesis central: la lectura como herramienta de transformación que el Estado debe promover. La opción A contradice el texto, que dice que la lectura no es un privilegio exclusivo. La opción C es una inferencia no sustentada. La opción D limita la autonomía a la educación formal, lo que no dice el texto.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 3. Sintáctico + comprender
      {
        id: 'lc-p-s9-03',
        enunciado: 'Lee el siguiente fragmento de un artículo de opinión:\n\n"El transporte público en Bogotá ha mejorado en infraestructura; no obstante, los usuarios siguen reportando problemas de puntualidad y cobertura en los barrios periféricos."\n\n¿Qué función cumple el conector "no obstante" en la oración?',
        opciones: [
          { letra: 'A', texto: 'Introduce una consecuencia de la mejora en infraestructura.' },
          { letra: 'B', texto: 'Indica una causa de los problemas de puntualidad.' },
          { letra: 'C', texto: 'Establece una relación de contraste entre dos ideas.' },
          { letra: 'D', texto: 'Señala una condición necesaria para que mejore el servicio.' },
        ],
        clave: 'C',
        justificacion: '"No obstante" es un conector adversativo o de contraste: introduce una idea que matiza, contradice o limita lo afirmado anteriormente. En el fragmento, contrasta la mejora en infraestructura (aspecto positivo) con los problemas persistentes de los usuarios (aspecto negativo). No expresa consecuencia (opción A), causa (opción B) ni condición (opción D).',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 4. Pragmático + reflexionar (intención del autor)
      {
        id: 'lc-p-s9-04',
        enunciado: 'Lee el siguiente texto:\n\n"Señores del concejo municipal: los habitantes del barrio La Esperanza llevamos tres años solicitando la pavimentación de nuestra calle principal. Cada invierno, el barro impide el paso de ambulancias y niños al colegio. Exigimos que se incluya esta obra en el presupuesto del próximo año. La dignidad de nuestro barrio no puede seguir esperando."\n\n¿Cuál es la intención principal del autor de este texto?',
        opciones: [
          { letra: 'A', texto: 'Informar al concejo sobre las condiciones climáticas del barrio.' },
          { letra: 'B', texto: 'Narrar las dificultades cotidianas de los habitantes del barrio La Esperanza.' },
          { letra: 'C', texto: 'Persuadir al concejo para que tome una decisión favorable respecto a la pavimentación.' },
          { letra: 'D', texto: 'Describir el proceso histórico de abandono del barrio La Esperanza.' },
        ],
        clave: 'C',
        justificacion: 'El texto es una petición formal dirigida al concejo municipal. Su propósito es persuadir: el autor presenta argumentos (tiempo de espera, impacto en la comunidad) y formula una exigencia directa. Informar (opción A) y narrar (opción B) son funciones secundarias que sirven al propósito persuasivo, pero no son la intención principal. Describir historia (opción D) no corresponde al texto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 5. Pragmático + reflexionar (evaluación crítica)
      {
        id: 'lc-p-s9-05',
        enunciado: 'Lee el siguiente párrafo de un editorial:\n\n"Las redes sociales son la causa principal del deterioro académico de los jóvenes colombianos. Cualquier profesor puede confirmarlo: los estudiantes ya no saben leer ni escribir correctamente. Si se prohibieran los celulares en los colegios, las notas mejorarían de inmediato."\n\n¿Cuál es la principal debilidad argumentativa del texto?',
        opciones: [
          { letra: 'A', texto: 'El autor cita fuentes académicas que no son confiables.' },
          { letra: 'B', texto: 'El autor generaliza a partir de impresiones subjetivas sin presentar evidencia verificable.' },
          { letra: 'C', texto: 'El autor defiende una posición favorable a las redes sociales.' },
          { letra: 'D', texto: 'El texto carece de conclusión, por lo que no puede considerarse argumentativo.' },
        ],
        clave: 'B',
        justificacion: 'El editorial hace afirmaciones categóricas ("causa principal", "cualquier profesor puede confirmarlo", "mejorarían de inmediato") sin presentar datos, estudios o evidencia empírica. Apela a la opinión colectiva de los profesores como si fuera prueba suficiente, incurriendo en una generalización indebida. La opción A es incorrecta porque el texto no cita fuentes. La opción C contradice el contenido. La opción D es falsa: el texto sí tiene una conclusión (prohibir celulares).',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Semántico + identificar (texto argumentativo)
      {
        id: 'lc-p-s11-01',
        enunciado: 'Lee el siguiente fragmento de un ensayo:\n\n"La inteligencia artificial no sustituye el pensamiento crítico; lo que amenaza es la disposición a delegarlo. Cuando una persona acepta sin cuestionamiento las conclusiones de un algoritmo —ya sea en diagnósticos médicos, veredictos judiciales o noticias— renuncia a la facultad más humana que posee: la capacidad de dudar. El peligro no está en la máquina, sino en la abdicación del sujeto."\n\n¿Cuál de las siguientes opciones recoge con mayor precisión la información que el autor presenta como el verdadero riesgo de la IA?',
        opciones: [
          { letra: 'A', texto: 'Que los algoritmos cometan errores en diagnósticos médicos y veredictos judiciales.' },
          { letra: 'B', texto: 'Que las personas renuncien a pensar críticamente y acepten pasivamente las decisiones de los algoritmos.' },
          { letra: 'C', texto: 'Que la inteligencia artificial reemplace a los profesionales en sus campos de trabajo.' },
          { letra: 'D', texto: 'Que las noticias generadas por IA sean falsas y distorsionen la realidad.' },
        ],
        clave: 'B',
        justificacion: 'El autor es explícito: "El peligro no está en la máquina, sino en la abdicación del sujeto." La amenaza identificada es que las personas cedan su capacidad crítica, no que los algoritmos fallen (opción A) ni que reemplacen empleos (opción C). La opción D refiere a las noticias, pero el texto la usa como ejemplo, no como el riesgo central. La opción B sintetiza con precisión la tesis del fragmento.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 2. Semántico + comprender (sentido global / tesis)
      {
        id: 'lc-p-s11-02',
        enunciado: 'Lee el siguiente texto filosófico:\n\n"La libertad no puede fundarse en la ausencia de restricciones: esa concepción la confunde con el capricho. Una voluntad verdaderamente libre es aquella que se rige por una ley que ella misma se ha dado, no por el impulso momentáneo ni por la presión exterior. Ser libre, en sentido pleno, es ser autor de las normas que guían la propia conducta."\n\n¿Cuál es la tesis central del texto?',
        opciones: [
          { letra: 'A', texto: 'La libertad consiste en hacer lo que uno desee sin ningún tipo de restricción.' },
          { letra: 'B', texto: 'La verdadera libertad es aquella que se gobierna por leyes externas impuestas por la sociedad.' },
          { letra: 'C', texto: 'La libertad auténtica implica la autonomía: actuar según normas que uno mismo se ha dado racionalmente.' },
          { letra: 'D', texto: 'El capricho y el impulso son expresiones legítimas de la libertad individual.' },
        ],
        clave: 'C',
        justificacion: 'El texto, de corte kantiano, distingue entre libertad como ausencia de restricciones (que rechaza, llamándola "capricho") y la libertad como autonomía: la voluntad que se rige por una ley autolegislada. La tesis central es que la libertad verdadera es autonomía racional. La opción A representa exactamente la concepción que el autor critica. La opción B confunde la ley autoimpuesta con leyes externas. La opción D es otra posición que el texto rechaza explícitamente.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 3. Sintáctico + comprender (estructura argumentativa / falacias)
      {
        id: 'lc-p-s11-03',
        enunciado: 'Lee el siguiente fragmento de un debate público:\n\n"El candidato Rodríguez propone reducir el presupuesto para ciencia y tecnología. No es de extrañar: él estudió en un colegio de provincia y nunca ha pisado una universidad de investigación. ¿Cómo va a entender alguien así la importancia del conocimiento?"\n\n¿Qué estrategia argumentativa INCORRECTA utiliza el autor del fragmento?',
        opciones: [
          { letra: 'A', texto: 'Apelación a la autoridad, porque cita expertos para refutar la propuesta.' },
          { letra: 'B', texto: 'Argumento ad hominem, porque ataca el origen del candidato en vez de evaluar su propuesta.' },
          { letra: 'C', texto: 'Analogía, porque compara la situación del candidato con la de otro funcionario.' },
          { letra: 'D', texto: 'Apelación a datos estadísticos, porque usa cifras para invalidar la propuesta.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento no refuta la propuesta de reducir el presupuesto con argumentos sobre ciencia o economía, sino que descalifica al candidato por su origen educativo y geográfico. Eso es un argumento ad hominem: atacar a la persona en lugar de rebatir sus ideas. No hay apelación a autoridades (opción A), analogía (opción C) ni datos estadísticos (opción D) en el texto.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 4. Pragmático + reflexionar (supuestos e implicaciones)
      {
        id: 'lc-p-s11-04',
        enunciado: 'Lee el siguiente enunciado de un artículo de economía:\n\n"Solo cuando los países en desarrollo adopten plenamente el modelo de libre mercado podrán alcanzar el nivel de prosperidad de las naciones desarrolladas."\n\n¿Cuál de los siguientes supuestos subyace necesariamente a esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'Los países desarrollados han alcanzado su prosperidad exclusivamente gracias al libre mercado.' },
          { letra: 'B', texto: 'Los países en desarrollo tienen recursos naturales suficientes para competir en el mercado global.' },
          { letra: 'C', texto: 'El libre mercado genera desigualdad y por eso los países pobres siguen siendo pobres.' },
          { letra: 'D', texto: 'La prosperidad de las naciones depende principalmente de su historia colonial.' },
        ],
        clave: 'A',
        justificacion: 'La afirmación establece que el libre mercado es la condición para que los países en desarrollo alcancen la prosperidad de los desarrollados. Para que este argumento funcione, debe asumir que los países desarrollados lograron su prosperidad mediante el libre mercado: ese es el supuesto implícito. Si ese supuesto fuera falso, el argumento caería. La opción B introduce una idea no implicada por el enunciado. Las opciones C y D contradicen la posición del texto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 5. Pragmático + reflexionar (estrategias retóricas)
      {
        id: 'lc-p-s11-05',
        enunciado: 'Lee el siguiente texto de divulgación científica:\n\n"Imagina que tu cerebro es una ciudad: las neuronas son los habitantes, las sinapsis son las calles y los neurotransmisores son los mensajeros que circulan entre ellas. Cuando aprendes algo nuevo, construyes una avenida donde antes había un camino de tierra. Así funciona la neuroplasticidad: la capacidad del cerebro de reorganizarse y crecer con la experiencia."\n\n¿Con qué propósito el autor usa la analogía de la ciudad?',
        opciones: [
          { letra: 'A', texto: 'Para demostrar que los cerebros humanos y las ciudades tienen la misma estructura física.' },
          { letra: 'B', texto: 'Para hacer accesible un concepto científico complejo mediante una comparación con algo cotidiano.' },
          { letra: 'C', texto: 'Para persuadir al lector de que debe estudiar neurociencia.' },
          { letra: 'D', texto: 'Para criticar la forma en que las ciudades están organizadas en comparación con el cerebro.' },
        ],
        clave: 'B',
        justificacion: 'La analogía ciudad-cerebro es una estrategia pedagógica y retórica que busca hacer comprensible la neuroplasticidad para un público no especializado, usando referencias cotidianas (ciudad, calles, mensajeros). No busca probar equivalencia estructural real (opción A), persuadir de estudiar neurociencia (opción C) ni criticar urbanismo (opción D). La función es explicativa y divulgativa: acercar un concepto técnico al lector general.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },
    ],
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PREGUNTAS_ICFES };
}
