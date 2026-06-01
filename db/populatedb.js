const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(100),
    message TEXT,
    posted TIMESTAMP(0) DEFAULT NOW()
);

INSERT INTO messages (username, message)
VALUES
('lancer', 'hello?'),
('radish', 'hiiiiiiii');
`;


async function main(){
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('finished!');
}

main();
