import { NextApiRequest, NextApiResponse } from "next";
import { getDocsTreeChildren } from "../../helpers/docs";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json(getDocsTreeChildren());
};
