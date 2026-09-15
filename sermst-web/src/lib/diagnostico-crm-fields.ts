/**
 * IDs atualmente configurados nas perguntas do funil de vendas do CRM.
 *
 * Esses IDs foram conferidos na configuração ativa do funil e precisam ser
 * usados em `formAnswers` para que os valores apareçam no Questionário.
 */
export const DIAGNOSTICO_CRM_FORM_ANSWER_IDS = {
  funcionarios_clt: 'new_1759509682081',
  quant_funcionarios_clt: 'new_1760131251192',
  necessita_contrato: 'new_1762202729539',
  necessita_reuniao: 'new_1764087960206',
  prestador_sst: 'new_1789428176289',
  segmento: 'new_1789428287294',
  data_reuniao: 'new_1764090755294',
} as const

export const DIAGNOSTICO_CRM_MEETING_STAGE_ID = 'teHUsURtaNw9zHEhAV7v'
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

  for (const key of Object.keys(DIAGNOSTICO_CRM_FORM_ANSWER_IDS) as Array<keyof DiagnosticFormAnswerValues>) {
    const value = values[key]
    if (typeof value === 'string' && value.trim()) {
      answers[DIAGNOSTICO_CRM_FORM_ANSWER_IDS[key]] = value.trim()
    }
  }

  return answers
}
