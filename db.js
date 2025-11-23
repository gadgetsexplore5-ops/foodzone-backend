import mysql from "mysql2";

const db = mysql.createConnection({
  host: "srv875.hstgr.io",
  user: "u816290961_foodzone_admin",
  password: "Tsamir1985",
  database: "u816290961_foodzone_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

export default db;
