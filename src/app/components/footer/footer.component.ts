import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GlobalsService } from "../../services/globals/globals.service";

@Component({
  selector: "app-footer",
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor(public globals: GlobalsService) {}
}
