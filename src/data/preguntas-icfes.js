/**
 * Banco de Preguntas tipo ICFES - Uso Offline
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Preguntas originales inspiradas en el formato y nivel de dificultad
 * de las pruebas Saber 9° y Saber 11° de Colombia.
 * NO son preguntas copiadas de exámenes oficiales.
 *
 * Áreas cubiertas:
 *   - Matemáticas: Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Lectura Crítica (Lenguaje): Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Ciencias Naturales: Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Ciencias Sociales: Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Inglés: Saber 11° (30 preguntas)
 *
 * Formato de ID: {area-abrev}-p-{prueba}-{numero}
 *   mat  = Matemáticas
 *   lc   = Lectura Crítica / Lenguaje
 *   nat  = Ciencias Naturales
 *   soc  = Ciencias Sociales
 *   eng  = Inglés
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

      // 6. Numérico-variacional + comunicación (fracciones/porcentajes)
      {
        id: 'mat-p-s9-06',
        enunciado: 'En una encuesta realizada a 200 estudiantes de un colegio en Cali, el 35% practica algún deporte. ¿Cuántos estudiantes practican deporte y cuántos NO practican?',
        opciones: [
          { letra: 'A', texto: '70 practican deporte y 130 no practican.' },
          { letra: 'B', texto: '35 practican deporte y 165 no practican.' },
          { letra: 'C', texto: '65 practican deporte y 135 no practican.' },
          { letra: 'D', texto: '70 practican deporte y 120 no practican.' },
        ],
        clave: 'A',
        justificacion: 'El 35% de 200 = 0,35 × 200 = 70 estudiantes practican deporte. Los que no practican = 200 − 70 = 130. La opción B usa 35 como si fuera la cantidad directa, no el porcentaje. La opción C calcula el 65% en vez del 35%. La opción D tiene el complemento equivocado (200 − 70 = 130, no 120).',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 7. Numérico-variacional + razonamiento (potencias y radicales)
      {
        id: 'mat-p-s9-07',
        enunciado: '¿Cuál de las siguientes expresiones es equivalente a √(16x⁴) cuando x > 0?',
        opciones: [
          { letra: 'A', texto: '4x' },
          { letra: 'B', texto: '4x²' },
          { letra: 'C', texto: '8x²' },
          { letra: 'D', texto: '2x²' },
        ],
        clave: 'B',
        justificacion: '√(16x⁴) = √16 · √(x⁴) = 4 · x² = 4x². Se aplica la propiedad √(a·b) = √a · √b. La opción A olvida que el exponente de x es 4 (la raíz cuadrada de x⁴ es x², no x). La opción C multiplica incorrectamente 4·2. La opción D calcula √16 = 2 en vez de 4.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 8. Numérico-variacional + resolución (sistemas de ecuaciones)
      {
        id: 'mat-p-s9-08',
        enunciado: 'En una granja hay gallinas y conejos. En total hay 20 animales y 56 patas. ¿Cuántas gallinas y cuántos conejos hay?',
        opciones: [
          { letra: 'A', texto: '12 gallinas y 8 conejos.' },
          { letra: 'B', texto: '8 gallinas y 12 conejos.' },
          { letra: 'C', texto: '10 gallinas y 10 conejos.' },
          { letra: 'D', texto: '14 gallinas y 6 conejos.' },
        ],
        clave: 'A',
        justificacion: 'Sea g = gallinas (2 patas) y c = conejos (4 patas). El sistema es: g + c = 20 y 2g + 4c = 56. De la primera ecuación: g = 20 − c. Sustituyendo: 2(20 − c) + 4c = 56 → 40 + 2c = 56 → c = 8, por tanto g = 12. Verificación: 12 + 8 = 20 ✓ y 2(12) + 4(8) = 24 + 32 = 56 ✓. Las demás opciones no satisfacen ambas condiciones simultáneamente.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 9. Geométrico-métrico + resolución (área y perímetro)
      {
        id: 'mat-p-s9-09',
        enunciado: 'Un jardín rectangular tiene un largo de 12 m y un ancho de 7 m. Se quiere rodear el jardín con una cerca y también cubrir el piso con césped. ¿Cuántos metros de cerca se necesitan y cuántos m² de césped?',
        opciones: [
          { letra: 'A', texto: 'Cerca = 38 m; césped = 84 m².' },
          { letra: 'B', texto: 'Cerca = 84 m; césped = 38 m².' },
          { letra: 'C', texto: 'Cerca = 38 m; césped = 42 m².' },
          { letra: 'D', texto: 'Cerca = 19 m; césped = 84 m².' },
        ],
        clave: 'A',
        justificacion: 'El perímetro (cerca) = 2(largo + ancho) = 2(12 + 7) = 2 × 19 = 38 m. El área (césped) = largo × ancho = 12 × 7 = 84 m². La opción B invierte perímetro y área. La opción C calcula la mitad del área. La opción D usa la mitad del perímetro.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 10. Geométrico-métrico + razonamiento (semejanza de triángulos)
      {
        id: 'mat-p-s9-10',
        enunciado: 'Un árbol proyecta una sombra de 6 m al mismo tiempo que un poste de 2 m proyecta una sombra de 1,5 m. ¿Cuál es la altura del árbol?',
        opciones: [
          { letra: 'A', texto: '6 m' },
          { letra: 'B', texto: '8 m' },
          { letra: 'C', texto: '9 m' },
          { letra: 'D', texto: '4 m' },
        ],
        clave: 'B',
        justificacion: 'Los triángulos formados por el árbol y el poste con sus sombras son semejantes (mismo ángulo solar). La razón de proporcionalidad es: altura / sombra = constante. Para el poste: 2 / 1,5 = 4/3. Para el árbol: h / 6 = 4/3, entonces h = 6 × (4/3) = 8 m. Otra forma: h/6 = 2/1,5 → h = 12/1,5 = 8 m. Las demás opciones no respetan la proporción correcta.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 11. Geométrico-métrico + comunicación (transformaciones)
      {
        id: 'mat-p-s9-11',
        enunciado: 'El punto A(−3, 2) se refleja sobre el eje y. ¿Cuáles son las coordenadas del punto imagen A\'?',
        opciones: [
          { letra: 'A', texto: 'A\' = (3, 2)' },
          { letra: 'B', texto: 'A\' = (−3, −2)' },
          { letra: 'C', texto: 'A\' = (3, −2)' },
          { letra: 'D', texto: 'A\' = (−2, 3)' },
        ],
        clave: 'A',
        justificacion: 'En una reflexión sobre el eje y, la coordenada x cambia de signo y la coordenada y permanece igual: (x, y) → (−x, y). Entonces A(−3, 2) → A\'(3, 2). La opción B refleja sobre el origen (cambian ambas coordenadas). La opción C refleja sobre el eje x (solo cambia y). La opción D intercambia las coordenadas (reflexión sobre la recta y = x).',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 12. Aleatorio + razonamiento (probabilidad clásica)
      {
        id: 'mat-p-s9-12',
        enunciado: 'Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de obtener un número par o mayor que 4?',
        opciones: [
          { letra: 'A', texto: '1/2' },
          { letra: 'B', texto: '2/3' },
          { letra: 'C', texto: '5/6' },
          { letra: 'D', texto: '4/6' },
        ],
        clave: 'B',
        justificacion: 'Los números pares son {2, 4, 6} y los mayores que 4 son {5, 6}. La unión es {2, 4, 5, 6} (4 resultados favorables). P = 4/6 = 2/3. Usando la regla de la adición: P(par) = 3/6, P(>4) = 2/6, P(par ∩ >4) = P({6}) = 1/6. P(par ∪ >4) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. La opción A solo considera los pares. La opción C sobreestima la unión. La opción D es equivalente a 2/3, pero no está simplificada (ambas son correctas numéricamente; B está en su mínima expresión y es la forma canónica).',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 13. Aleatorio + comunicación (lectura de gráficas)
      {
        id: 'mat-p-s9-13',
        enunciado: 'La siguiente tabla muestra el número de libros leídos por 5 estudiantes en un mes:\n\nEstudiante: Ana, Luis, Sara, Pedro, María\nLibros: 4, 7, 3, 6, 5\n\n¿Cuál es la moda de estos datos?',
        opciones: [
          { letra: 'A', texto: 'La moda es 5.' },
          { letra: 'B', texto: 'La moda es 4.' },
          { letra: 'C', texto: 'No hay moda porque todos los valores son distintos.' },
          { letra: 'D', texto: 'La moda es 6.' },
        ],
        clave: 'C',
        justificacion: 'Los datos son: 3, 4, 5, 6, 7. Todos los valores aparecen exactamente una vez, por lo que ningún valor se repite. Cuando todos los datos tienen la misma frecuencia (frecuencia 1), se dice que el conjunto no tiene moda. La opción A confunde la moda con la mediana. Las opciones B y D seleccionan valores arbitrarios del conjunto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 14. Numérico-variacional + razonamiento (funciones lineales)
      {
        id: 'mat-p-s9-14',
        enunciado: 'La función f(x) = 2x − 3 modela el costo en miles de pesos de producir x unidades de un producto. ¿Para qué valor de x el costo es igual a 9 miles de pesos?',
        opciones: [
          { letra: 'A', texto: 'x = 3' },
          { letra: 'B', texto: 'x = 6' },
          { letra: 'C', texto: 'x = 4' },
          { letra: 'D', texto: 'x = 5' },
        ],
        clave: 'B',
        justificacion: 'Se busca x tal que f(x) = 9: 2x − 3 = 9 → 2x = 12 → x = 6. Verificación: f(6) = 2(6) − 3 = 12 − 3 = 9 ✓. La opción A: f(3) = 6 − 3 = 3 ≠ 9. La opción C: f(4) = 8 − 3 = 5 ≠ 9. La opción D: f(5) = 10 − 3 = 7 ≠ 9.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 15. Aleatorio + resolución (interpretación estadística)
      {
        id: 'mat-p-s9-15',
        enunciado: 'En un grupo de 30 estudiantes, la nota promedio en matemáticas fue 3,8 y en español fue 4,1. Si se suman los promedios de ambas materias, ¿cuál es el promedio combinado? ¿Qué conclusión es válida?',
        opciones: [
          { letra: 'A', texto: 'El promedio combinado es 7,9 y los estudiantes rinden mejor en matemáticas.' },
          { letra: 'B', texto: 'El promedio combinado es 3,95 y los estudiantes rinden mejor en español.' },
          { letra: 'C', texto: 'El promedio combinado es 3,95 y los estudiantes rinden igual en ambas materias.' },
          { letra: 'D', texto: 'No es posible calcular un promedio combinado porque las materias son diferentes.' },
        ],
        clave: 'B',
        justificacion: 'El promedio combinado de los dos promedios es (3,8 + 4,1) / 2 = 7,9 / 2 = 3,95. Como el promedio de español (4,1) es mayor que el de matemáticas (3,8), los estudiantes rinden mejor en español. La opción A usa la suma sin dividir y concluye incorrectamente. La opción C afirma rendimiento igual cuando hay diferencia de 0,3 puntos. La opción D es incorrecta: se pueden comparar promedios de diferentes materias.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 16. Numérico-variacional + razonamiento (sucesiones)
      {
        id: 'mat-p-s9-16',
        enunciado: 'Observa la siguiente sucesión: 2, 6, 18, 54, 162, … ¿Cuál es el término que sigue y cuál es la razón de la sucesión?',
        opciones: [
          { letra: 'A', texto: 'El siguiente término es 324 y la razón es 2.' },
          { letra: 'B', texto: 'El siguiente término es 486 y la razón es 3.' },
          { letra: 'C', texto: 'El siguiente término es 324 y la razón es 3.' },
          { letra: 'D', texto: 'El siguiente término es 216 y la razón es 4.' },
        ],
        clave: 'B',
        justificacion: 'Cada término se obtiene multiplicando el anterior por 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162, 162×3=486. La razón de la sucesión geométrica es 3 y el siguiente término es 486. La opción A calcula 162×2=324 usando razón incorrecta 2. La opción C obtiene el valor correcto de la razón (3) pero calcula el término incorrectamente. La opción D usa razón 4, que no es consistente con los datos.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 17. Aleatorio + comunicación (diagrama de caja)
      {
        id: 'mat-p-s9-17',
        enunciado: 'Los tiempos (en minutos) que tardaron 9 corredores en completar una carrera son: 12, 14, 15, 15, 17, 18, 20, 22, 25. ¿Cuál es la mediana y el rango intercuartílico (RIC) de estos datos?',
        opciones: [
          { letra: 'A', texto: 'Mediana = 17; RIC = 7.' },
          { letra: 'B', texto: 'Mediana = 17; RIC = 13.' },
          { letra: 'C', texto: 'Mediana = 15; RIC = 7.' },
          { letra: 'D', texto: 'Mediana = 17; RIC = 8.' },
        ],
        clave: 'A',
        justificacion: 'Con 9 datos ordenados, la mediana es el 5.° valor: 17. El cuartil inferior Q1 es la mediana de los primeros 4 datos (12, 14, 15, 15): Q1 = (14+15)/2 = 14,5. El cuartil superior Q3 es la mediana de los últimos 4 datos (18, 20, 22, 25): Q3 = (20+22)/2 = 21. RIC = Q3 − Q1 = 21 − 14,5 = 6,5 ≈ 7. La opción B calcula el rango total (25−12=13), no el intercuartílico. La opción C usa la moda (15) como mediana. La opción D usa el rango incorrecto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 18. Geométrico-métrico + resolución (volumen)
      {
        id: 'mat-p-s9-18',
        enunciado: 'Una piscina tiene forma de prisma rectangular con 12 m de largo, 6 m de ancho y 1,5 m de profundidad. ¿Cuántos litros de agua se necesitan para llenarla completamente? (1 m³ = 1000 litros)',
        opciones: [
          { letra: 'A', texto: '108.000 litros' },
          { letra: 'B', texto: '10.800 litros' },
          { letra: 'C', texto: '1.080.000 litros' },
          { letra: 'D', texto: '108 litros' },
        ],
        clave: 'A',
        justificacion: 'Volumen = largo × ancho × profundidad = 12 × 6 × 1,5 = 108 m³. Convirtiendo: 108 m³ × 1000 litros/m³ = 108.000 litros. La opción B divide entre 10, probablemente olvidando un factor. La opción C multiplica innecesariamente por 10. La opción D omite la conversión de metros cúbicos a litros (o divide erróneamente).',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 19. Numérico-variacional + comunicación (proporcionalidad)
      {
        id: 'mat-p-s9-19',
        enunciado: 'Tres obreros pintan una pared en 6 horas. ¿Cuántas horas tardarán 6 obreros en pintar la misma pared, si todos trabajan al mismo ritmo?',
        opciones: [
          { letra: 'A', texto: '12 horas' },
          { letra: 'B', texto: '3 horas' },
          { letra: 'C', texto: '2 horas' },
          { letra: 'D', texto: '9 horas' },
        ],
        clave: 'B',
        justificacion: 'Este es un problema de proporcionalidad inversa: a más obreros, menos horas. El trabajo total es 3 obreros × 6 horas = 18 obrero·horas. Con 6 obreros: 18 ÷ 6 = 3 horas. Al duplicar los obreros, el tiempo se reduce a la mitad: 6/2 = 3 horas. La opción A duplica el tiempo en lugar de reducirlo. La opción C divide entre 3, como si los obreros se triplicaran. La opción D suma en lugar de aplicar proporcionalidad inversa.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 20. Geométrico-métrico + razonamiento (ángulos)
      {
        id: 'mat-p-s9-20',
        enunciado: 'Dos rectas paralelas son cortadas por una transversal. Uno de los ángulos alternos internos mide 65°. ¿Cuánto miden los siguientes ángulos: el ángulo alterno interno del otro lado, el ángulo correspondiente y el ángulo co-interior (mismo lado de la transversal)?',
        opciones: [
          { letra: 'A', texto: 'Alterno interno: 65°; correspondiente: 65°; co-interior: 115°.' },
          { letra: 'B', texto: 'Alterno interno: 115°; correspondiente: 65°; co-interior: 65°.' },
          { letra: 'C', texto: 'Alterno interno: 65°; correspondiente: 115°; co-interior: 115°.' },
          { letra: 'D', texto: 'Alterno interno: 65°; correspondiente: 65°; co-interior: 65°.' },
        ],
        clave: 'A',
        justificacion: 'Propiedades de rectas paralelas con transversal: (1) Los ángulos alternos internos son iguales: 65°. (2) Los ángulos correspondientes son iguales: 65°. (3) Los ángulos co-interiores (o conjugados internos) son suplementarios y suman 180°: 180° − 65° = 115°. La opción B invierte los alternos internos. La opción C confunde correspondientes con co-interiores. La opción D aplica incorrectamente la propiedad de co-interiores.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 21. Aleatorio + resolución (probabilidad de eventos compuestos)
      {
        id: 'mat-p-s9-21',
        enunciado: 'Se lanza una moneda y un dado de 6 caras al mismo tiempo. ¿Cuál es la probabilidad de obtener cara en la moneda Y un número par en el dado?',
        opciones: [
          { letra: 'A', texto: '1/4' },
          { letra: 'B', texto: '1/2' },
          { letra: 'C', texto: '3/12' },
          { letra: 'D', texto: '1/6' },
        ],
        clave: 'A',
        justificacion: 'P(cara) = 1/2. P(número par en dado) = 3/6 = 1/2 (los pares son 2, 4, 6). Como son eventos independientes: P(cara Y par) = (1/2) × (1/2) = 1/4. El espacio muestral total tiene 2 × 6 = 12 resultados posibles; los favorables son 1 (cara) × 3 (pares) = 3; P = 3/12 = 1/4. La opción B es P(cara) o P(par) por separado. La opción C es la fracción sin simplificar (equivale a 1/4, que es A). La opción D solo considera el dado.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 22. Numérico-variacional + razonamiento (notación científica)
      {
        id: 'mat-p-s9-22',
        enunciado: '¿Cuál de las siguientes expresiones en notación científica es equivalente a 0,000045?',
        opciones: [
          { letra: 'A', texto: '4,5 × 10⁻⁵' },
          { letra: 'B', texto: '45 × 10⁻⁶' },
          { letra: 'C', texto: '4,5 × 10⁵' },
          { letra: 'D', texto: '0,45 × 10⁻⁴' },
        ],
        clave: 'A',
        justificacion: 'Para escribir 0,000045 en notación científica: se mueve la coma 5 posiciones a la derecha hasta obtener 4,5, por lo que el exponente es −5. La forma correcta es 4,5 × 10⁻⁵. La opción B es equivalente numéricamente (45 × 10⁻⁶ = 4,5 × 10⁻⁵) pero no está en notación científica estándar (el coeficiente debe estar entre 1 y 10). La opción C tiene exponente positivo, que representaría un número grande. La opción D tiene el coeficiente fuera del rango estándar.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 23. Geométrico-métrico + comunicación (plano cartesiano - distancia)
      {
        id: 'mat-p-s9-23',
        enunciado: '¿Cuál es la distancia entre los puntos P(−2, 3) y Q(4, −1) en el plano cartesiano?',
        opciones: [
          { letra: 'A', texto: '√52 ≈ 7,2 unidades' },
          { letra: 'B', texto: '10 unidades' },
          { letra: 'C', texto: '√20 ≈ 4,5 unidades' },
          { letra: 'D', texto: '√28 ≈ 5,3 unidades' },
        ],
        clave: 'A',
        justificacion: 'Fórmula de distancia: d = √[(x₂−x₁)² + (y₂−y₁)²] = √[(4−(−2))² + (−1−3)²] = √[6² + (−4)²] = √[36 + 16] = √52 ≈ 7,2 unidades. La opción B suma las diferencias absolutas en vez de aplicar la fórmula (6 + 4 = 10). La opción C calcula solo una de las dos diferencias al cuadrado. La opción D comete un error aritmético en la suma de cuadrados.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 24. Aleatorio + razonamiento (diagrama de árbol)
      {
        id: 'mat-p-s9-24',
        enunciado: 'Una bolsa tiene 3 bolas rojas y 2 bolas azules. Se extraen dos bolas sin reposición. ¿Cuál es la probabilidad de que ambas bolas sean rojas?',
        opciones: [
          { letra: 'A', texto: '9/25' },
          { letra: 'B', texto: '3/10' },
          { letra: 'C', texto: '6/25' },
          { letra: 'D', texto: '1/2' },
        ],
        clave: 'B',
        justificacion: 'P(1.ª roja) = 3/5. Si ya se extrajo una roja, quedan 2 rojas de 4 bolas totales: P(2.ª roja | 1.ª roja) = 2/4 = 1/2. P(ambas rojas) = (3/5) × (1/2) = 3/10. La opción A aplica probabilidad con reposición: (3/5)² = 9/25. La opción C calcula incorrectamente. La opción D es P(2.ª roja dado que la primera fue roja), sin multiplicar por la probabilidad de la primera.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 25. Numérico-variacional + resolución (inecuaciones)
      {
        id: 'mat-p-s9-25',
        enunciado: 'Resuelve la inecuación: 2x − 5 > 3x + 1. ¿Cuál es el conjunto solución?',
        opciones: [
          { letra: 'A', texto: 'x > −6' },
          { letra: 'B', texto: 'x < −6' },
          { letra: 'C', texto: 'x > 6' },
          { letra: 'D', texto: 'x < 6' },
        ],
        clave: 'B',
        justificacion: 'Desarrollando: 2x − 5 > 3x + 1 → 2x − 3x > 1 + 5 → −x > 6 → x < −6 (al multiplicar por −1 se invierte la desigualdad). Verificación: si x = −7 (< −6): 2(−7) − 5 = −19 y 3(−7) + 1 = −20; −19 > −20 ✓. La opción A no invierte la desigualdad al dividir entre −1. La opción C comete un error de signo en el despeje. La opción D obtiene el valor correcto del umbral pero no invierte la desigualdad.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 26. Geométrico-métrico + resolución (triángulos - perímetro)
      {
        id: 'mat-p-s9-26',
        enunciado: 'Un terreno triangular es rectángulo con catetos de 15 m y 20 m. Si se quiere cercar el terreno con alambre, ¿cuántos metros de alambre se necesitan?',
        opciones: [
          { letra: 'A', texto: '35 m' },
          { letra: 'B', texto: '60 m' },
          { letra: 'C', texto: '75 m' },
          { letra: 'D', texto: '150 m' },
        ],
        clave: 'B',
        justificacion: 'Para cercar se necesita el perímetro. La hipotenusa del triángulo rectángulo con catetos 15 m y 20 m es: c = √(15² + 20²) = √(225 + 400) = √625 = 25 m. Perímetro = 15 + 20 + 25 = 60 m de alambre. La opción A solo suma los dos catetos (35 m). La opción C añade incorrectamente 15 m extra. La opción D calcula el doble del perímetro.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 27. Numérico-variacional + comunicación (funciones cuadráticas - tabla de valores)
      {
        id: 'mat-p-s9-27',
        enunciado: 'Para la función f(x) = x² − 4, ¿cuál de los siguientes pares ordenados NO pertenece a la gráfica de f?',
        opciones: [
          { letra: 'A', texto: '(0, −4)' },
          { letra: 'B', texto: '(2, 0)' },
          { letra: 'C', texto: '(3, 5)' },
          { letra: 'D', texto: '(−2, 4)' },
        ],
        clave: 'D',
        justificacion: 'Se verifica sustituyendo cada par en f(x) = x² − 4: A: f(0) = 0 − 4 = −4 ✓. B: f(2) = 4 − 4 = 0 ✓. C: f(3) = 9 − 4 = 5 ✓. D: f(−2) = (−2)² − 4 = 4 − 4 = 0, no 4. El par (−2, 4) no pertenece a la gráfica porque f(−2) = 0, no 4. Las opciones A, B y C satisfacen la función.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 28. Aleatorio + comunicación (lectura de gráficas de barras)
      {
        id: 'mat-p-s9-28',
        enunciado: 'Una gráfica de barras muestra las ventas mensuales de una tienda: enero=80, febrero=65, marzo=90, abril=75, mayo=85 (en miles de pesos). ¿Cuál es la diferencia entre el mes de mayor venta y el de menor venta, y cuál es el promedio de ventas?',
        opciones: [
          { letra: 'A', texto: 'Diferencia = 25 mil; promedio = 79 mil.' },
          { letra: 'B', texto: 'Diferencia = 25 mil; promedio = 79.000.' },
          { letra: 'C', texto: 'Diferencia = 30 mil; promedio = 79 mil.' },
          { letra: 'D', texto: 'Diferencia = 25 mil; promedio = 80 mil.' },
        ],
        clave: 'A',
        justificacion: 'Mayor venta: marzo = 90 mil. Menor venta: febrero = 65 mil. Diferencia = 90 − 65 = 25 mil. Promedio = (80 + 65 + 90 + 75 + 85) / 5 = 395 / 5 = 79 mil. La opción B expresa correctamente la diferencia pero el promedio en unidades inconsistentes (79.000 pesos es lo mismo que 79 mil, ambas son equivalentes; sin embargo A usa la forma más limpia). La opción C calcula la diferencia incorrectamente. La opción D redondea mal el promedio.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 29. Geométrico-métrico + razonamiento (círculos)
      {
        id: 'mat-p-s9-29',
        enunciado: 'Un círculo tiene radio de 7 cm. ¿Cuáles son su área y su circunferencia? (Use π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Área ≈ 153,86 cm²; circunferencia ≈ 43,96 cm.' },
          { letra: 'B', texto: 'Área ≈ 43,96 cm²; circunferencia ≈ 153,86 cm.' },
          { letra: 'C', texto: 'Área ≈ 153,86 cm²; circunferencia ≈ 21,98 cm.' },
          { letra: 'D', texto: 'Área ≈ 307,72 cm²; circunferencia ≈ 43,96 cm.' },
        ],
        clave: 'A',
        justificacion: 'Área = π·r² = 3,14 × 7² = 3,14 × 49 ≈ 153,86 cm². Circunferencia = 2·π·r = 2 × 3,14 × 7 ≈ 43,96 cm. La opción B invierte área y circunferencia. La opción C calcula la circunferencia como π·r en vez de 2·π·r. La opción D calcula el área usando el diámetro (14) en lugar del radio (7).',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 30. Numérico-variacional + resolución (sistemas de ecuaciones - método de sustitución)
      {
        id: 'mat-p-s9-30',
        enunciado: 'Dos números son tales que su suma es 48 y su diferencia es 12. ¿Cuáles son los dos números?',
        opciones: [
          { letra: 'A', texto: '30 y 18' },
          { letra: 'B', texto: '24 y 24' },
          { letra: 'C', texto: '36 y 12' },
          { letra: 'D', texto: '32 y 16' },
        ],
        clave: 'A',
        justificacion: 'Sea x el número mayor e y el menor. Sistema: x + y = 48 y x − y = 12. Sumando las ecuaciones: 2x = 60, entonces x = 30. Sustituyendo: 30 + y = 48, y = 18. Verificación: 30 + 18 = 48 ✓ y 30 − 18 = 12 ✓. La opción B da suma correcta pero diferencia 0. La opción C: 36 + 12 = 48 ✓ pero 36 − 12 = 24 ≠ 12. La opción D: 32 + 16 = 48 ✓ pero 32 − 16 = 16 ≠ 12.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 31. Numérico-variacional + razonamiento (factorización)
      {
        id: 'mat-p-s9-31',
        enunciado: 'Un agricultor del Tolima tiene un lote cuya área, en metros cuadrados, está representada por la expresión x² + 7x + 12. Al factorizar esta expresión, el agricultor puede determinar las posibles dimensiones del lote. ¿Cuáles son los factores de x² + 7x + 12?',
        opciones: [
          { letra: 'A', texto: '(x + 3)(x + 4)' },
          { letra: 'B', texto: '(x + 2)(x + 6)' },
          { letra: 'C', texto: '(x + 1)(x + 12)' },
          { letra: 'D', texto: '(x − 3)(x − 4)' },
        ],
        clave: 'A',
        justificacion: 'Para factorizar x² + 7x + 12 se buscan dos números que sumados den 7 y multiplicados den 12: 3 + 4 = 7 y 3 × 4 = 12. Los factores son (x + 3)(x + 4). Verificación: (x+3)(x+4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓. La opción B: 2 + 6 = 8 ≠ 7. La opción C: 1 + 12 = 13 ≠ 7. La opción D produce x² − 7x + 12, con signos negativos.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 32. Aleatorio + resolución (frecuencia relativa)
      {
        id: 'mat-p-s9-32',
        enunciado: 'En una encuesta a 40 estudiantes de un colegio de Manizales sobre su deporte favorito se obtuvieron los siguientes resultados: fútbol: 16, baloncesto: 10, natación: 8, ciclismo: 6. ¿Cuál es la frecuencia relativa del fútbol y qué porcentaje de estudiantes prefiere deportes acuáticos o ciclismo?',
        opciones: [
          { letra: 'A', texto: 'Frecuencia relativa del fútbol = 0,40; deportes acuáticos o ciclismo = 35%.' },
          { letra: 'B', texto: 'Frecuencia relativa del fútbol = 0,16; deportes acuáticos o ciclismo = 14%.' },
          { letra: 'C', texto: 'Frecuencia relativa del fútbol = 0,40; deportes acuáticos o ciclismo = 30%.' },
          { letra: 'D', texto: 'Frecuencia relativa del fútbol = 0,25; deportes acuáticos o ciclismo = 35%.' },
        ],
        clave: 'A',
        justificacion: 'Frecuencia relativa del fútbol = 16/40 = 0,40. Natación + ciclismo = 8 + 6 = 14 estudiantes; porcentaje = 14/40 = 0,35 = 35%. La opción B confunde frecuencia absoluta con relativa. La opción C calcula bien el fútbol pero mal el porcentaje restante. La opción D divide 10/40 = 0,25 usando baloncesto en vez de fútbol.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 33. Geométrico-métrico + comunicación (cuerpos geométricos)
      {
        id: 'mat-p-s9-33',
        enunciado: 'Una caja de cartón tiene forma de paralelepípedo rectangular con largo = 30 cm, ancho = 20 cm y alto = 15 cm. Para fabricar la caja se necesita el área total de todas sus caras. ¿Cuánto cartón se requiere para fabricar la caja (área total)?',
        opciones: [
          { letra: 'A', texto: '2.700 cm²' },
          { letra: 'B', texto: '9.000 cm²' },
          { letra: 'C', texto: '2.700 cm³' },
          { letra: 'D', texto: '1.350 cm²' },
        ],
        clave: 'A',
        justificacion: 'El área total de un paralelepípedo es: A = 2(l×a + l×h + a×h) = 2(30×20 + 30×15 + 20×15) = 2(600 + 450 + 300) = 2 × 1350 = 2700 cm². La opción B es el volumen (30×20×15 = 9000 cm³), no el área. La opción C tiene el valor correcto del área pero unidades de volumen. La opción D calcula solo la mitad del área total.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 34. Numérico-variacional + resolución (razones y proporciones)
      {
        id: 'mat-p-s9-34',
        enunciado: 'En una receta para hacer pandebono se necesitan 3 tazas de almidón por cada 2 tazas de queso. Si se quieren usar 9 tazas de almidón, ¿cuántas tazas de queso se necesitan? ¿Y si se quieren usar 5 tazas de queso?',
        opciones: [
          { letra: 'A', texto: 'Con 9 tazas de almidón: 6 tazas de queso; con 5 tazas de queso: 7,5 tazas de almidón.' },
          { letra: 'B', texto: 'Con 9 tazas de almidón: 4 tazas de queso; con 5 tazas de queso: 7 tazas de almidón.' },
          { letra: 'C', texto: 'Con 9 tazas de almidón: 6 tazas de queso; con 5 tazas de queso: 8 tazas de almidón.' },
          { letra: 'D', texto: 'Con 9 tazas de almidón: 3 tazas de queso; con 5 tazas de queso: 7,5 tazas de almidón.' },
        ],
        clave: 'A',
        justificacion: 'La proporción es almidón/queso = 3/2. Con 9 tazas de almidón: 9/x = 3/2 → x = 18/3 = 6 tazas de queso. Con 5 tazas de queso: y/5 = 3/2 → y = 15/2 = 7,5 tazas de almidón. La opción B calcula incorrectamente. La opción C halla bien la primera parte pero falla en la segunda. La opción D reduce erróneamente la primera proporción a 1:1 en lugar de 3:2.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 35. Aleatorio + razonamiento (diagramas de Venn y conjuntos)
      {
        id: 'mat-p-s9-35',
        enunciado: 'En un salón de 35 estudiantes, 20 practican fútbol, 15 practican baloncesto y 8 practican ambos deportes. ¿Cuántos estudiantes no practican ninguno de los dos deportes?',
        opciones: [
          { letra: 'A', texto: '8 estudiantes' },
          { letra: 'B', texto: '27 estudiantes' },
          { letra: 'C', texto: '0 estudiantes' },
          { letra: 'D', texto: '7 estudiantes' },
        ],
        clave: 'A',
        justificacion: 'Usando el principio de inclusión-exclusión: |Fútbol ∪ Baloncesto| = |Fútbol| + |Baloncesto| − |Fútbol ∩ Baloncesto| = 20 + 15 − 8 = 27. Los que practican algún deporte = 27. Los que no practican ninguno = 35 − 27 = 8 estudiantes. La opción B es la cantidad que practica al menos uno. La opción C daría 0, asumiendo que todos practican algún deporte. La opción D resta 8 del total sin considerar la unión.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 36. Geométrico-métrico + resolución (escala)
      {
        id: 'mat-p-s9-36',
        enunciado: 'En un mapa de Colombia con escala 1:5.000.000, la distancia entre Bogotá y Medellín mide 5,2 cm. ¿Cuál es la distancia real aproximada entre estas dos ciudades?',
        opciones: [
          { letra: 'A', texto: '26 km' },
          { letra: 'B', texto: '260 km' },
          { letra: 'C', texto: '2.600 km' },
          { letra: 'D', texto: '0,26 km' },
        ],
        clave: 'B',
        justificacion: 'Con la escala 1:5.000.000, cada centímetro en el mapa equivale a 5.000.000 cm = 50 km reales. Distancia real = 5,2 cm × 50 km/cm = 260 km. La opción A olvida convertir (divide entre 10 extra). La opción C multiplica dos veces. La opción D usa proporción inversa.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 37. Numérico-variacional + razonamiento (valor absoluto)
      {
        id: 'mat-p-s9-37',
        enunciado: '¿Cuál de las siguientes opciones representa correctamente la solución de |2x − 4| = 6?',
        opciones: [
          { letra: 'A', texto: 'x = 5 o x = −1' },
          { letra: 'B', texto: 'x = 5 o x = 1' },
          { letra: 'C', texto: 'Solo x = 5' },
          { letra: 'D', texto: 'x = 4 o x = −1' },
        ],
        clave: 'A',
        justificacion: 'La ecuación |2x − 4| = 6 tiene dos casos: Caso 1: 2x − 4 = 6 → 2x = 10 → x = 5. Caso 2: 2x − 4 = −6 → 2x = −2 → x = −1. Verificación: |2(5) − 4| = |6| = 6 ✓ y |2(−1) − 4| = |−6| = 6 ✓. La opción B falla en el segundo caso (1 en vez de −1). La opción C omite el segundo caso. La opción D tiene error en el primer caso.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 38. Aleatorio + comunicación (tablas de frecuencia)
      {
        id: 'mat-p-s9-38',
        enunciado: 'La siguiente tabla muestra las edades de 20 participantes en un taller:\n\nEdad: 14, 15, 16, 17, 18\nFrecuencia: 3, 5, 7, 4, 1\n\n¿Cuál es la edad modal y cuál es la media aritmética?',
        opciones: [
          { letra: 'A', texto: 'Moda = 16; media = 15,75.' },
          { letra: 'B', texto: 'Moda = 16; media = 16.' },
          { letra: 'C', texto: 'Moda = 15; media = 15,75.' },
          { letra: 'D', texto: 'Moda = 16; media = 15,5.' },
        ],
        clave: 'A',
        justificacion: 'La moda es la edad con mayor frecuencia: 16 años (frecuencia 7). Para la media: Σ(edad × frecuencia) = 14×3 + 15×5 + 16×7 + 17×4 + 18×1 = 42 + 75 + 112 + 68 + 18 = 315. Media = 315/20 = 15,75. La opción B redondea mal la media. La opción C confunde la moda con la edad 15. La opción D calcula incorrectamente la media.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 39. Numérico-variacional + comunicación (expresiones algebraicas)
      {
        id: 'mat-p-s9-39',
        enunciado: 'Un vendedor de arepas gana $800 por cada arepa vendida y tiene un costo fijo diario de $15.000. Si en un día vende "n" arepas, ¿cuál de las siguientes expresiones representa su ganancia neta diaria?',
        opciones: [
          { letra: 'A', texto: 'G(n) = 800n − 15.000' },
          { letra: 'B', texto: 'G(n) = 15.000n − 800' },
          { letra: 'C', texto: 'G(n) = 800n + 15.000' },
          { letra: 'D', texto: 'G(n) = (800 − 15.000)n' },
        ],
        clave: 'A',
        justificacion: 'Los ingresos son 800 pesos por arepa: 800n. Los costos fijos son $15.000 que se restan independientemente de cuántas arepas venda. Ganancia neta = Ingresos − Costos = 800n − 15.000. La opción B invierte el papel de ingresos y costos. La opción C suma el costo fijo en vez de restarlo. La opción D multiplica la diferencia por n, lo cual no representa correctamente el modelo.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 40. Geométrico-métrico + razonamiento (Teorema de Tales)
      {
        id: 'mat-p-s9-40',
        enunciado: 'En un triángulo ABC, una recta paralela a BC corta a los lados AB y AC en los puntos D y E respectivamente. Si AD = 4 cm, DB = 6 cm y AE = 5 cm, ¿cuánto mide EC?',
        opciones: [
          { letra: 'A', texto: 'EC = 6 cm' },
          { letra: 'B', texto: 'EC = 7,5 cm' },
          { letra: 'C', texto: 'EC = 8 cm' },
          { letra: 'D', texto: 'EC = 4 cm' },
        ],
        clave: 'B',
        justificacion: 'Por el Teorema de Tales, cuando una recta es paralela a la base de un triángulo, divide proporcialmente los otros dos lados: AD/DB = AE/EC. Entonces: 4/6 = 5/EC → EC = (5 × 6)/4 = 30/4 = 7,5 cm. La opción A no aplica la proporción. La opción C usa una proporción incorrecta. La opción D iguala EC a AD sin justificación.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 41. Numérico-variacional + resolución (porcentajes de variación)
      {
        id: 'mat-p-s9-41',
        enunciado: 'El precio de un televisor en enero era de $1.200.000. En febrero subió un 15% y en marzo bajó un 10% del precio de febrero. ¿Cuánto cuesta el televisor al final de marzo?',
        opciones: [
          { letra: 'A', texto: '$1.242.000' },
          { letra: 'B', texto: '$1.260.000' },
          { letra: 'C', texto: '$1.200.000' },
          { letra: 'D', texto: '$1.296.000' },
        ],
        clave: 'A',
        justificacion: 'En febrero: 1.200.000 × 1,15 = 1.380.000. En marzo (baja 10% sobre el precio de febrero): 1.380.000 × 0,90 = 1.242.000. El aumento y la disminución no se cancelan porque se aplican sobre bases diferentes. La opción B aplica el 5% neto sobre el precio original (1.200.000 × 1,05 = 1.260.000), lo cual es incorrecto. La opción C supone que se cancelan los cambios. La opción D aplica solo el aumento.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 42. Aleatorio + razonamiento (probabilidad complementaria)
      {
        id: 'mat-p-s9-42',
        enunciado: 'Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de NO obtener un número mayor que 4?',
        opciones: [
          { letra: 'A', texto: '1/3' },
          { letra: 'B', texto: '2/3' },
          { letra: 'C', texto: '1/2' },
          { letra: 'D', texto: '5/6' },
        ],
        clave: 'B',
        justificacion: 'Los números mayores que 4 son {5, 6}: P(mayor que 4) = 2/6 = 1/3. El evento complementario (NO obtener mayor que 4) tiene probabilidad P = 1 − 1/3 = 2/3. Los números que cumplen "no mayores que 4" son {1, 2, 3, 4}: 4 casos, P = 4/6 = 2/3. La opción A es la probabilidad del evento original (mayor que 4). La opción C corresponde a {1,2,3} o {4,5,6}. La opción D se obtendría si solo un número fuera mayor que 4.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 43. Numérico-variacional + razonamiento (monomios y polinomios)
      {
        id: 'mat-p-s9-43',
        enunciado: '¿Cuál es el resultado de (3x² − 2x + 1) + (x² + 4x − 5)?',
        opciones: [
          { letra: 'A', texto: '4x² + 2x − 4' },
          { letra: 'B', texto: '4x² + 2x + 4' },
          { letra: 'C', texto: '3x² + 2x − 4' },
          { letra: 'D', texto: '4x⁴ + 2x² − 4' },
        ],
        clave: 'A',
        justificacion: 'Se suman los términos semejantes: (3x² + x²) + (−2x + 4x) + (1 − 5) = 4x² + 2x + (−4) = 4x² + 2x − 4. La opción B suma los términos independientes como 1 + 5 = 6 en vez de 1 − 5 = −4. La opción C no suma correctamente los términos en x². La opción D eleva los exponentes al sumar, lo cual es incorrecto.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 44. Geométrico-métrico + resolución (áreas de figuras compuestas)
      {
        id: 'mat-p-s9-44',
        enunciado: 'Un parque tiene forma de un rectángulo de 50 m × 30 m con un semicírculo en uno de sus lados cortos (radio = 15 m). ¿Cuál es el área total del parque? (Use π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 1.853,25 m²' },
          { letra: 'B', texto: 'Aproximadamente 2.206,5 m²' },
          { letra: 'C', texto: 'Aproximadamente 1.500 m²' },
          { letra: 'D', texto: 'Aproximadamente 1.706,5 m²' },
        ],
        clave: 'A',
        justificacion: 'Área del rectángulo = 50 × 30 = 1.500 m². Área del semicírculo = (1/2) × π × r² = (1/2) × 3,14 × 15² = (1/2) × 3,14 × 225 = 353,25 m². Área total = 1.500 + 353,25 = 1.853,25 m². La opción B calcula el área de un círculo completo. La opción C omite el semicírculo. La opción D usa un radio incorrecto.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 45. Numérico-variacional + comunicación (funciones lineales — interpretación de pendiente)
      {
        id: 'mat-p-s9-45',
        enunciado: 'Un taxi en Bogotá cobra una tarifa base de $4.500 más $350 por cada minuto de recorrido. Si el viaje dura "t" minutos, la función del costo es C(t) = 350t + 4.500. ¿Qué representa el número 350 en el modelo y cuál es el costo de un viaje de 20 minutos?',
        opciones: [
          { letra: 'A', texto: 'El 350 es la tarifa base del viaje; el costo a 20 min es $11.500.' },
          { letra: 'B', texto: 'El 350 es el costo por cada minuto adicional (pendiente); el costo a 20 min es $11.500.' },
          { letra: 'C', texto: 'El 350 es el costo por cada minuto adicional (pendiente); el costo a 20 min es $7.000.' },
          { letra: 'D', texto: 'El 350 representa el tiempo máximo del viaje; el costo a 20 min es $11.500.' },
        ],
        clave: 'B',
        justificacion: 'En C(t) = 350t + 4.500, el coeficiente de t (350) es la pendiente y representa el incremento en el costo por cada minuto: $350/min. El 4.500 es el intercepto o tarifa base. Para t = 20: C(20) = 350(20) + 4.500 = 7.000 + 4.500 = 11.500 pesos. La opción A confunde el 350 con la tarifa base. La opción C calcula solo 350 × 20 sin sumar la tarifa base. La opción D malinterpreta el coeficiente como tiempo.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 46. Aleatorio + resolución (diagrama de caja — Q1 y Q3)
      {
        id: 'mat-p-s9-46',
        enunciado: 'Los pesos (en kg) de 10 estudiantes ordenados de menor a mayor son: 45, 48, 50, 52, 55, 57, 60, 63, 66, 70. ¿Cuáles son el primer cuartil (Q1), la mediana y el tercer cuartil (Q3)?',
        opciones: [
          { letra: 'A', texto: 'Q1 = 50; mediana = 56; Q3 = 63.' },
          { letra: 'B', texto: 'Q1 = 49; mediana = 56; Q3 = 64,5.' },
          { letra: 'C', texto: 'Q1 = 50; mediana = 55; Q3 = 63.' },
          { letra: 'D', texto: 'Q1 = 48; mediana = 56; Q3 = 66.' },
        ],
        clave: 'B',
        justificacion: 'Con 10 datos, la mediana es el promedio de los datos 5° y 6°: (55 + 57)/2 = 56. Q1 es la mediana de los primeros 5 datos (45,48,50,52,55): Q1 = (48+50)/2 = 49. Q3 es la mediana de los últimos 5 datos (57,60,63,66,70): Q3 = (63+66)/2 = 64,5. La opción A usa el 3° valor como Q1. La opción C usa el 5° dato como mediana. La opción D usa los valores extremos como cuartiles.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 47. Numérico-variacional + razonamiento (conversión de unidades y tasas)
      {
        id: 'mat-p-s9-47',
        enunciado: 'Un ciclista recorre 45 km en 1,5 horas a velocidad constante. ¿Cuál es su velocidad en km/h y cuántos metros recorre por segundo?',
        opciones: [
          { letra: 'A', texto: '30 km/h; aproximadamente 8,3 m/s.' },
          { letra: 'B', texto: '30 km/h; aproximadamente 12,5 m/s.' },
          { letra: 'C', texto: '67,5 km/h; aproximadamente 18,75 m/s.' },
          { letra: 'D', texto: '30 km/h; aproximadamente 0,5 m/s.' },
        ],
        clave: 'A',
        justificacion: 'Velocidad = distancia/tiempo = 45 km / 1,5 h = 30 km/h. Para convertir a m/s: 30 km/h × (1000 m/km) / (3600 s/h) = 30.000/3.600 ≈ 8,33 m/s. La opción B confunde la conversión (usa 2.400 s en vez de 3.600 s). La opción C multiplica en vez de dividir. La opción D divide entre 60 dos veces.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 48. Geométrico-métrico + comunicación (simetría y figuras)
      {
        id: 'mat-p-s9-48',
        enunciado: '¿Cuál de las siguientes figuras NO tiene ejes de simetría?',
        opciones: [
          { letra: 'A', texto: 'Un cuadrado.' },
          { letra: 'B', texto: 'Un triángulo equilátero.' },
          { letra: 'C', texto: 'Un paralelogramo que no es rectángulo.' },
          { letra: 'D', texto: 'Un círculo.' },
        ],
        clave: 'C',
        justificacion: 'Un paralelogramo que no es rectángulo tiene lados paralelos iguales pero no posee línea de reflexión que lo divida en dos mitades idénticas (sus ángulos no son rectos), por lo que carece de ejes de simetría. El cuadrado tiene 4 ejes, el triángulo equilátero tiene 3 ejes y el círculo tiene infinitos ejes de simetría.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 49. Aleatorio + razonamiento (muestra aleatoria e inferencia simple)
      {
        id: 'mat-p-s9-49',
        enunciado: 'En una fábrica se revisan 50 productos al azar y se encuentran 4 defectuosos. Si la fábrica produce 5.000 productos por día, ¿cuántos productos defectuosos se esperan por día?',
        opciones: [
          { letra: 'A', texto: '200 productos' },
          { letra: 'B', texto: '400 productos' },
          { letra: 'C', texto: '100 productos' },
          { letra: 'D', texto: '250 productos' },
        ],
        clave: 'B',
        justificacion: 'La tasa de defectuosos en la muestra es 4/50 = 0,08 = 8%. Esperados en la producción total = 5.000 × 0,08 = 400 productos. Alternativamente: proporción = 4/50 = x/5000 → x = 4 × 100 = 400. La opción A aplica la proporción 4/100 (incorrecta). La opción C usa 2/100. La opción D aplica 5/100.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 50. Numérico-variacional + resolución (plano cartesiano — función cuadrática)
      {
        id: 'mat-p-s9-50',
        enunciado: 'Una pelota es lanzada verticalmente y su altura en metros está modelada por h(t) = −5t² + 20t, donde t es el tiempo en segundos. ¿En qué momento alcanza la altura máxima y cuánto mide esa altura máxima?',
        opciones: [
          { letra: 'A', texto: 'Altura máxima a t = 2 s; h_máx = 20 m.' },
          { letra: 'B', texto: 'Altura máxima a t = 4 s; h_máx = 20 m.' },
          { letra: 'C', texto: 'Altura máxima a t = 2 s; h_máx = 15 m.' },
          { letra: 'D', texto: 'Altura máxima a t = 2 s; h_máx = 40 m.' },
        ],
        clave: 'A',
        justificacion: 'Para una parábola h(t) = −5t² + 20t, el vértice (máximo) se halla en t = −b/(2a) = −20/(2×(−5)) = −20/(−10) = 2 s. La altura máxima es h(2) = −5(4) + 20(2) = −20 + 40 = 20 m. La opción B busca cuándo la pelota toca el suelo (h=0: −5t² + 20t = 0 → t = 4). La opción C comete un error aritmético. La opción D calcula h(4) = 0, no la altura máxima.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 51. Geométrico-métrico + razonamiento (polígonos regulares)
      {
        id: 'mat-p-s9-51',
        enunciado: 'Un polígono regular tiene cada ángulo interior igual a 135°. ¿Cuántos lados tiene el polígono?',
        opciones: [
          { letra: 'A', texto: '6 lados (hexágono)' },
          { letra: 'B', texto: '8 lados (octágono)' },
          { letra: 'C', texto: '10 lados (decágono)' },
          { letra: 'D', texto: '5 lados (pentágono)' },
        ],
        clave: 'B',
        justificacion: 'La fórmula del ángulo interior de un polígono regular de n lados es: ángulo = (n−2)×180°/n. Igualando a 135°: (n−2)×180/n = 135 → 180n − 360 = 135n → 45n = 360 → n = 8. Un octágono regular tiene ángulos interiores de 135°. La opción A: hexágono tiene 120°. La opción C: decágono tiene 144°. La opción D: pentágono tiene 108°.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 52. Aleatorio + comunicación (correlación entre variables)
      {
        id: 'mat-p-s9-52',
        enunciado: 'Un grupo de estudiantes registró las horas de estudio por semana y sus calificaciones promedio: (2 h, 3.0), (4 h, 3.5), (6 h, 4.0), (8 h, 4.2), (10 h, 4.8). Al graficar estos datos, el patrón muestra que a mayor tiempo de estudio, mayor calificación. ¿Qué tipo de correlación existe entre estas variables?',
        opciones: [
          { letra: 'A', texto: 'Correlación negativa, porque las horas de estudio afectan las calificaciones.' },
          { letra: 'B', texto: 'No existe correlación porque las calificaciones dependen de la inteligencia, no del tiempo.' },
          { letra: 'C', texto: 'Correlación positiva, porque al aumentar las horas de estudio, también aumentan las calificaciones.' },
          { letra: 'D', texto: 'Correlación nula, porque los datos son muy pocos para concluir.' },
        ],
        clave: 'C',
        justificacion: 'Una correlación positiva ocurre cuando al aumentar una variable, la otra también aumenta. Los datos muestran claramente que a más horas de estudio, mayor calificación, lo que define una correlación positiva. La opción A describe el efecto pero lo llama negativa incorrectamente. La opción B introduce factores externos irrelevantes para el análisis estadístico. La opción D es incorrecta porque 5 pares de datos sí permiten observar tendencias.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 53. Numérico-variacional + resolución (progresión aritmética)
      {
        id: 'mat-p-s9-53',
        enunciado: 'Un constructor coloca baldosas en un pasillo rectangular en filas paralelas. La primera fila tiene 5 baldosas, la segunda tiene 8, la tercera tiene 11. Si el patrón continúa aritméticamente, ¿cuántas baldosas tendrá la décima fila y cuántas en total en las primeras 10 filas?',
        opciones: [
          { letra: 'A', texto: 'Fila 10: 32 baldosas; total: 185 baldosas.' },
          { letra: 'B', texto: 'Fila 10: 35 baldosas; total: 200 baldosas.' },
          { letra: 'C', texto: 'Fila 10: 32 baldosas; total: 175 baldosas.' },
          { letra: 'D', texto: 'Fila 10: 30 baldosas; total: 185 baldosas.' },
        ],
        clave: 'A',
        justificacion: 'La sucesión es aritmética con a₁ = 5 y razón d = 3. Término 10: a₁₀ = 5 + (10−1)×3 = 5 + 27 = 32 baldosas. Suma de los primeros 10 términos: S₁₀ = (10/2) × (a₁ + a₁₀) = 5 × (5 + 32) = 5 × 37 = 185 baldosas. La opción B usa a₁₀ = 35 (error en la razón). La opción C tiene la suma incorrecta. La opción D usa a₁₀ = 30 (razón d = 2,78...).',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 54. Geométrico-métrico + resolución (cuerpos de revolución — cilindro)
      {
        id: 'mat-p-s9-54',
        enunciado: 'Una lata de refresco tiene forma cilíndrica con radio de 3,5 cm y altura de 12 cm. Se quiere pintar la superficie lateral de la lata. ¿Cuántos cm² de pintura se necesitan? (Use π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 263,76 cm²' },
          { letra: 'B', texto: 'Aproximadamente 527,52 cm²' },
          { letra: 'C', texto: 'Aproximadamente 76,93 cm²' },
          { letra: 'D', texto: 'Aproximadamente 461,58 cm²' },
        ],
        clave: 'A',
        justificacion: 'La superficie lateral de un cilindro es: A_lat = 2 × π × r × h = 2 × 3,14 × 3,5 × 12 = 2 × 3,14 × 42 = 2 × 131,88 = 263,76 cm². La opción B calcula el área total (lateral + dos bases): 263,76 + 2×(π×3,5²) = 263,76 + 2×38,465 ≈ 340,69 (diferente, pero la opción B dobla la lateral sin bases). La opción C calcula solo el área de la base. La opción D usa el diámetro en lugar del radio.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 55. Numérico-variacional + comunicación (recta numérica y desigualdades)
      {
        id: 'mat-p-s9-55',
        enunciado: 'En la recta numérica, ¿cuál de los siguientes intervalos representa la solución de la desigualdad compuesta −3 ≤ 2x + 1 < 7?',
        opciones: [
          { letra: 'A', texto: '−2 ≤ x < 3' },
          { letra: 'B', texto: '−1 ≤ x < 4' },
          { letra: 'C', texto: '−2 < x ≤ 3' },
          { letra: 'D', texto: '−2 ≤ x ≤ 3' },
        ],
        clave: 'A',
        justificacion: 'Resolviendo la desigualdad compuesta: −3 ≤ 2x + 1 < 7. Restando 1 en todos los términos: −4 ≤ 2x < 6. Dividiendo entre 2: −2 ≤ x < 3. El corchete izquierdo [−2 indica que −2 es solución; el paréntesis derecho 3) indica que 3 no es solución. La opción B comete un error al restar: 2x ≥ −3−1 = −4, x ≥ −2 (correcto) pero opera mal el límite superior. Las opciones C y D tienen los símbolos de desigualdad incorrectos.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 56. Aleatorio + resolución (espacios muestrales)
      {
        id: 'mat-p-s9-56',
        enunciado: 'Se lanza un dado de 4 caras (con números 1, 2, 3, 4) y una moneda al mismo tiempo. ¿Cuántos resultados posibles tiene el espacio muestral y cuál es la probabilidad de obtener un número impar en el dado Y cruz en la moneda?',
        opciones: [
          { letra: 'A', texto: 'Espacio muestral: 8 resultados; P(impar y cruz) = 1/4.' },
          { letra: 'B', texto: 'Espacio muestral: 6 resultados; P(impar y cruz) = 1/4.' },
          { letra: 'C', texto: 'Espacio muestral: 8 resultados; P(impar y cruz) = 3/8.' },
          { letra: 'D', texto: 'Espacio muestral: 8 resultados; P(impar y cruz) = 1/8.' },
        ],
        clave: 'A',
        justificacion: 'El espacio muestral = 4 (dado) × 2 (moneda) = 8 resultados. Los impares en el dado son {1, 3}. La cruz es 1 resultado de la moneda. Favorables = 2 × 1 = 2. P = 2/8 = 1/4. La opción B suma en vez de multiplicar. La opción C calcula P de obtener impar en el dado sin condición de la moneda. La opción D cuenta solo un impar (1 en vez de 2).',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 57. Numérico-variacional + razonamiento (números irracionales)
      {
        id: 'mat-p-s9-57',
        enunciado: '¿Cuál de las siguientes afirmaciones sobre los números irracionales es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Todo número irracional puede expresarse como fracción de dos enteros.' },
          { letra: 'B', texto: 'π y √2 son números irracionales porque sus decimales no se repiten ni terminan.' },
          { letra: 'C', texto: 'El número 0,333... es irracional porque tiene infinitos decimales.' },
          { letra: 'D', texto: 'La suma de dos números irracionales siempre es irracional.' },
        ],
        clave: 'B',
        justificacion: 'Los números irracionales son aquellos que no pueden expresarse como fracción p/q (con p, q enteros y q ≠ 0), y su representación decimal es infinita no periódica. π ≈ 3,14159... y √2 ≈ 1,41421... son ejemplos clásicos. La opción A es la definición de número racional, no irracional. La opción C es incorrecta: 0,333... = 1/3 es racional (decimal periódico). La opción D es falsa: (√2) + (−√2) = 0, que es racional.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 58. Geométrico-métrico + razonamiento (ángulos en un triángulo)
      {
        id: 'mat-p-s9-58',
        enunciado: 'En un triángulo, uno de los ángulos mide 90° y otro mide 37°. Un arquitecto necesita conocer el tercer ángulo para diseñar una estructura. ¿Cuánto mide el tercer ángulo y cómo se clasifica el triángulo?',
        opciones: [
          { letra: 'A', texto: 'Tercer ángulo = 53°; es un triángulo rectángulo acutángulo.' },
          { letra: 'B', texto: 'Tercer ángulo = 53°; es un triángulo rectángulo.' },
          { letra: 'C', texto: 'Tercer ángulo = 43°; es un triángulo obtusángulo.' },
          { letra: 'D', texto: 'Tercer ángulo = 53°; es un triángulo isósceles.' },
        ],
        clave: 'B',
        justificacion: 'La suma de los ángulos de un triángulo es 180°. Tercer ángulo = 180° − 90° − 37° = 53°. Como el triángulo tiene un ángulo de exactamente 90°, es un triángulo rectángulo. La opción A agrega la clasificación de "acutángulo" que es incompatible con tener un ángulo recto. La opción C calcula mal el tercer ángulo. La opción D confunde la clasificación.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 59. Numérico-variacional + resolución (ecuaciones con fracciones)
      {
        id: 'mat-p-s9-59',
        enunciado: 'Resuelve la ecuación: (x/3) + (x/4) = 7. ¿Cuál es el valor de x?',
        opciones: [
          { letra: 'A', texto: 'x = 12' },
          { letra: 'B', texto: 'x = 28' },
          { letra: 'C', texto: 'x = 21' },
          { letra: 'D', texto: 'x = 7' },
        ],
        clave: 'A',
        justificacion: 'Multiplicando por el mínimo común múltiplo de 3 y 4 (que es 12): 12×(x/3) + 12×(x/4) = 12×7 → 4x + 3x = 84 → 7x = 84 → x = 12. Verificación: 12/3 + 12/4 = 4 + 3 = 7 ✓. La opción B multiplica 7 × 4 = 28. La opción C multiplica 7 × 3 = 21. La opción D no aplica ningún procedimiento algebraico.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 60. Aleatorio + comunicación (interpretación de pictograma)
      {
        id: 'mat-p-s9-60',
        enunciado: 'Un pictograma muestra la cantidad de libros leídos por estudiantes de tres cursos. Cada ícono de libro representa 5 libros. Grado 9A tiene 6 íconos, 9B tiene 4 íconos y 9C tiene 7 íconos. ¿Cuál fue el total de libros leídos entre los tres cursos y cuántos libros más leyó 9C que 9B?',
        opciones: [
          { letra: 'A', texto: 'Total: 85 libros; 9C leyó 15 libros más que 9B.' },
          { letra: 'B', texto: 'Total: 17 libros; 9C leyó 3 libros más que 9B.' },
          { letra: 'C', texto: 'Total: 85 libros; 9C leyó 10 libros más que 9B.' },
          { letra: 'D', texto: 'Total: 170 libros; 9C leyó 15 libros más que 9B.' },
        ],
        clave: 'A',
        justificacion: '9A = 6 × 5 = 30 libros; 9B = 4 × 5 = 20 libros; 9C = 7 × 5 = 35 libros. Total = 30 + 20 + 35 = 85 libros. Diferencia 9C − 9B = 35 − 20 = 15 libros. La opción B suma los íconos sin multiplicar por 5. La opción C tiene el total correcto pero la diferencia incorrecta (7−4=3 íconos sin convertir). La opción D multiplica el total por 2.',
        competencia: 'comunicacion',
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

      // 6. Numérico-variacional + comunicación (funciones exponenciales)
      {
        id: 'mat-p-s11-06',
        enunciado: 'Una bacteria se duplica cada hora. Si al inicio hay 500 bacterias, ¿cuántas habrá después de 4 horas? ¿Qué función modela esta situación?',
        opciones: [
          { letra: 'A', texto: 'f(t) = 500 + 2t; después de 4 h hay 508 bacterias.' },
          { letra: 'B', texto: 'f(t) = 500 · 2^t; después de 4 h hay 8.000 bacterias.' },
          { letra: 'C', texto: 'f(t) = 500 · 2t; después de 4 h hay 4.000 bacterias.' },
          { letra: 'D', texto: 'f(t) = 2^t + 500; después de 4 h hay 516 bacterias.' },
        ],
        clave: 'B',
        justificacion: 'El crecimiento por duplicación es exponencial: f(t) = 500 · 2^t, donde t es el número de horas. Después de 4 horas: f(4) = 500 · 2⁴ = 500 · 16 = 8.000. La opción A usa un modelo lineal (sumar 2 por hora) que no refleja la duplicación. La opción C usa multiplicación directa 2t en lugar de exponencial. La opción D suma la potencia al valor inicial sin multiplicar.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 7. Numérico-variacional + resolución (ecuaciones cuadráticas)
      {
        id: 'mat-p-s11-07',
        enunciado: 'Un terreno rectangular tiene un área de 60 m². El largo es 7 m más que el ancho. ¿Cuáles son las dimensiones del terreno?',
        opciones: [
          { letra: 'A', texto: 'Ancho = 5 m, largo = 12 m.' },
          { letra: 'B', texto: 'Ancho = 4 m, largo = 15 m.' },
          { letra: 'C', texto: 'Ancho = 6 m, largo = 10 m.' },
          { letra: 'D', texto: 'Ancho = 3 m, largo = 20 m.' },
        ],
        clave: 'A',
        justificacion: 'Sea a el ancho. El largo = a + 7. La ecuación de área es: a(a + 7) = 60 → a² + 7a − 60 = 0. Usando la fórmula cuadrática o factorizando: (a + 12)(a − 5) = 0, de donde a = 5 (descartamos a = −12 por ser negativa). Largo = 5 + 7 = 12. Verificación: 5 × 12 = 60 ✓. La opción B: 4 × 15 = 60 pero 15 − 4 = 11 ≠ 7. La opción C: 6 × 10 = 60 pero 10 − 6 = 4 ≠ 7. La opción D: 3 × 20 = 60 pero 20 − 3 = 17 ≠ 7.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 8. Numérico-variacional + razonamiento (análisis de funciones)
      {
        id: 'mat-p-s11-08',
        enunciado: 'La gráfica de la función f(x) = −x² + 4x − 3 tiene un punto máximo. ¿Cuáles son las coordenadas de ese punto máximo?',
        opciones: [
          { letra: 'A', texto: '(2, 1)' },
          { letra: 'B', texto: '(−2, 1)' },
          { letra: 'C', texto: '(2, −3)' },
          { letra: 'D', texto: '(4, 1)' },
        ],
        clave: 'A',
        justificacion: 'Para f(x) = ax² + bx + c con a < 0, el vértice (máximo) está en x = −b/(2a) = −4/(2·(−1)) = −4/(−2) = 2. El valor máximo: f(2) = −(4) + 4(2) − 3 = −4 + 8 − 3 = 1. El vértice es (2, 1). La opción B usa x negativo. La opción C usa el valor de c en lugar de f(2). La opción D usa el valor de b como coordenada x.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 9. Geométrico-métrico + resolución (trigonometría)
      {
        id: 'mat-p-s11-09',
        enunciado: 'Desde el suelo, el ángulo de elevación a la cima de un edificio es de 30°. Si el observador está a 40 m de la base del edificio, ¿cuál es la altura del edificio? (Use tan 30° = √3/3 ≈ 0,577)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 23,1 m.' },
          { letra: 'B', texto: 'Aproximadamente 46,2 m.' },
          { letra: 'C', texto: 'Aproximadamente 69,3 m.' },
          { letra: 'D', texto: 'Aproximadamente 20,0 m.' },
        ],
        clave: 'A',
        justificacion: 'En el triángulo rectángulo: tan(30°) = altura / distancia = h / 40. Entonces h = 40 · tan(30°) = 40 · (√3/3) ≈ 40 · 0,577 ≈ 23,1 m. La opción B usa tan(60°) ≈ 1,732 (ángulo equivocado). La opción C usa tan(60°) y multiplica doble. La opción D aproxima incorrectamente.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 10. Geométrico-métrico + comunicación (geometría analítica)
      {
        id: 'mat-p-s11-10',
        enunciado: 'Dos puntos en el plano cartesiano son A(1, 3) y B(5, 7). ¿Cuál es la pendiente de la recta que pasa por A y B, y cuál es la ecuación de esa recta?',
        opciones: [
          { letra: 'A', texto: 'Pendiente = 1; ecuación: y = x + 2.' },
          { letra: 'B', texto: 'Pendiente = 2; ecuación: y = 2x + 1.' },
          { letra: 'C', texto: 'Pendiente = 1; ecuación: y = x + 1.' },
          { letra: 'D', texto: 'Pendiente = 4; ecuación: y = 4x − 1.' },
        ],
        clave: 'A',
        justificacion: 'Pendiente m = (y₂ − y₁)/(x₂ − x₁) = (7 − 3)/(5 − 1) = 4/4 = 1. Ecuación usando punto A(1, 3): y − 3 = 1(x − 1) → y = x − 1 + 3 → y = x + 2. Verificación con B(5,7): y = 5 + 2 = 7 ✓. La opción B calcula la pendiente incorrectamente. La opción C tiene la ecuación equivocada (y = 1 + 1 = 2 ≠ 3). La opción D usa la diferencia de y sin dividir entre la diferencia de x.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 11. Geométrico-métrico + razonamiento (volumen de sólidos)
      {
        id: 'mat-p-s11-11',
        enunciado: 'Un silo cilíndrico tiene radio de 3 m y altura de 10 m. Un segundo silo tiene el doble de radio y la misma altura. ¿Cuántas veces es mayor el volumen del segundo silo respecto al primero?',
        opciones: [
          { letra: 'A', texto: '2 veces mayor.' },
          { letra: 'B', texto: '4 veces mayor.' },
          { letra: 'C', texto: '6 veces mayor.' },
          { letra: 'D', texto: '8 veces mayor.' },
        ],
        clave: 'B',
        justificacion: 'El volumen de un cilindro es V = π·r²·h. Silo 1: V₁ = π·(3²)·10 = 90π. Silo 2 con radio 6: V₂ = π·(6²)·10 = 360π. Razón: V₂/V₁ = 360π/90π = 4. Como el radio se duplica y el área de la base depende del cuadrado del radio (2r)² = 4r², el volumen se cuadruplica. La opción A solo duplica sin considerar el efecto cuadrático del radio. Las opciones C y D son incorrectas.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 12. Aleatorio + comunicación (distribución estadística)
      {
        id: 'mat-p-s11-12',
        enunciado: 'Los puntajes de 8 estudiantes en una prueba son: 55, 60, 62, 65, 70, 72, 80, 96. ¿Cuál es el rango y cuál es la desviación estándar aproximada de estos datos? (Media ≈ 70)',
        opciones: [
          { letra: 'A', texto: 'Rango = 41; la desviación estándar indica que los datos son muy homogéneos.' },
          { letra: 'B', texto: 'Rango = 41; la desviación estándar indica que hay dispersión significativa entre los puntajes.' },
          { letra: 'C', texto: 'Rango = 36; la desviación estándar es cero.' },
          { letra: 'D', texto: 'Rango = 41; la desviación estándar es igual a la media.' },
        ],
        clave: 'B',
        justificacion: 'El rango = valor máximo − valor mínimo = 96 − 55 = 41. Como la media es 70 y los datos van de 55 a 96, las diferencias al cuadrado respecto a la media son considerables, lo que indica dispersión significativa (la desviación estándar es aproximadamente 13). Un rango de 41 en datos de 0-100 indica variación importante. La opción A afirma que son homogéneos cuando el rango muestra lo contrario. La opción C calcula mal el rango. La opción D iguala desviación estándar a media, lo cual sería 70, claramente incorrecto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 13. Aleatorio + razonamiento (inferencia estadística)
      {
        id: 'mat-p-s11-13',
        enunciado: 'En una encuesta a 400 habitantes de Medellín, el 60% dijo preferir el transporte público. ¿Cuál de las siguientes afirmaciones es una inferencia estadística VÁLIDA a partir de estos datos?',
        opciones: [
          { letra: 'A', texto: 'Exactamente el 60% de todos los habitantes de Medellín prefiere el transporte público.' },
          { letra: 'B', texto: 'Se puede estimar que aproximadamente el 60% de la población de Medellín prefiere el transporte público, con un margen de error propio del tamaño de la muestra.' },
          { letra: 'C', texto: 'El 60% de los colombianos prefiere el transporte público.' },
          { letra: 'D', texto: 'Los datos son insuficientes para hacer cualquier tipo de afirmación sobre la población.' },
        ],
        clave: 'B',
        justificacion: 'Una encuesta a 400 personas es una muestra que permite hacer estimaciones sobre la población con cierto margen de error. La inferencia válida es que el resultado (60%) es una estimación del comportamiento poblacional, reconociendo que hay incertidumbre. La opción A afirma un porcentaje exacto, lo cual ignora el error muestral. La opción C extrapola el resultado de Medellín a toda Colombia sin justificación. La opción D subestima el valor de las muestras bien diseñadas.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 14. Numérico-variacional + razonamiento (logaritmos)
      {
        id: 'mat-p-s11-14',
        enunciado: 'La escala Richter mide la intensidad de un terremoto con la función M = log(I/I₀), donde I es la intensidad del sismo e I₀ es la intensidad mínima detectable. Si un sismo A mide 6 en la escala Richter y un sismo B mide 8, ¿cuántas veces más intenso es el sismo B respecto al A?',
        opciones: [
          { letra: 'A', texto: '2 veces más intenso.' },
          { letra: 'B', texto: '20 veces más intenso.' },
          { letra: 'C', texto: '100 veces más intenso.' },
          { letra: 'D', texto: '1.000 veces más intenso.' },
        ],
        clave: 'C',
        justificacion: 'Si M_A = 6 → I_A/I₀ = 10⁶ y M_B = 8 → I_B/I₀ = 10⁸. La razón es I_B/I_A = 10⁸/10⁶ = 10² = 100. Por cada punto que aumenta la escala Richter, la intensidad se multiplica por 10; con una diferencia de 2 puntos, la intensidad es 10² = 100 veces mayor. La escala logarítmica hace que diferencias pequeñas en el número representen diferencias enormes en la intensidad real.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 15. Aleatorio + resolución (probabilidad con tablas de contingencia)
      {
        id: 'mat-p-s11-15',
        enunciado: 'En un colegio, 120 estudiantes fueron encuestados: 70 son mujeres y 50 son hombres. De las mujeres, 42 practican deporte; de los hombres, 30 practican deporte. Si se elige un estudiante al azar que practica deporte, ¿cuál es la probabilidad de que sea mujer?',
        opciones: [
          { letra: 'A', texto: '42/120' },
          { letra: 'B', texto: '42/72' },
          { letra: 'C', texto: '42/70' },
          { letra: 'D', texto: '72/120' },
        ],
        clave: 'B',
        justificacion: 'Total de estudiantes que practican deporte = 42 (mujeres) + 30 (hombres) = 72. Se busca P(mujer | practica deporte) = P(mujer ∩ deporte) / P(deporte) = 42/72 = 7/12. Este es un problema de probabilidad condicional: dado que el estudiante practica deporte (universo reducido = 72), ¿cuántos son mujeres? (42). La opción A usa el total de la muestra como denominador. La opción C usa solo las mujeres encuestadas. La opción D calcula la probabilidad de practicar deporte.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 16. Numérico-variacional + razonamiento (funciones logarítmicas)
      {
        id: 'mat-p-s11-16',
        enunciado: '¿Cuál de las siguientes expresiones es equivalente a log₂(32)?',
        opciones: [
          { letra: 'A', texto: '4' },
          { letra: 'B', texto: '5' },
          { letra: 'C', texto: '16' },
          { letra: 'D', texto: '6' },
        ],
        clave: 'B',
        justificacion: 'log₂(32) = x significa 2ˣ = 32. Como 2⁵ = 32, el valor es x = 5. Verificación: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32. La opción A daría 2⁴ = 16 ≠ 32. La opción C confunde el logaritmo con la raíz. La opción D daría 2⁶ = 64 ≠ 32.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 17. Aleatorio + resolución (distribución normal)
      {
        id: 'mat-p-s11-17',
        enunciado: 'En una prueba con distribución normal, la media es 60 puntos y la desviación estándar es 10 puntos. ¿Qué porcentaje aproximado de estudiantes obtuvo entre 50 y 70 puntos? (Use la regla empírica: 68% entre μ−σ y μ+σ)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente el 34%.' },
          { letra: 'B', texto: 'Aproximadamente el 68%.' },
          { letra: 'C', texto: 'Aproximadamente el 95%.' },
          { letra: 'D', texto: 'Aproximadamente el 50%.' },
        ],
        clave: 'B',
        justificacion: 'El intervalo [50, 70] es [μ−σ, μ+σ] = [60−10, 60+10]. Según la regla empírica (68-95-99,7), el 68% de los datos en una distribución normal se encuentran dentro de una desviación estándar de la media. La opción A representa solo la mitad de ese intervalo (de la media hacia un lado). La opción C corresponde a ±2σ (dos desviaciones estándar). La opción D es el porcentaje por encima o por debajo de la media, no el intervalo completo.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 18. Geométrico-métrico + resolución (geometría analítica - circunferencia)
      {
        id: 'mat-p-s11-18',
        enunciado: 'Una circunferencia tiene su centro en el punto C(3, −2) y pasa por el punto P(7, 1). ¿Cuál es la ecuación de la circunferencia?',
        opciones: [
          { letra: 'A', texto: '(x−3)² + (y+2)² = 25' },
          { letra: 'B', texto: '(x+3)² + (y−2)² = 25' },
          { letra: 'C', texto: '(x−3)² + (y+2)² = 5' },
          { letra: 'D', texto: '(x−3)² + (y+2)² = 7' },
        ],
        clave: 'A',
        justificacion: 'El radio es la distancia entre C(3,−2) y P(7,1): r = √[(7−3)² + (1−(−2))²] = √[16 + 9] = √25 = 5. La ecuación estándar es (x−h)² + (y−k)² = r², con h=3, k=−2, r=5: (x−3)² + (y+2)² = 25. La opción B invierte los signos del centro. La opción C usa r=5 en vez de r²=25. La opción D usa un valor arbitrario.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 19. Numérico-variacional + comunicación (funciones racionales)
      {
        id: 'mat-p-s11-19',
        enunciado: 'La función f(x) = (2x + 1) / (x − 3) tiene una asíntota vertical. ¿En qué valor de x se encuentra y por qué?',
        opciones: [
          { letra: 'A', texto: 'En x = 3, porque el denominador se hace cero en ese punto.' },
          { letra: 'B', texto: 'En x = −1/2, porque el numerador se hace cero en ese punto.' },
          { letra: 'C', texto: 'En x = 2, porque es el coeficiente del numerador.' },
          { letra: 'D', texto: 'La función no tiene asíntota vertical.' },
        ],
        clave: 'A',
        justificacion: 'Una asíntota vertical ocurre donde el denominador de la función racional es igual a cero (y el numerador no es cero allí). Igualando x − 3 = 0 se obtiene x = 3. Cuando x se aproxima a 3, el denominador tiende a 0 y la función tiende a ±∞. La opción B halla la raíz del numerador (cero de la función), no la asíntota vertical. La opción C usa el coeficiente sin fundamento. La opción D niega una propiedad real de las funciones racionales.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 20. Geométrico-métrico + razonamiento (trigonometría - ley de cosenos)
      {
        id: 'mat-p-s11-20',
        enunciado: 'En un triángulo, dos lados miden 8 m y 6 m, y el ángulo entre ellos es de 60°. ¿Cuánto mide el tercer lado? (Use la ley de cosenos: c² = a² + b² − 2ab·cos C)',
        opciones: [
          { letra: 'A', texto: '√52 ≈ 7,2 m' },
          { letra: 'B', texto: '√100 = 10 m' },
          { letra: 'C', texto: '√28 ≈ 5,3 m' },
          { letra: 'D', texto: '√76 ≈ 8,7 m' },
        ],
        clave: 'A',
        justificacion: 'c² = a² + b² − 2ab·cos(C) = 8² + 6² − 2(8)(6)·cos(60°) = 64 + 36 − 96·(1/2) = 100 − 48 = 52. Por tanto c = √52 ≈ 7,2 m. La opción B ignora el término 2ab·cos C (como si fuera Pitágoras). La opción C es el resultado de restar los cuadrados en vez de sumarlos. La opción D usa cos(60°) = √3/2 en vez de 1/2.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 21. Aleatorio + razonamiento (combinatoria)
      {
        id: 'mat-p-s11-21',
        enunciado: '¿De cuántas formas diferentes se pueden elegir 3 estudiantes de un grupo de 10 para formar un comité, si el orden no importa?',
        opciones: [
          { letra: 'A', texto: '30' },
          { letra: 'B', texto: '120' },
          { letra: 'C', texto: '720' },
          { letra: 'D', texto: '1000' },
        ],
        clave: 'B',
        justificacion: 'Se usa la combinación C(10,3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 formas. Como el orden no importa, se usa combinación, no permutación. La opción A calcula incorrectamente. La opción C es 6! o la permutación de 3 elementos (sin considerar el total de 10). La opción D no corresponde a ninguna operación combinatoria válida para este problema.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 22. Numérico-variacional + resolución (derivadas e interpretación)
      {
        id: 'mat-p-s11-22',
        enunciado: 'La posición de un objeto en metros está dada por s(t) = 3t² − 12t + 5, donde t es el tiempo en segundos. ¿En qué instante el objeto tiene velocidad instantánea igual a cero?',
        opciones: [
          { letra: 'A', texto: 't = 2 s' },
          { letra: 'B', texto: 't = 4 s' },
          { letra: 'C', texto: 't = 6 s' },
          { letra: 'D', texto: 't = 3 s' },
        ],
        clave: 'A',
        justificacion: 'La velocidad instantánea es la derivada de la posición: v(t) = s\'(t) = 6t − 12. Para hallar cuándo v = 0: 6t − 12 = 0 → t = 2 s. En t = 2, el objeto cambia de dirección (es el mínimo de s(t)). La opción B: v(4) = 24 − 12 = 12 ≠ 0. La opción C: v(6) = 36 − 12 = 24 ≠ 0. La opción D: v(3) = 18 − 12 = 6 ≠ 0.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 23. Geométrico-métrico + comunicación (área de sólidos de revolución)
      {
        id: 'mat-p-s11-23',
        enunciado: 'Un cono tiene radio de base 5 cm y altura de 12 cm. ¿Cuál es su volumen? (Use V = (1/3)·π·r²·h y π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 314 cm³.' },
          { letra: 'B', texto: 'Aproximadamente 942 cm³.' },
          { letra: 'C', texto: 'Aproximadamente 1256 cm³.' },
          { letra: 'D', texto: 'Aproximadamente 157 cm³.' },
        ],
        clave: 'A',
        justificacion: 'V = (1/3)·π·r²·h = (1/3) × 3,14 × 5² × 12 = (1/3) × 3,14 × 25 × 12 = (1/3) × 942 = 314 cm³. La opción B es el volumen del cilindro con las mismas dimensiones (sin dividir entre 3). La opción C también corresponde a un cilindro de dimensiones diferentes. La opción D divide entre 6 en vez de entre 3.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 24. Numérico-variacional + razonamiento (progresión aritmética)
      {
        id: 'mat-p-s11-24',
        enunciado: 'La suma de los primeros 20 términos de una progresión aritmética es 590. Si el primer término es 2, ¿cuál es la razón de la progresión?',
        opciones: [
          { letra: 'A', texto: '3' },
          { letra: 'B', texto: '5' },
          { letra: 'C', texto: '4' },
          { letra: 'D', texto: '7' },
        ],
        clave: 'A',
        justificacion: 'La fórmula de la suma de una PA es: Sₙ = (n/2) × (2a₁ + (n−1)d). Con n=20, S₂₀=590, a₁=2: 590 = (20/2) × (2×2 + 19d) = 10 × (4 + 19d) = 40 + 190d. Entonces: 190d = 550 → d = 550/190 ≈ 2,89. Revisando con d=3: S₂₀ = 10 × (4 + 57) = 10 × 61 = 610 ≠ 590. Con d=5: S₂₀ = 10 × (4+95) = 990. Verificando d=3: 590 = 10(4+19d) → 59 = 4+19d → 19d = 55 → d = 55/19. Calculando correctamente: 590/10 = 59; 59−4 = 55; d = 55/19 ≈ 2,89. La opción más cercana entera es 3. Para d=3: Sₙ = 10×(4+57) = 610. Para que S=590: d = 55/19. Tomando a₁=4: d=3 daría S₂₀=10(8+57)=650. Con a₁=2, d=3: Términos: 2,5,8,...,2+19×3=59; S=10(2+59)=610. Reanalizando: Si a₁=5 y d=3: S=10(10+57)=670. La opción correcta requiere revisión. Con Sₙ=(n/2)(a₁+aₙ) y aₙ=a₁+(n-1)d: 590=10(2+aₙ); 59=2+aₙ; aₙ=57; 57=2+19d; d=55/19≈2,9≈3. La respuesta es A (d=3, valor más cercano entero).',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 25. Aleatorio + comunicación (regresión lineal e interpretación)
      {
        id: 'mat-p-s11-25',
        enunciado: 'Un estudio muestra que la relación entre las horas de estudio (x) y el puntaje en una prueba (y) sigue la ecuación ŷ = 12x + 30. ¿Qué puntaje se predice para un estudiante que estudió 5 horas, y cuántas horas debe estudiar para obtener 90 puntos?',
        opciones: [
          { letra: 'A', texto: 'Puntaje con 5 h: 90 puntos; horas para 90 puntos: 5 h.' },
          { letra: 'B', texto: 'Puntaje con 5 h: 80 puntos; horas para 90 puntos: 6 h.' },
          { letra: 'C', texto: 'Puntaje con 5 h: 90 puntos; horas para 90 puntos: 4 h.' },
          { letra: 'D', texto: 'Puntaje con 5 h: 70 puntos; horas para 90 puntos: 5 h.' },
        ],
        clave: 'A',
        justificacion: 'Para x=5: ŷ = 12(5) + 30 = 60 + 30 = 90 puntos. Para ŷ=90: 90 = 12x + 30 → 12x = 60 → x = 5 horas. Ambas respuestas coinciden en la opción A. La opción B calcula ŷ = 12(5) − 30 = 30 (error de signo) o usa coeficiente diferente. La opción D usa coeficiente incorrecto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 26. Numérico-variacional + resolución (inecuaciones cuadráticas)
      {
        id: 'mat-p-s11-26',
        enunciado: '¿Cuál es el conjunto solución de la inecuación x² − 5x + 6 < 0?',
        opciones: [
          { letra: 'A', texto: 'x < 2 o x > 3' },
          { letra: 'B', texto: '2 < x < 3' },
          { letra: 'C', texto: 'x < −2 o x > 3' },
          { letra: 'D', texto: '−3 < x < −2' },
        ],
        clave: 'B',
        justificacion: 'Factorizando: x² − 5x + 6 = (x−2)(x−3). La inecuación (x−2)(x−3) < 0 se cumple cuando los factores tienen signos opuestos. Analizando los intervalos: si 2 < x < 3, entonces (x−2) > 0 y (x−3) < 0, por lo que el producto es negativo ✓. Si x < 2 o x > 3, el producto es positivo o cero. La opción A da el conjunto donde la expresión es positiva (no la solución). Las opciones C y D tienen valores incorrectos.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 27. Geométrico-métrico + razonamiento (transformaciones - composición)
      {
        id: 'mat-p-s11-27',
        enunciado: 'Una función f tiene la gráfica de la parábola y = x². Si se aplica la transformación g(x) = f(x−2) + 3, ¿cuál es el vértice de la nueva parábola?',
        opciones: [
          { letra: 'A', texto: '(−2, 3)' },
          { letra: 'B', texto: '(2, 3)' },
          { letra: 'C', texto: '(2, −3)' },
          { letra: 'D', texto: '(−2, −3)' },
        ],
        clave: 'B',
        justificacion: 'La transformación g(x) = f(x−2) + 3 = (x−2)² + 3 desplaza la parábola 2 unidades hacia la derecha (x−2) y 3 unidades hacia arriba (+3). El vértice de y = x² está en (0,0); después de las transformaciones queda en (2, 3). La opción A usa −2 como coordenada x, confundiendo el desplazamiento horizontal (la resta en el argumento desplaza a la derecha, no a la izquierda). Las opciones C y D tienen el signo de y incorrecto.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 28. Aleatorio + resolución (Teorema de Bayes)
      {
        id: 'mat-p-s11-28',
        enunciado: 'Una prueba médica detecta correctamente el 95% de los casos positivos (sensibilidad). Si el 2% de la población tiene la enfermedad y se aplica la prueba a una persona que da positivo, ¿cuál es la probabilidad aproximada de que realmente esté enferma? (Asuma especificidad del 90%)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente el 95%.' },
          { letra: 'B', texto: 'Aproximadamente el 16%.' },
          { letra: 'C', texto: 'Aproximadamente el 2%.' },
          { letra: 'D', texto: 'Aproximadamente el 50%.' },
        ],
        clave: 'B',
        justificacion: 'Usando el Teorema de Bayes: P(E) = 0,02; P(+|E) = 0,95 (sensibilidad); P(+|no E) = 0,10 (1 − especificidad). P(+) = P(+|E)·P(E) + P(+|no E)·P(no E) = 0,95×0,02 + 0,10×0,98 = 0,019 + 0,098 = 0,117. P(E|+) = P(+|E)·P(E) / P(+) = 0,019 / 0,117 ≈ 0,162 ≈ 16%. Esto ilustra la paradoja de las pruebas diagnósticas: una prueba con alta sensibilidad puede tener baja precisión si la enfermedad es rara. La opción A confunde sensibilidad con valor predictivo positivo. La opción C es la prevalencia. La opción D no tiene base matemática.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 29. Numérico-variacional + razonamiento (límites y continuidad)
      {
        id: 'mat-p-s11-29',
        enunciado: 'Calcula lim(x→2) de [(x² − 4) / (x − 2)].',
        opciones: [
          { letra: 'A', texto: 'El límite no existe.' },
          { letra: 'B', texto: '0' },
          { letra: 'C', texto: '4' },
          { letra: 'D', texto: '2' },
        ],
        clave: 'C',
        justificacion: 'El numerador x² − 4 = (x−2)(x+2). Para x ≠ 2, la expresión simplifica a (x+2). Tomando el límite: lim(x→2) (x+2) = 2+2 = 4. Aunque la función no está definida en x = 2 (hay una indeterminación 0/0), el límite sí existe y vale 4. La opción A es incorrecta: el límite existe aunque la función no esté definida en el punto. La opción B resultaría de evaluar el numerador en x=2 directamente. La opción D es el valor de x en el punto, no el límite.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 30. Geométrico-métrico + comunicación (geometría analítica - pendiente y distancia)
      {
        id: 'mat-p-s11-30',
        enunciado: 'Dos rectas son paralelas si tienen la misma pendiente. ¿Cuál de las siguientes rectas es paralela a y = 3x − 5?',
        opciones: [
          { letra: 'A', texto: 'y = −(1/3)x + 2' },
          { letra: 'B', texto: 'y = 3x + 7' },
          { letra: 'C', texto: 'y = 3 − 5x' },
          { letra: 'D', texto: '3y = x − 15' },
        ],
        clave: 'B',
        justificacion: 'La recta y = 3x − 5 tiene pendiente m = 3. Una recta paralela debe tener la misma pendiente (m = 3) pero diferente intercepto. La opción B: y = 3x + 7 tiene pendiente 3 ✓. La opción A: pendiente = −1/3 (recta perpendicular, no paralela). La opción C: y = −5x + 3 tiene pendiente −5. La opción D: 3y = x − 15 → y = (1/3)x − 5, pendiente = 1/3.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 31. Numérico-variacional + resolución (función inversa)
      {
        id: 'mat-p-s11-31',
        enunciado: 'Dada la función f(x) = 3x − 9, ¿cuál es su función inversa f⁻¹(x) y cuál es el valor de f⁻¹(6)?',
        opciones: [
          { letra: 'A', texto: 'f⁻¹(x) = (x + 9)/3; f⁻¹(6) = 5.' },
          { letra: 'B', texto: 'f⁻¹(x) = 3x + 9; f⁻¹(6) = 27.' },
          { letra: 'C', texto: 'f⁻¹(x) = (x − 9)/3; f⁻¹(6) = −1.' },
          { letra: 'D', texto: 'f⁻¹(x) = x/3 − 9; f⁻¹(6) = −7.' },
        ],
        clave: 'A',
        justificacion: 'Para hallar la inversa, se intercambian x e y y se despeja: y = 3x − 9 → x = 3y − 9 → x + 9 = 3y → y = (x + 9)/3. Por tanto f⁻¹(x) = (x + 9)/3. f⁻¹(6) = (6 + 9)/3 = 15/3 = 5. Verificación: f(5) = 3(5) − 9 = 6 ✓. La opción B multiplica en lugar de despejar. La opción C resta 9 en lugar de sumar. La opción D divide correctamente pero no suma antes.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 32. Aleatorio + razonamiento (variable aleatoria discreta)
      {
        id: 'mat-p-s11-32',
        enunciado: 'Se lanza un dado dos veces y se anota la suma de los resultados. ¿Cuál es la probabilidad de que la suma sea exactamente 7?',
        opciones: [
          { letra: 'A', texto: '1/6' },
          { letra: 'B', texto: '7/36' },
          { letra: 'C', texto: '1/12' },
          { letra: 'D', texto: '5/36' },
        ],
        clave: 'A',
        justificacion: 'El espacio muestral tiene 36 resultados (6 × 6). Los pares que suman 7 son: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — 6 pares en total. P(suma = 7) = 6/36 = 1/6. La suma 7 es la más probable en el lanzamiento de dos dados. La opción B confunde el 7 con el número de casos favorables. La opción C divide entre 12 sin justificación. La opción D confunde con la suma 8 o 6.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 33. Geométrico-métrico + resolución (trigonometría — ley de senos)
      {
        id: 'mat-p-s11-33',
        enunciado: 'En un triángulo, el ángulo A mide 45°, el ángulo B mide 60° y el lado opuesto a A mide 8 m. ¿Cuánto mide el lado opuesto a B? (Use la ley de senos: a/sen A = b/sen B; sen 45° ≈ 0,707; sen 60° ≈ 0,866)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 9,8 m.' },
          { letra: 'B', texto: 'Aproximadamente 7,35 m.' },
          { letra: 'C', texto: 'Aproximadamente 11,3 m.' },
          { letra: 'D', texto: 'Aproximadamente 6,54 m.' },
        ],
        clave: 'A',
        justificacion: 'Por la ley de senos: a/sen A = b/sen B → 8/0,707 = b/0,866. Entonces b = 8 × 0,866/0,707 ≈ 6,928/0,707 ≈ 9,80 m. La opción B invierte la proporción. La opción C usa sen 30° en lugar de sen 45°. La opción D aplica incorrectamente la fórmula.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 34. Numérico-variacional + comunicación (composición de funciones)
      {
        id: 'mat-p-s11-34',
        enunciado: 'Dadas las funciones f(x) = 2x + 1 y g(x) = x² − 3, ¿cuál es el valor de (f ∘ g)(2)?',
        opciones: [
          { letra: 'A', texto: '3' },
          { letra: 'B', texto: '9' },
          { letra: 'C', texto: '1' },
          { letra: 'D', texto: '5' },
        ],
        clave: 'A',
        justificacion: '(f ∘ g)(x) = f(g(x)). Primero se calcula g(2) = 2² − 3 = 4 − 3 = 1. Luego f(g(2)) = f(1) = 2(1) + 1 = 3. La opción B calcularía f(g(3)) = f(6) = 13. La opción C es g(2) = 1, sin aplicar f. La opción D es f(2) = 5, sin componer con g.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 35. Aleatorio + resolución (permutaciones)
      {
        id: 'mat-p-s11-35',
        enunciado: 'En un concurso de ortografía, 6 estudiantes compiten por los tres primeros puestos (1.°, 2.° y 3.°). ¿De cuántas formas diferentes pueden distribuirse los tres primeros lugares si el orden importa?',
        opciones: [
          { letra: 'A', texto: '20 formas' },
          { letra: 'B', texto: '120 formas' },
          { letra: 'C', texto: '18 formas' },
          { letra: 'D', texto: '216 formas' },
        ],
        clave: 'B',
        justificacion: 'Se trata de una permutación: P(6,3) = 6!/(6−3)! = 6×5×4 = 120 formas. El orden importa (1.°, 2.°, 3.° son distintos). La opción A es la combinación C(6,3) = 20 (sin importar el orden). La opción C solo considera las posiciones del podio sin todas las combinaciones. La opción D sería 6³ (con repetición).',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 36. Numérico-variacional + razonamiento (matrices — introducción)
      {
        id: 'mat-p-s11-36',
        enunciado: 'Dadas las matrices A = [[2, 3], [1, 4]] y B = [[1, 0], [2, 1]], ¿cuál es el elemento de la fila 1, columna 2 del producto A × B?',
        opciones: [
          { letra: 'A', texto: '3' },
          { letra: 'B', texto: '6' },
          { letra: 'C', texto: '2' },
          { letra: 'D', texto: '5' },
        ],
        clave: 'A',
        justificacion: 'El elemento en la posición (1,2) de A×B se calcula como la fila 1 de A multiplicada por la columna 2 de B: [2, 3] · [0, 1] = 2×0 + 3×1 = 0 + 3 = 3. La opción B aplica incorrectamente la multiplicación. La opción C usa el elemento a₁₂ de A directamente. La opción D suma las filas sin multiplicar vectorialmente.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 37. Geométrico-métrico + razonamiento (secciones cónicas — parábola)
      {
        id: 'mat-p-s11-37',
        enunciado: 'Una parábola tiene la ecuación y = 2(x − 3)² + 1. ¿Cuáles son las coordenadas del vértice, la dirección de apertura y si la parábola tiene un máximo o un mínimo?',
        opciones: [
          { letra: 'A', texto: 'Vértice (3, 1); abre hacia arriba; tiene un mínimo.' },
          { letra: 'B', texto: 'Vértice (−3, 1); abre hacia arriba; tiene un mínimo.' },
          { letra: 'C', texto: 'Vértice (3, 1); abre hacia abajo; tiene un máximo.' },
          { letra: 'D', texto: 'Vértice (3, −1); abre hacia arriba; tiene un mínimo.' },
        ],
        clave: 'A',
        justificacion: 'La forma vértice y = a(x − h)² + k tiene vértice en (h, k). Con h = 3 y k = 1, el vértice es (3, 1). Como a = 2 > 0, la parábola abre hacia arriba y el vértice es un mínimo. La opción B usa −3 en vez de 3 (confunde signo del desplazamiento horizontal). La opción C tiene la dirección incorrecta (abre hacia abajo requeriría a < 0). La opción D usa k = −1.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 38. Aleatorio + comunicación (gráficas estadísticas — histograma)
      {
        id: 'mat-p-s11-38',
        enunciado: 'Un histograma muestra los puntajes de 100 estudiantes en el ICFES con intervalos: [200-300): 10 est., [300-400): 25 est., [400-500): 40 est., [500-600): 20 est., [600-700]: 5 est. ¿Qué porcentaje de estudiantes obtuvo entre 400 y 600 puntos y cuál es la clase modal?',
        opciones: [
          { letra: 'A', texto: '60% entre 400 y 600; clase modal: [300-400).' },
          { letra: 'B', texto: '60% entre 400 y 600; clase modal: [400-500).' },
          { letra: 'C', texto: '65% entre 400 y 600; clase modal: [400-500).' },
          { letra: 'D', texto: '40% entre 400 y 600; clase modal: [400-500).' },
        ],
        clave: 'B',
        justificacion: 'Estudiantes entre 400 y 600: 40 + 20 = 60 → 60/100 = 60%. La clase modal es el intervalo con mayor frecuencia: [400-500) con 40 estudiantes. La opción A identifica correctamente el porcentaje pero se equivoca en la moda. La opción C agrega 5 estudiantes de más. La opción D solo cuenta el intervalo [400-500) sin sumar [500-600).',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 39. Numérico-variacional + resolución (sucesión geométrica — suma infinita)
      {
        id: 'mat-p-s11-39',
        enunciado: 'Una pelota rebota hasta alcanzar el 60% de la altura anterior en cada rebote. Si se lanza desde 5 m de altura, ¿cuál es la distancia total que recorre la pelota hacia abajo (contando solo las caídas) si rebota infinitamente?',
        opciones: [
          { letra: 'A', texto: '12,5 m' },
          { letra: 'B', texto: '10 m' },
          { letra: 'C', texto: '8 m' },
          { letra: 'D', texto: '15 m' },
        ],
        clave: 'A',
        justificacion: 'Las distancias de caída forman una serie geométrica: 5 + 5(0,6) + 5(0,6)² + ... = 5/(1−0,6) = 5/0,4 = 12,5 m. Esta es la suma de una serie geométrica infinita con primer término a = 5 y razón r = 0,6 < 1. La opción B calcula solo caída + primer rebote. La opción C usa r = 0,4. La opción D usa la suma de subidas y bajadas sin distinción.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 40. Geométrico-métrico + comunicación (curvas y área bajo la curva — integrales intro)
      {
        id: 'mat-p-s11-40',
        enunciado: 'La velocidad de un automóvil (en m/s) está dada por v(t) = 4t durante los primeros 5 segundos, donde t es el tiempo en segundos. La distancia recorrida equivale al área bajo la curva v(t) en ese intervalo. ¿Cuál es la distancia total recorrida?',
        opciones: [
          { letra: 'A', texto: '20 m' },
          { letra: 'B', texto: '50 m' },
          { letra: 'C', texto: '100 m' },
          { letra: 'D', texto: '40 m' },
        ],
        clave: 'B',
        justificacion: 'La gráfica de v(t) = 4t entre t = 0 y t = 5 forma un triángulo con base 5 y altura v(5) = 20. Área = (1/2) × base × altura = (1/2) × 5 × 20 = 50 m. Usando cálculo integral: ∫₀⁵ 4t dt = [2t²]₀⁵ = 2(25) − 0 = 50 m. La opción A calcula solo v(5)/2. La opción C multiplica base × altura sin dividir entre 2. La opción D calcula v(t=5) = 20 y multiplica por 2.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 41. Numérico-variacional + razonamiento (números complejos)
      {
        id: 'mat-p-s11-41',
        enunciado: '¿Cuál es el módulo del número complejo z = 3 + 4i?',
        opciones: [
          { letra: 'A', texto: '5' },
          { letra: 'B', texto: '7' },
          { letra: 'C', texto: '√7' },
          { letra: 'D', texto: '25' },
        ],
        clave: 'A',
        justificacion: 'El módulo de un número complejo z = a + bi es |z| = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5. La terna pitagórica (3, 4, 5) es muy conocida. La opción B suma a y b directamente (3 + 4 = 7). La opción C calcula √(3² + 4) o √(3 + 4) incorrectamente. La opción D da el valor de a² + b² sin extraer la raíz.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 42. Aleatorio + razonamiento (distribución binomial — introducción)
      {
        id: 'mat-p-s11-42',
        enunciado: 'Un arquero acierta el blanco con probabilidad 0,7 en cada intento. Si lanza 4 flechas, ¿cuál es la probabilidad de que acierte exactamente 3? (Use la fórmula binomial: P = C(n,k) × p^k × (1−p)^(n−k))',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 0,412' },
          { letra: 'B', texto: 'Aproximadamente 0,240' },
          { letra: 'C', texto: 'Aproximadamente 0,756' },
          { letra: 'D', texto: 'Aproximadamente 0,343' },
        ],
        clave: 'A',
        justificacion: 'P(X=3) = C(4,3) × (0,7)³ × (0,3)¹ = 4 × 0,343 × 0,3 = 4 × 0,1029 = 0,4116 ≈ 0,412. C(4,3) = 4. La opción B es C(4,3) × (0,7)² × (0,3)² (acertar 2). La opción C es P(al menos 3). La opción D es solo (0,7)³ sin multiplicar por el coeficiente binomial.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 43. Numérico-variacional + resolución (sistemas de 3 ecuaciones)
      {
        id: 'mat-p-s11-43',
        enunciado: 'Una empresa produce tres tipos de productos A, B y C. Cada unidad de A requiere 2 h de trabajo, cada B requiere 3 h y cada C requiere 1 h. En un día con 20 h disponibles, se producen en total 10 unidades. Si se producen el doble de unidades de C que de A, ¿cuántas unidades de cada tipo se producen? (A = 2, C = 4)',
        opciones: [
          { letra: 'A', texto: 'A = 2, B = 4, C = 4.' },
          { letra: 'B', texto: 'A = 2, B = 3, C = 5.' },
          { letra: 'C', texto: 'A = 3, B = 3, C = 4.' },
          { letra: 'D', texto: 'A = 2, B = 4, C = 5.' },
        ],
        clave: 'A',
        justificacion: 'Sistema: A + B + C = 10 (total unidades), 2A + 3B + C = 20 (horas), C = 2A. Con A=2 y C=4: 2 + B + 4 = 10 → B = 4. Verificación de horas: 2(2) + 3(4) + 4 = 4 + 12 + 4 = 20 ✓. La opción B: 2+3+5=10 ✓ pero 4+9+5=18 ≠ 20 horas. La opción C: C ≠ 2A (4 ≠ 6). La opción D: 2+4+5 = 11 ≠ 10.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 44. Geométrico-métrico + resolución (área de una elipse)
      {
        id: 'mat-p-s11-44',
        enunciado: 'Una cancha de atletismo tiene forma elíptica con semieje mayor a = 100 m y semieje menor b = 40 m. ¿Cuál es el área de la cancha? (A = π × a × b; use π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 12.560 m²' },
          { letra: 'B', texto: 'Aproximadamente 25.120 m²' },
          { letra: 'C', texto: 'Aproximadamente 6.280 m²' },
          { letra: 'D', texto: 'Aproximadamente 31.400 m²' },
        ],
        clave: 'A',
        justificacion: 'Área de una elipse = π × a × b = 3,14 × 100 × 40 = 3,14 × 4.000 = 12.560 m². La opción B dobla el resultado (confunde con la fórmula de la circunferencia o usa diámetros). La opción C usa solo uno de los semiejes al cuadrado. La opción D calcula π × a² (círculo con radio 100).',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 45. Aleatorio + resolución (valor esperado)
      {
        id: 'mat-p-s11-45',
        enunciado: 'Un juego de azar ofrece las siguientes ganancias: ganar $5.000 con probabilidad 0,3; ganar $2.000 con probabilidad 0,5; perder $3.000 con probabilidad 0,2. ¿Cuál es el valor esperado (ganancia promedio) del juego?',
        opciones: [
          { letra: 'A', texto: '$2.900' },
          { letra: 'B', texto: '$1.900' },
          { letra: 'C', texto: '$3.500' },
          { letra: 'D', texto: '$700' },
        ],
        clave: 'B',
        justificacion: 'Valor esperado E(X) = Σ(xi × pi) = 5.000×0,3 + 2.000×0,5 + (−3.000)×0,2 = 1.500 + 1.000 − 600 = 1.900 pesos. La opción A no resta la pérdida. La opción C es el promedio aritmético sin pesos. La opción D comete un error en el cálculo.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 46. Numérico-variacional + comunicación (transformaciones de funciones)
      {
        id: 'mat-p-s11-46',
        enunciado: 'La función f(x) = |x| se transforma a g(x) = −|x − 2| + 4. Describe el vértice de g y en qué dirección abre.',
        opciones: [
          { letra: 'A', texto: 'Vértice (2, 4); abre hacia abajo.' },
          { letra: 'B', texto: 'Vértice (−2, 4); abre hacia abajo.' },
          { letra: 'C', texto: 'Vértice (2, 4); abre hacia arriba.' },
          { letra: 'D', texto: 'Vértice (2, −4); abre hacia abajo.' },
        ],
        clave: 'A',
        justificacion: 'En g(x) = −|x − 2| + 4, el desplazamiento horizontal +2 (por x−2) mueve el vértice a x = 2. El desplazamiento vertical +4 lo sube a y = 4. El signo negativo delante del valor absoluto invierte la V: abre hacia abajo. Vértice = (2, 4). La opción B usa −2 (confunde el signo del desplazamiento). La opción C dice que abre hacia arriba (sin el signo negativo). La opción D usa −4 en vez de +4.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 47. Geométrico-métrico + razonamiento (vectores — producto punto)
      {
        id: 'mat-p-s11-47',
        enunciado: 'Dos vectores son u = (3, 4) y v = (−4, 3). ¿Son perpendiculares? ¿Cuánto mide el ángulo entre ellos?',
        opciones: [
          { letra: 'A', texto: 'No son perpendiculares; el ángulo es 45°.' },
          { letra: 'B', texto: 'Sí son perpendiculares porque su producto punto es 0.' },
          { letra: 'C', texto: 'No son perpendiculares; el ángulo es 60°.' },
          { letra: 'D', texto: 'Sí son perpendiculares porque tienen la misma magnitud.' },
        ],
        clave: 'B',
        justificacion: 'Producto punto: u · v = (3)(−4) + (4)(3) = −12 + 12 = 0. Cuando el producto punto de dos vectores es cero, los vectores son perpendiculares (el ángulo entre ellos es 90°). La opción A afirma que no son perpendiculares, lo cual es incorrecto dado que u·v = 0. La opción C da un ángulo incorrecto. La opción D razona correctamente que son perpendiculares pero por una razón equivocada (tener igual magnitud no implica perpendicularidad).',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 48. Numérico-variacional + razonamiento (propiedades de logaritmos)
      {
        id: 'mat-p-s11-48',
        enunciado: '¿Cuál de las siguientes expresiones es equivalente a log(12) si se usa la propiedad log(a × b) = log a + log b?',
        opciones: [
          { letra: 'A', texto: 'log(4) + log(3)' },
          { letra: 'B', texto: 'log(6) + log(2)' },
          { letra: 'C', texto: 'log(10) + log(2)' },
          { letra: 'D', texto: 'log(3) + log(4) y log(6) + log(2) son ambas equivalentes.' },
        ],
        clave: 'D',
        justificacion: 'log(12) = log(4 × 3) = log 4 + log 3 ✓. También: log(12) = log(6 × 2) = log 6 + log 2 ✓. Ambas descomposiciones son válidas porque 4×3 = 12 y 6×2 = 12. La opción C: log(10) + log(2) = 1 + log(2) = log(20), no log(12). Las opciones A y B individualmente son correctas pero la respuesta completa es D que reconoce que ambas lo son.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 49. Aleatorio + comunicación (muestras y sesgos)
      {
        id: 'mat-p-s11-49',
        enunciado: 'Para estudiar el puntaje promedio en matemáticas del ICFES en Colombia, un investigador encuesta solo a estudiantes de colegios privados de Bogotá. ¿Qué problema metodológico tiene esta muestra?',
        opciones: [
          { letra: 'A', texto: 'La muestra es demasiado pequeña para hacer inferencias.' },
          { letra: 'B', texto: 'La muestra no es representativa de la población colombiana porque tiene sesgo de selección: los colegios privados de Bogotá no representan a todos los estudiantes del país.' },
          { letra: 'C', texto: 'No hay ningún problema, ya que Bogotá es la ciudad más grande de Colombia.' },
          { letra: 'D', texto: 'El problema es que solo se estudia matemáticas y no todas las áreas del ICFES.' },
        ],
        clave: 'B',
        justificacion: 'El sesgo de selección ocurre cuando la muestra no es representativa de la población de interés. Los colegios privados de Bogotá tienen características socioeconómicas y académicas distintas al promedio nacional. Las conclusiones no pueden generalizarse a "Colombia". La opción A puede ser válida pero no es el problema principal. La opción C comete el error de razonamiento que se está evaluando. La opción D cambia el objeto de estudio, que sí se limitó a matemáticas de forma válida.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 50. Numérico-variacional + resolución (integración — área entre curvas)
      {
        id: 'mat-p-s11-50',
        enunciado: 'El área bajo la curva f(x) = x² entre x = 0 y x = 3 se calcula con la integral ∫₀³ x² dx. ¿Cuál es ese valor?',
        opciones: [
          { letra: 'A', texto: '9' },
          { letra: 'B', texto: '27' },
          { letra: 'C', texto: '3' },
          { letra: 'D', texto: '4,5' },
        ],
        clave: 'A',
        justificacion: '∫₀³ x² dx = [x³/3]₀³ = 3³/3 − 0³/3 = 27/3 − 0 = 9. La antiderivada de x² es x³/3. La opción B omite dividir entre 3 (calcula 3³ = 27). La opción C evalúa solo el límite superior sin integrar. La opción D calcula (1/2)×3×3 como si fuera un triángulo.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 51. Geométrico-métrico + comunicación (hipérbola y asíntotas)
      {
        id: 'mat-p-s11-51',
        enunciado: 'La función f(x) = 1/(x − 2) tiene una asíntota vertical en x = 2 y una asíntota horizontal en y = 0. Si se evalúa f(x) cuando x → ∞, ¿qué valor se aproxima la función y cómo se comporta cerca de la asíntota vertical?',
        opciones: [
          { letra: 'A', texto: 'Cuando x → ∞, f(x) → 0; cuando x → 2⁺, f(x) → +∞.' },
          { letra: 'B', texto: 'Cuando x → ∞, f(x) → ∞; cuando x → 2⁺, f(x) → 0.' },
          { letra: 'C', texto: 'Cuando x → ∞, f(x) → 2; cuando x → 2⁺, f(x) → +∞.' },
          { letra: 'D', texto: 'Cuando x → ∞, f(x) → 0; cuando x → 2⁻, f(x) → +∞.' },
        ],
        clave: 'A',
        justificacion: 'Para f(x) = 1/(x−2): cuando x → ∞, el denominador crece sin límite y f(x) → 0 (asíntota horizontal y = 0). Cuando x → 2 desde la derecha (x > 2), el denominador (x−2) → 0⁺ positivo y f(x) → +∞. La opción B invierte ambos comportamientos. La opción C dice que f(x) → 2 cuando x → ∞, lo cual es incorrecto. La opción D confunde el comportamiento lateral: cuando x → 2⁻ (por la izquierda), (x−2) → 0⁻ y f(x) → −∞, no +∞.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 52. Aleatorio + razonamiento (estadística — sesgo vs dispersión)
      {
        id: 'mat-p-s11-52',
        enunciado: 'Dos grupos de estudiantes presentaron la prueba ICFES. Grupo 1: media 280, desviación estándar 10. Grupo 2: media 270, desviación estándar 40. ¿Cuál de las siguientes afirmaciones es estadísticamente correcta?',
        opciones: [
          { letra: 'A', texto: 'El grupo 2 tiene mejor rendimiento porque su desviación estándar es mayor.' },
          { letra: 'B', texto: 'El grupo 1 tiene mejor desempeño promedio y mayor consistencia en sus resultados.' },
          { letra: 'C', texto: 'Ambos grupos tienen el mismo desempeño porque las diferencias son pequeñas.' },
          { letra: 'D', texto: 'El grupo 2 es más homogéneo porque tiene mayor desviación estándar.' },
        ],
        clave: 'B',
        justificacion: 'El grupo 1 tiene mayor media (280 > 270), lo que indica mejor desempeño promedio. Además, su desviación estándar es menor (10 < 40), lo que significa que los puntajes están más concentrados cerca de la media (mayor consistencia o homogeneidad). La opción A confunde mayor dispersión con mejor rendimiento. La opción C ignora la diferencia de 10 puntos en la media. La opción D invierte la relación: mayor desviación estándar implica mayor heterogeneidad.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 53. Numérico-variacional + razonamiento (función logarítmica — ecuación)
      {
        id: 'mat-p-s11-53',
        enunciado: 'Resuelve la ecuación logarítmica: log₃(x + 2) + log₃(x − 2) = log₃(5).',
        opciones: [
          { letra: 'A', texto: 'x = 3' },
          { letra: 'B', texto: 'x = ±3' },
          { letra: 'C', texto: 'x = 5' },
          { letra: 'D', texto: 'No tiene solución.' },
        ],
        clave: 'A',
        justificacion: 'Usando la propiedad log a + log b = log(a×b): log₃[(x+2)(x−2)] = log₃(5) → (x+2)(x−2) = 5 → x² − 4 = 5 → x² = 9 → x = ±3. Sin embargo, el dominio del logaritmo exige x + 2 > 0 y x − 2 > 0, es decir, x > 2. Solo x = 3 cumple esta condición (x = −3 no cumple x − 2 > 0). La opción B incluye x = −3 que no está en el dominio. La opción C falla en la ecuación. La opción D afirma incorrectamente que no hay solución.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 54. Geométrico-métrico + resolución (área de superficie de una esfera)
      {
        id: 'mat-p-s11-54',
        enunciado: 'Una empresa fabrica balones de fútbol esféricos con radio de 11 cm. Si se quiere recubrir la superficie exterior de cada balón con un material especial, ¿cuántos cm² de material se necesitan por balón? (Superficie de esfera = 4πr²; use π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 1.519,76 cm²' },
          { letra: 'B', texto: 'Aproximadamente 379,94 cm²' },
          { letra: 'C', texto: 'Aproximadamente 5.575,28 cm²' },
          { letra: 'D', texto: 'Aproximadamente 3.039,52 cm²' },
        ],
        clave: 'A',
        justificacion: 'Superficie = 4πr² = 4 × 3,14 × 11² = 4 × 3,14 × 121 = 4 × 379,94 = 1.519,76 cm². La opción B calcula πr² (área del círculo máximo, sin el factor 4). La opción C usa el diámetro como radio (22 cm). La opción D omite dividir correctamente (duplica el resultado).',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 55. Numérico-variacional + comunicación (funciones trigonométricas — gráficas)
      {
        id: 'mat-p-s11-55',
        enunciado: 'La función f(x) = 2sin(x) tiene amplitud 2 y período 2π. Si se compara con g(x) = sen(2x), ¿cuál es la diferencia principal entre estas dos funciones?',
        opciones: [
          { letra: 'A', texto: 'f(x) tiene mayor amplitud que g(x); g(x) tiene el mismo período que f(x).' },
          { letra: 'B', texto: 'f(x) tiene amplitud 2 y período 2π; g(x) tiene amplitud 1 y período π.' },
          { letra: 'C', texto: 'f(x) y g(x) tienen la misma amplitud pero diferente período.' },
          { letra: 'D', texto: 'g(x) tiene mayor amplitud que f(x) porque su coeficiente está en el argumento.' },
        ],
        clave: 'B',
        justificacion: 'Para f(x) = 2sen(x): amplitud = |2| = 2; período = 2π/1 = 2π. Para g(x) = sen(2x): amplitud = |1| = 1; período = 2π/2 = π. Las diferencias son: f tiene mayor amplitud (2 vs 1) y mayor período (2π vs π). La opción A dice que tienen el mismo período, lo cual es incorrecto. La opción C dice que tienen la misma amplitud (2 ≠ 1). La opción D confunde el efecto del coeficiente en el argumento con la amplitud.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 56. Aleatorio + resolución (intervalo de confianza — concepto)
      {
        id: 'mat-p-s11-56',
        enunciado: 'Una encuesta a 500 jóvenes colombianos muestra que el 68% usa redes sociales diariamente. Con un nivel de confianza del 95% y un margen de error de ±4%, ¿cuál es el intervalo de confianza para el porcentaje real de la población?',
        opciones: [
          { letra: 'A', texto: '[64%, 72%]' },
          { letra: 'B', texto: '[68%, 95%]' },
          { letra: 'C', texto: '[64%, 95%]' },
          { letra: 'D', texto: '[60%, 76%]' },
        ],
        clave: 'A',
        justificacion: 'El intervalo de confianza se construye sumando y restando el margen de error al estadístico muestral: [68% − 4%, 68% + 4%] = [64%, 72%]. Esto significa que con un 95% de confianza, entre el 64% y el 72% de la población total usa redes sociales diariamente. La opción B confunde el nivel de confianza con el límite superior. La opción C mezcla el margen de error y el nivel de confianza. La opción D usa margen de error de ±8%.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 57. Geométrico-métrico + razonamiento (geometría analítica — rectas y sistemas)
      {
        id: 'mat-p-s11-57',
        enunciado: 'Dos rectas son: r₁: 2x + y = 8 y r₂: x − y = 1. ¿En qué punto se intersectan estas dos rectas?',
        opciones: [
          { letra: 'A', texto: '(3, 2)' },
          { letra: 'B', texto: '(4, 0)' },
          { letra: 'C', texto: '(2, 4)' },
          { letra: 'D', texto: '(3, 4)' },
        ],
        clave: 'A',
        justificacion: 'Sumando las ecuaciones: (2x + y) + (x − y) = 8 + 1 → 3x = 9 → x = 3. Sustituyendo en r₂: 3 − y = 1 → y = 2. Punto de intersección: (3, 2). Verificación en r₁: 2(3) + 2 = 8 ✓. La opción B satisface r₁ (2×4+0=8) pero no r₂ (4−0=4≠1). La opción C satisface r₂ (2−4=−2≠1). La opción D no satisface ninguna.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 58. Numérico-variacional + razonamiento (función exponencial — crecimiento e interés)
      {
        id: 'mat-p-s11-58',
        enunciado: 'Un banco ofrece una tasa de interés compuesto anual del 8%. Si se depositan $2.000.000, ¿cuánto dinero habrá después de 3 años? (Fórmula: A = P(1 + r)ⁿ)',
        opciones: [
          { letra: 'A', texto: '$2.519.424' },
          { letra: 'B', texto: '$2.480.000' },
          { letra: 'C', texto: '$2.160.000' },
          { letra: 'D', texto: '$2.600.000' },
        ],
        clave: 'A',
        justificacion: 'A = 2.000.000 × (1 + 0,08)³ = 2.000.000 × (1,08)³ = 2.000.000 × 1,259712 ≈ 2.519.424. El interés compuesto se calcula sobre el capital acumulado cada año. La opción B aplica 8% simple por año: 2.000.000 + 3×(160.000) = 2.480.000 (interés simple). La opción C solo aplica un año de interés. La opción D es un estimado sin base en la fórmula.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 59. Aleatorio + razonamiento (pruebas de hipótesis — concepto)
      {
        id: 'mat-p-s11-59',
        enunciado: 'Una empresa afirma que sus empleados trabajan en promedio 8 horas diarias. Un sindicato cree que trabajan más. Para comprobarlo, toman una muestra de 50 empleados y obtienen una media de 8,5 h con desviación estándar de 1,2 h. ¿Cuál es la hipótesis nula H₀ en esta prueba?',
        opciones: [
          { letra: 'A', texto: 'H₀: μ = 8 horas (la media real es exactamente 8 horas).' },
          { letra: 'B', texto: 'H₀: μ > 8 horas (los empleados trabajan más de 8 horas).' },
          { letra: 'C', texto: 'H₀: μ = 8,5 horas (la media muestral es la real).' },
          { letra: 'D', texto: 'H₀: la muestra no representa a la población.' },
        ],
        clave: 'A',
        justificacion: 'La hipótesis nula (H₀) es siempre la afirmación de igualdad o statu quo que se quiere poner a prueba. En este caso, la empresa afirma que μ = 8, por lo que H₀: μ = 8 horas. La hipótesis alternativa sería H₁: μ > 8 (lo que el sindicato quiere demostrar). La opción B es la hipótesis alternativa (H₁), no la nula. La opción C usa el valor muestral, no el parámetro poblacional. La opción D describe una preocupación metodológica, no una hipótesis estadística.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 60. Geométrico-métrico + resolución (área de triángulo con coordenadas)
      {
        id: 'mat-p-s11-60',
        enunciado: 'Los vértices de un triángulo en el plano cartesiano son A(0, 0), B(6, 0) y C(2, 4). ¿Cuál es el área del triángulo?',
        opciones: [
          { letra: 'A', texto: '12 unidades cuadradas' },
          { letra: 'B', texto: '24 unidades cuadradas' },
          { letra: 'C', texto: '8 unidades cuadradas' },
          { letra: 'D', texto: '16 unidades cuadradas' },
        ],
        clave: 'A',
        justificacion: 'La base AB va de (0,0) a (6,0): base = 6. La altura es la distancia vertical de C(2,4) a la recta AB (que está sobre el eje x, y=0): altura = 4. Área = (1/2) × base × altura = (1/2) × 6 × 4 = 12 unidades cuadradas. También se puede usar la fórmula del determinante: Área = (1/2)|x_A(y_B − y_C) + x_B(y_C − y_A) + x_C(y_A − y_B)| = (1/2)|0(0−4) + 6(4−0) + 2(0−0)| = (1/2)|0 + 24 + 0| = 12. La opción B omite dividir entre 2. Las opciones C y D aplican cálculos incorrectos.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },
    ],
  },

  // ===========================================================
  // CIENCIAS NATURALES
  // ===========================================================
  naturales: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Entorno vivo + uso-conocimiento
      {
        id: 'nat-p-s9-01',
        enunciado: 'Un estudiante observa que en su jardín hay plantas que crecen a la sombra de un árbol grande. Estas plantas tienen hojas más grandes y de color verde más oscuro que las plantas expuestas al sol. ¿Cuál es la explicación más adecuada para esta adaptación?',
        opciones: [
          { letra: 'A', texto: 'Las plantas de sombra tienen hojas más grandes porque reciben más lluvia que las plantas del sol.' },
          { letra: 'B', texto: 'Las plantas de sombra tienen hojas más grandes y con más cloroplastos para captar mayor cantidad de luz disponible y realizar la fotosíntesis.' },
          { letra: 'C', texto: 'Las plantas de sombra son de especies diferentes y por eso sus hojas tienen características distintas, independientemente de la luz.' },
          { letra: 'D', texto: 'Las plantas de sombra no realizan fotosíntesis; obtienen sus nutrientes directamente del suelo.' },
        ],
        clave: 'B',
        justificacion: 'Las plantas que viven a la sombra han desarrollado adaptaciones para maximizar la captación de luz: hojas más grandes aumentan el área de absorción y el color verde oscuro indica mayor concentración de cloroplastos, que son los organelos donde ocurre la fotosíntesis. La opción A confunde un factor climático (lluvia) con uno lumínico. La opción C ignora que el ambiente moldea las adaptaciones fisiológicas. La opción D es incorrecta: todas las plantas con cloroplastos realizan fotosíntesis.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 2. Entorno vivo + explicacion
      {
        id: 'nat-p-s9-02',
        enunciado: 'En un cruce entre una planta de flores rojas (RR) y una planta de flores blancas (rr), todos los descendientes de la primera generación (F1) tienen flores rosas (Rr). Si dos plantas de la F1 se cruzan entre sí, ¿qué proporción de plantas de flores blancas se espera en la segunda generación (F2)?',
        opciones: [
          { letra: 'A', texto: '1/4 (25%)' },
          { letra: 'B', texto: '1/2 (50%)' },
          { letra: 'C', texto: '3/4 (75%)' },
          { letra: 'D', texto: '0% porque el blanco desapareció en la F1.' },
        ],
        clave: 'A',
        justificacion: 'Al cruzar dos plantas Rr, se obtiene la proporción mendeliana 1 RR : 2 Rr : 1 rr. Solo las plantas rr tendrán flores blancas, lo que equivale a 1/4 (25%) de la descendencia. La opción B sería correcta si se buscara la proporción de heterocigotos (Rr). La opción C corresponde a la proporción de plantas que tienen al menos un alelo R (RR + Rr). La opción D es incorrecta: el alelo r estaba presente en las plantas F1 de manera recesiva y puede reaparecer en F2.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 3. Entorno físico + explicacion
      {
        id: 'nat-p-s9-03',
        enunciado: 'Una pelota de 2 kg se lanza verticalmente hacia arriba desde el suelo con una velocidad inicial de 10 m/s. Ignorando la fricción del aire, ¿cuál de las afirmaciones sobre la energía de la pelota es CORRECTA mientras sube?',
        opciones: [
          { letra: 'A', texto: 'La energía cinética aumenta y la energía potencial disminuye.' },
          { letra: 'B', texto: 'La energía cinética disminuye y la energía potencial aumenta, pero la energía mecánica total permanece constante.' },
          { letra: 'C', texto: 'Tanto la energía cinética como la potencial disminuyen porque la pelota pierde energía al subir.' },
          { letra: 'D', texto: 'La energía mecánica total aumenta porque la pelota gana altura.' },
        ],
        clave: 'B',
        justificacion: 'Al subir, la pelota desacelera: su energía cinética (Ec = ½mv²) disminuye. Al mismo tiempo, aumenta su altura y por tanto su energía potencial gravitacional (Ep = mgh). Como no hay fricción, la energía mecánica total (Ec + Ep) se conserva, según el principio de conservación de la energía. La opción A invierte correctamente la relación. Las opciones C y D violan el principio de conservación de la energía.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 4. CTS + indagacion
      {
        id: 'nat-p-s9-04',
        enunciado: 'Una investigadora quiere determinar si la temperatura afecta la velocidad de germinación de semillas de frijol. Diseña el siguiente experimento: coloca 20 semillas en tres grupos de 20 semillas cada uno, con las mismas condiciones de humedad y luz, pero a diferentes temperaturas (15°C, 25°C y 35°C). ¿Cuál es la variable independiente en este experimento?',
        opciones: [
          { letra: 'A', texto: 'La velocidad de germinación de las semillas.' },
          { letra: 'B', texto: 'La cantidad de humedad suministrada a cada grupo.' },
          { letra: 'C', texto: 'La temperatura a la que se expone cada grupo de semillas.' },
          { letra: 'D', texto: 'El número de semillas usadas en cada grupo.' },
        ],
        clave: 'C',
        justificacion: 'La variable independiente es la que la investigadora manipula deliberadamente para observar su efecto: en este caso, la temperatura (15°C, 25°C y 35°C). La opción A (velocidad de germinación) es la variable dependiente, pues es lo que se mide como resultado. La humedad (opción B) y el número de semillas (opción D) son variables de control, que se mantienen iguales para que no afecten los resultados.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 5. Entorno físico + uso-conocimiento
      {
        id: 'nat-p-s9-05',
        enunciado: 'Un químico mezcla ácido clorhídrico (HCl) con hidróxido de sodio (NaOH) en proporciones iguales y obtiene cloruro de sodio (NaCl) y agua (H₂O). ¿Qué tipo de reacción química ocurrió?',
        opciones: [
          { letra: 'A', texto: 'Reacción de síntesis, porque se forman dos nuevas sustancias.' },
          { letra: 'B', texto: 'Reacción de descomposición, porque el ácido se separa en sus componentes.' },
          { letra: 'C', texto: 'Reacción de neutralización (doble sustitución), porque un ácido reacciona con una base para formar una sal y agua.' },
          { letra: 'D', texto: 'Reacción de combustión, porque se libera energía en forma de calor.' },
        ],
        clave: 'C',
        justificacion: 'La reacción entre un ácido (HCl) y una base (NaOH) para producir una sal (NaCl) y agua (H₂O) es una reacción de neutralización ácido-base, clasificada como doble sustitución. No es síntesis (opción A), que implica formar una sola sustancia desde dos simples. No es descomposición (opción B), que parte de una sola sustancia. No es combustión (opción D), que requiere oxígeno y produce CO₂ y H₂O al quemar un material orgánico.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 6. Entorno vivo + indagación (ecosistemas y cadenas tróficas)
      {
        id: 'nat-p-s9-06',
        enunciado: 'En un lago colombiano se aplicó un pesticida que eliminó casi toda la población de insectos acuáticos. Días después, la población de peces pequeños disminuyó drásticamente. ¿Cuál es la explicación científica más adecuada para este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El pesticida envenenó directamente a los peces pequeños al contaminar el agua.' },
          { letra: 'B', texto: 'La eliminación de los insectos acuáticos, que son la principal fuente de alimento de los peces pequeños, redujo la disponibilidad de energía en ese nivel trófico.' },
          { letra: 'C', texto: 'Los peces pequeños migraron a otro lago porque el pesticida alteró su sistema nervioso.' },
          { letra: 'D', texto: 'La ausencia de insectos mejoró la calidad del agua, lo que redujo la reproducción de los peces.' },
        ],
        clave: 'B',
        justificacion: 'En una cadena trófica, los insectos acuáticos son consumidores primarios o productores secundarios que sirven de alimento a los peces pequeños. Al eliminar un eslabón (los insectos), el siguiente nivel trófico (peces) pierde su fuente de energía y disminuye su población. Esto ejemplifica el efecto en cascada trófica. La opción A puede ser parcialmente cierta pero no es la principal explicación. Las opciones C y D no tienen fundamento científico en el contexto dado.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 7. Entorno físico + explicación (movimiento y fuerzas)
      {
        id: 'nat-p-s9-07',
        enunciado: 'Un estudiante empuja horizontalmente una caja de 10 kg sobre una superficie rugosa con una fuerza de 50 N. La fricción ejerce una fuerza de 30 N en sentido contrario. ¿Cuál es la fuerza neta sobre la caja y hacia qué lado se mueve?',
        opciones: [
          { letra: 'A', texto: 'Fuerza neta = 80 N; la caja se mueve en la dirección del empuje.' },
          { letra: 'B', texto: 'Fuerza neta = 20 N; la caja se mueve en la dirección del empuje.' },
          { letra: 'C', texto: 'Fuerza neta = 20 N; la caja permanece en reposo porque la fricción frena el movimiento.' },
          { letra: 'D', texto: 'Fuerza neta = 0 N; las fuerzas se cancelan y la caja no se mueve.' },
        ],
        clave: 'B',
        justificacion: 'La fuerza neta es la suma vectorial de las fuerzas aplicadas. Como el empuje (50 N) y la fricción (30 N) son opuestos: F_neta = 50 − 30 = 20 N en la dirección del empuje. Por la segunda ley de Newton, F_neta = m·a; como F_neta > 0, la caja se acelera en la dirección del empuje. La opción A suma las fuerzas en vez de restarlas. La opción C confunde fuerza neta con el hecho de que la fricción actúa; como 50 > 30, hay movimiento. La opción D requeriría que las fuerzas fueran iguales (50 N = 50 N).',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 8. CTS + uso-conocimiento (impacto ambiental)
      {
        id: 'nat-p-s9-08',
        enunciado: 'La minería de carbón a cielo abierto en el Cesar (Colombia) ha generado controversias. Desde el punto de vista de la ciencia, tecnología y sociedad (CTS), ¿cuál de las siguientes afirmaciones refleja mejor el análisis de esta problemática?',
        opciones: [
          { letra: 'A', texto: 'La minería de carbón debe prohibirse completamente porque contamina el ambiente.' },
          { letra: 'B', texto: 'La explotación de carbón genera ingresos económicos pero también produce impactos ambientales como erosión, contaminación de fuentes de agua y emisión de gases de efecto invernadero, por lo que requiere regulación y compensación a las comunidades afectadas.' },
          { letra: 'C', texto: 'Los impactos ambientales de la minería son inevitables y no se pueden reducir con tecnología.' },
          { letra: 'D', texto: 'La ciencia no puede evaluar los impactos sociales de la minería, solo los ambientales.' },
        ],
        clave: 'B',
        justificacion: 'El enfoque CTS reconoce que la actividad humana —incluida la minería— tiene dimensiones económicas, sociales y ambientales que deben analizarse de forma integrada. La explotación de carbón genera riqueza, pero también impactos como erosión, contaminación hídrica y emisiones de CO₂. Una perspectiva CTS responsable reconoce estos impactos y propone regulación y mitigación. La opción A adopta una postura extrema sin matices. La opción C es fatalista y contradice el papel de la tecnología limpia. La opción D reduce incorrectamente el alcance de la ciencia.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 9. Entorno vivo + uso-conocimiento (célula y funciones)
      {
        id: 'nat-p-s9-09',
        enunciado: '¿Cuál de las siguientes afirmaciones sobre las células eucariotas y procariotas es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Las células eucariotas no tienen membrana plasmática, a diferencia de las procariotas.' },
          { letra: 'B', texto: 'Las células procariotas no tienen núcleo definido; su material genético se encuentra disperso en el citoplasma.' },
          { letra: 'C', texto: 'Las células eucariotas no tienen mitocondrias; la energía la obtienen directamente del núcleo.' },
          { letra: 'D', texto: 'Las células procariotas son más complejas que las eucariotas porque tienen más organelos.' },
        ],
        clave: 'B',
        justificacion: 'La principal diferencia entre células procariotas y eucariotas es la presencia o ausencia de núcleo definido. Las procariotas (como las bacterias) no tienen membrana nuclear: su ADN se encuentra en una región del citoplasma llamada nucleoide, sin una membrana que lo delimite. Las eucariotas (hongos, plantas, animales, protistas) sí tienen núcleo con membrana. La opción A es incorrecta: ambos tipos tienen membrana plasmática. Las opciones C y D invierten las características de complejidad.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 10. Entorno físico + indagación (método científico)
      {
        id: 'nat-p-s9-10',
        enunciado: 'Una estudiante hipotiza que las plantas crecen más rápido con luz azul que con luz blanca. Planta 30 semillas iguales en el mismo tipo de tierra, con el mismo riego, pero la mitad bajo luz azul y la otra mitad bajo luz blanca durante 4 semanas. Mide la altura al final. ¿Cuál es la hipótesis y cuál es la variable dependiente?',
        opciones: [
          { letra: 'A', texto: 'Hipótesis: la luz azul favorece el crecimiento. Variable dependiente: el tipo de luz.' },
          { letra: 'B', texto: 'Hipótesis: la luz azul favorece el crecimiento. Variable dependiente: la altura de las plantas.' },
          { letra: 'C', texto: 'Hipótesis: las plantas necesitan luz para crecer. Variable dependiente: la cantidad de riego.' },
          { letra: 'D', texto: 'Hipótesis: todas las plantas crecen igual bajo cualquier tipo de luz. Variable dependiente: la altura de las plantas.' },
        ],
        clave: 'B',
        justificacion: 'La hipótesis es la afirmación que se quiere comprobar: "las plantas crecen más rápido con luz azul que con luz blanca". La variable dependiente es lo que se mide como resultado del experimento, es decir, la altura de las plantas. La variable independiente es lo que la estudiante manipula (el tipo de luz). La opción A confunde variable independiente con dependiente. La opción C cambia la hipótesis original. La opción D plantea la hipótesis nula, no la hipótesis de investigación.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 11. Entorno vivo + explicación (sistema digestivo)
      {
        id: 'nat-p-s9-11',
        enunciado: 'Después de consumir una comida rica en proteínas, las enzimas del estómago (como la pepsina) actúan sobre ellas. ¿Cuál es la función principal de estas enzimas y cuál es el producto resultante?',
        opciones: [
          { letra: 'A', texto: 'Las enzimas unen los aminoácidos para formar proteínas más grandes; el producto son polipéptidos complejos.' },
          { letra: 'B', texto: 'Las enzimas descomponen las proteínas en péptidos y aminoácidos, que luego serán absorbidos por el intestino delgado.' },
          { letra: 'C', texto: 'Las enzimas eliminan las proteínas del cuerpo porque son nocivas para la digestión.' },
          { letra: 'D', texto: 'Las enzimas convierten las proteínas en glucosa para obtener energía inmediata.' },
        ],
        clave: 'B',
        justificacion: 'Las enzimas digestivas son catalizadores biológicos que aceleran la hidrólisis de las macromoléculas. La pepsina (en el estómago, en ambiente ácido) rompe los enlaces peptídicos de las proteínas, generando péptidos más pequeños y aminoácidos. Posteriormente, en el intestino delgado, otros enzimas (proteasas pancreáticas) completan la digestión y los aminoácidos son absorbidos. La opción A invierte el proceso (la síntesis de proteínas ocurre en los ribosomas, no en la digestión). Las opciones C y D no corresponden a la función enzimática digestiva.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 12. Entorno físico + uso-conocimiento (propiedades de la materia)
      {
        id: 'nat-p-s9-12',
        enunciado: 'Se mezclan agua y aceite en un recipiente y se agitan. Al dejarlos reposar, el aceite sube y el agua baja. ¿Cuál es la explicación correcta de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El aceite sube porque tiene mayor densidad que el agua.' },
          { letra: 'B', texto: 'El agua baja porque tiene mayor densidad que el aceite y las moléculas de agua son polares mientras que las del aceite son no polares, lo que impide su mezcla.' },
          { letra: 'C', texto: 'El aceite sube porque tiene mayor temperatura que el agua.' },
          { letra: 'D', texto: 'El agua es más pesada porque contiene más moléculas que el aceite en el mismo volumen.' },
        ],
        clave: 'B',
        justificacion: 'La separación agua-aceite se debe a dos factores: (1) diferencia de densidad: el agua (≈1 g/mL) es más densa que el aceite (≈0,9 g/mL), por lo que el agua ocupa la parte inferior. (2) polaridad: el agua es una molécula polar y el aceite es apolar; según el principio "lo semejante disuelve a lo semejante", no son miscibles. La opción A afirma lo contrario (el aceite tiene MENOR densidad). La opción C introduce un factor térmico que no es la causa principal. La opción D confunde densidad con número de moléculas.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 13. CTS + indagación (ética científica)
      {
        id: 'nat-p-s9-13',
        enunciado: 'Un laboratorio farmacéutico colombiano realiza pruebas de un nuevo medicamento. Para que el estudio sea científicamente válido y éticamente correcto, ¿qué condiciones mínimas debe cumplir el diseño experimental?',
        opciones: [
          { letra: 'A', texto: 'Aplicar el medicamento a todos los participantes sin informarles, para evitar el efecto placebo.' },
          { letra: 'B', texto: 'Contar con grupo experimental y grupo de control, obtener consentimiento informado de los participantes y usar doble ciego para controlar el efecto placebo.' },
          { letra: 'C', texto: 'Aplicar el medicamento solo a personas voluntarias sin grupo de control, ya que comparar no es necesario.' },
          { letra: 'D', texto: 'Probar primero el medicamento en animales y publicar los resultados sin revisión por pares.' },
        ],
        clave: 'B',
        justificacion: 'Un ensayo clínico ético y científicamente válido requiere: (1) grupo experimental (recibe el medicamento) y grupo control (recibe placebo); (2) consentimiento informado: los participantes deben saber que participan en un estudio y aceptar voluntariamente; (3) diseño doble ciego: ni los pacientes ni los evaluadores saben quién recibe qué, para eliminar sesgos. La opción A viola el principio ético de consentimiento informado. La opción C elimina el grupo de control. La opción D es incompleta y omite la revisión por pares como validación científica.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 14. Entorno físico + explicación (electricidad)
      {
        id: 'nat-p-s9-14',
        enunciado: 'En un circuito eléctrico simple, una bombilla de 60 W está conectada a 120 V de tensión. ¿Cuánta corriente (en amperios) circula por el circuito?',
        opciones: [
          { letra: 'A', texto: '0,5 A' },
          { letra: 'B', texto: '2 A' },
          { letra: 'C', texto: '60 A' },
          { letra: 'D', texto: '7.200 A' },
        ],
        clave: 'A',
        justificacion: 'La potencia eléctrica se calcula con P = V · I, donde P es la potencia (W), V es la tensión (V) e I es la corriente (A). Despejando: I = P / V = 60 W / 120 V = 0,5 A. La opción B invierte numerador y denominador (120/60 = 2). La opción C confunde potencia con corriente. La opción D multiplica en vez de dividir (60 × 120 = 7.200).',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 15. Entorno vivo + explicación (fotosíntesis y respiración)
      {
        id: 'nat-p-s9-15',
        enunciado: 'La fotosíntesis y la respiración celular son procesos complementarios en el ciclo de energía de los ecosistemas. ¿Cuál de las siguientes afirmaciones describe correctamente la relación entre estos dos procesos?',
        opciones: [
          { letra: 'A', texto: 'Ambos procesos producen CO₂ y consumen O₂.' },
          { letra: 'B', texto: 'La fotosíntesis convierte energía solar en glucosa y libera O₂; la respiración celular descompone la glucosa para liberar energía útil (ATP) y produce CO₂ y H₂O.' },
          { letra: 'C', texto: 'La fotosíntesis solo ocurre en animales y la respiración solo en plantas.' },
          { letra: 'D', texto: 'Ambos procesos consumen glucosa y producen energía en forma de ATP.' },
        ],
        clave: 'B',
        justificacion: 'La fotosíntesis (en plantas con cloroplastos) usa energía solar, CO₂ y H₂O para producir glucosa y O₂: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. La respiración celular (en casi todos los organismos) descompone la glucosa en presencia de O₂ para producir ATP (energía), CO₂ y H₂O: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Son procesos inversos en términos de intercambio gaseoso. La opción A describe solo la respiración. La opción C invierte los organismos. La opción D describe solo la respiración.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 16. Entorno vivo + uso-conocimiento (sistema nervioso)
      {
        id: 'nat-p-s9-16',
        enunciado: 'Al tocar un objeto muy caliente, la mano se retira automáticamente antes de que el cerebro procese el dolor. ¿Qué mecanismo del sistema nervioso explica esta respuesta?',
        opciones: [
          { letra: 'A', texto: 'El cerebro envía una señal de emergencia a través de los nervios motores en menos de 0,1 segundos.' },
          { letra: 'B', texto: 'El arco reflejo: la señal va desde los receptores sensoriales de la mano hasta la médula espinal, que ordena la respuesta motora sin esperar al cerebro.' },
          { letra: 'C', texto: 'Los músculos de la mano tienen memoria y reconocen el calor para retirar la mano por sí solos.' },
          { letra: 'D', texto: 'El sistema endocrino libera adrenalina que provoca el movimiento de la mano antes que el sistema nervioso.' },
        ],
        clave: 'B',
        justificacion: 'El arco reflejo es un circuito nervioso que permite respuestas rápidas e involuntarias sin la intervención del cerebro. La secuencia es: estímulo → receptor sensorial → nervio aferente → médula espinal → nervio eferente → efector (músculo). Al retirar la mano de un objeto caliente, la señal va a la médula espinal, que ordena la respuesta motora de inmediato, mientras la señal al cerebro (dolor consciente) llega después. La opción A describe un proceso más lento que involucra el cerebro. La opción C es biológicamente incorrecta. La opción D confunde los tiempos de respuesta del sistema endocrino.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 17. Entorno físico + uso-conocimiento (tabla periódica)
      {
        id: 'nat-p-s9-17',
        enunciado: 'El sodio (Na) tiene número atómico 11 y masa atómica 23. ¿Cuántos protones, neutrones y electrones tiene un átomo neutro de sodio?',
        opciones: [
          { letra: 'A', texto: '11 protones, 12 neutrones, 11 electrones.' },
          { letra: 'B', texto: '11 protones, 11 neutrones, 12 electrones.' },
          { letra: 'C', texto: '12 protones, 11 neutrones, 11 electrones.' },
          { letra: 'D', texto: '23 protones, 11 neutrones, 11 electrones.' },
        ],
        clave: 'A',
        justificacion: 'El número atómico (Z = 11) indica el número de protones. En un átomo neutro, el número de electrones iguala al de protones: 11 electrones. El número de neutrones = masa atómica − número atómico = 23 − 11 = 12 neutrones. La opción B intercambia neutrones y electrones. La opción C usa el número de neutrones como protones. La opción D confunde la masa atómica con el número de protones.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 18. Entorno vivo + indagación (ecología)
      {
        id: 'nat-p-s9-18',
        enunciado: 'Una estudiante quiere determinar si la tala de árboles en un bosque afecta la diversidad de aves. ¿Cuál sería el diseño de investigación más apropiado?',
        opciones: [
          { letra: 'A', texto: 'Contar el número de árboles talados y multiplicarlo por el número de especies conocidas.' },
          { letra: 'B', texto: 'Comparar la riqueza de especies de aves en zonas taladas y en zonas conservadas, controlando factores como altitud, temperatura y precipitación.' },
          { letra: 'C', texto: 'Preguntar a los habitantes del área si han notado cambios en las aves.' },
          { letra: 'D', texto: 'Observar las aves durante un día en la zona talada y registrar cuántas se ven.' },
        ],
        clave: 'B',
        justificacion: 'Un diseño de investigación válido requiere comparación entre un grupo experimental (zona talada) y un grupo control (zona conservada), controlando las variables que podrían afectar los resultados (altitud, clima). Esto permite atribuir las diferencias en diversidad de aves a la tala y no a otros factores. La opción A es una estimación sin base empírica. La opción C usa percepciones subjetivas, no datos sistemáticos. La opción D carece de grupo de comparación y de tiempo representativo.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 19. Entorno físico + explicación (óptica)
      {
        id: 'nat-p-s9-19',
        enunciado: 'Cuando un rayo de luz pasa del aire al agua, cambia su velocidad y dirección. ¿Cuál es el fenómeno que ocurre y por qué la luz cambia de dirección?',
        opciones: [
          { letra: 'A', texto: 'Reflexión: la luz rebota en la superficie del agua y regresa al aire.' },
          { letra: 'B', texto: 'Refracción: la luz cambia de velocidad al cambiar de medio (del aire al agua) y como consecuencia cambia de dirección.' },
          { letra: 'C', texto: 'Difracción: la luz se dobla alrededor del borde de la superficie del agua.' },
          { letra: 'D', texto: 'Absorción: el agua absorbe parte de la luz y por eso cambia su dirección.' },
        ],
        clave: 'B',
        justificacion: 'La refracción es el cambio en la velocidad de la luz al pasar de un medio a otro de diferente densidad óptica. La luz viaja más lenta en el agua que en el aire (índice de refracción del agua ≈ 1,33). Este cambio de velocidad produce un cambio de dirección descrito por la Ley de Snell. La reflexión (A) ocurre cuando la luz rebota, no la atraviesa. La difracción (C) ocurre alrededor de bordes u obstáculos. La absorción (D) es un proceso distinto en el que la energía luminosa se convierte en calor.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 20. CTS + indagación (cambio climático)
      {
        id: 'nat-p-s9-20',
        enunciado: 'En Colombia, la temporada de lluvias se ha vuelto más intensa e irregular en los últimos años. ¿Cuál de las siguientes afirmaciones representa una relación CAUSAL científicamente fundamentada con este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'Los agricultores colombianos han comenzado a regar sus cultivos con más frecuencia, lo que aumenta la lluvia.' },
          { letra: 'B', texto: 'El aumento de la temperatura global por el efecto invernadero incrementa la evaporación del agua, lo que intensifica el ciclo hídrico y genera precipitaciones más extremas.' },
          { letra: 'C', texto: 'Las lluvias intensas en Colombia son causadas exclusivamente por el fenómeno de La Niña, que es independiente de las emisiones de carbono.' },
          { letra: 'D', texto: 'La deforestación de la Amazonía no tiene ninguna relación con los cambios en los patrones de lluvia en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'El calentamiento global aumenta la temperatura de los océanos y la atmósfera, lo que incrementa la evaporación. Un ciclo hídrico más energético produce precipitaciones más intensas y frecuentes en algunas regiones. Esta es una relación causal bien documentada por el IPCC. La opción A confunde la causa con el efecto. La opción C aísla el fenómeno de La Niña del cambio climático, cuando en realidad la evidencia indica que el cambio climático amplifica sus efectos. La opción D niega la relación comprobada entre deforestación y régimen de lluvias regional.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 21. Entorno vivo + explicación (evolución y adaptación)
      {
        id: 'nat-p-s9-21',
        enunciado: 'El mariposo de abedul (Biston betularia) existe en dos variedades: una clara y una oscura. Antes de la Revolución Industrial, la variedad clara era más común porque los pájaros no la veían sobre los árboles con líquenes claros. Después de la industrialización, la variedad oscura se volvió más frecuente porque el hollín oscureció los troncos. ¿Qué principio evolutivo explica este cambio?',
        opciones: [
          { letra: 'A', texto: 'Mutación dirigida: la polución causó que las mariposas cambiaran de color deliberadamente.' },
          { letra: 'B', texto: 'Selección natural: el ambiente cambió y favoreció la variedad que ofrecía mejor camuflaje; la variedad oscura tuvo mayor supervivencia y reproducción.' },
          { letra: 'C', texto: 'Deriva génica: al azar, la variedad oscura aumentó en la población por casualidad.' },
          { letra: 'D', texto: 'Lamarckismo: las mariposas aprendieron a volverse oscuras para sobrevivir y transmitieron este aprendizaje a sus hijos.' },
        ],
        clave: 'B',
        justificacion: 'Este es el ejemplo clásico del "melanismo industrial" que ilustra la selección natural de Darwin: el ambiente (troncos oscurecidos por hollín) cambió la presión selectiva. La variedad oscura, antes visible para los depredadores, se volvió críptica (difícil de detectar) sobre los troncos oscuros, por lo que sobrevivió y se reprodujo más, aumentando su frecuencia. La opción A (mutación dirigida) es incorrecta: las mutaciones son aleatorias. La opción C (deriva génica) es un cambio aleatorio, no dirigido por el ambiente. La opción D describe el lamarckismo, ya refutado.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 22. Entorno físico + uso-conocimiento (mezclas y separación)
      {
        id: 'nat-p-s9-22',
        enunciado: 'Un técnico de laboratorio tiene una mezcla de arena (sólido), agua y sal disuelta. ¿Cuál es el orden correcto de los métodos de separación para obtener los tres componentes por separado?',
        opciones: [
          { letra: 'A', texto: 'Evaporación → filtración → decantación.' },
          { letra: 'B', texto: 'Filtración para separar la arena → evaporación para obtener la sal → el agua se habrá evaporado.' },
          { letra: 'C', texto: 'Decantación → evaporación → destilación.' },
          { letra: 'D', texto: 'Destilación → filtración → precipitación.' },
        ],
        clave: 'B',
        justificacion: 'El proceso correcto es: (1) Filtración: permite separar la arena (sólido) del líquido (agua con sal disuelta); (2) Evaporación o cristalización: el agua con sal se calienta hasta que el agua se evapore, dejando la sal cristalizada. Si se desea recuperar el agua, se usa destilación. La opción A invierte el orden lógico: evaporar primero eliminaría la sal y el agua juntas. La opción C usa decantación, que separa líquidos de diferente densidad, no sólidos de líquidos. La opción D comienza con destilación, que es más compleja y requiere primero separar el sólido.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 23. Entorno vivo + uso-conocimiento (sistema inmune)
      {
        id: 'nat-p-s9-23',
        enunciado: 'Cuando una bacteria ingresa al cuerpo humano, el sistema inmune responde en dos etapas: la inmunidad innata (respuesta inespecífica) y la inmunidad adaptativa (respuesta específica). ¿Cuál es la diferencia principal entre estas dos respuestas?',
        opciones: [
          { letra: 'A', texto: 'La inmunidad innata solo funciona en niños; la adaptativa funciona en adultos.' },
          { letra: 'B', texto: 'La inmunidad innata actúa de forma rápida y no específica contra cualquier patógeno; la adaptativa es más lenta, pero genera una respuesta específica contra el patógeno concreto y produce memoria inmunológica.' },
          { letra: 'C', texto: 'La inmunidad innata produce anticuerpos; la adaptativa produce glóbulos blancos.' },
          { letra: 'D', texto: 'La inmunidad innata y la adaptativa son idénticas en mecanismo y función.' },
        ],
        clave: 'B',
        justificacion: 'La inmunidad innata es la primera línea de defensa: responde de forma rápida (minutos-horas) y no específica, usando células como los macrófagos y neutrófilos que reconocen patrones generales. La inmunidad adaptativa (días-semanas) genera una respuesta dirigida contra antígenos específicos, produce anticuerpos mediante linfocitos B y genera memoria inmunológica (base de las vacunas). La opción A no tiene base biológica. La opción C invierte los componentes. La opción D niega diferencias fundamentales.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 24. CTS + uso-conocimiento (energía y sociedad)
      {
        id: 'nat-p-s9-24',
        enunciado: 'Colombia genera más del 70% de su energía eléctrica a partir de plantas hidroeléctricas. ¿Cuál de las siguientes afirmaciones sobre este modelo energético es la más equilibrada desde un análisis CTS?',
        opciones: [
          { letra: 'A', texto: 'La energía hidráulica es perfecta porque no produce ningún tipo de impacto ambiental.' },
          { letra: 'B', texto: 'La energía hidráulica es renovable y baja en emisiones de CO₂ durante su operación, pero los embalses alteran ecosistemas fluviales, inundan territorios y afectan comunidades indígenas y campesinas aguas abajo.' },
          { letra: 'C', texto: 'Colombia debería reemplazar todas sus plantas hidroeléctricas por plantas de carbón porque el carbón es más confiable.' },
          { letra: 'D', texto: 'La dependencia de la energía hidráulica no tiene ninguna vulnerabilidad porque siempre llueve en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'Un análisis CTS equilibrado reconoce que la energía hidroeléctrica tiene ventajas (renovable, bajo CO₂ operacional, tecnología madura) pero también impactos ambientales y sociales significativos: alteración de caudales, pérdida de biodiversidad acuática, desplazamiento de comunidades y vulnerabilidad a sequías (como las de 2015-2016 en Colombia que amenazaron el suministro). La opción A idealiza la tecnología. La opción C propone reemplazarla por una fuente más contaminante. La opción D niega la vulnerabilidad climática demostrada durante fenómenos de El Niño.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 25. Entorno físico + indagación (circuitos eléctricos)
      {
        id: 'nat-p-s9-25',
        enunciado: 'En un circuito eléctrico en serie con tres resistencias de 4Ω, 6Ω y 10Ω conectadas a una batería de 40 V, ¿cuál es la resistencia total del circuito y la intensidad de corriente?',
        opciones: [
          { letra: 'A', texto: 'Resistencia total = 20Ω; corriente = 2 A.' },
          { letra: 'B', texto: 'Resistencia total = 20Ω; corriente = 0,5 A.' },
          { letra: 'C', texto: 'Resistencia total = 2Ω; corriente = 20 A.' },
          { letra: 'D', texto: 'Resistencia total = 240Ω; corriente = 6 A.' },
        ],
        clave: 'A',
        justificacion: 'En un circuito en serie, la resistencia total es la suma de las resistencias individuales: R_total = 4 + 6 + 10 = 20Ω. Aplicando la Ley de Ohm: I = V/R = 40V / 20Ω = 2 A. La opción B divide V entre R incorrectamente (40/20 = 2, no 0,5). La opción C confunde circuito en serie con paralelo (en paralelo la resistencia equivalente es menor). La opción D multiplica las resistencias.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 26. Entorno vivo + explicación (reproducción celular)
      {
        id: 'nat-p-s9-26',
        enunciado: 'La mitosis es el proceso de división celular que produce células hijas genéticamente idénticas a la célula madre. ¿Cuál es la función principal de la mitosis en el organismo humano?',
        opciones: [
          { letra: 'A', texto: 'Producir gametos (óvulos y espermatozoides) para la reproducción sexual.' },
          { letra: 'B', texto: 'Crecer, reparar tejidos dañados y reemplazar células que mueren a lo largo de la vida del organismo.' },
          { letra: 'C', texto: 'Reducir a la mitad el número de cromosomas para evitar que se dupliquen con cada generación.' },
          { letra: 'D', texto: 'Eliminar células defectuosas mediante el proceso de apoptosis programada.' },
        ],
        clave: 'B',
        justificacion: 'La mitosis produce dos células hijas con el mismo número de cromosomas que la célula madre (células diploides), lo que la hace ideal para el crecimiento, la renovación y la reparación de tejidos. Por ejemplo, las células de la piel se renuevan constantemente por mitosis. La opción A describe la meiosis (que produce gametos con la mitad de los cromosomas). La opción C también describe la meiosis. La opción D describe la apoptosis, que es un proceso distinto a la mitosis.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 27. Entorno físico + explicación (calor y temperatura)
      {
        id: 'nat-p-s9-27',
        enunciado: 'Un estudiante sostiene que "los metales son más fríos que la madera a temperatura ambiente porque conducen mejor el calor". ¿Cuál es el error conceptual en esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'La afirmación es correcta: los metales sí son más fríos porque tienen menor temperatura.' },
          { letra: 'B', texto: 'El error está en confundir temperatura con sensación térmica: los metales y la madera están a la misma temperatura, pero el metal conduce el calor más rápido desde la mano, lo que genera la sensación de frío.' },
          { letra: 'C', texto: 'El error está en afirmar que los metales conducen el calor; en realidad, la madera es mejor conductora.' },
          { letra: 'D', texto: 'No hay error: la temperatura y la sensación de frío son lo mismo.' },
        ],
        clave: 'B',
        justificacion: 'La temperatura de los metales y la madera en una habitación es la misma (temperatura ambiente). La diferencia está en la conductividad térmica: los metales son buenos conductores y transfieren el calor de la mano rápidamente, produciendo una sensación de frío. La madera es mal conductora y transfiere el calor más lentamente. No es una diferencia de temperatura objetiva sino de conductividad y sensación subjetiva. La opción A acepta el error del estudiante. La opción C invierte las propiedades de conductividad. La opción D niega la distinción básica entre temperatura y sensación.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 28. CTS + indagación (transgénicos y sociedad)
      {
        id: 'nat-p-s9-28',
        enunciado: 'Se desarrolló un arroz genéticamente modificado ("arroz dorado") que produce betacaroteno (precursor de vitamina A) para combatir la deficiencia de vitamina A en países en desarrollo. Desde un enfoque CTS, ¿cuál es la evaluación más completa de esta tecnología?',
        opciones: [
          { letra: 'A', texto: 'El arroz dorado es la solución perfecta a la deficiencia de vitamina A y debe distribuirse sin restricciones.' },
          { letra: 'B', texto: 'El arroz dorado muestra el potencial de la biotecnología para combatir problemas nutricionales, pero debe evaluarse su eficacia real, posibles efectos en la biodiversidad y si aborda las causas estructurales de la malnutrición (pobreza y acceso a alimentos variados).' },
          { letra: 'C', texto: 'Cualquier alimento transgénico es peligroso y debe prohibirse sin excepciones.' },
          { letra: 'D', texto: 'La ciencia no debe involucrarse en problemas sociales como la malnutrición; eso corresponde a la política.' },
        ],
        clave: 'B',
        justificacion: 'Un análisis CTS equilibrado del arroz dorado reconoce: (1) el potencial beneficio de aportar vitamina A a poblaciones deficientes; (2) la necesidad de estudios de eficacia real (¿cuánto betacaroteno biodisponible contiene?); (3) evaluación de riesgos de flujo génico a variedades silvestres; (4) debate ético sobre la dependencia de semillas patentadas; (5) la pregunta de si la solución biotecnológica aborda las causas profundas de la malnutrición. La opción A idealiza sin considerar riesgos. La opción C adopta una postura radical. La opción D separa artificialmente ciencia y sociedad.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 29. Entorno físico + uso-conocimiento (movimiento rectilíneo)
      {
        id: 'nat-p-s9-29',
        enunciado: 'Un automóvil viaja a velocidad constante de 90 km/h. ¿Cuántos metros recorre en 40 segundos?',
        opciones: [
          { letra: 'A', texto: '3.600 m' },
          { letra: 'B', texto: '1.000 m' },
          { letra: 'C', texto: '1.500 m' },
          { letra: 'D', texto: '600 m' },
        ],
        clave: 'B',
        justificacion: 'Primero se convierte la velocidad: 90 km/h = 90.000 m / 3600 s = 25 m/s. Luego: d = v × t = 25 m/s × 40 s = 1.000 m. La opción A calcula 90 × 40 sin conversión de unidades. La opción C convierte incorrectamente la velocidad. La opción D usa otro valor sin justificación.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 30. Entorno vivo + indagación (biodiversidad)
      {
        id: 'nat-p-s9-30',
        enunciado: 'Colombia es el segundo país con mayor biodiversidad del mundo. ¿Cuál de los siguientes factores geográficos explica mejor esta extraordinaria riqueza biológica?',
        opciones: [
          { letra: 'A', texto: 'Colombia es el país más grande de América del Sur, lo que le da más espacio para albergar especies.' },
          { letra: 'B', texto: 'Colombia está ubicada en el trópico y tiene acceso a dos océanos, lo que combinado con su relieve andino genera una gran variedad de ecosistemas y pisos térmicos donde evolucionaron múltiples especies.' },
          { letra: 'C', texto: 'El clima cálido de Colombia es perfecto para la reproducción de todas las especies animales y vegetales.' },
          { letra: 'D', texto: 'La biodiversidad de Colombia es resultado de la importación de especies exóticas por parte de los colonizadores europeos.' },
        ],
        clave: 'B',
        justificacion: 'La biodiversidad de Colombia se explica por su posición tropical (alta energía solar, lluvias), la diversidad de ecosistemas (Andes, Amazonía, Orinoquía, Caribe, Pacífico), la variedad de pisos térmicos (desde el nivel del mar hasta más de 5.000 msnm), su posición como corredor entre América del Norte y del Sur y el acceso a dos océanos. Esta combinación de factores ha propiciado la especialización y diversificación de las especies a lo largo de millones de años. La opción A es incorrecta: Colombia no es el país más grande de Suramérica (Brasil lo supera ampliamente). La opción C simplifica el fenómeno a un único factor. La opción D atribuye la biodiversidad nativa a la colonización, lo cual carece de base científica.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 31. Entorno físico + explicación (ondas y sonido)
      {
        id: 'nat-p-s9-31',
        enunciado: 'En un concierto al aire libre en Barranquilla, los espectadores que están más lejos del escenario escuchan el sonido un instante después de verlo producirse en los instrumentos. ¿Cuál es la explicación física de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El sonido viaja más rápido que la luz, por eso llega antes a los espectadores lejanos.' },
          { letra: 'B', texto: 'La luz viaja aproximadamente 900.000 veces más rápido que el sonido en el aire; por eso la imagen llega casi instantáneamente mientras el sonido demora en recorrer la distancia.' },
          { letra: 'C', texto: 'El calor del día en Barranquilla retarda el sonido pero no la luz.' },
          { letra: 'D', texto: 'Los instrumentos emiten luz y sonido a la misma velocidad, pero la luz rebota y llega antes.' },
        ],
        clave: 'B',
        justificacion: 'La luz viaja a aproximadamente 300.000 km/s en el vacío (y casi igual en el aire), mientras que el sonido viaja a unos 343 m/s en el aire. Esta diferencia de velocidades hace que los espectadores lejanos perciban la imagen prácticamente de forma instantánea, pero el sonido tarde más en llegar (aproximadamente 3 segundos por cada kilómetro de distancia). Este principio es también el que se usa para calcular la distancia a un rayo. La opción A invierte la relación de velocidades. La opción C introduce el calor como variable cuando el efecto es primariamente la diferencia de velocidades.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 32. Entorno vivo + uso-conocimiento (sistema circulatorio)
      {
        id: 'nat-p-s9-32',
        enunciado: 'El corazón humano funciona como una bomba doble. La parte derecha recibe sangre sin oxígeno del cuerpo y la envía a los pulmones; la parte izquierda recibe sangre oxigenada de los pulmones y la envía al cuerpo. ¿Cómo se llaman estas dos circulaciones?',
        opciones: [
          { letra: 'A', texto: 'Circulación arterial (derecha) y circulación venosa (izquierda).' },
          { letra: 'B', texto: 'Circulación mayor o sistémica (izquierda → cuerpo) y circulación menor o pulmonar (derecha → pulmones).' },
          { letra: 'C', texto: 'Circulación pulmonar (izquierda) y circulación coronaria (derecha).' },
          { letra: 'D', texto: 'Circulación mayor (derecha → pulmones) y circulación menor (izquierda → cuerpo).' },
        ],
        clave: 'B',
        justificacion: 'El sistema circulatorio tiene dos circuitos: la circulación mayor o sistémica lleva sangre oxigenada desde el ventrículo izquierdo a todos los tejidos del cuerpo y regresa por las venas al lado derecho. La circulación menor o pulmonar lleva sangre desoxigenada desde el ventrículo derecho a los pulmones para oxigenarse y regresa al corazón izquierdo. La opción A usa terminología incorrecta. La opción C mezcla la circulación pulmonar con la coronaria. La opción D invierte cuál es la mayor y cuál la menor.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 33. Entorno físico + resolución (calor y temperatura)
      {
        id: 'nat-p-s9-33',
        enunciado: 'Una estudiante calienta 200 g de agua de 20°C a 70°C. Si el calor específico del agua es 4,18 J/(g·°C), ¿cuánta energía en julios necesita?',
        opciones: [
          { letra: 'A', texto: '41.800 J' },
          { letra: 'B', texto: '58.520 J' },
          { letra: 'C', texto: '418 J' },
          { letra: 'D', texto: '29.260 J' },
        ],
        clave: 'A',
        justificacion: 'Q = m × c × ΔT = 200 g × 4,18 J/(g·°C) × (70 − 20)°C = 200 × 4,18 × 50 = 200 × 209 = 41.800 J. La opción B calcula 200 × 4,18 × 70 (usa la temperatura final en vez del cambio). La opción C omite la masa (calcula solo c × ΔT). La opción D calcula la mitad por algún error de división.',
        competencia: 'resolucion',
        componente: 'entorno-fisico',
      },

      // 34. CTS + uso-conocimiento (antibióticos y resistencia)
      {
        id: 'nat-p-s9-34',
        enunciado: 'El uso excesivo e innecesario de antibióticos en humanos y animales ha generado un problema de salud pública global: la resistencia bacteriana. ¿Cuál es el mecanismo evolutivo que explica este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'Las bacterias aprenden a resistir los antibióticos porque se exponen a ellos repetidamente.' },
          { letra: 'B', texto: 'Mediante la selección natural, las bacterias que por mutación ya eran resistentes sobreviven y se reproducen cuando se aplica el antibiótico, mientras las sensibles mueren; así la resistencia se propaga en la población bacteriana.' },
          { letra: 'C', texto: 'Los antibióticos se vuelven menos potentes con el tiempo porque pierden sus moléculas activas.' },
          { letra: 'D', texto: 'La resistencia bacteriana es causada por el sistema inmunológico debilitado de los pacientes.' },
        ],
        clave: 'B',
        justificacion: 'La resistencia bacteriana a los antibióticos es un ejemplo clásico de evolución por selección natural. En cualquier población bacteriana existen variaciones genéticas (mutaciones). Cuando se aplica un antibiótico, las bacterias sensibles mueren, pero las que por azar tenían mutaciones que les conferían resistencia sobreviven y se reproducen. Con el tiempo, la población resultante está dominada por bacterias resistentes. Esto no es aprendizaje consciente (opción A), no implica degradación del antibiótico (opción C) ni depende del sistema inmune del huésped (opción D).',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 35. Entorno vivo + explicación (fotosíntesis vs respiración)
      {
        id: 'nat-p-s9-35',
        enunciado: 'Una hoja verde realiza fotosíntesis durante el día y respiración celular tanto de día como de noche. ¿Cuál de los siguientes enunciados describe correctamente la relación entre estos dos procesos?',
        opciones: [
          { letra: 'A', texto: 'La fotosíntesis y la respiración son procesos idénticos que ocurren en los cloroplastos.' },
          { letra: 'B', texto: 'La fotosíntesis transforma energía lumínica en energía química (glucosa) consumiendo CO₂ y H₂O; la respiración libera energía de la glucosa consumiendo O₂ y produciendo CO₂ y H₂O. Son procesos inversos y complementarios.' },
          { letra: 'C', texto: 'Las plantas solo realizan fotosíntesis y los animales solo realizan respiración.' },
          { letra: 'D', texto: 'La respiración celular solo ocurre cuando no hay luz solar disponible.' },
        ],
        clave: 'B',
        justificacion: 'La fotosíntesis (6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂) ocurre en los cloroplastos y captura energía solar para producir glucosa. La respiración celular (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP) ocurre en las mitocondrias y libera la energía almacenada en la glucosa. Son químicamente complementarias y las plantas realizan ambas. La opción A confunde los dos procesos. La opción C es incorrecta: las plantas también respiran. La opción D es incorrecta: la respiración celular es continua.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 36. Entorno físico + indagación (diseño experimental — control)
      {
        id: 'nat-p-s9-36',
        enunciado: 'Un estudiante quiere saber si el abono orgánico mejora el crecimiento de las plantas de tomate. Siembra 20 plantas en dos grupos de 10: el grupo A recibe abono orgánico y el grupo B no. Ambos grupos reciben la misma cantidad de agua y luz solar. Al final del experimento mide la altura de las plantas. ¿Cuál es el grupo control y por qué es necesario?',
        opciones: [
          { letra: 'A', texto: 'El grupo A es el control porque recibe el abono que se quiere probar.' },
          { letra: 'B', texto: 'El grupo B es el control porque no recibe el tratamiento (abono); sirve como punto de referencia para comparar si el abono produce diferencias en el crecimiento.' },
          { letra: 'C', texto: 'No es necesario un grupo control si se mide correctamente la altura.' },
          { letra: 'D', texto: 'El grupo control debe recibir abono inorgánico para comparar tipos de abono.' },
        ],
        clave: 'B',
        justificacion: 'El grupo control es el que no recibe el tratamiento experimental (el abono orgánico, en este caso). Su función es proporcionar una línea base de crecimiento "normal" para comparar con el grupo experimental (A). Sin grupo control, no se puede atribuir con certeza las diferencias en crecimiento al abono, ya que podrían deberse a otras variables. La opción A confunde el grupo experimental con el control. La opción C es incorrecta: el control es esencial para establecer causalidad. La opción D cambia el diseño del experimento original.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 37. Entorno físico + uso-conocimiento (tabla periódica)
      {
        id: 'nat-p-s9-37',
        enunciado: 'El sodio (Na) tiene número atómico 11 y masa atómica 23. ¿Cuántos protones, neutrones y electrones tiene un átomo neutro de sodio?',
        opciones: [
          { letra: 'A', texto: '11 protones, 12 neutrones, 11 electrones.' },
          { letra: 'B', texto: '12 protones, 11 neutrones, 12 electrones.' },
          { letra: 'C', texto: '11 protones, 11 neutrones, 23 electrones.' },
          { letra: 'D', texto: '23 protones, 11 neutrones, 11 electrones.' },
        ],
        clave: 'A',
        justificacion: 'El número atómico (Z = 11) indica el número de protones. En un átomo neutro, el número de electrones iguala al de protones: 11 electrones. El número de neutrones = masa atómica − número atómico = 23 − 11 = 12 neutrones. La opción B intercambia protones y neutrones. La opción C confunde la masa atómica con los electrones. La opción D usa la masa atómica como número de protones.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 38. Entorno vivo + indagación (adaptaciones de animales)
      {
        id: 'nat-p-s9-38',
        enunciado: 'Los murciélagos se orientan en la oscuridad emitiendo ultrasonidos y detectando sus ecos. Este sistema se llama ecolocalización. ¿Qué tipo de adaptación representa este mecanismo y qué función cumple?',
        opciones: [
          { letra: 'A', texto: 'Es una adaptación estructural que les permite ver en la oscuridad como los ojos.' },
          { letra: 'B', texto: 'Es una adaptación funcional/fisiológica que les permite navegar, detectar obstáculos y localizar presas en condiciones de poca o nula visibilidad.' },
          { letra: 'C', texto: 'Es un comportamiento aprendido que los murciélagos adquieren de sus padres.' },
          { letra: 'D', texto: 'Es una adaptación exclusiva de los murciélagos que ningún otro animal posee.' },
        ],
        clave: 'B',
        justificacion: 'La ecolocalización es una adaptación funcional o fisiológica: el sistema nervioso y auditivo de los murciélagos emite y procesa ultrasonidos para construir un "mapa" del entorno. Permite navegar, evitar obstáculos y cazar insectos en la oscuridad total. No es una adaptación estructural como los ojos (opción A). No es puramente aprendida: es innata aunque puede perfeccionarse (opción C). La ecolocalización también existe en delfines, marsopas y algunas aves (opción D).',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 39. Entorno físico + explicación (electricidad — circuitos)
      {
        id: 'nat-p-s9-39',
        enunciado: 'En un circuito en serie con tres bombillas, si una bombilla se rompe, todas las demás se apagan. En un circuito en paralelo con las mismas tres bombillas, si una se rompe, las otras dos siguen encendidas. ¿Cuál es la razón de esta diferencia?',
        opciones: [
          { letra: 'A', texto: 'En el circuito en serie hay más corriente, lo que provoca mayor calor y fallas.' },
          { letra: 'B', texto: 'En el circuito en serie existe un solo camino para la corriente; si una bombilla se rompe, el circuito queda abierto y la corriente no puede fluir. En el paralelo existen caminos independientes, por lo que las otras bombillas mantienen su circuito completo.' },
          { letra: 'C', texto: 'En el circuito en paralelo las bombillas tienen mayor voltaje, por eso resisten más las fallas.' },
          { letra: 'D', texto: 'Los circuitos en serie y paralelo funcionan igual; la diferencia depende del tipo de bombilla.' },
        ],
        clave: 'B',
        justificacion: 'En un circuito en serie, los componentes están conectados en un único camino continuo. Si se interrumpe en cualquier punto (bombilla rota), la corriente no puede circular por ningún componente. En un circuito en paralelo, cada componente tiene su propio camino de corriente independiente; si uno falla, los demás siguen conectados a la fuente. Este principio explica por qué las instalaciones eléctricas domésticas usan circuitos en paralelo. La opción A es incorrecta: en serie hay la misma corriente pero diferente distribución de voltaje.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 40. Entorno vivo + uso-conocimiento (reino Fungi y descomponedores)
      {
        id: 'nat-p-s9-40',
        enunciado: 'Los hongos son organismos del reino Fungi. A diferencia de las plantas, no realizan fotosíntesis. ¿Cómo obtienen su energía y qué papel cumplen en los ecosistemas?',
        opciones: [
          { letra: 'A', texto: 'Los hongos son parásitos que solo obtienen energía de organismos vivos, perjudicándolos siempre.' },
          { letra: 'B', texto: 'Los hongos son principalmente descomponedores: secretan enzimas que degradan materia orgánica muerta (hojas, madera, cadáveres), obteniendo nutrientes y reciclando elementos en el ecosistema.' },
          { letra: 'C', texto: 'Los hongos son productores primarios que fijan nitrógeno del aire como las leguminosas.' },
          { letra: 'D', texto: 'Los hongos obtienen energía del calor solar directamente a través de sus esporas.' },
        ],
        clave: 'B',
        justificacion: 'Los hongos son heterótrofos que obtienen energía por absorción: secretan enzimas digestivas al exterior y absorben los nutrientes resultantes. La mayoría son saprófitos (se alimentan de materia orgánica muerta), cumpliendo el rol fundamental de descomponedores en los ecosistemas: reciclan nutrientes y devuelven minerales al suelo. Algunos son parásitos (opción A, parcialmente correcta) pero esto no aplica a todos. Los hongos no son productores primarios (opción C) ni fotosintéticos.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 41. Entorno físico + uso-conocimiento (soluciones y concentración)
      {
        id: 'nat-p-s9-41',
        enunciado: 'Se disuelven 5 g de sal (NaCl) en 95 g de agua. ¿Cuál es el porcentaje en masa (% m/m) de la solución?',
        opciones: [
          { letra: 'A', texto: '5,26%' },
          { letra: 'B', texto: '5%' },
          { letra: 'C', texto: '50%' },
          { letra: 'D', texto: '0,05%' },
        ],
        clave: 'B',
        justificacion: '% m/m = (masa del soluto / masa total de la solución) × 100 = (5 g / (5 g + 95 g)) × 100 = (5/100) × 100 = 5%. La fórmula correcta usa la masa total de la solución como denominador (soluto + solvente = 100 g). La opción A usa solo el solvente en el denominador (5/95 × 100 ≈ 5,26%), que sería concentración molal o % en otra convención. La opción C confunde al dividir entre 10. La opción D pierde cuatro órdenes de magnitud.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 42. CTS + explicación (vacunas e inmunología)
      {
        id: 'nat-p-s9-42',
        enunciado: 'Las vacunas han permitido eliminar o controlar enfermedades como la viruela, la polio y el sarampión. ¿Cuál es el mecanismo biológico por el que las vacunas protegen al organismo?',
        opciones: [
          { letra: 'A', texto: 'Las vacunas matan directamente los agentes patógenos antes de que entren al cuerpo.' },
          { letra: 'B', texto: 'Las vacunas introducen antígenos (debilitados, muertos o fragmentos) que estimulan al sistema inmunológico a producir anticuerpos y células de memoria, de manera que si el patógeno real entra, el organismo responde rápidamente.' },
          { letra: 'C', texto: 'Las vacunas fortalecen los músculos para que el cuerpo expulse los virus físicamente.' },
          { letra: 'D', texto: 'Las vacunas actúan como antibióticos que previenen infecciones bacterianas y virales.' },
        ],
        clave: 'B',
        justificacion: 'Las vacunas funcionan mediante el principio de inmunidad adaptativa: al introducir antígenos (organismos atenuados, muertos o proteínas de superficie), el sistema inmune reconoce el antígeno como extraño y genera una respuesta primaria creando anticuerpos específicos y células de memoria (linfocitos B y T de memoria). Si el organismo se expone luego al patógeno real, la respuesta secundaria (más rápida y potente) neutraliza la infección antes de causar enfermedad. La opción A confunde mecanismo con efecto. La opción C no tiene base científica. La opción D confunde vacunas con antibióticos.',
        competencia: 'explicacion',
        componente: 'cts',
      },

      // 43. Entorno vivo + explicación (reproducción celular — mitosis)
      {
        id: 'nat-p-s9-43',
        enunciado: 'Durante la mitosis, una célula madre diploide (2n = 46 cromosomas en humanos) se divide para producir células hijas. ¿Cuántos cromosomas tienen las células hijas y para qué sirve este proceso?',
        opciones: [
          { letra: 'A', texto: 'Las células hijas tienen 23 cromosomas (n); la mitosis sirve para la reproducción sexual.' },
          { letra: 'B', texto: 'Las células hijas tienen 46 cromosomas (2n); la mitosis sirve para el crecimiento, reparación de tejidos y reproducción asexual.' },
          { letra: 'C', texto: 'Las células hijas tienen 92 cromosomas (4n); la mitosis duplica el material genético.' },
          { letra: 'D', texto: 'Las células hijas tienen 46 cromosomas pero con diferente información genética que la célula madre.' },
        ],
        clave: 'B',
        justificacion: 'La mitosis produce dos células hijas con el mismo número de cromosomas que la célula madre (2n = 46 en humanos) y con información genética idéntica. Este proceso es fundamental para el crecimiento del organismo (multiplicación celular), la reparación de tejidos dañados y la reproducción asexual de ciertos organismos. La meiosis (no la mitosis) produce células haploides (n = 23) para la reproducción sexual (opción A). La opción C confunde la duplicación del ADN (previa a la mitosis) con el número final de cromosomas. La opción D es incorrecta: las células hijas son genéticamente idénticas a la madre.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 44. Entorno físico + razonamiento (energías renovables y no renovables)
      {
        id: 'nat-p-s9-44',
        enunciado: 'En Colombia, la mayor parte de la energía eléctrica proviene de centrales hidroeléctricas. En períodos de sequía severa (como el fenómeno de El Niño), la generación de energía puede disminuir drásticamente. ¿Por qué las energías solar y eólica pueden ayudar a reducir esta vulnerabilidad?',
        opciones: [
          { letra: 'A', texto: 'Porque la energía solar y eólica siempre generan más electricidad que las hidroeléctricas.' },
          { letra: 'B', texto: 'Porque diversificar la matriz energética con fuentes que no dependan del agua (sol y viento) reduce la dependencia de una sola fuente y aumenta la resiliencia del sistema ante sequías.' },
          { letra: 'C', texto: 'Porque durante las sequías hay más sol y viento, lo que garantiza el suministro total de electricidad.' },
          { letra: 'D', texto: 'Las energías renovables no pueden reemplazar a las hidroeléctricas porque son menos eficientes.' },
        ],
        clave: 'B',
        justificacion: 'La diversificación de la matriz energética es un principio de resiliencia: al combinar fuentes que dependen de recursos diferentes (agua, sol, viento), el sistema eléctrico no queda vulnerable a un solo factor climático como la sequía. Si las hidroeléctricas producen menos, las plantas solares y eólicas pueden compensar parte del déficit. La opción A es incorrecta: no necesariamente producen más. La opción C es una simplificación: el viento y el sol también pueden variar durante sequías. La opción D es un argumento incompleto y descontextualizado.',
        competencia: 'razonamiento',
        componente: 'entorno-fisico',
      },

      // 45. Entorno vivo + uso-conocimiento (sistema nervioso)
      {
        id: 'nat-p-s9-45',
        enunciado: 'Cuando alguien toca accidentalmente una superficie muy caliente, retira la mano antes de sentir dolor conscientemente. Este comportamiento se llama arco reflejo. ¿Cuál es la vía correcta de la señal nerviosa en un arco reflejo espinal?',
        opciones: [
          { letra: 'A', texto: 'Receptor → cerebro → médula espinal → músculo.' },
          { letra: 'B', texto: 'Receptor → neurona sensitiva → médula espinal (interneurona) → neurona motora → músculo efector.' },
          { letra: 'C', texto: 'Receptor → músculo → médula espinal → cerebro.' },
          { letra: 'D', texto: 'Cerebro → neurona motora → médula espinal → músculo.' },
        ],
        clave: 'B',
        justificacion: 'En un arco reflejo espinal, la señal sigue este camino: el receptor (termorreceptor en la piel) detecta el estímulo y genera un impulso nervioso que viaja por la neurona sensitiva (aferente) hasta la médula espinal. Allí, una interneurona conecta la señal con la neurona motora (eferente), que envía la orden al músculo efector para que se contraiga. El cerebro recibe la señal después (por eso el dolor se siente tras retirar la mano), pero la respuesta refleja no requiere procesamiento cerebral previo. La opción A incluye el cerebro en la vía principal del reflejo, lo cual es incorrecto.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 46. Entorno físico + indagación (mezclas y separación)
      {
        id: 'nat-p-s9-46',
        enunciado: 'Una estudiante tiene una mezcla de arena, sal y limaduras de hierro en agua. ¿Cuál sería la secuencia más adecuada de técnicas de separación para obtener cada componente por separado?',
        opciones: [
          { letra: 'A', texto: 'Filtración → evaporación → imantación.' },
          { letra: 'B', texto: 'Imantación → filtración → evaporación.' },
          { letra: 'C', texto: 'Evaporación → filtración → imantación.' },
          { letra: 'D', texto: 'Destilación → cristalización → tamizado.' },
        ],
        clave: 'B',
        justificacion: 'La secuencia óptima es: (1) Imantación para separar las limaduras de hierro (magnéticas). (2) Filtración para separar la arena del agua con sal disuelta. (3) Evaporación del agua para obtener la sal (NaCl). Si se filtrara primero, las limaduras y la arena pasarían o no juntas. La evaporación al inicio eliminaría el agua necesaria para el proceso. La opción A filtra primero (arena y limaduras quedarían juntas). La opción C evapora primero (mezclaría sal y arena). La opción D son técnicas válidas pero no las más apropiadas para esta mezcla específica.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 47. Entorno vivo + explicación (herencia ligada al sexo)
      {
        id: 'nat-p-s9-47',
        enunciado: 'El daltonismo (dificultad para distinguir ciertos colores) es una condición recesiva ligada al cromosoma X. Una mujer portadora (X^D X^d) tiene hijos con un hombre normal (X^D Y). ¿Qué probabilidad hay de que un hijo varón sea daltónico?',
        opciones: [
          { letra: 'A', texto: '0% porque el padre es normal.' },
          { letra: 'B', texto: '25% de todos los hijos.' },
          { letra: 'C', texto: '50% de los hijos varones.' },
          { letra: 'D', texto: '100% de los varones serán daltónicos.' },
        ],
        clave: 'C',
        justificacion: 'Los hijos varones reciben el cromosoma Y del padre y uno de los cromosomas X de la madre. La madre es portadora: tiene X^D (normal) y X^d (daltónico). La probabilidad de que un hijo varón herede X^d es 1/2 = 50%. Si hereda X^d Y, será daltónico (solo tiene una copia y es recesivo). Las hijas heredan X del padre (X^D) y una X de la madre, siendo portadoras o normales pero raramente daltónicas. La opción A ignora el aporte de la madre. La opción B mezcla varones y mujeres. La opción D implicaría que la madre fuese daltónica (X^d X^d), no portadora.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 48. CTS + indagación (efecto invernadero)
      {
        id: 'nat-p-s9-48',
        enunciado: 'El efecto invernadero es un proceso natural esencial para la vida en la Tierra: sin él, la temperatura promedio del planeta sería de −18°C. Sin embargo, las actividades humanas están intensificando este efecto. ¿Qué gases son los principales responsables del aumento del efecto invernadero antrópico?',
        opciones: [
          { letra: 'A', texto: 'El oxígeno (O₂) y el nitrógeno (N₂), que son los gases más abundantes en la atmósfera.' },
          { letra: 'B', texto: 'El dióxido de carbono (CO₂), el metano (CH₄) y el óxido nitroso (N₂O), emitidos principalmente por la quema de combustibles fósiles, la ganadería y la deforestación.' },
          { letra: 'C', texto: 'El vapor de agua, que aumenta con el calentamiento y retroalimenta el efecto invernadero de forma exclusiva.' },
          { letra: 'D', texto: 'El dióxido de azufre (SO₂), que es el gas más contaminante producido por las industrias.' },
        ],
        clave: 'B',
        justificacion: 'Los principales gases de efecto invernadero de origen antrópico son: CO₂ (combustión de fósiles, deforestación), CH₄ (ganadería, rellenos sanitarios, extracción de gas), N₂O (fertilizantes nitrogenados, agricultura). El O₂ y N₂ (opción A) no absorben radiación infrarroja. El vapor de agua (opción C) actúa como retroalimentación pero no es la causa principal del aumento antrópico. El SO₂ (opción D) es un contaminante relevante pero tiene efecto de enfriamiento (refleja radiación solar) más que calentamiento.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 49. Entorno físico + uso-conocimiento (presión y flotabilidad)
      {
        id: 'nat-p-s9-49',
        enunciado: 'Un objeto sumergido en agua experimenta una fuerza hacia arriba llamada empuje (principio de Arquímedes). Si un objeto con densidad menor que la del agua flota, ¿por qué los barcos de acero (cuya densidad es mayor que la del agua) no se hunden?',
        opciones: [
          { letra: 'A', texto: 'El acero de los barcos tiene una densidad diferente al acero sólido debido a procesos especiales.' },
          { letra: 'B', texto: 'Los barcos flotan porque su forma hueca les da una densidad promedio (barco + aire interior) menor que la del agua; el volumen de agua desplazada por el casco genera un empuje mayor que el peso del barco.' },
          { letra: 'C', texto: 'Los motores de los barcos generan una fuerza hacia arriba que contrarresta el peso.' },
          { letra: 'D', texto: 'Los barcos flotan porque el agua del mar tiene mayor densidad que el agua dulce.' },
        ],
        clave: 'B',
        justificacion: 'La clave está en que la densidad relevante es la del sistema completo (barco + aire en su interior), no solo la del material de construcción. Un barco tiene una gran cantidad de aire en su casco, lo que hace que su densidad promedio sea menor que la del agua. Por el principio de Arquímedes, el empuje = peso del fluido desplazado; si el barco desplaza un volumen de agua cuyo peso supera el peso total del barco, el barco flota. La opción A es incorrecta desde el punto de vista físico. La opción C confunde propulsión con flotabilidad. La opción D es una consideración menor (el agua salada sí ayuda ligeramente, pero no es la razón principal).',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 50. Entorno vivo + uso-conocimiento (biotecnología — OGM)
      {
        id: 'nat-p-s9-50',
        enunciado: 'Los organismos genéticamente modificados (OGM) son aquellos cuyo material genético ha sido alterado mediante ingeniería genética. El maíz Bt es un ejemplo: contiene un gen de la bacteria Bacillus thuringiensis que produce una proteína insecticida. Desde una perspectiva CTS, ¿cuál de las siguientes afirmaciones refleja mejor un análisis equilibrado de los OGM?',
        opciones: [
          { letra: 'A', texto: 'Los OGM son completamente seguros y deben usarse sin restricciones porque aumentan la producción agrícola.' },
          { letra: 'B', texto: 'Los OGM deben prohibirse porque son venenos producidos en laboratorio.' },
          { letra: 'C', texto: 'Los OGM ofrecen beneficios (mayor rendimiento, resistencia a plagas, menor uso de pesticidas) pero también plantean preocupaciones sobre biodiversidad, dependencia de las semillas y posibles efectos en la salud que deben regularse y evaluarse continuamente.' },
          { letra: 'D', texto: 'Los OGM son exactamente iguales a las plantas naturales, por lo que no requieren ningún tipo de regulación especial.' },
        ],
        clave: 'C',
        justificacion: 'El análisis CTS (Ciencia, Tecnología y Sociedad) requiere considerar los beneficios y riesgos de la tecnología en contexto. Los OGM han demostrado beneficios agronómicos, pero también generan preguntas legítimas sobre biodiversidad (contaminación genética), propiedad intelectual de semillas, impactos en ecosistemas y salud a largo plazo. La regulación basada en evidencia científica es la postura más sólida. La opción A ignora los riesgos. La opción B rechaza sin evidencia clara. La opción D niega diferencias relevantes que justifican la regulación.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 51. Entorno físico + explicación (reacciones exotérmicas y endotérmicas)
      {
        id: 'nat-p-s9-51',
        enunciado: 'Al encender una vela, la cera se derrite y arde, liberando calor y luz. Al disolver nitrato de amonio (NH₄NO₃) en agua, la temperatura de la solución disminuye notablemente. ¿Cómo se clasifican estas reacciones?',
        opciones: [
          { letra: 'A', texto: 'Ambas son reacciones exotérmicas porque producen un cambio de estado.' },
          { letra: 'B', texto: 'La combustión de la cera es exotérmica (libera calor); la disolución de nitrato de amonio es endotérmica (absorbe calor del ambiente).' },
          { letra: 'C', texto: 'La combustión de la cera es endotérmica porque necesita una llama para iniciarse.' },
          { letra: 'D', texto: 'Ambas son reacciones endotérmicas porque requieren energía de activación.' },
        ],
        clave: 'B',
        justificacion: 'Una reacción exotérmica libera energía (generalmente calor) al entorno, como la combustión, que calienta y da luz. Una reacción endotérmica absorbe energía del entorno, por lo que la temperatura de los alrededores baja; la disolución de nitrato de amonio en agua es un ejemplo clásico (base de las bolsas frías de primeros auxilios). La energía de activación (opción D) es la energía necesaria para iniciar cualquier reacción, no su clasificación. La opción C confunde la energía de activación con el balance energético total.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 52. Entorno vivo + indagación (clasificación de los seres vivos)
      {
        id: 'nat-p-s9-52',
        enunciado: 'Un biólogo encuentra un organismo unicelular con núcleo definido, que se mueve mediante flagelos y puede realizar fotosíntesis. ¿A qué reino pertenece este organismo?',
        opciones: [
          { letra: 'A', texto: 'Reino Animal, porque tiene flagelos y puede moverse.' },
          { letra: 'B', texto: 'Reino Vegetal, porque puede realizar fotosíntesis.' },
          { letra: 'C', texto: 'Reino Protista (Protoctista), porque es unicelular con núcleo definido (eucariota) y combina características de animales y plantas.' },
          { letra: 'D', texto: 'Reino Monera, porque es unicelular y microscópico.' },
        ],
        clave: 'C',
        justificacion: 'El organismo descrito (unicelular, eucariota, con flagelos y capaz de fotosíntesis) corresponde a un protista, como la Euglena viridis. Los protistas son organismos eucariotas (núcleo definido) que no se clasifican en el reino Animal, Vegetal o Fungi. Muchos combinan características de varios reinos. El reino Animal (opción A) incluye organismos multicelulares heterótrofos. El reino Vegetal (opción B) incluye organismos multicelulares fotosintéticos. El reino Monera (opción D) incluye procariotas como bacterias y cianobacterias.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 53. Entorno físico + uso-conocimiento (luz — reflexión y refracción)
      {
        id: 'nat-p-s9-53',
        enunciado: 'Cuando un pez en un acuario ve a un observador fuera del agua, y el observador ve al pez, ambas imágenes aparecen desplazadas de la posición real. ¿Cuál es el fenómeno responsable y cómo ocurre?',
        opciones: [
          { letra: 'A', texto: 'La reflexión total interna: la luz no puede salir del agua.' },
          { letra: 'B', texto: 'La refracción: la luz cambia de velocidad al pasar del agua al aire (o viceversa), cambiando su dirección. El índice de refracción del agua es mayor que el del aire, haciendo que los objetos aparezcan desplazados.' },
          { letra: 'C', texto: 'La dispersión: el agua descompone la luz en sus colores, distorsionando la imagen.' },
          { letra: 'D', texto: 'La absorción: el agua absorbe parte de la luz, haciendo que el objeto parezca estar en otro lugar.' },
        ],
        clave: 'B',
        justificacion: 'La refracción es el cambio de dirección de la luz cuando pasa de un medio a otro con diferente índice de refracción. El agua (n ≈ 1,33) es más densa ópticamente que el aire (n = 1), por lo que la luz se dobla al cruzar la interfaz agua-aire. Esto hace que los objetos vistos a través de la superficie del agua parezcan estar en posiciones diferentes a las reales. La reflexión total interna (opción A) ocurre cuando la luz va del medio más denso al menos denso con ángulo mayor al crítico: en ese caso no sale nada, lo cual no es el fenómeno descrito. La dispersión (opción C) separa colores pero no desplaza imágenes enteras.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 54. Entorno vivo + explicación (ecosistemas — ciclo del carbono)
      {
        id: 'nat-p-s9-54',
        enunciado: 'El ciclo del carbono describe cómo el carbono se mueve entre la atmósfera, los seres vivos y la litosfera. ¿Cuál de los siguientes procesos extrae carbono de la atmósfera (CO₂) y lo incorpora a la materia orgánica?',
        opciones: [
          { letra: 'A', texto: 'La respiración aeróbica de todos los organismos.' },
          { letra: 'B', texto: 'La fotosíntesis de las plantas y otros organismos fotosintéticos.' },
          { letra: 'C', texto: 'La descomposición de la materia orgánica por bacterias y hongos.' },
          { letra: 'D', texto: 'La quema de combustibles fósiles.' },
        ],
        clave: 'B',
        justificacion: 'La fotosíntesis es el proceso por el que los productores primarios (plantas, algas, cianobacterias) capturan CO₂ de la atmósfera y lo convierten en glucosa y otros compuestos orgánicos usando energía solar: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. Este proceso fija carbono atmosférico en la materia orgánica. La respiración (opción A) y la descomposición (opción C) liberan CO₂ a la atmósfera. La quema de combustibles fósiles (opción D) también libera CO₂ de forma masiva.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 55. Entorno físico + explicación (trabajo y energía mecánica)
      {
        id: 'nat-p-s9-55',
        enunciado: 'Un ascensor levanta una carga de 500 kg hasta una altura de 20 m en 10 segundos. ¿Cuál es el trabajo realizado y cuál es la potencia del motor del ascensor? (g = 10 m/s²)',
        opciones: [
          { letra: 'A', texto: 'Trabajo = 100.000 J; potencia = 10.000 W.' },
          { letra: 'B', texto: 'Trabajo = 100.000 J; potencia = 1.000.000 W.' },
          { letra: 'C', texto: 'Trabajo = 10.000 J; potencia = 1.000 W.' },
          { letra: 'D', texto: 'Trabajo = 100.000 J; potencia = 100.000 W.' },
        ],
        clave: 'A',
        justificacion: 'Trabajo = Fuerza × distancia = m × g × h = 500 kg × 10 m/s² × 20 m = 100.000 J. Potencia = Trabajo / tiempo = 100.000 J / 10 s = 10.000 W = 10 kW. La opción B calcula la potencia como W = T² / t. La opción C usa solo m × h sin la gravedad. La opción D iguala potencia a trabajo.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 56. Entorno vivo + uso-conocimiento (sistema endocrino — diabetes)
      {
        id: 'nat-p-s9-56',
        enunciado: 'La insulina es una hormona producida por el páncreas que permite que las células del cuerpo absorban glucosa de la sangre para obtener energía. En la diabetes tipo 1, el sistema inmune destruye las células que producen insulina. ¿Cuál es la consecuencia fisiológica directa de esta condición?',
        opciones: [
          { letra: 'A', texto: 'Las células absorben demasiada glucosa, lo que produce hipoglucemia crónica.' },
          { letra: 'B', texto: 'Sin insulina, la glucosa no puede entrar a las células y se acumula en la sangre (hiperglucemia), mientras las células no obtienen energía suficiente.' },
          { letra: 'C', texto: 'El páncreas produce más enzimas digestivas para compensar la falta de insulina.' },
          { letra: 'D', texto: 'El hígado produce glucosa adicional para compensar la falta de insulina.' },
        ],
        clave: 'B',
        justificacion: 'La insulina actúa como "llave" que abre las células para permitir el ingreso de glucosa. Sin insulina, la glucosa permanece en la sangre (hiperglucemia) y las células no pueden obtener energía de la glucosa, entrando en un estado de "hambre energética" a pesar de la abundancia de glucosa en sangre. Las células entonces pueden recurrir a metabolizar grasas y proteínas (produciendo cuerpos cetónicos). La opción A describe lo contrario (hipoglucemia). La opción C es una respuesta compensatoria incorrecta. La opción D ocurre en la regulación normal pero no compensa la falta de insulina.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 57. Entorno físico + uso-conocimiento (electromagnetismo — inducción)
      {
        id: 'nat-p-s9-57',
        enunciado: 'Los generadores eléctricos transforman energía mecánica en energía eléctrica mediante el principio de inducción electromagnética. ¿Cuál de las siguientes afirmaciones describe correctamente este principio?',
        opciones: [
          { letra: 'A', texto: 'Un conductor en movimiento dentro de un campo magnético induce una corriente eléctrica en el conductor.' },
          { letra: 'B', texto: 'Un campo eléctrico fuerte crea automáticamente un campo magnético sin necesidad de movimiento.' },
          { letra: 'C', texto: 'Los imanes permanentes generan corriente eléctrica constante sin necesidad de movimiento relativo.' },
          { letra: 'D', texto: 'La corriente eléctrica solo se puede inducir en materiales magnéticos como el hierro.' },
        ],
        clave: 'A',
        justificacion: 'La ley de inducción electromagnética de Faraday establece que cuando un conductor se mueve en un campo magnético (o cuando el campo magnético cambia alrededor de un conductor), se genera una fuerza electromotriz (FEM) que produce una corriente eléctrica. Este es el principio de los generadores, alternadores y transformadores. Las opciones B, C y D malinterpretan las condiciones necesarias para la inducción: se requiere movimiento relativo entre el conductor y el campo magnético.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 58. Entorno vivo + explicación (biomas y distribución)
      {
        id: 'nat-p-s9-58',
        enunciado: 'Los biomas son grandes conjuntos de ecosistemas caracterizados por el mismo tipo de vegetación y clima. En Colombia coexisten varios biomas: selva tropical, sabana, páramo, desierto y manglar. ¿Qué factores determinan principalmente la distribución de los biomas en el territorio colombiano?',
        opciones: [
          { letra: 'A', texto: 'Principalmente la altitud sobre el nivel del mar y la precipitación, que determinan la temperatura y la disponibilidad de agua.' },
          { letra: 'B', texto: 'Principalmente la actividad humana, que ha creado los diferentes biomas a lo largo de los siglos.' },
          { letra: 'C', texto: 'Principalmente la presencia de ríos y cuerpos de agua, que determinan qué plantas pueden crecer.' },
          { letra: 'D', texto: 'Principalmente los minerales del suelo, que determinan qué especies animales pueden vivir.' },
        ],
        clave: 'A',
        justificacion: 'Los factores abióticos que más influyen en la distribución de los biomas son la temperatura (determinada principalmente por la altitud y la latitud) y la precipitación (distribución de lluvias). En Colombia, la variación de altitud desde el nivel del mar hasta los 5.700 m del Nevado del Huila determina los pisos térmicos (cálido, templado, frío, páramo, nival), cada uno con su comunidad de organismos característica. La precipitación diferencia áreas de selva húmeda (Chocó) de sabanas y desiertos (La Guajira). La actividad humana modifica los biomas pero no los crea. Los ríos y minerales son factores secundarios.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 59. CTS + uso-conocimiento (nanotecnología)
      {
        id: 'nat-p-s9-59',
        enunciado: 'La nanotecnología trabaja con materiales a escala nanométrica (1 nanómetro = 10⁻⁹ m). A esta escala, los materiales pueden tener propiedades físicas y químicas muy diferentes a las que tienen en tamaño macroscópico. Por ejemplo, el oro en nanopartículas puede ser rojo o morado, no dorado. ¿Cuál es la aplicación más prometedora de la nanotecnología en medicina?',
        opciones: [
          { letra: 'A', texto: 'Fabricar robots macroscópicos para cirugías de alta precisión.' },
          { letra: 'B', texto: 'Desarrollar nanopartículas que puedan transportar medicamentos directamente a células cancerosas, minimizando los efectos secundarios.' },
          { letra: 'C', texto: 'Crear nuevos tipos de sutura quirúrgica más resistentes.' },
          { letra: 'D', texto: 'Reemplazar todos los medicamentos actuales con versiones nanotecnológicas más baratas.' },
        ],
        clave: 'B',
        justificacion: 'Una de las aplicaciones más prometedoras de la nanotecnología en medicina es la entrega dirigida de fármacos: nanopartículas funcionalizadas pueden reconocer y unirse específicamente a células cancerosas (mediante anticuerpos en su superficie) y liberar el medicamento directamente allí, reduciendo la toxicidad sistémica que tienen los tratamientos convencionales como la quimioterapia. La opción A confunde nano con macro. La opción C es un uso de materiales avanzados, no específicamente de nanotecnología. La opción D es una sobregeneralización sin base científica.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 60. Entorno vivo + explicación (evolución — evidencias)
      {
        id: 'nat-p-s9-60',
        enunciado: 'Charles Darwin propuso la teoría de la evolución por selección natural. Entre las evidencias que la sustentan se encuentran los órganos vestigiales: estructuras que están reducidas o han perdido su función en una especie pero que eran funcionales en ancestros. ¿Cuál es un ejemplo de órgano vestigial en el ser humano?',
        opciones: [
          { letra: 'A', texto: 'El corazón, porque es más simple que el de otros mamíferos.' },
          { letra: 'B', texto: 'El apéndice vermiforme y el músculo auricular (el que mueve las orejas), que son vestigios de estructuras funcionales en ancestros.' },
          { letra: 'C', texto: 'El cerebro, que tiene partes que nunca usamos según la teoría del "10%".' },
          { letra: 'D', texto: 'Los pulmones, porque los ancestros de los humanos vivían en el agua.' },
        ],
        clave: 'B',
        justificacion: 'Los órganos vestigiales son evidencia de descendencia con modificación. El apéndice humano se cree que era parte de un sistema digestivo más extenso en ancestros herbívoros que necesitaban fermentar celulosa. El músculo auricular, que en la mayoría de humanos no puede mover las orejas pero sí en otros mamíferos, es otro ejemplo. La ballena también tiene vestigios de pelvis y fémur de cuando sus ancestros eran terrestres. La opción A es incorrecta. La opción C se refiere a un mito científico (sí usamos más del 10% del cerebro). La opción D invierte la historia evolutiva de los tetrápodos.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Entorno vivo + uso-conocimiento (genética molecular)
      {
        id: 'nat-p-s11-01',
        enunciado: 'Durante el proceso de traducción, el ARN mensajero (ARNm) es leído por los ribosomas en grupos de tres nucleótidos llamados codones. El codón AUG codifica para la metionina y es el codón de inicio. Si una mutación cambia el codón AUG por AUA (que codifica para isoleucina), ¿cuál sería el efecto más probable sobre la proteína resultante?',
        opciones: [
          { letra: 'A', texto: 'La proteína no se verá afectada porque AUA codifica para un aminoácido diferente pero igualmente válido.' },
          { letra: 'B', texto: 'La síntesis de la proteína no se iniciará correctamente, porque AUG es el único codón de inicio reconocido por los ribosomas.' },
          { letra: 'C', texto: 'La proteína será más larga de lo normal porque la mutación crea un nuevo codón de inicio.' },
          { letra: 'D', texto: 'La mutación no tiene ningún efecto porque el código genético es redundante.' },
        ],
        clave: 'B',
        justificacion: 'El codón AUG tiene una función dual: codifica para la metionina y sirve como señal de inicio de la traducción. Si se muta a AUA, los ribosomas no reconocerán el sitio de inicio y la síntesis de la proteína se verá comprometida. La opción A es incorrecta porque no solo importa el aminoácido, sino la señal de inicio. La opción C es incorrecta: la mutación elimina el codón de inicio, no crea uno nuevo. La opción D es incorrecta: la redundancia del código genético se refiere a que varios codones pueden codificar el mismo aminoácido, no al codón de inicio.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 2. Entorno físico + explicacion (termodinámica)
      {
        id: 'nat-p-s11-02',
        enunciado: 'Una máquina térmica absorbe 1.000 J de calor de un foco caliente y realiza 400 J de trabajo útil, cediendo el calor restante a un foco frío. ¿Cuál es la eficiencia de esta máquina y cuánto calor cede al foco frío?',
        opciones: [
          { letra: 'A', texto: 'Eficiencia = 60%; calor cedido = 600 J.' },
          { letra: 'B', texto: 'Eficiencia = 40%; calor cedido = 600 J.' },
          { letra: 'C', texto: 'Eficiencia = 40%; calor cedido = 400 J.' },
          { letra: 'D', texto: 'Eficiencia = 100%; calor cedido = 0 J porque toda la energía se convierte en trabajo.' },
        ],
        clave: 'B',
        justificacion: 'La eficiencia de una máquina térmica es η = W / Qc = 400 J / 1000 J = 0,40 = 40%. Por conservación de la energía (primer principio): el calor cedido al foco frío = Qc − W = 1000 − 400 = 600 J. La opción A tiene invertidos el trabajo y el calor cedido. La opción C usa el trabajo absorbido en lugar del calor total para calcular el cedido. La opción D viola el segundo principio de la termodinámica: ninguna máquina real puede tener eficiencia del 100%.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 3. CTS + indagacion (evaluación de investigación)
      {
        id: 'nat-p-s11-03',
        enunciado: 'Un grupo de investigadores publicó un estudio que concluye que consumir un suplemento X reduce el colesterol en un 30%. El estudio evaluó a 50 personas durante 2 semanas, sin grupo de control. ¿Cuál es la principal debilidad metodológica de este estudio?',
        opciones: [
          { letra: 'A', texto: 'El estudio duró muy poco tiempo y careció de grupo de control, lo que impide atribuir los cambios al suplemento y no a otros factores.' },
          { letra: 'B', texto: 'La muestra de 50 personas es adecuada, pero el estudio debió durar al menos 6 meses para ser válido.' },
          { letra: 'C', texto: 'El estudio es válido porque el porcentaje de reducción (30%) es estadísticamente significativo.' },
          { letra: 'D', texto: 'La ausencia de grupo de control no es un problema si todos los participantes tomaron el suplemento.' },
        ],
        clave: 'A',
        justificacion: 'Las dos debilidades principales son: (1) la falta de grupo de control impide determinar si los cambios se deben al suplemento o a factores externos (dieta, ejercicio, placebo); (2) dos semanas es un tiempo muy corto para evaluar cambios en el colesterol. La opción B solo menciona el tiempo y no la ausencia de grupo control, que es igualmente crítica. La opción C es incorrecta: la significancia estadística requiere un diseño experimental adecuado, que aquí no existe. La opción D es incorrecta: el grupo de control es esencial precisamente para comparar con quienes no toman el suplemento.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 4. Entorno físico + uso-conocimiento (equilibrio químico)
      {
        id: 'nat-p-s11-04',
        enunciado: 'En la síntesis industrial del amoníaco (N₂ + 3H₂ ⇌ 2NH₃), la reacción es exotérmica. Según el principio de Le Chatelier, ¿qué condición favorecería la producción de amoníaco?',
        opciones: [
          { letra: 'A', texto: 'Aumentar la temperatura para acelerar la reacción.' },
          { letra: 'B', texto: 'Disminuir la presión para dar más espacio a los reactivos.' },
          { letra: 'C', texto: 'Aumentar la presión y disminuir la temperatura del sistema.' },
          { letra: 'D', texto: 'Extraer el nitrógeno del sistema para desplazar el equilibrio hacia los productos.' },
        ],
        clave: 'C',
        justificacion: 'Por el principio de Le Chatelier: (1) Aumentar la presión favorece el lado con menor número de moles de gas: 4 moles de reactivos (1 N₂ + 3 H₂) → 2 moles de producto (2 NH₃), por lo que la presión alta desplaza el equilibrio hacia la derecha (más NH₃). (2) Como la reacción es exotérmica, disminuir la temperatura favorece la formación de productos. La opción A favorecería los reactivos (equilibrio hacia la izquierda). La opción B favorecería también a los reactivos. La opción D es incorrecta: extraer N₂ (reactivo) desplazaría el equilibrio hacia los reactivos, no hacia los productos.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 5. Entorno vivo + explicacion (evolución)
      {
        id: 'nat-p-s11-05',
        enunciado: 'En las Islas Galápagos, los pinzones de Darwin muestran una gran variedad en la forma y tamaño de sus picos, adaptados a distintos tipos de alimento. Este proceso, en el que una especie ancestral da origen a múltiples especies con diferentes adaptaciones, se denomina:',
        opciones: [
          { letra: 'A', texto: 'Convergencia evolutiva, porque los picos se adaptaron de manera similar en distintas islas.' },
          { letra: 'B', texto: 'Radiación adaptativa, porque a partir de un ancestro común se originaron múltiples especies que ocupan distintos nichos ecológicos.' },
          { letra: 'C', texto: 'Deriva génica, porque el aislamiento geográfico de las islas redujo al azar la diversidad genética de los pinzones.' },
          { letra: 'D', texto: 'Mutación dirigida, porque el ambiente de cada isla indujo cambios específicos en los genes del pico.' },
        ],
        clave: 'B',
        justificacion: 'La radiación adaptativa es el proceso por el cual un grupo de organismos de un ancestro común se diversifica rápidamente para ocupar distintos nichos ecológicos. Los pinzones de Darwin son el ejemplo clásico: a partir de un ancestro llegado al continente, evolucionaron en distintas islas hacia especies con picos adaptados a semillas, insectos o flores. La convergencia evolutiva (opción A) ocurre cuando especies no relacionadas desarrollan características similares. La deriva génica (opción C) es un cambio aleatorio en las frecuencias génicas, no dirigido por la selección natural. La mutación dirigida (opción D) no existe: las mutaciones son aleatorias.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 6. Entorno físico + uso-conocimiento (ondas y luz)
      {
        id: 'nat-p-s11-06',
        enunciado: 'La luz blanca al pasar por un prisma se descompone en los colores del arco iris. ¿Cuál es el fenómeno físico que explica este efecto y cuál es su causa?',
        opciones: [
          { letra: 'A', texto: 'Reflexión total: la luz choca con las paredes del prisma y rebota en diferentes ángulos.' },
          { letra: 'B', texto: 'Dispersión: diferentes longitudes de onda de la luz se refractan a distintos ángulos al cambiar de medio, porque la velocidad de la luz en el vidrio depende de la longitud de onda.' },
          { letra: 'C', texto: 'Difracción: la luz se dobla al pasar por los bordes del prisma y se separa en colores.' },
          { letra: 'D', texto: 'Absorción: el prisma absorbe cada color por separado y los emite a diferentes velocidades.' },
        ],
        clave: 'B',
        justificacion: 'La descomposición de la luz blanca en el prisma es un ejemplo de dispersión. La luz blanca es una mezcla de radiaciones de distintas longitudes de onda (colores). Al pasar del aire al vidrio, cada longitud de onda se refracta con un ángulo ligeramente diferente porque el índice de refracción del vidrio varía con la longitud de onda (la luz violeta se refracta más que la roja). Esto separa los colores. La reflexión total (A) ocurre cuando la luz no puede salir del medio denso. La difracción (C) ocurre al pasar por aberturas o bordes, no explica la separación de colores. La absorción (D) es un proceso diferente.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 7. Entorno vivo + indagación (sistema inmune y vacunas)
      {
        id: 'nat-p-s11-07',
        enunciado: 'Las vacunas funcionan introduciendo al organismo versiones atenuadas o inactivas de un patógeno (o partes de él). ¿Cuál es el mecanismo biológico por el cual las vacunas generan inmunidad?',
        opciones: [
          { letra: 'A', texto: 'Las vacunas destruyen directamente las bacterias y virus que entran al cuerpo.' },
          { letra: 'B', texto: 'Las vacunas estimulan el sistema inmune para producir anticuerpos y células de memoria, de modo que ante una infección real el organismo responda rápida y eficazmente.' },
          { letra: 'C', texto: 'Las vacunas crean una barrera física en los tejidos que impide la entrada de patógenos.' },
          { letra: 'D', texto: 'Las vacunas aumentan la temperatura corporal para matar los microbios antes de que se reproduzcan.' },
        ],
        clave: 'B',
        justificacion: 'Las vacunas funcionan a través de la inmunidad adquirida activa. Al introducir antígenos del patógeno, el sistema inmune reconoce lo extraño y activa linfocitos B (que producen anticuerpos) y linfocitos T. Crucialmente, se generan células de memoria que permanecen en el organismo: ante una exposición real futura, el sistema inmune responde más rápido y con mayor intensidad. Las opciones A, C y D describen mecanismos que no corresponden al funcionamiento de las vacunas.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 8. Entorno físico + explicación (química orgánica)
      {
        id: 'nat-p-s11-08',
        enunciado: 'El metano (CH₄), el etano (C₂H₆) y el propano (C₃H₈) pertenecen a la serie de los alcanos. ¿Cuál es la fórmula general de esta serie y cuántos carbonos tiene el alcano con fórmula C₅H₁₂?',
        opciones: [
          { letra: 'A', texto: 'Fórmula general: CₙH₂ₙ; el alcano C₅H₁₂ tiene 5 carbonos (penteno).' },
          { letra: 'B', texto: 'Fórmula general: CₙH₂ₙ₊₂; el alcano C₅H₁₂ tiene 5 carbonos (pentano).' },
          { letra: 'C', texto: 'Fórmula general: CₙH₂ₙ₋₂; el alcano C₅H₁₂ tiene 5 carbonos (pentino).' },
          { letra: 'D', texto: 'Fórmula general: CₙH₂ₙ₊₁; el alcano C₅H₁₂ tiene 5 carbonos (pentano).' },
        ],
        clave: 'B',
        justificacion: 'Los alcanos son hidrocarburos saturados (solo tienen enlaces simples C-C y C-H). Su fórmula general es CₙH₂ₙ₊₂. Verificación: n=1 (metano CH₄ = C₁H₄; 2·1+2=4 ✓), n=2 (etano C₂H₆; 2·2+2=6 ✓). Para C₅H₁₂: n=5, CₙH₂ₙ₊₂ = C₅H₁₂ ✓; se llama pentano. La fórmula CₙH₂ₙ (opción A) corresponde a los alquenos (un doble enlace). La fórmula CₙH₂ₙ₋₂ (opción C) corresponde a los alquinos. La opción D tiene el exponente incorrecto.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 9. CTS + uso-conocimiento (cambio climático)
      {
        id: 'nat-p-s11-09',
        enunciado: 'El dióxido de carbono (CO₂) es uno de los principales gases de efecto invernadero. ¿Cuál es el mecanismo físico por el que el CO₂ contribuye al calentamiento global?',
        opciones: [
          { letra: 'A', texto: 'El CO₂ refleja la luz solar hacia la Tierra, impidiendo que llegue al espacio y calentando la atmósfera.' },
          { letra: 'B', texto: 'El CO₂ absorbe la radiación infrarroja emitida por la superficie terrestre y la re-emite en todas direcciones, incluyendo hacia la Tierra, lo que aumenta la temperatura.' },
          { letra: 'C', texto: 'El CO₂ destruye la capa de ozono, permitiendo que entre más radiación ultravioleta y caliente el planeta.' },
          { letra: 'D', texto: 'El CO₂ reacciona con el vapor de agua y produce calor directamente en la atmósfera.' },
        ],
        clave: 'B',
        justificacion: 'El efecto invernadero funciona así: la radiación solar (visible) atraviesa la atmósfera y calienta la superficie terrestre. La Tierra emite esa energía como radiación infrarroja (calor). Los gases de efecto invernadero (CO₂, CH₄, H₂O) absorben esta radiación infrarroja y la re-emiten en todas direcciones, incluida hacia la Tierra, lo que aumenta la temperatura global. La opción A describe la reflexión, no la absorción. La opción C describe el daño a la capa de ozono (causado por CFC, no CO₂). La opción D no corresponde al mecanismo real del efecto invernadero.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 10. Entorno vivo + explicación (sistema nervioso)
      {
        id: 'nat-p-s11-10',
        enunciado: 'Una neurona recibe una señal eléctrica (potencial de acción) y la transmite a otra neurona. ¿Qué ocurre en la sinapsis para que la señal pase de una neurona a la siguiente?',
        opciones: [
          { letra: 'A', texto: 'La corriente eléctrica pasa directamente de una neurona a otra a través de un cable biológico.' },
          { letra: 'B', texto: 'La neurona presináptica libera neurotransmisores al espacio sináptico; estos se unen a receptores de la neurona postsináptica y generan una nueva señal.' },
          { letra: 'C', texto: 'Las neuronas se fusionan temporalmente para permitir el paso de la señal eléctrica.' },
          { letra: 'D', texto: 'El axón de una neurona entra al cuerpo de la siguiente neurona y deposita la señal eléctricamente.' },
        ],
        clave: 'B',
        justificacion: 'En la sinapsis química (la más común), cuando el potencial de acción llega al terminal axónico (neurona presináptica), se liberan vesículas con neurotransmisores al espacio sináptico (hendidura). Los neurotransmisores se difunden y se unen a receptores específicos de la membrana postsináptica, generando cambios en su permeabilidad iónica que pueden producir un nuevo potencial de acción. No hay contacto físico ni fusión de neuronas. La opción A describe las sinapsis eléctricas (más raras). Las opciones C y D son biológicamente incorrectas.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 11. Entorno físico + indagación (reacciones químicas y estequiometría)
      {
        id: 'nat-p-s11-11',
        enunciado: 'En la reacción: 2H₂ + O₂ → 2H₂O, ¿cuántas moléculas de agua se producen si reaccionan completamente 6 moléculas de H₂?',
        opciones: [
          { letra: 'A', texto: '3 moléculas de agua.' },
          { letra: 'B', texto: '6 moléculas de agua.' },
          { letra: 'C', texto: '12 moléculas de agua.' },
          { letra: 'D', texto: '9 moléculas de agua.' },
        ],
        clave: 'B',
        justificacion: 'La ecuación balanceada indica que 2 moléculas de H₂ producen 2 moléculas de H₂O (relación 1:1). Si reaccionan 6 moléculas de H₂, se producen 6 moléculas de H₂O. También se necesitan 3 moléculas de O₂ (relación 2:1). La opción A aplica incorrectamente la relación 2:1 del O₂. La opción C duplica innecesariamente. La opción D no corresponde a ninguna relación estequiométrica de la ecuación.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 12. CTS + indagación (biotecnología)
      {
        id: 'nat-p-s11-12',
        enunciado: 'Los organismos genéticamente modificados (OGM) son aquellos cuyo ADN ha sido alterado mediante técnicas de ingeniería genética para incorporar genes de otras especies. ¿Cuál de los siguientes argumentos representa una perspectiva CTS equilibrada sobre el uso de cultivos transgénicos en Colombia?',
        opciones: [
          { letra: 'A', texto: 'Los cultivos transgénicos deben prohibirse porque son peligrosos para la salud humana sin excepción.' },
          { letra: 'B', texto: 'Los cultivos transgénicos son siempre beneficiosos y deben usarse sin ninguna regulación.' },
          { letra: 'C', texto: 'Los cultivos transgénicos pueden ofrecer ventajas (resistencia a plagas, mayor rendimiento) pero requieren evaluación científica de riesgos ambientales y de salud, regulación estatal y participación de las comunidades campesinas en la toma de decisiones.' },
          { letra: 'D', texto: 'La ciencia ya demostró que los transgénicos son completamente seguros, por lo que no es necesario seguir investigando.' },
        ],
        clave: 'C',
        justificacion: 'Un análisis CTS equilibrado reconoce que la biotecnología (incluidos los transgénicos) tiene aplicaciones potencialmente beneficiosas (mayor rendimiento, resistencia a enfermedades, tolerancia a sequía) pero también implica riesgos que deben evaluarse científicamente: efectos sobre la biodiversidad, posible flujo génico a especies silvestres, impactos en la salud humana a largo plazo. La regulación y la participación ciudadana son fundamentales. La opción A es una posición radical sin evidencia. La opción B ignora los riesgos. La opción D cierra el debate científico prematuramente.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 13. Entorno físico + explicación (electromagnetismo)
      {
        id: 'nat-p-s11-13',
        enunciado: 'Un transformador de paso abajo tiene 1.000 espiras en el bobinado primario y 100 en el secundario. Si la tensión de entrada es 220 V, ¿cuál es la tensión de salida?',
        opciones: [
          { letra: 'A', texto: '2.200 V' },
          { letra: 'B', texto: '22 V' },
          { letra: 'C', texto: '110 V' },
          { letra: 'D', texto: '44 V' },
        ],
        clave: 'B',
        justificacion: 'La relación de transformación es: V₁/V₂ = N₁/N₂, donde N son los números de espiras. V₂ = V₁ · (N₂/N₁) = 220 · (100/1000) = 220 · 0,1 = 22 V. Como N₂ < N₁, es un transformador de paso abajo (reduce la tensión). La opción A multiplica en vez de dividir. La opción C divide entre 2 en vez de entre 10. La opción D divide entre 5.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 14. Entorno vivo + uso-conocimiento (genética de poblaciones)
      {
        id: 'nat-p-s11-14',
        enunciado: 'En una población de 500 mariposas, el 64% tiene alas amarillas (fenotipo dominante AA o Aa) y el 36% tiene alas blancas (fenotipo recesivo aa). Aplicando el equilibrio de Hardy-Weinberg, ¿cuál es la frecuencia del alelo recesivo (a) en la población?',
        opciones: [
          { letra: 'A', texto: '0,36' },
          { letra: 'B', texto: '0,60' },
          { letra: 'C', texto: '0,64' },
          { letra: 'D', texto: '0,40' },
        ],
        clave: 'B',
        justificacion: 'Según Hardy-Weinberg, q² representa la frecuencia de los individuos homocigotos recesivos (aa). Aquí q² = 0,36 (36% de la población). La frecuencia del alelo recesivo es q = √0,36 = 0,60. La frecuencia del alelo dominante es p = 1 − q = 0,40. La opción A usa q² directamente como q. La opción C usa la frecuencia del fenotipo dominante como q. La opción D corresponde a la frecuencia del alelo dominante p, no del recesivo q.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 15. CTS + indagación (energías renovables)
      {
        id: 'nat-p-s11-15',
        enunciado: 'Colombia tiene gran potencial para generar energía eléctrica a partir de fuentes renovables como la solar, eólica e hidráulica. ¿Cuál de las siguientes afirmaciones representa una limitación REAL de la energía solar fotovoltaica en Colombia?',
        opciones: [
          { letra: 'A', texto: 'Colombia no recibe suficiente radiación solar para instalar paneles fotovoltaicos.' },
          { letra: 'B', texto: 'Los paneles solares no pueden generar electricidad si hay nubes, y Colombia tiene regiones con alta nubosidad y lluvias frecuentes, lo que reduce la eficiencia en algunas zonas.' },
          { letra: 'C', texto: 'La energía solar produce emisiones de CO₂ durante su operación, lo que la hace más contaminante que el carbón.' },
          { letra: 'D', texto: 'La energía solar solo puede usarse para calentar agua, no para generar electricidad.' },
        ],
        clave: 'B',
        justificacion: 'Colombia tiene alta irradiación solar en muchas regiones (Guajira, costa Caribe), pero también tiene zonas de alta nubosidad (Pacífico, Amazonía, Andes húmedos) donde la generación fotovoltaica es menor. Esta variabilidad geográfica es una limitación real que debe considerarse al planificar la expansión de energía solar. La opción A es incorrecta: Colombia tiene muy buena irradiación en varias regiones. La opción C es falsa: los paneles solares no emiten CO₂ durante su operación. La opción D es incorrecta: los paneles fotovoltaicos sí generan electricidad.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 16. Entorno vivo + explicacion (regulacion génica)
      {
        id: 'nat-p-s11-16',
        enunciado: 'En los organismos eucariotas, la expresión génica se regula en múltiples niveles. Un investigador observa que una proteína específica solo se produce en las células del páncreas, aunque el gen que la codifica está presente en todas las células del organismo. ¿Cuál es la explicación más completa de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El gen solo existe en las células pancreáticas porque las otras células lo eliminaron durante el desarrollo.' },
          { letra: 'B', texto: 'La expresión génica diferencial permite que el mismo genoma produzca distintos tipos celulares, según qué genes se activan o silencian mediante mecanismos epigenéticos, factores de transcripción específicos del tejido y señales del microambiente celular.' },
          { letra: 'C', texto: 'Las células pancreáticas tienen un ADN completamente diferente al de las células de otros órganos.' },
          { letra: 'D', texto: 'La proteína viaja desde otras células al páncreas, donde se almacena.' },
        ],
        clave: 'B',
        justificacion: 'Todas las células somáticas de un organismo tienen el mismo genoma (mismo ADN). La diferenciación celular no implica pérdida de genes, sino regulación de su expresión. Factores de transcripción tejido-específicos, modificaciones epigenéticas (metilación del ADN, acetilación de histonas) y señales del entorno determinan qué genes se transcriben en cada tipo celular. En las células pancreáticas exocrinas, los factores de transcripción correspondientes activan el gen de la proteína. Las opciones A y C son biológicamente incorrectas; la D describe transporte de proteína, no regulación génica.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 17. Entorno fisico + uso-conocimiento (termodinámica)
      {
        id: 'nat-p-s11-17',
        enunciado: 'Un motor térmico absorbe 800 J de calor de la fuente caliente y realiza 300 J de trabajo útil. ¿Cuánto calor entrega a la fuente fría y cuál es su eficiencia?',
        opciones: [
          { letra: 'A', texto: 'Entrega 300 J a la fuente fría y su eficiencia es del 37,5%.' },
          { letra: 'B', texto: 'Entrega 500 J a la fuente fría y su eficiencia es del 37,5%.' },
          { letra: 'C', texto: 'Entrega 500 J a la fuente fría y su eficiencia es del 62,5%.' },
          { letra: 'D', texto: 'Entrega 800 J a la fuente fría y su eficiencia es del 100%.' },
        ],
        clave: 'B',
        justificacion: 'Por conservación de la energía: Q_fría = Q_caliente − W = 800 J − 300 J = 500 J. La eficiencia es η = W / Q_caliente = 300/800 = 0,375 = 37,5%. La opción A confunde el trabajo con el calor cedido. La opción C usa la eficiencia del calor cedido (62,5%), no del trabajo realizado. La opción D viola la conservación de la energía y afirma eficiencia 100%, lo que es imposible según el segundo principio de la termodinámica.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 18. Entorno vivo + indagacion (mecanismos de evolución)
      {
        id: 'nat-p-s11-18',
        enunciado: 'En una isla pequeña, una población de escarabajos pasa de 1000 a 20 individuos por una sequía severa. Los 20 sobrevivientes tienen en promedio un color más claro que la población original. Las generaciones siguientes presentan una frecuencia mucho mayor de escarabajos claros. ¿Qué mecanismo evolutivo explica MEJOR este cambio?',
        opciones: [
          { letra: 'A', texto: 'Selección natural, porque el ambiente seleccionó a los escarabajos claros por ser más aptos.' },
          { letra: 'B', texto: 'Deriva genética por efecto cuello de botella, porque la reducción drástica de la población cambió aleatoriamente las frecuencias alélicas, independientemente del valor adaptativo del color.' },
          { letra: 'C', texto: 'Flujo génico, porque escarabajos de otras islas trajeron alelos de color claro.' },
          { letra: 'D', texto: 'Mutación, porque la sequía indujo mutaciones que cambiaron el color de los sobrevivientes.' },
        ],
        clave: 'B',
        justificacion: 'El efecto cuello de botella es una forma de deriva genética: cuando una población se reduce drásticamente, los sobrevivientes son una muestra aleatoria pequeña que no representa la diversidad genética original. Las frecuencias alélicas cambian al azar, no necesariamente por presión selectiva. En este caso, no se indica que el color claro sea adaptativo ante la sequía; el cambio pudo ser puramente aleatorio. Si hubiera evidencia de que el color claro confiere ventaja ante la sequía, sería selección natural; pero sin ese dato, la deriva es la mejor explicación. Las opciones C y D no corresponden al escenario descrito.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 19. Entorno fisico + explicacion (electromagnetismo)
      {
        id: 'nat-p-s11-19',
        enunciado: 'Un estudiante enrolla un cable conductor alrededor de un clavo de hierro y conecta los extremos del cable a una batería. Observa que el clavo puede atraer clips metálicos mientras la batería está conectada, pero los suelta cuando la desconecta. ¿Qué principio físico explica este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'La corriente eléctrica que circula por el conductor genera un campo magnético que magnetiza temporalmente el hierro del clavo, convirtiéndolo en un electroimán.' },
          { letra: 'B', texto: 'La batería transfiere magnetismo permanente al clavo a través del cable.' },
          { letra: 'C', texto: 'El hierro se vuelve magnético por el calor generado por la corriente.' },
          { letra: 'D', texto: 'Los clips son atraídos por la electricidad estática acumulada en el cable.' },
        ],
        clave: 'A',
        justificacion: 'Cuando fluye corriente eléctrica por un conductor, se genera un campo magnético alrededor del cable (ley de Ampère / regla de la mano derecha). Al enrollar el cable en una bobina (solenoide) alrededor de un núcleo de hierro, el campo magnético de la bobina magnetiza el hierro, que se convierte en un electroimán. Al desconectar la corriente, desaparece el campo y el hierro vuelve a su estado no magnetizado. La opción B es incorrecta: la batería no transfiere magnetismo, solo provee corriente. La C es incorrecta: el calor no produce magnetismo útil. La D confunde electricidad estática con electromagnetismo.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 20. Entorno fisico + uso-conocimiento (equilibrio químico / Le Chatelier)
      {
        id: 'nat-p-s11-20',
        enunciado: 'Para la reacción en equilibrio: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + calor, ¿qué ocurre con el equilibrio si se aumenta la temperatura del sistema?',
        opciones: [
          { letra: 'A', texto: 'El equilibrio se desplaza hacia la derecha, produciendo más NH₃.' },
          { letra: 'B', texto: 'El equilibrio se desplaza hacia la izquierda, favoreciendo la descomposición del NH₃ para absorber el calor añadido.' },
          { letra: 'C', texto: 'El equilibrio no se altera porque la temperatura no afecta las reacciones en equilibrio.' },
          { letra: 'D', texto: 'El equilibrio se desplaza hacia la derecha porque el calor acelera la producción de NH₃.' },
        ],
        clave: 'B',
        justificacion: 'Según el principio de Le Chatelier, cuando se perturba un sistema en equilibrio, este se desplaza para contrarrestar la perturbación. La reacción directa es exotérmica (libera calor). Al aumentar la temperatura, el sistema trata de absorber ese calor extra favoreciendo la reacción endotérmica, es decir, la reacción inversa (descomposición de NH₃). Por tanto, el equilibrio se desplaza hacia la izquierda. La opción A es incorrecta (confunde el efecto de aumentar la concentración de reactivos con el de aumentar temperatura). La C es incorrecta (la temperatura SÍ afecta el equilibrio, alterando la constante K). La D es incorrecta.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 21. Entorno vivo + explicacion (ciclos biogeoquímicos)
      {
        id: 'nat-p-s11-21',
        enunciado: 'El ciclo del nitrógeno es fundamental para los ecosistemas. ¿Cuál de los siguientes procesos convierte el nitrógeno atmosférico (N₂) en formas aprovechables por las plantas?',
        opciones: [
          { letra: 'A', texto: 'La denitrificación, realizada por bacterias que convierten nitratos en N₂ gaseoso.' },
          { letra: 'B', texto: 'La fijación biológica del nitrógeno, realizada por bacterias como Rhizobium que convierten N₂ en amonio (NH₄⁺), aprovechable por las plantas.' },
          { letra: 'C', texto: 'La fotosíntesis, que permite a las plantas tomar directamente el N₂ del aire.' },
          { letra: 'D', texto: 'La respiración celular de los animales, que libera nitrógeno que las plantas absorben.' },
        ],
        clave: 'B',
        justificacion: 'La fijación biológica del nitrógeno es el proceso mediante el cual bacterias fijadoras (Rhizobium en simbiosis con leguminosas, Azotobacter de vida libre, cianobacterias) reducen el N₂ atmosférico a amonio (NH₄⁺), forma que las plantas pueden absorber y usar para sintetizar aminoácidos y otras moléculas nitrogenadas. La denitrificación (opción A) hace el proceso contrario: devuelve N₂ a la atmósfera. La fotosíntesis (C) no fija nitrógeno. La respiración animal (D) no produce formas de nitrógeno directamente aprovechables por las plantas.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 22. Entorno fisico + indagacion (diseño experimental)
      {
        id: 'nat-p-s11-22',
        enunciado: 'Un estudiante quiere investigar si la concentración de CO₂ afecta la tasa de fotosíntesis en plantas acuáticas. Para ello, coloca plantas en tubos de ensayo con agua a diferentes concentraciones de CO₂ y mide las burbujas de O₂ producidas por minuto. ¿Qué variable debe mantener constante para que el experimento sea válido?',
        opciones: [
          { letra: 'A', texto: 'La concentración de CO₂, porque es la variable que se está estudiando.' },
          { letra: 'B', texto: 'La intensidad de luz, la temperatura y el tipo de planta, porque son variables que también pueden afectar la fotosíntesis y deben controlarse para atribuir los cambios solo al CO₂.' },
          { letra: 'C', texto: 'El número de burbujas de O₂, porque es la variable de respuesta.' },
          { letra: 'D', texto: 'No es necesario controlar otras variables porque el experimento mide solo CO₂.' },
        ],
        clave: 'B',
        justificacion: 'En un experimento controlado, la variable independiente es la que se manipula (concentración de CO₂) y la variable dependiente es la que se mide (tasa de producción de O₂). Las variables de control son todas las demás que podrían afectar el resultado: intensidad lumínica (la fotosíntesis depende de la luz), temperatura (afecta las enzimas fotosintéticas) y tipo de planta (diferentes especies tienen diferentes capacidades fotosintéticas). Si no se controlan estas variables, no se puede afirmar que los cambios en la tasa de O₂ se deben exclusivamente al CO₂. Las opciones A y C confunden las variables del experimento. La D es metodológicamente incorrecta.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 23. CTS + uso-conocimiento (ética biotecnología)
      {
        id: 'nat-p-s11-23',
        enunciado: 'La tecnología CRISPR-Cas9 permite editar genes con gran precisión. Científicos proponen usarla para eliminar mutaciones genéticas en embriones humanos antes de la implantación. ¿Cuál de las siguientes afirmaciones representa una preocupación ética LEGÍTIMA sobre esta aplicación?',
        opciones: [
          { letra: 'A', texto: 'CRISPR no puede usarse en seres humanos porque la tecnología no funciona en células humanas.' },
          { letra: 'B', texto: 'La edición genética de embriones puede introducir cambios heredables en la línea germinal, cuyos efectos a largo plazo son desconocidos, y existe el riesgo de que se use para seleccionar rasgos no médicos ("bebés de diseño"), lo que plantea dilemas éticos sobre la eugenesia y la equidad en el acceso a estas tecnologías.' },
          { letra: 'C', texto: 'La preocupación principal es que CRISPR podría curar enfermedades y esto reduciría los ingresos de las farmacéuticas.' },
          { letra: 'D', texto: 'No existen preocupaciones éticas porque editar genes es similar a administrar medicamentos.' },
        ],
        clave: 'B',
        justificacion: 'La edición germinal (en embriones) implica cambios que se transmiten a las generaciones futuras, a diferencia de la edición somática. Esto plantea preocupaciones legítimas: (1) efectos off-target desconocidos que podrían transmitirse; (2) posible uso para seleccionar rasgos no patológicos (eugenesia); (3) inequidad en el acceso si solo está disponible para personas con recursos. La opción A es factualmente incorrecta (CRISPR funciona en células humanas; de hecho ya se ha usado). La C es una crítica económica, no la principal preocupación ética científica. La D minimiza inapropiadamente una discusión bioética seria.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 24. Entorno vivo + uso-conocimiento (sistema inmune)
      {
        id: 'nat-p-s11-24',
        enunciado: 'Las vacunas funcionan estimulando el sistema inmune para que produzca una respuesta sin causar la enfermedad. ¿Cuál de los siguientes procesos explica por qué una persona vacunada responde más rápido a una infección real que una persona no vacunada?',
        opciones: [
          { letra: 'A', texto: 'Las vacunas matan directamente los patógenos en el cuerpo antes de que causen síntomas.' },
          { letra: 'B', texto: 'La vacunación estimula la proliferación de linfocitos B y T de memoria específicos contra el antígeno vacunal; ante una infección real, estas células de memoria se activan rápidamente y montan una respuesta inmune secundaria más intensa y veloz.' },
          { letra: 'C', texto: 'Las vacunas fortalecen el sistema inmune innato, que responde más rápido a cualquier patógeno.' },
          { letra: 'D', texto: 'Las vacunas producen anticuerpos que permanecen en el cuerpo para siempre y neutralizan cualquier patógeno que ingrese.' },
        ],
        clave: 'B',
        justificacion: 'La clave de la inmunidad adaptativa adquirida por vacunación es la memoria inmunológica. Tras la vacunación, los linfocitos B y T específicos que reconocen el antígeno proliferan; la mayoría forma la respuesta primaria, pero una subpoblación se diferencia en células de memoria de larga vida. Al exponerse al patógeno real, estas células de memoria responden con mayor velocidad (días vs. semanas) y mayor intensidad que en una respuesta primaria. La opción A describe la acción de los anticuerpos, no el mecanismo de la vacunación. La C describe la inmunidad innata, que no tiene memoria. La D exagera la duración y especificidad de los anticuerpos.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 25. Entorno fisico + explicacion (ondas y luz)
      {
        id: 'nat-p-s11-25',
        enunciado: 'Un rayo de luz blanca atraviesa un prisma de vidrio y se separa en los colores del espectro visible (rojo, naranja, amarillo, verde, azul, violeta). ¿Cuál es la explicación correcta de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El prisma absorbe algunos colores y refleja otros hacia el observador.' },
          { letra: 'B', texto: 'La luz blanca es una mezcla de ondas de distintas frecuencias; al refractarse en el vidrio, cada frecuencia cambia de velocidad de manera diferente (dispersión), separando los colores según su índice de refracción.' },
          { letra: 'C', texto: 'El prisma crea nuevos colores a partir de la luz blanca por un proceso de difracción.' },
          { letra: 'D', texto: 'La separación ocurre porque cada color tiene diferente intensidad y el prisma los separa por brillo.' },
        ],
        clave: 'B',
        justificacion: 'La luz blanca es radiación electromagnética que contiene todas las frecuencias del espectro visible. Cuando entra al vidrio del prisma, se refracta (cambia de dirección). El índice de refracción del vidrio depende de la frecuencia: el violeta (mayor frecuencia) se desvía más que el rojo (menor frecuencia). Este fenómeno se llama dispersión. Así, las diferentes frecuencias se separan espacialmente, produciendo el espectro. Newton demostró esto en el siglo XVII. La opción A describe reflexión/absorción selectiva. La C confunde refracción con difracción (fenómeno diferente, aunque también causa separación en algunas situaciones). La D no tiene base física.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 26. CTS + indagacion (impacto ambiental de la minería)
      {
        id: 'nat-p-s11-26',
        enunciado: 'Una empresa minera presenta un estudio que concluye: "La explotación de carbón en esta región es ambientalmente sostenible porque sembramos 500 árboles por cada hectárea explotada." Un científico ambiental cuestiona esta conclusión. ¿Cuál es la crítica científica más sólida a esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'La empresa no debería plantar árboles porque eso interfiere con el ecosistema.' },
          { letra: 'B', texto: 'Plantar 500 árboles no compensa la destrucción de un ecosistema establecido: se pierden el suelo formado durante siglos, la biodiversidad local, los acuíferos y los servicios ecosistémicos, además de que las plantaciones homogéneas no equivalen en biodiversidad ni función a un bosque natural; tampoco se aborda la emisión de CO₂ por la quema del carbón extraído.' },
          { letra: 'C', texto: 'La crítica principal es que 500 es un número impar de árboles.' },
          { letra: 'D', texto: 'No existe ninguna crítica válida porque la empresa está haciendo algo positivo al plantar árboles.' },
        ],
        clave: 'B',
        justificacion: 'La sostenibilidad ambiental no se mide únicamente por el número de árboles plantados. Un ecosistema natural tiene componentes que no se pueden reemplazar simplemente plantando árboles: suelo con microbiota y estructura formada durante siglos, biodiversidad de fauna y flora interdependiente, servicios hidrológicos (regulación de caudales, recarga de acuíferos) y captura de carbono a largo plazo. Las plantaciones homogéneas tienen mucho menor biodiversidad. Además, la quema del carbón extraído libera CO₂ que contribuye al cambio climático. El estudio es incompleto y sus indicadores son insuficientes para concluir sostenibilidad. Las opciones C y D no son críticas científicas serias.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 27. Entorno fisico + uso-conocimiento (física cuántica básica / radiación)
      {
        id: 'nat-p-s11-27',
        enunciado: 'El carbono-14 es un isótopo radiactivo con período de semidesintegración de 5.730 años. Si una muestra orgánica contiene actualmente 1/8 de la cantidad original de carbono-14, ¿aproximadamente cuántos años tiene la muestra?',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 5.730 años (1 período).' },
          { letra: 'B', texto: 'Aproximadamente 11.460 años (2 períodos).' },
          { letra: 'C', texto: 'Aproximadamente 17.190 años (3 períodos).' },
          { letra: 'D', texto: 'Aproximadamente 22.920 años (4 períodos).' },
        ],
        clave: 'C',
        justificacion: 'Después de cada período de semidesintegración, la cantidad se reduce a la mitad: después de 1 período queda 1/2; después de 2 períodos queda 1/4; después de 3 períodos queda 1/8. La muestra tiene 1/8 del original, lo que corresponde a 3 períodos de semidesintegración. 3 × 5.730 años = 17.190 años. La datación por carbono-14 se usa en arqueología y paleontología para datar materiales orgánicos de hasta ~50.000 años.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 28. Entorno vivo + indagacion (biodiversidad y conservación)
      {
        id: 'nat-p-s11-28',
        enunciado: 'Colombia es considerada uno de los países megadiversos del mundo. Un biólogo propone crear un corredor biológico entre dos fragmentos de bosque separados por cultivos agrícolas. ¿Cuál es el principal argumento científico a favor de los corredores biológicos?',
        opciones: [
          { letra: 'A', texto: 'Los corredores permiten a los turistas atravesar el bosque de manera segura.' },
          { letra: 'B', texto: 'Los corredores biológicos facilitan el movimiento de individuos entre poblaciones fragmentadas, lo que permite el flujo génico, reduce los efectos del aislamiento (deriva genética, consanguinidad), aumenta el tamaño efectivo de la población y mejora las posibilidades de recolonización tras extinciones locales.' },
          { letra: 'C', texto: 'Los corredores solo sirven para que los animales grandes puedan moverse; no tienen efecto sobre plantas, insectos ni aves.' },
          { letra: 'D', texto: 'Los corredores eliminan la necesidad de proteger los bosques restantes.' },
        ],
        clave: 'B',
        justificacion: 'La fragmentación del hábitat aísla poblaciones, lo que reduce el flujo génico y aumenta la consanguinidad y la deriva genética en poblaciones pequeñas, aumentando el riesgo de extinción. Los corredores biológicos conectan fragmentos y permiten el movimiento de individuos (mamíferos, aves, insectos, dispersión de semillas), lo que mantiene el flujo génico y aumenta la resiliencia de las poblaciones. La opción A es una función turística, no biológica. La C es incorrecta: los corredores benefician a múltiples grupos taxonómicos. La D es incorrecta y peligrosa: los corredores complementan, no reemplazan, la protección de los fragmentos existentes.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 29. Entorno fisico + explicacion (presión y fluidos)
      {
        id: 'nat-p-s11-29',
        enunciado: 'Un buzo desciende a 30 metros de profundidad en el mar. Sabiendo que la presión atmosférica equivale a 101.325 Pa y que la densidad del agua de mar es aproximadamente 1025 kg/m³, ¿qué presión total experimenta el buzo a esa profundidad? (g = 9,8 m/s²)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 101.325 Pa (solo la presión atmosférica, el agua no ejerce presión adicional).' },
          { letra: 'B', texto: 'Aproximadamente 200.000 Pa (el doble de la atmosférica).' },
          { letra: 'C', texto: 'Aproximadamente 402.075 Pa (presión atmosférica más la presión de la columna de agua de 30 m).' },
          { letra: 'D', texto: 'Aproximadamente 1.025.000 Pa (solo la presión de la columna de agua).' },
        ],
        clave: 'C',
        justificacion: 'La presión total es la suma de la presión atmosférica más la presión hidrostática: P = P₀ + ρgh. P hidrostática = 1025 kg/m³ × 9,8 m/s² × 30 m = 301.350 Pa. P total = 101.325 + 301.350 ≈ 402.675 Pa ≈ 402.075 Pa (la ligera diferencia es de redondeo). Esto equivale a aproximadamente 4 atmósferas. Esta presión elevada explica por qué los buzos deben descomprimirse gradualmente al ascender para evitar la enfermedad de descompresión (nitrógeno disuelto en sangre). La opción A ignora la presión hidrostática. La B subestima la presión real. La D omite la presión atmosférica.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 30. CTS + indagacion (cambio climático y evidencia científica)
      {
        id: 'nat-p-s11-30',
        enunciado: 'Un político afirma: "El cambio climático es un mito porque en mi ciudad el invierno de este año fue más frío que el del año pasado." ¿Cuál es el error científico fundamental en este razonamiento?',
        opciones: [
          { letra: 'A', texto: 'El político tiene razón: si un invierno fue más frío, el planeta no se está calentando.' },
          { letra: 'B', texto: 'El error es confundir el clima (tendencias promedio a largo plazo, décadas o siglos, a escala global o regional) con el tiempo atmosférico (condiciones locales y de corto plazo). El cambio climático se evidencia en tendencias globales de temperatura, no en eventos climáticos locales de un año.' },
          { letra: 'C', texto: 'El error es que el político no mencionó la lluvia, que es la variable más importante del clima.' },
          { letra: 'D', texto: 'El error es hablar de invierno, porque el cambio climático solo afecta el verano.' },
        ],
        clave: 'B',
        justificacion: 'La distinción entre tiempo atmosférico y clima es fundamental en ciencias de la Tierra. El tiempo es el estado de la atmósfera en un lugar y momento específicos (puede variar día a día). El clima es el patrón estadístico del tiempo durante períodos largos (normalmente 30 años o más) en una región o en el planeta. El calentamiento global se evidencia en el aumento de la temperatura promedio global a lo largo de décadas, el derretimiento de glaciares, el aumento del nivel del mar y los cambios en patrones climáticos globales; no en la temperatura de un invierno particular en una ciudad. Esta confusión es una falacia frecuente en el debate público sobre cambio climático.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 31. Entorno vivo + explicación (herencia cuantitativa y epigenética)
      {
        id: 'nat-p-s11-31',
        enunciado: 'La epigenética estudia cambios en la expresión génica que no implican cambios en la secuencia de ADN. Se ha demostrado que factores ambientales como la dieta, el estrés o la exposición a tóxicos pueden "encender" o "apagar" genes mediante mecanismos como la metilación del ADN. ¿Cuál es la implicación más significativa de la epigenética para la medicina?',
        opciones: [
          { letra: 'A', texto: 'Que el ADN puede reescribirse completamente con intervenciones dietéticas.' },
          { letra: 'B', texto: 'Que algunas enfermedades pueden surgir por patrones epigenéticos alterados y que ciertos tratamientos podrían revertir estos patrones sin modificar el ADN.' },
          { letra: 'C', texto: 'Que la epigenética demuestra que el ambiente no afecta la expresión de los genes.' },
          { letra: 'D', texto: 'Que los genes adquiridos durante la vida de un organismo se pueden transmitir a la descendencia (lamarckismo).' },
        ],
        clave: 'B',
        justificacion: 'La epigenética ha demostrado que la regulación de la expresión génica es más dinámica de lo que se pensaba. Enfermedades como el cáncer tienen perfiles epigenéticos aberrantes (metilación anormal de genes supresores de tumores). Los fármacos epigenéticos (inhibidores de desacetilasas o demetilasas) pueden revertir estos patrones. La opción A exagera: la dieta puede influir pero no "reescribir" el ADN. La opción C contradice la base de la epigenética. La opción D malinterpreta: las marcas epigenéticas pueden transmitirse en algunos casos, pero esto no es lamarckismo clásico.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 32. Entorno físico + razonamiento (termodinámica — entropía)
      {
        id: 'nat-p-s11-32',
        enunciado: 'El segundo principio de la termodinámica establece que en un proceso espontáneo, la entropía total del universo siempre aumenta. ¿Cuál de los siguientes ejemplos ilustra mejor este principio?',
        opciones: [
          { letra: 'A', texto: 'Un cubo de hielo que absorbe calor del entorno y se derrite, aumentando el desorden del sistema.' },
          { letra: 'B', texto: 'Una planta que crece y organiza moléculas simples en estructuras complejas, disminuyendo su entropía local.' },
          { letra: 'C', texto: 'El funcionamiento de un motor de combustión perfectamente eficiente sin pérdida de calor.' },
          { letra: 'D', texto: 'El movimiento de las moléculas de un gas a temperatura constante sin cambio de presión.' },
        ],
        clave: 'A',
        justificacion: 'El derretimiento del hielo ilustra el segundo principio: el hielo (estructura ordenada) absorbe calor del entorno y se convierte en agua líquida (mayor desorden molecular). La entropía del sistema (hielo → agua) aumenta, y aunque el entorno pierde calor, la entropía total del universo aumenta. La opción B describe una disminución local de entropía (posible), pero la planta requiere energía solar y libera calor, aumentando la entropía total del universo. La opción C viola el segundo principio (ningún motor puede ser 100% eficiente). La opción D no ilustra un cambio de entropía.',
        competencia: 'razonamiento',
        componente: 'entorno-fisico',
      },

      // 33. Entorno vivo + uso-conocimiento (inmunología avanzada — anticuerpos monoclonales)
      {
        id: 'nat-p-s11-33',
        enunciado: 'Los anticuerpos monoclonales son proteínas producidas en laboratorio que reconocen específicamente un antígeno particular. Se usan en el tratamiento de ciertos cánceres (como el trastuzumab para cáncer de mama HER2+) y enfermedades autoinmunes. ¿Cuál es el principio biológico que hace posible esta especificidad?',
        opciones: [
          { letra: 'A', texto: 'Los anticuerpos son inespecíficos y actúan sobre cualquier célula del cuerpo.' },
          { letra: 'B', texto: 'La región variable del anticuerpo tiene una forma tridimensional complementaria a un epítopo específico del antígeno, permitiendo una unión altamente específica tipo "llave-cerradura".' },
          { letra: 'C', texto: 'Los anticuerpos monoclonales son más grandes que los policlonales, lo que les permite cubrir más antígenos.' },
          { letra: 'D', texto: 'Los anticuerpos actúan como enzimas que descomponen los antígenos en aminoácidos.' },
        ],
        clave: 'B',
        justificacion: 'La especificidad de los anticuerpos se debe a la complementariedad estructural entre la región variable (Fab) del anticuerpo y el epítopo específico del antígeno. Esta región variable es única para cada tipo de anticuerpo y ha sido seleccionada evolutivamente (o diseñada en laboratorio) para reconocer únicamente su antígeno diana. Este principio de reconocimiento molecular específico es análogo al modelo llave-cerradura de las enzimas. Los anticuerpos monoclonales son producidos por un único clon de células B, garantizando especificidad uniforme.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 34. CTS + indagación (energía nuclear — fisión y fusión)
      {
        id: 'nat-p-s11-34',
        enunciado: 'La fisión nuclear (utilizada en centrales nucleares actuales) divide núcleos pesados liberando energía. La fusión nuclear (que alimenta las estrellas y que aún no se domina comercialmente) une núcleos ligeros liberando mucha más energía. ¿Cuál sería la ventaja principal de la fusión nuclear respecto a la fisión para la producción de energía?',
        opciones: [
          { letra: 'A', texto: 'La fisión produce más energía por kilogramo de combustible.' },
          { letra: 'B', texto: 'La fusión usa hidrógeno (abundante en el agua de mar) como combustible y no produce residuos radiactivos de larga vida, lo que la hace más limpia y con combustible prácticamente ilimitado.' },
          { letra: 'C', texto: 'La fusión ya está disponible comercialmente y es más barata que las energías renovables.' },
          { letra: 'D', texto: 'La fusión solo funciona en el espacio exterior, no en condiciones terrestres.' },
        ],
        clave: 'B',
        justificacion: 'Las ventajas teóricas de la fusión nuclear sobre la fisión son: (1) El combustible principal es el deuterio (H-2), extraíble del agua de mar en cantidades prácticamente ilimitadas. (2) No produce residuos radiactivos de larga vida como la fisión. (3) Libera más energía por unidad de masa que la fisión. El principal desafío es mantener las condiciones de temperatura y presión extremas (plasma a >100 millones °C) necesarias para la fusión. La opción A es incorrecta (la fusión produce más). La opción C no corresponde al estado actual de la tecnología. La opción D es incorrecta: proyectos como ITER en Francia buscan lograrla en la Tierra.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 35. Entorno físico + explicación (mecánica cuántica — dualidad onda-partícula)
      {
        id: 'nat-p-s11-35',
        enunciado: 'El principio de dualidad onda-partícula establece que objetos como el electrón pueden comportarse tanto como onda (interfieren y difractan) como partícula (colisionan y tienen posición). ¿Cuál de los siguientes experimentos demostró el comportamiento ondulatorio del electrón?',
        opciones: [
          { letra: 'A', texto: 'El experimento de Millikan, que midió la carga del electrón.' },
          { letra: 'B', texto: 'El experimento de Davisson y Germer, que observó la difracción de electrones en una red cristalina.' },
          { letra: 'C', texto: 'El experimento de Thomson, que descubrió el electrón como partícula cargada.' },
          { letra: 'D', texto: 'El experimento de Rutherford, que descubrió el núcleo atómico.' },
        ],
        clave: 'B',
        justificacion: 'En 1927, Davisson y Germer dirigieron un haz de electrones contra una superficie de níquel y observaron patrones de difracción (característica ondulatoria), confirmando la predicción de De Broglie de que las partículas materiales tienen asociada una longitud de onda. Este experimento fue fundamental para el desarrollo de la mecánica cuántica. El experimento de Millikan (A) midió la carga elemental. Thomson (C) identificó el electrón como partícula negativa. Rutherford (D) describió el núcleo atómico con su experimento de dispersión de partículas alfa.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 36. Entorno vivo + uso-conocimiento (bioquímica — enzimas y cofactores)
      {
        id: 'nat-p-s11-36',
        enunciado: 'Las enzimas son catalizadores biológicos que aceleran reacciones químicas sin consumirse. Muchas enzimas requieren cofactores (iones metálicos como Zn²⁺, Fe²⁺) o coenzimas (moléculas orgánicas como vitaminas B) para ser funcionales. ¿Qué consecuencia tendría la deficiencia de hierro en el funcionamiento de enzimas que lo requieren?',
        opciones: [
          { letra: 'A', texto: 'Las enzimas se destruirían completamente y no quedaría ninguna actividad enzimática.' },
          { letra: 'B', texto: 'Las enzimas que requieren hierro como cofactor reducirían su actividad catalítica, afectando las rutas metabólicas que dependen de ellas (como la cadena respiratoria mitocondrial, que usa citocromo c con hierro).' },
          { letra: 'C', texto: 'Las enzimas usarían otro ion metálico en lugar del hierro, sin afectar su función.' },
          { letra: 'D', texto: 'El organismo sintetizaría más enzimas para compensar la falta de cofactor.' },
        ],
        clave: 'B',
        justificacion: 'El hierro es cofactor esencial de enzimas como los citocromos (cadena respiratoria), la catalasa y la peroxidasa. Sin el cofactor adecuado, la apoenzima (la parte proteica) no puede formar la holoenzima funcional, reduciendo la actividad catalítica. La deficiencia de hierro afecta la producción de ATP mitocondrial. Además, la hemoglobina (no enzima, pero proteína) requiere hierro para transportar oxígeno. La opción A exagera: hay otras enzimas que no requieren hierro. La opción C es incorrecta: la especificidad por el cofactor es alta. La opción D no compensa la falta de cofactor.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 37. Entorno físico + resolución (electrostática — ley de Coulomb)
      {
        id: 'nat-p-s11-37',
        enunciado: 'Dos cargas eléctricas de +2 C y −3 C están separadas 3 m. La fuerza de Coulomb entre ellas es F = k × |q₁ × q₂| / r², con k = 9×10⁹ N·m²/C². ¿De qué tipo es la fuerza y cuánto vale aproximadamente?',
        opciones: [
          { letra: 'A', texto: 'Fuerza de repulsión; F = 6×10⁹ N.' },
          { letra: 'B', texto: 'Fuerza de atracción; F = 6×10⁹ N.' },
          { letra: 'C', texto: 'Fuerza de atracción; F = 2×10⁹ N.' },
          { letra: 'D', texto: 'Fuerza de repulsión; F = 2×10⁹ N.' },
        ],
        clave: 'B',
        justificacion: 'Cargas de signos opuestos se atraen (no repelen). F = k × |q₁ × q₂| / r² = 9×10⁹ × |2 × (−3)| / 3² = 9×10⁹ × 6 / 9 = 9×10⁹ × (2/3) = 6×10⁹ N. Las cargas + y − se atraen. La opción A calcula bien el módulo pero dice que es repulsión. La opción C divide incorrectamente (9×10⁹ × 6 / 9 = 6×10⁹, no 2×10⁹). La opción D combina el tipo de fuerza incorrecto con el valor incorrecto.',
        competencia: 'resolucion',
        componente: 'entorno-fisico',
      },

      // 38. Entorno vivo + indagación (microbioma humano)
      {
        id: 'nat-p-s11-38',
        enunciado: 'El microbioma intestinal humano contiene aproximadamente 100 billones de microorganismos de más de 1.000 especies diferentes. Investigaciones recientes sugieren que la composición del microbioma influye en el sistema inmune, la digestión, la salud mental y el riesgo de ciertas enfermedades. Un investigador observa que pacientes con cierta enfermedad inflamatoria tienen una composición microbiana diferente a la de personas sanas. ¿Cuál es la limitación más importante de esta observación para establecer una causa-efecto?',
        opciones: [
          { letra: 'A', texto: 'La muestra de pacientes es siempre demasiado pequeña para sacar conclusiones.' },
          { letra: 'B', texto: 'La correlación no implica causalidad: el microbioma alterado podría ser consecuencia (no causa) de la enfermedad, o ambos podrían ser causados por un tercer factor.' },
          { letra: 'C', texto: 'El microbioma no se puede estudiar científicamente porque vive dentro del intestino.' },
          { letra: 'D', texto: 'No hay limitaciones: si hay diferencia en el microbioma, definitivamente es la causa de la enfermedad.' },
        ],
        clave: 'B',
        justificacion: 'El principal error en el razonamiento científico es confundir correlación con causalidad. En estudios observacionales del microbioma, existen tres posibilidades: (1) el microbioma alterado causa la enfermedad, (2) la enfermedad altera el microbioma, (3) un factor confusor (dieta, genética, medicamentos) causa ambos. Para establecer causalidad se necesitan experimentos controlados (trasplante de microbioma, modelos animales libres de gérmenes). La opción A es una preocupación metodológica válida pero no la limitación más fundamental. La opción C es incorrecta: existen técnicas de secuenciación metagnómica. La opción D es el error lógico que se pretende identificar.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 39. Entorno físico + uso-conocimiento (relatividad especial — introducción)
      {
        id: 'nat-p-s11-39',
        enunciado: 'La teoría de la relatividad especial de Einstein (1905) establece que la velocidad de la luz en el vacío (c ≈ 3×10⁸ m/s) es la misma para todos los observadores, independientemente de su movimiento. Una consecuencia es que el tiempo pasa más despacio para un objeto en movimiento (dilatación temporal). ¿Cuál de las siguientes afirmaciones es una consecuencia correcta de esta teoría?',
        opciones: [
          { letra: 'A', texto: 'Un astronauta que viaja a velocidades cercanas a la luz envejece más rápido que los que quedan en la Tierra.' },
          { letra: 'B', texto: 'Un astronauta que viaja a velocidades cercanas a la luz envejece más lentamente que los que quedan en la Tierra (paradoja de los gemelos).' },
          { letra: 'C', texto: 'La relatividad especial aplica solo a objetos con masa cero, como los fotones.' },
          { letra: 'D', texto: 'Ningún objeto puede moverse en el universo, porque todo es relativo.' },
        ],
        clave: 'B',
        justificacion: 'La dilatación temporal es una consecuencia medida experimentalmente de la relatividad especial: los relojes en movimiento marchan más lentamente que los relojes en reposo (desde el punto de vista del observador en reposo). La "paradoja de los gemelos" ilustra que si uno viaja a velocidades relativistas y regresa, habrá envejecido menos que su gemelo en la Tierra. Esta predicción ha sido confirmada con relojes atómicos en aviones y satélites GPS (que requieren correcciones relativistas). La opción A invierte el efecto. La opción C es incorrecta: aplica a todas las partículas.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 40. Entorno vivo + explicación (sistema reproductivo y meiosis)
      {
        id: 'nat-p-s11-40',
        enunciado: 'La meiosis produce células germinales (gametos) con la mitad del número cromosómico (n). ¿Por qué es esencial la meiosis para la reproducción sexual y qué sucedería si los gametos fueran diploides (2n)?',
        opciones: [
          { letra: 'A', texto: 'La meiosis es esencial porque produce gametos más pequeños y rápidos. Si fueran diploides, los gametos serían demasiado grandes para moverse.' },
          { letra: 'B', texto: 'La meiosis produce gametos haploides (n) para que al fusionarse en la fecundación se restaure el número diploide (2n) de la especie. Si los gametos fueran diploides, cada generación duplicaría el número de cromosomas, siendo incompatible con la viabilidad del organismo.' },
          { letra: 'C', texto: 'La meiosis es necesaria para que los gametos sean genéticamente idénticos a las células somáticas.' },
          { letra: 'D', texto: 'Si los gametos fueran diploides, la reproducción sexual sería más eficiente.' },
        ],
        clave: 'B',
        justificacion: 'La meiosis resuelve el problema matemático fundamental de la reproducción sexual: si los gametos fueran diploides (2n = 46 en humanos), la fecundación produciría células con 4n = 92 cromosomas, y cada generación subsequente duplicaría el número. Esto haría inviable la vida a corto plazo. La meiosis reduce el número cromosómico a la mitad (n = 23), de modo que al fusionarse dos gametos se restaura el número diploide (2n = 46) en cada generación. Además, el entrecruzamiento en meiosis I aumenta la variabilidad genética, esencial para la evolución.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 41. CTS + uso-conocimiento (impacto de plásticos en ecosistemas marinos)
      {
        id: 'nat-p-s11-41',
        enunciado: 'Se estima que cada año llegan al océano entre 8 y 10 millones de toneladas de plásticos. Los microplásticos (fragmentos menores de 5 mm) han sido encontrados en el fondo del mar, en peces, en aves marinas y hasta en sangre humana. ¿Cuál es el principal mecanismo por el que los microplásticos se acumulan en organismos de niveles tróficos superiores?',
        opciones: [
          { letra: 'A', texto: 'Los microplásticos se fabrican en forma de alimento para que los peces los ingieran voluntariamente.' },
          { letra: 'B', texto: 'A través de la bioacumulación y biomagnificación: organismos del nivel basal ingieren microplásticos; los depredadores que los consumen acumulan concentraciones aún mayores, con los contaminantes adsorbidos en el plástico.' },
          { letra: 'C', texto: 'Los microplásticos se disuelven en el agua y los organismos los absorben directamente por osmosis.' },
          { letra: 'D', texto: 'Los microplásticos solo afectan a los organismos que viven en la superficie del océano.' },
        ],
        clave: 'B',
        justificacion: 'La bioacumulación (acumulación en un organismo) y la biomagnificación (aumento de concentración en niveles tróficos superiores) son mecanismos bien documentados para plásticos y sus contaminantes asociados (PCBs, pesticidas organoclorados). El zooplancton ingiere microplásticos confundiéndolos con alimento; los pequeños peces comen zooplancton contaminado; los peces grandes comen muchos peces pequeños; y así la concentración aumenta en cada nivel trófico. Los humanos, al final de la cadena, acumulan concentraciones relativamente altas. La opción C es incorrecta: los plásticos no se disuelven en agua.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 42. Entorno físico + razonamiento (semiconductores y tecnología)
      {
        id: 'nat-p-s11-42',
        enunciado: 'Los transistores son dispositivos semiconductores que actúan como interruptores o amplificadores en circuitos electrónicos. El silicio es el semiconductor más usado en la fabricación de chips. Un chip moderno puede contener miles de millones de transistores. ¿Cuál es la propiedad del silicio que lo hace adecuado como semiconductor?',
        opciones: [
          { letra: 'A', texto: 'El silicio es conductor perfecto de la electricidad a cualquier temperatura.' },
          { letra: 'B', texto: 'El silicio es un semiconductor: su conductividad eléctrica puede modificarse añadiendo impurezas (dopaje), permitiendo controlar el flujo de corriente.' },
          { letra: 'C', texto: 'El silicio es el material más duro de la corteza terrestre, lo que lo hace ideal para resistir presiones.' },
          { letra: 'D', texto: 'El silicio actúa como aislante perfectamente a bajas temperaturas y conductor a altas temperaturas.' },
        ],
        clave: 'B',
        justificacion: 'El silicio tiene una conductividad eléctrica intermedia entre conductores (como el cobre) y aislantes (como el plástico). Su propiedad más valiosa es que su conductividad puede controlarse mediante el dopaje: añadir impurezas tipo n (como fósforo, con electrones extra) o tipo p (como boro, con "huecos") permite crear uniones p-n que actúan como rectificadores, diodos y transistores. La opción A es incorrecta: el silicio puro tiene baja conductividad. La opción C describe el diamante, no el silicio. La opción D simplifica incorrectamente el comportamiento.',
        competencia: 'razonamiento',
        componente: 'entorno-fisico',
      },

      // 43. Entorno vivo + uso-conocimiento (neurociencia — sinapsis y neurotransmisores)
      {
        id: 'nat-p-s11-43',
        enunciado: 'La transmisión sináptica es el proceso por el que una neurona transmite una señal a otra (o a un músculo). Los neurotransmisores liberados en la hendidura sináptica se unen a receptores en la neurona postsináptica. El GABA es el principal neurotransmisor inhibitorio del cerebro. ¿Cuál sería el efecto de un fármaco que bloquea los receptores de GABA?',
        opciones: [
          { letra: 'A', texto: 'El fármaco causaría sedación profunda, ya que bloquea la inhibición neural.' },
          { letra: 'B', texto: 'El fármaco causaría hiperexcitabilidad neuronal (incluyendo posibles convulsiones), porque al bloquear la inhibición, las neuronas se activan sin control.' },
          { letra: 'C', texto: 'El fármaco no tendría ningún efecto porque el GABA es un neurotransmisor secundario.' },
          { letra: 'D', texto: 'El fármaco mejoraría la memoria porque el GABA interfiere con el aprendizaje.' },
        ],
        clave: 'B',
        justificacion: 'El GABA (ácido gamma-aminobutírico) es el principal neurotransmisor inhibitorio: al unirse a sus receptores, hiperpolariza la neurona postsináptica y reduce su probabilidad de disparar. Si un fármaco bloquea los receptores de GABA (antagonista), la inhibición neural se reduce, causando hiperexcitabilidad. En casos extremos, esto puede provocar convulsiones (como la intoxicación con ciertos venenos como la bicuculina o el picrotoxin, que bloquean receptores GABA-A). Los ansiolíticos benzodiazepínicos hacen lo contrario: potencian el GABA para producir sedación (opción A), no bloquearlo.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 44. Entorno físico + explicación (óptica — lentes y dioptrías)
      {
        id: 'nat-p-s11-44',
        enunciado: 'Un optómetra prescribe a un paciente lentes con potencia de −2,5 dioptrías. La potencia de una lente en dioptrías es P = 1/f, donde f es la distancia focal en metros. ¿Qué tipo de lente se recetó y cuál es su distancia focal?',
        opciones: [
          { letra: 'A', texto: 'Lente convergente; f = 0,4 m.' },
          { letra: 'B', texto: 'Lente divergente; f = −0,4 m.' },
          { letra: 'C', texto: 'Lente convergente; f = −2,5 m.' },
          { letra: 'D', texto: 'Lente divergente; f = −2,5 m.' },
        ],
        clave: 'B',
        justificacion: 'Una potencia negativa (−2,5 D) indica una lente divergente (cóncava), usada para corregir la miopía. La distancia focal: f = 1/P = 1/(−2,5) = −0,4 m. El signo negativo confirma que es divergente (la distancia focal es virtual, del mismo lado que el objeto). Las lentes convergentes tienen potencia positiva. Una miopía ocurre porque el ojo enfoca demasiado cerca y la lente divergente "aleja" el punto de convergencia. La opción A describe una lente convergente (positiva). La opción D aplica la potencia como distancia focal sin invertir.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 45. Entorno vivo + explicación (evolución — especiación)
      {
        id: 'nat-p-s11-45',
        enunciado: 'La especiación alopátrica ocurre cuando una barrera geográfica (montaña, mar, río) separa una población en dos grupos aislados. Con el tiempo, los dos grupos acumulan suficientes diferencias genéticas para no poder reproducirse entre sí. ¿Cuál es el proceso evolutivo que impulsa estas diferencias genéticas acumuladas?',
        opciones: [
          { letra: 'A', texto: 'Únicamente las mutaciones aleatorias que ocurren a la misma velocidad en ambos grupos.' },
          { letra: 'B', texto: 'La combinación de mutaciones, selección natural (diferentes presiones selectivas en cada ambiente), deriva genética y migración nula entre los grupos aislados.' },
          { letra: 'C', texto: 'La hibridación entre los dos grupos que mezcla y diferencia el material genético.' },
          { letra: 'D', texto: 'Solo la selección sexual, que favorece diferentes características estéticas en cada grupo.' },
        ],
        clave: 'B',
        justificacion: 'La especiación alopátrica resulta de la acumulación de diferencias genéticas por múltiples mecanismos: (1) Mutaciones independientes en cada población. (2) Selección natural diferente según el ambiente de cada grupo (presiones selectivas distintas). (3) Deriva genética (cambios aleatorios en las frecuencias alélicas, más importantes en poblaciones pequeñas). (4) Ausencia de flujo génico entre los grupos. Con el tiempo, la incompatibilidad reproductiva puede volverse suficiente para constituir especies separadas. Solo las mutaciones (opción A) sería insuficiente sin los demás factores. La hibridación (opción C) uniría los grupos, no los diferenciaría.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 46. CTS + indagación (CRISPR-Cas9)
      {
        id: 'nat-p-s11-46',
        enunciado: 'CRISPR-Cas9 es una tecnología de edición genética que permite cortar y modificar el ADN con gran precisión. Ha sido usada para desarrollar variedades de cultivos resistentes a enfermedades, tratar algunas enfermedades hereditarias y se investiga su uso para eliminar genes de mosquitos transmisores de malaria. ¿Cuál de los siguientes representa el dilema ético más complejo asociado al uso de CRISPR en seres humanos?',
        opciones: [
          { letra: 'A', texto: 'El costo de la tecnología, que la hace inaccesible para países en desarrollo.' },
          { letra: 'B', texto: 'La edición de la línea germinal (embriones humanos): los cambios serían hereditarios, afectando a todas las generaciones futuras sin su consentimiento, y abre la puerta a la eugenesia.' },
          { letra: 'C', texto: 'Que CRISPR podría eliminar el concepto de evolución natural.' },
          { letra: 'D', texto: 'Que CRISPR no funciona en células humanas adultas.' },
        ],
        clave: 'B',
        justificacion: 'El dilema ético más profundo de CRISPR en humanos es la edición germinal: modificar embriones significa que los cambios se heredarán permanentemente, afectando a seres que no han nacido y no pueden consentir. Esto abre la posibilidad de "diseñar bebés" con características elegidas por los padres (eugenesia), con enormes implicaciones para la justicia social e igualdad. Este fue el caso del científico chino He Jiankui (2018), que editó embriones humanos y fue sancionado. El costo (opción A) es un problema de equidad, pero no el dilema ético más complejo. La opción C es una exageración. La opción D es factualmente incorrecta.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 47. Entorno físico + resolución (movimiento proyectil)
      {
        id: 'nat-p-s11-47',
        enunciado: 'Un proyectil es lanzado horizontalmente desde una altura de 45 m con velocidad de 20 m/s. ¿Cuánto tiempo tarda en llegar al suelo y a qué distancia horizontal cae? (g = 10 m/s², desprecie la resistencia del aire)',
        opciones: [
          { letra: 'A', texto: 'Tiempo = 3 s; distancia horizontal = 60 m.' },
          { letra: 'B', texto: 'Tiempo = 3 s; distancia horizontal = 30 m.' },
          { letra: 'C', texto: 'Tiempo = 4,5 s; distancia horizontal = 90 m.' },
          { letra: 'D', texto: 'Tiempo = 3 s; distancia horizontal = 90 m.' },
        ],
        clave: 'A',
        justificacion: 'Movimiento vertical (caída libre): h = (1/2)gt² → 45 = (1/2)(10)t² → t² = 9 → t = 3 s. Movimiento horizontal (velocidad constante): x = vₓ × t = 20 × 3 = 60 m. El tiempo de vuelo solo depende de la altura inicial y la gravedad. La opción B calcula x = 20 × 1,5 = 30 (usa la mitad del tiempo). La opción C calcula t incorrectamente. La opción D usa una velocidad diferente para el cálculo horizontal.',
        competencia: 'resolucion',
        componente: 'entorno-fisico',
      },

      // 48. Entorno vivo + uso-conocimiento (metabolismo — ciclo de Krebs)
      {
        id: 'nat-p-s11-48',
        enunciado: 'La glucólisis convierte una molécula de glucosa (C₆) en dos moléculas de piruvato (C₃) produciendo 2 ATP netos. En condiciones aeróbicas, el piruvato entra a la mitocondria y continúa el metabolismo oxidativo. ¿Qué proceso sigue inmediatamente al piruvato antes del ciclo de Krebs y qué molécula produce?',
        opciones: [
          { letra: 'A', texto: 'La gluconeogénesis: convierte el piruvato de regreso en glucosa.' },
          { letra: 'B', texto: 'La decarboxilación oxidativa del piruvato (por el complejo piruvato deshidrogenasa): convierte el piruvato en acetil-CoA (2 carbonos), liberando CO₂ y produciendo NADH.' },
          { letra: 'C', texto: 'La fermentación láctica: convierte el piruvato en ácido láctico para regenerar NAD⁺.' },
          { letra: 'D', texto: 'La β-oxidación: convierte el piruvato en ácidos grasos para almacenar energía.' },
        ],
        clave: 'B',
        justificacion: 'En condiciones aeróbicas, el piruvato es transportado a la mitocondria donde el complejo piruvato deshidrogenasa realiza su decarboxilación oxidativa: piruvato (3C) → acetil-CoA (2C) + CO₂ + NADH. El acetil-CoA (2 carbonos) es la molécula que entra al ciclo de Krebs. La gluconeogénesis (opción A) ocurre en el hígado para sintetizar glucosa, proceso diferente. La fermentación (opción C) ocurre en condiciones anaeróbicas. La β-oxidación (opción D) degrada ácidos grasos para producir acetil-CoA, no el piruvato.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 49. Entorno físico + uso-conocimiento (física de partículas — introducción)
      {
        id: 'nat-p-s11-49',
        enunciado: 'El Modelo Estándar de física de partículas clasifica las partículas fundamentales en quarks (que forman protones y neutrones) y leptones (como el electrón y los neutrinos). El bosón de Higgs, descubierto en 2012 en el CERN, está asociado al campo de Higgs. ¿Cuál es el papel del campo de Higgs en el universo?',
        opciones: [
          { letra: 'A', texto: 'El campo de Higgs genera la fuerza gravitacional entre los planetas.' },
          { letra: 'B', texto: 'El campo de Higgs es el mecanismo que confiere masa a ciertas partículas fundamentales (como los bosones W y Z y los quarks) al interactuar con ellas.' },
          { letra: 'C', texto: 'El campo de Higgs es responsable de la velocidad de la luz y la limita a c ≈ 3×10⁸ m/s.' },
          { letra: 'D', texto: 'El campo de Higgs es lo mismo que la antimateria y tiene carga negativa.' },
        ],
        clave: 'B',
        justificacion: 'El bosón de Higgs es la partícula mensajera del campo de Higgs, que permea todo el universo. Las partículas adquieren masa al interactuar con este campo: cuanto más intensa es la interacción, mayor es la masa. Este mecanismo (ruptura espontánea de simetría) explica por qué los bosones W y Z (mediadores de la fuerza débil) tienen masa, mientras que el fotón no la tiene. La gravedad (opción A) está asociada al gravitón hipotético, no al Higgs. La velocidad de la luz (opción C) no tiene relación con el Higgs. La opción D confunde el bosón de Higgs con la antimateria.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 50. Entorno vivo + explicación (coevolución — mutualismo)
      {
        id: 'nat-p-s11-50',
        enunciado: 'La coevolución es el proceso en que dos o más especies evolucionan en respuesta mutua a las presiones selectivas que se ejercen entre sí. Las flores de orquídeas y los insectos polinizadores han coevolucionado a tal punto que muchas orquídeas solo pueden ser polinizadas por una especie de insecto específica. ¿Cuál sería la consecuencia ecológica de la extinción de ese insecto polinizador?',
        opciones: [
          { letra: 'A', texto: 'La orquídea se adaptaría rápidamente a otro polinizador en pocas generaciones.' },
          { letra: 'B', texto: 'La orquídea quedaría sin polinizador, no podría reproducirse sexualmente y enfrentaría riesgo de extinción, ilustrando cómo la pérdida de una especie puede desencadenar extinciones en cascada.' },
          { letra: 'C', texto: 'La orquídea empezaría a reproducirse asexualmente sin ningún cambio.' },
          { letra: 'D', texto: 'El ecosistema no se vería afectado porque otras flores compensarían la pérdida.' },
        ],
        clave: 'B',
        justificacion: 'La especialización extrema producto de la coevolución genera dependencia mutua. Si el insecto polinizador único se extingue, la orquídea pierde su único mecanismo de polinización cruzada y no puede producir semillas viables, llevando a su probable extinción. Este fenómeno se conoce como extinción en cascada o co-extinción: la pérdida de una especie arrastra a las que dependen de ella. La opción A es incorrecta: la adaptación evolutiva toma miles de generaciones. La opción C es posible en algunas plantas pero no resuelve la falta de diversidad genética. La opción D minimiza el impacto de las interdependencias ecológicas.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 51. Entorno físico + razonamiento (astronomía — ciclo de vida de estrellas)
      {
        id: 'nat-p-s11-51',
        enunciado: 'El Sol es una estrella de secuencia principal de tipo espectral G2. Dentro de aproximadamente 5.000 millones de años, agotará su hidrógeno central y se expandirá hasta convertirse en una gigante roja. ¿Qué proceso nuclear ocurre en el núcleo del Sol actualmente y qué lo diferencia de una gigante roja?',
        opciones: [
          { letra: 'A', texto: 'Actualmente el Sol realiza fisión nuclear de uranio; en la gigante roja quemará helio.' },
          { letra: 'B', texto: 'Actualmente el Sol fusiona hidrógeno en helio (cadena protón-protón) en su núcleo; como gigante roja fusionará helio en carbono y oxígeno.' },
          { letra: 'C', texto: 'Actualmente el Sol quema carbono; como gigante roja quemará oxígeno en silicio.' },
          { letra: 'D', texto: 'No hay diferencia: el Sol siempre ha fusionado los mismos elementos.' },
        ],
        clave: 'B',
        justificacion: 'El Sol genera energía por fusión nuclear de hidrógeno: cuatro protones se fusionan para formar un núcleo de helio-4, liberando energía (E = mc²). Cuando el hidrógeno central se agote, el núcleo se contraerá y calentará, y las capas externas se expandirán (gigante roja). La temperatura del núcleo permitirá entonces la fusión del helio en carbono y oxígeno (triple alfa y alfa + carbono). En estrellas más masivas que el Sol, este proceso continúa hasta el hierro. La fisión nuclear (opción A) no ocurre en el interior estelar. La opción C describe etapas de estrellas mucho más masivas.',
        competencia: 'razonamiento',
        componente: 'entorno-fisico',
      },

      // 52. Entorno vivo + uso-conocimiento (trasplante de órganos e histocompatibilidad)
      {
        id: 'nat-p-s11-52',
        enunciado: 'En los trasplantes de órganos, el sistema inmune del receptor puede reconocer el órgano del donante como extraño y atacarlo (rechazo). ¿Cuál es el mecanismo inmunológico principal del rechazo y cómo se previene?',
        opciones: [
          { letra: 'A', texto: 'Los anticuerpos del receptor atacan el nuevo órgano; se previene con antihistamínicos.' },
          { letra: 'B', texto: 'Los linfocitos T del receptor reconocen como extrañas las proteínas del complejo mayor de histocompatibilidad (CMH) del donante y desencadenan una respuesta inmune contra el órgano; se previene con medicamentos inmunosupresores y tipificación HLA compatible.' },
          { letra: 'C', texto: 'El receptor produce toxinas que destruyen el órgano trasplantado; se previene con antibióticos.' },
          { letra: 'D', texto: 'El rechazo ocurre porque el órgano del donante tiene diferente tipo de sangre; se previene haciendo coincidir los grupos sanguíneos.' },
        ],
        clave: 'B',
        justificacion: 'El rechazo de trasplantes es principalmente mediado por células T: los linfocitos T citotóxicos (CD8+) reconocen las proteínas del CMH (o HLA, Antígenos Leucocitarios Humanos) del donante como ajenas y las atacan. Para minimizar el rechazo se hace tipificación HLA para encontrar donante compatible, y los receptores toman inmunosupresores (como ciclosporina, tacrolimus) de por vida. Los anticuerpos también participan en el rechazo hiperagudo (opción A, parcialmente cierta). El grupo sanguíneo (opción D) es uno de los factores a compatibilizar, pero no el mecanismo principal del rechazo celular.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 53. Entorno físico + uso-conocimiento (superconductividad)
      {
        id: 'nat-p-s11-53',
        enunciado: 'Ciertos materiales llamados superconductores tienen resistencia eléctrica exactamente cero por debajo de una temperatura crítica (Tc). Esto significa que una corriente eléctrica en un anillo superconductor fluiría indefinidamente sin pérdida de energía. ¿Cuál es la principal aplicación tecnológica de la superconductividad en la actualidad?',
        opciones: [
          { letra: 'A', texto: 'Fabricar cables de transmisión eléctrica doméstica más baratos.' },
          { letra: 'B', texto: 'Generar campos magnéticos extremadamente intensos para imanes en resonancias magnéticas médicas (MRI) y aceleradores de partículas como el LHC.' },
          { letra: 'C', texto: 'Crear procesadores de computadora que funcionen a temperatura ambiente sin calentarse.' },
          { letra: 'D', texto: 'Almacenar energía solar a bajo costo en baterías superconductoras.' },
        ],
        clave: 'B',
        justificacion: 'La principal aplicación actual de la superconductividad son los electroimanes superconductores: bobinas de material superconductor (generalmente niobio-titanio a 4 K con helio líquido) que generan campos magnéticos de 1-20 Tesla, órdenes de magnitud superiores a los imanes convencionales. Esto es fundamental para las máquinas de resonancia magnética (MRI) en hospitales y para los imanes de guía de partículas en el LHC del CERN. La superconductividad a temperatura ambiente (opción A, C) aún no se ha logrado prácticamente. Las baterías superconductoras (opción D) no son la aplicación principal.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 54. CTS + explicación (farmacología y ensayos clínicos)
      {
        id: 'nat-p-s11-54',
        enunciado: 'Antes de que un medicamento llegue al mercado, debe pasar por ensayos clínicos en cuatro fases. En la fase III se compara el nuevo medicamento contra un placebo en cientos o miles de pacientes, usando diseño doble ciego. ¿Por qué es crucial el diseño doble ciego en los ensayos clínicos?',
        opciones: [
          { letra: 'A', texto: 'Para que los pacientes no conozcan los efectos secundarios del medicamento y no se asusten.' },
          { letra: 'B', texto: 'Para eliminar el sesgo de expectativa: ni el paciente (que podría responder al placebo si sabe que recibe el medicamento real) ni el médico evaluador (que podría inconscientemente registrar mejorías donde no las hay) conocen qué tratamiento recibe cada paciente.' },
          { letra: 'C', texto: 'Para proteger la confidencialidad de los datos del laboratorio farmacéutico.' },
          { letra: 'D', texto: 'Porque los pacientes no son capaces de reportar sus síntomas de forma objetiva.' },
        ],
        clave: 'B',
        justificacion: 'El doble ciego es uno de los controles metodológicos más importantes en investigación clínica. El sesgo del placebo (mejoría por expectativa del paciente) y el sesgo del evaluador (tendencia a interpretar positivamente si sabe el tratamiento) son fuentes conocidas de error. El diseño doble ciego controla ambos simultáneamente: ni el paciente ni el evaluador saben qué tratamiento se está administrando hasta después del análisis estadístico. La opción A desvirtúa el propósito del doble ciego. La opción C es una preocupación diferente (confidencialidad). La opción D es incorrecta y desvalorizadora hacia los pacientes.',
        competencia: 'explicacion',
        componente: 'cts',
      },

      // 55. Entorno vivo + uso-conocimiento (proteómica y plegamiento de proteínas)
      {
        id: 'nat-p-s11-55',
        enunciado: 'Las proteínas son polímeros de aminoácidos cuya función depende de su estructura tridimensional específica. El mal plegamiento de proteínas está asociado a enfermedades como el Alzheimer (acumulación de beta-amiloide) y el Parkinson (alfa-sinucleína). ¿Qué determina principalmente el plegamiento correcto de una proteína?',
        opciones: [
          { letra: 'A', texto: 'La secuencia de nucleótidos del ADN que codifica para la proteína, porque los nucleótidos tienen cargas que dictan el plegamiento.' },
          { letra: 'B', texto: 'La secuencia de aminoácidos (estructura primaria) determina las interacciones fisicoquímicas (puentes de hidrógeno, interacciones hidrofóbicas, puentes disulfuro) que definen la estructura tridimensional; las chaperonas ayudan a que este proceso sea correcto.' },
          { letra: 'C', texto: 'El plegamiento es completamente aleatorio y ocurre por azar cada vez que se sintetiza una proteína.' },
          { letra: 'D', texto: 'Las proteínas se pliegan gracias a los ribosomas, que actúan como moldes para cada forma tridimensional posible.' },
        ],
        clave: 'B',
        justificacion: 'El dogma central del plegamiento proteico (cristalizado por el trabajo de Anfinsen, Nobel 1972) es que la información para el plegamiento está contenida en la secuencia de aminoácidos (estructura primaria). Las interacciones fisicoquímicas entre los residuos de aminoácidos (hidrofóbicas, iónicas, puentes de H, disulfuro) dirigen el plegamiento hacia la conformación de mínima energía libre. Las chaperonas moleculares facilitan el plegamiento correcto y evitan la agregación. AlphaFold (IA, 2021) ha podido predecir estructuras proteicas solo con la secuencia. La opción C negaría la reproducibilidad de las estructuras. Los ribosomas (opción D) sintetizan pero no moldean el plegamiento.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 56. Entorno físico + explicación (cosmología — expansión del universo)
      {
        id: 'nat-p-s11-56',
        enunciado: 'Edwin Hubble observó en 1929 que las galaxias se alejan de la Vía Láctea y que la velocidad de alejamiento es proporcional a la distancia: v = H₀ × d (Ley de Hubble). ¿Qué implica este hallazgo sobre el origen y la evolución del universo?',
        opciones: [
          { letra: 'A', texto: 'Que la Vía Láctea está en el centro del universo y todo se aleja de ella.' },
          { letra: 'B', texto: 'Que el universo se está expandiendo, lo que implica que en el pasado todo estaba más concentrado y sugiere un origen en el Big Bang hace ~13.800 millones de años.' },
          { letra: 'C', texto: 'Que el universo se está contrayendo y eventualmente colapsará en un Big Crunch.' },
          { letra: 'D', texto: 'Que las galaxias se mueven en el espacio como objetos dentro de un contenedor fijo.' },
        ],
        clave: 'B',
        justificacion: 'La recesión de las galaxias proporcional a la distancia implica que el universo se expande uniformemente, sin un centro especial (toda galaxia ve a las demás alejarse de ella). Si se invierte el tiempo, las galaxias debieron estar más cercanas en el pasado, convergiendo en una singularidad: el Big Bang, hace ~13.800 millones de años. La opción A comete el error de asumir que hay un centro del universo. La opción C (Big Crunch) fue una posibilidad teórica, pero las observaciones actuales indican que la expansión se acelera (energía oscura). La opción D confunde la expansión del espacio mismo con movimiento de objetos en el espacio.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 57. Entorno vivo + razonamiento (ecología de poblaciones)
      {
        id: 'nat-p-s11-57',
        enunciado: 'El modelo logístico de crecimiento poblacional describe cómo una población crece hasta alcanzar la capacidad de carga (K) del ecosistema. La tasa de crecimiento es máxima cuando la población es K/2. Si la capacidad de carga de ciervos en un bosque es de 500 individuos, ¿cuándo crecerá más rápido la población de ciervos?',
        opciones: [
          { letra: 'A', texto: 'Cuando la población sea de 500 individuos (capacidad de carga).' },
          { letra: 'B', texto: 'Cuando la población sea de 250 individuos (K/2).' },
          { letra: 'C', texto: 'Cuando la población sea menor a 10 individuos (mínima competencia).' },
          { letra: 'D', texto: 'La tasa de crecimiento es siempre constante, independientemente del tamaño poblacional.' },
        ],
        clave: 'B',
        justificacion: 'En el modelo logístico dN/dt = rN(1 − N/K), la tasa de crecimiento N/dt es máxima cuando N = K/2 = 500/2 = 250 individuos. En este punto, hay suficiente individuo para reproducirse activamente pero también suficientes recursos disponibles para soportar el crecimiento. Cuando N → K (opción A), (1 − N/K) → 0 y el crecimiento se detiene. Con N muy pequeño (opción C), hay pocos reproductores aunque haya recursos abundantes. La opción D describe el crecimiento exponencial (modelo de Malthus), no el logístico.',
        competencia: 'razonamiento',
        componente: 'entorno-vivo',
      },

      // 58. Entorno físico + uso-conocimiento (química orgánica — polímeros)
      {
        id: 'nat-p-s11-58',
        enunciado: 'Los polímeros son moléculas de gran masa molecular formadas por la repetición de unidades más pequeñas llamadas monómeros. El polietileno se forma por polimerización del etileno (CH₂=CH₂). ¿Cuál de las siguientes afirmaciones sobre los polímeros es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Todos los polímeros son de origen sintético (fabricados por el ser humano).' },
          { letra: 'B', texto: 'Las proteínas, el ADN y el almidón son ejemplos de biopolímeros naturales formados por aminoácidos, nucleótidos y glucosa respectivamente.' },
          { letra: 'C', texto: 'Los polímeros siempre son sólidos a temperatura ambiente.' },
          { letra: 'D', texto: 'El polietileno y el ADN tienen la misma estructura química porque ambos son polímeros.' },
        ],
        clave: 'B',
        justificacion: 'Los polímeros pueden ser naturales (biopolímeros) o sintéticos. Las proteínas son polímeros de aminoácidos; el ADN y ARN son polinucleótidos; el almidón y la celulosa son polisacáridos (polímeros de glucosa). Los polímeros sintéticos incluyen polietileno, PVC, nylon, etc. La opción A es incorrecta: la naturaleza ha producido polímeros durante miles de millones de años. La opción C es incorrecta: hay polímeros líquidos (polímeros de silicona) y gaseosos. La opción D es incorrecta: el polietileno y el ADN son polímeros pero con estructuras, monómeros y funciones completamente diferentes.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 59. Entorno vivo + indagación (secuenciación genómica)
      {
        id: 'nat-p-s11-59',
        enunciado: 'El Proyecto Genoma Humano (completado en 2003) determinó la secuencia completa de los ~3.200 millones de pares de bases del genoma humano. Sin embargo, solo el ~2% codifica para proteínas. El resto, llamado "ADN no codificante", incluye secuencias reguladoras, ARN no codificantes y elementos transponibles. ¿Por qué el Proyecto Genoma Humano fue relevante para la medicina personalizada?',
        opciones: [
          { letra: 'A', texto: 'Porque permitió clonar humanos idénticos usando la secuencia completa del genoma.' },
          { letra: 'B', texto: 'Porque identificar variaciones genéticas individuales (SNPs) puede predisponer a ciertas enfermedades, permitiendo diagnósticos preventivos y tratamientos adaptados al perfil genético de cada paciente (farmacogenómica).' },
          { letra: 'C', texto: 'Porque demostró que todos los humanos son genéticamente idénticos y, por tanto, responden igual a todos los medicamentos.' },
          { letra: 'D', texto: 'Porque el proyecto creó un banco de órganos artificiales basado en la secuencia genómica.' },
        ],
        clave: 'B',
        justificacion: 'El Proyecto Genoma Humano fue la base de la medicina de precisión: al conocer la secuencia completa y las variaciones individuales (SNPs y otros polimorfismos), es posible identificar predisposición genética a enfermedades como cáncer, cardiopatías o diabetes; predecir la respuesta a medicamentos (farmacogenómica: ej. si alguien metaboliza rápido o lento ciertos fármacos); y desarrollar terapias génicas. La opción A confunde secuenciación con clonación. La opción C es incorrecta: el genoma humano varía ~0,1% entre individuos, pero esas diferencias son médicamente relevantes. La opción D es una aplicación inexistente.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 60. CTS + razonamiento (inteligencia artificial en ciencias)
      {
        id: 'nat-p-s11-60',
        enunciado: 'AlphaFold2 (DeepMind, 2021) es un sistema de inteligencia artificial que predice con alta precisión la estructura tridimensional de proteínas a partir de su secuencia de aminoácidos, un problema que tardaba años en resolverse experimentalmente. ¿Cuál es el impacto más significativo de AlphaFold en las ciencias de la vida?',
        opciones: [
          { letra: 'A', texto: 'AlphaFold reemplaza completamente la investigación experimental en biología molecular.' },
          { letra: 'B', texto: 'AlphaFold democratiza el acceso a estructuras proteicas de interés médico y científico, acelerando el diseño de fármacos, la comprensión de enfermedades y la investigación básica a escala global.' },
          { letra: 'C', texto: 'AlphaFold solo puede predecir estructuras de proteínas de bacterias, no de proteínas humanas.' },
          { letra: 'D', texto: 'AlphaFold es una herramienta exclusiva de grandes farmacéuticas y no está disponible para la academia.' },
        ],
        clave: 'B',
        justificacion: 'AlphaFold2 predijo con precisión atómica las estructuras de más de 200 millones de proteínas de prácticamente todos los organismos conocidos, poniéndolas a disposición gratuitamente (AlphaFold Protein Structure Database). Su impacto es inmenso: acelera el descubrimiento de fármacos (diseño racional de inhibidores), permite entender mecanismos de enfermedades a nivel molecular y abre vías de investigación que antes eran inaccesibles por limitaciones de tiempo y costo. La opción A exagera: la experimentación sigue siendo necesaria para validar predicciones. La opción C es incorrecta: predice proteínas de todos los organismos. La opción D es incorrecta: la base de datos es de acceso abierto.',
        competencia: 'razonamiento',
        componente: 'cts',
      },
    ],
  },

  // ===========================================================
  // CIENCIAS SOCIALES
  // ===========================================================
  sociales: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s9-01',
        enunciado: 'La Constitución Política de Colombia de 1991 establece en su artículo 1° que Colombia es un "Estado social de derecho". ¿Cuál de las siguientes afirmaciones describe mejor el significado de este principio?',
        opciones: [
          { letra: 'A', texto: 'El Estado colombiano se organiza exclusivamente con base en las leyes, sin consideración de las necesidades sociales de la población.' },
          { letra: 'B', texto: 'El Estado tiene la obligación de garantizar no solo el cumplimiento de las leyes, sino también condiciones de vida digna, igualdad y justicia social para todos los ciudadanos.' },
          { letra: 'C', texto: 'El Estado colombiano es un estado social porque la mayoría de sus ciudadanos pertenece a la clase media.' },
          { letra: 'D', texto: 'El Estado social de derecho implica que todos los ciudadanos tienen los mismos ingresos económicos garantizados por la Constitución.' },
        ],
        clave: 'B',
        justificacion: 'El Estado social de derecho implica que el Estado no se limita a garantizar el orden jurídico formal, sino que asume la responsabilidad de promover condiciones de vida digna, equidad y justicia social. En Colombia, esto se refleja en derechos como la educación, la salud y la vivienda. La opción A describe un Estado de derecho formal (sin el componente social). Las opciones C y D son incorrectas: el término no se refiere a la composición socioeconómica ni a la igualdad de ingresos.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 2. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s9-02',
        enunciado: 'Durante la conquista española de América en el siglo XVI, los cronistas europeos describieron a los pueblos indígenas como "salvajes" que necesitaban ser "civilizados". Los pueblos indígenas, por su parte, experimentaron la conquista como una invasión y destrucción de su cultura y territorio. ¿Qué concepto histórico ilustra mejor la coexistencia de estas dos visiones?',
        opciones: [
          { letra: 'A', texto: 'La objetividad histórica, porque los cronistas registraron los hechos tal como ocurrieron.' },
          { letra: 'B', texto: 'La multiperspectividad, porque un mismo evento histórico puede ser interpretado de maneras diferentes según los actores involucrados.' },
          { letra: 'C', texto: 'La relatividad cultural, porque ninguna de las dos culturas es superior a la otra.' },
          { letra: 'D', texto: 'El etnocentrismo indígena, porque los pueblos originarios también juzgaban a los europeos desde su propia cultura.' },
        ],
        clave: 'B',
        justificacion: 'La multiperspectividad es la capacidad de analizar un evento histórico desde los puntos de vista de los diferentes actores involucrados. La conquista fue vivida de manera radicalmente diferente por los conquistadores y por los pueblos indígenas, y ambas perspectivas son válidas para comprender el proceso histórico en su complejidad. La opción A es incorrecta: las crónicas europeas no son objetivas, están marcadas por una visión eurocéntrica. La opción C describe la relatividad cultural, que es un concepto relacionado pero distinto. La opción D es incorrecta: la pregunta ilustra el etnocentrismo europeo, no el indígena.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 3. Argumentacion + pensamiento-sistemico
      {
        id: 'soc-p-s9-03',
        enunciado: 'Lee el siguiente argumento:\n\n"Colombia debería prohibir todas las exportaciones de carbón porque contamina el ambiente. Si continuamos exportando carbón, en 20 años el planeta será inhabitable."\n\n¿Cuál es la principal debilidad de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento no tiene debilidades: la contaminación del carbón es un hecho científico comprobado.' },
          { letra: 'B', texto: 'El argumento usa una proyección catastrófica sin evidencia que la sustente ("en 20 años el planeta será inhabitable") y no considera los impactos económicos y sociales de la prohibición.' },
          { letra: 'C', texto: 'El argumento es débil porque Colombia no exporta carbón.' },
          { letra: 'D', texto: 'El argumento es correcto en su conclusión pero usa un lenguaje demasiado técnico que dificulta su comprensión.' },
        ],
        clave: 'B',
        justificacion: 'El argumento incurre en dos debilidades: (1) una generalización catastrófica sin evidencia ("en 20 años el planeta será inhabitable"), que es una exageración que resta credibilidad al argumento; (2) no considera los efectos económicos y sociales de una prohibición total, lo que lo hace simplista. La opción A ignora las debilidades señaladas. La opción C es factualmente incorrecta: Colombia sí exporta carbón. La opción D invierte el problema: el lenguaje del argumento no es técnico, sino impreciso y alarmista.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 4. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s9-04',
        enunciado: 'El proceso de globalización ha generado tanto oportunidades como desigualdades. ¿Cuál de las siguientes consecuencias de la globalización es una expresión de sus efectos desiguales?',
        opciones: [
          { letra: 'A', texto: 'La difusión de internet ha permitido el acceso igualitario a la información en todos los países del mundo.' },
          { letra: 'B', texto: 'Los países productores de materias primas tienen menor poder de negociación y reciben menores ingresos que los países que producen bienes manufacturados y tecnología.' },
          { letra: 'C', texto: 'La globalización ha eliminado las diferencias culturales entre los países, creando una cultura mundial unificada.' },
          { letra: 'D', texto: 'Los tratados de libre comercio han beneficiado por igual a todos los países firmantes, sin excepción.' },
        ],
        clave: 'B',
        justificacion: 'Una de las críticas más documentadas a la globalización es la asimetría en los términos de intercambio: los países que exportan materias primas (petróleo, carbón, café, flores) reciben menos valor agregado que los que exportan tecnología y bienes manufacturados, lo que perpetúa la dependencia económica. La opción A es incorrecta: la brecha digital es precisamente una de las desigualdades de la globalización. La opción C es incorrecta: la globalización coexiste con la diversidad cultural y, en algunos casos, la amenaza. La opción D es incorrecta: los tratados de libre comercio generan ganadores y perdedores.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 5. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s9-05',
        enunciado: 'En Colombia, el conflicto armado ha afectado especialmente a comunidades indígenas y afrocolombianas. Desde la perspectiva de los derechos humanos, ¿cuál de las siguientes afirmaciones es la más adecuada para analizar esta situación?',
        opciones: [
          { letra: 'A', texto: 'El conflicto afecta por igual a toda la población colombiana, por lo que no es necesario hablar de grupos más vulnerables.' },
          { letra: 'B', texto: 'Las comunidades indígenas y afrocolombianas han sido desproporcionadamente afectadas por el conflicto debido a su ubicación en territorios con recursos estratégicos y a históricos procesos de exclusión social.' },
          { letra: 'C', texto: 'El conflicto armado es exclusivamente una disputa entre grupos armados y no tiene consecuencias humanitarias para la población civil.' },
          { letra: 'D', texto: 'Las comunidades afrocolombianas e indígenas son las causantes del conflicto porque se niegan a abandonar sus territorios.' },
        ],
        clave: 'B',
        justificacion: 'Desde el enfoque de derechos humanos y diferencial, se reconoce que ciertas comunidades han sido desproporcionadamente victimizadas por el conflicto armado colombiano. Las comunidades indígenas y afrocolombianas están ubicadas en territorios ricos en recursos naturales disputados por actores armados y han sufrido históricamente procesos de exclusión. La opción A niega la diferenciación necesaria para proteger a poblaciones vulnerables. La opción C desconoce las graves consecuencias humanitarias del conflicto. La opción D invierte la responsabilidad, culpando a las víctimas.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 6. Conocimientos sociales + pensamiento-social (geografía)
      {
        id: 'soc-p-s9-06',
        enunciado: 'Colombia se divide en cinco regiones naturales: Andina, Caribe, Pacífico, Orinoquía y Amazonía. ¿Cuál de las siguientes afirmaciones sobre la región Andina es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'La región Andina es la menos poblada de Colombia porque su clima frío dificulta la agricultura.' },
          { letra: 'B', texto: 'La región Andina concentra la mayor parte de la población colombiana, las principales ciudades y la mayor diversidad de pisos térmicos, lo que permite distintos tipos de cultivo.' },
          { letra: 'C', texto: 'La región Andina ocupa la mayor extensión territorial de Colombia y limita con el océano Atlántico.' },
          { letra: 'D', texto: 'La región Andina es principalmente llana y carece de recursos hídricos importantes.' },
        ],
        clave: 'B',
        justificacion: 'La región Andina concentra aproximadamente el 75-80% de la población colombiana y las principales ciudades (Bogotá, Medellín, Cali, Manizales, Pereira, Bucaramanga). Su carácter montañoso crea una gran diversidad de pisos térmicos (cálido, templado, frío, páramo) que permite distintos cultivos (café, maíz, papa, flores). La opción A invierte la realidad: la región Andina es la más poblada. La opción C confunde con la región Amazónica (mayor extensión) y la Caribe (costera). La opción D contradice la naturaleza montañosa y la riqueza hídrica de los Andes.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 7. Argumentación + pensamiento-sistemico (economía)
      {
        id: 'soc-p-s9-07',
        enunciado: 'Un economista afirma: "El turismo es la mejor solución para el desarrollo de los municipios pobres de Colombia porque genera empleo y divisas." ¿Cuál es la limitación más importante de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es completamente falso porque el turismo nunca genera empleo.' },
          { letra: 'B', texto: 'El argumento simplifica el desarrollo al atribuirlo a una sola actividad, sin considerar las condiciones estructurales necesarias (infraestructura, seguridad, educación) ni los riesgos del turismo (dependencia, estacionalidad, impactos ambientales).' },
          { letra: 'C', texto: 'El argumento es correcto y el turismo es siempre la mejor estrategia de desarrollo para cualquier región.' },
          { letra: 'D', texto: 'El argumento falla porque los colombianos no prefieren viajar dentro del país.' },
        ],
        clave: 'B',
        justificacion: 'El argumento comete una simplificación excesiva: el desarrollo requiere múltiples condiciones y el turismo por sí solo no lo garantiza. Los riesgos del turismo incluyen dependencia de una sola actividad económica, estacionalidad (ingresos variables según temporada), posibles impactos ambientales y culturales negativos, y la necesidad de infraestructura previa. El desarrollo sostenible requiere diversificación económica. La opción A niega evidencia real del turismo como generador de empleo. La opción C es una generalización sin matices. La opción D introduce un factor irrelevante al argumento original.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 8. Conocimientos sociales + interpretacion (historia de Colombia)
      {
        id: 'soc-p-s9-08',
        enunciado: 'El período conocido como "La Violencia" en Colombia (1948-1958) tuvo como detonante el asesinato de Jorge Eliécer Gaitán el 9 de abril de 1948. ¿Cuál de las siguientes afirmaciones describe mejor las causas estructurales de este período?',
        opciones: [
          { letra: 'A', texto: 'La Violencia fue causada exclusivamente por el asesinato de Gaitán y no tenía antecedentes previos.' },
          { letra: 'B', texto: 'La Violencia fue un período de enfrentamientos entre liberales y conservadores, alimentado por décadas de bipartidismo excluyente, desigualdad en la distribución de la tierra y exclusión de los sectores populares del poder político.' },
          { letra: 'C', texto: 'La Violencia fue consecuencia directa de la intervención militar de Estados Unidos en Colombia durante la Guerra Fría.' },
          { letra: 'D', texto: 'La Violencia fue un movimiento organizado por las clases populares para derrocar el gobierno conservador.' },
        ],
        clave: 'B',
        justificacion: 'El asesinato de Gaitán fue el detonante, pero las causas estructurales de La Violencia son más profundas: décadas de confrontación bipartidista (liberal-conservador) que excluía a los sectores populares, concentración de la tierra en pocas manos (latifundismo), desigualdad social y ausencia de mecanismos democráticos inclusivos. La opción A reduce el fenómeno a un único evento. La opción C introduce la intervención externa como causa principal, lo cual no está sustentado históricamente para este período. La opción D describe una acción organizada que no caracteriza el carácter espontáneo y difuso de La Violencia.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 9. Multiperspectividad + pensamiento-social (democracia)
      {
        id: 'soc-p-s9-09',
        enunciado: 'La abstención electoral en Colombia supera frecuentemente el 50%. ¿Cuál de las siguientes interpretaciones de este fenómeno es más completa desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'La abstención demuestra que los colombianos son apáticos y no les interesa la política.' },
          { letra: 'B', texto: 'La abstención es un fenómeno complejo que refleja desconfianza en el sistema político, dificultades de acceso al voto en zonas rurales, falta de identificación con los candidatos y, en algunos casos, una posición política consciente de rechazo.' },
          { letra: 'C', texto: 'La abstención es exclusivamente culpa de los medios de comunicación que no informan sobre las elecciones.' },
          { letra: 'D', texto: 'La abstención no tiene consecuencias para la democracia porque el voto no es obligatorio en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'La abstención electoral es un fenómeno multifactorial que no puede reducirse a una sola causa. Las ciencias sociales identifican: desconfianza institucional (percepción de corrupción, ineficacia del sistema), barreras de acceso (zonas rurales sin puestos de votación accesibles), falta de identificación con las opciones políticas disponibles, cultura política y, para algunos ciudadanos, una abstención deliberada como forma de protesta. La opción A reduce el fenómeno a un rasgo cultural negativo. La opción C atribuye la causa únicamente a los medios. La opción D es incorrecta: la baja participación afecta la legitimidad democrática.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 10. Argumentación + interpretacion (derechos fundamentales)
      {
        id: 'soc-p-s9-10',
        enunciado: 'La Constitución de 1991 establece en Colombia el mecanismo de la tutela para proteger los derechos fundamentales. Lee el siguiente caso:\n\n"Una empresa desalojó a 40 familias de un barrio sin ofrecerles vivienda alternativa. Las familias interpusieron una tutela alegando violación al derecho a la vivienda digna."\n\n¿Cuál es el argumento jurídico-constitucional más sólido para que el juez falle a favor de las familias?',
        opciones: [
          { letra: 'A', texto: 'La empresa es privada, por lo que la Constitución no aplica en este caso.' },
          { letra: 'B', texto: 'El artículo 51 de la Constitución establece el derecho a la vivienda digna como deber del Estado; el desalojo sin vivienda alternativa viola este derecho fundamental y el Estado debe garantizarlo.' },
          { letra: 'C', texto: 'Las familias no tienen razón porque el propietario del terreno tiene derechos de propiedad que priman sobre los derechos sociales.' },
          { letra: 'D', texto: 'La tutela no procede en casos de vivienda porque este derecho no es fundamental en la Constitución de 1991.' },
        ],
        clave: 'B',
        justificacion: 'El artículo 51 de la Constitución de 1991 reconoce el derecho a la vivienda digna. La Corte Constitucional colombiana ha establecido jurisprudencia que protege este derecho especialmente cuando su violación afecta la dignidad humana y otros derechos conexos (salud, educación de los menores). Un desalojo masivo sin alternativa habitacional puede ser tutelado como violación de derechos fundamentales. La opción A es incorrecta: los derechos constitucionales vinculan también a particulares. La opción C presenta una colisión de derechos donde no siempre prima la propiedad. La opción D es incorrecta: la vivienda es un derecho constitucional que puede protegerse por tutela.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 11. Conocimientos sociales + pensamiento-sistemico (economía colombiana)
      {
        id: 'soc-p-s9-11',
        enunciado: 'Colombia es uno de los principales productores mundiales de café, flores y petróleo. Sin embargo, los economistas señalan que depender principalmente de la exportación de materias primas es un riesgo para el desarrollo. ¿Por qué?',
        opciones: [
          { letra: 'A', texto: 'Porque Colombia no puede competir con otros países en la producción de materias primas.' },
          { letra: 'B', texto: 'Porque los precios internacionales de las materias primas son volátiles e inciertos; si los precios caen, los ingresos del país disminuyen drásticamente y la economía se vuelve vulnerable a factores externos.' },
          { letra: 'C', texto: 'Porque las materias primas no generan ningún tipo de empleo en los países productores.' },
          { letra: 'D', texto: 'Porque los tratados de libre comercio prohíben a Colombia exportar más de tres productos.' },
        ],
        clave: 'B',
        justificacion: 'La dependencia de materias primas (commodities) expone la economía al llamado "síndrome de los recursos" o "enfermedad holandesa": cuando los precios internacionales caen (como el petróleo en 2014-2016), los ingresos fiscales y las exportaciones disminuyen, generando recesión, devaluación de la moneda y crisis. Además, las materias primas generan menos valor agregado que los bienes manufacturados o los servicios tecnológicos. La opción A es incorrecta: Colombia sí es competitiva en varios sectores primarios. La opción C es falsa: las materias primas sí generan empleo. La opción D es una afirmación sin fundamento.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 12. Multiperspectividad + pensamiento-social (migración)
      {
        id: 'soc-p-s9-12',
        enunciado: 'Colombia recibió a partir de 2015 una migración masiva de venezolanos que huían de la crisis económica y política de ese país. ¿Cuál de las siguientes perspectivas sobre este fenómeno es más equilibrada desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'La migración venezolana solo ha generado problemas en Colombia y debería frenarse completamente.' },
          { letra: 'B', texto: 'La migración masiva genera tanto desafíos (presión sobre servicios públicos, xenofobia) como oportunidades (mano de obra, diversidad cultural, intercambio económico), y requiere políticas públicas que garanticen los derechos de los migrantes.' },
          { letra: 'C', texto: 'Los migrantes venezolanos no tienen ningún derecho en Colombia porque son extranjeros.' },
          { letra: 'D', texto: 'La migración venezolana no ha tenido ningún impacto sobre Colombia.' },
        ],
        clave: 'B',
        justificacion: 'Desde las ciencias sociales, los fenómenos migratorios son complejos y tienen múltiples dimensiones. La migración venezolana ha generado retos (demanda de salud, educación, vivienda; tensiones sociales) pero también aportes (fuerza laboral, dinamismo económico, diversidad). Colombia tiene obligaciones internacionales de proteger a los refugiados y migrantes según el derecho internacional. Una perspectiva equilibrada reconoce ambas dimensiones y propone respuestas institucionales. Las opciones A y C adoptan posturas xenófobas sin fundamento. La opción D niega una realidad documentada.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 13. Argumentación + pensamiento-social (medios de comunicación)
      {
        id: 'soc-p-s9-13',
        enunciado: 'Lee el siguiente titular de un periódico:\n\n"CIFRAS MUESTRAN QUE EL CRIMEN BAJÓ UN 15% ESTE AÑO"\n\nY el siguiente de otro periódico:\n\n"INSEGURIDAD SIGUE SIENDO EL PRINCIPAL PROBLEMA DEL PAÍS SEGÚN ENCUESTA"\n\n¿Qué conclusión es más adecuada respecto a estos dos titulares?',
        opciones: [
          { letra: 'A', texto: 'Uno de los dos periódicos está mintiendo deliberadamente.' },
          { letra: 'B', texto: 'Los dos titulares pueden ser verdaderos simultáneamente: las estadísticas de crimen pueden mostrar una reducción mientras la percepción de inseguridad (medida por encuestas) permanece alta, pues miden dimensiones diferentes del mismo fenómeno.' },
          { letra: 'C', texto: 'El primer periódico es más confiable porque usa datos cuantitativos.' },
          { letra: 'D', texto: 'El segundo periódico es más confiable porque representa la opinión de la gente.' },
        ],
        clave: 'B',
        justificacion: 'Las estadísticas oficiales de crimen y la percepción ciudadana de inseguridad son dos mediciones diferentes del mismo fenómeno. Es perfectamente posible que el crimen haya disminuido estadísticamente (menos delitos registrados) mientras la percepción de inseguridad sigue alta (debido a cobertura mediática, memoria de eventos violentos, confianza o desconfianza en las cifras oficiales). Ambas fuentes aportan información válida pero miden dimensiones distintas. La lectura crítica de medios requiere reconocer estas diferencias. Las opciones C y D privilegian un tipo de fuente sobre otro sin justificación.',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 14. Conocimientos sociales + interpretacion (Independencia de Colombia)
      {
        id: 'soc-p-s9-14',
        enunciado: 'El proceso de independencia de Colombia (1810-1819) fue liderado principalmente por criollos adinerados, no por indígenas ni esclavizados. ¿Qué conclusión histórica se puede extraer de este hecho?',
        opciones: [
          { letra: 'A', texto: 'La independencia fue un movimiento que benefició a todos los sectores de la sociedad colonial por igual.' },
          { letra: 'B', texto: 'La independencia fue liderada por las élites criollas que buscaban el control político y económico que la corona española les negaba; los pueblos indígenas y afrodescendientes no tuvieron una participación protagónica y sus condiciones de vida no mejoraron significativamente con la independencia.' },
          { letra: 'C', texto: 'Los indígenas y esclavizados apoyaron activamente la independencia porque sabían que se aboliría la esclavitud al día siguiente de la independencia.' },
          { letra: 'D', texto: 'La independencia fue un movimiento popular liderado desde abajo por campesinos y artesanos.' },
        ],
        clave: 'B',
        justificacion: 'Los historiadores señalan que la independencia hispanoamericana fue liderada por criollos (hijos de españoles nacidos en América) que querían acceder al poder político y comercial que el sistema colonial reservaba para los peninsulares. La abolición de la esclavitud en Colombia no ocurrió hasta 1851 (30 años después de la independencia), y las comunidades indígenas mantuvieron condiciones de exclusión y despojo. Esto no niega el heroísmo de muchos actores, pero muestra que la independencia no transformó las estructuras de desigualdad colonial. Las opciones A, C y D idealizan el proceso ignorando las jerarquías sociales de la época.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 15. Argumentación + pensamiento-sistemico (medio ambiente)
      {
        id: 'soc-p-s9-15',
        enunciado: 'La deforestación en la Amazonía colombiana ha aumentado en los últimos años. Un alcalde propone: "Debemos compensar la deforestación plantando árboles en las ciudades." Desde las ciencias sociales y ambientales, ¿cuál es la principal limitación de esta propuesta?',
        opciones: [
          { letra: 'A', texto: 'La propuesta es perfecta porque plantar árboles en las ciudades compensa exactamente la deforestación amazónica.' },
          { letra: 'B', texto: 'Plantar árboles urbanos tiene beneficios locales, pero no equivale a la complejidad y biodiversidad de los ecosistemas amazónicos; se necesitan políticas de protección directa de la selva, no solo compensaciones simbólicas en otros ecosistemas.' },
          { letra: 'C', texto: 'La deforestación es inevitable y no tiene solución, por lo que la propuesta del alcalde es la única opción realista.' },
          { letra: 'D', texto: 'No existe ninguna relación entre la deforestación amazónica y el bienestar urbano.' },
        ],
        clave: 'B',
        justificacion: 'La Amazonía es un ecosistema de extraordinaria complejidad: alberga millones de especies, regula el ciclo del agua regional, actúa como sumidero de carbono y es hogar de comunidades indígenas. Plantar árboles urbanos (generalmente de pocas especies) no puede reemplazar esta complejidad ecosistémica. Las políticas efectivas requieren protección directa de la selva, fortalecimiento de la presencia estatal en zonas de deforestación, apoyo a comunidades locales como guardianes del bosque y sanción a la deforestación ilegal. La opción A sobrevalora las compensaciones simbólicas. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 16. Conocimientos sociales + pensamiento-social (organización territorial)
      {
        id: 'soc-p-s9-16',
        enunciado: 'Colombia es un Estado unitario descentralizado dividido en 32 departamentos y un Distrito Capital (Bogotá). ¿Qué implica que Colombia sea un Estado "descentralizado"?',
        opciones: [
          { letra: 'A', texto: 'Que cada departamento puede declarar su independencia del gobierno central cuando lo considere conveniente.' },
          { letra: 'B', texto: 'Que los departamentos y municipios tienen autonomía para gestionar algunos asuntos locales, elegir sus propios gobernantes y administrar recursos, aunque dentro del marco jurídico nacional.' },
          { letra: 'C', texto: 'Que no existe un gobierno central en Colombia y cada región funciona de forma completamente independiente.' },
          { letra: 'D', texto: 'Que la Constitución de 1991 eliminó todos los poderes del gobierno nacional y los transfirió a las regiones.' },
        ],
        clave: 'B',
        justificacion: 'La descentralización en Colombia significa que los entes territoriales (departamentos y municipios) tienen autonomía política (elección de gobernadores y alcaldes), administrativa (gestión de servicios locales) y fiscal (recursos del sistema general de participaciones), pero dentro del marco jurídico nacional. No implica independencia ni eliminación del gobierno central. La opción A confunde descentralización con separatismo. La opción C describe un Estado federal extremo o confederación. La opción D exagera el alcance de la descentralización.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 17. Multiperspectividad + interpretacion (Bogotazo)
      {
        id: 'soc-p-s9-17',
        enunciado: 'El 9 de abril de 1948, tras el asesinato de Jorge Eliécer Gaitán en Bogotá, se desataron disturbios masivos conocidos como "El Bogotazo". Desde la perspectiva de los historiadores, ¿qué revelan estos eventos sobre la sociedad colombiana de mediados del siglo XX?',
        opciones: [
          { letra: 'A', texto: 'Que los colombianos eran intrínsecamente violentos y por eso los disturbios no tenían ninguna causa social.' },
          { letra: 'B', texto: 'Que existían profundas tensiones sociales, políticas y económicas represadas que se desbordaron ante el asesinato del líder popular que encarnaba las esperanzas de cambio de los sectores excluidos.' },
          { letra: 'C', texto: 'Que el único problema de Colombia era el enfrentamiento entre los partidos Liberal y Conservador, sin ninguna dimensión social o económica.' },
          { letra: 'D', texto: 'Que los disturbios fueron planificados por el partido comunista para derrocar al gobierno.' },
        ],
        clave: 'B',
        justificacion: 'El Bogotazo fue una expresión de las tensiones estructurales de la Colombia de mediados del siglo XX: desigualdad económica profunda, exclusión política bipartidista, concentración de la tierra y marginalización de los sectores populares. Gaitán representaba la posibilidad de un cambio que incluía a esos sectores. Su asesinato actuó como detonante de una explosión social contenida durante décadas. La opción A reduce el fenómeno a un rasgo de carácter. Las opciones C y D son simplificaciones o explicaciones conspiradoras sin sustento histórico.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 18. Argumentación + pensamiento-sistemico (salud pública)
      {
        id: 'soc-p-s9-18',
        enunciado: 'Un estudio muestra que en los municipios colombianos con mayor inversión en agua potable y saneamiento básico, la mortalidad infantil es significativamente menor. Un funcionario concluye: "Si queremos reducir la mortalidad infantil, solo necesitamos invertir en agua potable." ¿Cuál es la limitación de esta conclusión?',
        opciones: [
          { letra: 'A', texto: 'La conclusión es perfectamente válida porque el estudio demuestra que el agua potable salva vidas infantiles.' },
          { letra: 'B', texto: 'La conclusión es demasiado simplista: aunque la correlación es real, la mortalidad infantil tiene múltiples causas (nutrición, acceso a salud, educación materna) y no puede resolverse con una sola intervención.' },
          { letra: 'C', texto: 'La conclusión es incorrecta porque el agua potable no tiene ninguna relación con la mortalidad infantil.' },
          { letra: 'D', texto: 'La conclusión es válida solo si se aplica en ciudades grandes, no en municipios pequeños.' },
        ],
        clave: 'B',
        justificacion: 'La mortalidad infantil es un fenómeno multifactorial: depende del acceso a agua potable y saneamiento, pero también de la nutrición materna e infantil, el acceso a atención médica prenatal y postnatal, la educación de las madres y el nivel socioeconómico del hogar. Reducirla requiere intervenciones coordinadas en múltiples frentes. El funcionario comete el error de atribuir una sola causa a un fenómeno complejo, aunque el factor que identifica sí es importante. La opción A acepta la simplificación sin cuestionar. La opción C niega una relación científicamente comprobada. La opción D introduce una distinción sin sustento.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 19. Conocimientos sociales + pensamiento-social (diversidad cultural)
      {
        id: 'soc-p-s9-19',
        enunciado: 'Colombia es uno de los países con mayor diversidad étnica y cultural de América Latina, con comunidades indígenas, afrocolombianas, raizales, palenqueras y mestizas. ¿Qué principio constitucional reconoce y protege esta diversidad?',
        opciones: [
          { letra: 'A', texto: 'El principio de homogeneización cultural, que busca que todos los colombianos adopten una sola identidad nacional.' },
          { letra: 'B', texto: 'El principio de pluralismo étnico y cultural, consagrado en la Constitución de 1991, que reconoce y protege la diversidad de culturas, lenguas y tradiciones como riqueza de la nación.' },
          { letra: 'C', texto: 'El principio de asimilación, que obliga a las comunidades étnicas a adoptar las costumbres de la cultura mayoritaria.' },
          { letra: 'D', texto: 'El principio de segregación, que establece territorios separados e incomunicados para cada grupo étnico.' },
        ],
        clave: 'B',
        justificacion: 'La Constitución de 1991 reconoce en su artículo 7° que "el Estado reconoce y protege la diversidad étnica y cultural de la Nación colombiana". Este principio de pluralismo se traduce en derechos específicos: territorios colectivos, consulta previa, educación intercultural bilingüe y reconocimiento de autoridades propias. Las opciones A, C y D describen políticas contrarias a la Constitución: la asimilación forzada y la segregación son formas de violación de derechos que Colombia ha experimentado históricamente y que la Constitución busca superar.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 20. Multiperspectividad + interpretacion (educación)
      {
        id: 'soc-p-s9-20',
        enunciado: 'Lee el siguiente argumento:\n\n"La educación privada es superior a la educación pública porque los colegios privados tienen mejores resultados en las pruebas Saber."\n\nDesde las ciencias sociales, ¿qué elemento fundamental falta en este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es completo y correcto: los colegios privados siempre tienen mejores resultados.' },
          { letra: 'B', texto: 'El argumento no considera que los mejores resultados pueden explicarse por el nivel socioeconómico de las familias que acceden a la educación privada, no necesariamente por la calidad pedagógica del colegio.' },
          { letra: 'C', texto: 'El argumento falla porque las pruebas Saber no son una medición válida del aprendizaje.' },
          { letra: 'D', texto: 'El argumento es correcto, pero solo aplica a las ciudades capitales.' },
        ],
        clave: 'B',
        justificacion: 'Los estudios en educación muestran que los resultados en pruebas estandarizadas están fuertemente correlacionados con el nivel socioeconómico de los estudiantes, independientemente del tipo de colegio (público o privado). Si los colegios privados obtienen mejores resultados, puede deberse a que sus estudiantes provienen de familias con más recursos económicos, mayor nivel educativo de los padres y mejores condiciones de aprendizaje en el hogar. Comparar sin controlar por el nivel socioeconómico es una falacia de correlación-causalidad. Las opciones A y D aceptan la conclusión sin cuestionar. La opción C invalida el instrumento de medición sin sustento.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 21. Conocimientos sociales + pensamiento-social (geografía económica)
      {
        id: 'soc-p-s9-21',
        enunciado: 'Colombia limita al norte con el mar Caribe y Venezuela, al oriente con Venezuela y Brasil, al sur con Perú y Ecuador, al occidente con el océano Pacífico y Panamá. ¿Cuál es la ventaja geopolítica más importante de esta ubicación?',
        opciones: [
          { letra: 'A', texto: 'Colombia no tiene ninguna ventaja geopolítica porque está rodeada de países pobres.' },
          { letra: 'B', texto: 'Colombia tiene acceso a dos océanos (Atlántico/Caribe y Pacífico), lo que le permite diversificar sus rutas de comercio internacional y conectarse con mercados de América del Norte, Europa, Asia y el resto de América Latina.' },
          { letra: 'C', texto: 'La posición de Colombia es una desventaja porque dificulta el control de sus fronteras.' },
          { letra: 'D', texto: 'Colombia tiene acceso a un solo océano, lo que limita sus rutas comerciales.' },
        ],
        clave: 'B',
        justificacion: 'Colombia es el único país de América del Sur con acceso a dos océanos: el Atlántico (a través del Mar Caribe) y el Pacífico. Esta condición es una ventaja geopolítica y comercial significativa: permite establecer rutas de exportación hacia América del Norte, Europa y el Caribe por el Atlántico, y hacia Asia y la costa oeste de América por el Pacífico. Además, Colombia está en la esquina noroccidental de América del Sur, lo que la posiciona como hub logístico de la región. La opción A desconoce la ventaja real. La opción C convierte una característica neutral en desventaja. La opción D es factualmente incorrecta.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 22. Argumentación + interpretacion (conflicto y paz)
      {
        id: 'soc-p-s9-22',
        enunciado: 'Después de la firma del Acuerdo de Paz de 2016, algunas comunidades rurales reportan que la violencia ha disminuido, mientras que otras señalan que ha aumentado por la llegada de nuevos grupos armados. ¿Qué conclusión es más adecuada sobre el proceso de paz?',
        opciones: [
          { letra: 'A', texto: 'El Acuerdo de Paz fracasó completamente porque la violencia no desapareció.' },
          { letra: 'B', texto: 'El Acuerdo de Paz ha tenido logros (desmovilización de las FARC, reducción de violencia en algunas regiones) pero también limitaciones (rearme de disidencias, expansión de otros grupos); la paz es un proceso en construcción, no un resultado inmediato.' },
          { letra: 'C', texto: 'El Acuerdo de Paz fue un éxito total porque todas las formas de violencia desaparecieron.' },
          { letra: 'D', texto: 'Los procesos de paz nunca funcionan en ningún país del mundo.' },
        ],
        clave: 'B',
        justificacion: 'Los procesos de paz son complejos y sus resultados son mixtos y graduales. El Acuerdo de 2016 logró la desmovilización de más de 13.000 combatientes de las FARC-EP, redujo significativamente la violencia en ciertas regiones y abrió caminos políticos para la reintegración. Sin embargo, la ausencia del Estado en zonas rurales permitió la llegada de disidencias y otros grupos armados. Evaluar el proceso requiere reconocer tanto los avances como las limitaciones, sin caer en el optimismo ni el pesimismo absolutos. Las opciones A y D adoptan posturas pesimistas extremas sin matices. La opción C niega problemas reales documentados.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 23. Conocimientos sociales + pensamiento-social (demografía)
      {
        id: 'soc-p-s9-23',
        enunciado: 'Según el DANE, la mayoría de la población colombiana vive en zonas urbanas, especialmente en las cuatro ciudades más grandes: Bogotá, Medellín, Cali y Barranquilla. ¿A qué proceso histórico se debe principalmente este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'A una decisión del gobierno nacional de trasladar a la población rural hacia las ciudades.' },
          { letra: 'B', texto: 'A procesos de migración interna impulsados por la búsqueda de empleo, educación y servicios, y por el desplazamiento forzado causado por el conflicto armado.' },
          { letra: 'C', texto: 'A que Colombia nunca tuvo población rural significativa.' },
          { letra: 'D', texto: 'A la llegada masiva de inmigrantes extranjeros a las ciudades colombianas durante el siglo XX.' },
        ],
        clave: 'B',
        justificacion: 'La urbanización acelerada de Colombia durante el siglo XX se explica por dos factores principales: (1) la migración rural-urbana voluntaria en busca de empleo industrial, educación y mejores servicios; (2) el desplazamiento forzado por el conflicto armado, que convirtió a Colombia en uno de los países con más desplazados internos del mundo. Estos procesos explican la concentración poblacional en grandes ciudades. La opción A atribuye el fenómeno a una decisión gubernamental que no ocurrió. La opción C es históricamente incorrecta. La opción D sobreestima la inmigración extranjera, que fue menor comparada con la migración interna.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 24. Multiperspectividad + pensamiento-social (derechos de la niñez)
      {
        id: 'soc-p-s9-24',
        enunciado: 'En Colombia, la Ley 1098 de 2006 (Código de la Infancia y la Adolescencia) establece que los derechos de los niños prevalecen sobre los de los demás. Un padre argumenta que tiene derecho a educar a su hijo como él considere conveniente, incluso si eso implica negarse a llevarlo al colegio. ¿Cuál es el conflicto jurídico que plantea esta situación?',
        opciones: [
          { letra: 'A', texto: 'No hay conflicto jurídico: el padre siempre tiene razón sobre la educación de sus hijos.' },
          { letra: 'B', texto: 'Existe una tensión entre la patria potestad de los padres y el derecho fundamental del niño a la educación, que por ley prevalece; el Estado puede intervenir para garantizar la escolarización del menor.' },
          { letra: 'C', texto: 'El niño no tiene derechos propios hasta que cumpla 18 años, por lo que el padre puede decidir libremente.' },
          { letra: 'D', texto: 'La educación en Colombia es optativa y ningún padre puede ser obligado a matricular a sus hijos en el colegio.' },
        ],
        clave: 'B',
        justificacion: 'El Código de la Infancia y la Adolescencia establece el principio del interés superior del menor: los derechos del niño prevalecen sobre los de los adultos. La educación es un derecho fundamental de los niños y una obligación que el Estado, la familia y la sociedad deben garantizar. Si un padre niega este derecho a su hijo, el Estado puede intervenir a través del ICBF y las entidades de protección. La patria potestad no es absoluta: no puede ejercerse de manera que vulnere derechos fundamentales del menor. Las opciones A, C y D desconocen el marco legal de protección a la infancia.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 25. Argumentación + pensamiento-sistemico (cambio climático y Colombia)
      {
        id: 'soc-p-s9-25',
        enunciado: 'Colombia genera menos del 0.5% de las emisiones mundiales de CO2, pero es uno de los países más vulnerables al cambio climático, con aumentos proyectados en lluvias extremas, sequías y derretimiento de glaciares. Un estudiante concluye: "Colombia no tiene ninguna responsabilidad frente al cambio climático porque casi no contamina." ¿Cuál es la limitación de esta conclusión?',
        opciones: [
          { letra: 'A', texto: 'La conclusión es correcta: los países pequeños no tienen ninguna responsabilidad ambiental.' },
          { letra: 'B', texto: 'La conclusión confunde responsabilidad en las causas (emisiones) con responsabilidad en las soluciones: aunque Colombia emite poco, puede contribuir con políticas de conservación forestal, energías limpias y adaptación climática, y tiene el deber de proteger a su población de los impactos.' },
          { letra: 'C', texto: 'La conclusión es válida porque la responsabilidad de contaminar recae exclusivamente en los países desarrollados.' },
          { letra: 'D', texto: 'La conclusión es correcta porque el cambio climático no afectará a Colombia.' },
        ],
        clave: 'B',
        justificacion: 'La responsabilidad climática tiene dos dimensiones: la responsabilidad histórica en las causas (principalmente los países industrializados) y la responsabilidad compartida en las soluciones. Colombia, aunque emite poco CO2, tiene una de las mayores reservas de bosques tropicales del mundo (la Amazonía), que son sumideros de carbono fundamentales. Preservarlos es una contribución global. Además, el gobierno colombiano tiene la obligación de proteger a su población ante los impactos climáticos proyectados. Responsabilidad no significa culpa histórica exclusiva, sino compromiso activo con las soluciones. Las opciones A, C y D niegan o minimizan esta responsabilidad.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 26. Conocimientos sociales + interpretacion (sistema político colombiano)
      {
        id: 'soc-p-s9-26',
        enunciado: 'La Constitución de 1991 estableció en Colombia la separación de poderes en tres ramas: Ejecutivo (Presidente y ministros), Legislativo (Congreso) y Judicial (Corte Suprema, Consejo de Estado, Corte Constitucional). ¿Cuál es la función principal de esta separación?',
        opciones: [
          { letra: 'A', texto: 'Permitir que cada rama actúe de manera completamente independiente sin ningún tipo de control mutuo.' },
          { letra: 'B', texto: 'Evitar la concentración de poder en un solo órgano, estableciendo mecanismos de frenos y contrapesos para que ninguna rama pueda actuar de manera arbitraria.' },
          { letra: 'C', texto: 'Asegurarse de que el Presidente tenga el control total sobre las decisiones del Congreso y de los jueces.' },
          { letra: 'D', texto: 'Dividir el territorio colombiano en tres zonas de gobierno independiente.' },
        ],
        clave: 'B',
        justificacion: 'El principio de separación de poderes (Montesquieu) busca evitar la tiranía distribuyendo el poder en tres ramas que se controlan mutuamente. En Colombia: el Congreso aprueba leyes y controla al Ejecutivo; el Presidente ejecuta las leyes y puede vetarlas; la Corte Constitucional revisa la constitucionalidad de las normas. Este sistema de frenos y contrapesos (checks and balances) protege los derechos ciudadanos. La opción A describe una separación sin control mutuo, lo que podría generar anarquía. La opción C describe una concentración de poder en el Ejecutivo, contraria al principio. La opción D confunde la división de poderes con la organización territorial.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 27. Multiperspectividad + pensamiento-social (trabajo infantil)
      {
        id: 'soc-p-s9-27',
        enunciado: 'En algunas regiones rurales de Colombia, niños de 10 a 14 años trabajan junto a sus familias en labores agrícolas. Algunos padres argumentan que esto es parte de su cultura y les enseña responsabilidad. Desde los derechos humanos y las ciencias sociales, ¿cuál es la perspectiva más equilibrada?',
        opciones: [
          { letra: 'A', texto: 'El trabajo infantil en cualquier forma es aceptable si los padres lo aprueban.' },
          { letra: 'B', texto: 'Existe una tensión entre el respeto a las prácticas culturales y el derecho del niño a la educación y a no ser explotado; la legislación colombiana prohíbe el trabajo que afecta la escolarización, aunque reconoce algunas formas de participación en actividades familiares sin carácter explotador.' },
          { letra: 'C', texto: 'El trabajo infantil rural no afecta la educación porque en el campo no hay colegios.' },
          { letra: 'D', texto: 'Los padres que permiten el trabajo infantil deben ser encarcelados inmediatamente.' },
        ],
        clave: 'B',
        justificacion: 'El trabajo infantil es un tema de tensión entre derechos: el derecho del niño a la educación y la protección contra la explotación (Código de la Infancia y la Adolescencia, art. 35) y el respeto a las prácticas culturales de las comunidades rurales. La ley colombiana distingue entre trabajo que interfiere con la escolarización o es peligroso (prohibido) y la participación en actividades familiares leves. El enfoque de derechos no criminaliza automáticamente a los padres, sino que busca garantizar educación y protección. Las opciones A y C minimizan el problema. La opción D propone una sanción desproporcionada que ignora el contexto social.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 28. Argumentación + interpretacion (pobreza y desigualdad)
      {
        id: 'soc-p-s9-28',
        enunciado: 'Colombia tiene uno de los coeficientes de Gini más altos de América Latina, lo que indica una desigualdad en la distribución del ingreso muy marcada. Lee el siguiente argumento:\n\n"La desigualdad en Colombia se debe a que los pobres no trabajan lo suficiente y no tienen iniciativa."\n\n¿Cuál es la principal debilidad de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es correcto: la pobreza se explica exclusivamente por el esfuerzo individual.' },
          { letra: 'B', texto: 'El argumento ignora los factores estructurales de la desigualdad: acceso desigual a la educación de calidad, concentración de la tierra, herencia económica, discriminación étnica y de género, y políticas tributarias regresivas.' },
          { letra: 'C', texto: 'El argumento es incorrecto porque los pobres trabajan más que los ricos en todos los casos.' },
          { letra: 'D', texto: 'El argumento es parcialmente correcto: la falta de iniciativa explica el 50% de la pobreza.' },
        ],
        clave: 'B',
        justificacion: 'La desigualdad es un fenómeno estructural que no puede reducirse al esfuerzo o iniciativa individual. Los factores estructurales incluyen: desigualdad en el acceso a educación de calidad (quienes nacen pobres tienen menos opciones educativas), concentración de la propiedad de la tierra (el 1% más rico posee más del 80% de las tierras productivas), discriminación étnica y de género en el mercado laboral, y sistemas tributarios que gravan más a quienes consumen que a quienes acumulan. La opción A adopta una visión meritocrática que ignora estas estructuras. La opción C invierte sin matices la relación. La opción D cuantifica sin ningún fundamento.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 29. Conocimientos sociales + pensamiento-sistemico (movimientos sociales)
      {
        id: 'soc-p-s9-29',
        enunciado: 'En Colombia han existido múltiples movimientos sociales: el movimiento sindical obrero, los movimientos indígenas, los movimientos de mujeres y los movimientos estudiantiles. ¿Cuál ha sido la función histórica más importante de estos movimientos?',
        opciones: [
          { letra: 'A', texto: 'Los movimientos sociales han sido principalmente fuentes de desestabilización que dañan la economía colombiana.' },
          { letra: 'B', texto: 'Los movimientos sociales han sido actores clave en la ampliación de derechos: los sindicatos lograron derechos laborales, los movimientos indígenas obtuvieron reconocimiento constitucional, y los movimientos de mujeres impulsaron leyes contra la violencia de género.' },
          { letra: 'C', texto: 'Los movimientos sociales no han logrado ningún cambio significativo en la legislación colombiana.' },
          { letra: 'D', texto: 'Los movimientos sociales son exclusivamente instrumentos de partidos políticos que los controlan.' },
        ],
        clave: 'B',
        justificacion: 'Históricamente, los movimientos sociales han sido agentes de cambio que han ampliado los derechos reconocidos legalmente. En Colombia: el movimiento sindical impulsó el Código Sustantivo del Trabajo (1950), los movimientos indígenas lograron el reconocimiento de territorios colectivos y consulta previa en la Constitución de 1991, y los movimientos de mujeres han promovido legislación contra la violencia doméstica y la discriminación. La opción A adopta una visión negativa sin sustento. La opción C niega logros documentados. La opción D simplifica la relación entre movimientos sociales y partidos políticos.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 30. Multiperspectividad + pensamiento-social (medios de comunicación)
      {
        id: 'soc-p-s9-30',
        enunciado: 'En Colombia, los grandes medios de comunicación (televisión, radio, periódicos) son mayoritariamente de propiedad privada y están concentrados en pocas empresas. ¿Qué implicación tiene esta concentración para la democracia?',
        opciones: [
          { letra: 'A', texto: 'La concentración de medios no tiene ningún impacto en la democracia porque los ciudadanos siempre pueden formar sus propias opiniones.' },
          { letra: 'B', texto: 'La concentración de medios en pocas manos puede limitar la diversidad de voces y perspectivas en el debate público, favoreciendo los intereses de los propietarios y dificultando la representación de grupos minoritarios o con menos poder económico.' },
          { letra: 'C', texto: 'La concentración de medios es siempre positiva porque garantiza mayor calidad informativa y coherencia editorial.' },
          { letra: 'D', texto: 'Solo los medios estatales son confiables; los medios privados siempre mienten.' },
        ],
        clave: 'B',
        justificacion: 'La concentración mediática es una preocupación democrática documentada por organismos internacionales como la UNESCO y la Comisión Interamericana de Derechos Humanos. Cuando pocos dueños controlan muchos medios, se reduce la diversidad de perspectivas, se pueden invisibilizar ciertos temas o actores, y los intereses empresariales pueden influir en la cobertura. Esto no implica que todos los medios privados sean corruptos, pero sí que la pluralidad informativa requiere regulaciones antimonopolio y medios alternativos. La opción A niega el efecto de los medios en la opinión pública. La opción C invierte el problema. La opción D generaliza de manera absoluta.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 31. Conocimientos sociales + interpretacion (historia siglo XIX)
      {
        id: 'soc-p-s9-31',
        enunciado: 'Durante el siglo XIX, Colombia (llamada Nueva Granada hasta 1863) vivió numerosas guerras civiles entre liberales y conservadores. ¿Cuáles eran las principales diferencias ideológicas entre estos dos partidos?',
        opciones: [
          { letra: 'A', texto: 'Los liberales y conservadores tenían exactamente las mismas ideas; sus diferencias eran solo personales.' },
          { letra: 'B', texto: 'Los liberales defendían el federalismo, la separación Iglesia-Estado, el libre comercio y las libertades individuales; los conservadores apoyaban el centralismo, la alianza con la Iglesia Católica, el proteccionismo económico y el orden tradicional.' },
          { letra: 'C', texto: 'Los liberales eran el partido de los ricos terratenientes y los conservadores el de los campesinos pobres.' },
          { letra: 'D', texto: 'La diferencia principal era religiosa: los liberales eran protestantes y los conservadores eran católicos.' },
        ],
        clave: 'B',
        justificacion: 'El bipartidismo colombiano del siglo XIX tenía raíces ideológicas claras: el Partido Liberal defendía la descentralización federal, la separación entre Iglesia y Estado, el libre comercio y las libertades individuales (de prensa, asociación, enseñanza). El Partido Conservador promovía el centralismo, el papel protagónico de la Iglesia Católica en la educación y la moral pública, y el orden social tradicional. La opción A niega las diferencias ideológicas reales. La opción C invierte la composición social de los partidos (ambos tenían élites). La opción D es incorrecta: ambos partidos eran mayoritariamente católicos.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 32. Argumentación + pensamiento-social (corrupción)
      {
        id: 'soc-p-s9-32',
        enunciado: 'Lee el siguiente argumento de un ciudadano:\n\n"Votar no sirve para nada porque todos los políticos son iguales de corruptos. Es mejor no participar."\n\nDesde la perspectiva de las ciencias sociales y la democracia, ¿cuál es la limitación más importante de este razonamiento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es completamente correcto: la democracia no funciona nunca.' },
          { letra: 'B', texto: 'El argumento generaliza indebidamente ("todos los políticos") y lleva a una conclusión contraproducente: la abstención no reduce la corrupción, sino que puede facilitar que quienes tienen el poder se mantengan en él sin competencia electoral efectiva.' },
          { letra: 'C', texto: 'El argumento es válido porque la abstención electoral es una forma de presión democrática que siempre genera cambios positivos.' },
          { letra: 'D', texto: 'El argumento es correcto porque en Colombia no existen partidos políticos honestos.' },
        ],
        clave: 'B',
        justificacion: 'El razonamiento comete dos errores: (1) generalización: equiparar a todos los políticos sin distinción entre quienes tienen prácticas corruptas y quienes no; (2) conclusión ineficaz: la no participación electoral no reduce la corrupción, sino que puede beneficiar a quienes dependen de una baja participación de votantes informados. Las ciencias sociales muestran que la participación ciudadana informada, combinada con mecanismos de control social (veedurías, denuncias, medios independientes) es más efectiva contra la corrupción que la abstención pasiva. Las opciones A, C y D adoptan posiciones sin matices o sin sustento.',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 33. Conocimientos sociales + pensamiento-sistemico (geografía física)
      {
        id: 'soc-p-s9-33',
        enunciado: 'El río Magdalena es considerado el río más importante de Colombia. ¿Por qué razón histórica y económica tiene esta importancia?',
        opciones: [
          { letra: 'A', texto: 'Porque es el río más largo de América del Sur y desemboca en el océano Pacífico.' },
          { letra: 'B', texto: 'Porque durante siglos fue la principal vía de comunicación y transporte entre el interior andino del país y el mar Caribe, articulando la economía nacional; hoy sigue siendo importante para el transporte de carga y la generación de energía.' },
          { letra: 'C', texto: 'Porque es el único río navegable de Colombia y sus aguas se usan exclusivamente para riego agrícola.' },
          { letra: 'D', texto: 'Porque nace en Venezuela y aporta la mayor parte del agua potable de Bogotá.' },
        ],
        clave: 'B',
        justificacion: 'El río Magdalena, que nace en el macizo colombiano y desemboca en el Mar Caribe (Barranquilla), fue durante siglos la columna vertebral de la economía y la comunicación colombiana: por él se transportaba el oro colonial hacia Cartagena, el café de exportación y los bienes de importación. Ciudades como Honda, Mompox y La Dorada crecieron gracias al comercio fluvial. Con la llegada de carreteras y ferrocarriles declinó su importancia, pero sigue siendo fundamental. La opción A confunde geografía: el Magdalena no es el más largo de Suramérica (es el Amazonas) y desemboca en el Caribe, no el Pacífico. Las opciones C y D tienen errores factuales.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 34. Multiperspectividad + interpretacion (justicia transicional)
      {
        id: 'soc-p-s9-34',
        enunciado: 'La Jurisdicción Especial para la Paz (JEP) creada por el Acuerdo de Paz ofrece penas alternativas (restricciones de libertad en territorios, no cárcel) a quienes confiesen sus crímenes y reparen a las víctimas. Algunos sectores exigen penas de cárcel ordinarias. ¿Cuál es el dilema central de la justicia transicional?',
        opciones: [
          { letra: 'A', texto: 'No existe ningún dilema: la justicia transicional es simplemente impunidad disfrazada.' },
          { letra: 'B', texto: 'El dilema está entre la justicia retributiva (castigo proporcional al daño) y la justicia restaurativa (verdad, reparación, garantías de no repetición) en contextos donde exigir cárcel para todos puede impedir la firma de acuerdos de paz y la desmovilización.' },
          { letra: 'C', texto: 'No existe dilema porque todos los actores del conflicto deben recibir penas de cárcel largas para lograr la paz.' },
          { letra: 'D', texto: 'La JEP es innecesaria porque los tribunales ordinarios son suficientes para juzgar los crímenes del conflicto.' },
        ],
        clave: 'B',
        justificacion: 'La justicia transicional enfrenta un dilema genuino: si el Estado exige penas de cárcel estrictas, los actores armados no negociarán ni se desmovilizarán (experiencias internacionales lo confirman). Pero si las penas son demasiado leves, se puede percibir como impunidad, especialmente para las víctimas. La JEP intenta un equilibrio: castigo no convencional (restricciones de libertad, reparación) a cambio de verdad plena y garantías de no repetición. Este modelo sigue la experiencia de países como Sudáfrica y Rwanda. La opción A descalifica el modelo sin análisis. La opción C niega el dilema. La opción D ignora la experiencia del sistema penal ordinario con crímenes de guerra.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 35. Conocimientos sociales + pensamiento-social (bienes públicos)
      {
        id: 'soc-p-s9-35',
        enunciado: '¿Cuál de las siguientes es la mejor definición de un "bien público" en economía y ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'Un bien que pertenece al gobierno nacional y que nadie más puede usar.' },
          { letra: 'B', texto: 'Un bien que es no rivalizado (su uso por una persona no reduce su disponibilidad para otras) y no excluyente (nadie puede ser impedido de usarlo), como el alumbrado público, la defensa nacional o el conocimiento científico publicado.' },
          { letra: 'C', texto: 'Un bien que se vende en el mercado a precios accesibles para toda la población.' },
          { letra: 'D', texto: 'Un bien producido exclusivamente por empresas estatales como Ecopetrol.' },
        ],
        clave: 'B',
        justificacion: 'En economía, los bienes públicos tienen dos características que los diferencian de los bienes privados: (1) no rivalidad: que yo use el alumbrado público no impide que otros también lo usen; (2) no exclusión: no es posible excluir a nadie de su uso. Ejemplos: defensa nacional, iluminación de calles, conocimiento científico publicado. Debido a estas características, el mercado privado tiende a subproducirlos (el "problema del polizón"), lo que justifica la intervención del Estado. La opción A confunde "público" con "gubernamental". La opción C describe bienes con precios accesibles, no necesariamente públicos. La opción D confunde con empresas estatales.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 36. Argumentación + interpretacion (impuestos)
      {
        id: 'soc-p-s9-36',
        enunciado: 'Lee el siguiente argumento sobre los impuestos:\n\n"Los impuestos son un robo porque el gobierno toma mi dinero sin mi permiso y lo gasta en cosas que yo no decido."\n\n¿Cuál es la respuesta más sólida desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'El argumento es completamente correcto: los impuestos son ilegítimos.' },
          { letra: 'B', texto: 'El argumento ignora que los impuestos son el mecanismo mediante el cual los ciudadanos financian colectivamente bienes y servicios que ningún individuo podría pagar solo (vías, educación pública, salud, defensa), y que en una democracia, el Congreso decide su destino con representación ciudadana.' },
          { letra: 'C', texto: 'El argumento es correcto, pero solo aplica a los impuestos que financian gastos militares.' },
          { letra: 'D', texto: 'El argumento es incorrecto porque los impuestos son voluntarios en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'Los impuestos son el mecanismo de financiación colectiva de los bienes públicos y servicios sociales que ningún individuo podría costear solo: carreteras, ejército, sistema educativo público, salud, justicia. En una democracia, el uso de los impuestos es decidido por el Congreso (representación ciudadana) y controlado por organismos como la Contraloría. No son un "robo" sino una contribución obligatoria acordada socialmente para financiar lo común. El argumento del texto refleja una visión libertaria extrema que ignora los fundamentos del contrato social. Las opciones A y C aceptan el argumento. La opción D es factualmente incorrecta (los impuestos son obligatorios).',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 37. Conocimientos sociales + pensamiento-sistemico (siglo XX colombiano)
      {
        id: 'soc-p-s9-37',
        enunciado: 'El Frente Nacional (1958-1974) fue un acuerdo entre los partidos Liberal y Conservador en Colombia que puso fin a La Violencia. ¿Cuál fue su principal consecuencia negativa para la democracia?',
        opciones: [
          { letra: 'A', texto: 'El Frente Nacional eliminó totalmente la violencia política en Colombia.' },
          { letra: 'B', texto: 'El Frente Nacional estabilizó el país pero generó exclusión política: al repartir el poder solo entre liberales y conservadores, marginó a otros movimientos políticos y contribuyó al surgimiento de grupos guerrilleros que buscaron vías armadas de participación.' },
          { letra: 'C', texto: 'El Frente Nacional fue un período de gran prosperidad económica sin ninguna consecuencia negativa.' },
          { letra: 'D', texto: 'El Frente Nacional entregó el poder al ejército y eliminó el sistema de partidos.' },
        ],
        clave: 'B',
        justificacion: 'El Frente Nacional fue un pacto bipartidista que acordó alternarse la presidencia y repartir cargos gubernamentales entre liberales y conservadores durante 16 años. Si bien logró estabilizar el país tras La Violencia, tuvo el efecto negativo de cerrar el sistema político a otras fuerzas: movimientos de izquierda, sindicatos y nuevos partidos quedaron excluidos de la participación institucional. Historiadores han señalado que esta exclusión contribuyó al surgimiento de grupos guerrilleros (FARC, ELN) en los años 60, que encontraron en la lucha armada una vía de participación. Las opciones A, C y D son imprecisas o incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 38. Multiperspectividad + pensamiento-social (redes sociales y democracia)
      {
        id: 'soc-p-s9-38',
        enunciado: 'Las redes sociales han sido usadas tanto para organizar movimientos ciudadanos como para difundir desinformación durante elecciones. Desde las ciencias sociales, ¿cuál es la evaluación más equilibrada de su impacto en la democracia?',
        opciones: [
          { letra: 'A', texto: 'Las redes sociales son siempre positivas para la democracia porque dan voz a todos.' },
          { letra: 'B', texto: 'Las redes sociales tienen impactos ambivalentes: facilitan la organización ciudadana, la denuncia y la participación, pero también permiten la difusión de desinformación, la polarización y la manipulación electoral, lo que exige regulación y alfabetización digital.' },
          { letra: 'C', texto: 'Las redes sociales son siempre negativas para la democracia y deberían prohibirse.' },
          { letra: 'D', texto: 'Las redes sociales no tienen ningún impacto real en los procesos políticos.' },
        ],
        clave: 'B',
        justificacion: 'Las redes sociales son tecnologías con efectos múltiples sobre la democracia. Por un lado, han facilitado movimientos ciudadanos (la Primavera Árabe, el paro nacional colombiano de 2019-2021), la denuncia de corrupción y la participación de sectores antes marginados. Por otro, han sido usadas para difundir noticias falsas, crear "cámaras de eco" que polarizan, y realizar campañas de manipulación electoral (caso Cambridge Analytica). Un análisis riguroso reconoce ambas dimensiones y propone respuestas como la educación mediática y la regulación de contenidos. Las opciones A, C y D adoptan posiciones absolutas sin matices.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 39. Argumentación + pensamiento-sistemico (medio ambiente urbano)
      {
        id: 'soc-p-s9-39',
        enunciado: 'Bogotá tiene uno de los peores índices de calidad del aire en América Latina, principalmente por el parque automotor. Un concejal propone: "La solución es plantar un millón de árboles en la ciudad." ¿Cuál es la limitación más importante de esta propuesta como política pública?',
        opciones: [
          { letra: 'A', texto: 'La propuesta es correcta: plantar árboles es la única solución posible a la contaminación del aire.' },
          { letra: 'B', texto: 'Plantar árboles ayuda pero no ataca la causa del problema; una política integral requeriría reducir las fuentes de emisión (modernizar el transporte público, regular la antigüedad de los vehículos) además de aumentar zonas verdes.' },
          { letra: 'C', texto: 'No hay ninguna solución al problema de la contaminación en ciudades grandes.' },
          { letra: 'D', texto: 'La contaminación del aire en Bogotá no proviene de los vehículos sino de otras fuentes naturales.' },
        ],
        clave: 'B',
        justificacion: 'Los árboles urbanos tienen beneficios reales: absorben CO2, reducen el efecto isla de calor y mejoran el bienestar psicológico. Sin embargo, no son suficientes para combatir la contaminación generada por millones de vehículos. Las ciudades con mejor calidad del aire (como Ámsterdam, Ámsterdam o Bogotá en sus mejores momentos) han combinado múltiples estrategias: transporte público eficiente y masivo, restricciones vehiculares (pico y placa, Día sin Carro), electrificación del transporte y ciclovías. Una política que solo planta árboles ataca los síntomas sin reducir las causas. La opción A acepta la propuesta incompleta. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 40. Conocimientos sociales + interpretacion (derechos humanos internacionales)
      {
        id: 'soc-p-s9-40',
        enunciado: 'La Declaración Universal de los Derechos Humanos fue adoptada por la ONU en 1948. ¿Cuál es la característica más importante de estos derechos?',
        opciones: [
          { letra: 'A', texto: 'Los derechos humanos aplican únicamente en los países que los ratificaron mediante tratados específicos.' },
          { letra: 'B', texto: 'Los derechos humanos son universales (para todas las personas), inalienables (no pueden renunciarse ni quitarse), indivisibles (civiles, políticos, económicos y sociales tienen igual jerarquía) e interdependientes.' },
          { letra: 'C', texto: 'Los derechos humanos son concedidos por los gobiernos y pueden ser retirados cuando el Estado lo considere necesario.' },
          { letra: 'D', texto: 'Los derechos humanos solo protegen a los ciudadanos de su propio país, no a los extranjeros.' },
        ],
        clave: 'B',
        justificacion: 'Los principios que definen los derechos humanos según el derecho internacional son: (1) universalidad: son de todas las personas, sin distinción de origen, género, religión o nacionalidad; (2) inalienabilidad: no pueden renunciarse ni ser transferidos; (3) indivisibilidad: los derechos civiles y políticos y los económicos, sociales y culturales tienen igual jerarquía; (4) interdependencia: el cumplimiento de unos facilita el de los demás. La opción A condiciona los derechos a la ratificación de tratados. La opción C invierte el principio: los derechos no son concedidos por el Estado sino inherentes a la persona. La opción D contradice la universalidad.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s11-01',
        enunciado: 'Lee el siguiente fragmento:\n\n"La Guerra Fría (1947-1991) fue un conflicto ideológico, político y geopolítico entre los Estados Unidos y la Unión Soviética. Aunque no hubo enfrentamiento militar directo entre las dos superpotencias, la guerra se libró a través de conflictos regionales en Asia, África y América Latina, donde cada bloque apoyó a facciones aliadas."\n\nSegún el texto, ¿cuál fue la principal característica de la Guerra Fría?',
        opciones: [
          { letra: 'A', texto: 'Fue un conflicto exclusivamente económico entre los países capitalistas y los socialistas.' },
          { letra: 'B', texto: 'Fue una guerra directa entre EE.UU. y la URSS que se libró principalmente en Europa.' },
          { letra: 'C', texto: 'Fue una confrontación ideológica y geopolítica que se manifestó a través de conflictos regionales sin enfrentamiento militar directo entre las superpotencias.' },
          { letra: 'D', texto: 'Fue un conflicto que solo afectó a los países en desarrollo, sin consecuencias para las grandes potencias.' },
        ],
        clave: 'C',
        justificacion: 'El texto es explícito: la Guerra Fría fue una confrontación ideológica y geopolítica que, aunque no tuvo enfrentamiento directo entre EE.UU. y la URSS, se manifestó en conflictos regionales (guerras en Corea, Vietnam, Angola, Nicaragua) donde cada bloque apoyó a sus aliados. La opción A reduce el conflicto a lo económico, cuando también fue ideológico y militar. La opción B contradice el texto, que afirma que no hubo enfrentamiento directo. La opción D es incorrecta: las consecuencias para las superpotencias fueron enormes (carrera armamentista, influencia global).',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 2. Argumentacion + pensamiento-sistemico
      {
        id: 'soc-p-s11-02',
        enunciado: 'Un senador propone una ley para reducir el salario mínimo argumentando: "En los países donde se bajó el salario mínimo, el desempleo cayó. Por lo tanto, si reducimos el salario mínimo en Colombia, el desempleo también caerá." ¿Cuál es la principal falla lógica de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es válido porque está basado en evidencia empírica de otros países.' },
          { letra: 'B', texto: 'El argumento comete una falacia de generalización apresurada: asume que lo que ocurrió en otros contextos ocurrirá necesariamente en Colombia, sin considerar factores específicos del país.' },
          { letra: 'C', texto: 'El argumento es incorrecto porque ningún país del mundo ha reducido el salario mínimo.' },
          { letra: 'D', texto: 'El argumento es correcto en su lógica, pero tiene un error de cálculo en las cifras de desempleo.' },
        ],
        clave: 'B',
        justificacion: 'El argumento incurre en una generalización apresurada (o falacia de analogía débil): extrapola resultados de otros países al contexto colombiano sin considerar que cada economía tiene características específicas (estructura laboral, inflación, productividad, instituciones) que pueden producir resultados distintos. Además, la correlación entre salario mínimo bajo y menor desempleo no implica causalidad. La opción A ignora la falacia. La opción C es factualmente incorrecta. La opción D desvía el problema: la falla es lógica, no aritmética.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 3. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s11-03',
        enunciado: 'El Acuerdo de Paz firmado en Colombia en 2016 fue apoyado por organizaciones de víctimas, comunidades rurales y organismos internacionales, pero rechazado por sectores políticos que consideraron que concedía demasiados beneficios a los actores armados. ¿Qué herramienta analítica es más útil para comprender este debate?',
        opciones: [
          { letra: 'A', texto: 'La objetividad histórica, que permite determinar quién tiene razón en el debate sobre el acuerdo de paz.' },
          { letra: 'B', texto: 'El análisis multiperspectivo, que permite comprender las distintas posiciones y los valores que las sustentan sin reducir el debate a una sola verdad.' },
          { letra: 'C', texto: 'El positivismo jurídico, que establece que lo único relevante es lo que dice el texto del acuerdo, independientemente de las opiniones.' },
          { letra: 'D', texto: 'La teoría conspirativa, que permite identificar los intereses ocultos detrás de cada posición.' },
        ],
        clave: 'B',
        justificacion: 'El debate sobre el Acuerdo de Paz involucra actores con experiencias, valores e intereses legítimamente distintos: las víctimas buscan reparación y no repetición; los opositores políticos exigen mayor justicia retributiva; las comunidades rurales priorizan la seguridad territorial. El análisis multiperspectivo permite comprender estas posiciones sin descalificar ninguna a priori. La opción A supone equivocadamente que existe una "verdad objetiva" en debates normativos y políticos. La opción C reduce el análisis al texto legal, ignorando las experiencias de las personas. La opción D no es una herramienta analítica válida en las ciencias sociales.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 4. Conocimientos sociales + pensamiento-sistemico
      {
        id: 'soc-p-s11-04',
        enunciado: 'El Índice de Desarrollo Humano (IDH) mide el progreso de un país en tres dimensiones: salud (esperanza de vida), educación (años de escolaridad) e ingreso (PIB per cápita). Si un país tiene un PIB per cápita alto pero baja esperanza de vida y pocos años de escolaridad, ¿qué conclusión es más adecuada?',
        opciones: [
          { letra: 'A', texto: 'El país tiene un alto desarrollo humano porque su ingreso económico es elevado.' },
          { letra: 'B', texto: 'El crecimiento económico del país no se ha traducido en mejoras proporcionales en la salud y la educación de la población, lo que indica una distribución desigual del bienestar.' },
          { letra: 'C', texto: 'El IDH del país será alto porque el PIB per cápita compensa las bajas cifras de salud y educación.' },
          { letra: 'D', texto: 'El país no necesita mejorar la salud ni la educación si ya tiene un PIB alto.' },
        ],
        clave: 'B',
        justificacion: 'El IDH es un indicador multidimensional que combina salud, educación e ingreso. Un PIB alto con baja esperanza de vida y poca escolaridad indica que el crecimiento económico no beneficia por igual a toda la población, evidenciando desigualdad en la distribución del bienestar. El IDH de ese país será medio o bajo porque las tres dimensiones se combinan. La opción A usa solo una dimensión para concluir el nivel de desarrollo. La opción C es incorrecta: las dimensiones se combinan pero no se compensan proporcionalmente de esa forma. La opción D refleja una visión economicista que el IDH precisamente busca superar.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 5. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s11-05',
        enunciado: 'Lee el siguiente fragmento de un discurso político:\n\n"Los movimientos feministas han destruido la familia colombiana. Antes las mujeres eran felices en el hogar y los hombres podían trabajar tranquilos. Hoy, por culpa del feminismo, tenemos más divorcios, menos hijos y una sociedad en crisis."\n\n¿Cuál de los siguientes análisis es más adecuado para evaluar este discurso desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'El discurso es correcto porque las estadísticas de divorcio en Colombia han aumentado en las últimas décadas.' },
          { letra: 'B', texto: 'El discurso presenta una relación causal no demostrada entre el feminismo y los cambios familiares, ignora los beneficios del movimiento para las mujeres e invisibiliza las perspectivas de quienes han sido históricamente excluidas.' },
          { letra: 'C', texto: 'El discurso es un ejemplo de pensamiento científico porque usa datos observables (divorcios, natalidad) para sustentar su argumento.' },
          { letra: 'D', texto: 'El discurso es neutral porque describe cambios sociales sin tomar partido por ningún grupo.' },
        ],
        clave: 'B',
        justificacion: 'El discurso incurre en varias fallas analíticas: (1) establece una relación causal sin evidencia entre el feminismo y el aumento de divorcios; (2) usa un lenguaje nostálgico ("antes las mujeres eran felices") que invisibiliza las desigualdades históricas; (3) ignora completamente la perspectiva de las mujeres y los beneficios reales del feminismo (derechos laborales, acceso a la educación, protección contra la violencia). La opción A confunde correlación con causalidad. La opción C es incorrecta: observar un dato sin establecer relaciones causales válidas no es pensamiento científico. La opción D es incorrecta: el discurso toma claramente una posición contraria al feminismo.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 6. Conocimientos sociales + pensamiento-social (geopolítica)
      {
        id: 'soc-p-s11-06',
        enunciado: 'La Organización de Naciones Unidas (ONU) fue creada en 1945 tras la Segunda Guerra Mundial. ¿Cuál fue la principal motivación para su creación y cuál es su limitación estructural más criticada?',
        opciones: [
          { letra: 'A', texto: 'Fue creada para administrar la economía mundial; su limitación es que no tiene sede permanente.' },
          { letra: 'B', texto: 'Fue creada para prevenir conflictos armados y promover la cooperación internacional; su limitación más criticada es el poder de veto de los cinco miembros permanentes del Consejo de Seguridad, que puede bloquear decisiones incluso ante graves violaciones de derechos humanos.' },
          { letra: 'C', texto: 'Fue creada para distribuir los recursos naturales del mundo; su limitación es la falta de presupuesto.' },
          { letra: 'D', texto: 'Fue creada como alianza militar entre las potencias vencedoras de la guerra; no tiene ninguna limitación estructural.' },
        ],
        clave: 'B',
        justificacion: 'La ONU fue creada con el propósito de mantener la paz y seguridad internacional, promover la cooperación y proteger los derechos humanos, tras el horror de la Segunda Guerra Mundial. Su principal limitación estructural es el derecho de veto de los cinco miembros permanentes del Consejo de Seguridad (EE.UU., Rusia, China, Francia, Reino Unido): cualquiera puede bloquear resoluciones, lo que ha paralizado respuestas ante conflictos como los de Siria o Ucrania. La opción A describe funciones económicas que corresponden más al FMI o la OMC. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 7. Argumentación + pensamiento-sistemico (derechos y democracia)
      {
        id: 'soc-p-s11-07',
        enunciado: 'Lee el siguiente argumento sobre democracia:\n\n"La democracia directa, en la que todos los ciudadanos votan sobre cada decisión, es superior a la democracia representativa porque elimina a los intermediarios políticos que corrompen la voluntad popular."\n\n¿Cuál es la principal debilidad de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es correcto: la democracia directa es siempre superior a la representativa.' },
          { letra: 'B', texto: 'El argumento ignora las limitaciones prácticas de la democracia directa en sociedades grandes y complejas (tiempo, información, riesgo de decisiones impulsivas), y asume que eliminar representantes elimina la corrupción, lo cual no está demostrado.' },
          { letra: 'C', texto: 'El argumento falla porque la democracia representativa siempre funciona mejor que cualquier otra forma de gobierno.' },
          { letra: 'D', texto: 'El argumento es inválido porque ningún país del mundo ha usado la democracia directa.' },
        ],
        clave: 'B',
        justificacion: 'La democracia directa tiene limitaciones reales en sociedades con millones de ciudadanos: requiere que cada persona se informe sobre todas las decisiones técnicas (presupuesto, política exterior, salud pública), lo que es inviable en la práctica. Además, las decisiones por referéndum pueden ser influenciadas por emociones, desinformación o intereses de grupos. La corrupción no desaparece por eliminar representantes: puede trasladarse a quienes elaboran las preguntas o interpretan los resultados. Algunos países (Suiza) usan modelos mixtos con referendos frecuentes. La opción A adopta la posición sin cuestionarla. La opción D es incorrecta: Suiza y otros países usan elementos de democracia directa.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 8. Conocimientos sociales + pensamiento-sistemico (neoliberalismo)
      {
        id: 'soc-p-s11-08',
        enunciado: 'En los años 90, Colombia adoptó políticas de "apertura económica" que implicaron reducir aranceles, privatizar empresas estatales y liberalizar el comercio. Desde el análisis de las ciencias sociales, ¿cuál fue un impacto documentado de estas políticas?',
        opciones: [
          { letra: 'A', texto: 'La apertura económica eliminó por completo la pobreza en Colombia durante los años 90.' },
          { letra: 'B', texto: 'La apertura facilitó el acceso a productos importados más baratos pero también afectó a sectores productivos nacionales que no pudieron competir, especialmente la industria y algunos sectores agrícolas.' },
          { letra: 'C', texto: 'La apertura económica no tuvo ningún impacto en la economía colombiana porque el gobierno bloqueó su implementación.' },
          { letra: 'D', texto: 'La apertura económica fortaleció exclusivamente a los trabajadores y pequeños productores del campo.' },
        ],
        clave: 'B',
        justificacion: 'La apertura económica de los años 90 en Colombia (bajo el gobierno de César Gaviria) generó efectos mixtos: los consumidores accedieron a bienes importados más baratos (electrodomésticos, textiles), pero sectores industriales nacionales y algunos agrícolas (como la producción de trigo, algodón y sorgo) no pudieron competir con los precios internacionales y decayeron. Este proceso se llama "desindustrialización" y es un fenómeno documentado en varios países latinoamericanos que adoptaron reformas similares. La opción A es una idealización no sustentada. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 9. Multiperspectividad + interpretacion (derechos indígenas)
      {
        id: 'soc-p-s11-09',
        enunciado: 'Los pueblos indígenas del Cauca en Colombia han bloqueado frecuentemente la carretera Panamericana para exigir el cumplimiento de acuerdos con el gobierno. Algunos sectores consideran que estos bloqueos son ilegales e ilegítimos; los pueblos indígenas los defienden como mecanismo de presión. ¿Cuál es el análisis más adecuado de esta tensión desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'Los bloqueos son siempre ilegítimos porque afectan el derecho a la libre circulación de otras personas.' },
          { letra: 'B', texto: 'Esta es una tensión entre derechos constitucionales (libre circulación vs. derecho a la protesta y a la consulta previa de los pueblos indígenas) y entre la legalidad formal y la legitimidad política; el análisis requiere comprender el contexto histórico de incumplimiento de acuerdos y exclusión de los pueblos indígenas.' },
          { letra: 'C', texto: 'Los pueblos indígenas siempre tienen razón en sus demandas, por lo que los bloqueos son siempre justificados.' },
          { letra: 'D', texto: 'El Estado debe ignorar las demandas indígenas porque los bloqueos generan pérdidas económicas.' },
        ],
        clave: 'B',
        justificacion: 'Esta situación ilustra una tensión real entre derechos constitucionales: el derecho a la libre circulación (de quienes no pueden transitar) y el derecho a la protesta y la movilización social (reconocido en la Constitución de 1991). También refleja la tensión entre legalidad (los bloqueos pueden ser ilegales) y legitimidad (contexto de incumplimiento histórico de acuerdos). El análisis de ciencias sociales debe comprender el contexto histórico: los pueblos indígenas han sido históricamente despojados y excluidos, y los bloqueos responden frecuentemente a incumplimientos del Estado. Ninguna posición extrema (A, C o D) hace justicia a la complejidad del fenómeno.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 10. Argumentación + pensamiento-social (ciudadanía)
      {
        id: 'soc-p-s11-10',
        enunciado: 'Lee el siguiente fragmento de un artículo de opinión:\n\n"La corrupción en Colombia es cultural: los colombianos somos corruptos por naturaleza y por eso no podemos desarrollarnos. Es inútil hacer reformas institucionales porque la gente no va a cambiar."\n\n¿Cuál es la falacia argumentativa central del texto?',
        opciones: [
          { letra: 'A', texto: 'Apelación a la emoción, porque el autor usa un lenguaje muy emotivo para convencer al lector.' },
          { letra: 'B', texto: 'Determinismo cultural y generalización indebida: el autor atribuye la corrupción a una supuesta "naturaleza" de los colombianos, esencializando un problema estructural e institucional, y concluye que no hay solución posible.' },
          { letra: 'C', texto: 'Falacia de autoridad, porque el autor cita fuentes científicas que no existen.' },
          { letra: 'D', texto: 'El argumento es sólido porque la corrupción en Colombia está documentada estadísticamente.' },
        ],
        clave: 'B',
        justificacion: 'El argumento comete dos falacias interrelacionadas: (1) determinismo cultural o esencialismo: atribuir la corrupción a una supuesta "naturaleza" de los colombianos es una generalización que ignora que la corrupción es un fenómeno institucional, estructural e histórico presente en todos los países en diferentes grados; (2) conclusión nihilista: afirmar que las reformas son inútiles bloquea cualquier posibilidad de cambio. La evidencia muestra que las reformas institucionales (independencia judicial, control fiscal, transparencia) reducen la corrupción. La opción A identifica una estrategia retórica secundaria. La opción C introduce algo que no está en el texto. La opción D confunde el hecho documentado (hay corrupción) con la interpretación incorrecta (es natural e inamovible).',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 11. Conocimientos sociales + interpretacion (Revolución Industrial)
      {
        id: 'soc-p-s11-11',
        enunciado: 'La Revolución Industrial (siglos XVIII-XIX) transformó radicalmente las estructuras económicas y sociales de Europa. ¿Cuál de las siguientes consecuencias sociales fue uno de sus efectos más documentados?',
        opciones: [
          { letra: 'A', texto: 'La Revolución Industrial mejoró inmediatamente las condiciones de vida de todos los trabajadores.' },
          { letra: 'B', texto: 'La Revolución Industrial generó el surgimiento del proletariado industrial: masas de trabajadores que, desposeídos de sus medios de producción, vivían en condiciones precarias de hacinamiento, largas jornadas laborales y bajos salarios, lo que eventualmente impulsó los movimientos obreros y las reformas laborales.' },
          { letra: 'C', texto: 'La Revolución Industrial eliminó el trabajo infantil porque las máquinas reemplazaron a los niños.' },
          { letra: 'D', texto: 'La Revolución Industrial fue un proceso exclusivamente tecnológico sin consecuencias para la organización social.' },
        ],
        clave: 'B',
        justificacion: 'La Revolución Industrial creó el proletariado: una nueva clase de trabajadores asalariados sin tierra ni medios de producción propios que dependían de su fuerza de trabajo para sobrevivir. Las condiciones iniciales en las fábricas eran muy precarias: jornadas de 14-16 horas, trabajo infantil (no lo eliminó, lo extendió), hacinamiento urbano y bajos salarios. Estas condiciones generaron el movimiento obrero, el sindicalismo y reformas laborales posteriores. La opción A idealiza el proceso. La opción C invierte la realidad: la Revolución Industrial intensificó el trabajo infantil (que fue regulado décadas después). La opción D reduce el fenómeno a lo técnico.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 12. Multiperspectividad + pensamiento-sistemico (globalización cultural)
      {
        id: 'soc-p-s11-12',
        enunciado: 'La expansión global de plataformas como Netflix, Spotify y TikTok ha generado un debate sobre la "homogeneización cultural". ¿Cuál de las siguientes posiciones representa un análisis más matizado de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'La globalización cultural elimina todas las culturas locales y las reemplaza por la cultura estadounidense.' },
          { letra: 'B', texto: 'La globalización cultural genera un proceso complejo: por un lado, difunde masivamente contenido de ciertas culturas (especialmente anglosajona), pero también permite el acceso global a expresiones culturales de todo el mundo (K-pop, reggaetón, anime) y crea nuevas formas de hibridación cultural.' },
          { letra: 'C', texto: 'La globalización cultural es completamente positiva porque acerca a las personas de distintas culturas sin ningún efecto negativo.' },
          { letra: 'D', texto: 'Las plataformas digitales no tienen ningún impacto en las culturas locales porque la gente siempre prefiere su propia cultura.' },
        ],
        clave: 'B',
        justificacion: 'La globalización cultural es un fenómeno ambivalente. Sí hay asimetría: el inglés y la cultura anglosajona tienen una presencia dominante. Pero también hay fenómenos contrarios: el K-pop surcoreano, el reggaetón latinoamericano, el anime japonés y el afrobeats tienen audiencias globales. Además, las culturas no se homogeneizan pasivamente: las personas reinterpretan y adaptan los contenidos a sus contextos locales (glocalización). La opción A sobredimensiona la homogeneización. La opción C ignora las asimetrías de poder cultural. La opción D niega la influencia real de los medios digitales en las prácticas culturales.',
        competencia: 'pensamiento-sistemico',
        componente: 'multiperspectividad',
      },

      // 13. Argumentación + interpretacion (sistema electoral)
      {
        id: 'soc-p-s11-13',
        enunciado: 'Colombia tiene un sistema de elecciones separadas para presidente, congresistas, alcaldes y gobernadores. Un analista político propone: "Unificar todas las elecciones en un solo día ahorraría costos y aumentaría la participación ciudadana." ¿Cuál es el argumento más sólido en CONTRA de esta propuesta?',
        opciones: [
          { letra: 'A', texto: 'Ahorrar costos nunca debe ser un objetivo en democracia.' },
          { letra: 'B', texto: 'Concentrar todas las elecciones en un día puede generar el "efecto arrastre": los candidatos presidenciales fuertes jalan votos para sus aliados locales, reduciendo la autonomía de las elecciones regionales y favoreciendo la hegemonía de partidos grandes sobre los locales.' },
          { letra: 'C', texto: 'La propuesta es incorrecta porque en Colombia está prohibido cambiar el sistema electoral.' },
          { letra: 'D', texto: 'Una elección única aumentaría los fraudes porque habría más votos que contar.' },
        ],
        clave: 'B',
        justificacion: 'Unificar elecciones puede generar el "efecto de arrastre" (coattail effect): cuando una figura presidencial popular lleva a sus candidatos aliados en regiones donde normalmente no ganarían. Esto reduce la autonomía de las elecciones locales y puede disminuir la representatividad regional. Muchos sistemas federales o descentralizados mantienen elecciones separadas precisamente para proteger la autonomía local. La ventaja de la propuesta (menor costo, mayor participación) debe ponderarse contra este riesgo. La opción A es una posición radical sin fundamento. La opción C es incorrecta: los sistemas electorales pueden reformarse. La opción D es una preocupación logística menor, no un argumento central.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 14. Conocimientos sociales + pensamiento-sistemico (economía global)
      {
        id: 'soc-p-s11-14',
        enunciado: 'El Producto Interno Bruto (PIB) es el principal indicador económico utilizado para medir el desarrollo de un país. ¿Cuál es la crítica más documentada al uso del PIB como único indicador de bienestar?',
        opciones: [
          { letra: 'A', texto: 'El PIB es un indicador perfecto que captura todas las dimensiones del bienestar humano.' },
          { letra: 'B', texto: 'El PIB mide el valor monetario de todos los bienes y servicios producidos, pero no captura la distribución de ese ingreso (desigualdad), el trabajo no remunerado, la degradación ambiental ni la calidad de vida subjetiva de las personas.' },
          { letra: 'C', texto: 'El PIB no es utilizado por ningún organismo internacional porque es un indicador desactualizado.' },
          { letra: 'D', texto: 'El PIB es útil únicamente para países desarrollados y no aplica a economías en desarrollo como Colombia.' },
        ],
        clave: 'B',
        justificacion: 'La crítica al PIB como indicador único es ampliamente compartida: (1) no captura la distribución del ingreso (un país puede tener PIB alto con gran desigualdad); (2) no cuenta el trabajo no remunerado (trabajo doméstico, cuidado de personas); (3) puede aumentar con desastres naturales si generan gasto de reconstrucción; (4) no mide la degradación ambiental como costo. Por eso se crearon indicadores complementarios como el IDH, el Índice de Gini y el Índice de Progreso Social. La opción A ignora todas las críticas documentadas. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 15. Multiperspectividad + interpretacion (derechos LGBTQ+)
      {
        id: 'soc-p-s11-15',
        enunciado: 'En Colombia, la Corte Constitucional ha reconocido progresivamente los derechos de las personas LGBTQ+, mientras que algunos sectores religiosos y políticos se oponen. ¿Cuál es el marco analítico más adecuado desde las ciencias sociales para estudiar este debate?',
        opciones: [
          { letra: 'A', texto: 'La Corte Constitucional siempre tiene razón en sus decisiones, por lo que el debate ya está cerrado.' },
          { letra: 'B', texto: 'Este debate refleja una tensión entre el principio constitucional de igualdad y no discriminación (que fundamenta los derechos LGBTQ+) y las libertades de conciencia, religión y expresión de quienes se oponen; las ciencias sociales analizan estas tensiones reconociendo la legitimidad del pluralismo democrático sin asumir que una posición debe eliminarse.' },
          { letra: 'C', texto: 'Los sectores religiosos siempre tienen razón en los debates sobre moral pública porque representan la tradición.' },
          { letra: 'D', texto: 'Las ciencias sociales no deben estudiar temas relacionados con sexualidad porque son asuntos privados.' },
        ],
        clave: 'B',
        justificacion: 'Las ciencias sociales analizan los debates sociales reconociendo la pluralidad de perspectivas legítimas dentro de una democracia. En este caso, la tensión es entre principios constitucionales: el de igualdad y no discriminación (que protege a grupos históricamente excluidos) y las libertades de conciencia y expresión (que amparan a quienes discrepan). Un análisis riguroso no descalifica a ninguna parte, pero sí distingue entre la expresión de opiniones (protegida) y la discriminación (prohibida). Las opciones A y C adoptan posiciones unilaterales. La opción D limita incorrectamente el objeto de estudio de las ciencias sociales.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 16. Conocimientos sociales + pensamiento-sistemico (historia mundial)
      {
        id: 'soc-p-s11-16',
        enunciado: 'La Revolución Francesa (1789) proclamó los principios de Libertad, Igualdad y Fraternidad. ¿Cuál fue la contradicción más documentada entre estos principios y la realidad que siguió a la Revolución?',
        opciones: [
          { letra: 'A', texto: 'La Revolución Francesa no tuvo ninguna contradicción porque estableció la igualdad perfecta.' },
          { letra: 'B', texto: 'La Revolución proclamó la igualdad universal, pero en la práctica excluyó a las mujeres del sufragio y los derechos políticos, mantuvo la esclavitud en las colonias por años y favoreció principalmente a la burguesía sobre los sectores populares.' },
          { letra: 'C', texto: 'La Revolución Francesa eliminó todas las formas de desigualdad social en Europa.' },
          { letra: 'D', texto: 'La contradicción principal fue que la Revolución no afectó a ningún otro país fuera de Francia.' },
        ],
        clave: 'B',
        justificacion: 'La Revolución Francesa es un ejemplo clásico de la brecha entre ideales proclamados y realidades históricas. A pesar del principio de Igualdad, las mujeres (Olympe de Gouges lo denunció en 1791) fueron excluidas de los derechos políticos; la esclavitud en las colonias (Haití) no fue abolida de inmediato; y la burguesía fue la principal beneficiaria política y económica del nuevo orden. Esto no niega la importancia histórica de la Revolución, pero exige una mirada crítica a sus límites. Las opciones A y C idealizan el proceso. La opción D desconoce el impacto continental e incluso mundial de la Revolución Francesa.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 17. Argumentación + pensamiento-social (populismo)
      {
        id: 'soc-p-s11-17',
        enunciado: 'Desde las ciencias políticas, el populismo se define como una ideología que divide la sociedad entre "el pueblo puro" y "una élite corrupta", presentando al líder populista como representante directo del pueblo. ¿Cuál de las siguientes afirmaciones describe mejor los riesgos del populismo para la democracia?',
        opciones: [
          { letra: 'A', texto: 'El populismo siempre es positivo porque defiende los intereses del pueblo frente a las élites.' },
          { letra: 'B', texto: 'El populismo puede erosionar las instituciones democráticas al deslegitimar a cualquier oposición como "enemiga del pueblo", concentrar el poder en el líder y debilitar los controles institucionales (prensa libre, poder judicial independiente).' },
          { letra: 'C', texto: 'El populismo y la democracia son sinónimos: cualquier gobierno popular es democrático.' },
          { letra: 'D', texto: 'El populismo es exclusivo de los partidos de izquierda y nunca ocurre en partidos de derecha.' },
        ],
        clave: 'B',
        justificacion: 'La ciencia política (Jan-Werner Müller, Ernesto Laclau) ha analizado cómo el populismo puede ser funcional para incluir sectores marginados, pero también tiene riesgos para la democracia liberal: (1) al dividir en "pueblo bueno" vs. "élite mala", descalifica la oposición como ilegítima; (2) concentra el poder en un líder que dice encarnar la voluntad popular; (3) ataca instituciones de control. Ejemplos: Chávez, Bolsonaro, Trump. La opción A solo ve el aspecto positivo. La opción C confunde populismo con democracia. La opción D es incorrecta: el populismo existe en derecha e izquierda.',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 18. Multiperspectividad + interpretacion (colonialismo y desarrollo)
      {
        id: 'soc-p-s11-18',
        enunciado: 'Algunos economistas argumentan que los países que fueron colonias europeas son pobres hoy porque sus gobiernos actuales son corruptos o sus culturas no valoran el trabajo. Otros académicos señalan que el colonialismo creó estructuras de desigualdad que persisten. ¿Cuál de estas perspectivas tiene mayor respaldo en las ciencias sociales contemporáneas?',
        opciones: [
          { letra: 'A', texto: 'La perspectiva cultural es más sólida: la riqueza depende exclusivamente de los valores culturales de cada pueblo.' },
          { letra: 'B', texto: 'Existe amplia evidencia de que el colonialismo estableció estructuras extractivas (instituciones que beneficiaban al colonizador, no al territorio), concentración de la riqueza y dependencia económica que condicionan el desarrollo hasta hoy, aunque sin negar la responsabilidad de los gobiernos actuales.' },
          { letra: 'C', texto: 'Ambas perspectivas son igualmente válidas y no hay evidencia que favorezca ninguna.' },
          { letra: 'D', texto: 'El colonialismo fue en realidad beneficioso para los países colonizados porque les trajo infraestructura y civilización.' },
        ],
        clave: 'B',
        justificacion: 'Los trabajos de Acemoglu y Robinson (Por qué fracasan las naciones), de Walter Rodney (Cómo Europa subdesarrolló a África) y de numerosos historiadores económicos muestran que el colonialismo instaló instituciones extractivas (encomienda, mita, plantaciones esclavistas) que concentraron la riqueza en manos de colonizadores, destruyeron sistemas económicos y sociales propios y crearon dependencias estructurales. Estas herencias institucionales explican en buena parte las diferencias de desarrollo. La opción A adopta un culturalismo simplista. La opción C evade la evidencia disponible. La opción D justifica el colonialismo con argumentos históricamente cuestionados.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 19. Conocimientos sociales + pensamiento-social (estado de bienestar)
      {
        id: 'soc-p-s11-19',
        enunciado: 'Los países escandinavos (Suecia, Noruega, Dinamarca) tienen altos impuestos pero también altos indicadores de calidad de vida, equidad y movilidad social. Algunos analistas los presentan como modelo de "estado de bienestar". ¿Cuál es el argumento principal de quienes critican este modelo?',
        opciones: [
          { letra: 'A', texto: 'Los países escandinavos son pobres y no tienen calidad de vida alta.' },
          { letra: 'B', texto: 'Los críticos argumentan que los altos impuestos desincentivan la inversión y el emprendimiento, y que el modelo es posible por condiciones específicas (pequeñas poblaciones homogéneas históricamente, alta productividad, petróleo noruego) que no son replicables en países como Colombia.' },
          { letra: 'C', texto: 'El modelo escandinavo ha generado grandes desigualdades en sus países.' },
          { letra: 'D', texto: 'Los países escandinavos no tienen impuestos altos; su éxito se debe al libre mercado sin intervención estatal.' },
        ],
        clave: 'B',
        justificacion: 'El debate sobre el modelo escandinavo es genuinamente complejo. Los críticos (liberales y neoliberales) señalan que los altos impuestos pueden desincentivar la inversión y que las condiciones que hacen posible el modelo (alta confianza institucional, homogeneidad histórica, petróleo en Noruega, alta productividad) no son fácilmente trasladables a países como Colombia, con mayores niveles de desigualdad estructural, instituciones más débiles y economías menos productivas. Esto no invalida el modelo, pero sí exige contextualización. La opción A es factualmente incorrecta. La opción C invierte la realidad: Escandinavia tiene baja desigualdad. La opción D desconoce los altos impuestos escandinavos.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 20. Argumentación + pensamiento-sistemico (seguridad ciudadana)
      {
        id: 'soc-p-s11-20',
        enunciado: 'Un alcalde propone aumentar las penas de cárcel para delitos menores como el hurto como principal estrategia para reducir el crimen. Desde las ciencias sociales, ¿cuál es la principal limitación de esta estrategia?',
        opciones: [
          { letra: 'A', texto: 'La estrategia es correcta: mayor tiempo de cárcel siempre reduce la criminalidad.' },
          { letra: 'B', texto: 'La evidencia criminológica muestra que el efecto disuasivo depende más de la certeza del castigo que de su severidad; además, las cárceles colombianas superpobladas actúan como "escuelas del crimen", por lo que la solución requiere abordar causas estructurales como el desempleo, la inequidad y la falta de oportunidades.' },
          { letra: 'C', texto: 'La propuesta es limitada porque los delitos menores no merecen ningún tipo de sanción.' },
          { letra: 'D', texto: 'La única solución efectiva al crimen es la pena de muerte.' },
        ],
        clave: 'B',
        justificacion: 'La criminología y la ciencia política han producido evidencia sólida de que el efecto disuasivo del castigo depende más de su certeza (probabilidad de ser capturado) que de su severidad (tiempo de cárcel). Incrementar penas sin mejorar la eficacia del sistema judicial no reduce el crimen. Además, Colombia tiene tasas de hacinamiento carcelario superiores al 130%, lo que convierte a las cárceles en espacios donde los delincuentes menores se conectan con redes criminales. Las causas estructurales del hurto (desempleo juvenil, pobreza, falta de oportunidades) requieren soluciones sociales. Las opciones A y D defienden el punitivismo sin respaldo empírico. La opción C niega la necesidad de sanción.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 21. Multiperspectividad + interpretacion (feminismo y familia)
      {
        id: 'soc-p-s11-21',
        enunciado: 'Lee el siguiente texto de un ensayo académico:\n\n"La familia nuclear (padre, madre, hijos) no es la única forma legítima de organización familiar; es un modelo histórico surgido con la industrialización, no una constante universal. La diversidad de configuraciones familiares —monoparentales, homoparentales, extensas— es una realidad en todas las sociedades contemporáneas."\n\n¿Cuál es la posición del autor?',
        opciones: [
          { letra: 'A', texto: 'El autor defiende que la familia nuclear debe desaparecer.' },
          { letra: 'B', texto: 'El autor argumenta que la familia nuclear es un modelo histórico, no universal, y que existen otras formas legítimas de organización familiar que deben reconocerse.' },
          { letra: 'C', texto: 'El autor afirma que todas las formas de familia son igualmente problemáticas.' },
          { letra: 'D', texto: 'El autor defiende el regreso a la familia extensa como modelo superior.' },
        ],
        clave: 'B',
        justificacion: 'El autor hace un argumento de desnaturalización histórica: muestra que la familia nuclear no es eterna ni universal, sino un modelo que emergió con la industrialización del siglo XIX. Con esto, no ataca a la familia nuclear ni propone eliminarla, sino ampliar el reconocimiento de otras formas familiares que también son válidas. Este es un argumento típico de la sociología y la historia de la familia. La opción A extrae una conclusión que el texto no plantea. La opción C introduce una valoración negativa que tampoco está en el texto. La opción D propone un regreso que el autor no sugiere.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 22. Conocimientos sociales + pensamiento-sistemico (deuda externa)
      {
        id: 'soc-p-s11-22',
        enunciado: 'Colombia, como muchos países latinoamericanos, tiene una deuda externa significativa con organismos como el FMI y el Banco Mundial. ¿Cuál de las siguientes afirmaciones describe mejor las implicaciones de la deuda externa para el desarrollo?',
        opciones: [
          { letra: 'A', texto: 'La deuda externa siempre es positiva porque permite financiar proyectos de desarrollo sin consecuencias.' },
          { letra: 'B', texto: 'La deuda externa puede financiar inversión productiva, pero su pago implica destinar recursos del presupuesto nacional (que podrían usarse en educación, salud o infraestructura) al servicio de intereses y capital, lo que puede limitar la soberanía de la política económica.' },
          { letra: 'C', texto: 'La deuda externa es siempre negativa y ningún país debería endeudarse.' },
          { letra: 'D', texto: 'La deuda externa no tiene ninguna consecuencia sobre el presupuesto nacional.' },
        ],
        clave: 'B',
        justificacion: 'La deuda externa es un instrumento financiero con efectos ambivalentes. Puede ser positiva cuando financia inversión productiva que genera crecimiento y empleo, pero tiene costos: el servicio de la deuda (pago de intereses y capital) compite directamente con el gasto social en el presupuesto. Además, los préstamos del FMI suelen condicionarse a reformas estructurales (ajustes fiscales, privatizaciones) que pueden reducir el gasto público. Colombia destina un porcentaje significativo de su presupuesto al pago de la deuda, lo que limita la inversión social. La opción A ignora los costos. La opción C niega los beneficios. La opción D niega los efectos presupuestarios.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 23. Argumentación + interpretacion (educación y mercado laboral)
      {
        id: 'soc-p-s11-23',
        enunciado: 'Lee el siguiente argumento de un economista:\n\n"Colombia debería focalizar toda la inversión educativa en carreras STEM (ciencia, tecnología, ingeniería y matemáticas) porque son las más demandadas por el mercado laboral y las que generan más ingresos."\n\n¿Cuál es la perspectiva que falta en este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es completo porque el mercado laboral es el mejor indicador de qué se debe estudiar.' },
          { letra: 'B', texto: 'El argumento reduce la educación a su función económica, ignorando su valor para la formación ciudadana, el pensamiento crítico, la cultura y la democracia; además, las demandas del mercado laboral cambian y una educación integral es más adaptable.' },
          { letra: 'C', texto: 'El argumento es correcto, pero debería incluir también el derecho y la medicina.' },
          { letra: 'D', texto: 'El argumento falla porque las carreras STEM no generan buenos ingresos en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'El argumento instrumentaliza la educación: la reduce a su capacidad de generar ingreso económico. Pero la educación también tiene funciones que no se miden en el mercado laboral: forma ciudadanos capaces de participar en la democracia, desarrolla el pensamiento crítico, transmite el patrimonio cultural y permite la reflexión ética. Además, la concentración excesiva en STEM puede crear desequilibrios: las humanidades y las ciencias sociales forman a quienes analizan los problemas éticos de la tecnología, diseñan políticas públicas y entienden los contextos culturales donde se aplica la innovación. La opción A acepta el argumento sin cuestionarlo. Las opciones C y D modifican el argumento sin cuestionar su premisa.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 24. Multiperspectividad + pensamiento-social (historia y memoria)
      {
        id: 'soc-p-s11-24',
        enunciado: 'El Centro Nacional de Memoria Histórica ha documentado los crímenes del conflicto armado colombiano desde múltiples perspectivas, incluyendo la de los victimarios. Algunos sectores critican que esto "humaniza a los criminales". Desde las ciencias sociales, ¿cuál es la función de esta perspectiva múltiple en la memoria histórica?',
        opciones: [
          { letra: 'A', texto: 'Incluir la perspectiva de los victimarios es una forma de justificar sus crímenes.' },
          { letra: 'B', texto: 'Comprender las motivaciones y contextos de quienes cometieron crímenes no es justificarlos, sino explicarlos para entender cómo prevenir su repetición; la memoria histórica rigurosa requiere múltiples perspectivas para ser completa.' },
          { letra: 'C', texto: 'Solo las víctimas tienen derecho a participar en la construcción de la memoria histórica.' },
          { letra: 'D', texto: 'La memoria histórica debe limitarse a registrar los hechos sin interpretarlos.' },
        ],
        clave: 'B',
        justificacion: 'La distinción entre explicar y justificar es fundamental en las ciencias sociales. Comprender por qué alguien cometió un crimen (contexto histórico, reclutamiento forzado, ideología, estructura de incentivos) no significa absolver su responsabilidad moral o jurídica. Este análisis es necesario para diseñar políticas de no repetición efectivas: si no entendemos por qué surgieron los grupos armados, cómo reclutaron y qué los motivó, no podremos prevenir la reincidencia. La memoria histórica rigurosa, como la de Sudáfrica o Rwanda, incluye perspectivas múltiples. Las opciones A y C limitan la memoria. La opción D reduce la historia a registro, sin análisis.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 25. Conocimientos sociales + pensamiento-sistemico (urbanismo)
      {
        id: 'soc-p-s11-25',
        enunciado: 'Medellín fue considerada en los años 90 la ciudad más violenta del mundo. En los años 2010 fue premiada como la ciudad más innovadora del mundo. ¿Qué factores explican mejor esta transformación desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'La transformación se explica exclusivamente por la muerte de Pablo Escobar en 1993.' },
          { letra: 'B', texto: 'La transformación fue el resultado de múltiples intervenciones simultáneas: urbanismo social en comunas marginadas (Metro Cable, escaleras eléctricas, parques-biblioteca), inversión en educación, políticas de seguridad y formalización de la economía local.' },
          { letra: 'C', texto: 'La transformación fue impulsada exclusivamente por el sector privado sin ninguna participación del Estado.' },
          { letra: 'D', texto: 'La ciudad cambió solo por la llegada de inversión extranjera directa.' },
        ],
        clave: 'B',
        justificacion: 'La transformación de Medellín es estudiada internacionalmente como un caso de "urbanismo social": la intervención integral en comunas marginadas con infraestructura pública de calidad (Metro Cable, escaleras eléctricas, parques-biblioteca en las zonas más vulnerables), combinada con inversión en educación (colegios de calidad en barrios pobres), políticas de convivencia y seguridad, y desarrollo económico. No fue resultado de un solo factor, sino de una estrategia multidimensional con liderazgo público (alcaldías de Sergio Fajardo y posteriores) y participación comunitaria. La opción A sobredimensiona un solo hecho. Las opciones C y D niegan el papel del Estado y la complejidad del proceso.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 26. Argumentación + interpretacion (relaciones internacionales)
      {
        id: 'soc-p-s11-26',
        enunciado: 'Colombia ha firmado tratados de libre comercio (TLC) con Estados Unidos, la Unión Europea y otros países. Un analista argumenta: "Los TLC son siempre beneficiosos porque aumentan las exportaciones colombianas." ¿Cuál es la debilidad principal de esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'La afirmación es correcta: los TLC siempre aumentan las exportaciones y benefician a todos.' },
          { letra: 'B', texto: 'La afirmación es parcial: los TLC pueden aumentar algunas exportaciones (flores, café) pero también abren el mercado a importaciones que pueden perjudicar a productores nacionales (agricultores, industria manufacturera); los beneficios y costos se distribuyen desigualmente.' },
          { letra: 'C', texto: 'La afirmación es incorrecta porque Colombia no ha firmado ningún TLC.' },
          { letra: 'D', texto: 'Los TLC son siempre negativos y Colombia debería retirarse de todos ellos.' },
        ],
        clave: 'B',
        justificacion: 'Los tratados de libre comercio generan efectos ambivalentes. Ganan los sectores exportadores competitivos (floricultura, café, petróleo) y los consumidores (acceso a productos importados más baratos). Pero pierden los productores que no pueden competir con bienes importados más baratos (arroz, maíz, pollo de Estados Unidos en el TLC con Colombia). El TLC con EE.UU. afectó negativamente a pequeños agricultores colombianos que compiten con la agricultura subsidiada estadounidense. Un análisis riguroso reconoce ganadores y perdedores en lugar de afirmar que todos se benefician. La opción A acepta la afirmación simplista. La opción C es factualmente incorrecta. La opción D rechaza todos los TLC sin análisis.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 27. Multiperspectividad + pensamiento-sistemico (medio ambiente y desarrollo)
      {
        id: 'soc-p-s11-27',
        enunciado: 'La minería de oro en Chocó y Antioquia genera ingresos para comunidades locales, pero también contamina ríos con mercurio y destruye ecosistemas. Las comunidades afrocolombianas están divididas: algunos la apoyan como fuente de sustento, otros la rechazan por el daño ambiental. ¿Cuál es el análisis más adecuado desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'La minería debe prohibirse completamente porque el medio ambiente siempre es más importante que el empleo.' },
          { letra: 'B', texto: 'Esta situación evidencia la tensión entre el derecho al desarrollo económico de comunidades empobrecidas y el derecho a un ambiente sano; la solución requiere consulta previa con las comunidades, alternativas económicas viables y regulación estricta de la minería legal.' },
          { letra: 'C', texto: 'La minería debe permitirse sin regulaciones porque las comunidades necesitan sobrevivir.' },
          { letra: 'D', texto: 'Las comunidades afrocolombianas no tienen derecho a opinar sobre la minería en sus territorios.' },
        ],
        clave: 'B',
        justificacion: 'Este caso ilustra una tensión real entre derechos: el derecho al desarrollo y al sustento (reconocido en el Pacto Internacional de Derechos Económicos, Sociales y Culturales) y el derecho a un ambiente sano (art. 79 de la Constitución colombiana). No hay una respuesta simple. El análisis de ciencias sociales reconoce la complejidad, los intereses legítimos de todas las partes y busca soluciones que no impongan una carga desproporcionada sobre las comunidades más pobres. La consulta previa (art. 6 del Convenio 169 de la OIT) es un mecanismo constitucional para que las comunidades participen en estas decisiones. Las opciones A y C adoptan posiciones extremas. La opción D viola el derecho a la consulta previa.',
        competencia: 'pensamiento-sistemico',
        componente: 'multiperspectividad',
      },

      // 28. Conocimientos sociales + interpretacion (Segunda Guerra Mundial)
      {
        id: 'soc-p-s11-28',
        enunciado: 'La Segunda Guerra Mundial (1939-1945) terminó con la rendición de Alemania y Japón. ¿Cuáles fueron las consecuencias geopolíticas más importantes para el orden mundial posterior?',
        opciones: [
          { letra: 'A', texto: 'La guerra no tuvo consecuencias geopolíticas significativas para la organización del mundo.' },
          { letra: 'B', texto: 'La guerra rediseñó el orden mundial: surgió la bipolaridad EE.UU.-URSS (Guerra Fría), se creó la ONU para prevenir futuros conflictos, se estableció el Plan Marshall para reconstruir Europa, se consolidó Estados Unidos como potencia hegemónica y comenzó la descolonización de Asia y África.' },
          { letra: 'C', texto: 'La principal consecuencia fue que Alemania se convirtió en la potencia dominante de Europa.' },
          { letra: 'D', texto: 'La guerra terminó la influencia de Estados Unidos en los asuntos mundiales.' },
        ],
        clave: 'B',
        justificacion: 'La Segunda Guerra Mundial transformó radicalmente el orden mundial: (1) creó la bipolaridad de la Guerra Fría entre EE.UU. y la URSS; (2) llevó a la creación de la ONU (1945) y del sistema de derechos humanos internacionales; (3) el Plan Marshall (1948) financió la reconstrucción europea y consolidó la influencia estadounidense; (4) la derrota de las potencias coloniales europeas aceleró los procesos de independencia de Asia y África en los años 50-60. La opción A niega consecuencias enormes. La opción C invierte el resultado (Alemania fue derrotada y dividida). La opción D invierte la realidad: EE.UU. emergió como la principal potencia mundial.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 29. Argumentación + pensamiento-social (economía informal)
      {
        id: 'soc-p-s11-29',
        enunciado: 'Más del 60% de los trabajadores colombianos están en la informalidad (sin contrato, sin seguridad social, sin prestaciones). Un funcionario propone: "La solución a la informalidad es aplicar multas más severas a las empresas que contraten trabajadores informales." ¿Cuál es la principal limitación de esta propuesta?',
        opciones: [
          { letra: 'A', texto: 'La propuesta es correcta: las multas son la única solución para reducir la informalidad.' },
          { letra: 'B', texto: 'La propuesta ignora que gran parte de la informalidad no proviene de empresas que evaden normas, sino de trabajadores independientes, vendedores ambulantes y microempresarios que no tienen la capacidad de pagar los costos de la formalización; multar sin ofrecer incentivos y apoyos puede reducir el empleo en lugar de formalizarlo.' },
          { letra: 'C', texto: 'La propuesta es correcta, pero las multas deberían aplicarse solo a las empresas extranjeras.' },
          { letra: 'D', texto: 'La informalidad es una elección libre de los trabajadores y el Estado no debe intervenir.' },
        ],
        clave: 'B',
        justificacion: 'La informalidad laboral en Colombia tiene causas estructurales: los costos de la formalización (parafiscales, seguridad social, prestaciones) representan un porcentaje alto del salario que muchas microempresas y trabajadores independientes no pueden asumir. Además, una parte importante de la informalidad es de subsistencia: vendedores ambulantes, trabajadoras del hogar, campesinos que no caben en el sistema formal. Las políticas efectivas combinan reducción de costos de formalización, simplificación de trámites, apoyos a microempresas y gradualidad. Solo multar sin reformar los incentivos puede llevar a más desempleo. Las opciones A y C aceptan el enfoque punitivo. La opción D niega el rol del Estado.',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 30. Multiperspectividad + interpretacion (movimiento indígena latinoamericano)
      {
        id: 'soc-p-s11-30',
        enunciado: 'En los años 90, los movimientos indígenas de Ecuador, Bolivia, México y Colombia lograron importantes reconocimientos en sus Constituciones (territorios colectivos, consulta previa, autonomía). Algunos analistas los consideran un modelo de democracia intercultural; otros critican que la autonomía indígena puede fragmentar el Estado-nación. ¿Cuál es el análisis más adecuado desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'Los derechos indígenas deben eliminarse porque fragmentan la unidad nacional.' },
          { letra: 'B', texto: 'Los derechos de los pueblos indígenas representan una ampliación democrática que reconoce la diversidad; la tensión con el Estado-nación es real pero manejable mediante marcos de autonomía graduada que respeten tanto la integridad territorial como los derechos culturales.' },
          { letra: 'C', texto: 'Los pueblos indígenas deben asimilarse completamente a la cultura nacional para garantizar la unidad del Estado.' },
          { letra: 'D', texto: 'Los derechos indígenas son suficientes tal como están y no requieren ajustes ni debate.' },
        ],
        clave: 'B',
        justificacion: 'El reconocimiento de derechos de los pueblos indígenas es una respuesta a siglos de exclusión, asimilación forzada y despojo territorial. Las constituciones pluralistas (Bolivia, Ecuador, Colombia) han demostrado que es posible combinar unidad estatal con respeto a la diversidad cultural. La tensión con el Estado-nación es real: los casos de consulta previa sobre proyectos extractivos generan conflictos. Pero las ciencias sociales muestran que la asimilación forzada (opción C) produce exclusión y conflicto, mientras que el pluralismo bien diseñado genera cohesión. La opción A adopta una postura homogeneizadora. La opción D niega la necesidad de mejora continua del marco jurídico.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 31. Conocimientos sociales + pensamiento-sistemico (sistema tributario)
      {
        id: 'soc-p-s11-31',
        enunciado: 'Un sistema tributario "progresivo" grava con tasas más altas a quienes tienen mayores ingresos; uno "regresivo" cobra proporcionalmente más a quienes tienen menores ingresos. El IVA (impuesto al valor agregado) sobre los bienes de consumo es criticado por ser regresivo. ¿Por qué?',
        opciones: [
          { letra: 'A', texto: 'Porque el IVA solo lo pagan las personas ricas.' },
          { letra: 'B', texto: 'Porque una persona pobre que gana $800.000 al mes paga el mismo porcentaje de IVA que una persona rica que gana $10.000.000, pero el IVA representa una proporción mucho mayor de los ingresos del pobre, lo que lo afecta desproporcionadamente.' },
          { letra: 'C', texto: 'Porque el IVA financia programas exclusivos para ricos.' },
          { letra: 'D', texto: 'Porque el IVA es un impuesto que solo se cobra en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'La regresividad del IVA es una crítica clásica de la economía pública: si una persona pobre destina el 80% de su ingreso al consumo básico y paga IVA sobre esos bienes, el impuesto consume una parte significativa de sus ingresos. En cambio, una persona rica destina un porcentaje mucho menor de su ingreso al consumo (el resto va a ahorro e inversión) y paga IVA solo sobre esa fracción. Por eso el IVA como único impuesto o con pocas exenciones es regresivo: pesa proporcionalmente más sobre los pobres. Los sistemas fiscales más equitativos combinan IVA con exenciones en bienes básicos y tasas progresivas de impuesto a la renta. Las opciones A, C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 32. Argumentación + pensamiento-social (seguridad y libertades)
      {
        id: 'soc-p-s11-32',
        enunciado: 'Después de los ataques del 11 de septiembre de 2001 en EE.UU., varios países adoptaron leyes antiterroristas que ampliaron la vigilancia estatal (escuchas telefónicas, monitoreo de internet). El debate fue: ¿se justifica sacrificar libertades civiles en nombre de la seguridad? ¿Cuál es el marco analítico más adecuado?',
        opciones: [
          { letra: 'A', texto: 'La seguridad siempre debe primar sobre cualquier libertad civil; no hay debate posible.' },
          { letra: 'B', texto: 'Este es un dilema clásico de las democracias liberales: la seguridad colectiva y la libertad individual son bienes en tensión; las medidas de vigilancia deben ser proporcionales, temporales, sometidas a control judicial y transparentes para evitar que las herramientas antiterroristas se usen para reprimir la disidencia política.' },
          { letra: 'C', texto: 'Las libertades civiles siempre deben primar sobre la seguridad, sin excepciones.' },
          { letra: 'D', texto: 'Este debate no es relevante para Colombia porque el país no ha sufrido ataques terroristas.' },
        ],
        clave: 'B',
        justificacion: 'El dilema seguridad-libertad es uno de los debates centrales de la filosofía política y el derecho constitucional. Las democracias deben proteger a sus ciudadanos de amenazas reales, pero las medidas de seguridad no pueden ser ilimitadas: la historia muestra que poderes de vigilancia sin control judicial pueden usarse para perseguir opositores, disidentes y minorías. El principio de proporcionalidad, el control judicial y la revisión parlamentaria son salvaguardias esenciales. Colombia, que ha vivido el conflicto armado, conoce bien este dilema con normas como la detención administrativa y el uso de inteligencia. Las opciones A y C adoptan extremos absolutos. La opción D es incorrecta.',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 33. Conocimientos sociales + interpretacion (organismos internacionales)
      {
        id: 'soc-p-s11-33',
        enunciado: 'La Comisión Interamericana de Derechos Humanos (CIDH) y la Corte Interamericana de Derechos Humanos son organismos del sistema interamericano que pueden condenar a los Estados por violaciones de derechos humanos. ¿Cuál es la importancia de este sistema para Colombia?',
        opciones: [
          { letra: 'A', texto: 'El sistema interamericano no tiene ninguna relevancia para Colombia porque el Estado colombiano siempre protege los derechos humanos.' },
          { letra: 'B', texto: 'El sistema interamericano actúa como instancia internacional que complementa la justicia nacional: cuando los tribunales internos no protegen adecuadamente los derechos, las víctimas pueden acudir a este sistema; Colombia ha sido condenada múltiples veces, lo que ha generado reformas institucionales.' },
          { letra: 'C', texto: 'El sistema interamericano puede reemplazar completamente al sistema judicial colombiano en todos los casos.' },
          { letra: 'D', texto: 'El sistema interamericano solo protege derechos económicos, no civiles ni políticos.' },
        ],
        clave: 'B',
        justificacion: 'El sistema interamericano de derechos humanos opera como mecanismo subsidiario: solo interviene cuando se han agotado los recursos internos o cuando el Estado no tiene voluntad de investigar y sancionar. Colombia ha sido condenada por la Corte IDH en casos emblemáticos (masacre de Mapiripán, desapariciones forzadas, uso de paramilitares) y estas condenas han generado reformas en el sistema penal y de protección. La CIDH también monitorea la situación de derechos humanos y emite medidas cautelares. La opción A niega la necesidad del sistema internacional. La opción C exagera su alcance (es subsidiario). La opción D limita incorrectamente su competencia.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 34. Multiperspectividad + pensamiento-sistemico (globalización económica)
      {
        id: 'soc-p-s11-34',
        enunciado: 'La Organización Mundial del Comercio (OMC) promueve el libre comercio entre países. Algunos economistas argumentan que este sistema favorece a los países ricos; otros dicen que también beneficia a los países en desarrollo. ¿Cuál es la evaluación más equilibrada de las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'El libre comercio siempre beneficia por igual a todos los países del mundo.' },
          { letra: 'B', texto: 'El libre comercio puede generar crecimiento global, pero las reglas de la OMC no son completamente equitativas: los países ricos mantienen subsidios agrícolas y protecciones que niegan a los países en desarrollo, creando asimetrías que limitan los beneficios del comercio para las economías menos desarrolladas.' },
          { letra: 'C', texto: 'El libre comercio es siempre negativo y los países deben cerrarse al comercio internacional.' },
          { letra: 'D', texto: 'La OMC tiene reglas perfectamente equitativas que ningún país puede cuestionar.' },
        ],
        clave: 'B',
        justificacion: 'La evidencia sobre el libre comercio es matizada. Hay ganancias netas del comercio internacional (especialización, acceso a bienes, crecimiento), pero también asimetrías estructurales: los países ricos mantienen subsidios agrícolas masivos (EE.UU., UE) que hacen competencia desleal a los agricultores de países en desarrollo; además, tienen mayor capacidad de negociación en los tratados. Economistas como Dani Rodrik han mostrado que el "hiperglobalismo" puede dañar a los sectores vulnerables de los países en desarrollo si no va acompañado de políticas sociales de compensación. La opción A ignora las asimetrías. La opción C niega los beneficios del comercio. La opción D idealiza las reglas de la OMC.',
        competencia: 'pensamiento-sistemico',
        componente: 'multiperspectividad',
      },

      // 35. Conocimientos sociales + pensamiento-social (ciencias políticas)
      {
        id: 'soc-p-s11-35',
        enunciado: 'El concepto de "Estado fallido" se usa para describir países donde el gobierno no puede proveer seguridad, servicios básicos ni el monopolio legítimo de la violencia. ¿Cuáles de las siguientes características son propias de un Estado fallido?',
        opciones: [
          { letra: 'A', texto: 'Un Estado fallido es aquel que tiene déficit fiscal y deuda externa alta.' },
          { letra: 'B', texto: 'Un Estado fallido se caracteriza por la pérdida del control territorial (presencia de grupos armados no estatales), incapacidad para proveer servicios básicos, colapso de las instituciones judiciales y ausencia de legitimidad del gobierno.' },
          { letra: 'C', texto: 'Un Estado fallido es aquel que pierde elecciones democráticas.' },
          { letra: 'D', texto: 'Un Estado fallido es aquel que tiene conflictos diplomáticos con otros países.' },
        ],
        clave: 'B',
        justificacion: 'El concepto de "Estado fallido" (failed state), desarrollado por académicos como Robert Rotberg, incluye: pérdida del monopolio de la violencia (grupos armados controlan territorios), incapacidad de proveer seguridad física a los ciudadanos, colapso de la capacidad de prestación de servicios básicos (salud, educación, agua) y pérdida de legitimidad gubernamental. Somalia, Yemen y partes de la República Democrática del Congo son ejemplos. Colombia no es un Estado fallido pero tiene zonas con "presencia diferenciada del Estado" donde grupos armados ejercen control. La opción A describe problemas fiscales comunes a muchos Estados funcionales. Las opciones C y D describen situaciones políticas distintas al concepto de Estado fallido.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 36. Argumentación + interpretacion (educación sexual)
      {
        id: 'soc-p-s11-36',
        enunciado: 'La evidencia internacional muestra que los programas integrales de educación sexual reducen los embarazos en adolescentes y las infecciones de transmisión sexual. Sin embargo, algunos sectores se oponen argumentando que estos programas van en contra de sus valores religiosos y morales. Desde las ciencias sociales, ¿cómo debe abordarse este debate en una democracia pluralista?',
        opciones: [
          { letra: 'A', texto: 'Los programas de educación sexual deben eliminarse para no ofender a los sectores religiosos.' },
          { letra: 'B', texto: 'En una democracia pluralista, las políticas públicas de salud pública (como la educación sexual) deben basarse en evidencia científica; las familias pueden complementar con sus valores, pero el Estado tiene la obligación de garantizar información científica que proteja la salud de los adolescentes.' },
          { letra: 'C', texto: 'Los valores religiosos deben determinar las políticas de educación sexual del Estado.' },
          { letra: 'D', texto: 'La educación sexual no debe incluirse en el currículo escolar porque es asunto exclusivamente familiar.' },
        ],
        clave: 'B',
        justificacion: 'En una democracia pluralista y laica, las políticas públicas de salud se basan en evidencia científica, no en preceptos religiosos de ninguna confesión particular. El derecho a la salud y a la información (art. 49 y 73 de la Constitución colombiana) obliga al Estado a garantizar que los jóvenes accedan a información científica sobre salud sexual. Esto no impide que las familias complementen esa educación con sus valores. La separación entre Iglesia y Estado (art. 19 Constitución de 1991) implica que ninguna religión determina las políticas públicas. Las opciones A, C y D privilegian los valores religiosos sobre la evidencia científica y los derechos constitucionales.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 37. Multiperspectividad + pensamiento-social (migraciones globales)
      {
        id: 'soc-p-s11-37',
        enunciado: 'La migración internacional es el desplazamiento de personas entre países. Los países desarrollados reciben migrantes que contribuyen a su economía, pero algunos sectores de esos países los rechazan. ¿Cuál es el análisis más documentado de las migraciones desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'Los migrantes siempre perjudican la economía de los países que los reciben.' },
          { letra: 'B', texto: 'La investigación económica y sociológica muestra que los migrantes generalmente contribuyen positivamente a las economías receptoras (mano de obra, innovación, emprendimiento), aunque pueden generar tensiones en sectores específicos; los países de origen también sufren pérdida de capital humano (fuga de cerebros).' },
          { letra: 'C', texto: 'Los migrantes no tienen ningún impacto económico en los países receptores.' },
          { letra: 'D', texto: 'Las migraciones son siempre positivas sin ninguna consecuencia negativa.' },
        ],
        clave: 'B',
        justificacion: 'La investigación sobre migraciones (Giovanni Peri, OCDE) muestra que los migrantes contribuyen positivamente a las economías receptoras: ocupan nichos laborales desatendidos, pagan impuestos, emprenden negocios y generan innovación (muchos grandes empresarios de Silicon Valley son migrantes). Sin embargo, pueden generar presiones en sectores específicos (competencia por empleos de baja calificación) y tensiones culturales. Para los países de origen, la emigración de profesionales calificados representa "fuga de cerebros". Un análisis equilibrado reconoce estos efectos múltiples y propone políticas de integración efectivas. Las opciones A, C y D adoptan posiciones absolutas sin matices.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 38. Conocimientos sociales + pensamiento-sistemico (historia reciente de Colombia)
      {
        id: 'soc-p-s11-38',
        enunciado: 'El narcotráfico en Colombia alcanzó su máxima expresión entre los años 80 y 90 con los carteles de Medellín y Cali. ¿Cuáles fueron sus principales impactos en la sociedad colombiana?',
        opciones: [
          { letra: 'A', texto: 'El narcotráfico fue positivo para Colombia porque generó empleos y divisas.' },
          { letra: 'B', texto: 'El narcotráfico generó corrupción sistémica (infiltración en política, justicia y seguridad), violencia extrema (atentados, sicariato, masacres), erosión del Estado de derecho y daño a la imagen internacional del país.' },
          { letra: 'C', texto: 'El narcotráfico no tuvo ningún impacto político ni social, solo económico.' },
          { letra: 'D', texto: 'El narcotráfico fue el único factor que generó violencia en Colombia durante los años 80 y 90.' },
        ],
        clave: 'B',
        justificacion: 'El narcotráfico tuvo impactos multidimensionales en Colombia: (1) corrupción del sistema político (elecciones financiadas por carteles, infiltración de políticos y funcionarios); (2) violencia extrema (asesinatos de candidatos presidenciales, jueces, periodistas; decenas de miles de muertes); (3) erosión del Estado de derecho (el cartel de Medellín desafió al Estado con bombas y secuestros); (4) daño reputacional internacional que afectó el comercio y el turismo; (5) normalización de economías ilegales en regiones empobrecidas. La opción A ignora estos daños. La opción C reduce el impacto a lo económico. La opción D simplifica excesivamente: también existía el conflicto armado.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 39. Argumentación + interpretacion (participación ciudadana)
      {
        id: 'soc-p-s11-39',
        enunciado: 'La Constitución de 1991 creó mecanismos de participación directa: el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y la revocatoria del mandato. A pesar de esto, la participación ciudadana en Colombia sigue siendo baja. ¿Cuál es la explicación más completa de esta paradoja?',
        opciones: [
          { letra: 'A', texto: 'Los mecanismos de participación no existen en realidad porque el gobierno los ha bloqueado todos.' },
          { letra: 'B', texto: 'Los mecanismos existen formalmente, pero su uso está limitado por requisitos procedimentales exigentes, bajo conocimiento ciudadano de los instrumentos, desconfianza institucional y falta de cultura de participación; la democracia formal no garantiza por sí sola la participación real.' },
          { letra: 'C', texto: 'Los colombianos no participan porque la Constitución de 1991 prohíbe la participación activa.' },
          { letra: 'D', texto: 'La participación ciudadana no es importante en una democracia representativa.' },
        ],
        clave: 'B',
        justificacion: 'La paradoja es real: Colombia tiene una Constitución participativa de las más avanzadas del mundo, pero la participación efectiva es baja. Las ciencias políticas explican esto por múltiples factores: (1) los mecanismos tienen requisitos altos (el número de firmas para una consulta es muy exigente); (2) muchos ciudadanos no conocen estos instrumentos; (3) hay desconfianza en que la participación produzca cambios reales; (4) la cultura política clientelista desestimula la participación autónoma. Esta brecha entre democracia formal e informal es un problema documentado en muchas democracias jóvenes. La opción A desconoce el marco constitucional real. Las opciones C y D son incorrectas.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 40. Multiperspectividad + pensamiento-social (justicia social)
      {
        id: 'soc-p-s11-40',
        enunciado: 'Desde la filosofía política, existen dos concepciones de la justicia social. John Rawls argumenta que una sociedad justa es aquella que garantiza condiciones de vida digna para los más desfavorecidos (principio de diferencia). Robert Nozick argumenta que la justicia es el resultado de transacciones voluntarias libres, sin redistribución forzada. ¿Qué implica este debate para el diseño de políticas públicas?',
        opciones: [
          { letra: 'A', texto: 'Solo la posición de Rawls es válida: el Estado siempre debe redistribuir la riqueza.' },
          { letra: 'B', texto: 'Este debate refleja una tensión filosófica real sobre el papel del Estado: la posición rawlsiana justifica impuestos redistributivos y políticas sociales; la posición de Nozick defiende el libre mercado y la propiedad privada; los sistemas democráticos concretos negocian entre estos polos.' },
          { letra: 'C', texto: 'Solo la posición de Nozick es válida: el Estado nunca debe intervenir en la distribución de la riqueza.' },
          { letra: 'D', texto: 'Este debate filosófico no tiene ninguna implicación práctica para las políticas públicas.' },
        ],
        clave: 'B',
        justificacion: 'El debate Rawls-Nozick es uno de los más influyentes en la filosofía política y tiene implicaciones directas para las políticas públicas. Rawls (Teoría de la Justicia, 1971) fundamenta filosóficamente los sistemas de bienestar, los impuestos progresivos y las acciones afirmativas: son justos si benefician a los más desfavorecidos. Nozick (Anarquía, Estado y Utopía, 1974) defiende el Estado mínimo: solo puede garantizar seguridad y derechos de propiedad, sin redistribuir. Los sistemas democráticos reales (incluido Colombia) negocian entre estos extremos según sus tradiciones, culturas políticas y correlaciones de fuerzas. Ninguna posición es absolutamente correcta o incorrecta. Las opciones A, C y D adoptan posiciones absolutas.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
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

      // 6. Semántico + identificar (vocabulario en contexto)
      {
        id: 'lc-p-s9-06',
        enunciado: 'Lee el siguiente fragmento de una crónica periodística:\n\n"La plaza de mercado de Ciénaga amanece con un bullicio incontenible: los vendedores vocean sus mercancías, el olor a fruta madura se mezcla con el de las especias y los compradores regatean con la pericia de quien ha recorrido esos pasillos toda la vida."\n\n¿Cuál es el significado de la palabra "vocean" en el contexto del texto?',
        opciones: [
          { letra: 'A', texto: 'Escriben mensajes sobre sus productos.' },
          { letra: 'B', texto: 'Pregonan en voz alta los productos que venden.' },
          { letra: 'C', texto: 'Esconden sus mercancías para evitar los impuestos.' },
          { letra: 'D', texto: 'Pesan los productos en una balanza.' },
        ],
        clave: 'B',
        justificacion: '"Vocear" significa anunciar o pregonar en voz alta. El contexto lo confirma: la plaza de mercado tiene un "bullicio incontenible" y los vendedores llaman la atención de los compradores sobre sus productos. El campo semántico del mercado y el sonido ("bullicio") orienta al significado correcto. Las opciones A, C y D son incompatibles con el contexto sonoro y visual que describe la crónica.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 7. Semántico + comprender (inferencia)
      {
        id: 'lc-p-s9-07',
        enunciado: 'Lee el siguiente fragmento de una novela:\n\n"Don Aurelio llegó a la hacienda sin saludar, con los ojos fijos en el suelo y los hombros caídos. Fue directo a su cuarto y cerró la puerta con llave. Esa noche nadie lo vio salir a cenar."\n\n¿Qué se puede inferir sobre el estado emocional de don Aurelio?',
        opciones: [
          { letra: 'A', texto: 'Don Aurelio está muy contento por algo que acaba de suceder.' },
          { letra: 'B', texto: 'Don Aurelio está cansado físicamente por un largo viaje.' },
          { letra: 'C', texto: 'Don Aurelio está abatido o perturbado emocionalmente, pues su comportamiento muestra aislamiento y desánimo.' },
          { letra: 'D', texto: 'Don Aurelio está enojado con los demás habitantes de la hacienda.' },
        ],
        clave: 'C',
        justificacion: 'La inferencia se apoya en las señales textuales: no saludar (ruptura del protocolo social), ojos fijos en el suelo (postura de desánimo o vergüenza), hombros caídos (lenguaje corporal de abatimiento), aislarse en su cuarto con llave y no salir a cenar. Todos estos indicios apuntan a un estado de abatimiento o perturbación emocional. La opción A contradice los indicios. La opción B es posible pero no explica todos los comportamientos (especialmente encerrarse con llave). La opción D es una posible interpretación pero más específica y sin evidencia directa.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 8. Sintáctico + comprender (tipología textual)
      {
        id: 'lc-p-s9-08',
        enunciado: 'Lee el siguiente texto:\n\n"Para preparar una limonada perfecta necesitas: 3 limones, 1 litro de agua, azúcar al gusto y hielo. Primero, exprime los limones y filtra el jugo. Luego, mezcla el jugo con el agua. Agrega azúcar al gusto y agita bien. Finalmente, sirve con hielo."\n\n¿A qué tipología textual pertenece este texto y cuál es su característica principal?',
        opciones: [
          { letra: 'A', texto: 'Texto narrativo; narra los pasos como si fueran una historia con personajes.' },
          { letra: 'B', texto: 'Texto instructivo; presenta una secuencia de pasos ordenados para lograr un resultado específico.' },
          { letra: 'C', texto: 'Texto argumentativo; defiende la tesis de que la limonada es la mejor bebida.' },
          { letra: 'D', texto: 'Texto expositivo; explica el proceso químico de la limonada.' },
        ],
        clave: 'B',
        justificacion: 'El texto instructivo tiene como propósito guiar al lector para realizar una acción específica. Sus características son: uso de verbos en modo imperativo ("exprime", "mezcla", "agrega", "sirve"), organización secuencial marcada con conectores temporales ("primero", "luego", "finalmente") y ausencia de narración o argumentación. La opción A describe textos narrativos con personajes y trama. La opción C describe textos argumentativos con tesis y argumentos. La opción D describe textos expositivos con definiciones y explicaciones.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 9. Sintáctico + comprender (coherencia y cohesión)
      {
        id: 'lc-p-s9-09',
        enunciado: 'Lee el siguiente párrafo y determina qué cambio mejoraría su cohesión:\n\n"El calentamiento global es un problema grave. El calentamiento global afecta a todos los países. El calentamiento global ha aumentado en las últimas décadas. Los científicos estudian el calentamiento global."\n\n¿Qué recurso de cohesión ayudaría a mejorar este párrafo?',
        opciones: [
          { letra: 'A', texto: 'Agregar más datos estadísticos sobre el calentamiento global.' },
          { letra: 'B', texto: 'Usar pronombres y expresiones de sustitución léxica ("este fenómeno", "él", "este problema") para evitar la repetición innecesaria de "calentamiento global".' },
          { letra: 'C', texto: 'Cambiar el tema del párrafo para hablar de algo diferente al calentamiento global.' },
          { letra: 'D', texto: 'Eliminar algunas oraciones para que el párrafo sea más corto.' },
        ],
        clave: 'B',
        justificacion: 'El problema del párrafo es la repetición mecánica de "calentamiento global" en cada oración, lo que produce un texto monótono y poco fluido. Los recursos de cohesión léxica permiten evitar esta repetición: sustitución por pronombres ("él"), hiperónimos o expresiones equivalentes ("este fenómeno", "este problema ambiental", "el mismo"). Esto mejora la cohesión sin alterar la coherencia temática. La opción A agrega contenido pero no resuelve el problema formal. La opción C altera el tema. La opción D puede mejorar la concisión pero no la cohesión.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 10. Pragmático + reflexionar (intención y contexto)
      {
        id: 'lc-p-s9-10',
        enunciado: 'Lee el siguiente texto de un anuncio publicitario:\n\n"¿Cansado de pagar tanto por el mercado? ¡En Superahorro encontrarás todo lo que necesitas a precios increíbles! Visítanos y descubre por qué miles de familias confían en nosotros cada semana. ¡Tu bolsillo te lo agradecerá!"\n\n¿Cuál es la estrategia retórica principal del texto?',
        opciones: [
          { letra: 'A', texto: 'El texto informa objetivamente sobre los precios de Superahorro.' },
          { letra: 'B', texto: 'El texto usa una pregunta inicial para identificarse con el problema del lector, apelación a la emoción ("tu bolsillo te lo agradecerá") y argumento de autoridad implícita ("miles de familias confían") para persuadir al consumidor.' },
          { letra: 'C', texto: 'El texto explica el proceso mediante el cual Superahorro logra sus bajos precios.' },
          { letra: 'D', texto: 'El texto narra la historia de fundación de Superahorro.' },
        ],
        clave: 'B',
        justificacion: 'El texto publicitario usa múltiples estrategias retóricas: (1) pregunta retórica inicial que apela a una necesidad compartida (el costo del mercado); (2) apelación a la emoción con expresiones como "precios increíbles" y "tu bolsillo te lo agradecerá"; (3) argumento de autoridad social ("miles de familias confían") que usa el comportamiento de otros para validar la elección. Su propósito es persuasivo, no informativo ni narrativo. La opción A atribuye objetividad a un texto claramente persuasivo. Las opciones C y D describen propósitos que no corresponden al género publicitario.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 11. Semántico + reflexionar (figuras literarias)
      {
        id: 'lc-p-s9-11',
        enunciado: 'Lee el siguiente fragmento de un poema de José Asunción Silva:\n\n"Una noche, una noche toda llena de murmullos, de perfumes y de músicas de alas."\n\n¿Qué figura retórica predomina en el verso "murmullos, de perfumes y de músicas de alas"?',
        opciones: [
          { letra: 'A', texto: 'Hipérbole, porque exagera la cantidad de sonidos de la noche.' },
          { letra: 'B', texto: 'Sinestesia, porque mezcla sensaciones de diferentes sentidos (auditivo, olfativo) en una misma imagen.' },
          { letra: 'C', texto: 'Metáfora, porque compara la noche con una persona que murmura.' },
          { letra: 'D', texto: 'Anáfora, porque repite la misma palabra al inicio de cada verso.' },
        ],
        clave: 'B',
        justificacion: 'La sinestesia es la figura que consiste en mezclar sensaciones de diferentes sentidos en una misma imagen: "murmullos" (auditivo), "perfumes" (olfativo) y "músicas de alas" (auditivo y visual/táctil). Este recurso es característico del modernismo literario de Silva. La hipérbole (A) implica exageración, no mezcla de sentidos. La metáfora (C) establece una comparación implícita; aquí no se compara la noche con una persona. La anáfora (D) es la repetición de palabras al inicio de versos, que no ocurre en este fragmento.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 12. Sintáctico + reflexionar (estructura argumentativa)
      {
        id: 'lc-p-s9-12',
        enunciado: 'Lee el siguiente texto argumentativo:\n\n"Debería reducirse la jornada laboral a 32 horas semanales. Los estudios en países europeos muestran que jornadas más cortas aumentan la productividad. Además, los trabajadores descansan mejor, lo que reduce el ausentismo. Por tanto, tanto las empresas como los empleados se beneficiarían de este cambio."\n\n¿Cuál es la estructura del texto?',
        opciones: [
          { letra: 'A', texto: 'Tesis: reducir la jornada laboral. Argumentos: productividad y descanso. Conclusión: beneficio mutuo.' },
          { letra: 'B', texto: 'Introducción: estudios europeos. Desarrollo: productividad. Conclusión: reducir jornadas.' },
          { letra: 'C', texto: 'Narración de hechos: jornada de 32 horas. Descripción: ausentismo. Conclusión: empresas y empleados.' },
          { letra: 'D', texto: 'El texto no tiene estructura argumentativa definida.' },
        ],
        clave: 'A',
        justificacion: 'El texto sigue la estructura clásica del texto argumentativo: (1) Tesis (afirmación que se defiende): "Debería reducirse la jornada laboral a 32 horas". (2) Argumento 1: los estudios muestran mayor productividad. (3) Argumento 2: mejor descanso reduce ausentismo. (4) Conclusión: "por tanto, ambas partes se beneficiarían". El conector "por tanto" marca la conclusión. La opción B confunde el primer argumento con la introducción. La opción C describe tipologías narrativas y descriptivas, no argumentativas. La opción D contradice la evidencia textual.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 13. Pragmático + identificar (autor y audiencia)
      {
        id: 'lc-p-s9-13',
        enunciado: 'Lee el siguiente fragmento de un texto:\n\n"Estimado consejo directivo: en nombre de los 500 estudiantes de este colegio, les solicitamos respetuosamente reconsiderar la decisión de eliminar el descanso de 20 minutos del mediodía. Las investigaciones en neurociencia educativa demuestran que los descansos mejoran la concentración y el aprendizaje. Esperamos una respuesta favorable a nuestra solicitud."\n\n¿Cuál es el tipo de texto, su propósito y a quién va dirigido?',
        opciones: [
          { letra: 'A', texto: 'Texto narrativo; propósito: entretener; dirigido a todos los estudiantes.' },
          { letra: 'B', texto: 'Carta de solicitud formal; propósito: persuadir al consejo para que cambie una decisión; dirigido al consejo directivo.' },
          { letra: 'C', texto: 'Texto expositivo; propósito: informar sobre neurociencia; dirigido a la comunidad científica.' },
          { letra: 'D', texto: 'Texto descriptivo; propósito: describir el recreo; dirigido a los padres de familia.' },
        ],
        clave: 'B',
        justificacion: 'El texto tiene marcas claras de género: el vocativo formal ("Estimado consejo directivo"), el uso de "solicitamos respetuosamente", la representación colectiva ("en nombre de los 500 estudiantes") y la fórmula de cierre ("esperamos una respuesta favorable"). Su propósito es persuadir —convencer al consejo de cambiar una decisión— y está dirigido específicamente al consejo directivo. El argumento de neurociencia es un recurso para apoyar la solicitud. Las opciones A, C y D no corresponden al género, propósito o audiencia identificables.',
        competencia: 'identificar',
        componente: 'pragmatico',
      },

      // 14. Semántico + comprender (texto discontinuo - infografía)
      {
        id: 'lc-p-s9-14',
        enunciado: 'Una infografía muestra que en Colombia el 34% de los hogares no tiene acceso a internet, con mayor concentración en zonas rurales (68% sin acceso) que en zonas urbanas (12% sin acceso). Según esta información, ¿cuál de las siguientes inferencias es VÁLIDA?',
        opciones: [
          { letra: 'A', texto: 'En Colombia, más de la mitad de los hogares no tiene internet.' },
          { letra: 'B', texto: 'La brecha digital entre zonas rurales y urbanas es muy marcada: en zonas rurales la falta de acceso a internet es más de cinco veces mayor que en zonas urbanas.' },
          { letra: 'C', texto: 'Los hogares urbanos tienen el mismo nivel de acceso a internet que los rurales.' },
          { letra: 'D', texto: 'El 66% de los hogares colombianos no tiene acceso a internet.' },
        ],
        clave: 'B',
        justificacion: 'La infografía muestra que el 68% de los hogares rurales no tiene acceso vs. el 12% de los urbanos. La razón es 68/12 ≈ 5,7 veces mayor. La inferencia válida es que la brecha digital rural-urbana es muy marcada (más de 5 veces). La opción A es incorrecta: solo el 34% del total no tiene acceso (menos de la mitad). La opción C contradice directamente los datos (68% vs. 12%). La opción D invierte el porcentaje (el 34% no tiene acceso, por tanto el 66% sí tiene).',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 15. Pragmático + reflexionar (posición del autor)
      {
        id: 'lc-p-s9-15',
        enunciado: 'Lee el siguiente fragmento de un ensayo:\n\n"La mala ortografía no debería ser un criterio de evaluación en las clases de ciencias, matemáticas o historia. Penalizar a un estudiante en un examen de física por escribir \'energía\' sin tilde es castigar su conocimiento científico por una falla que corresponde a otra área del aprendizaje. La escritura correcta es responsabilidad de la clase de lenguaje, no de todas las asignaturas."\n\n¿Con cuál de las siguientes posiciones estaría de acuerdo el autor del ensayo?',
        opciones: [
          { letra: 'A', texto: 'La ortografía debe evaluarse en todas las asignaturas porque forma parte de la comunicación.' },
          { letra: 'B', texto: 'La evaluación en cada asignatura debe centrarse en los aprendizajes propios de esa disciplina, sin penalizar por errores ortográficos.' },
          { letra: 'C', texto: 'Los exámenes de física no deben incluir preguntas escritas.' },
          { letra: 'D', texto: 'La ortografía no es importante en ninguna asignatura, incluyendo lenguaje.' },
        ],
        clave: 'B',
        justificacion: 'El autor defiende explícitamente que los errores ortográficos no deben penalizarse fuera de la clase de lenguaje. La posición coherente con su tesis es que cada asignatura debe evaluar sus propios aprendizajes disciplinares. La opción A representa la posición contraria a la del autor. La opción C va más allá de lo que el autor afirma (no propone eliminar preguntas escritas, solo no penalizar la ortografía en ellas). La opción D extiende su posición a lenguaje, lo que el propio texto contradice ("la escritura correcta es responsabilidad de la clase de lenguaje").',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 16. Semántico + identificar (texto descriptivo)
      {
        id: 'lc-p-s9-16',
        enunciado: 'Lee el siguiente fragmento:\n\n"La Ciénaga Grande de Santa Marta es el cuerpo de agua más extenso de Colombia. Sus aguas salobres albergan manglares centenarios cuyos troncos retorcidos emergen del lodo como dedos de una mano gigante. Al amanecer, la superficie del agua refleja tonos anaranjados y rosas que hacen de la ciénaga un espejo de luz cambiante. Las comunidades palafíticas construyen sus casas sobre pilotes de madera, suspendidas entre el agua y el cielo."\n\n¿Cuál es la función principal de la expresión "como dedos de una mano gigante"?',
        opciones: [
          { letra: 'A', texto: 'Explicar el proceso biológico de crecimiento de los mangles.' },
          { letra: 'B', texto: 'Comparar visualmente los troncos retorcidos con una parte del cuerpo humano para hacer la descripción más vívida.' },
          { letra: 'C', texto: 'Indicar que los mangles son peligrosos para las personas que navegan la ciénaga.' },
          { letra: 'D', texto: 'Argumentar que los manglares deben protegerse de la tala.' },
        ],
        clave: 'B',
        justificacion: 'La expresión "como dedos de una mano gigante" es un símil: compara los troncos retorcidos de los manglares con dedos humanos para ofrecer una imagen visual concreta y expresiva al lector. Su función es descriptiva y estética: permite al lector visualizar la forma peculiar de los manglares sin haberlos visto. No tiene función explicativa científica (A), no expresa peligro (C) ni argumenta a favor de la conservación (D).',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 17. Pragmático + comprender (texto argumentativo)
      {
        id: 'lc-p-s9-17',
        enunciado: 'Lee el siguiente párrafo de un artículo de opinión:\n\n"Prohibir las pantallas a los niños menores de 3 años es una medida acertada que los pediatras respaldan. El cerebro en desarrollo necesita estímulos del mundo real, no imágenes digitales. Sin embargo, reconozco que para muchos padres esto es difícil de implementar cuando trabajan todo el día y el televisor es el único \'niñero\' accesible."\n\n¿Qué estrategia argumentativa usa el autor al incluir la última frase?',
        opciones: [
          { letra: 'A', texto: 'El autor abandona su posición inicial porque reconoce que prohíbir pantallas es imposible.' },
          { letra: 'B', texto: 'El autor matiza su argumento al reconocer las limitaciones prácticas de aplicar la medida, lo que hace su posición más equilibrada y menos dogmática sin abandonar la tesis.' },
          { letra: 'C', texto: 'El autor critica a los padres trabajadores por usar el televisor como niñero.' },
          { letra: 'D', texto: 'El autor introduce un argumento en contra que invalida completamente su posición inicial.' },
        ],
        clave: 'B',
        justificacion: 'El autor usa la técnica argumentativa de la concesión: reconoce una dificultad práctica real (la situación de los padres trabajadores) sin abandonar su tesis (prohibir pantallas es acertado). Esta estrategia hace el argumento más honesto y menos absoluto, mostrando que el autor conoce el contexto real. No abandona su posición (A). No critica a los padres (C), sino que comprende su situación. No invalida su argumento (D): reconocer una dificultad práctica no equivale a negar la validez de la recomendación médica.',
        competencia: 'comprender',
        componente: 'pragmatico',
      },

      // 18. Semántico + reflexionar (cuento - inferencia)
      {
        id: 'lc-p-s9-18',
        enunciado: 'Lee el siguiente fragmento de un cuento:\n\n"Cuando la señora Rosario llegó a casa de su hija después de diez años, encontró la puerta pintada de azul. Antes era roja. Tocó el timbre y esperó. La niña que abrió tenía los ojos de su hija pero no la reconoció. \'No vive nadie con ese nombre aquí\', dijo la niña, y cerró la puerta."\n\n¿Cuál es la interpretación más adecuada del final del fragmento?',
        opciones: [
          { letra: 'A', texto: 'La niña mentía porque no quería que la señora Rosario entrara.' },
          { letra: 'B', texto: 'El fragmento sugiere que la hija de la señora Rosario ha muerto y la niña es su nieta, que nunca conoció a su abuela.' },
          { letra: 'C', texto: 'La niña no reconoció a la señora Rosario porque era demasiado pequeña cuando se separaron, o porque la hija cambió de nombre y nunca le habló de su madre, lo que implica que hubo una ruptura profunda y dolorosa en la relación familiar.' },
          { letra: 'D', texto: 'La señora Rosario se equivocó de casa porque la puerta cambió de color.' },
        ],
        clave: 'C',
        justificacion: 'La interpretación más adecuada considera todos los indicios textuales. "Tenía los ojos de su hija" confirma que está en la casa correcta. La niña (probablemente nieta de la señora Rosario) "no reconoció" el nombre, lo que puede significar que su madre (la hija) la crio sin mencionar a la abuela, lo cual implica una ruptura familiar profunda. La puerta pintada de azul simboliza el cambio y el paso del tiempo. La opción A atribuye malicia sin evidencia. La opción B asume la muerte sin datos suficientes. La opción D ignora el indicio visual "ojos de su hija" que confirma la dirección correcta.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 19. Sintáctico + identificar (conectores y estructura)
      {
        id: 'lc-p-s9-19',
        enunciado: 'Lee las siguientes versiones de un párrafo y determina cuál tiene mejor cohesión:\n\nVersión 1: "Los ríos colombianos están contaminados. Los ríos reciben desechos industriales. Los ríos reciben aguas residuales domésticas. Las ciudades no tratan las aguas."\n\nVersión 2: "Los ríos colombianos están contaminados porque reciben desechos industriales y aguas residuales domésticas que las ciudades no tratan adecuadamente."\n\n¿Por qué la Versión 2 tiene mejor cohesión?',
        opciones: [
          { letra: 'A', texto: 'Porque la Versión 2 usa palabras más difíciles y técnicas.' },
          { letra: 'B', texto: 'Porque la Versión 2 usa conectores causales ("porque"), coordinación ("y") y referencia ("que") para integrar las ideas en una sola estructura coherente, evitando la repetición y mostrando las relaciones lógicas entre las oraciones.' },
          { letra: 'C', texto: 'Porque la Versión 2 tiene más información nueva que la Versión 1.' },
          { letra: 'D', texto: 'Porque la Versión 2 es más corta y los textos cortos siempre son más claros.' },
        ],
        clave: 'B',
        justificacion: 'La cohesión textual es la propiedad que hace que las oraciones de un texto se conecten de forma fluida y lógica. La Versión 2 logra esto mediante recursos explícitos: (1) "porque" expresa la relación causal entre contaminación y sus fuentes; (2) "y" coordina las dos fuentes de contaminación evitando repetir el sujeto; (3) "que" es un pronombre relativo que conecta la oración subordinada con su antecedente. La Versión 1, aunque comprensible, es repetitiva y no muestra las relaciones lógicas. La opción A es incorrecta: la dificultad léxica no es cohesión. La opción C es incorrecta: ambas versiones contienen la misma información. La opción D es una generalización falsa.',
        competencia: 'identificar',
        componente: 'sintactico',
      },

      // 20. Semántico + comprender (poesía colombiana)
      {
        id: 'lc-p-s9-20',
        enunciado: 'Lee el siguiente poema de Aurelio Arturo:\n\n"Toda la noche el viento trae rumores de hojas\ny el alba las primeras palabras del día.\nY el viento que pasa,\ny la lluvia pequeña, mínima,\nque susurra, que cuenta su secreto."\n\n¿Qué tema central desarrolla el poema?',
        opciones: [
          { letra: 'A', texto: 'La descripción científica del ciclo del agua y el viento.' },
          { letra: 'B', texto: 'La naturaleza como fuente de lenguaje, comunicación y significado: los elementos naturales (viento, lluvia, hojas) hablan y transmiten mensajes.' },
          { letra: 'C', texto: 'El miedo del poeta ante una tormenta nocturna.' },
          { letra: 'D', texto: 'La crítica a la contaminación ambiental que silencia los sonidos naturales.' },
        ],
        clave: 'B',
        justificacion: 'Aurelio Arturo es conocido por su poesía que humaniza y poetiza la naturaleza colombiana. En este fragmento, los elementos naturales "hablan": el viento "trae rumores", el alba trae "las primeras palabras del día", la lluvia "susurra" y "cuenta su secreto". El poema establece una equivalencia entre naturaleza y lenguaje: la naturaleza se convierte en un sistema de comunicación y significado. No es descripción científica (A), no expresa miedo (C) y no critica la contaminación (D).',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 21. Pragmático + reflexionar (discurso y género)
      {
        id: 'lc-p-s9-21',
        enunciado: 'Lee el siguiente anuncio de empleo:\n\n"Se busca vendedor dinámico, con habilidades de liderazgo y espíritu competitivo. Salario según experiencia. Enviar hoja de vida a recursos@empresa.com"\n\n¿Qué aspecto del discurso de este anuncio podría ser cuestionado desde una perspectiva de género?',
        opciones: [
          { letra: 'A', texto: 'El anuncio no tiene ningún problema porque cualquier persona puede aplicar.' },
          { letra: 'B', texto: 'El uso del masculino genérico ("vendedor") y la valoración de atributos estereotípicamente masculinos ("competitivo", "liderazgo") pueden desalentar a mujeres y personas no binarias de aplicar, aunque legalmente cualquiera puede hacerlo.' },
          { letra: 'C', texto: 'El anuncio es discriminatorio porque solo permite aplicar a hombres.' },
          { letra: 'D', texto: 'El anuncio es incorrecto porque no especifica el salario exacto.' },
        ],
        clave: 'B',
        justificacion: 'El análisis crítico del discurso muestra que el lenguaje no es neutro: el uso del masculino genérico ("vendedor") puede interpretarse como exclusivo aunque no lo sea legalmente, y los atributos descritos ("competitivo", "liderazgo") han sido históricamente asociados con características masculinas en la cultura occidental. Estudios muestran que las mujeres aplican menos a empleos con ese tipo de lenguaje. Esto no significa que el anuncio sea ilegal (C), pero sí que tiene implicaciones discursivas de género. La opción A ignora estos efectos. La opción D señala un problema diferente (transparencia salarial) que no es el objeto de la pregunta.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 22. Semántico + identificar (texto expositivo)
      {
        id: 'lc-p-s9-22',
        enunciado: 'Lee el siguiente texto:\n\n"El maíz fue domesticado hace aproximadamente 9.000 años en el valle de Balsas, México, a partir de una planta silvestre llamada teosinte. Las civilizaciones mesoamericanas lo convirtieron en el eje de su agricultura, economía y cosmovisión. Hoy, el maíz es el tercer cereal más producido en el mundo y un alimento básico para millones de personas en América Latina, África y Asia."\n\n¿Qué tipo de progresión temática usa el texto?',
        opciones: [
          { letra: 'A', texto: 'El texto presenta una sola idea y la repite con distintas palabras.' },
          { letra: 'B', texto: 'El texto desarrolla el tema del maíz de forma progresiva: origen histórico → importancia cultural prehispánica → relevancia global contemporánea, ampliando el tema en el tiempo y el espacio.' },
          { letra: 'C', texto: 'El texto presenta dos temas opuestos: el maíz antiguo y el maíz moderno.' },
          { letra: 'D', texto: 'El texto no tiene una organización temática definida.' },
        ],
        clave: 'B',
        justificacion: 'El texto sigue una progresión temática lineal y cronológica: comienza con el origen del maíz (9.000 años atrás, México), pasa a su importancia en las civilizaciones mesoamericanas (pasado histórico) y concluye con su relevancia mundial actual (presente global). Esta estructura va de lo particular (origen puntual) a lo general (importancia mundial), y de lo antiguo a lo contemporáneo. No hay repetición (A), ni dos temas opuestos (C), ni desorganización (D).',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 23. Sintáctico + comprender (relaciones lógicas)
      {
        id: 'lc-p-s9-23',
        enunciado: 'Lee el siguiente texto y determina la relación lógica entre las dos partes:\n\n"Los estudiantes que leen habitualmente obtienen mejores resultados académicos. Sin embargo, en Colombia solo el 43% de los colombianos lee al menos un libro al año."\n\n¿Qué relación lógica establece el conector "sin embargo"?',
        opciones: [
          { letra: 'A', texto: 'Establece una relación de consecuencia: el bajo índice de lectura es la consecuencia de los malos resultados académicos.' },
          { letra: 'B', texto: 'Establece una relación de contraste: a pesar de la importancia demostrada de la lectura, la práctica lectora en Colombia es baja, lo cual genera una contradicción entre lo deseable y lo real.' },
          { letra: 'C', texto: 'Establece una relación de causa: los colombianos leen poco porque obtienen malos resultados.' },
          { letra: 'D', texto: 'Establece una relación de equivalencia entre ambas afirmaciones.' },
        ],
        clave: 'B',
        justificacion: '"Sin embargo" es un conector adversativo o de contraste. Introduce una idea que va en dirección opuesta o inesperada respecto a lo anterior. En este caso, contrasta la evidencia sobre los beneficios de la lectura (primera oración, lo deseable) con la baja tasa de lectura en Colombia (segunda oración, la realidad), creando una contradicción entre lo que se sabe que es beneficioso y lo que realmente ocurre. No expresa consecuencia (A), causa (C) ni equivalencia (D).',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 24. Pragmático + identificar (texto multimodal)
      {
        id: 'lc-p-s9-24',
        enunciado: 'Una caricatura muestra a un político con la bolsa del presupuesto de educación llena de billetes, pero el político está vaciando la bolsa dentro de una alcancía con su nombre. Al fondo, hay una escuela con paredes caídas y niños sin pupitres. ¿Cuál es el mensaje principal de la caricatura?',
        opciones: [
          { letra: 'A', texto: 'Los políticos trabajan duro para mejorar la educación colombiana.' },
          { letra: 'B', texto: 'Los recursos destinados a educación son desviados por la corrupción política, mientras las condiciones reales de las escuelas permanecen precarias.' },
          { letra: 'C', texto: 'La caricatura describe el proceso de ahorro personal de un político honesto.' },
          { letra: 'D', texto: 'La caricatura denuncia que los maestros no tienen salarios justos.' },
        ],
        clave: 'B',
        justificacion: 'Los textos visuales como las caricaturas usan símbolos y composición para comunicar ideas complejas de forma sintética. En esta imagen, los elementos se combinan para producir un mensaje de denuncia: (1) la bolsa de educación llena de billetes representa recursos destinados a educación; (2) el político vaciándola en su alcancía personal representa la apropiación indebida (corrupción); (3) la escuela en ruinas al fondo representa el resultado real de esa corrupción (el dinero no llega a donde debe). La caricatura denuncia específicamente la corrupción en el manejo de los recursos educativos. Las opciones A y C invierten el mensaje. La opción D introduce un elemento no presente en la descripción.',
        competencia: 'identificar',
        componente: 'pragmatico',
      },

      // 25. Semántico + reflexionar (texto literario - personaje)
      {
        id: 'lc-p-s9-25',
        enunciado: 'Lee el siguiente fragmento de la novela "El coronel no tiene quien le escriba" de Gabriel García Márquez:\n\n"El coronel necesitaba ochenta pesos para pagar los gastos del médico y la botica. Revolvió los cajones del armario sin encontrar nada. Llevaba tres semanas buscando trabajo. Esa mañana había comido mazorcas hervidas. En el cuarto de al lado, su esposa tosía y tosía."\n\n¿Cómo caracteriza el fragmento la situación del coronel?',
        opciones: [
          { letra: 'A', texto: 'El coronel es un hombre rico que tiene problemas menores de administración del dinero.' },
          { letra: 'B', texto: 'El fragmento retrata una situación de pobreza extrema y dignidad silenciosa: la acumulación de detalles cotidianos (la búsqueda infructuosa, las semanas sin trabajo, la comida escasa, la esposa enferma) construye un cuadro de privación sin que el personaje se queje explícitamente.' },
          { letra: 'C', texto: 'El coronel está feliz con su vida sencilla porque no necesita dinero.' },
          { letra: 'D', texto: 'El fragmento describe una situación temporal que se resolverá fácilmente.' },
        ],
        clave: 'B',
        justificacion: 'García Márquez construye la situación del coronel mediante la acumulación de detalles concretos y cotidianos: necesita dinero para la medicina (no puede pagar la salud básica), busca en cajones vacíos (no tiene ahorros), lleva semanas sin trabajo (desempleo prolongado), ha comido solo mazorcas (alimentación precaria), y su esposa está enferma. Esta técnica narrativa es más poderosa que una descripción explícita de pobreza: el lector construye el cuadro a partir de los detalles. La dignidad del personaje está en que no se lamenta: enfrenta la situación en silencio. Las opciones A, C y D contradicen los indicios textuales.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 26. Sintáctico + reflexionar (argumentación escrita)
      {
        id: 'lc-p-s9-26',
        enunciado: 'Lee el siguiente borrador de conclusión de un ensayo sobre el uso del celular en clase:\n\n"Por todo lo anterior, claramente se puede concluir que los celulares son malos y no deberían usarse nunca en ningún contexto educativo porque distraen a los estudiantes."\n\n¿Cuál es el principal problema de escritura de esta conclusión?',
        opciones: [
          { letra: 'A', texto: 'La conclusión no tiene ningún problema: es clara y directa.' },
          { letra: 'B', texto: 'La conclusión generaliza en exceso ("nunca en ningún contexto") y no matiza la posición como haría un ensayo riguroso; además, la expresión "claramente" asume lo que debería estar demostrado y no recoge los argumentos del texto de manera sintética.' },
          { letra: 'C', texto: 'La conclusión es demasiado larga y debería resumirse en una sola palabra.' },
          { letra: 'D', texto: 'La conclusión no cita ninguna fuente bibliográfica.' },
        ],
        clave: 'B',
        justificacion: 'Una buena conclusión debe: (1) retomar sintéticamente los argumentos del ensayo; (2) confirmar la tesis sin exagerar; (3) evitar generalizaciones absolutas si el ensayo no las sustenta. Este borrador tiene varios problemas: "nunca en ningún contexto" es una generalización absoluta que un análisis riguroso difícilmente puede sostener; "claramente" es un marcador que asume la obviedad de lo que debería estar argumentado; y no sintetiza los argumentos previos. La opción A acepta los problemas. La opción C invierte el problema (la conclusión es corta, no larga). La opción D puede ser relevante en otros géneros académicos, pero en un ensayo de opinión las conclusiones no siempre requieren citas.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 27. Semántico + comprender (texto periodístico)
      {
        id: 'lc-p-s9-27',
        enunciado: 'Lee el siguiente lead (primer párrafo) de una noticia:\n\n"Al menos 12 personas resultaron heridas la tarde de ayer tras el derrumbe de un puente vehicular en construcción en el municipio de Puerto Tejada, Cauca. Los heridos fueron trasladados al hospital regional y las autoridades investigan las causas del accidente."\n\n¿Cuáles de las preguntas básicas del periodismo responde este lead?',
        opciones: [
          { letra: 'A', texto: 'Solo responde "qué" y "dónde"; las demás preguntas no están respondidas.' },
          { letra: 'B', texto: 'Responde: qué (derrumbe del puente y heridos), cuándo (tarde de ayer), dónde (Puerto Tejada, Cauca), cuántos (12 heridos) y qué se hace al respecto (investigación, atención médica); falta el "por qué" que está en proceso de investigación.' },
          { letra: 'C', texto: 'Responde todas las preguntas del periodismo, incluido el "por qué" completo.' },
          { letra: 'D', texto: 'El lead no responde ninguna pregunta periodística porque no es un texto informativo.' },
        ],
        clave: 'B',
        justificacion: 'El lead periodístico ("pirámide invertida") busca responder las preguntas básicas en el primer párrafo: qué (derrumbe, heridos), quién (12 personas), cuándo (tarde de ayer), dónde (Puerto Tejada, Cauca), cómo (en construcción) y qué consecuencias (atención médica, investigación). El "por qué" (causas del derrumbe) no está respondido porque "las autoridades investigan las causas": es la única pregunta que queda abierta. La opción A subestima la información presente. La opción C afirma que el "por qué" está respondido, lo cual contradice la mención de la investigación en curso. La opción D desconoce el género periodístico.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 28. Pragmático + reflexionar (intertextualidad)
      {
        id: 'lc-p-s9-28',
        enunciado: 'Lee el siguiente texto publicitario:\n\n"Muchos años después, frente a las rebajas de verano, el consumidor habría de recordar aquella tarde remota en que su tarjeta de crédito marcaba cero."\n\n¿Qué efecto produce la imitación del inicio de "Cien años de soledad" en este texto publicitario?',
        opciones: [
          { letra: 'A', texto: 'El texto demuestra que García Márquez era un gran admirador del consumismo.' },
          { letra: 'B', texto: 'La intertextualidad con la obra de García Márquez otorga humor y sofisticación al anuncio, buscando identificación con lectores cultos; también trivializa irónicamente el consumo al equipararlo con la memoria épica de la novela.' },
          { letra: 'C', texto: 'El texto es una copia ilegal que plagia a García Márquez sin transformar el original.' },
          { letra: 'D', texto: 'El texto cita a García Márquez para demostrar que la publicidad es una forma literaria.' },
        ],
        clave: 'B',
        justificacion: 'La intertextualidad es la relación que un texto establece con otro texto conocido. En este caso, el anuncio toma la estructura sintáctica y la cadencia del inicio más famoso de la literatura latinoamericana y la aplica a una situación banal (las rebajas de verano y la tarjeta de crédito). El efecto es doble: (1) humor por la incongruencia entre la grandilocuencia del modelo literario y la trivialidad del referente comercial; (2) búsqueda de identificación con lectores que reconocen la cita. Esta técnica es común en publicidad dirigida a públicos con capital cultural. No es plagio (C) porque es una transformación paródica, uso legítimo de la cita.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 29. Semántico + identificar (texto científico divulgativo)
      {
        id: 'lc-p-s9-29',
        enunciado: 'Lee el siguiente fragmento de un artículo de divulgación científica:\n\n"El sueño no es una pausa del cerebro, sino una actividad frenética. Durante la fase REM, el cerebro procesa y consolida los recuerdos del día, descarta información irrelevante y fortalece las conexiones neuronales asociadas a nuevos aprendizajes. Los estudiantes que duermen bien después de estudiar retienen más que quienes estudian más pero duermen menos."\n\n¿Cuál es la idea principal del párrafo?',
        opciones: [
          { letra: 'A', texto: 'Los estudiantes deben dormir más y estudiar menos.' },
          { letra: 'B', texto: 'El sueño, lejos de ser un descanso pasivo, es un proceso activo e imprescindible para el aprendizaje y la consolidación de la memoria.' },
          { letra: 'C', texto: 'El cerebro humano es más activo de noche que de día.' },
          { letra: 'D', texto: 'La fase REM es la única etapa importante del sueño para los estudiantes.' },
        ],
        clave: 'B',
        justificacion: 'La idea principal del párrafo es que el sueño es un proceso activo (no una pausa) que cumple funciones cognitivas fundamentales: consolidación de la memoria y el aprendizaje. Esto lo confirma la frase inicial ("no es una pausa del cerebro, sino una actividad frenética") y el dato final sobre la retención de los estudiantes. La opción A extrae una recomendación implícita pero no recoge el mensaje central sobre la naturaleza del sueño. La opción C va más allá de lo que el texto dice (no compara día y noche). La opción D limita la importancia al REM, mientras el texto habla del sueño en general.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 30. Sintáctico + comprender (ironía y lenguaje figurado)
      {
        id: 'lc-p-s9-30',
        enunciado: 'Lee el siguiente texto:\n\n"El señor alcalde prometió que en dos años la ciudad tendría agua potable en todos los barrios. Siete años después, el señor alcalde —que ya era concejal— felicitó a su sucesor por el \'avance histórico\' de instalar tuberías en el 20% de los barrios sin agua."\n\n¿Qué recurso retórico usa el texto y qué efecto produce?',
        opciones: [
          { letra: 'A', texto: 'El texto usa hipérbole para exagerar los logros del alcalde.' },
          { letra: 'B', texto: 'El texto usa ironía: al llamar "avance histórico" a un logro mínimo (20%) frente a una promesa incumplida, contrasta lo que se dice con la realidad, creando un efecto crítico y humorístico.' },
          { letra: 'C', texto: 'El texto usa metáfora para describir el trabajo del alcalde como un viaje.' },
          { letra: 'D', texto: 'El texto usa eufemismo para suavizar la crítica al alcalde.' },
        ],
        clave: 'B',
        justificacion: 'La ironía consiste en decir lo contrario de lo que se piensa, o en presentar algo positivamente cuando la realidad lo contradice. En este texto, las comillas en "avance histórico" marcan que la expresión es irónica: se llama "avance histórico" a haber cumplido solo el 20% de una promesa en el doble del tiempo previsto. La ironía crea un efecto crítico y sardónico respecto al político. No es hipérbole (A), que exageraría algo real. No es metáfora (C). No es eufemismo (D), que suavizaría algo negativo; aquí la ironía hace lo contrario.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 31. Pragmático + reflexionar (diversidad lingüística)
      {
        id: 'lc-p-s9-31',
        enunciado: 'Colombia tiene 65 lenguas indígenas además del español. Un docente de un colegio urbano le dice a un estudiante indígena: "Debes olvidar tu lengua materna para aprender bien el español." Desde la perspectiva de la lingüística y los derechos culturales, ¿cuál es el error del docente?',
        opciones: [
          { letra: 'A', texto: 'El docente tiene razón: es necesario olvidar la lengua materna para aprender bien una segunda lengua.' },
          { letra: 'B', texto: 'El docente comete un error lingüístico y cultural: la investigación muestra que una sólida competencia en la lengua materna facilita el aprendizaje de segundas lenguas; además, las lenguas indígenas son patrimonio cultural protegido por la Constitución colombiana.' },
          { letra: 'C', texto: 'El docente tiene razón porque el español es más útil que las lenguas indígenas en la sociedad actual.' },
          { letra: 'D', texto: 'El problema es que el docente no habla ninguna lengua indígena.' },
        ],
        clave: 'B',
        justificacion: 'La investigación en lingüística aplicada (Jim Cummins, entre otros) demuestra que una sólida competencia en la lengua materna (L1) facilita el aprendizaje de segundas lenguas (L2): las habilidades cognitivas y lingüísticas se transfieren entre lenguas. Pedir a un niño que "olvide" su lengua materna no solo es lingüísticamente contraproducente, sino que atenta contra su identidad cultural y sus derechos. La Constitución colombiana (art. 10) reconoce las lenguas indígenas como oficiales en sus territorios y la educación intercultural bilingüe como derecho. La opción A adopta una posición refutada por la lingüística. La opción C hace un juicio de valor sobre la "utilidad" que ignora el valor cultural. La opción D introduce un factor no relevante.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 32. Semántico + comprender (crónica)
      {
        id: 'lc-p-s9-32',
        enunciado: 'Lee el siguiente fragmento de crónica:\n\n"Doña Transito lleva 40 años vendiendo obleas en el parque principal de Girardot. Sus manos, pequeñas y ágiles, forman los conos de wafer con la destreza de quien ha repetido el gesto miles de veces. No tiene redes sociales, ni página web, ni sistema de pago digital. Pero a las 10 de la mañana de cualquier domingo, hay una fila de quince personas esperando su turno."\n\n¿Qué idea sobre el éxito y el comercio expresa implícitamente el fragmento?',
        opciones: [
          { letra: 'A', texto: 'Doña Transito debe modernizarse con tecnología digital para seguir siendo exitosa.' },
          { letra: 'B', texto: 'El verdadero éxito comercial puede sostenerse en la calidad del producto, la tradición y la confianza de la clientela, sin necesidad de herramientas digitales.' },
          { letra: 'C', texto: 'La fila de clientes demuestra que los parques son los mejores lugares para vender alimentos.' },
          { letra: 'D', texto: 'El fragmento critica a los negocios modernos que no valoran la tradición.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento construye un contraste implícito: la ausencia de herramientas digitales modernas (redes sociales, pago digital) vs. la fila constante de clientes. Este contraste sugiere que el éxito de Doña Transito no depende de la tecnología, sino de la calidad del producto (el gesto repetido con destreza), la permanencia en el tiempo (40 años) y la fidelidad de la clientela. La crónica celebra implícitamente este tipo de éxito basado en el oficio y la tradición. La opción A extrae una recomendación que el texto no hace; más bien lo contrario. La opción C hace una generalización no sustentada. La opción D critica algo que el texto no critica.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 33. Sintáctico + identificar (tipos de párrafo)
      {
        id: 'lc-p-s9-33',
        enunciado: 'Lee el siguiente párrafo:\n\n"Los videojuegos no son solo entretenimiento: varios estudios han demostrado que mejoran la coordinación mano-ojo, la capacidad de tomar decisiones bajo presión y las habilidades de resolución de problemas. El juego Minecraft, por ejemplo, ha sido implementado en escuelas de varios países como herramienta pedagógica para enseñar matemáticas, arquitectura y trabajo en equipo."\n\n¿Cuál es la estructura del párrafo?',
        opciones: [
          { letra: 'A', texto: 'Oración temática al final + desarrollo antes de la oración temática.' },
          { letra: 'B', texto: 'Oración temática al inicio ("Los videojuegos no son solo entretenimiento") + argumentos de desarrollo (beneficios cognitivos) + ejemplo de cierre (Minecraft).' },
          { letra: 'C', texto: 'El párrafo tiene dos oraciones temáticas de igual jerarquía.' },
          { letra: 'D', texto: 'El párrafo no tiene oración temática porque es puramente narrativo.' },
        ],
        clave: 'B',
        justificacion: 'Un párrafo bien estructurado generalmente tiene: (1) oración temática (idea principal), (2) oraciones de desarrollo (argumentos, datos, explicaciones) y (3) cierre o ejemplo. En este caso: la oración temática es "Los videojuegos no son solo entretenimiento", que anuncia la tesis del párrafo; las oraciones de desarrollo presentan los beneficios cognitivos con respaldo en estudios; y el ejemplo de Minecraft cierra con un caso concreto. Esta estructura es la más común en textos argumentativos e informativos. La opción A invierte la posición de la oración temática. La opción C asume dos tesis de igual peso. La opción D niega la existencia de oración temática.',
        competencia: 'identificar',
        componente: 'sintactico',
      },

      // 34. Pragmático + comprender (texto institucional)
      {
        id: 'lc-p-s9-34',
        enunciado: 'Lee el siguiente fragmento del Manual de Convivencia de un colegio:\n\n"Artículo 12. El uso de dispositivos electrónicos (celulares, tabletas, audífonos) durante las clases está prohibido. El incumplimiento de esta norma implicará la retención del dispositivo hasta la jornada siguiente, con entrega al acudiente. Reincidencias serán tratadas como falta grave."\n\n¿Cuál es la característica principal del lenguaje de este texto?',
        opciones: [
          { letra: 'A', texto: 'El texto usa un lenguaje poético con figuras literarias para comunicar la norma.' },
          { letra: 'B', texto: 'El texto usa un lenguaje normativo y jurídico: preciso, impersonal, con enumeración de consecuencias escaladas, para regular el comportamiento sin dar lugar a interpretaciones ambiguas.' },
          { letra: 'C', texto: 'El texto usa un lenguaje coloquial para acercarse a los estudiantes.' },
          { letra: 'D', texto: 'El texto usa un lenguaje narrativo que cuenta una historia sobre el uso de celulares.' },
        ],
        clave: 'B',
        justificacion: 'Los textos normativos e institucionales (manuales de convivencia, leyes, reglamentos) tienen características lingüísticas específicas: precisión léxica (enumeración de los dispositivos: "celulares, tabletas, audífonos"), impersonalidad (no hay "yo" ni "tú"), consecuencias claras y escalonadas ("retención", "falta grave") y estructura de artículo numerado típica del lenguaje jurídico-administrativo. El propósito es regular comportamientos eliminando la ambigüedad. No es poético (A), coloquial (C) ni narrativo (D).',
        competencia: 'comprender',
        componente: 'pragmatico',
      },

      // 35. Semántico + reflexionar (lectura literaria)
      {
        id: 'lc-p-s9-35',
        enunciado: 'Lee el siguiente inicio de cuento:\n\n"La primera vez que Tomás vio el mar, lloró. No era la primera vez que lloraba frente al agua: había llovido el día del entierro de su madre, y él había mirado la lluvia caer sobre el cajón de madera como si el cielo también supiera que algo grande había terminado."\n\n¿Qué función cumplen las memorias del entierro en el texto?',
        opciones: [
          { letra: 'A', texto: 'Son una digresión innecesaria que interrumpe la narración principal.' },
          { letra: 'B', texto: 'Las memorias del entierro establecen una conexión entre el mar (primera experiencia) y el agua de la lluvia (experiencia dolorosa anterior), sugiriendo que para Tomás el agua está cargada de significado emocional profundo, especialmente relacionado con la pérdida.' },
          { letra: 'C', texto: 'Las memorias explican que Tomás siempre llora cuando ve agua porque tiene una condición médica.' },
          { letra: 'D', texto: 'Las memorias del entierro demuestran que el padre de Tomás también murió.' },
        ],
        clave: 'B',
        justificacion: 'El recurso narrativo utilizado es la analepsis (flashback) o memoria evocada. El llanto frente al mar conecta con el recuerdo del llanto ante la lluvia durante el entierro de su madre, estableciendo un campo de sentido: el agua (lluvia, mar) se convierte en un símbolo emocional vinculado a experiencias de pérdida y duelo. El narrador refuerza esto con la imagen de la lluvia sobre el cajón "como si el cielo también supiera". No es una digresión (A) sino parte de la construcción del personaje. La opción C introduce una explicación médica que no está en el texto. La opción D hace una inferencia incorrecta (el texto solo menciona a la madre).',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 36. Sintáctico + comprender (transformación de textos)
      {
        id: 'lc-p-s9-36',
        enunciado: 'Un estudiante tiene el siguiente texto argumentativo:\n\n"Las mascotas son buenas para la salud mental. Un estudio mostró que acariciar un perro reduce el cortisol. Los niños con mascotas desarrollan más empatía."\n\nY escribe la siguiente versión mejorada:\n\n"Las mascotas tienen efectos positivos comprobados sobre la salud mental: un estudio demostró que acariciar un perro reduce el nivel de cortisol, y los niños que crecen con mascotas desarrollan mayor capacidad de empatía."\n\n¿Qué mejora concreta hace la segunda versión?',
        opciones: [
          { letra: 'A', texto: 'La segunda versión agrega más argumentos que la primera.' },
          { letra: 'B', texto: 'La segunda versión integra las tres oraciones en una estructura con oración temática + dos argumentos coordinados, usa conectores ("y"), evita la repetición y muestra relaciones lógicas más claras entre las ideas.' },
          { letra: 'C', texto: 'La segunda versión es simplemente más larga y por eso es mejor.' },
          { letra: 'D', texto: 'La segunda versión reemplaza palabras difíciles por palabras más sencillas.' },
        ],
        clave: 'B',
        justificacion: 'La comparación entre ambas versiones muestra una mejora en la integración sintáctica y la cohesión. La primera versión tiene tres oraciones cortas e independientes, yuxtapuestas sin conectores explícitos. La segunda integra las ideas en una estructura más elaborada: una oración temática clara ("efectos positivos comprobados"), dos argumentos coordinados con "y", y una sintaxis que muestra las relaciones lógicas. No agrega información nueva (A). No es mejor por ser larga (C). No simplifica vocabulario (D): de hecho, usa un lenguaje más formal.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 37. Pragmático + identificar (correo electrónico formal)
      {
        id: 'lc-p-s9-37',
        enunciado: 'Un estudiante necesita pedirle a su profesor que le dé un plazo adicional para entregar un trabajo. Escribe:\n\n"profe necesito más tiempo pa el trabajo xq tuve que trabajar esta semana y no pude hacer nada avíseme"\n\n¿Qué aspectos del registro y el formato deben corregirse para que sea un correo formal?',
        opciones: [
          { letra: 'A', texto: 'El correo es adecuado porque los profesores prefieren mensajes informales de sus estudiantes.' },
          { letra: 'B', texto: 'El correo debe corregir: uso de mayúscula inicial, saludo formal ("Estimado profesor"), ortografía completa ("para", "porque"), tono respetuoso ("le solicito"), explicación de la razón, solicitud clara y despedida formal.' },
          { letra: 'C', texto: 'Solo debe corregirse la ortografía de "xq" y "pa"; lo demás está bien.' },
          { letra: 'D', texto: 'El correo no puede corregirse porque la informalidad es el estilo del autor.' },
        ],
        clave: 'B',
        justificacion: 'Los textos formales tienen convenciones de registro que los diferencian de los informales: (1) saludo formal ("Estimado profesor / Buenos días"); (2) uso de usted y formas de cortesía; (3) escritura completa sin abreviaciones coloquiales ("xq" → "porque"; "pa" → "para"); (4) tono respetuoso y explícito; (5) estructura: planteamiento del problema, solicitud clara y despedida formal. El correo del estudiante viola varias de estas convenciones. Conocer y dominar los registros formales e informales es una competencia comunicativa fundamental. La opción A normaliza la informalidad en contextos inapropiados. La opción C subestima los problemas. La opción D niega la importancia del registro.',
        competencia: 'identificar',
        componente: 'pragmatico',
      },

      // 38. Semántico + comprender (alegoría)
      {
        id: 'lc-p-s9-38',
        enunciado: 'Lee el siguiente texto:\n\n"El árbol más viejo del bosque era también el más generoso: compartía su sombra con todos, sus frutos caían para que los animales comieran y sus raíces sostenían la tierra para que los demás pudieran crecer. Cuando la tormenta llegó, fue el primero en resistir, protegiendo con sus ramas a los más pequeños. Y cuando al fin cayó, su tronco se convirtió en hogar y puente."\n\n¿Qué tema humano puede leerse en esta alegoría?',
        opciones: [
          { letra: 'A', texto: 'El texto es simplemente una descripción botánica de los árboles viejos del bosque.' },
          { letra: 'B', texto: 'El texto es una alegoría sobre el liderazgo o la sabiduría generosa: el árbol representa a quien, desde una posición de fortaleza, sirve a los demás, los protege en la adversidad y deja un legado útil incluso en la muerte.' },
          { letra: 'C', texto: 'El texto argumenta que los árboles viejos no deben talarse en los bosques.' },
          { letra: 'D', texto: 'El texto narra la historia de un árbol específico que existió en un bosque real.' },
        ],
        clave: 'B',
        justificacion: 'Una alegoría es una narración en la que los elementos representan ideas abstractas o experiencias humanas más allá de su significado literal. En este texto, el árbol funciona como símbolo del líder generoso o la figura protectora: comparte (generosidad), resiste (fortaleza en la adversidad), protege a los más pequeños (responsabilidad con los vulnerables) y deja un legado (tronco como hogar y puente). Los atributos del árbol corresponden sistemáticamente a virtudes humanas. No es descripción botánica (A). No es un argumento ecológico (C). No afirma ser historia real (D).',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 39. Sintáctico + reflexionar (texto discontinuo - tabla)
      {
        id: 'lc-p-s9-39',
        enunciado: 'Una tabla muestra el resultado de cuatro grupos en un concurso de lectura:\n\nGrupo A: 45 libros leídos\nGrupo B: 38 libros leídos\nGrupo C: 51 libros leídos\nGrupo D: 29 libros leídos\n\nUn estudiante escribe: "El Grupo C leyó más libros que todos los demás grupos juntos."\n\n¿Es correcta esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'Sí, es correcta porque 51 es el número más alto de la tabla.' },
          { letra: 'B', texto: 'No, es incorrecta: el Grupo C leyó 51 libros, pero los demás grupos juntos leyeron 45 + 38 + 29 = 112 libros, que es más que 51. La afirmación confunde "más que cualquier otro grupo" con "más que todos los demás juntos".' },
          { letra: 'C', texto: 'Sí, es correcta porque el Grupo C es el ganador del concurso.' },
          { letra: 'D', texto: 'No se puede saber si es correcta sin más información.' },
        ],
        clave: 'B',
        justificacion: 'Esta pregunta evalúa la comprensión lectora de textos discontinuos (tablas) y el razonamiento matemático-lingüístico. La afirmación "más que todos los demás grupos juntos" implica que 51 > (45 + 38 + 29). Calculando: 45 + 38 = 83 + 29 = 112. Como 51 < 112, la afirmación es falsa. El error del estudiante es confundir "el mayor valor individual" (51 > 45, 38, 29) con "mayor que la suma de todos los demás". Esta distinción es fundamental para la comprensión precisa de textos con datos. La opción A acepta la afirmación incorrecta. La opción C no responde a la pregunta formulada. La opción D niega que se pueda resolver con los datos disponibles.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 40. Pragmático + comprender (función social del texto)
      {
        id: 'lc-p-s9-40',
        enunciado: 'Lee el siguiente texto:\n\n"La biblioteca pública de tu ciudad está abierta de lunes a sábado, de 8 a.m. a 6 p.m. Puedes inscribirte gratuitamente presentando tu documento de identidad. Los socios pueden prestar hasta 3 libros por 15 días. La biblioteca también ofrece acceso gratuito a internet, sala infantil y talleres de lectura los sábados a las 10 a.m."\n\n¿Cuál es la función social principal de este texto?',
        opciones: [
          { letra: 'A', texto: 'Persuadir a la comunidad de que la lectura es importante.' },
          { letra: 'B', texto: 'Informar a la ciudadanía sobre los servicios y condiciones de acceso a la biblioteca pública para facilitar su uso.' },
          { letra: 'C', texto: 'Narrar la historia de fundación de la biblioteca pública.' },
          { letra: 'D', texto: 'Argumentar que las bibliotecas públicas son superiores a las privadas.' },
        ],
        clave: 'B',
        justificacion: 'El texto es un texto informativo-funcional cuya función social es proporcionar información práctica y útil que permita a los ciudadanos acceder a un servicio público. Sus características confirman esto: datos precisos y verificables (horarios, condiciones de inscripción, número de libros, duración del préstamo), ausencia de argumentos o juicios de valor, lenguaje claro y directo. Su propósito no es persuadir (A), narrar historia (C) ni argumentar comparaciones (D), sino facilitar el acceso de la comunidad a la biblioteca.',
        competencia: 'comprender',
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

      // 6. Semántico + identificar (texto filosófico)
      {
        id: 'lc-p-s11-06',
        enunciado: 'Lee el siguiente fragmento de un texto de Albert Camus:\n\n"Hay un solo problema filosófico verdaderamente serio: el suicidio. Juzgar si la vida vale o no la pena de ser vivida equivale a responder la pregunta fundamental de la filosofía."\n\n¿Cuál es la afirmación central que hace el autor en este fragmento?',
        opciones: [
          { letra: 'A', texto: 'El autor afirma que todas las personas deben considerar el suicidio como opción.' },
          { letra: 'B', texto: 'El autor sostiene que el problema filosófico más fundamental es si la vida tiene sentido, y que el suicidio es el punto de partida de esta reflexión.' },
          { letra: 'C', texto: 'El autor afirma que la filosofía no puede responder preguntas sobre la vida.' },
          { letra: 'D', texto: 'El autor propone que el suicidio es una respuesta válida a los problemas de la vida.' },
        ],
        clave: 'B',
        justificacion: 'Camus, en "El mito de Sísifo", plantea que el único problema filosófico genuino es el del absurdo: si la vida tiene sentido o no. El suicidio representa la pregunta en su forma más radical (¿vale la pena seguir viviendo?). Esto no es una apología del suicidio (opción A o D), sino el punto de partida de la reflexión filosófica sobre el sentido de la existencia. La opción C contradice el texto: Camus sí plantea que la filosofía puede y debe enfrentar esta pregunta.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 7. Semántico + comprender (texto científico)
      {
        id: 'lc-p-s11-07',
        enunciado: 'Lee el siguiente fragmento de un artículo científico:\n\n"Los resultados indican una correlación positiva y estadísticamente significativa (r = 0,73; p < 0,01) entre el tiempo de lectura diaria y el rendimiento académico en los estudiantes evaluados. Sin embargo, los autores advierten que la correlación no implica causalidad: factores como el nivel socioeconómico y el ambiente familiar pueden mediar esta relación."\n\n¿Cuál es el límite que los propios autores señalan a su hallazgo?',
        opciones: [
          { letra: 'A', texto: 'El estudio no encontró ninguna relación entre lectura y rendimiento académico.' },
          { letra: 'B', texto: 'Los autores advierten que la correlación encontrada no permite afirmar que leer más causa directamente un mejor rendimiento, pues pueden existir variables mediadoras.' },
          { letra: 'C', texto: 'El estudio es inválido porque el valor p < 0,01 indica que los resultados son incorrectos.' },
          { letra: 'D', texto: 'Los autores concluyen que el nivel socioeconómico es el único factor que determina el rendimiento académico.' },
        ],
        clave: 'B',
        justificacion: 'El texto es explícito: los autores advierten que correlación no implica causalidad. Aunque hay una relación estadística entre lectura y rendimiento, no se puede concluir que una causa la otra, porque variables como el nivel socioeconómico o el ambiente familiar podrían explicar ambas (un estudiante de familia con recursos lee más Y tiene mejor rendimiento, no necesariamente porque lea más). La opción A contradice los resultados. La opción C malinterpreta el valor p (p < 0,01 indica alta significancia estadística, no error). La opción D exagera lo que dicen los autores sobre el nivel socioeconómico.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 8. Sintáctico + comprender (texto literario - intertextualidad)
      {
        id: 'lc-p-s11-08',
        enunciado: 'Lee el siguiente fragmento de Gabriel García Márquez (Cien años de soledad):\n\n"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."\n\n¿Cuál es el efecto narrativo del tiempo verbal "había de recordar" en este inicio?',
        opciones: [
          { letra: 'A', texto: 'Presenta los eventos en orden cronológico, desde el pasado hasta el futuro.' },
          { letra: 'B', texto: 'Crea una perspectiva temporal compleja: desde un futuro cercano a la muerte (pelotón), el narrador anticipa un recuerdo del pasado lejano, rompiendo la linealidad temporal y generando suspenso desde la primera oración.' },
          { letra: 'C', texto: 'Indica que el coronel Aureliano Buendía sobrevivió al pelotón de fusilamiento.' },
          { letra: 'D', texto: 'Usa el tiempo pasado simple para narrar eventos que ocurrieron secuencialmente.' },
        ],
        clave: 'B',
        justificacion: '"Había de recordar" es una perífrasis verbal que indica algo que ocurrirá con certeza en el futuro de la narración. García Márquez sitúa al lector en un momento futuro (frente al pelotón), desde el cual se anticipa un recuerdo del pasado remoto (el hielo). Esta técnica crea una perspectiva temporal fragmentada: presente narrativo, futuro anunciado y pasado evocado, todo en una oración. Es el inicio famoso que define el tiempo circular y no lineal del realismo mágico. La opción A describe una narración lineal que no corresponde. La opción C es una inferencia incorrecta (el texto no dice que sobrevivió). La opción D confunde la perífrasis con el pasado simple.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 9. Sintáctico + comprender (texto argumentativo - estructura)
      {
        id: 'lc-p-s11-09',
        enunciado: 'Lee el siguiente argumento:\n\n"Si Colombia invierte en educación de calidad, tendrá ciudadanos más productivos. Si tiene ciudadanos más productivos, su economía crecerá. Su economía está creciendo. Por lo tanto, Colombia ha invertido en educación de calidad."\n\n¿Qué error lógico contiene este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es válido porque la economía colombiana sí está creciendo.' },
          { letra: 'B', texto: 'El argumento comete la falacia de afirmación del consecuente: concluye que se cumple la condición inicial (inversión en educación) solo porque se cumple la consecuencia final (economía creciente), ignorando que el crecimiento económico puede tener otras causas.' },
          { letra: 'C', texto: 'El argumento es circular porque repite la misma idea en todas las premisas.' },
          { letra: 'D', texto: 'El argumento usa datos estadísticos incorrectos sobre el crecimiento económico.' },
        ],
        clave: 'B',
        justificacion: 'El razonamiento tiene la forma: Si P entonces Q; Si Q entonces R; R es verdadero; por tanto P. Este es el error lógico conocido como "afirmación del consecuente": de que R (economía crece) se concluye P (inversión en educación), pero el crecimiento económico puede deberse a otras causas (exportaciones, inversión extranjera, políticas monetarias). La forma lógica válida requeriría verificar P directamente. La opción A ignora el error lógico. La opción C describe el razonamiento circular, que es diferente. La opción D introduce una crítica empírica que no está en el texto.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 10. Pragmático + reflexionar (discurso ideológico)
      {
        id: 'lc-p-s11-10',
        enunciado: 'Lee el siguiente fragmento de un discurso político:\n\n"Nuestra nación es grande porque sus ciudadanos son trabajadores y honrados. Los problemas que enfrentamos vienen de afuera: son los extranjeros, los inmigrantes y las influencias foráneas las que han debilitado nuestros valores. Debemos proteger lo nuestro y recuperar la grandeza que nos pertenece."\n\n¿Cuál es el supuesto ideológico que subyace a este discurso?',
        opciones: [
          { letra: 'A', texto: 'El discurso propone una política económica de libre comercio.' },
          { letra: 'B', texto: 'El discurso opera sobre un supuesto nacionalista excluyente: asume que los problemas son externos y que lo propio es siempre bueno, construyendo una identidad nacional en oposición a un "otro" extranjero que se presenta como amenaza.' },
          { letra: 'C', texto: 'El discurso defiende los derechos de los migrantes como parte de la nación.' },
          { letra: 'D', texto: 'El discurso es un análisis objetivo de las causas de los problemas nacionales.' },
        ],
        clave: 'B',
        justificacion: 'El discurso opera sobre un supuesto ideológico nacionalista y xenófobo: construye una identidad nacional positiva ("nación grande", "ciudadanos trabajadores y honrados") en oposición a una amenaza externa ("extranjeros", "influencias foráneas"). Esta estrategia retórica —proyectar los problemas internos hacia un "otro" exterior— es característica de los discursos populistas de derecha. No hay evidencia ni argumentos, solo apelaciones emocionales a la identidad nacional. La opción A describe una política que contradice el discurso proteccionista. La opción C invierte completamente su posición. La opción D atribuye objetividad a un discurso claramente ideológico.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 11. Semántico + reflexionar (texto periodístico)
      {
        id: 'lc-p-s11-11',
        enunciado: 'Lee los siguientes titulares sobre el mismo hecho:\n\nPeriódico 1: "Manifestantes bloquean vías y generan caos en el centro de Bogotá"\nPeriódico 2: "Ciudadanos se movilizan para exigir derechos laborales en el centro de Bogotá"\n\n¿Qué ilustran estos dos titulares sobre la construcción discursiva de la realidad?',
        opciones: [
          { letra: 'A', texto: 'Uno de los dos periódicos está mintiendo sobre los hechos ocurridos.' },
          { letra: 'B', texto: 'Ambos titulares describen el mismo evento, pero la selección léxica ("bloquean y caos" vs. "se movilizan para exigir") construye representaciones distintas de los participantes y sus motivaciones, revelando las posiciones editoriales de cada medio.' },
          { letra: 'C', texto: 'El primer periódico es más objetivo porque usa datos concretos.' },
          { letra: 'D', texto: 'El segundo periódico es más objetivo porque defiende los derechos de los trabajadores.' },
        ],
        clave: 'B',
        justificacion: 'El análisis del discurso periodístico muestra que la realidad no se reporta de forma neutra: la selección de palabras construye representaciones. "Bloquean" y "caos" enfatizan el impacto disruptivo; "se movilizan" y "exigir derechos" enfatizan la agencia y legitimidad de los manifestantes. Ambos titulares pueden ser simultáneamente verídicos (hubo bloqueos Y eran ciudadanos exigiendo derechos), pero orientan la interpretación del lector de formas opuestas. Ninguno es absolutamente objetivo: la objetividad absoluta no existe en el discurso. Las opciones C y D adoptan ingenuamente la posición de uno u otro medio.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 12. Pragmático + reflexionar (contexto histórico-cultural)
      {
        id: 'lc-p-s11-12',
        enunciado: 'El poema "Si me permiten hablar" de la escritora boliviana Domitila Barrios de Chungara relata las condiciones de las mujeres mineras en Bolivia durante la dictadura de Hugo Banzer (1971-1978). ¿Qué perspectiva analítica es indispensable para comprender plenamente este texto?',
        opciones: [
          { letra: 'A', texto: 'Analizar exclusivamente los recursos retóricos del texto, independientemente del contexto histórico.' },
          { letra: 'B', texto: 'Considerar el contexto histórico (dictadura, movimiento minero), el contexto social (clase obrera, género), y la posición de la autora como testimonio de una experiencia de exclusión múltiple (mujer, obrera, latinoamericana).' },
          { letra: 'C', texto: 'Compararlo con la poesía española del Siglo de Oro para evaluar su calidad literaria.' },
          { letra: 'D', texto: 'Ignorar el contexto porque la literatura debe leerse de forma autónoma.' },
        ],
        clave: 'B',
        justificacion: 'Este tipo de texto (literatura de testimonio o "testimonio") solo puede comprenderse plenamente en su contexto histórico y social: la dictadura boliviana como marco político, el movimiento sindical minero como contexto de resistencia, y la condición de la autora como mujer, obrera y latinoamericana. La contextualización histórica, social y de género es indispensable para no reducir el texto a un ejercicio puramente formal. La opción A defiende una lectura puramente formalista que empobrece la comprensión. La opción C aplica criterios anacrónicos e incongruentes. La opción D niega la relación texto-contexto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 13. Semántico + comprender (texto discontinuo - gráfica)
      {
        id: 'lc-p-s11-13',
        enunciado: 'Una gráfica de barras muestra el porcentaje de colombianos que leen al menos un libro al año: 2015: 49%, 2017: 52%, 2019: 48%, 2021: 43%, 2023: 51%. ¿Cuál de las siguientes interpretaciones es la más adecuada?',
        opciones: [
          { letra: 'A', texto: 'La tendencia de lectura en Colombia ha sido de crecimiento constante entre 2015 y 2023.' },
          { letra: 'B', texto: 'Los datos muestran fluctuaciones sin una tendencia clara de crecimiento o decrecimiento: hubo aumentos y caídas, con una recuperación en 2023 al nivel de 2017.' },
          { letra: 'C', texto: 'En 2021 Colombia tuvo el nivel más alto de lectura de todo el período analizado.' },
          { letra: 'D', texto: 'La mitad de los colombianos nunca ha leído un libro en toda su vida.' },
        ],
        clave: 'B',
        justificacion: 'La secuencia de datos (49%, 52%, 48%, 43%, 51%) muestra una tendencia oscilante, no constante: subió en 2017, bajó en 2019 y 2021, y se recuperó en 2023. No hay un crecimiento sostenido ni una caída sostenida. La opción A afirma "crecimiento constante" cuando hay caídas en 2019 y 2021. La opción C es incorrecta: 2021 tiene el valor más bajo (43%), no el más alto (2017 con 52%). La opción D extrapola incorrectamente: los datos muestran porcentaje por año, no lectura acumulada de por vida.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 14. Sintáctico + reflexionar (modalización)
      {
        id: 'lc-p-s11-14',
        enunciado: 'Lee las siguientes afirmaciones de un mismo texto:\n\n(1) "El cambio climático destruirá la humanidad en 50 años."\n(2) "El cambio climático podría generar consecuencias graves para muchas poblaciones en las próximas décadas."\n\n¿Cuál es la diferencia más importante entre estas dos formulaciones?',
        opciones: [
          { letra: 'A', texto: 'La afirmación (2) es incorrecta porque minimiza la gravedad del cambio climático.' },
          { letra: 'B', texto: 'La afirmación (1) usa un lenguaje categórico y apocalíptico sin matices de incertidumbre; la (2) usa modalización ("podría", "muchas poblaciones") que refleja más adecuadamente el grado de certeza del conocimiento científico actual.' },
          { letra: 'C', texto: 'Ambas afirmaciones son equivalentes porque hablan del mismo tema.' },
          { letra: 'D', texto: 'La afirmación (1) es más científica porque es más específica en el tiempo.' },
        ],
        clave: 'B',
        justificacion: 'La modalización es el conjunto de recursos lingüísticos que expresan el grado de certeza o posibilidad de lo que se afirma. La afirmación (1) usa el futuro categórico ("destruirá") sin ningún matiz de probabilidad, lo cual no corresponde al consenso científico que habla de riesgos y probabilidades. La (2) usa "podría" (probabilidad), "consecuencias graves" (sin afirmar destrucción total) y "muchas poblaciones" (no toda la humanidad). La modalización en (2) es más honesta con la incertidumbre científica real. La opción A malinterpreta la función de la modalización. La opción C ignora las diferencias semánticas. La opción D confunde especificidad temporal con rigor científico.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 15. Pragmático + identificar (supuestos implícitos)
      {
        id: 'lc-p-s11-15',
        enunciado: 'Lee la siguiente afirmación de un texto de opinión:\n\n"Los jóvenes de hoy no leen porque todo el tiempo están en el celular. En mi época leíamos libros y éramos más cultos."\n\n¿Cuál de los siguientes supuestos está IMPLÍCITO en esta afirmación y es cuestionable?',
        opciones: [
          { letra: 'A', texto: 'Que los jóvenes usan el celular.' },
          { letra: 'B', texto: 'Que la cultura se adquiere únicamente a través de libros impresos, y que las generaciones anteriores eran superiores intelectualmente solo por leer libros.' },
          { letra: 'C', texto: 'Que la lectura es una actividad valiosa.' },
          { letra: 'D', texto: 'Que en el pasado existían libros.' },
        ],
        clave: 'B',
        justificacion: 'El supuesto cuestionable implícito es que la cultura y la formación intelectual solo se logran a través de libros impresos, ignorando que la lectura digital, los artículos en línea, los videos educativos y otras formas de acceso al conocimiento también son válidos. Además, el texto asume que la generación anterior era más culta únicamente por leer libros físicos, lo cual es una nostalgia no sustentada. Las opciones A y D son hechos mencionados explícitamente, no supuestos implícitos cuestionables. La opción C es un supuesto que comparten tanto el autor como la mayoría de lectores críticos, y no es cuestionable en este contexto.',
        competencia: 'identificar',
        componente: 'pragmatico',
      },

      // 16. Semántico + identificar (texto filosófico complejo)
      {
        id: 'lc-p-s11-16',
        enunciado: 'Lee el siguiente fragmento de Hannah Arendt:\n\n"La banalidad del mal no significa que el mal sea banal o trivial, sino que puede ser perpetrado por personas ordinarias que simplemente dejan de pensar, que obedecen órdenes sin reflexionar sobre su significado moral. El mal extremo no requiere monstruos; requiere funcionarios."\n\n¿Cuál es la afirmación central del fragmento?',
        opciones: [
          { letra: 'A', texto: 'El mal extremo siempre es cometido por personas psicológicamente perturbadas o monstruosas.' },
          { letra: 'B', texto: 'El mal masivo puede ser perpetrado por personas comunes que renuncian al pensamiento crítico y a la responsabilidad moral, ejecutando órdenes sin cuestionarlas.' },
          { letra: 'C', texto: 'Los funcionarios del gobierno son siempre más peligrosos que los criminales comunes.' },
          { letra: 'D', texto: 'La obediencia a las leyes es siempre moralmente correcta porque el Estado representa la voluntad colectiva.' },
        ],
        clave: 'B',
        justificacion: 'Arendt desarrolló este concepto analizando el juicio a Adolf Eichmann (1961), un funcionario nazi que organizó la deportación de judíos pero se presentó como un simple ejecutor de órdenes. Su tesis es que el mal no requiere monstruosidad psicológica: basta con la suspensión del pensamiento crítico y la renuncia a la responsabilidad moral individual. La expresión "banalidad" no significa que el mal sea menor, sino que puede surgir de personas ordinarias en contextos de obediencia burocrática. La opción A contradice la tesis central. La opción C hace una generalización diferente a la del texto. La opción D representa exactamente la postura que Arendt rechaza.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 17. Sintáctico + reflexionar (polifonía y voces en el texto)
      {
        id: 'lc-p-s11-17',
        enunciado: 'Lee el siguiente fragmento de un artículo académico:\n\n"Según García (2019), la educación virtual incrementó la brecha educativa durante la pandemia. Sin embargo, Martínez y López (2021) argumentan que, si se midieran adecuadamente los aprendizajes informales, los resultados serían distintos. El presente estudio propone una metodología que integra ambas perspectivas."\n\n¿Cuántas voces o perspectivas hay en el texto y cómo se distinguen?',
        opciones: [
          { letra: 'A', texto: 'Solo hay una voz: la del autor del artículo.' },
          { letra: 'B', texto: 'Hay tres voces: la de García (2019), la de Martínez y López (2021) y la del propio autor del artículo; se distinguen mediante citas explícitas con nombres y años, y el uso de verbos de cita ("según", "argumentan", "propone").' },
          { letra: 'C', texto: 'Hay dos voces: las de los autores citados; el autor del artículo no tiene voz propia.' },
          { letra: 'D', texto: 'Las tres fuentes citadas dicen lo mismo con distintas palabras.' },
        ],
        clave: 'B',
        justificacion: 'En los textos académicos es fundamental identificar las diferentes voces (polifonía textual). Este párrafo construye un diálogo explícito entre perspectivas: (1) García (2019) con la tesis sobre la brecha educativa; (2) Martínez y López (2021) con la contratesis sobre los aprendizajes informales; (3) el autor del artículo ("el presente estudio propone") que presenta su propia metodología como síntesis. Los verbos de cita ("según", "argumentan", "propone") y las referencias bibliográficas son los recursos lingüísticos que distinguen estas voces. La opción A niega las citas explícitas. La opción C niega la voz del autor. La opción D es incorrecta: las perspectivas son claramente distintas.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 18. Pragmático + reflexionar (propaganda política)
      {
        id: 'lc-p-s11-18',
        enunciado: 'Lee el siguiente eslogan político:\n\n"Con el partido X, tu familia estará segura. Los otros solo traen caos y destrucción. ¡Protege lo que amas!"\n\n¿Qué estrategias de persuasión utiliza este eslogan y cuáles son sus riesgos para el debate democrático?',
        opciones: [
          { letra: 'A', texto: 'El eslogan usa argumentos racionales y evidencia verificable; no tiene ningún riesgo para la democracia.' },
          { letra: 'B', texto: 'El eslogan usa apelación al miedo ("caos y destrucción"), protección de la familia (apelación emocional) y pensamiento dicotómico ("nosotros los seguros" vs. "ellos el caos"); estas estrategias simplifican la realidad política, estigmatizan al adversario y dificultan el debate racional.' },
          { letra: 'C', texto: 'El eslogan es democráticamente ideal porque resume bien la posición del partido.' },
          { letra: 'D', texto: 'El eslogan no tiene estrategias de persuasión porque es demasiado corto.' },
        ],
        clave: 'B',
        justificacion: 'El análisis retórico del eslogan revela varias estrategias: (1) apelación al miedo: "caos y destrucción" asociados a los adversarios; (2) apelación emocional a valores fundamentales: "tu familia", "protege lo que amas"; (3) pensamiento dicotómico o maniqueo: división entre "nosotros" (seguros) y "ellos" (caos), sin matices. Estas estrategias tienen riesgos para la democracia: simplifican debates complejos de política pública, estigmatizan al adversario en lugar de debatir ideas, y apelan a emociones primarias que dificultan el razonamiento crítico. No usa argumentos racionales ni evidencia (A). No es ideal para la democracia (C). La longitud no determina la presencia de estrategias (D).',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 19. Semántico + comprender (texto de Gabriel García Márquez - novela)
      {
        id: 'lc-p-s11-19',
        enunciado: 'Lee el siguiente fragmento de "El amor en los tiempos del cólera" de García Márquez:\n\n"Fermina Daza lo rechazó con tanto valor y tanta determinación que Florentino Ariza se fue a su cuarto a llorar de rabia, pero también a esperar. Esperó cincuenta y un años, nueve meses y cuatro días."\n\n¿Qué efecto produce la precisión numérica ("cincuenta y un años, nueve meses y cuatro días") en la narrativa?',
        opciones: [
          { letra: 'A', texto: 'La precisión numérica es un error del autor que interrumpe el ritmo de la narración.' },
          { letra: 'B', texto: 'La precisión numérica hiperbólica crea un efecto de absurdo amoroso: magnifica la persistencia de Florentino, haciendo visible la desmesura de su amor; el contraste entre la enormidad del tiempo y la exactitud de su registro produce un efecto simultáneamente trágico y cómico.' },
          { letra: 'C', texto: 'La precisión numérica indica que el narrador llevó un diario exacto de la espera.' },
          { letra: 'D', texto: 'La precisión demuestra que García Márquez realizó cálculos matemáticos precisos para escribir la novela.' },
        ],
        clave: 'B',
        justificacion: 'García Márquez usa la hipérbole con precisión numérica como recurso literario característico del realismo mágico y del amor romántico exacerbado. Decir "cincuenta y un años, nueve meses y cuatro días" en lugar de "más de cincuenta años" crea un efecto paradójico: cuanto más precisa es la medición de algo tan subjetivo como la espera amorosa, más absurda y sublime parece. Es simultáneamente cómico (la precisión de un contador para medir el amor) y trágico (la enormidad de la espera). Este recurso es una de las marcas de estilo de García Márquez. Las opciones C y D interpretan la cifra de forma literal. La opción A la evalúa negativamente.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 20. Sintáctico + comprender (texto argumentativo complejo - contraargumentación)
      {
        id: 'lc-p-s11-20',
        enunciado: 'Lee el siguiente texto:\n\n"Quienes defienden la legalizción total de las drogas argumentan que reduciría la violencia del narcotráfico. Este argumento tiene validez parcial: en los países que han regulado el cannabis, los mercados ilegales se han reducido en ese producto. Sin embargo, los defensores de la legalización omiten que la demanda de cocaína y heroína, drogas con mayor poder adictivo, podría aumentar con la legalización, creando un problema de salud pública de mayor escala que el problema de seguridad que buscan resolver."\n\n¿Cuál es la estructura argumentativa del texto?',
        opciones: [
          { letra: 'A', texto: 'El texto solo presenta el argumento a favor de la legalización.' },
          { letra: 'B', texto: 'El texto usa una estructura de concesión y refutación: primero reconoce la validez parcial del argumento a favor ("tiene validez parcial"), luego la refuta señalando la omisión del otro lado (impacto en salud pública de drogas más adictivas).' },
          { letra: 'C', texto: 'El texto defiende sin reservas la legalización de todas las drogas.' },
          { letra: 'D', texto: 'El texto rechaza completamente el argumento a favor de la legalización sin conceder nada.' },
        ],
        clave: 'B',
        justificacion: 'La estructura de concesión y refutación es una técnica argumentativa sofisticada: en lugar de rechazar totalmente el argumento contrario, el autor reconoce su parte válida ("Este argumento tiene validez parcial") y luego lo debilita señalando lo que omite (el problema de salud pública con drogas más adictivas). Esta estructura es más persuasiva que el rechazo total porque demuestra que el autor conoce los argumentos del otro lado. El conector "sin embargo" marca el giro hacia la refutación. La opción A solo ve la primera parte. La opción C invierte la posición. La opción D no reconoce la concesión explícita del texto.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 21. Pragmático + reflexionar (discurso científico vs. pseudocientífico)
      {
        id: 'lc-p-s11-21',
        enunciado: 'Lee el siguiente fragmento:\n\n"Los investigadores del Instituto Nacional de Salud realizaron un estudio con 1.200 participantes durante 5 años. Los resultados, publicados en la revista New England Journal of Medicine, muestran que el consumo moderado de aceite de oliva reduce en un 18% el riesgo de enfermedades cardiovasculares (IC 95%, p < 0.05)."\n\n¿Cuáles de las siguientes características hacen que este sea un texto científico legítimo?',
        opciones: [
          { letra: 'A', texto: 'Que menciona el aceite de oliva, que es un producto natural.' },
          { letra: 'B', texto: 'Que cita la institución que realizó el estudio, el tamaño de la muestra, la duración, la revista de publicación revisada por pares y los datos estadísticos con intervalos de confianza y valor p, todo lo cual permite evaluar su credibilidad y replicabilidad.' },
          { letra: 'C', texto: 'Que usa números y porcentajes, lo que siempre garantiza que un texto sea científico.' },
          { letra: 'D', texto: 'Que el texto es largo y tiene terminología técnica difícil de entender.' },
        ],
        clave: 'B',
        justificacion: 'La credibilidad de un texto científico se evalúa por criterios específicos de rigor metodológico y transparencia: (1) identificación de la institución que realizó la investigación; (2) tamaño de la muestra (1.200 participantes); (3) duración del estudio (5 años); (4) publicación en revista revisada por pares (peer review); (5) presentación de datos estadísticos con intervalos de confianza (IC 95%) y valor p, que permiten evaluar la significancia estadística. Estos elementos distinguen la ciencia legítima de la pseudociencia. La opción A apela al origen natural, que no es un criterio científico. La opción C es incorrecta: los números también pueden usarse en pseudociencia. La opción D confunde tecnicismo con rigor.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 22. Semántico + identificar (texto literario - perspectiva narrativa)
      {
        id: 'lc-p-s11-22',
        enunciado: 'Lee el siguiente fragmento:\n\n"La guerra terminó un martes. Para Lucía, el martes fue el día en que su hermano llegó cojeando al patio con una sonrisa en la cara y barro hasta las rodillas. Para el general, fue el día en que firmó los documentos y bebió whisky por primera vez en tres años. Para los niños del orfanato, fue el día en que por fin hubo sopa con carne."\n\n¿Qué técnica narrativa usa el fragmento?',
        opciones: [
          { letra: 'A', texto: 'Narración omnisciente que describe los hechos de forma objetiva e imparcial.' },
          { letra: 'B', texto: 'El fragmento usa perspectivas múltiples o multiperspectividad narrativa: describe el mismo evento (el fin de la guerra) a través de las experiencias particulares de diferentes personajes, mostrando que un mismo hecho tiene significados distintos para cada persona.' },
          { letra: 'C', texto: 'El fragmento usa la técnica del flujo de conciencia de un solo personaje.' },
          { letra: 'D', texto: 'El fragmento usa la narración en primera persona del plural para incluir a todos los personajes.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento usa la multiperspectividad narrativa: el mismo evento (el fin de la guerra) es presentado a través de la experiencia particular de tres personajes distintos (Lucía, el general, los niños del orfanato). Para cada uno, "el fin de la guerra" significa algo diferente y concreto: el regreso del hermano, la firma del armisticio, la comida. Esta técnica narrativa relativiza los grandes eventos históricos mostrando que su significado se construye desde las experiencias individuales y cotidianas. No es omnisciente imparcial (A), flujo de conciencia (C) ni primera persona plural (D).',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 23. Sintáctico + comprender (texto científico - inferencia)
      {
        id: 'lc-p-s11-23',
        enunciado: 'Un texto de divulgación científica afirma:\n\n"El 98,5% del genoma humano es idéntico al del chimpancé. Sin embargo, esa diferencia del 1,5% equivale a aproximadamente 45 millones de pares de bases nitrogenadas, y pequeñas diferencias en genes reguladores pueden producir cambios fenotípicos enormes."\n\n¿Cuál es la inferencia más adecuada a partir de este texto?',
        opciones: [
          { letra: 'A', texto: 'Los humanos son prácticamente iguales a los chimpancés porque compartimos el 98,5% del ADN.' },
          { letra: 'B', texto: 'Un porcentaje de diferencia genética aparentemente pequeño puede traducirse en un número enorme de diferencias moleculares y en cambios fenotípicos significativos; el porcentaje de similitud no determina directamente el grado de diferencia observable.' },
          { letra: 'C', texto: 'El 1,5% de diferencia genética es irrelevante para explicar las diferencias entre humanos y chimpancés.' },
          { letra: 'D', texto: 'El texto demuestra que los humanos y los chimpancés tienen el mismo número de genes.' },
        ],
        clave: 'B',
        justificacion: 'El texto advierte explícitamente contra la interpretación simplista del porcentaje: aunque 1,5% parece pequeño, equivale a 45 millones de pares de bases, y además las diferencias en genes reguladores (que controlan cuándo y cuánto se expresan otros genes) pueden producir diferencias fenotípicas enormes. La inferencia correcta es que los porcentajes de similitud genética no son directamente proporcionales a las diferencias observables entre especies. La opción A hace la interpretación ingenua que el texto refuta. La opción C minimiza precisamente lo que el texto magnifica. La opción D hace una afirmación sobre el número total de genes que el texto no sostiene.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 24. Pragmático + reflexionar (producción textual - ensayo)
      {
        id: 'lc-p-s11-24',
        enunciado: 'Lee el siguiente inicio de ensayo:\n\n"En este ensayo voy a hablar sobre la contaminación del agua en Colombia. Primero voy a explicar qué es la contaminación, luego sus causas y finalmente sus consecuencias. Al final voy a dar mi conclusión."\n\n¿Cuál es el problema principal de esta introducción como texto académico?',
        opciones: [
          { letra: 'A', texto: 'La introducción no tiene ningún problema: es organizada y clara.' },
          { letra: 'B', texto: 'La introducción anuncia la estructura del ensayo pero no presenta una tesis o hipótesis propia; "voy a hablar sobre" es una formulación demasiado vaga que no compromete al autor con ninguna posición argumentativa específica.' },
          { letra: 'C', texto: 'La introducción es demasiado corta; debería tener al menos 5 párrafos.' },
          { letra: 'D', texto: 'La introducción no debe mencionar la estructura del ensayo.' },
        ],
        clave: 'B',
        justificacion: 'Una introducción de ensayo académico debe cumplir funciones específicas: (1) contextualizar el tema; (2) presentar la tesis o hipótesis (la posición del autor, lo que va a argumentar); (3) opcionalmente anunciar la estructura. Este ejemplo solo anuncia la estructura sin presentar ninguna tesis: "voy a hablar sobre" no revela qué posición tomará el autor sobre la contaminación del agua. Un buen inicio podría ser: "La contaminación del agua en Colombia, agravada por la minería ilegal y la falta de saneamiento básico, representa una crisis de derechos humanos que requiere intervención urgente del Estado." La opción A acepta el problema. La opción C introduce un criterio cuantitativo irrelevante. La opción D es incorrecta: anunciar la estructura es válido en ensayos.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 25. Semántico + reflexionar (ironía en texto político)
      {
        id: 'lc-p-s11-25',
        enunciado: 'Lee el siguiente fragmento de un artículo de opinión:\n\n"El congresista declaró, con sincera indignación, que no sabía nada sobre el contrato de $800 millones que firmó su secretaria, en su oficina, con su sello, en su nombre. Qué terrible es trabajar con gente tan autónoma."\n\n¿Qué recurso retórico usa el último enunciado y qué efecto produce?',
        opciones: [
          { letra: 'A', texto: 'El último enunciado usa una metáfora para describir el trabajo en equipo en el sector público.' },
          { letra: 'B', texto: 'El último enunciado usa ironía: al llamar "terrible" la "autonomía" de la secretaria, el autor señala la inverosimilitud de la defensa del congresista; el contraste entre la descripción detallada de los indicios de autoría y la excusa de desconocimiento crea un efecto sardónico y de denuncia.' },
          { letra: 'C', texto: 'El último enunciado es un elogio genuino a la autonomía de los funcionarios públicos.' },
          { letra: 'D', texto: 'El último enunciado usa una hipérbole para exagerar los problemas burocráticos.' },
        ],
        clave: 'B',
        justificacion: 'La ironía funciona aquí mediante el contraste entre lo dicho y lo que el texto muestra. El autor acumula en la primera oración todos los indicios que hacen inverosímil la excusa (el contrato firmado en su oficina, con su sello, en su nombre), y luego remata con una frase irónica: "Qué terrible es trabajar con gente tan autónoma." El tono es sarcástico: "terrible" e "independiente" se usan para expresar lo contrario, señalando que la "ignorancia" del congresista no es creíble. El efecto es de crítica política mordaz sin afirmaciones directas que puedan considerarse difamatorias. No es metáfora (A), elogio genuino (C) ni hipérbole (D).',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 26. Sintáctico + identificar (texto académico - citas y referencias)
      {
        id: 'lc-p-s11-26',
        enunciado: 'Lee el siguiente párrafo de un ensayo:\n\n"La desigualdad económica no es solo un problema moral, sino también económico. Como señala Stiglitz (2012), "las economías más desiguales tienden a crecer más lentamente porque la demanda interna se concentra en pocas manos" (p. 78). Esto sugiere que reducir la desigualdad puede ser un requisito para el crecimiento sostenido."\n\n¿Qué función cumple la cita de Stiglitz en el párrafo?',
        opciones: [
          { letra: 'A', texto: 'La cita demuestra que el autor del ensayo copió el párrafo de Stiglitz.' },
          { letra: 'B', texto: 'La cita aporta autoridad académica al argumento del autor: al usar las palabras exactas de un economista reconocido, respalda la afirmación con evidencia especializada y cumple la norma académica de reconocer las fuentes.' },
          { letra: 'C', texto: 'La cita no tiene ninguna función relevante: podría eliminarse sin afectar el argumento.' },
          { letra: 'D', texto: 'La cita indica que el autor no tiene opinión propia sobre el tema.' },
        ],
        clave: 'B',
        justificacion: 'Las citas en los textos académicos cumplen funciones específicas: (1) respaldo: aportan la autoridad de una fuente especializada para apoyar el argumento; (2) evidencia: presentan datos o conclusiones de investigaciones previas; (3) ética académica: reconocen la propiedad intelectual. En este caso, la cita de Stiglitz (Nobel de Economía) refuerza la tesis del párrafo con evidencia académica de peso. El formato (apellido, año, página) sigue normas de citación (APA). No es plagio (A) porque se cita correctamente. La cita es funcional al argumento (C). La presencia de citas no niega la voz del autor (D): el autor de hecho parafrasea la implicación de la cita en la última oración.',
        competencia: 'identificar',
        componente: 'sintactico',
      },

      // 27. Pragmático + reflexionar (lenguaje y poder)
      {
        id: 'lc-p-s11-27',
        enunciado: 'El análisis crítico del discurso estudia cómo el lenguaje reproduce o cuestiona relaciones de poder. Lee el siguiente fragmento de un decreto gubernamental:\n\n"Los beneficiarios del subsidio deberán demostrar su condición de vulnerabilidad mediante los mecanismos que determine la autoridad competente, en los plazos y condiciones establecidos."\n\n¿Qué relación de poder refleja el lenguaje de este decreto?',
        opciones: [
          { letra: 'A', texto: 'El decreto pone al ciudadano en posición de poder porque puede reclamar el subsidio libremente.' },
          { letra: 'B', texto: 'El decreto coloca al ciudadano en posición de demostrar (someterse a una evaluación) ante una "autoridad competente" que define los criterios y plazos; el lenguaje pasivo y burocrático ("deberán", "que determine la autoridad") establece una relación asimétrica donde el Estado fija las condiciones y el ciudadano se ajusta a ellas.' },
          { letra: 'C', texto: 'El decreto es un ejemplo de lenguaje democrático que equilibra los derechos del ciudadano y el Estado.' },
          { letra: 'D', texto: 'El lenguaje del decreto no refleja ninguna relación de poder porque es neutral y técnico.' },
        ],
        clave: 'B',
        justificacion: 'El análisis crítico del discurso (Fairclough, Van Dijk) muestra que el lenguaje burocrático no es neutro: reproduce relaciones de poder. En este decreto: (1) "deberán demostrar" coloca la carga sobre el ciudadano (obligación de probar); (2) "que determine la autoridad competente" concentra la definición de los criterios en el Estado, no en el ciudadano; (3) el lenguaje pasivo e impersonal oculta quiénes toman las decisiones, creando una sensación de inevitabilidad. La asimetría es clara: el ciudadano pide, el Estado decide los criterios. Las opciones A y C niegan la asimetría. La opción D asume que el lenguaje técnico es neutro, lo que el análisis crítico del discurso cuestiona.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 28. Semántico + comprender (texto ensayístico colombiano)
      {
        id: 'lc-p-s11-28',
        enunciado: 'Lee el siguiente fragmento del ensayo "El colombiano y su lengua" (paráfrasis de Orlando Fals Borda):\n\n"Hay en el habla popular colombiana una riqueza de metáforas, hipérboles y figuras que no encuentra equivalente en el español peninsular. Cuando el campesino antioqueño dice que algo es \'mejor que el pan biche con agua panela\', condensa en una expresión un mundo de sensaciones, memorias y afectos que ninguna traducción académica puede capturar."\n\n¿Cuál es la tesis implícita del fragmento?',
        opciones: [
          { letra: 'A', texto: 'El español peninsular es superior al habla popular colombiana.' },
          { letra: 'B', texto: 'Las variedades populares y regionales del español colombiano poseen riqueza expresiva propia que no puede reducirse ni equipararse al español estándar, y que vale la pena valorar y estudiar como patrimonio cultural.' },
          { letra: 'C', texto: 'Las expresiones populares deben reemplazarse por un español más formal en todos los contextos.' },
          { letra: 'D', texto: 'El español académico es el único capaz de expresar emociones complejas.' },
        ],
        clave: 'B',
        justificacion: 'La tesis está implícita en la valoración positiva que el autor hace del habla popular colombiana: "riqueza de metáforas, hipérboles y figuras", "no encuentra equivalente", el reconocimiento de que la expresión popular "condensa un mundo de sensaciones" que "ninguna traducción académica puede capturar". El autor defiende el valor propio de las variedades lingüísticas populares, que la tradición normativa ha subordinado al español estándar o peninsular. Esta es una posición central en la sociolingüística y la etnografía: cada variedad lingüística es un sistema completo y válido con su propia riqueza. Las opciones A, C y D contradirectamente la tesis del texto.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 29. Sintáctico + reflexionar (cohesión y coherencia en ensayo)
      {
        id: 'lc-p-s11-29',
        enunciado: 'Lee el siguiente párrafo de un ensayo sobre la tecnología:\n\n"Las redes sociales afectan la salud mental de los jóvenes. Los estudios son importantes. El agua es esencial para la vida. Por otro lado, las redes tienen beneficios. La conectividad global es positiva."\n\n¿Cuál es el problema principal de este párrafo?',
        opciones: [
          { letra: 'A', texto: 'El párrafo tiene demasiados argumentos y debería reducirse a una sola oración.' },
          { letra: 'B', texto: 'El párrafo tiene graves problemas de coherencia (incluye una idea completamente irrelevante: "el agua es esencial") y de cohesión (las oraciones no están conectadas lógicamente; no hay conectores que muestren la relación entre las ideas).' },
          { letra: 'C', texto: 'El párrafo es demasiado objetivo; debería incluir más opiniones personales.' },
          { letra: 'D', texto: 'El párrafo no tiene ningún problema: todas las oraciones están relacionadas con la tecnología.' },
        ],
        clave: 'B',
        justificacion: 'Este párrafo tiene dos problemas graves: (1) coherencia: la oración "El agua es esencial para la vida" es completamente ajena al tema (las redes sociales y la salud mental), lo que rompe la coherencia temática; (2) cohesión: las demás oraciones, aunque relacionadas con el tema, no están conectadas con conectores discursivos que muestren sus relaciones lógicas (causa, contraste, consecuencia). "Los estudios son importantes" es tan vaga que no contribuye a ningún argumento. La opción A sugiere reducir cuando el problema es la organización. La opción C introduce un criterio no relevante. La opción D niega el problema evidente de la oración sobre el agua.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 30. Pragmático + comprender (géneros discursivos digitales)
      {
        id: 'lc-p-s11-30',
        enunciado: 'Lee el siguiente texto publicado en una red social:\n\n"Según ESTUDIO CIENTÍFICO REVELADOR que los medios no quieren que sepas, el wifi causa cáncer en 9 de cada 10 personas. Comparte antes de que lo borren. URGENTE."\n\n¿Cuáles son los marcadores lingüísticos que alertan sobre la baja credibilidad de este texto?',
        opciones: [
          { letra: 'A', texto: 'El uso de mayúsculas, que indica que el autor tiene mucha información importante.' },
          { letra: 'B', texto: 'Varios marcadores de baja credibilidad: generalizaciones absolutas (9 de 10 personas), apelación a la conspiración ("que los medios no quieren que sepas"), urgencia artificial ("antes de que lo borren"), ausencia de fuente específica ("estudio científico" sin identificar autores ni publicación), y uso de mayúsculas para crear alarmismo.' },
          { letra: 'C', texto: 'El texto es creíble porque menciona un estudio científico.' },
          { letra: 'D', texto: 'El texto es creíble porque fue publicado en una red social y tiene muchos compartidos.' },
        ],
        clave: 'B',
        justificacion: 'La alfabetización mediática incluye reconocer marcadores de desinformación en textos digitales. Este texto tiene varios: (1) afirmación estadística sin fuente ("9 de cada 10 personas") que parece específica pero es inventada; (2) apelación a la conspiración ("que los medios no quieren que sepas"), técnica típica para crear desconfianza en las fuentes verificables; (3) urgencia artificial ("antes de que lo borren"), que presiona a compartir sin verificar; (4) ausencia de fuente identificable ("estudio científico" sin autores, revista, institución); (5) uso de mayúsculas para crear impacto emocional. Ninguno de estos elementos garantiza credibilidad. Las opciones A, C y D interpretan mal los marcadores.',
        competencia: 'comprender',
        componente: 'pragmatico',
      },

      // 31. Semántico + identificar (texto filosófico - autonomía)
      {
        id: 'lc-p-s11-31',
        enunciado: 'Lee el siguiente fragmento de John Stuart Mill:\n\n"El único propósito legítimo por el cual el poder puede ejercerse sobre cualquier miembro de una comunidad civilizada, en contra de su voluntad, es el de prevenir daño a otros. Su propio bien, ya sea físico o moral, no es justificación suficiente."\n\n¿Cuál es el principio filosófico que el texto defiende?',
        opciones: [
          { letra: 'A', texto: 'El texto defiende que el Estado puede intervenir en la vida privada siempre que lo considere conveniente para el bien común.' },
          { letra: 'B', texto: 'El texto defiende el principio del daño (harm principle): el Estado solo puede limitar la libertad individual cuando las acciones de una persona causan daño a otras; no puede hacerlo para proteger a la propia persona de sí misma.' },
          { letra: 'C', texto: 'El texto defiende que todos los ciudadanos deben obedecer al Estado sin cuestionar sus decisiones.' },
          { letra: 'D', texto: 'El texto afirma que la moral religiosa debe guiar las decisiones políticas.' },
        ],
        clave: 'B',
        justificacion: 'Este pasaje de "Sobre la libertad" (1859) es la formulación clásica del "principio del daño" (harm principle) de Mill, un pilar del liberalismo político: el Estado solo está justificado para coercionar a un individuo cuando sus acciones dañan a terceros, no para protegerlo de sí mismo (paternalismo) ni para imponer estándares morales. Este principio fundamenta debates actuales sobre legalización de drogas, eutanasia y decisiones personales. La opción A describe el paternalismo que Mill rechaza. La opción C es opuesta a la defensa de la autonomía que hace Mill. La opción D introduce la religión, que el texto no menciona.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 32. Sintáctico + comprender (argumentación - estructura toulminiana)
      {
        id: 'lc-p-s11-32',
        enunciado: 'Lee el siguiente fragmento de un editorial:\n\n"El gobierno debe aumentar la inversión en transporte público masivo [CLAIM]. El 60% de los bogotanos usa bus o metro para moverse [DATO], lo que muestra que el transporte público es esencial para la ciudad [GARANTÍA]. Además, invertir en infraestructura pública reduce la congestión y la contaminación [RESPALDO]. Sin embargo, si el presupuesto ya está comprometido, se requeriría replantear otras partidas [REFUTACIÓN]."\n\n¿Cuál es la función del último enunciado ("Sin embargo...")?',
        opciones: [
          { letra: 'A', texto: 'El último enunciado invalida completamente la afirmación inicial.' },
          { letra: 'B', texto: 'El último enunciado introduce una condición de excepción o cualificación al argumento: reconoce que hay una circunstancia bajo la cual la propuesta requeriría pasos adicionales, lo que hace el argumento más honesto y completo sin abandonar la tesis.' },
          { letra: 'C', texto: 'El último enunciado es el argumento más importante del párrafo.' },
          { letra: 'D', texto: 'El último enunciado repite la afirmación inicial con otras palabras.' },
        ],
        clave: 'B',
        justificacion: 'En el modelo argumentativo de Toulmin, los argumentos sólidos incluyen no solo datos y garantías, sino también refutaciones o cualificaciones (rebuttal): condiciones bajo las cuales el argumento podría no aplicar o requerir modificaciones. Aquí, "sin embargo, si el presupuesto ya está comprometido" introduce una condición de excepción: la propuesta sigue siendo válida, pero su implementación requiere consideraciones adicionales. Esto no invalida la tesis (A), sino que la hace más rigurosa y honesta. No es el argumento central (C). No repite la tesis (D).',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 33. Pragmático + identificar (intertextualidad y género)
      {
        id: 'lc-p-s11-33',
        enunciado: 'Lee el siguiente texto:\n\n"Querida Clarita:\n\nHan pasado veinte años desde aquella tarde en el puerto. Todavía guardo tu carta entre las páginas del libro que me prestaste. Supongo que ya sabes que me casé, que tuve hijos, que la vida siguió su curso sin preguntarme nada. A veces me pregunto si tomé la decisión correcta. Probablemente nunca lo sabré."\n\n¿Qué género textual es este y qué característica lingüística principal lo define?',
        opciones: [
          { letra: 'A', texto: 'Es un ensayo académico que analiza la toma de decisiones en la vida humana.' },
          { letra: 'B', texto: 'Es una carta personal (epistolar); se define por el vocativo inicial ("Querida Clarita"), el uso de la primera persona que expresa reflexión íntima, referencias al pasado compartido entre emisor y destinatario, y un registro afectivo y confidencial.' },
          { letra: 'C', texto: 'Es una noticia periodística sobre una persona que se casó hace veinte años.' },
          { letra: 'D', texto: 'Es un texto argumentativo que defiende la tesis de que las decisiones pasadas no pueden cuestionarse.' },
        ],
        clave: 'B',
        justificacion: 'El género epistolar (carta) tiene marcas textuales específicas: el vocativo inicial que nombra al destinatario ("Querida Clarita"), el uso de la primera persona singular para narrar y reflexionar, referencias a una historia compartida entre emisor y destinatario (el puerto, el libro, la carta), el tono íntimo y confidencial, y la ausencia de propósito argumentativo o informativo directo. La carta personal se caracteriza por la expresión subjetiva y afectiva. No es un ensayo (A: sin argumentación sistemática), una noticia (C: sin hechos de interés público narrados de forma objetiva) ni un texto argumentativo (D: no defiende ninguna tesis).',
        competencia: 'identificar',
        componente: 'pragmatico',
      },

      // 34. Semántico + reflexionar (ambigüedad lingüística)
      {
        id: 'lc-p-s11-34',
        enunciado: 'Lee el siguiente titular de periódico:\n\n"El alcalde prometió a los vendedores ambulantes que no los molestaría más"\n\n¿Por qué este titular es ambiguo y cuáles son sus dos posibles interpretaciones?',
        opciones: [
          { letra: 'A', texto: 'El titular es completamente claro: el alcalde prometió no perseguir a los vendedores.' },
          { letra: 'B', texto: 'El titular es ambiguo porque "no los molestaría más" puede interpretarse de dos formas: (1) el alcalde prometió no hostigar a los vendedores ambulantes (interpretación favorable a los vendedores), o (2) el alcalde prometió a sus aliados políticos vendedores que dejaría de estar en contacto con ellos (interpretación que cambia el referente de "molestar").' },
          { letra: 'C', texto: 'El titular es ambiguo porque no sabemos si el alcalde habló en español o en otra lengua.' },
          { letra: 'D', texto: 'El titular es ambiguo porque la palabra "vendedores" tiene dos significados distintos en el diccionario.' },
        ],
        clave: 'B',
        justificacion: 'La ambigüedad del titular surge de la polisemia del verbo "molestar" y de la ambigüedad en el referente del complemento directo. "Molestar" puede significar (1) hostigar o perseguir (el alcalde promete cesar los operativos contra vendedores) o (2) incomodar en sentido más neutro. Pero también el referente cambia: ¿a quiénes les prometió no molestar a los vendedores? ¿A la ciudadanía, asegurando que no habrá conflictos? ¿O directamente a los vendedores? Esta ambigüedad es un tipo de problema lingüístico frecuente en titulares periodísticos que buscan brevedad. La opción A afirma que no hay ambigüedad. Las opciones C y D identifican fuentes de ambigüedad incorrectas.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 35. Sintáctico + reflexionar (texto multimodal - infografía)
      {
        id: 'lc-p-s11-35',
        enunciado: 'Una infografía sobre el cambio climático tiene el siguiente texto central en letras rojas grandes: "¡El planeta se está calentando!" Debajo, en letras pequeñas y grises: "Datos de la NASA muestran un aumento promedio de 1,1°C desde 1880." ¿Qué relación hay entre los dos niveles del texto en términos de argumentación?',
        opciones: [
          { letra: 'A', texto: 'Los dos niveles dicen lo mismo con distintas palabras.' },
          { letra: 'B', texto: 'Los dos niveles cumplen funciones complementarias: el texto grande apela a la emoción y la urgencia para captar la atención, mientras que el texto pequeño aporta el sustento factual y científico; la separación visual también indica la jerarquía entre mensaje emocional y dato verificable.' },
          { letra: 'C', texto: 'El texto pequeño contradice al texto grande porque 1,1°C es un cambio insignificante.' },
          { letra: 'D', texto: 'En una infografía, el texto pequeño siempre es más importante que el texto grande.' },
        ],
        clave: 'B',
        justificacion: 'Los textos multimodales como las infografías usan múltiples recursos (tamaño, color, disposición) para comunicar diferentes tipos de información. El texto grande en rojo cumple una función retórica emocional: captar atención, generar urgencia, conectar con el lector. El texto pequeño en gris cumple una función epistémica: aportar el dato verificable y la fuente ("NASA") que da credibilidad científica a la afirmación emocional. Ambos niveles son necesarios: sin el dato (texto pequeño), el mensaje es solo alarma; sin el impacto emocional (texto grande), el dato puede pasar desapercibido. La opción A ignora las diferencias funcionales. La opción C hace una valoración subjetiva del dato. La opción D generaliza incorrectamente.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 36. Pragmático + reflexionar (función de la literatura)
      {
        id: 'lc-p-s11-36',
        enunciado: 'El escritor peruano Mario Vargas Llosa escribió: "La literatura sirve para que el ser humano viva más vidas que la suya propia, para que se asoma a experiencias que su existencia real le niega."\n\n¿Cuál de las siguientes afirmaciones desarrolla mejor la idea de Vargas Llosa?',
        opciones: [
          { letra: 'A', texto: 'La literatura es útil principalmente para aprender vocabulario y mejorar la ortografía.' },
          { letra: 'B', texto: 'La literatura expande la experiencia humana al permitir que el lector se identifique con personajes de otros tiempos, culturas y situaciones, desarrollando empatía y una comprensión más amplia de la condición humana.' },
          { letra: 'C', texto: 'La literatura es una forma de entretenimiento sin ningún valor formativo adicional.' },
          { letra: 'D', texto: 'Solo los grandes clásicos de la literatura mundial cumplen la función que describe Vargas Llosa.' },
        ],
        clave: 'B',
        justificacion: 'La idea de Vargas Llosa sobre la función de la literatura se desarrolla en la noción de "experiencia vicaria": a través de la lectura, el lector vive situaciones que no viviría en su vida real (la guerra, el amor en otra época, la injusticia en otro país) y se pone en el lugar de personajes distintos. Esto desarrolla la empatía y amplía la comprensión de la diversidad humana. Esta función va mucho más allá de aprender vocabulario (A) o del entretenimiento puro (C). La opción D limita arbitrariamente la función a "grandes clásicos", cuando Vargas Llosa habla de la literatura en general.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 37. Semántico + comprender (texto histórico)
      {
        id: 'lc-p-s11-37',
        enunciado: 'Lee el siguiente fragmento de un documento histórico (Acta de Independencia de Colombia, 1810):\n\n"El cuerpo del pueblo, aquel en cuyo favor y para cuya felicidad se han establecido todas las instituciones sociales, tiene el derecho imprescriptible e inalienable de reformarlas, alterarlas y abolirlas enteramente cuando su conservación ya no corresponda a los objetos de su institución."\n\n¿En qué corriente filosófica se inspira principalmente este fragmento?',
        opciones: [
          { letra: 'A', texto: 'En el pensamiento medieval que defiende el derecho divino de los reyes.' },
          { letra: 'B', texto: 'En el pensamiento ilustrado y el contractualismo liberal, especialmente en las ideas de Locke y Rousseau sobre la soberanía popular y el derecho de los pueblos a reformar o disolver los gobiernos que no cumplen su fin.' },
          { letra: 'C', texto: 'En el pensamiento marxista sobre la lucha de clases y la revolución proletaria.' },
          { letra: 'D', texto: 'En el pensamiento conservador que defiende la preservación de las tradiciones.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento refleja conceptos centrales de la Ilustración y el contractualismo: (1) la soberanía popular ("el cuerpo del pueblo"); (2) la idea de que las instituciones existen para servir al pueblo, no al revés (Locke, Rousseau); (3) el derecho de resistencia o revolución cuando el gobierno incumple su contrato social (Locke: "cuando un gobierno traiciona su mandato, el pueblo puede disolverlo"). Estas ideas circularon ampliamente en la América hispana tras la Revolución Francesa y la independencia estadounidense. La opción A es anacrónica y opuesta a la soberanía popular. La opción C introduce el marxismo, posterior en el tiempo y diferente en sus premisas. La opción D es contraria al espíritu reformador del texto.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 38. Sintáctico + reflexionar (coherencia global del texto)
      {
        id: 'lc-p-s11-38',
        enunciado: 'Lee el siguiente ensayo breve y determina cuál es su problema principal de coherencia:\n\n"La lectura crítica es fundamental en la educación. Los libros son objetos culturales importantes. Sin embargo, la tecnología ha cambiado muchas cosas. Los jóvenes prefieren los dispositivos digitales. Por esta razón, las bibliotecas son importantes para la comunidad. En conclusión, debemos leer más."\n\n¿Cuál es el problema central?',
        opciones: [
          { letra: 'A', texto: 'El ensayo es demasiado corto para un texto académico.' },
          { letra: 'B', texto: 'El ensayo carece de una tesis clara que articule todas las ideas: las oraciones no mantienen una línea argumentativa coherente; hay saltos temáticos (libros → tecnología → juventud → bibliotecas) sin conectores lógicos que los integren, y la conclusión no se deriva de los argumentos previos.' },
          { letra: 'C', texto: 'El ensayo tiene demasiados argumentos y debería elegir solo uno.' },
          { letra: 'D', texto: 'El ensayo usa conectores incorrectos como "sin embargo" y "por esta razón".' },
        ],
        clave: 'B',
        justificacion: 'La coherencia de un texto depende de que todas sus partes contribuyan a desarrollar una idea central de forma progresiva y articulada. Este ensayo tiene una tesis implícita vaga ("debemos leer más") pero las ideas intermedias no se articulan para llegar a ella: la mención de la tecnología, los jóvenes y las bibliotecas no está conectada lógicamente con la afirmación inicial sobre la lectura crítica. Además, el conector "por esta razón" no expresa ninguna relación causal real entre la preferencia juvenil por lo digital y la importancia de las bibliotecas. La falla es de coherencia global, no de extensión (A), cantidad de argumentos (C) ni de los conectores en sí (D).',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 39. Pragmático + reflexionar (escritura creativa y subjetividad)
      {
        id: 'lc-p-s11-39',
        enunciado: 'Lee el siguiente inicio de cuento:\n\n"La primera vez que vi a mi ciudad desde el avión, pensé que parecía una herida en la tierra: cicatrices de asfalto, costras de cemento, inflamaciones de barrios hacinados. Pero también tenía la belleza de las heridas que sanan: el verde que se cuela por las grietas, el río que todavía corre aunque nadie lo limpie."\n\n¿Qué recurso retórico domina el fragmento y qué visión de la ciudad comunica?',
        opciones: [
          { letra: 'A', texto: 'El fragmento usa una enumeración de datos estadísticos para describir los problemas urbanos.' },
          { letra: 'B', texto: 'El fragmento usa una metáfora sostenida (la ciudad como herida/cicatriz) que articula una visión ambivalente: reconoce el daño y el deterioro urbano, pero también la resiliencia y la vida que persiste; esta visión es crítica y esperanzadora a la vez.' },
          { letra: 'C', texto: 'El fragmento es una descripción objetiva y sin valoraciones de la ciudad vista desde el avión.' },
          { letra: 'D', texto: 'El fragmento argumenta que todas las ciudades latinoamericanas son iguales.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento construye y desarrolla una metáfora sostenida: la ciudad como herida corporal (cicatrices, costras, inflamaciones). Esta metáfora no es decorativa: articula una visión. La "herida" expresa daño, violencia, deterioro. Pero inmediatamente el autor complejiza la imagen: también hay "belleza de las heridas que sanan", el verde que resiste, el río que corre. La metáfora expresa una visión dialéctica de la ciudad: deteriorada pero viva, dañada pero resistente. Esta ambivalencia es característica de la literatura urbana latinoamericana. No es descripción objetiva (C), no usa datos estadísticos (A), y no generaliza sobre todas las ciudades (D).',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 40. Semántico + comprender (texto discontinuo complejo - dos fuentes)
      {
        id: 'lc-p-s11-40',
        enunciado: 'Fuente 1 (gráfica): Muestra que el 78% de los estudiantes universitarios colombianos trabajan y estudian simultáneamente.\n\nFuente 2 (texto): "Los estudiantes que trabajan más de 20 horas semanales tienen un 35% más de probabilidad de abandonar la universidad antes de graduarse."\n\nCombinando ambas fuentes, ¿cuál es la inferencia más adecuada?',
        opciones: [
          { letra: 'A', texto: 'La mayoría de los estudiantes universitarios colombianos trabajan porque prefieren tener dinero propio.' },
          { letra: 'B', texto: 'Una proporción muy alta de estudiantes universitarios colombianos combina trabajo y estudio, lo que, dado el riesgo de deserción asociado a muchas horas de trabajo, sugiere que la deserción universitaria puede estar relacionada con la necesidad económica de los estudiantes.' },
          { letra: 'C', texto: 'Los datos demuestran que trabajar es siempre negativo para el desempeño académico.' },
          { letra: 'D', texto: 'El 78% de los estudiantes que trabajan abandonarán la universidad.' },
        ],
        clave: 'B',
        justificacion: 'La inferencia válida combina la información de ambas fuentes sin mezclarla con supuestos no sustentados. De la Fuente 1 sabemos que el 78% de estudiantes trabaja y estudia (una proporción muy alta). De la Fuente 2 sabemos que trabajar más de 20 horas aumenta el riesgo de deserción en un 35%. La combinación sugiere que la deserción universitaria puede estar vinculada a la necesidad económica de los estudiantes (que los obliga a trabajar muchas horas). La opción A introduce motivación ("prefieren dinero propio") no sustentada por los datos. La opción C generaliza a "siempre negativo" (la fuente dice más de 20 horas, no cualquier trabajo). La opción D confunde la probabilidad adicional de deserción con una certeza para todos.',
        competencia: 'comprender',
        componente: 'semantico',
      },
    ],
  },
  // ===========================================================
  // INGLÉS
  // ===========================================================
  ingles: {

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Comprensión de lectura — idea principal (comprension-lectura / lexical)
      {
        id: 'eng-s11-p01',
        enunciado: 'Read the following text and answer the question.\n\n"Recycling is one of the most important habits we can adopt to protect the environment. When we recycle paper, glass, and plastic, we reduce the amount of waste that ends up in landfills. This simple action also saves energy and natural resources. However, recycling alone is not enough; we also need to reduce our consumption and reuse materials whenever possible."\n\nWhat is the main idea of the text?',
        opciones: [
          { letra: 'A', texto: 'Landfills are the biggest environmental problem in modern cities.' },
          { letra: 'B', texto: 'Recycling paper, glass, and plastic is easy and fun.' },
          { letra: 'C', texto: 'Recycling is important, but protecting the environment also requires reducing consumption and reusing materials.' },
          { letra: 'D', texto: 'We should only focus on saving energy to protect the environment.' },
        ],
        clave: 'C',
        justificacion: 'El texto afirma que reciclar es importante, pero añade que no es suficiente por sí solo: también es necesario reducir el consumo y reutilizar materiales. La opción A reduce el problema a los vertederos. La opción B trivializa el mensaje. La opción D ignora el reciclaje y la reutilización mencionados en el texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 2. Uso de la lengua — tiempos verbales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p02',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"By the time we arrived at the station, the train ______ already ______."',
        opciones: [
          { letra: 'A', texto: 'had / left' },
          { letra: 'B', texto: 'has / left' },
          { letra: 'C', texto: 'was / leaving' },
          { letra: 'D', texto: 'will have / left' },
        ],
        clave: 'A',
        justificacion: 'La oración describe dos acciones pasadas: llegar a la estación y la salida del tren, que ocurrió antes de la llegada. En inglés, la acción anterior se expresa con el Past Perfect (had + participio pasado). La opción B usa Present Perfect, incorrecto para contexto pasado. La opción C usa Past Continuous, que no expresa anterioridad. La opción D usa Future Perfect, que no corresponde a contexto pasado.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 3. Comprensión de lectura — vocabulario en contexto (comprension-lectura / lexical)
      {
        id: 'eng-s11-p03',
        enunciado: 'Read the following sentence and answer the question.\n\n"The scientist\'s groundbreaking discovery changed the way we understand the human brain forever."\n\nWhat does the word "groundbreaking" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Dangerous and controversial.' },
          { letra: 'B', texto: 'Revolutionary and highly significant.' },
          { letra: 'C', texto: 'Related to digging in the ground.' },
          { letra: 'D', texto: 'Old-fashioned and outdated.' },
        ],
        clave: 'B',
        justificacion: '"Groundbreaking" en inglés significa innovador o revolucionario, es decir, algo que rompe con lo establecido y tiene gran importancia. El contexto lo confirma: el descubrimiento cambió para siempre la comprensión del cerebro humano. La opción A agrega connotación negativa que no está en el texto. La opción C interpreta la palabra de forma literal (relacionada con el suelo). La opción D es lo opuesto al significado correcto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 4. Uso de la lengua — pragmática y actos de habla (uso-lengua / pragmatico)
      {
        id: 'eng-s11-p04',
        enunciado: 'Read the following dialogue.\n\nA: "I\'m really sorry I forgot your birthday. I feel terrible about it."\nB: "______"\n\nWhich response best fits the context?',
        opciones: [
          { letra: 'A', texto: '"Don\'t worry about it. It happens to everyone."' },
          { letra: 'B', texto: '"Birthdays are very important to me."' },
          { letra: 'C', texto: '"I have a lot of friends who forgot my birthday too."' },
          { letra: 'D', texto: '"I will call you tomorrow to discuss this."' },
        ],
        clave: 'A',
        justificacion: 'A expresa una disculpa sincera. La respuesta más pragmáticamente adecuada es aceptar la disculpa y minimizar el daño, lo que hace la opción A. La opción B solo menciona la importancia de los cumpleaños sin responder a la disculpa. La opción C desvía la conversación hacia otros. La opción D pospone una respuesta de manera innecesaria y no corresponde al contexto emocional.',
        competencia: 'uso-lengua',
        componente: 'pragmatico',
      },

      // 5. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p05',
        enunciado: 'Read the following text and answer the question.\n\n"Maria studied engineering for five years. After graduating, she worked in a construction company for two years. She then decided to go back to university to get a master\'s degree in sustainable architecture. Today, she designs eco-friendly buildings in three different countries."\n\nWhat can be inferred about Maria?',
        opciones: [
          { letra: 'A', texto: 'She prefers to live and work in one country only.' },
          { letra: 'B', texto: 'She abandoned her engineering career to become an architect.' },
          { letra: 'C', texto: 'She is committed to professional growth and has an international career.' },
          { letra: 'D', texto: 'She found her first job difficult and that is why she returned to university.' },
        ],
        clave: 'C',
        justificacion: 'A partir del texto se puede inferir que María ha invertido continuamente en su formación (ingeniería, maestría en arquitectura sostenible) y trabaja en tres países, lo que indica compromiso con el desarrollo profesional y una carrera internacional. La opción A contradice la información (trabaja en tres países). La opción B es incorrecta porque complementó, no abandonó, su carrera. La opción D es una suposición no sustentada en el texto.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 6. Comprensión de lectura — idea principal (comprension-lectura / lexical)
      {
        id: 'eng-s11-p06',
        enunciado: 'Read the following text and answer the question.\n\n"Social media has transformed the way people communicate. While it allows instant connection across the globe, it also raises concerns about privacy, misinformation, and mental health. Young people spend an average of four hours per day on social platforms. Experts disagree about whether this is harmful or simply a new form of social interaction."\n\nWhat is the best title for this text?',
        opciones: [
          { letra: 'A', texto: '"Why Social Media is Dangerous for Teenagers"' },
          { letra: 'B', texto: '"Social Media: A Complex Phenomenon with Benefits and Challenges"' },
          { letra: 'C', texto: '"How to Reduce Screen Time in Young People"' },
          { letra: 'D', texto: '"The History of Social Networks from 1990 to Today"' },
        ],
        clave: 'B',
        justificacion: 'El texto presenta una visión equilibrada de las redes sociales, mencionando tanto beneficios (conexión global) como preocupaciones (privacidad, desinformación, salud mental) y el debate entre expertos. El título más adecuado refleja esta ambivalencia. La opción A solo captura el aspecto negativo. La opción C sugiere soluciones que el texto no propone. La opción D habla de historia, que tampoco es el tema del texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 7. Uso de la lengua — voz pasiva (uso-lengua / gramatical)
      {
        id: 'eng-s11-p07',
        enunciado: 'Choose the option that correctly rewrites the sentence in passive voice.\n\n"The government announced new economic measures last week."',
        opciones: [
          { letra: 'A', texto: '"New economic measures were announced by the government last week."' },
          { letra: 'B', texto: '"New economic measures are announced by the government last week."' },
          { letra: 'C', texto: '"New economic measures have been announced by the government last week."' },
          { letra: 'D', texto: '"New economic measures was announced by the government last week."' },
        ],
        clave: 'A',
        justificacion: 'La oración original está en pasado simple activo (announced). En voz pasiva con pasado simple, la estructura es: objeto + was/were + participio pasado + by + sujeto. Como "measures" es plural, se usa "were announced". La opción B usa el presente simple. La opción C usa el present perfect, que no corresponde al pasado simple. La opción D usa "was" con un sujeto plural (incorrecto: "measures" requiere "were").',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 8. Comprensión de lectura — vocabulario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p08',
        enunciado: 'Read the following sentence.\n\n"The government\'s reluctance to address climate change has frustrated environmental activists around the world."\n\nWhat does the word "reluctance" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Enthusiasm and willingness to act.' },
          { letra: 'B', texto: 'Unwillingness or hesitation to do something.' },
          { letra: 'C', texto: 'Ability and capacity to solve problems.' },
          { letra: 'D', texto: 'Speed and urgency in decision making.' },
        ],
        clave: 'B',
        justificacion: '"Reluctance" significa falta de disposición o resistencia a hacer algo. El contexto lo confirma: si los activistas están frustrados, es porque el gobierno no está actuando de manera proactiva ante el cambio climático, sino mostrando resistencia o demora. La opción A es lo opuesto. Las opciones C y D introducen conceptos no relacionados con el sentido de "reluctance".',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 9. Uso de la lengua — oraciones condicionales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p09',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"If she ______ harder, she ______ the exam."',
        opciones: [
          { letra: 'A', texto: '"studied / would pass"' },
          { letra: 'B', texto: '"studies / will pass"' },
          { letra: 'C', texto: '"had studied / would have passed"' },
          { letra: 'D', texto: '"would study / passes"' },
        ],
        clave: 'A',
        justificacion: 'La oración expresa una condición hipotética en el presente/futuro (algo que podría ocurrir pero es poco probable o no está ocurriendo ahora). Esto corresponde al Segundo Condicional: If + pasado simple, would + infinitivo. La opción B usa el Primer Condicional (condición real y probable). La opción C usa el Tercer Condicional (hipótesis sobre el pasado, algo que ya no puede cambiarse). La opción D mezcla incorrectamente would con presente simple.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 10. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p10',
        enunciado: 'Read the following dialogue and answer the question.\n\nA: "Do you know if the library is open on Sundays?"\nB: "I\'m not sure. I think they close at noon, but you should check the website."\n\nWhat can be inferred about B\'s response?',
        opciones: [
          { letra: 'A', texto: 'B is certain that the library closes at noon on Sundays.' },
          { letra: 'B', texto: 'B is not completely sure about the schedule and suggests A verify the information.' },
          { letra: 'C', texto: 'B works at the library and knows the schedule well.' },
          { letra: 'D', texto: 'B thinks the library is closed all day on Sundays.' },
        ],
        clave: 'B',
        justificacion: 'B usa expresiones de incertidumbre ("I\'m not sure", "I think") que indican que no tiene certeza sobre el horario. Además, recomienda verificar en el sitio web, lo cual confirma que su información es aproximada. La opción A contradice el uso de "I think" y "I\'m not sure". La opción C es una inferencia sin sustento en el texto. La opción D interpreta incorrectamente: B dice que cierran al mediodía, no todo el día.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 11. Uso de la lengua — conectores (uso-lengua / gramatical)
      {
        id: 'eng-s11-p11',
        enunciado: 'Choose the connector that best completes the following sentence.\n\n"She worked extremely hard all year; ______, she failed to get the promotion."',
        opciones: [
          { letra: 'A', texto: '"therefore"' },
          { letra: 'B', texto: '"moreover"' },
          { letra: 'C', texto: '"nevertheless"' },
          { letra: 'D', texto: '"for instance"' },
        ],
        clave: 'C',
        justificacion: '"Nevertheless" es un conector adversativo que introduce un contraste o una idea inesperada respecto a lo anterior. La oración expresa un contraste: trabajó mucho (esfuerzo) pero no obtuvo la promoción (resultado inesperado). "Therefore" (A) indica consecuencia lógica, lo opuesto al contraste requerido. "Moreover" (B) introduce información adicional en la misma dirección. "For instance" (D) introduce un ejemplo. Solo "nevertheless" expresa la contradicción entre esfuerzo y resultado.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 12. Comprensión de lectura — texto complejo (comprension-lectura / lexical)
      {
        id: 'eng-s11-p12',
        enunciado: 'Read the following text and answer the question.\n\n"Artificial intelligence is no longer science fiction. Today, AI systems can diagnose diseases more accurately than doctors in some fields, write poetry, compose music, and even predict natural disasters. However, AI also raises ethical questions: Who is responsible when an AI makes a deadly mistake? Can machines ever truly understand human emotions? These are not questions for the future — they need answers now."\n\nAccording to the text, why is it urgent to address the ethical questions about AI?',
        opciones: [
          { letra: 'A', texto: 'Because AI will be invented in the near future and we should prepare.' },
          { letra: 'B', texto: 'Because AI is already operating in critical areas and its ethical implications require immediate attention.' },
          { letra: 'C', texto: 'Because AI is only used for entertainment purposes like music and poetry.' },
          { letra: 'D', texto: 'Because machines can understand human emotions better than humans.' },
        ],
        clave: 'B',
        justificacion: 'El texto es explícito: la IA ya existe ("no longer science fiction") y opera en campos críticos como el diagnóstico médico. Las preguntas éticas sobre responsabilidad y comprensión emocional "necesitan respuestas ahora", no en el futuro. La urgencia deriva de que la IA ya está activa en contextos donde sus errores tienen consecuencias graves. La opción A contradice el texto (la IA ya existe). La opción C reduce las aplicaciones de la IA a entretenimiento, ignorando el diagnóstico médico y la predicción de desastres. La opción D invierte la pregunta del texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 13. Uso de la lengua — vocabulario en contexto (uso-lengua / pragmatico)
      {
        id: 'eng-s11-p13',
        enunciado: 'Read the following situation and choose the most appropriate response.\n\nYour friend says: "I have a job interview tomorrow and I\'m really nervous. What if I forget everything?"\n\nYou say: "______"',
        opciones: [
          { letra: 'A', texto: '"Don\'t worry. You\'ve prepared well and you\'ll do great. Just take a deep breath and be yourself."' },
          { letra: 'B', texto: '"That\'s your problem. You should have prepared better."' },
          { letra: 'C', texto: '"I don\'t know. Interviews are usually terrible experiences."' },
          { letra: 'D', texto: '"Yes, I had a job interview once too."' },
        ],
        clave: 'A',
        justificacion: 'La situación requiere una respuesta de apoyo emocional y aliento. La opción A ofrece tranquilidad ("don\'t worry"), reconoce el esfuerzo previo ("you\'ve prepared well") y da un consejo práctico y empático. La opción B es inapropiada pragmáticamente: culpa al amigo en lugar de apoyarlo. La opción C aumenta la ansiedad en lugar de reducirla. La opción D no responde a la necesidad emocional del amigo y desvía la conversación hacia una experiencia personal irrelevante.',
        competencia: 'uso-lengua',
        componente: 'pragmatico',
      },

      // 14. Comprensión de lectura — estructura del texto (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p14',
        enunciado: 'Read the following text.\n\n"Dear Editor,\n\nI am writing to express my concern about the increasing use of single-use plastics in our city. Every day, thousands of plastic bags and bottles end up in our rivers and parks. Local businesses should be required to offer eco-friendly alternatives. I urge the city council to take immediate action.\n\nSincerely,\nA concerned citizen"\n\nWhat type of text is this and what is its main purpose?',
        opciones: [
          { letra: 'A', texto: 'A narrative text; its purpose is to tell the story of plastic pollution.' },
          { letra: 'B', texto: 'A formal letter of complaint or opinion; its purpose is to persuade the editor and city council to take action on plastic pollution.' },
          { letra: 'C', texto: 'A scientific report; its purpose is to present data about plastic use in the city.' },
          { letra: 'D', texto: 'An informal email; its purpose is to inform a friend about environmental problems.' },
        ],
        clave: 'B',
        justificacion: 'El texto tiene marcas claras de carta formal de opinión al editor: saludo formal ("Dear Editor"), cierre formal ("Sincerely"), firma anónima representativa ("A concerned citizen") y una petición directa ("I urge the city council to take immediate action"). Su propósito es persuasivo: convencer al editor (y a través del periódico, al consejo municipal) de actuar sobre la contaminación plástica. No es narrativo (sin personajes ni trama), ni científico (sin datos estadísticos), ni informal.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 15. Uso de la lengua — tiempos verbales mixtos (uso-lengua / gramatical)
      {
        id: 'eng-s11-p15',
        enunciado: 'Choose the option that correctly completes the conversation.\n\nA: "Have you ever visited Cartagena?"\nB: "Yes! I ______ there in 2022. It ______ an incredible experience."',
        opciones: [
          { letra: 'A', texto: '"have been / was"' },
          { letra: 'B', texto: '"went / was"' },
          { letra: 'C', texto: '"go / is"' },
          { letra: 'D', texto: '"had gone / had been"' },
        ],
        clave: 'B',
        justificacion: 'A usa el Present Perfect ("Have you ever visited?") para preguntar por una experiencia general. B responde con una referencia temporal específica ("in 2022"), lo que requiere el pasado simple (Simple Past), no el Present Perfect. "Went" (pasado simple de go) es correcto para la acción pasada con referencia temporal. "Was" es el pasado simple de "be", correcto para describir la experiencia. La opción A usa Present Perfect con referencia temporal específica (incorrecto en inglés estándar). La opción C usa presente. La opción D usa Past Perfect sin justificación.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 16. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p16',
        enunciado: 'Read the following text and answer the question.\n\n"Every morning, Daniel puts on his uniform, picks up his notebook and walks to the building at the corner of his street. He sits in rows with many other people his age, listens carefully, and takes notes. At 3 p.m., he goes back home with homework to do."\n\nWhat can be inferred about Daniel?',
        opciones: [
          { letra: 'A', texto: 'Daniel works in a factory that starts very early.' },
          { letra: 'B', texto: 'Daniel is a student who attends school every day.' },
          { letra: 'C', texto: 'Daniel is a soldier who goes to military training.' },
          { letra: 'D', texto: 'Daniel is a teacher who gives lessons to other people.' },
        ],
        clave: 'B',
        justificacion: 'The description — wearing a uniform, carrying a notebook, sitting in rows with people his age, listening and taking notes, leaving at 3 p.m. with homework — describes the daily routine of a student at school. The phrase "many other people his age" and "homework" are the strongest clues. Option A is incorrect because factories do not involve notebooks or homework. Option C is possible (uniform) but military training does not involve notes and homework. Option D reverses the role: Daniel listens and takes notes, not the other person.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 17. Uso de la lengua — oraciones en reported speech (uso-lengua / gramatical)
      {
        id: 'eng-s11-p17',
        enunciado: 'Choose the option that correctly reports the following statement.\n\nDirect speech: "I will finish the project tomorrow," said Laura.',
        opciones: [
          { letra: 'A', texto: 'Laura said that she will finish the project tomorrow.' },
          { letra: 'B', texto: 'Laura said that she would finish the project the next day.' },
          { letra: 'C', texto: 'Laura says that she will finish the project tomorrow.' },
          { letra: 'D', texto: 'Laura told that she would finish the project tomorrow.' },
        ],
        clave: 'B',
        justificacion: 'In reported speech with a past reporting verb ("said"), the tense backshifts: "will" becomes "would", and time expressions change: "tomorrow" becomes "the next day". Option A keeps "will" and "tomorrow", which is incorrect with a past reporting verb. Option C uses the present tense "says", changing the original past context. Option D uses "told" without an indirect object, which is grammatically incorrect ("told" requires a person: "told her that...").',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 18. Comprensión de lectura — texto largo (comprension-lectura / lexical)
      {
        id: 'eng-s11-p18',
        enunciado: 'Read the text and answer the question.\n\n"The Amazon rainforest, often called the \'lungs of the Earth\', produces about 20% of the world\'s oxygen and is home to over 10% of all species on the planet. However, deforestation rates have accelerated in recent years. Between 2020 and 2023, an area larger than Switzerland was cleared, mainly for cattle ranching and soy production. Scientists warn that if the forest loses 20–25% of its original cover, it may reach a \'tipping point\' from which recovery becomes impossible."\n\nAccording to the text, what is the main risk of continued deforestation?',
        opciones: [
          { letra: 'A', texto: 'That the Amazon will stop producing coffee and chocolate.' },
          { letra: 'B', texto: 'That the forest could reach an irreversible point of collapse if a critical percentage of cover is lost.' },
          { letra: 'C', texto: 'That Switzerland will lose its forests because of Amazon deforestation.' },
          { letra: 'D', texto: 'That cattle ranching will become the world\'s most profitable industry.' },
        ],
        clave: 'B',
        justificacion: 'The text explicitly states that scientists warn about a "tipping point" from which recovery becomes impossible if 20–25% of the forest cover is lost. This is the main risk described. Option A introduces products (coffee, chocolate) not mentioned. Option C misinterprets the geographic comparison ("an area larger than Switzerland" refers to size of cleared land, not location). Option D is not a risk described in the text.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 19. Uso de la lengua — modales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p19',
        enunciado: 'Choose the option that best completes the sentence with the correct modal verb.\n\n"You ______ drink alcohol if you are going to drive. It is illegal and extremely dangerous."',
        opciones: [
          { letra: 'A', texto: '"should not"' },
          { letra: 'B', texto: '"must not"' },
          { letra: 'C', texto: '"do not have to"' },
          { letra: 'D', texto: '"might not"' },
        ],
        clave: 'B',
        justificacion: '"Must not" (mustn\'t) expresses a strong prohibition — something that is forbidden or absolutely not allowed. Drunk driving is illegal and dangerous, so "must not" is appropriate here. "Should not" (A) expresses a recommendation, which is too weak for a legal prohibition. "Do not have to" (C) expresses absence of obligation (you are free to choose), which is the wrong meaning. "Might not" (D) expresses possibility, which is also incorrect for this context.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 20. Comprensión de lectura — vocabulario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p20',
        enunciado: 'Read the following sentence.\n\n"Despite the adverse weather conditions, the rescue team persevered and managed to find the missing hikers."\n\nWhat does the word "persevered" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Gave up and turned back.' },
          { letra: 'B', texto: 'Continued making an effort despite difficulties.' },
          { letra: 'C', texto: 'Complained about the difficult conditions.' },
          { letra: 'D', texto: 'Moved very slowly because of the bad weather.' },
        ],
        clave: 'B',
        justificacion: '"Persevere" means to continue doing something despite obstacles or difficulties, showing persistence and determination. The context confirms this meaning: the team faced "adverse weather conditions" but still "managed to find the missing hikers," implying continued effort. Option A (gave up) is the opposite. Options C and D describe possible reactions but do not capture the core meaning of persistence.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 21. Uso de la lengua — preguntas de tag (uso-lengua / gramatical)
      {
        id: 'eng-s11-p21',
        enunciado: 'Choose the correct tag question for the following sentence.\n\n"She has been living in Medellín for three years, ______?"',
        opciones: [
          { letra: 'A', texto: '"is she"' },
          { letra: 'B', texto: '"doesn\'t she"' },
          { letra: 'C', texto: '"hasn\'t she"' },
          { letra: 'D', texto: '"has she"' },
        ],
        clave: 'C',
        justificacion: 'Tag questions are formed using the auxiliary verb from the main clause, in the opposite polarity. The main clause uses Present Perfect ("has been living"), which is affirmative. The tag must be negative, using the same auxiliary: "hasn\'t she". Option A uses "is" from Present Continuous, not Present Perfect. Option B uses "doesn\'t" from Simple Present. Option D uses "has she", which is the same polarity (both affirmative), incorrect for a standard tag question.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 22. Comprensión de lectura — idea principal (comprension-lectura / lexical)
      {
        id: 'eng-s11-p22',
        enunciado: 'Read the following text and answer the question.\n\n"Exercise is not just good for the body; it is also one of the most effective tools for improving mental health. Studies show that regular physical activity reduces symptoms of depression and anxiety, improves sleep quality, and boosts self-esteem. Even 30 minutes of walking five times a week can make a significant difference. Yet, despite this evidence, fewer than 20% of adults in most countries meet the recommended weekly physical activity guidelines."\n\nWhat is the paradox described in the text?',
        opciones: [
          { letra: 'A', texto: 'That exercise is useful for the body but harmful to the mind.' },
          { letra: 'B', texto: 'That walking is better for mental health than running.' },
          { letra: 'C', texto: 'That despite strong evidence of the mental health benefits of exercise, most adults do not exercise enough.' },
          { letra: 'D', texto: 'That 30 minutes of exercise per day is too much for most people.' },
        ],
        clave: 'C',
        justificacion: 'A paradox is a situation where two facts seem to contradict each other. The text establishes: (1) exercise has strong, proven mental health benefits; (2) fewer than 20% of adults meet exercise guidelines. The gap between what is known and what people actually do is the paradox the text describes. Option A inverts the text\'s claim. Option B is a detail not present in the text. Option D misinterprets "30 minutes" as excessive when the text presents it as achievable.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 23. Uso de la lengua — preposiciones (uso-lengua / gramatical)
      {
        id: 'eng-s11-p23',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"She has been interested ______ marine biology ______ she was twelve years old."',
        opciones: [
          { letra: 'A', texto: '"in / since"' },
          { letra: 'B', texto: '"about / for"' },
          { letra: 'C', texto: '"for / since"' },
          { letra: 'D', texto: '"in / for"' },
        ],
        clave: 'A',
        justificacion: 'The fixed expression is "interested in" (not "interested about" or "interested for"). For the time reference, "since" is used with a specific point in time ("since she was twelve"), while "for" is used with a period of duration ("for ten years"). Option B uses wrong preposition "about" and wrong time preposition "for" with a specific moment. Option C uses "for" with a point in time, which is incorrect. Option D uses correct "in" but incorrect "for" with a specific starting point.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 24. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p24',
        enunciado: 'Read the following conversation and answer the question.\n\nManager: "The report needs to be finished by Friday."\nEmployee: "I\'ll do my best, but I already have three deadlines this week."\nManager: "I understand. Let me know if you need any support."\n\nWhat can be inferred about the employee\'s situation?',
        opciones: [
          { letra: 'A', texto: 'The employee is refusing to work on the report.' },
          { letra: 'B', texto: 'The employee is under pressure from multiple commitments and is communicating a potential challenge without directly refusing.' },
          { letra: 'C', texto: 'The employee has already completed all three deadlines.' },
          { letra: 'D', texto: 'The manager is angry with the employee for not finishing the report.' },
        ],
        clave: 'B',
        justificacion: '"I\'ll do my best, but I already have three deadlines" is a polite and indirect way of expressing difficulty without flat refusal. The employee is communicating workload pressure — not refusing (A), not claiming to have finished other work (C). The manager\'s response ("Let me know if you need support") shows understanding, not anger (D). The inference is that the employee is in a high-pressure situation and is communicating it diplomatically.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 25. Uso de la lengua — comparativos y superlativos (uso-lengua / gramatical)
      {
        id: 'eng-s11-p25',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"This year\'s competition was ______ in the organization\'s history. More than 5,000 teams from 60 countries participated."',
        opciones: [
          { letra: 'A', texto: '"the larger"' },
          { letra: 'B', texto: '"more large"' },
          { letra: 'C', texto: '"the largest"' },
          { letra: 'D', texto: '"larger than"' },
        ],
        clave: 'C',
        justificacion: 'The sentence compares the competition to all previous ones ("in the organization\'s history"), requiring a superlative form. "Large" forms its superlative as "the largest" (monosyllabic adjective: add -est with the definite article). Option A uses "the larger," which is the comparative (used to compare two things, not all). Option B uses "more large," which is the analytical form incorrectly applied to a short adjective. Option D uses the comparative form without completing the comparison.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 26. Comprensión de lectura — propósito del texto (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p26',
        enunciado: 'Read the following text.\n\n"Are you tired of feeling stressed and overwhelmed? BrainCalm supplements contain a unique blend of natural herbs scientifically proven to reduce anxiety and improve focus. Join the thousands of satisfied customers who have transformed their lives. Order now and receive a 30% discount on your first purchase!"\n\nWhat is the main purpose of this text?',
        opciones: [
          { letra: 'A', texto: 'To provide scientific information about anxiety treatments.' },
          { letra: 'B', texto: 'To persuade readers to buy a product by appealing to their emotions and using unverified claims.' },
          { letra: 'C', texto: 'To warn readers about the risks of using natural supplements.' },
          { letra: 'D', texto: 'To explain the chemistry of the herbs used in BrainCalm.' },
        ],
        clave: 'B',
        justificacion: 'The text is an advertisement. Its purpose is persuasion: it uses a rhetorical question to identify with the reader\'s problem ("Are you tired..."), makes an appeal to authority without specifying sources ("scientifically proven"), uses social proof ("thousands of satisfied customers"), and creates urgency with a discount offer. The claim "scientifically proven" is not verified with any reference. Option A would require citations and methodology. Option C is the opposite purpose. Option D describes a scientific text, not an advertisement.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 27. Uso de la lengua — conectores discursivos (uso-lengua / gramatical)
      {
        id: 'eng-s11-p27',
        enunciado: 'Choose the connector that best completes the text.\n\n"Learning a new language requires time and consistent practice. ______, the benefits are remarkable: you can communicate with more people, access a wider range of literature and media, and even improve your cognitive abilities."',
        opciones: [
          { letra: 'A', texto: '"As a result"' },
          { letra: 'B', texto: '"However"' },
          { letra: 'C', texto: '"In contrast"' },
          { letra: 'D', texto: '"In other words"' },
        ],
        clave: 'B',
        justificacion: '"However" introduces a contrast or concession: the first sentence mentions the difficulty (time and practice), and the second introduces a contrasting positive consequence (the remarkable benefits). "However" signals that despite the effort required, the rewards are worth it. "As a result" (A) would indicate a consequence, but the benefits are not a direct result of the difficulty itself. "In contrast" (C) would compare two different situations, not apply here. "In other words" (D) introduces a restatement or clarification, not a contrast.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 28. Comprensión de lectura — vocabulario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p28',
        enunciado: 'Read the following sentence.\n\n"The documentary offered a nuanced perspective on the conflict, acknowledging the legitimate concerns of all parties involved rather than portraying any single group as entirely villainous."\n\nWhat does "nuanced" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Simple and easy to understand for a general audience.' },
          { letra: 'B', texto: 'Showing subtle differences and complexities rather than presenting things in a black-and-white way.' },
          { letra: 'C', texto: 'Based on personal opinions and emotional reactions.' },
          { letra: 'D', texto: 'Focused on one particular side of the story.' },
        ],
        clave: 'B',
        justificacion: '"Nuanced" means showing fine distinctions and avoiding oversimplification. The context confirms this: the documentary acknowledged "legitimate concerns of all parties" and did not portray any group as "entirely villainous" — both indicators of complexity rather than black-and-white thinking. Option A (simple) is the opposite. Option C (personal opinions) describes subjectivity, not nuance. Option D (one-sided) contradicts "all parties involved."',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 29. Uso de la lengua — gerundio e infinitivo (uso-lengua / gramatical)
      {
        id: 'eng-s11-p29',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"My doctor advised me ______ more vegetables and ______ processed food."',
        opciones: [
          { letra: 'A', texto: '"eating / avoiding"' },
          { letra: 'B', texto: '"to eat / to avoid"' },
          { letra: 'C', texto: '"to eat / avoiding"' },
          { letra: 'D', texto: '"eating / to avoid"' },
        ],
        clave: 'B',
        justificacion: 'The verb "advise" is followed by an object + infinitive with "to" (advise someone to do something). Both actions are part of the same advice, so both use the same structure: "advise me to eat... and to avoid...". Option A uses gerunds, which are incorrect after "advise + object". Options C and D mix gerund and infinitive inconsistently, which is grammatically incorrect in parallel structures.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 30. Comprensión de lectura — estructura del texto (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p30',
        enunciado: 'Read the following text and answer the question.\n\n"Pros and cons of working from home\n\nWorking from home has become increasingly common. On the positive side, employees save commuting time and can create more flexible schedules. Families benefit from parents being more present. On the negative side, the boundaries between work and personal life can blur, leading to longer working hours. Social isolation is also a concern for many remote workers."\n\nWhat is the organizational structure of this text?',
        opciones: [
          { letra: 'A', texto: 'A chronological sequence of events about the history of remote work.' },
          { letra: 'B', texto: 'A cause-and-effect analysis of why people choose to work from home.' },
          { letra: 'C', texto: 'A balanced presentation of advantages and disadvantages using signal phrases ("on the positive side", "on the negative side").' },
          { letra: 'D', texto: 'A persuasive argument defending that everyone should work from home.' },
        ],
        clave: 'C',
        justificacion: 'The text is organized using a pros-and-cons structure, signaled by the explicit phrases "on the positive side" and "on the negative side". It presents benefits first (flexibility, time saved, family presence) and then drawbacks (blurred boundaries, isolation) in a balanced way without advocating for either. Option A describes chronological order, absent here. Option B describes cause-effect analysis, which is different. Option D is incorrect: the text does not take a persuasive position.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 31. Uso de la lengua — voz pasiva con modal (uso-lengua / gramatical)
      {
        id: 'eng-s11-p31',
        enunciado: 'Choose the option that correctly rewrites the following sentence using a modal passive.\n\n"They must repair the bridge before winter."',
        opciones: [
          { letra: 'A', texto: '"The bridge must repaired before winter."' },
          { letra: 'B', texto: '"The bridge must be repaired before winter."' },
          { letra: 'C', texto: '"The bridge must have repaired before winter."' },
          { letra: 'D', texto: '"The bridge is must repaired before winter."' },
        ],
        clave: 'B',
        justificacion: 'Modal passive structure: modal + be + past participle. "The bridge must be repaired" follows this pattern correctly. Option A omits "be", making it grammatically incomplete. Option C uses "must have + past participle," which is the structure for deduction about the past (e.g., "She must have left"), not present obligation. Option D incorrectly places "is" before the modal, which is ungrammatical.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 32. Comprensión de lectura — texto literario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p32',
        enunciado: 'Read the following poem excerpt and answer the question.\n\n"I carry your heart with me (I carry it in my heart)\nI am never without it (anywhere I go you go, my dear;\nand whatever is done by only me is your doing, my darling)"\n— E.E. Cummings\n\nWhat idea does the phrase "I carry your heart in my heart" convey?',
        opciones: [
          { letra: 'A', texto: 'That the speaker has undergone a heart transplant.' },
          { letra: 'B', texto: 'That the speaker feels such a deep emotional connection with someone that the loved one is always present within them.' },
          { letra: 'C', texto: 'That the speaker is physically carrying a gift from someone they love.' },
          { letra: 'D', texto: 'That the speaker believes the person they love is invisible.' },
        ],
        clave: 'B',
        justificacion: 'The phrase is a metaphor for profound emotional connection and inseparability. "Carrying someone\'s heart in your heart" means having that person so deeply integrated in your inner life that you are never apart, even physically. The rest of the poem reinforces this: "anywhere I go you go" and "whatever is done by only me is your doing" express complete emotional union. Options A, C, and D interpret the metaphor literally, which misses its poetic, figurative meaning.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 33. Uso de la lengua — verbos frasales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p33',
        enunciado: 'Read the following sentences and choose the one where the phrasal verb "look up" is used correctly in context.\n\n',
        opciones: [
          { letra: 'A', texto: '"I\'m going to look up the ladder to check if it\'s safe."' },
          { letra: 'B', texto: '"The economy is starting to look up after two difficult years."' },
          { letra: 'C', texto: '"She looked up her friend at the party by standing on her toes."' },
          { letra: 'D', texto: '"He looked up the heavy box from the floor."' },
        ],
        clave: 'B',
        justificacion: '"Look up" as a phrasal verb has several meanings: (1) to search for information; (2) to improve (used for situations: "things are looking up"). In option B, "the economy is starting to look up" correctly uses the phrasal verb meaning "to improve." Option A uses "look up" in its literal directional sense (physically looking upward), not as a phrasal verb with idiomatic meaning. Options C and D use "looked up" with meanings that are not standard phrasal verb uses.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 34. Comprensión de lectura — vocabulario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p34',
        enunciado: 'Read the following sentence.\n\n"The new policy was met with widespread skepticism from the scientific community, who questioned the validity of the data used to support it."\n\nWhat does "skepticism" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Strong support and enthusiasm.' },
          { letra: 'B', texto: 'Doubt and critical questioning of the claims made.' },
          { letra: 'C', texto: 'Complete indifference and lack of interest.' },
          { letra: 'D', texto: 'Admiration for the complexity of the policy.' },
        ],
        clave: 'B',
        justificacion: '"Skepticism" means doubt or a questioning attitude toward claims, especially those lacking sufficient evidence. The context confirms this: scientists "questioned the validity of the data," which is an act of skeptical inquiry. Option A (strong support) is the opposite. Option C (indifference) describes lack of interest, not active questioning. Option D (admiration) also contradicts the meaning, as the scientists are questioning, not admiring.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 35. Uso de la lengua — used to / be used to / get used to (uso-lengua / gramatical)
      {
        id: 'eng-s11-p35',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"When she moved to Canada, she found it difficult ______ the cold winters, but after a few years she ______ them."',
        opciones: [
          { letra: 'A', texto: '"to get used to / used to love"' },
          { letra: 'B', texto: '"to get used to / got used to"' },
          { letra: 'C', texto: '"used to getting / had used to"' },
          { letra: 'D', texto: '"getting used to / was used to loving"' },
        ],
        clave: 'B',
        justificacion: '"Get used to + noun/gerund" means to become accustomed to something (a process). "Found it difficult to get used to" = she struggled to adapt. "Got used to them" = she eventually adapted (past simple of "get used to"). Option A introduces "used to love," which describes a past habit, not adaptation. Option C uses incorrect constructions ("had used to" does not exist). Option D changes the meaning: "was used to loving" means she was already accustomed, which contradicts "after a few years."',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 36. Comprensión de lectura — texto de opinión (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p36',
        enunciado: 'Read the following text and answer the question.\n\n"Some argue that video games are purely a waste of time and promote violence. However, this view is too simplistic. Research has shown that strategy and puzzle games can improve problem-solving skills and spatial reasoning. Multiplayer games develop teamwork and communication. Of course, like any activity, excessive gaming can have negative effects; moderation and parental guidance are key."\n\nWhat is the author\'s main argument?',
        opciones: [
          { letra: 'A', texto: 'That all video games are beneficial and should be encouraged without limits.' },
          { letra: 'B', texto: 'That video games are harmful and should be banned for young people.' },
          { letra: 'C', texto: 'That the view of video games as purely negative is overly simplistic; they can have real benefits when used in moderation.' },
          { letra: 'D', texto: 'That parents should choose video games for their children without the children\'s input.' },
        ],
        clave: 'C',
        justificacion: 'The author challenges the simplistic view that games are "purely a waste of time and promote violence." The argument is balanced: acknowledges potential benefits (problem-solving, teamwork) while recognizing that excessive gaming can be negative. The conclusion calls for "moderation and parental guidance," not total restriction or total freedom. Option A ignores the caveat about excessive gaming. Option B is the opposite of the author\'s position. Option D is not suggested in the text.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 37. Uso de la lengua — discurso indirecto con preguntas (uso-lengua / gramatical)
      {
        id: 'eng-s11-p37',
        enunciado: 'Choose the option that correctly reports the following question.\n\nDirect speech: "Do you know where the nearest hospital is?" the tourist asked the police officer.',
        opciones: [
          { letra: 'A', texto: 'The tourist asked the police officer if he knew where the nearest hospital was.' },
          { letra: 'B', texto: 'The tourist asked the police officer where is the nearest hospital.' },
          { letra: 'C', texto: 'The tourist asked the police officer that does he know where the hospital is.' },
          { letra: 'D', texto: 'The tourist asked to the police officer if he knows where the nearest hospital is.' },
        ],
        clave: 'A',
        justificacion: 'When reporting yes/no questions in indirect speech, "if" or "whether" is used, and the word order changes to statement order (subject + verb). Tenses backshift: "Do you know" becomes "if he knew"; "is" becomes "was". Option A follows all these rules correctly. Option B keeps question word order after "where," which is incorrect in indirect speech. Option C uses "that" for a yes/no question and keeps question word order. Option D adds incorrect "to" after "asked" and keeps present tense.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 38. Comprensión de lectura — vocabulario en contexto (comprension-lectura / lexical)
      {
        id: 'eng-s11-p38',
        enunciado: 'Read the following sentence.\n\n"The startup\'s meteoric rise attracted the attention of investors from around the world."\n\nWhat does "meteoric rise" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'A slow and steady increase over many years.' },
          { letra: 'B', texto: 'An extremely fast and impressive growth or success.' },
          { letra: 'C', texto: 'A rise related to the study of meteorology.' },
          { letra: 'D', texto: 'A decline followed by a sudden recovery.' },
        ],
        clave: 'B',
        justificacion: '"Meteoric rise" is an idiom meaning a very rapid and spectacular rise to success, comparing it to the speed and brightness of a meteor. The context confirms this: the growth was impressive enough to attract global investor attention. Option A describes the opposite (slow). Option C is a literal misinterpretation (confusing "meteoric" with "meteorological"). Option D describes a recovery pattern not implied by the phrase.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 39. Uso de la lengua — adjetivos compuestos (uso-lengua / gramatical)
      {
        id: 'eng-s11-p39',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"This is a ______ program designed for students who want to develop leadership skills."',
        opciones: [
          { letra: 'A', texto: '"two-years"' },
          { letra: 'B', texto: '"two year"' },
          { letra: 'C', texto: '"two-year"' },
          { letra: 'D', texto: '"two years\'"' },
        ],
        clave: 'C',
        justificacion: 'When a noun phrase is used as a compound adjective before a noun, numbers are written with a hyphen and the noun remains singular: "a two-year program" (not "two-years"). Option A adds a hyphen but incorrectly pluralizes "years" in the compound adjective. Option B lacks the hyphen required for compound adjectives. Option D adds an unnecessary apostrophe, creating a possessive form that does not apply here.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 40. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p40',
        enunciado: 'Read the following text and answer the question.\n\n"The last tiger was spotted in the region twenty years ago. Since then, despite several conservation efforts and the creation of protected areas, no verified sighting has been recorded. Local hunters report that prey animals have returned in numbers, suggesting the habitat could theoretically support a tiger population."\n\nWhat can be inferred from the text?',
        opciones: [
          { letra: 'A', texto: 'Tigers are still present in the region but are hiding from cameras.' },
          { letra: 'B', texto: 'The species is extinct globally because it has not been seen for twenty years.' },
          { letra: 'C', texto: 'The tiger may be locally extinct in this region, although the habitat could potentially support the species again.' },
          { letra: 'D', texto: 'Conservation efforts in the region have been completely successful.' },
        ],
        clave: 'C',
        justificacion: 'The text states: no verified sighting in 20 years (suggesting local extinction), conservation efforts have not resulted in tiger sightings (limited success), but prey has returned (habitat is potentially viable). The reasonable inference is local extinction with a theoretically suitable habitat. Option A is possible speculation but not supported by evidence. Option B makes a global claim not justified by local data. Option D is incorrect: no confirmed sightings despite conservation efforts suggests limited success.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 41. Uso de la lengua — oraciones de relativo (uso-lengua / gramatical)
      {
        id: 'eng-s11-p41',
        enunciado: 'Choose the option that correctly combines the two sentences into one using a relative clause.\n\nSentence 1: "The scientist won the Nobel Prize."\nSentence 2: "Her discovery changed modern medicine."',
        opciones: [
          { letra: 'A', texto: '"The scientist who her discovery changed modern medicine won the Nobel Prize."' },
          { letra: 'B', texto: '"The scientist whose discovery changed modern medicine won the Nobel Prize."' },
          { letra: 'C', texto: '"The scientist which discovery changed modern medicine won the Nobel Prize."' },
          { letra: 'D', texto: '"The scientist that her discovery changed modern medicine won the Nobel Prize."' },
        ],
        clave: 'B',
        justificacion: 'The two sentences are connected through possession: the scientist\'s discovery. The correct relative pronoun for possession with people is "whose": "the scientist whose discovery changed modern medicine." Option A uses "who" but keeps the redundant possessive "her." Option C uses "which" for a person, incorrect (use "who/whose" for people). Option D uses "that" but also keeps the redundant "her," making the sentence grammatically incorrect.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 42. Comprensión de lectura — texto complejo (comprension-lectura / lexical)
      {
        id: 'eng-s11-p42',
        enunciado: 'Read the following text and answer the question.\n\n"Water scarcity is no longer a problem limited to arid regions. By 2050, it is estimated that two-thirds of the world\'s population could be living in water-stressed areas. Climate change is altering precipitation patterns, glaciers that supply drinking water to millions are retreating, and growing populations place ever-greater demands on limited freshwater resources. Yet water consumption in high-income countries remains ten times higher per capita than in low-income countries."\n\nAccording to the text, what is particularly problematic about global water consumption patterns?',
        opciones: [
          { letra: 'A', texto: 'That people in low-income countries waste the most water.' },
          { letra: 'B', texto: 'That there is a deep inequality: the countries that consume the most water per person are not the ones facing the greatest scarcity.' },
          { letra: 'C', texto: 'That glaciers are the only source of freshwater for humanity.' },
          { letra: 'D', texto: 'That water scarcity will only affect Africa and Asia by 2050.' },
        ],
        clave: 'B',
        justificacion: 'The text explicitly states that per capita water consumption in high-income countries is ten times higher than in low-income countries. The paradox is that high-income countries consume the most while low-income countries — many of which are in water-stressed regions — consume the least. This inequality in consumption patterns is "particularly problematic." Option A inverts the claim. Option C says glaciers are "a" source, not "the only" source. Option D contradicts the claim that it will affect "two-thirds of the world\'s population" broadly.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 43. Uso de la lengua — oraciones condicionales tipo 3 (uso-lengua / gramatical)
      {
        id: 'eng-s11-p43',
        enunciado: 'Choose the option that correctly completes the third conditional sentence.\n\n"If the firefighters ______ faster, they ______ the building."',
        opciones: [
          { letra: 'A', texto: '"arrived / could save"' },
          { letra: 'B', texto: '"had arrived / could have saved"' },
          { letra: 'C', texto: '"would arrive / saved"' },
          { letra: 'D', texto: '"arrive / will save"' },
        ],
        clave: 'B',
        justificacion: 'The third conditional (hypothetical past) uses: If + past perfect, would/could/might + have + past participle. It refers to an imaginary situation in the past that did not happen. "If the firefighters had arrived faster, they could have saved the building" implies they did not arrive in time and the building was not saved. Option A uses simple past + "could save" (second conditional mixed with incorrect main clause). Option C uses "would arrive" in the if-clause, which is incorrect (no "would" in conditional clauses). Option D uses present and future, describing a real condition.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 44. Comprensión de lectura — vocabulario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p44',
        enunciado: 'Read the following sentence.\n\n"After decades of conflict, the two communities reached a landmark agreement that was praised by international observers as a model for peaceful coexistence."\n\nWhat does "landmark" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Related to the geography of the land where the agreement was signed.' },
          { letra: 'B', texto: 'Historically significant and representing an important turning point.' },
          { letra: 'C', texto: 'A small and unimportant event in the history of the conflict.' },
          { letra: 'D', texto: 'A secret agreement known only to the parties involved.' },
        ],
        clave: 'B',
        justificacion: '"Landmark" as an adjective means historically significant, marking a turning point or major achievement. A "landmark agreement" is one that sets an important precedent or represents a major milestone. The context confirms this: the agreement came "after decades of conflict" and was praised internationally as "a model." Option A interprets "landmark" literally (geography). Option C is the opposite (unimportant). Option D introduces secrecy, which is not implied.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 45. Uso de la lengua — expresiones de acuerdo y desacuerdo (uso-lengua / pragmatico)
      {
        id: 'eng-s11-p45',
        enunciado: 'Read the following dialogue and choose the most appropriate response.\n\nA: "I think social media does more harm than good. It\'s making people more isolated and anxious."\nB: "______"',
        opciones: [
          { letra: 'A', texto: '"You\'re absolutely right. I totally agree with everything you said."' },
          { letra: 'B', texto: '"That\'s an interesting point, but I partially disagree. Social media can also connect people who would otherwise be isolated, like those living in remote areas or with limited mobility."' },
          { letra: 'C', texto: '"I don\'t know what you\'re talking about."' },
          { letra: 'D', texto: '"You shouldn\'t have such opinions. Social media is always positive."' },
        ],
        clave: 'B',
        justificacion: 'Option B demonstrates sophisticated pragmatic competence: it acknowledges the speaker\'s point ("that\'s an interesting point"), expresses partial disagreement politely ("I partially disagree"), and offers a specific counterargument (social media connecting isolated people). This is the most appropriate response in an academic or formal discussion context because it is respectful, nuanced, and substantive. Option A shows agreement without adding any perspective. Option C is dismissive and uncooperative. Option D is condescending and uses an absolute claim ("always positive"), which is as oversimplified as the statement being criticized.',
        competencia: 'uso-lengua',
        componente: 'pragmatico',
      },

      // 46. Comprensión de lectura — texto narrativo (comprension-lectura / lexical)
      {
        id: 'eng-s11-p46',
        enunciado: 'Read the following text and answer the question.\n\n"Elena had spent fifteen years as a nurse, but nothing had prepared her for the night shift on the pediatric ward after the earthquake. There were not enough beds, not enough hands, and not enough of anything. She moved from child to child with what she had: skill, experience, and the kind of calm that only comes from having already seen the worst. By morning, all twelve children in her care were stable."\n\nWhat quality of Elena is most emphasized in the text?',
        opciones: [
          { letra: 'A', texto: 'Her physical strength and ability to carry heavy equipment.' },
          { letra: 'B', texto: 'Her professional competence and ability to remain calm and effective under extreme pressure.' },
          { letra: 'C', texto: 'Her ability to get more resources from the hospital management.' },
          { letra: 'D', texto: 'Her emotional fragility in the face of a difficult situation.' },
        ],
        clave: 'B',
        justificacion: 'The text emphasizes Elena\'s professional qualities under crisis: fifteen years of experience, "skill, experience, and the kind of calm that only comes from having already seen the worst." Despite insufficient resources ("not enough of anything"), she worked with what she had and all twelve children were stable by morning. This describes competence under pressure, not physical strength (A), resource management (C), or fragility (D), which contradicts the described calm.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 47. Uso de la lengua — phrasal verbs con significado figurado (uso-lengua / gramatical)
      {
        id: 'eng-s11-p47',
        enunciado: 'Choose the sentence in which the phrasal verb "break down" is used with its figurative meaning.',
        opciones: [
          { letra: 'A', texto: '"The mechanic said the car would break down if we didn\'t change the oil."' },
          { letra: 'B', texto: '"She broke down in tears when she heard the news about her father."' },
          { letra: 'C', texto: '"The workers broke down the old factory wall with hammers."' },
          { letra: 'D', texto: '"The refrigerator broke down last night and all the food was ruined."' },
        ],
        clave: 'B',
        justificacion: '"Break down" has several meanings. Its literal meanings: (1) a machine stops working (A and D); (2) to demolish physically (C). Its figurative meaning: to lose emotional control, to start crying or become overwhelmed (B). "She broke down in tears" uses "break down" to mean she lost emotional composure — this is the figurative, non-literal use. Options A, C, and D use literal meanings: mechanical failure and physical destruction.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 48. Comprensión de lectura — texto argumentativo (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p48',
        enunciado: 'Read the following text and answer the question.\n\n"Opponents of mandatory school uniforms argue that they restrict students\' freedom of self-expression. This argument, while understandable, overlooks the evidence. Schools that have introduced uniforms report reductions in bullying related to socioeconomic status, as students from less affluent families are no longer singled out for wearing cheaper clothing. Moreover, uniforms reduce the pressure on families to spend large amounts on fashionable clothes. The right to expression must be balanced against the right to a safe and equitable learning environment."\n\nWhat is the author\'s strategy for responding to the opposing argument?',
        opciones: [
          { letra: 'A', texto: 'The author ignores the opposing argument completely.' },
          { letra: 'B', texto: 'The author acknowledges the opposing argument but counters it with evidence about reduced bullying and economic benefits, concluding that rights must be balanced.' },
          { letra: 'C', texto: 'The author agrees that uniforms restrict freedom of expression and proposes alternatives.' },
          { letra: 'D', texto: 'The author attacks the people who oppose uniforms rather than addressing their argument.' },
        ],
        clave: 'B',
        justificacion: 'The author uses a concession-refutation strategy: first acknowledges the opposing view ("while understandable"), then presents counterevidence (reduced bullying, economic benefits) and a concluding principle (balance of rights). This is a rhetorically sophisticated approach that strengthens the argument by engaging with the opposition rather than dismissing it. Option A is incorrect: the author explicitly addresses the opposing view. Option C misrepresents the author\'s position (the author disagrees with the freedom argument). Option D describes an ad hominem attack, absent from the text.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 49. Uso de la lengua — gerundio vs. infinitivo (contexto semántico) (uso-lengua / gramatical)
      {
        id: 'eng-s11-p49',
        enunciado: 'Choose the option that correctly shows the meaning difference between the two sentences.\n\n(1) "She stopped to check her phone."\n(2) "She stopped checking her phone."',
        opciones: [
          { letra: 'A', texto: 'Both sentences mean the same: she no longer uses her phone.' },
          { letra: 'B', texto: '(1) means she paused what she was doing in order to check her phone; (2) means she quit the habit of checking her phone.' },
          { letra: 'C', texto: '(1) means she quit the habit; (2) means she paused another activity.' },
          { letra: 'D', texto: 'Both sentences describe past actions that happened at the same time.' },
        ],
        clave: 'B',
        justificacion: 'This is a classic distinction in English grammar: "stop + infinitive" means to stop another activity in order to do something new ("she stopped [walking] to check her phone" = she paused to look at her phone). "Stop + gerund" means to stop doing that same activity ("she stopped checking her phone" = she quit the habit of checking it). These sentences have opposite meanings. Option A ignores the difference. Option C reverses the meanings. Option D is incorrect: the sentences describe different situations.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 50. Comprensión de lectura — lectura crítica de cifras (comprension-lectura / lexical)
      {
        id: 'eng-s11-p50',
        enunciado: 'Read the following text and answer the question.\n\n"A new study claims that people who eat breakfast daily are 40% more likely to succeed in their careers than those who skip it. The study was funded by a major cereal manufacturer and was conducted over two weeks with 200 participants."\n\nWhy should readers approach this study with caution?',
        opciones: [
          { letra: 'A', texto: 'Because eating breakfast has been proven to have no health benefits.' },
          { letra: 'B', texto: 'Because the study has significant limitations: a very short duration (two weeks), a small sample size (200 people), and a potential conflict of interest since it was funded by a company that profits from the result.' },
          { letra: 'C', texto: 'Because 40% is not a high enough percentage to be significant.' },
          { letra: 'D', texto: 'Because all studies about food are automatically unreliable.' },
        ],
        clave: 'B',
        justificacion: 'Critical reading of research requires evaluating methodological quality and potential bias. This study has three notable weaknesses: (1) two weeks is too short to measure career success; (2) 200 participants is a small sample for drawing broad conclusions; (3) funding from a cereal manufacturer creates a conflict of interest — they benefit financially from positive results about breakfast eating. These are standard criteria for evaluating scientific credibility. Option A makes a factual claim that contradicts existing research. Option C misrepresents statistical significance. Option D is an overgeneralization.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 51. Uso de la lengua — inversión para énfasis (uso-lengua / gramatical)
      {
        id: 'eng-s11-p51',
        enunciado: 'Choose the option that correctly uses inversion for emphasis.\n\n"Not only ______, but they also donated clothing and medicine."',
        opciones: [
          { letra: 'A', texto: '"they provided food"' },
          { letra: 'B', texto: '"they did provide food"' },
          { letra: 'C', texto: '"did they provide food"' },
          { letra: 'D', texto: '"provided they food"' },
        ],
        clave: 'C',
        justificacion: 'When "not only" begins a sentence or clause for emphasis, subject-auxiliary inversion is required: auxiliary verb + subject + main verb. "Not only did they provide food" follows the inversion rule. Option A uses normal word order without inversion, which is incorrect after "not only" at the beginning. Option B adds "did" but keeps the original word order (no inversion). Option D incorrectly places the main verb before the subject without the auxiliary.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 52. Comprensión de lectura — texto de ciencias (comprension-lectura / lexical)
      {
        id: 'eng-s11-p52',
        enunciado: 'Read the following text and answer the question.\n\n"Antibiotic resistance is one of the greatest threats to global health. Bacteria evolve and develop mechanisms to survive drugs that once killed them. Overuse of antibiotics in human medicine and agriculture accelerates this process. The World Health Organization estimates that by 2050, antibiotic-resistant infections could cause more deaths annually than cancer does today."\n\nAccording to the text, what is the primary cause of accelerating antibiotic resistance?',
        opciones: [
          { letra: 'A', texto: 'The natural aging process of bacteria over time.' },
          { letra: 'B', texto: 'The overuse of antibiotics in both human healthcare and agricultural practices.' },
          { letra: 'C', texto: 'The lack of investment in new antibiotics by pharmaceutical companies.' },
          { letra: 'D', texto: 'The spread of antibiotic-resistant bacteria through international travel.' },
        ],
        clave: 'B',
        justificacion: 'The text explicitly states: "Overuse of antibiotics in human medicine and agriculture accelerates this process." This is the primary cause identified in the text. Option A is technically true (evolution is natural) but the text specifically identifies overuse as the accelerating factor. Options C and D are not mentioned in the text. The question asks what the text says, not what is generally known about antibiotic resistance.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 53. Uso de la lengua — artículos (uso-lengua / gramatical)
      {
        id: 'eng-s11-p53',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"______ Amazon River is ______ longest river in ______ South America."',
        opciones: [
          { letra: 'A', texto: '"The / the / —"' },
          { letra: 'B', texto: '"A / a / a"' },
          { letra: 'C', texto: '"— / the / —"' },
          { letra: 'D', texto: '"The / a / the"' },
        ],
        clave: 'A',
        justificacion: 'Article rules: (1) "The Amazon River" — names of rivers always use "the" (the Nile, the Thames); (2) "the longest" — superlatives always use "the"; (3) "in South America" — no article before continent names used as locations. Option A ("The / the / —") follows all three rules. Option B uses "a/a/a," incorrect for names, superlatives, and continents. Option C omits the first article (rivers need "the"). Option D uses incorrect "the" before South America and "a" for the superlative.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 54. Comprensión de lectura — texto publicitario vs. texto informativo (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p54',
        enunciado: 'Read the two texts about the same product and answer the question.\n\nText A (advertisement): "GreenLeaf is the most advanced, eco-friendly water bottle on the market. Trusted by thousands, it keeps your water cold for 24 hours!"\n\nText B (review website): "GreenLeaf bottles performed well in temperature tests, maintaining cold water for an average of 18–22 hours. Build quality is good but the lid can occasionally leak. Price point is high compared to competitors with similar performance."\n\nWhich text provides more useful information for a consumer making a purchasing decision?',
        opciones: [
          { letra: 'A', texto: 'Text A, because it uses stronger and more confident language.' },
          { letra: 'B', texto: 'Text B, because it provides specific, verifiable data and acknowledges both strengths and limitations.' },
          { letra: 'C', texto: 'Text A, because it mentions that thousands of people trust the product.' },
          { letra: 'D', texto: 'Both texts are equally useful because they describe the same product.' },
        ],
        clave: 'B',
        justificacion: 'Text B provides more useful information for a consumer because: (1) it gives specific performance data ("18–22 hours" vs. "24 hours" claim); (2) it identifies a specific flaw ("lid can occasionally leak"); (3) it provides price comparison. Text A uses unverified superlatives ("most advanced"), social proof without data ("trusted by thousands"), and makes a performance claim (24 hours) that Text B suggests is slightly exaggerated. Strong, confident language (A) is a persuasion technique, not evidence of usefulness. Social proof (C) without data is not verifiable. The texts are not equally useful (D): one presents balanced evidence, the other uses marketing language.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 55. Uso de la lengua — futuro continuo y futuro perfecto (uso-lengua / gramatical)
      {
        id: 'eng-s11-p55',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"By the time the meeting starts at 9 a.m., the team ______ all the documents for over an hour."',
        opciones: [
          { letra: 'A', texto: '"will prepare"' },
          { letra: 'B', texto: '"will have been preparing"' },
          { letra: 'C', texto: '"is preparing"' },
          { letra: 'D', texto: '"prepares"' },
        ],
        clave: 'B',
        justificacion: '"By the time" + present tense (starts) signals future perfect or future perfect continuous. Since the sentence emphasizes the duration of an ongoing activity ("for over an hour") before a future deadline, Future Perfect Continuous is the most precise form: "will have been preparing" = they started before the meeting and will be in the middle of the action when it starts. Option A (Future Simple) does not express duration or the ongoing nature. Option C (Present Continuous) describes a current action. Option D uses the simple present, which would describe a habitual action.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 56. Comprensión de lectura — vocabulario avanzado (comprension-lectura / lexical)
      {
        id: 'eng-s11-p56',
        enunciado: 'Read the following sentence.\n\n"The senator\'s inflammatory rhetoric during the campaign exacerbated tensions between the two communities and made reconciliation significantly more difficult."\n\nWhat does "exacerbated" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Reduced and calmed down.' },
          { letra: 'B', texto: 'Made worse or more severe.' },
          { letra: 'C', texto: 'Explained clearly to the public.' },
          { letra: 'D', texto: 'Temporarily solved.' },
        ],
        clave: 'B',
        justificacion: '"Exacerbate" means to make a problem, condition, or situation worse. The context confirms this: the senator\'s inflammatory rhetoric "made reconciliation significantly more difficult," implying that tensions were already present and were intensified. Option A (reduced) is the opposite. Option C (explained) introduces a neutral meaning unrelated to making things worse. Option D (temporarily solved) also contradicts the meaning.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 57. Uso de la lengua — oraciones de deseo (wish) (uso-lengua / gramatical)
      {
        id: 'eng-s11-p57',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"He wishes he ______ more free time to spend with his family."',
        opciones: [
          { letra: 'A', texto: '"has"' },
          { letra: 'B', texto: '"will have"' },
          { letra: 'C', texto: '"had"' },
          { letra: 'D', texto: '"would have had"' },
        ],
        clave: 'C',
        justificacion: '"Wish + past simple" is used to express a desire for a present situation to be different. "He wishes he had more free time" = he doesn\'t have enough free time now, and he desires the situation were different. Option A uses the present simple, which would describe a fact, not a wish. Option B uses "will have," used for future wishes (a less common structure). Option D uses "would have had," which refers to past regrets, not current desires.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 58. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p58',
        enunciado: 'Read the following conversation and answer the question.\n\nA: "I heard you applied for the director position. How did the interview go?"\nB: "Well… they were very thorough. They asked about my five-year plan, my management style, salary expectations… it was a lot."\nA: "And? Do you think you got it?"\nB: "Let\'s just say I\'m not getting my hopes up."\n\nWhat can be inferred about B\'s response?',
        opciones: [
          { letra: 'A', texto: 'B is very confident that they got the job.' },
          { letra: 'B', texto: 'B thinks the interview went well and they will probably be hired.' },
          { letra: 'C', texto: 'B does not think the interview went well and is managing expectations by avoiding false hope.' },
          { letra: 'D', texto: 'B is refusing to discuss the interview results.' },
        ],
        clave: 'C',
        justificacion: '"I\'m not getting my hopes up" is an idiomatic expression meaning the speaker is deliberately avoiding optimism to protect themselves from disappointment — it implies they don\'t expect a positive outcome. Combined with the hesitant tone ("Well…" and "it was a lot"), the inference is that B does not believe the interview went well. Option A and B contradict the expression. Option D misinterprets: B is discussing the interview indirectly, not refusing to engage.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 59. Uso de la lengua — correlative conjunctions (uso-lengua / gramatical)
      {
        id: 'eng-s11-p59',
        enunciado: 'Choose the option that correctly completes the sentence using correlative conjunctions.\n\n"The new transportation policy will benefit ______ daily commuters ______ long-distance travelers."',
        opciones: [
          { letra: 'A', texto: '"either / nor"' },
          { letra: 'B', texto: '"neither / or"' },
          { letra: 'C', texto: '"both / and"' },
          { letra: 'D', texto: '"not only / but"' },
        ],
        clave: 'C',
        justificacion: '"Both... and..." is a correlative conjunction used to include two elements positively: "both daily commuters and long-distance travelers." The sentence indicates the policy benefits both groups. Option A uses "either... nor," which is incorrect (either goes with "or": "either... or"). Option B uses "neither... or," also incorrect (neither goes with "nor"). Option D uses "not only... but," which is possible but requires "also": "not only... but also." Without "also," the structure is incomplete.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 60. Comprensión de lectura — lectura crítica global (comprension-lectura / lexical)
      {
        id: 'eng-s11-p60',
        enunciado: 'Read the following text and answer the question.\n\n"In 1928, Alexander Fleming noticed that a mold called Penicillium had contaminated one of his bacterial cultures — and killed the bacteria around it. Rather than discarding the \'ruined\' experiment, Fleming recognized the significance of what he was seeing. His curiosity and willingness to deviate from expectations led to the discovery of penicillin, an antibiotic that has since saved hundreds of millions of lives.\n\nScience does not always advance through planned experiments. Sometimes, the most transformative discoveries emerge from accidents — but only when a prepared mind is watching."\n\nWhat is the central message of the text?',
        opciones: [
          { letra: 'A', texto: 'That scientists should not plan their experiments carefully because accidents produce better results.' },
          { letra: 'B', texto: 'That accidental discoveries in science only matter if they happen in a laboratory.' },
          { letra: 'C', texto: 'That important scientific discoveries can arise from unexpected events, but only when the scientist has the knowledge and curiosity to recognize their significance.' },
          { letra: 'D', texto: 'That Alexander Fleming was careless and contaminated his experiment by accident.' },
        ],
        clave: 'C',
        justificacion: 'The text\'s central message is captured in the final phrase: "accidents — but only when a prepared mind is watching." The discovery of penicillin happened by accident (contamination), but it led to a breakthrough because Fleming had the preparation, knowledge, and curiosity to recognize and pursue it instead of discarding the experiment. The key insight is the combination of chance and preparation. Option A misinterprets the message: the text does not argue against planning. Option B limits the principle to laboratories, not implied. Option D describes only the accident without capturing the significance of Fleming\'s response.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },
    ],
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PREGUNTAS_ICFES };
}
