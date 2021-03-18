import axios from "axios";
import { useState, useEffect } from "react";
const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://review-app-api.herokuapp.com/results";
  const fetchingData = async () => {
    const response = await axios({
      method: "get",
      url: url,
    });
    setData(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchingData();
  }, [url]);
  return [data, loading];
};

export default Api;
