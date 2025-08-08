import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(viewport: ViewportScroller) {
    viewport.setOffset([0, 150]);
  }
}
