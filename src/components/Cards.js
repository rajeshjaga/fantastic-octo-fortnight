import { Link } from "react-router-dom";
import Page from "./Page";
const Card = ({ info }) => {
  const infos = info.info;
  const display = infos.slice(0, 147) + "....";
  return (
    <Switch>
      <div className="card">
        <img src={info.image} />
        <div className="card-bottom">
          <h1>{info.name}</h1>
          <p>{display}</p>
          <li>
            <Link path={`${match.url}`}>Learn More</Link>
          </li>
        </div>
      </div>
    </Switch>
  );
};

export default Card;
