type CurrentLocation = 'home' | 'admin';

export interface Navigation {
  name: string;
  to: string;
  icon: string;
}

export function getNavigation(currentLocation: CurrentLocation): Record<string, Navigation> | [] {
  switch (currentLocation) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: 'pi-home',
        },
        projects: {
          name: 'Projects',
          to: '/projects',
          icon: 'pi-briefcase',
        },
        about: {
          name: 'About',
          to: '/about',
          icon: 'pi-info-circle',
        },
        contact: {
          name: 'Contact',
          to: '/contact',
          icon: 'pi-comment',
        },
      };
    default:
      return [];
  }
}
