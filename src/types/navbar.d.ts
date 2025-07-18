namespace navbar {
  export interface NavbarItem {
    label: string;
    icon?: string;
    link?: string;
    active?: boolean;
  }

  export interface Navbar {
    items: NavbarItem[];
    brand?: string;
    brandLink?: string;
  }
}
