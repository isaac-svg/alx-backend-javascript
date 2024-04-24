import { createUser, uploadPhoto } from './utils';

export default function asyncUploadUser(firstName, lastName, fileName) {
  return Promise.all([createUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => ({ photo: data[1], user: data[0] }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
