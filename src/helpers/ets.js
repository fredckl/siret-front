import {
  always, compose, cond, equals, prop, propEq, startsWith, T
} from 'ramda';
import { dateToFr } from './date';

export const formatText = (text) => (value) => `${text} ${value}`

export const getStartAt = cond([
  [propEq('etsClosed', false), compose(formatText('Actif au'), dateToFr, prop('etsCreatedAt'))],
  [T, always('')]
])

export const getEndAt = cond([
  [propEq('etsClosed', true), compose(formatText('Fermé le'), dateToFr, prop('etsClosedAt'))],
  [T, always('')]
])

export const isIndiv = compose(startsWith('1'), prop('legalCategory'))

export const getGender = compose(cond([
  [equals('m'), always('Monsieur')],
  [equals('f'), always('Madame')],
  [T, always('')]
]), prop('gender'))

export const getName = ets => {
  if (isIndiv(ets)) {
    return `${getGender(ets)} ${ets.firstname} ${ets.name || ets.lastname}`
  }

  return ets.name;
}