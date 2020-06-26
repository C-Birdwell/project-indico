import {
  CHARACTER_CREATE,
  CHARACTER_DELETE,
  CHARACTER_HEALTH_ADD,
  CHARACTER_HEALTH_SUB,
  CHARACTER_HEALTH_SET,
  CHARACTER_ATTACK_ADD,
  CHARACTER_ATTACK_SUB,
  CHARACTER_DEFENSE_ADD,
  CHARACTER_DEFENSE_SUB,
} from '../typeDefs'

export const _characterCreate = () => ({
  type: CHARACTER_CREATE,
})

export const _characterDelete = payload => ({
  type: CHARACTER_DELETE,
  payload,
})

export const _characterHealthAdd = payload => ({
  type: CHARACTER_HEALTH_ADD,
  payload,
})

export const _characterHealthSub = payload => ({
  type: CHARACTER_HEALTH_SUB,
  payload,
})

export const _characterHealthSet = () => ({
  type: CHARACTER_HEALTH_SET,
})

export const _characterAttackAdd = payload => ({
  type: CHARACTER_ATTACK_ADD,
  payload,
})

export const _characterAttackSub = payload => ({
  type: CHARACTER_ATTACK_SUB,
  payload,
})

export const _characterDefenseAdd = payload => ({
  type: CHARACTER_DEFENSE_ADD,
  payload,
})

export const _characterDefenseSub = payload => ({
  type: CHARACTER_DEFENSE_SUB,
  payload,
})
