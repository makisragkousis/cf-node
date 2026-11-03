/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("codingfactory");
// query find all
db.getCollection("users").find();

use("codingfactory");
db.getCollection("users").insertOne({
  firstname: "markos",
  lastname: "karampatsis",
});

use("codingfactory");
db.getCollection("users").insertMany([
  {
    name: "lakis",
  },
  {
    name: "kostas",
  },
]);

use("codingfactory");
db.getCollection("users").findOne({ username: "admin" });

use("codingfactory");
db.getCollection("users").find({ username: "admin" });

use("codingfactory");
db.getCollection("users").find({ username: "admin", email: "admin@aueb.gr" });

use("codingfactory");
db.getCollection("users").find(
  { username: "admin", email: "admin1@aueb.gr" },
  { _id: 0, lastname: 1 },
);

use("codingfactory");
db.getCollection("users").find(
  {
    "address.area": "area1",
  },
  {
    username: 1,
    firstname: 1,
    "address.area": 1,
  },
);

use("codingfactory");
db.getCollection("users").find({
  "phone.type": "home",
});

use("codingfactory");
db.getCollection("users").find({
  "phone.number": "2101111111",
});

use("codingfactory");
db.getCollection("users").find({
  $or: [{ "phone.number": "2101111111" }, { "phone.number": "2105555555" }],
});

use("codingfactory");
db.getCollection("users").find({
  "phone.number": { $in: ["2101111111", "2105555555"] },
});

use("codingfactory");
db.getCollection("users").updateOne(
  { firstname: "markos" },
  {
    $set: {
      lastname: "lalakis",
      newField1: "my field",
      newField2: [1, 2, 3, 3.4],
    },
  },
);

use("codingfactory");
db.getCollection("users").updateOne(
  { username: "user3" },
  {
    $push: {
      phone: {
        _id: new ObjectId(),
        type: "work",
        number: "2108888888",
      },
    },
  },
);

use("codingfactory");
db.getCollection("users").updateMany(
  { firstname: "markos" },
  {
    $push: {
      newField2: 15.5,
    },
  },
);

use("codingfactory");
db.getCollection("users").updateOne(
  { username: "user5", "phone.number": "2106666666" },
  {
    $set: {
      "phone.$.number": "2109999999",
    },
  },
);

use("codingfactory");
db.getCollection("users").updateOne(
  { username: "user5" },
  {
    $pull: {
      phone: { type: "home" },
    },
  },
);

use("codingfactory");
db.getCollection("users").updateMany(
  {},
  {
    $unset: {
      newField1: "",
      newField2: "",
    },
  },
);

use("codingfactory");
db.getCollection("users").deleteOne({ name: "lakis" });

use("codingfactory");
db.getCollection("users").deleteMany({
  firstname: "markos",
});

// use("codingfactory");
// db.getCollection("users").deleteMany({});

use("codingfactory");
db.getCollection("users").aggregate([
  {
    $match: {
      "address.area": "area2",
    },
  },
  {
    $project: {
      username: 1,
      firstname: 1,
      countPhoneNumber: { $size: "$phone" },
    },
  },
]);

use("codingfactory");
db.getCollection("users").aggregate([
  {
    $project: {
      phone: 1,
      _id: 0,
    },
  },
  { $unwind: "$phone" },
  {
    $project: {
      phone_t: "$phone.type",
    },
  },
]);

use("codingfactory");
db.getCollection("users").aggregate([
  {
    $project: {
      username: 1,
      products: 1,
      _id: 0,
    },
  },
  {
    $unwind: "$products",
  },
  {
    $lookup: {
      from: "products",
      localField: "products.product",
      foreignField: "product",
      as: "results",
    },
  },
]);

use("codingfactory");
db.getCollection("users").aggregate([
  {
    $unwind: "$roles",
  },
  {
    $match: {
      "roles.role": "ADMIN",
      "roles.active": true,
    },
  },
  {
    $group: {
      _id: null,
      activeAdmins: { $sum: 1 },
    },
  },
]);

use("codingfactory");
db.getCollection("users").aggregate([
  {
    $unwind: "$phone",
  },
  {
    $group: {
      _id: { area: "$address.area", phoneType: "$phone.type" },
      count: { $sum: 1 },
    },
  },
  {
    $sort: {
      "_id.area": 1,
    },
  },
]);

use("codingfactory");
db.users.createIndex({ firstname: 1 });

use("codingfactory");
db.users.createIndex({ username: 1 }, { unique: true });
