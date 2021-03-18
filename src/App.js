import React from "react";
import "./SCSS/styles.scss";
import Lazy from "./components/Lazy";
import Api from "./api";
import Loading from "./components/Loading";
import Card from "./components/Cards";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [data, loading] = Api();
  return (
    <Router>
      <Lazy>
        {loading ? (
          <Loading />
        ) : (
          <div className="cards-preview">
            {data.map((info) => {
              return <Card key={info.id} info={info} />;
            })}
          </div>
        )}
      </Lazy>
    </Router>
  );
};

export default App;
