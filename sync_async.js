console.log("hey"); //sync
setTimeout(function () {
  //async
  console.log("hey2");
}, 2000);
console.log("hey3"); //sync

//promises 
var ans = new Promise((res, rej) => {
  if (true) {
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
