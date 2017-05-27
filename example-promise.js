function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Mountain View', function(err, temp){
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise(location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Mountain View').then(function (temperature) {
  console.log('promise success', temperature);
}, function(err){
  console.log('promise error', err);
})

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
    reject('a and/or b is not a number');
    }
  });
}

addPromise(2, 3).then(function(sum){
  console.log('sucess', sum);
}, function(err){
  console.log('error', err);
})

addPromise('Michael', 26).then(function(sum){
  console.log('sucess', sum);
}, function(err){
  console.log('error', err);
})
