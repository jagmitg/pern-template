import { Request, Response, NextFunction } from 'express';
const Users = require('../models/Users');

module.exports.get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userData } = req.body.tokenData;

  const u = await Users.getById(userData.user_id);
  res.status(200).send(u);
};
