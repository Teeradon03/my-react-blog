import about from "../images/about.svg";

export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="title">About us</h2>
        <img src={about} alt="about" />
      </div>
    </>
  );
}
