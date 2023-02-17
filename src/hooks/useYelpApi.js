import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchApi = async (term) => {
    try {
      setLoading(true);
      setError(false);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "miami beach",
        },
      });
      setLoading(false);
      setResults(response.data.businesses);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchApi("restaurants");
  }, []);

  return [searchApi, results, error, loading];
};
