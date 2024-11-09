async function ToPromiseCallback(_function) {
  return (
    await new Promise(
      (resolve, reject) => {
        _function((user, err) => {
          if (err) {
            reject(err);
          }
          if (user) {
            resolve(user);
          } else {
            resolve(null);
          }
        });
      },
  )
);
}

export default ToPromiseCallback;