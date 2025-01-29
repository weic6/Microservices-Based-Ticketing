import { Publisher, Subjects, TicketUpdatedEvent } from "@wchentickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
