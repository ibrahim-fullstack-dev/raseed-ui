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
  ChevronDown,
  Users,
  Settings,
  Landmark,
  CreditCard,
  Truck,
  Tags,
  ShoppingCart,
  MonitorSmartphone,
  Boxes,
  PackageX,
  Factory,
  Wallet,
  Banknote,
  ChartPie,
  BookOpen,
  Percent,
  UserCheck,
  Layers,
  Repeat,
  ChartBar,
  ChartNoAxesColumn,
  ChartColumnBig,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      LucideAngularModule.pick({
        LayoutDashboard,
        ChartColumnBig,
        FileText,
        BookOpen,
        ChartBar,
        Repeat,
        ChartNoAxesColumn,
        UserCheck,
        Layers,
        Wallet,
        Percent,
        ChartPie,
        Factory,
        Banknote,
        Users,
        ChevronDown,
        Settings,
        Landmark,
        Truck,
        CreditCard,
        Tags,
        ShoppingCart,
        MonitorSmartphone,
        Boxes,
        PackageX,
      }),
    ),
  ],
};
