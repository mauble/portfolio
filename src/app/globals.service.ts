import { Injectable } from "@angular/core";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Injectable({
  providedIn: "root",
})
export class GlobalsService {
  public emailAddress = "mauble@proton.me";
  public githubUrl = "https://github.com/mauble";

  faBars = faBars;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
}
