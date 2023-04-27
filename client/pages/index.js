import axios from "axios";

const LandingPage = () => {
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  // console.log(req.headers);
  return {};
  // if (typeof window === "undefined") {
  //   const { data } = await axios.get("http://auth:5000/api/users/currentUser", {
  //     headers: req.headers,
  //   });

  //   return data;
  // } else {
  //   const { data } = await axios.get(
  //     "http://localhost:5000/api/users/currentUser"
  //   );

  //   return data;
  // }
};

export default LandingPage;
