import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  uploadPhoto()
    .then()
    .catch(() => console.log('Signup system offline'));
  createUser()
    .then((user) => {
      console.log(`${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
