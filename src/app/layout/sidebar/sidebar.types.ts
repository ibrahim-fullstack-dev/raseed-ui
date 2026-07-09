export interface SidebarSubItem {
  label: string;
  path: string[];
  icon?: string;
}

export interface SidebarItem {
  label: string;
  icon: string;
  path?: string[];
  children?: SidebarSubItem[];
}
