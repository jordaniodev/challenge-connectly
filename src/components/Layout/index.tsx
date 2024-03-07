import { Header } from "../Header";
import { LayoutProps } from "./Layout.type";
import "./Layout.scss";
import { SideBar } from "../SideBar";
import { NavigationItems } from "../SideBar/SideBar.type";
export const Layout = ({ children, pageTitle }: LayoutProps) => {
  const navigationItems: NavigationItems[] = [
    {
      iconUrl: '/imgs/icons/box.svg',
    },
    {
      iconUrl: '/imgs/icons/megaphone.svg',
    },
    {
      iconUrl: '/imgs/icons/message.svg',
      active: true
    },
  ];
  return (
    <>
      <Header title={pageTitle} />
      <SideBar profileImageUrl="/imgs/profile.jpeg" navigationItems={navigationItems} />
      <main className="mainPage">{children}</main>
    </>
  );
};
