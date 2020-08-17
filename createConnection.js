import { createConnection } from 'mysql';
import { config } from 'dotenv';
config();

export function connectDB() {
  const { DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env;

  const connection = createConnection({
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: 'localhost',
  });

  connection.connect((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database successfully connected');
    }
  });

  return connection;
}

const connection = connectDB();
export default connection;
