import { render } from '@testing-library/react';
import { SideBar } from '.';


describe('SideBar component', () => {
  const profileImageUrl = 'profile.png';
  const navigationItems = [
    { iconUrl: 'icon1.png' },
    { iconUrl: 'icon2.png' },
    { iconUrl: 'icon3.png' },
  ];

  it('renders with given props', () => {
    const { getByAltText } = render(
      <SideBar
        profileImageUrl={profileImageUrl}
        navigationItems={navigationItems}
      />
    );

    expect(getByAltText('Profile Image').getAttribute('src')).toBe(
      profileImageUrl
    );

    navigationItems.forEach((item, index) => {
      expect(getByAltText(`Navigation Icon ${index + 1}`).getAttribute('src'))
        .toBe(item.iconUrl);
    });
  });

  it('renders correct number of navigation items', () => {
    const { getAllByTestId } = render(
      <SideBar
        profileImageUrl={profileImageUrl}
        navigationItems={navigationItems}
      />
    );

    const navigationIcons = getAllByTestId('icon-navigation');
    expect(navigationIcons.length).toBe(navigationItems.length);
  });
});