import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { GlobalsService } from "./globals.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(public globals: GlobalsService) {}
}
