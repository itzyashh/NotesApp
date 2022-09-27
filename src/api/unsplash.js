import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + "Wj-3IUuBM4MstufIfl_NDgEplgepaBgmBVq-aSFDXQM",
  },
});
