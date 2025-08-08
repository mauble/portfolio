import { Injectable } from "@angular/core";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Injectable({
  providedIn: "root",
})
export class GlobalsService {
  public currentYear = new Date().getFullYear();
  public githubUrl = "https://github.com/mauble";
  public emailAddress = "mauble@proton.me";

  faBars = faBars;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
}
