import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ENHQERZRoUu8904sr6Sow8sx01d20Z2ujIA5J2g3KKfICH9cMRqynFcfEPGPxisQTZ82iWtqA3amQKkJp_6wNecb7Wk5pmbQba9S-vjAmpd1jXoDFQkqTYqA4IQMX3Yx",
  },
});
