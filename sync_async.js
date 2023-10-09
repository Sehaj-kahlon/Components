console.log("hey"); //sync
setTimeout(function () { //async
  console.log("hey2");
}, 2000);
console.log("hey3"); //sync
