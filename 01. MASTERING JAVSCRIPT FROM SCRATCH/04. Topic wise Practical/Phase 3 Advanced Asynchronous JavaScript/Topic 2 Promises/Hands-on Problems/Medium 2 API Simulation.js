// const { resolve } = require("url");

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Rajat" }), 1000);
  });
}

function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Shirt", "Shoes", "Watch"]), 1000);
  });
}

getUser()
  .then(user => {
    console.log("User:", user.name);
    return getOrders(user.id);
  })
  .then(orders => console.log("Orders:", orders));
