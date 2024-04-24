function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject(new Error('Please provide first name and last name'));
    }
    resolve({
      firstName,
      lastName,
    });
  });
}

export default signUpUser;
