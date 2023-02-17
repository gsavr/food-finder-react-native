import axios from "axios";
import keys from "../../config/keys";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: keys.yelp,
  },
});
