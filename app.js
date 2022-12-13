const express = require('express');
const morgan = require("morgan")
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter")

const app = express();

//  middleware Handler
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);


app.use((req, res, next) => {
    console.log("hello middleware ");
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

module.exports = app;


// getting  synchronousness data

// by reading it from the file synchronousnessly

// Your api route handlers
// getting all data from the file
// app.get("/api/v1/tours", getAllTour);

// getting a single data from the file by using params
// getting a single data with the req.params
// app.get("/api/v1/tours/:id", getSingleTour);

// the patch method
// app.patch("/api/v1/tours/:id", updateTour);

// the delete method
// app.delete("/api/v1/tours/:id", deleteTour);

// the post method 
// app.post("/api/v1/tours", createNewTour)





// creating the express port to start the server 
// or get your app running.