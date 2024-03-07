import {  SideBarProps } from "./SideBar.type";
import "./SideBar.scss";

export const SideBar = ({
  navigationItems,
  profileImageUrl
}: SideBarProps) => {
  return (
    <aside className="sidebar">
      <div className="containerLogo">
        <img src={'/imgs/logo/logo.svg'} alt="Logo" />
      </div>
      <div className="containerProfile">
        <img src={profileImageUrl} alt="Profile Image" className="profile-image" />
      </div>
      <nav>
        <ul>
          {navigationItems.map((navItem, index ) => {
            return (
              <li key={index} className={(navItem.active) ? 'active' : ''}>
                <img src={navItem.iconUrl} alt={`Navigation Icon ${index + 1}`} data-testid="icon-navigation" />
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
