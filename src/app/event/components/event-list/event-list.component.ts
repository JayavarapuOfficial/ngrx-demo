import { Component, Input } from "@angular/core";
import { Attendee } from "../../../models/attendee";

@Component({
  selector: "app-event-list",
  standalone: false,

  templateUrl: "./event-list.component.html",
  styleUrl: "./event-list.component.scss",
})
export class EventListComponent {
  @Input()
  attendees: Attendee[] = [];
}
