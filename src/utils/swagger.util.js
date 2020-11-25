import m2s from 'mongoose-to-swagger';

export const buidlDocumentConfig = (model) => {
  const swaggerObject = m2s(model);
  return {
    definition: swaggerObject,
    idType: 'string'
  };
};
