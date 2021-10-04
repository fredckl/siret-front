import { dateToFr } from './date';
import { prop, when, find, compose, always, ifElse, equals, startsWith, cond, T } from 'ramda';
import { isNotNilOrEmpty, isNilOrEmpty } from './ramda-ad';

export const formatText = (text) => (value) => `${text} ${value}`

export const getStartAt = compose(
  when(isNotNilOrEmpty, compose(formatText('Actif au'), dateToFr, prop('startDate'))),
  find(compose(isNilOrEmpty, prop('endDate'))),
  prop('periods')
)

export const getEndAt = compose(
  ifElse(
    isNilOrEmpty,
    always('Inactif'),
    compose(formatText('Inactif au'), dateToFr)
  ),
  prop('etsUpdatedAt'),
)

export const isIndiv = compose(startsWith('1'), prop('legalCategory'))

export const getGender = compose(cond([
  [equals('m'), always('Monsieur')],
  [equals('f'), always('Madame')],
  [T, always('')]
]), prop('gender'))

export const getName = ets => {
  if (isIndiv(ets)) {
    return `${getGender(ets)} ${ets.firstname} ${ets.lastname}`
  }

  return ets.name;
}