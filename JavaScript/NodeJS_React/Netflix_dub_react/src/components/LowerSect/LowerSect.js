const LowerSect = (props) => {
  return (
    <section className="FAQSect py-5">
      <div className="container d-flex" style={props.style}>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h2>{props.headingText}</h2>
          <p>{props.pText}</p>
        </div>
        <div className="col-6">
          <img src={props.src} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default LowerSect;
