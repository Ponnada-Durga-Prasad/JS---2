// function fetchUser(callback) {
//   setTimeout(() => {
//     const user = null; // Should fetch a valid user object
//     callback(user.name); // Bug: Cannot read property 'name'
//   }, 1000);
// }

// fetchUser((name) => console.log(name));

function fetchUser(callback) {
  setTimeout(() => {
    const user = {
      name: "Durga Prasad",
    };
    callback(user.name);
  }, 1000);
}

function cb(name) {
  console.log(name);
}
fetchUser(cb);
