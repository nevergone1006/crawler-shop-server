// shops-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'shops';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    _id: { type: String },
    channel: {type: String},
    shopId: { type: String, required: true, unique: true },
    shopName: { type: String, required: true },
    shopType: { type: String, required: true },
    categories: [{type: String, required: true }],
    shopUrl: {type: String, required: true, unique: true},
    shopStarted: { type: Date, required: true },
    shopAddress: {type: String},
    shopEmail: {type: String},
    shopPhone: {type: String},

    enterprisePit: {type: String}, // Mã số thuế:
    enterpriseType: {type: String}, // Mô hình kinh doanh
    enterpriseName: {type: String}, // Tên người đại diện:
    enterpriseStarted: {type: Date}, // ngày bắt đầu
    nameRepresent: {type: String}, // người đại diện
    phoneRepresent: {type: String}, // người đại diện
    enterpriseMarket: {type: String}, // thị trường
    enterpriseCategory: {type: String}, // ngành hàng doanh nghiệp
    enterpriseSize: {type: String}, // nhân sự
    enterpriseTotal: {type: String}, // khả năng cung cấp
  }, {
    _id: false,
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
