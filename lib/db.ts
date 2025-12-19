import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: '127.0.0.1',
  port: 3307,
  user: 'lmsuser',
  password: 'lms123',
  database: 'mysql', // sementara
});
