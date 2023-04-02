import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.headers);
    console.log(req.params);

	res.send('getting root');
});

// app.get('/profil', (req, res) => {
// 	res.send('getting profile');
// });

// app.post('/profil', (req, res) => {
// 	console.log(req.body);
// 	res.send('Succes');
// });

app.listen(3000);
