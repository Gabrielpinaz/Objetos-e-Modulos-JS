export function shipment(order){
    if(order.basic < 100) {
        return shipment = 20.0;
    } else if(order.basic < 200) {
        return shipment = 12.0;
    } else {
        return shipment = 0;
    }
}