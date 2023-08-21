import Nav from './Nav';

const Header = () => {
    return ( 
        <header className="d-flex align-items-center">
            <div className="container d-flex justify-content-between my-4 align-items-center">
                <div className="logo fw-bold">
                    YOUR LOGO HERE
                </div>
                <Nav />
            </div>
        </header>
     );
}
 
export default Header;