const { MongoClient } = require("mongodb");

const state = {
  db: null,
};

// mongodb connection string
const url =
  "mongodb+srv://jerinwilson47:qNxmhLCzWKv7m2x@cannteen.6wgaesy.mongodb.net/?retryWrites=true&w=majority";
// database name
const dbName = "shopping";

// create a new mongodb client object
const client = new MongoClient(url);

// function to establish mongodb connection
const connect = async (cb) => {
  try {
    // connecting to mongodb
    await client.connect();
    // setting up database name to the connected client
    const db = client.db(dbName);
    // setting up database name to the state
    state.db = db;
    // callback after connected
    return cb();
  } catch (err) {
    // callback when an error occurs
    return cb(err);
  }
};

// function to get the database instance
const get = () => state.db;

// exporting functions
module.exports = { connect, get };
