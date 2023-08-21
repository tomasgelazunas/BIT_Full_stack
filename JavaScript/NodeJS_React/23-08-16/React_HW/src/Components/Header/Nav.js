const Nav = () => {
    return (
        <nav className="d-flex align-items-center">
            <ul className="d-flex align-items-center">
                <li className="active">
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#aboutus">About</a>
                </li>
                <li>
                    <a href="#services">Service</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;