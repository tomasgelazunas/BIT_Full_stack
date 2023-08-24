import "./App.css";
import Header from "./components/Header/Header";
import Mainsect from "./components/Mainsect/Mainsect";
import LowerSect from "./components/LowerSect/LowerSect";
import TV from "./components/Images/tv.png";
import Mobile from "./components/Images/mobile.jpg";
import Devices from "./components/Images/devices.png";
import Kids from "./components/Images/kids.png";

function App() {
  return (
    <>
      <div className="mainSection">
        <Header />
        <Mainsect />
      </div>
      <LowerSect
        headingText="Enjoy on your TV"
        pText="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        src={TV}
      />
      <LowerSect
        headingText="Download your shows to watch offline"
        pText="Save your favorites easily and always have something to watch."
        src={Mobile}
        style={{
          flexDirection: "row-reverse",
        }}
      />
      <LowerSect
        headingText="Watch everywhere"
        pText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        src={Devices}
      />
      <LowerSect
        headingText="Create profiles for kids"
        pText="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        src={Kids}
        style={{
          flexDirection: "row-reverse",
        }}
      />
    </>
  );
}

export default App;
