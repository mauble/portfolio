import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { GlobalsService } from "../../services/globals/globals.service";
import { MessageService } from "../../services/message/message.service";
import { Message } from "../../models/message/message";

@Component({
  selector: "app-contact",
  imports: [FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  constructor(
    public readonly globals: GlobalsService,
    private messageService: MessageService,
  ) {}

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isFormValid(contactForm: NgForm): boolean {
    return this.isEmailValid(this.msg.email) && contactForm.valid!;
  }

  defaultMsg(): Message {
    return {
      id: crypto.randomUUID(),
      email: "",
      title: "",
      message: "",
    };
  }

  msg: Message = this.defaultMsg();

  onSubmit(contactForm: NgForm) {
    if (this.isFormValid(contactForm)) {
      this.messageService.save(this.msg).subscribe({
        next: () => {
          alert(
            "Message sent!\n" +
              `ID: ${this.msg.id}\nE-Mail: ${this.msg.email}\nTitle: ${this.msg.title}\nMessage: ${this.msg.message}`,
          );
          contactForm.resetForm();
          this.msg = this.defaultMsg();
        },
        error: () => {
          alert("Failed to send message.");
        },
      });
    } else if (!contactForm.valid) {
      alert("Please fill out all required fields.");
    } else if (!this.isEmailValid(this.msg.email)) {
      alert("Please enter a valid email address.");
    }
  }
}
