// Deliver paper to three different houses in three different intervals
function houseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paper delivered to house one!");
    }, 1000);
  });
}

function houseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paper delivered to house two!");
    }, 3000);
  });
}

function houseThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paper delivered to house three!");
    }, 2000);
  });
}

async function main() {
  const awaitHouseOne = await houseOne();
  console.log(awaitHouseOne);

  const awaitHouseTwo = await houseTwo();
  console.log(awaitHouseTwo);

  const awaitHouseThree = await houseThree();
  console.log(awaitHouseThree);
}

main();
