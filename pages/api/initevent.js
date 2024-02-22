// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require("axios");
const initevent = (req, res) => {

    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/init-event", {
        headers: {
          "Lifestyle-Token ": req.headers.token,
        },
      })
      .then((res2) => {
        const response = res2.data;
        if (response) res.status(200).json(response);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
export default initevent;
