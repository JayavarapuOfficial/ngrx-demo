import { Component } from "@angular/core";
import { Attendee } from "../../../models/attendee";
import { EventService } from "../../services/event.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-event",
  standalone: false,

  templateUrl: "./event.component.html",
  styleUrl: "./event.component.scss",
})
export class EventComponent {
  attendees$: Observable<Attendee[]>;
  constructor(private eventService: EventService) {
    // this.eventService
    //   .getAttendees()
    //   .subscribe((data) => (this.attendees = data));
    this.attendees$ = this.eventService.getAttendees();
  }
  addAttendee(attnedee: Attendee) {
    console.log(attnedee);
    //this.attendees = [...this.attendees, attnedee];
  }
}
