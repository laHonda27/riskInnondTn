const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'poisson',
  port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.post('/addAlert', async (req, res) => {
    try {
      const { lat, long, type_event } = req.body;
      console.log(req.body);
      const response = await pool.query(
        'INSERT INTO alertevent (lat, long, type_event) VALUES ($1, $2, $3) RETURNING *',
        [lat, long, type_event]
      );
      res.json(response.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

  

app.get('/getEventAlert', async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM alertevent");
      res.json(data.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
