import logger from "@/service/logger";
export default function handler(req, res) {
  logger.error((req.body));
  res.status(200).json({ log: "Success To Report" });
}