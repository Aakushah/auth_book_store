const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {

    const { username, password } = req.body;
    const token={username,password};
    res.send({
        token
        
    });
    
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});