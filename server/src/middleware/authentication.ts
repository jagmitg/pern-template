import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

module.exports.checkAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({
      data: null,
      message: 'No token provided. Authorisation denied.',
    });
  }

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err: Error, tokenData: any) => {
      if (err) {
        return res.status(401).json({
          data: null,
          message: 'Invalid token provided.',
        });
      }

      // Add the token data to the request. It contains userData: {id, username}
      req.body.tokenData = tokenData;
      next();
    }
  );
};
