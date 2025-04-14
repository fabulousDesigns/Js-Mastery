// 🧩 Callback Hell Challenge: Refactor This Monster
// Here’s your callback mess (Pyramid of Doom style):
fetchUser(1, function (user) {
  fetchOrders(user.id, function (orders) {
    fetchOrderDetails(orders[0].id, function (details) {
      sendConfirmation(details.id, function (response) {
        console.log("Confirmation sent:", response);
      });
    });
  });
});
/**
 * 🎯 Your Mission:
Refactor this code to make it cleaner and easier to read using Promises.
You can assume these functions return Promises:
fetchUser(id)
fetchOrders(userId)
fetchOrderDetails(orderId)
sendConfirmation(detailId)
🧠 Hint:
Use .then() chaining.
 */

fetchUser(1)
  .then((user) => {
    console.log("Found user:", user);
    return fetchOrders(user.id);
  })
  .then((orders) => {
    console.log(`User has ${orders.length} orders`);
    return fetchOrderDetails(orders[0].id);
  })
  .then((details) => {
    console.log("First order details:", details);
    return sendConfirmation(details.id);
  })
  .then((response) => {
    console.log("Confirmation sent:", response);
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });
