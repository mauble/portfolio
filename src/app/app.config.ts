import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import {
  ExtraOptions,
  provideRouter,
  withHashLocation,
  withRouterConfig,
} from "@angular/router";

import { routes } from "./app.routes";

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: "enabled",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation(), withRouterConfig(routerOptions)),
  ],
};
