let attempts = 0

function submitToDHL(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id);
    }, 2000);
  })
}

function giveToDriver(id) {
  const deliveryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      
        resolve(id)
    }, 2000)
  })

  return deliveryPromise
}

async function registerPackage(id) {
  const receivedID = await submitToDHL(id)
  console.log('Das Paket wurde abgegeben', receivedID)
  const deliveredID = await giveToDriver(id)
  console.log('Das Paket wurde zugestellt', deliveredID)
}

registerPackage(123)

registerPackage(345)