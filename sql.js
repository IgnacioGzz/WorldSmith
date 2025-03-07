import fs from 'fs';
import pg from 'pg';

const config = {
user: process.env.USER,
password: process.env.PASSWORD,
host: process.env.HOST,
port: process.env.PORT,
database: process.env.DATABASE,
ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(process.env.CERT)
}

};
export 
const client= new pg .Client(config);
return client.connect();