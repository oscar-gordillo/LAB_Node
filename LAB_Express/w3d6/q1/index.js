const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
 const date = new Date();

  const hour = date.getHours();
  console.log(hour);
  let style="";
  if (hour>=6 && hour <= 18) {
   style="day.css"
  }else{
   style="night.css"
  }
 res.render("index", {
 time: date.toTimeString(),style:style
 });
});
app.listen(3000);