import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GlobalsService } from "../../globals.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-footer",
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor(public globals: GlobalsService) {}
}
