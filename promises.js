var cart = ["shoes", "bulb", "fan"]



// --------------------------------Consuming the promise---------------------------------------------


createOrder(cart)
    .then((orderId)=>{
        console.log(orderId);
        const txnID = payMent(orderId);
        return  {orderID: orderId, txnID : txnID};
    })
    .then((result)=>{
        console.log("Order ID"+ result.orderID)
        return result.txnID.then((txnID)=>{
            console.log("TXN ID" + txnID)
            const summary = showSummary(result.orderID, txnID);
            return summary
        });
        ;
    })
    .then((summary)=>{
        console.log(summary);
    })
    .catch((err)=>{
        console.error(err);
    })













// ------------------------------------------------------Creating Promises ------------------------------------------------------

function validate (cart) {
    return true;
}
function createOrder (cart) {

    const pr = new Promise((resolve, reject) => {
        if(!validate(cart)){
            const error = new Error("Cart Not Valid");
            reject(error);
        }
        const orderID = "1234"
        resolve(orderID);
    })
    return pr;
};

function payMent(orderID) {

    const pr = new Promise((resolve, reject) => {
        if(!validate(orderID)){
            const error = new Error("Not valid Order ID")
            reject(error);
        }
        const txnID = "23423423asdojis";
        resolve(txnID);
    })

    return pr;
};

function showSummary (orderID , txnID) {

    const pr = new Promise((resolve, reject) => {
        if(!validate(orderID)){
            const error = new Error("Not valid Order ID")
            reject(error);
        }
        const summary = "Order Placed";
        resolve(summary);
        resolve(orderID);
    });
    return pr;
};




