const db = require('../config/connection');
const { User, Course, Review } = require('../models')
const userSeeds = require('./profileSeeds.json');
const courseSeeds = require('./courseList.json');
const reviewSeeds = require('./new-reviews.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    const users = await User.find({});
    const userIds = Array.from(users).map(u => u._id)

    await Course.deleteMany({});
    await Course.create(courseSeeds);

    const course = await Course.findOne({ school: 'Springboard'})

    const reviews = reviewSeeds.map(r => {
      const userId = getRandomItem(userIds)

      return {
        ...r, 
        courseId: course._id,
        userId: userId
      }
    })

    await Review.deleteMany({});
    await Review.create(reviews)

    console.log('Data seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

const getRandomItem = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}