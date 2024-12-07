// Write a function that uses Promises to fetch two APIs sequentially. Log the combined result.

// Input: Mock APIs returning JSON data after delays.
// Expected Output: Combined JSON from both APIs.

let app = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch("api").then((response) => response.json());
  }, 1000);
});

app.then(() => {
  setTimeout(() => {
    fetch("api2").then((response) => response.json());
  }, 2000);
});
