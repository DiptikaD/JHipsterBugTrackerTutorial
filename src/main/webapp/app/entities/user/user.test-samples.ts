import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10398,
  login: '7DI!@ycfd\\p4hZp4\\Pe80g\\PH508i\\.t6H8f',
};

export const sampleWithPartialData: IUser = {
  id: 18874,
  login: '`J@r\\UXjz',
};

export const sampleWithFullData: IUser = {
  id: 1867,
  login: 'oHlxU-',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
