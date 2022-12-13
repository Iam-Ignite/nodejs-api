const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is :${val}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invaid Id"
        });
    }
    next();
}



exports.checkPostBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

exports.getAllTour = (req, res) => {
    res.status(201).json({
        status: " success",
        requestedAt: req.requestTime,
        result: tours.length,
        data: {
            tours
        }
    });
}

// GET ALL SINGLE DATA FROM THE ARRAY
exports.getSingleTour = (req, res) => {
    // console.log(req.params);

    // changing the id to number by multipling it by 1
    // using the req.params to get the id 
    const id = req.params.id * 1;
    // using the javascript find() function to get a single data of the array
    const tour = tours.find(el => el.id === id);
    // checking if the id is greater than what we have on the array

    res.status(201).json({
        status: " success",
        data: {
            tours: tour
        }
    });
}

exports.deleteTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invaid Id"
        });
    }
    res.status(204).json({
        status: "success",
        data: null
    })
}

// UPDATING THE DATA FROM THE ARRAY 
exports.updateTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invaid Id"
        });
    }
    res.status(200).json({
        status: "success",
        data: {
            tours: "<Updated tour ...>"
        }
    })
}

exports.createNewTour = (req, res) => {
  console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  console.log(newTour, req.body);
//   console.log(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
};
