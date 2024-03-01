cart = ["chair", "laptop", "book"];

// Below is Promise HELL

// const promise = createOrder(cart)
//   .then((orderId) => {
//     console.log("orderID" + orderId);
//     proceedPay(orderId)
//       .then((txn_id) => {
//         console.log("TXN ID" + txn_id);
//         showSummary(txn_id)
//           .then((summary) => {
//             console.log("Summary " + summary);
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// Optimised Promise - 3 then and 1 catch- this 1 catch will handle any error of then chain

const promise = createOrder(cart).then((orderID) => {
  console.log("Order ID " + orderID)
  return orderID
})

.then((orderID)=>{
  return proceedPay(orderID);
})

.then((txn_id)=>{
  console.log("Txn_ID"+ txn_id)
  return showSummary(txn_id)
})
.catch((err) => {
  
});





console.log(promise);

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not validated");
      reject(err);
    }
    const orderId = "12345"; // Got by making DB calls
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

const proceedPay = (orderId) => {
  const payPr = new Promise((resolve, reject) => {
    if (!validateCart(orderId)) {
      const err = new Error("OrderID is Wrong");
      reject(err);
    }
    const txn_id = "9874"; //Get by DB/ any payment gateway
    if (txn_id) {
      resolve(txn_id);
    }
  });
  return payPr;
};

const showSummary = (orderId, cart) => {
  const summaryPr = new Promise((resolve, reject) => {
    if (!validateCart(orderId) && !validateCart(cart)) {
      const err = new Error("Tey again for summary");
      reject(err);
    }
    const Summary = "Summary"; //Get by DB/ any payment gateway
    if (Summary) {
      resolve(Summary);
    }
  });
  return summaryPr;
};
