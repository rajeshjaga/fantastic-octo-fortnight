import { Switch, Route } from "react-router-dom";
const Lazy = ({ children }) => {
  return (
    <>
      <div className="hero">
        <h1>Amazing Places to visit</h1>
      </div>
      <Route />
      <Route />
      <footer>
        <h3>Thank you Enjoy your stay</h3>
      </footer>
    </>
  );
};
export default Lazy;
