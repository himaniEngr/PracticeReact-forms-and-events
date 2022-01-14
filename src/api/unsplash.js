import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID kDXfDyrSbZ7n4KXfVLStnnct4nYyMRBb-sQrGA8uERg",
  },
});
