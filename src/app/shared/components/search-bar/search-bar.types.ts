// src/app/shared/components/search-bar/search-bar.types.ts

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'text';

export interface SearchBarButton {
  key: string;
  label: string;
  icon?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
}
