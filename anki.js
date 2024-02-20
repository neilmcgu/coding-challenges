function deliverOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("paper delivered to house one");
    }, 1000);
  });
}
function deliverTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("paper delivered to house two");
    }, 2000);
  });
}
function deliverThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("paper delivered to house three");
    }, 3000);
  });
}

async function main() {
  const awaitOne = await deliverOne();
  console.log(awaitOne);
  const awaitTwo = await deliverTwo();
  console.log(awaitTwo);
  const awaitThree = await deliverThree();
  console.log(awaitThree);
}

main();
