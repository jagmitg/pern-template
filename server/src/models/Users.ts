export {};
const client = require('../config/db');

module.exports.getById = async (id: number) => {
  const query: string = `SELECT * FROM users WHERE user_id = ($1) LIMIT 1`;

  try {
    const res = await client.query(query, [id]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports.getByUsername = async (username: string) => {
  const query: string = `SELECT * FROM users WHERE username = ($1) LIMIT 1`;

  try {
    const res = await client.query(query, [username]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports.checkUsernameExists = async (username: string) => {
  const query: string = `SELECT username FROM users WHERE username = ($1) LIMIT 1`;

  try {
    const res = await client.query(query, [username]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports.create = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  const query: string = `INSERT INTO users (username, password, first_name, last_name, email) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const res = await client.query(query, [
      username,
      password,
      firstName,
      lastName,
      email,
    ]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};
