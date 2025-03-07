import express from 'express';
const app = express();
const port = 4000;

app.use(indexRoutes);
app.listen(4000,console.log("http://localhost:"+ port));

