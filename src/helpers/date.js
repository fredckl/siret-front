import moment from 'moment';

export const dateToFr = (date) => {
  const momentDate = moment(date);
  if (momentDate.isValid()) {
    return momentDate.format('DD/MM/YYYY')
  }
  return '';
}