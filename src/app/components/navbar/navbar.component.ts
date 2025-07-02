import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GlobalsService } from "../../services/globals/globals.service";

@Component({
  selector: "app-navbar",
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  constructor(public readonly globals: GlobalsService) {}

  public navbarItems = [
    { name: "About me", path: "/" },
    { name: "What I do", path: "/", hash: "what-i-do" },
    { name: "Projects", path: "/", hash: "projects" },
    { name: "Contact", path: "/", hash: "contact" },
  ];

  public isDropdownActive = signal(false);

  public toggleDropdown() {
    this.isDropdownActive.set(!this.isDropdownActive());
  }
}
