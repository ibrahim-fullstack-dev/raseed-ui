import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import {
  LucideAngularModule,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  CreditCard,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      LucideAngularModule.pick({
        LayoutDashboard,
        FileText,
        Users,
        Settings,
        CreditCard,
      }),
    ),
  ],
};
