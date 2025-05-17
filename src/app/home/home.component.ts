import { Component } from "@angular/core";
import { ContactComponent } from "../contact/contact.component";
import { GlobalsService } from "../globals.service";

@Component({
  selector: "app-home",
  imports: [ContactComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(public globals: GlobalsService) {}

  public projectItems = [
    {
      name: "Systolic",
      text: "Systolic is an Android app for tracking your blood pressure and medication usage. You can set measurement reminders, make backups of your measurements, and export your history as a PDF file for easy sharing.",
      url: "/systolic",
      img: "https://cdn.pixabay.com/photo/2018/07/08/19/59/blood-pressure-3524615_1280.jpg",
      tags: ["APP DEVELOPMENT", "CRUD", "UI / UX"],
    },
    {
      name: "Portfolio website",
      text: "My personal portfolio website that you are currently viewing. Built using Angular and Tailwind CSS.",
      url: "/mauble.github.io",
      img: "https://cdn.pixabay.com/photo/2021/03/18/19/56/keyboard-6105750_1280.jpg",
      tags: ["WEB DEVELOPMENT", "REST", "UI / UX"],
    },
  ];

  public skillItems = [
    {
      name: "Backend development",
      text: "I am experienced with building web services and database infrastructure.",
    },
    {
      name: "Web development",
      text: "I love building sleek and responsive websites for all purposes.",
    },
    {
      name: "Smartphone apps",
      text: "I have app making experience utilizing several frameworks like Flutter and Jetpack Compose.",
    },
    {
      name: "Game design",
      text: "I have been passionate about game development ever since I was young.",
    },
  ];
}
