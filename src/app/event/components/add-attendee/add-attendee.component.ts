import { Component, EventEmitter, Output, output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Attendee } from "../../../models/attendee";

@Component({
  selector: "app-add-attendee",
  standalone: false,

  templateUrl: "./add-attendee.component.html",
  styleUrl: "./add-attendee.component.scss",
})
export class AddAttendeeComponent {
  addAttendeeForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
  });
  @Output()
  addAttendee = new EventEmitter<Attendee>();
  handleSubmitForm() {
    const attendeeObj: Attendee = {
      name: this.addAttendeeForm.value?.name ?? "",
      attending: true,
      guests: 0,
    };
    this.addAttendee.emit(attendeeObj);
  }
}
