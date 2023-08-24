import logo from "../Images/logo.png";
import Button from "../Button";
import Select from "./SelectLanguage";

const Header = () => {
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center pt-4">
        <img src={logo} alt="" />
        <div className="buttons d-flex gap-4">
          <Select defaultValue="selected" />
          <div className="button">
            <Button
              title="Sign In"
              className="d-inline"
              style={{
                backgroundColor: "red",
                color: "white",
                fontSize: "16px",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
