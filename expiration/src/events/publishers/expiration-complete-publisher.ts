import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@wchentickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
