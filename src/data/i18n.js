// i18n.js — Textos de interfaz (internacionalización)
const I18N = {
  es: {
    app: {
      title: 'Articulador Curricular',
      subtitle: 'Asistente Pedagógico para el Docente Colombiano',
      badge: 'Continuo Cognitivo',
      badgeSub: 'Formación y Evaluación'
    },
    nav: {
      home: 'Inicio',
      search: 'Búsqueda',
      settings: 'Configuración',
      simulacro: 'Simulacro ICFES',
      cobertura: 'Cobertura',
      plans: 'Planes de Periodo'
    },
    areas: {
      matematicas: 'Matemáticas',
      lenguaje: 'Lenguaje',
      naturales: 'Ciencias Naturales',
      sociales: 'Ciencias Sociales',
      ingles: 'Inglés'
    },
    plan: {
      periodo: 'Periodo',
      grado: 'Grado',
      estandares: 'Estándares EBC',
      dba: 'DBA',
      competencias: 'Competencias ICFES',
      evaluacion: 'Evaluación',
      recursos: 'Recursos',
      exportPdf: 'Imprimir / PDF',
      exportJson: 'JSON',
      exportInst: 'Formato Institucional',
      noDisponible: 'Plan no disponible',
      disponibleGrados: 'Los planes de periodo detallados están disponibles para {area} grados 6° a 11°.'
    },
    simulacro: {
      titulo: 'Simulacro ICFES',
      iniciar: 'Iniciar',
      siguiente: 'Siguiente',
      anterior: 'Anterior',
      finalizar: 'Finalizar',
      abandonar: 'Abandonar',
      resultados: 'Resultados',
      correctas: 'Correctas',
      incorrectas: 'Incorrectas',
      sinResponder: 'Sin responder',
      tiempo: 'Tiempo',
      tiempoLimite: 'Tiempo límite',
      sinLimite: 'Sin límite',
      minutos: 'minutos',
      hora: 'hora',
      horas: 'horas'
    },
    config: {
      titulo: 'Configuración',
      institucion: 'Institución Educativa',
      nombre: 'Nombre',
      municipio: 'Municipio',
      departamento: 'Departamento',
      docente: 'Docente',
      tema: 'Tema',
      auto: 'Automático',
      claro: 'Claro',
      oscuro: 'Oscuro',
      guardar: 'Guardar'
    },
    common: {
      volver: 'Volver al inicio',
      buscar: 'Buscar...',
      verMas: 'Ver más',
      cerrar: 'Cerrar',
      exportar: 'Exportar'
    }
  }
};

// Helper: obtener texto con idioma actual
function t(key) {
  const lang = 'es'; // Por ahora fijo, en futuro: Storage.getPreferencias().idioma || 'es'
  const keys = key.split('.');
  let val = I18N[lang];
  for (const k of keys) {
    if (!val || typeof val !== 'object') return key;
    val = val[k];
  }
  return val || key;
}
