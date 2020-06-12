const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve([7, 4, 1])
      // reject('Things went wrong!')
  }, 2000)
})

doWorkPromise.then(result => {
  console.log('Success!', result)
}).catch((error) => {
  console.log('Error!', error)
})

//
//                               fulfilled
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected
//

const add = (a, b) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 2000)
  })
}

add(1, 1)
  .then(sum => add(sum, 4))
  .then((sum2) => console.log(sum2))
  .catch(error => console.log(error))