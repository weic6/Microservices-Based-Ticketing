import { Subjects, Publisher, OrderCancelledEvent } from "@wchentickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
