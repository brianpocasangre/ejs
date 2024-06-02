import express from 'express';
import ejs from 'ejs';

const app = express();
const PORT = 3000;
const d = new Date();
let day = d.getDay();
let types = '';
let messages = '';

if (day === 0 || day === 6) {
  types = 'the weekend';
  messages = 'time to have some Fun!';
} else {
  types = 'a weekday';
  messages = 'time to work Hard!';
}

app.get('/', (req, res) => {
  const data = {
    title: 'EJS Tags',
    seconds: new Date().getSeconds(),
    items: ['apple', 'banana', 'cherry'],
    htmlContent: '<strong>This is some strong text</strong>',
    dayType: types,
    message: messages,
  };
  res.render('index.ejs', data);
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT} URL:http://localhost:${PORT}`);
});
