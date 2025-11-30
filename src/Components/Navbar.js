import HamburgerMenu from "./HamburgerMenu";

export default function Navbar(){
    return <div className="navbar">
        <div>LOGO</div>
        <div className="nav_menu">
            <a className="menu-item" href="#">Home</a>
            <a className="menu-item" href="#">My Story</a>
            <a className="menu-item" href="#">Meditation Practice</a>
            <a className="menu-item" href="#">Healing Request</a>
            <a className="menu-item" href="#">Contact Us</a>
        </div>
        <div className="nav-menu-xs">
            <HamburgerMenu/>
        </div>
    </div>
}