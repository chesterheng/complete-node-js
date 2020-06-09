setTimeout(() => console.log('Two seconds are up'), 2000)

const geocode = (address, callback) =>
  setTimeout(() => callback({ latitude: 0, longitude: 0 }), 2000)
geocode('Philadelphia', data => console.log(data))

const add = (a, b, callback) => setTimeout(() => callback(a + b), 2000)
add(1, 4, sum => console.log(sum)) 