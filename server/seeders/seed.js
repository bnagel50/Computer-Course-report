const db = require('../config/connection');
const { User, Course } = require('../models')
const userSeeds = require('./profileSeeds.json');
const courseSeeds = require('./courseList.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    await Course.deleteMany({});
    await Course.create(courseSeeds);

    console.log('Data seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});