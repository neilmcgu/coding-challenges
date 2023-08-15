// make three promises that run asynchronously.
// make a fourth promise that waits for those to finish, and console logs a statement

async function waitThree() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise one complete");
    }, 1000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise one complete");
    }, 2000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise one complete");
    }, 3000);
  });
  console.log("promises have been made");
  const waitAll = await Promise.all([promise1, promise2, promise3]);
  console.log("promises have been kept");
}

waitThree();
