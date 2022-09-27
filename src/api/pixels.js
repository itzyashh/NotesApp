import axios from "axios";

export default axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization:
      "Bearer " + "563492ad6f91700001000001e6a74b7f6af449349691ea4346828176",
  },
});
