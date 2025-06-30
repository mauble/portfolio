import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "legal-notice",
    component: LegalNoticeComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
