const { isEmpty, anyPass, isNil, complement } = require("ramda");

export const isNilOrEmpty = anyPass([isNil, isEmpty]);
export const isNotNilOrEmpty = complement(isNilOrEmpty);

