import mongoose from 'mongoose';
import config from '../config/default'

mongoose.connect(config.url,{
  useNewUrlParser: true ,
  useCreateIndex: true,//fix bug: collection.ensureIndex is deprecated. Use createIndexes instead.
});
mongoose.connection.on('connected',()=>{
  console.log('Mongoose connection open to ' + config.url);
})
mongoose.connection.on('error',err=>{
  console.log('Mongoose connection error: ' + err);
})
mongoose.connection.on('disconnected',()=>{
  console.log('Mongoose connection disconnected');
})

export default mongoose