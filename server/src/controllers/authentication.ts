import { Request, Response, NextFunction } from 'express';
const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports.login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: Error, user: any, message: string) => {
    if (err) throw err;

    if (!user) {
      res.status(400).json({
        message,
        data: null,
      });
    } else {
      let userData = {
        user_id: user.user_id,
        username: user.username,
      };

      // Create the access token and refresh token
      const accessToken = jwt.sign(
        { userData },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
      );
      const refreshToken = jwt.sign(
        { userData },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
      );

      // Send the tokens back
      res.status(200).json({
        message,
        data: {
          accessToken,
          refreshToken,
          userData,
        },
      });
    }
  })(req, res, next);
};

module.exports.register = async (req: Request, res: Response) => {
  const { username, password, firstName, lastName, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create(username, hashedPassword, firstName, lastName, email);
    res.status(200).json({
      message: 'Registration success.',
      data: null,
    });
  } catch (error) {
    res.status(401).json({
      message: 'Registration failure.',
      data: null,
    });
  }
};

module.exports.checkUsernameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const u = await Users.checkUsernameExists(req.query.username);
  res.status(200).send(u);
};

module.exports.refresh = (req: Request, res: Response, next: NextFunction) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({
      data: null,
      message: 'No refresh token provided.',
    });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err: Error, tokenData: any) => {
      if (err) throw err;

      const userData = tokenData.userData;
      const accessToken = jwt.sign(
        { userData },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
      );
      res.status(200).json({
        data: accessToken,
      });
    }
  );
};
