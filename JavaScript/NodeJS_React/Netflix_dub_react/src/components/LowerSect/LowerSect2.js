const LowerSect = (props) => {
  return (
    <section className="FAQSect py-5">
      <div className="container d-flex" style={props.style}>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h2>{props.headingText}</h2>
          <p>{props.pText}</p>
        </div>
        <div className="col-6 img-video align-self-center mx-auto">
          <img src={props.src} className="img-fluid" />
          <video src={props.video2} autoPlay playsinline muted loop className="embed-responsive-item" style={{top: "14%", left: "17%", width:"65%"}}></video>
        </div>
      </div>
    </section>
  );
};

export default LowerSect;
