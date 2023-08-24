import Button from "../Button";

const InputGetStarted = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="d-flex gap-2 w-50">
        <input
          type="text"
          placeholder={props.placeholder}
        />
        <Button
          title="Get Started"
          style={{
            width: "200px",
            backgroundColor: "red",
            color: "white",
            fontSize: "24px",
            flex: "0 0 auto"
          }}
        />
      </div>
    </div>
  );
};

export default InputGetStarted;
