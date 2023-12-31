import "./App.css";
import Header from "./components/Header/Header";
import Mainsect from "./components/Mainsect/Mainsect";
import LowerSect from "./components/LowerSect/LowerSect";
import LowerSect2 from "./components/LowerSect/LowerSect2";
import TV from "./components/Images/tv.png";
import Mobile from "./components/Images/mobile.jpg";
import Devices from "./components/Images/devices.png";
import Kids from "./components/Images/kids.png";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

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
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      />
      <LowerSect
        headingText="Download your shows to watch offline"
        pText="Save your favorites easily and always have something to watch."
        src={Mobile}
        style={{
          flexDirection: "row-reverse",
        }}
      />
      <LowerSect2
        headingText="Watch everywhere"
        pText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        src={Devices}
        video2="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />
      <LowerSect
        headingText="Create profiles for kids"
        pText="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        src={Kids}
        style={{
          flexDirection: "row-reverse",
        }}
      />
      <FAQ />
      <Footer />
    </>
  );
}
export default App;
