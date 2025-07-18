
const NavBar = () => {
    const Menus:Array<navbar.NavbarItem> = [
        { label: 'Home', link: '/', icon: 'home', active: true },
        { label: 'About', link: '/about', icon: 'info' },
        { label: 'Contact', link: '/contact', icon: 'phone' }
    ];
  return (
    <nav>
      <h1>NavBar</h1>
      <ul className="bg-primary">
        {Menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.link}>
              {menu.icon && <i className={`icon-${menu.icon}`} />}
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar