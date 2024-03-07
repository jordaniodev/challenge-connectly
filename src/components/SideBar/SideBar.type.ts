export interface SideBarProps {
  profileImageUrl: string;
  navigationItems: NavigationItems[];
}

export interface NavigationItems {
  iconUrl: string;
  active?: boolean;
}
