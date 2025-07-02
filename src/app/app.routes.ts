import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { LegalNoticeComponent } from "./views/legal-notice/legal-notice.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";

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
