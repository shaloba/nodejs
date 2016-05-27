/**
 * Created by shaloba on 27/05/2016.
 */
function placeOrder(orderNumber){
    console.log('customer order: ', orderNumber);
    cookAndDeliverFood(function(){
        console.log('deliverd food ', orderNumber);
    });
}

function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);

}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);