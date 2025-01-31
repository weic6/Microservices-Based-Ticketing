import { Subjects, Publisher, PaymentCreatedEvent } from "@wchentickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
