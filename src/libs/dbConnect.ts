import mongoose, { connect } from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI || '';

run().catch((err) => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/strelo_rewards');

  // const user = new User({
  //   name: 'Bill',
  //   email: 'bill@initech.com',
  //   avatar: 'https://i.imgur.com/dM7Thhn.png'
  // });
  // await user.save();

  // console.log(user.email); // 'bill@initech.com'
}
