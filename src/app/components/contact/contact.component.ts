import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { GlobalsService } from "../../services/globals/globals.service";

@Component({
  selector: "app-contact",
  imports: [FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  constructor(public readonly globals: GlobalsService) {}

  form = {
    email: "",
    title: "",
    message: "",
  };

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      alert(
        `Email: ${this.form.email}\nTitle: ${this.form.title}\nMessage: ${this.form.message}`,
      );
      contactForm.resetForm();
      this.form = { email: "", title: "", message: "" };
    }
  }
}
