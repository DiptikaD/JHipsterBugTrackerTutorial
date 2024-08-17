import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '200d148e-f4b4-4c0e-91da-7190a56a84a0',
};

export const sampleWithPartialData: IAuthority = {
  name: '51332899-d56a-401e-964e-4c27dce7b0fb',
};

export const sampleWithFullData: IAuthority = {
  name: '90ef05e5-4d3c-42be-bcba-3bcfcc2f450a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
