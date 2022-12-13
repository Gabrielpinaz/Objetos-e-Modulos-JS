import * as ShippingService from './shipping-service.js';

export function total(order) {
    const shipment = ShippingService.shipment(order);
    return order.basic - (order.basic * (order.discount / 100)) + shipment;
}