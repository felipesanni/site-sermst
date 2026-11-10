/**
 * The CRM API accepts these semantic questionnaire keys and maps them to its
 * internal field IDs. Keep the keys aligned with the CRM's API documentation.
 */
const DIAGNOSTICO_CRM_FORM_ANSWER_KEYS: Array<keyof DiagnosticFormAnswerValues> = [
  'funcionarios_clt',
  'quant_funcionarios_clt',
  'necessita_contrato',
  'necessita_reuniao',
  'prestador_sst',
  'segmento',
  'data_reuniao',
]

export const DIAGNOSTICO_CRM_MEETING_STAGE_ID = 'teHUsURtaNw9zHEhAV7v'
export const DIAGNOSTICO_CRM_QUALIFICATION_STAGE_ID = 'TQ38dK5dhgGzBjaivpHR'
export const DIAGNOSTICO_CRM_SCHEDULING_STAGE_ID = 'wMHthU8qBYFeQwZyAr1n'

type DiagnosticFormAnswerValues = {
  funcionarios_clt?: string
  quant_funcionarios_clt?: string
  necessita_contrato?: string
  necessita_reuniao?: string
  prestador_sst?: string
  segmento?: string
  data_reuniao?: string
}

export function buildDiagnosticCrmFormAnswers(values: DiagnosticFormAnswerValues) {
  const answers: Record<string, string> = {}

  for (const key of DIAGNOSTICO_CRM_FORM_ANSWER_KEYS) {
    const value = values[key]
    if (typeof value === 'string' && value.trim()) {
      answers[key] = value.trim()
    }
  }

  return answers
}
