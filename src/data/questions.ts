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
    text: '¿En qué ciudad nació Víctor?',
    options: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
    correctAnswer: 2, // ← Cambia al índice correcto
  },
  {
    id: 'v2',
    subject: 'victor',
    type: 'single-choice',
    text: '¿Cuál es la comida favorita de Víctor?',
    options: ['Pizza', 'Sushi', 'Pasta', 'Tacos'],
    correctAnswer: 3, // ← Cambia al índice correcto
  },
  {
    id: 'v3',
    subject: 'victor',
    type: 'open',
    text: '¿Cuál crees que es la mayor virtud de Víctor?',
    placeholder: 'Escribe lo que te venga al corazón...',
    // Sin correctAnswer → reflexión libre
  },

  // ── CONJUNTAS ─────────────────────────────────────────────
  {
    id: 'c1',
    subject: 'conjunta',
    type: 'single-choice',
    text: '¿Dónde se conocieron Marcos y Víctor?',
    options: ['En el trabajo', 'En la universidad', 'De toda la vida', 'Por amigos en común'],
    correctAnswer: 1, // ← Cambia al índice correcto
  },
  {
    id: 'c2',
    subject: 'conjunta',
    type: 'open',
    text: '¿Qué les desearías en este cumpleaños?',
    placeholder: 'Un deseo, un mensaje, unas palabras...',
    // Sin correctAnswer → reflexión libre
  },
]

export const BIRTHDAY_PERSON_NAME = 'los cumpleañeros'
