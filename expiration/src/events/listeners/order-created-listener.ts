import { Listener, OrderCreatedEvent, Subjects } from "@wchentickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    // Find the ticket the the order is reserving
    // Mark the ticket as being reserved by setting its orderId property
    // Save the ticket
    // ack the message
  }
}
