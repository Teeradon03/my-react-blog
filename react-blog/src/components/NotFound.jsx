import notfound from "../images/notfound.svg";

export default function NotFound() {
  return (
    <div className="container">
      <h2 className="title">404 Page Not Found</h2>
      <img src={notfound} alt="notfound" />
    </div>
  );
}
