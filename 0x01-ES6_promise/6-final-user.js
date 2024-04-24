import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    signUpUser(firstName, lastName)
      .then((data) => {
        resolve([
          {
            status: 200,
            value: data,
          },
        ]);
      })
      .catch((error) => {
        reject(
          new Error([
            {
              status: 200,
              value: error,
            },
          ]),
        );
      });
    uploadPhoto(fileName)
      .then((data) => {
        resolve([
          {
            status: 200,
            value: data,
          },
        ]);
      })
      .catch((error) => {
        reject(
          new Error([
            {
              status: 200,
              value: error,
            },
          ]),
        );
      });
  });
}
