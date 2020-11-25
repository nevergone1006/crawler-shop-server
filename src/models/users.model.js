// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { USER_ROLES } from '../constants/global.constant';

module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
    _id: { type: String },
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [
        USER_ROLES.NORMAL,
        USER_ROLES.SUPERADMIN,
        USER_ROLES.ADMIN,
      ],
      default: USER_ROLES.NORMAL,
    },
    phone: { type: String, required: true },
    lockedAt: { type: Date },
  }, {
    timestamps: true,
    _id: false,
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
