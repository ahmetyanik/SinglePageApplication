let dhlResolve, dhlReject;

function promiseHandler(resolve, reject) {
  dhlResolve = resolve;
  dhlReject = reject;
}

setTimeout(() => {
  dhlResolve("Package received");
}, 1000);

function callCenter() {
  dhlReject("Package canceled by sender");
}

function giveToDriver() {
  const deliveryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return deliveryPromise;
}

const submitToDHL = new Promise(promiseHandler);

submitToDHL
  .then((result) => {
    console.log("Dear recipient", result);
  })
  .then(() => {
    giveToDriver().then(() => {
      console.log("package delivered");
    });
  })
  .catch((err) => console.log("Dear recipient", err));
