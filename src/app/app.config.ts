import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

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
