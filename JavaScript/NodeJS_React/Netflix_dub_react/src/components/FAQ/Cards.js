import { useState } from "react";

const Card = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="expanding" onClick={() => setShow(!show)}>
        <button className="w-100 card d-flex justify-content-between flex-row align-items-center">
          <span>{props.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
        {show && <div class="cardinfo">{props.text}<br/><br/>{props.text2}</div>}
      </div>
    </>
  );
};

export default Card;
