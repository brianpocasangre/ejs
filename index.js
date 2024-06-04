import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const d = new Date();

let day = d.getDay();
let types = '';
let messages = '';
let numOfLetters = '';

//  Write your code here:

// Step 2: Make sure that static files are linked to and the CSS shows up.
app.use(express.static('public'));

//   Hint: Check the nav bar in the header.ejs to see the button hrefs
// Step 4: Add the partials to the about and contact pages to show the header and footer on those pages.

app.use(bodyParser.urlencoded({ extended: true }));

if (day === 0 || day === 6) {
  types = 'the weekend';
  messages = 'time to have some Fun!';
} else {
  types = 'a weekday';
  messages = 'time to work Hard!';
}

// Step 1: Render the home page "/" index.ejs
app.get('/', (req, res) => {
  let data = {
    title: 'EJS Tags',
    seconds: new Date().getSeconds(),
    items: ['apple', 'banana', 'cherry'],
    htmlContent: '<strong>This is some strong text</strong>',
    dayType: types,
    message: messages,
  };

  res.render('index.ejs', data);
});

app.post('/submit', (req, res) => {
  numOfLetters = req.body['lName'].length + req.body['fName'].length;
  let data = {
    title: 'EJS Tags',
    seconds: new Date().getSeconds(),
    items: ['apple', 'banana', 'cherry'],
    htmlContent: '<strong>This is some strong text</strong>',
    dayType: types,
    message: messages,
    numOfLetters: numOfLetters,
  };
  res.render('index.ejs', data);
});

// Step 3: Add the routes to handle the render of the about and contact pages.

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT} URL:http://localhost:${PORT}`);
});
