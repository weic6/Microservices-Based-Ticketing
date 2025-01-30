import { Publisher, OrderCreatedEvent, Subjects } from "@wchentickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
