import type { Question } from '@/types/quiz'

// ============================================================
// EDITA AQUÍ las preguntas para personalizar el quiz
// - subject: 'marcos' | 'victor' | 'conjunta'
// - type: 'single-choice' → options + correctAnswer (índice 0-based)
// - type: 'open'
//     · Con correctAnswer: puntúa (normalizado: sin mayúsculas/acentos/espacios)
//     · Sin correctAnswer: reflexión libre, aparece en resultados
// ============================================================
export const QUESTIONS: Question[] = [
  // ── MARCOS ────────────────────────────────────────────────
  {
    id: 'm1',
    subject: 'marcos',
    type: 'single-choice',
    text: '¿En qué ciudad nació Marcos?',
    options: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
    correctAnswer: 0, // ← Cambia al índice correcto
  },
  {
    id: 'm2',
    subject: 'marcos',
    type: 'single-choice',
    text: '¿Cuál es la comida favorita de Marcos?',
    options: ['Pizza', 'Sushi', 'Pasta', 'Tacos'],
    correctAnswer: 1, // ← Cambia al índice correcto
  },
  {
    id: 'm3',
    subject: 'marcos',
    type: 'open',
    text: '¿Cuál crees que es la mayor virtud de Marcos?',
    placeholder: 'Escribe lo que te venga al corazón...',
    // Sin correctAnswer → reflexión libre
  },

  // ── VÍCTOR ────────────────────────────────────────────────
  {
    id: 'v1',
    subject: 'victor',
    type: 'single-choice',
    text: '¿Cuándo cumple los años Víctor?',
    options: ['5 de Junio', '6 de Junio', '9 de Junio', 'Ninguna de las anteriores'],
    correctAnswer: 3,
  },
  {
    id: 'v2',
    subject: 'victor',
    type: 'open',
    text: '¿Cuál es el segundo nombre de Víctor?',
    placeholder: 'Escribe su segundo nombre...',
    correctAnswer: ['ninguno', 'no tiene', ''],
  },
  {
    id: 'v3',
    subject: 'victor',
    type: 'single-choice',
    text: '¿Cuántos hermanos tiene Víctor?',
    options: ['1', '2', '3', 'Es hijo único'],
    correctAnswer: 0,
  },
  {
    id: 'v4',
    subject: 'victor',
    type: 'open',
    text: 'A Víctor se le conoce como Ferro, pero ¿qué otro apodo ha tenido?',
    placeholder: 'Escribe el apodo...',
    correctAnswer: 'lupi',
  },
  {
    id: 'v5',
    subject: 'victor',
    type: 'single-choice',
    text: '¿De dónde son los padres de Ferro?',
    options: ['Jienenses', 'Guatemaltecos', 'Salmantinos', 'Valencianos'],
    correctAnswer: 0,
  },

  // ── CONJUNTAS ─────────────────────────────────────────────
  {
    id: 'c1',
    subject: 'conjunta',
    type: 'single-choice',
    text: '¿Dónde se conocieron Marcos y Ferro?',
    options: ['Cuando Marcos le salvó la vida a Ferro', 'En el fútbol', 'Son amigos de la infancia', 'En bachiller'],
    correctAnswer: 3, // ← Cambia al índice correcto
  },
  {
    id: 'c2',
    subject: 'conjunta',
    type: 'single-choice',
    text: '¿Quién ha ido más veces al camping Arenal?',
    options: ['Ferro', 'Marcos', 'Las mismas veces', 'Todas son incorrectas'],
    correctAnswer: 2,
  },
  {
    id: 'c3',
    subject: 'conjunta',
    type: 'single-choice',
    text: '¿Qué famoso mote le pusieron Ferro y Marcos a Keko?',
    options: ['Filemón', 'El tocaprimas', 'Las dos son correctas', 'Ninguna es correcta'],
    correctAnswer: 2,
  },
]

export const BIRTHDAY_PERSON_NAME = 'los cumpleañeros'
