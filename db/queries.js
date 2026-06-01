const pool = require("./pool");

async function getAllMessages(){
    const { rows } = await  pool.query("SELECT * FROM messages");
    return rows;
}

async function sendMessage(username, message){
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
}

async function viewMessageDetails(id){
    console.log(id)
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    console.log('rows:', rows)
    return rows;
}


module.exports = {
    getAllMessages,
    sendMessage,
    viewMessageDetails
}