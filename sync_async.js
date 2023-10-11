console.log("hey"); //sync
setTimeout(function () {
  //async
  console.log("hey2");
}, 2000);
console.log("hey3"); //sync

//promises
var ans = new Promise((res, rej) => {
  if (false) {
    return res();
  } else {
    return rej();
  }
});

ans
  .then(function () {
    console.log("resolved");
  })
  .catch(function () {
    console.log("reject");
  });

//user will ask for a number between 0 and 9 if the number is below 5 then resolve else reject
var ans = new Promise((res, rej) => {
    var a = Math.floor(Math.random()*10);
  if (a >= 0 && a <= 5) {
    return res();
  } else {
    return rej(a);  
  }
});
ans
  .then(function () {
    console.log("OKAY! number is good ");
  })
  .catch(function () {
    console.log("number is greater than 5");
  });

//nested promises, one promise called inside other

var ans = new Promise((res, rej) => {
    
})
