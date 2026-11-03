/* global use */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("codingfactory");

// 1. Βρείτε όλους τους χρήστες στον Δήμο «Athens».
use("codingfactory");
db.getCollection("users").find({
  "address.municipality": "Athens",
});

// 2. Βρείτε όλους τους χρήστες που έχουν τηλέφωνο τύπου «work».
use("codingfactory");
db.getCollection("users").find({
  "phone.type": "work",
});

// 3. Προσθέστε σε έναν χρήστη νέο ρόλο π.χ. MODERATOR.
use("codingfactory");
db.getCollection("users").updateOne(
  { username: "admin" },
  {
    $push: {
      roles: { role: "MODERATOR", active: true },
    },
  },
);

// 4. Αφαιρέστε από τον χρήστη admin τον αριθμό εργασίας (work phone).
use("codingfactory");
db.getCollection("users").updateOne(
  { username: "admin" },
  {
    $pull: {
      phone: { type: "work" },
    },
  },
);

// 5. Δημιουργήστε χρήστη με insertOne.
use("codingfactory");
db.getCollection("users").insertOne({
  username: "user10",
  firstname: "Alice",
  lastname: "Wonderland",
  email: "alice@aueb.gr",
  address: {
    area: "test",
    street: "test",
    number: "1",
    po: "12345",
    municipality: "Athens",
  },
  phone: [{ type: "mobile", number: "6999999999" }],
  roles: [{ role: "READER", active: true }],
});

// 6. Ενημερώστε το email του χρήστη jdoe.
use("codingfactory");
db.getCollection("users").updateOne(
  { username: "jdoe" },
  {
    $set: {
      email: "jdoe2@aueb.gr",
    },
  },
);

// 7. Διαγράψτε όλους τους χρήστες με po που αρχίζει από «1».
use("codingfactory");
db.getCollection("users").deleteMany({ "address.po": { $regex: "^1" } });

// 8. Βρείτε όσους έχουν firstname που περιέχει «an» (regex).
use("codingfactory");
db.getCollection("users").find({
  firstname: {
    $regex: /an/,
  },
});

// 9. Aggregation: πλήθος χρηστών ανά roles.role.
use("codingfactory");
db.getCollection("users").aggregate([
  {
    $unwind: "$roles",
  },
  {
    $group: {
      _id: "$roles.role",
      userCount: { $sum: 1 },
    },
  },
]);

// 10. Εισάγετε πολλούς νέους χρήστες με insertMany.
use("codingfactory");
db.getCollection("users").insertMany([
  {
    username: "user11",
    firstname: "Bob",
    lastname: "Ross",
    email: "bobr@aueb.gr",
    address: {
      area: "test",
      street: "test",
      number: "1",
      po: "12345",
      municipality: "Athens",
    },
  },
  {
    username: "user12",
    firstname: "Charles",
    lastname: "Brown",
    email: "cb@aueb.gr",
    address: {
      area: "test",
      street: "test",
      number: "1",
      po: "12345",
      municipality: "Athens",
    },
  },
]);

// 11. Βρείτε τους χρήστες που έχουν περισσότερα από 1 τηλέφωνα.
use("codingfactory");
db.getCollection("users").find({
  "phone.1": { $exists: true },
});

// 12. Βρείτε τους χρήστες που έχουν ενεργό ρόλο READER.
use("codingfactory");
db.getCollection("users").find({
  roles: {
    $elemMatch: { role: "READER", active: true },
  },
});

// 13. Χρησιμοποιήστε aggregation για να βρείτε τον Δήμο με τους περισσότερους χρήστες.
use("codingfactory");
db.getCollection("users").aggregate([
  { $group: { _id: "$address.municipality", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 },
]);

// 14. Δημιουργήστε index στο username και εξηγήστε γιατί.
use("codingfactory");
db.getCollection("users").createIndex({ username: 1 }, { unique: true });

// 15. Ενημερώστε όλα τα έγγραφα για να προσθέσετε νέο πεδίο active: true.use("codingfactory");
use("codingfactory");
db.getCollection("users").updateMany(
  {},
  {
    $set: {
      active: true,
    },
  },
);

// 16. Διαγράψτε όλους τους χρήστες που δεν έχουν email.
use("codingfactory");
db.getCollection("users").deleteMany({ email: { $exists: false } });

// 17. Βρείτε χρήστες με email που τελειώνει σε @aueb.gr.
use("codingfactory");
db.getCollection("users").find({
  email: { $regex: /@aueb\.gr$/ },
});

// 18. Χρησιμοποιήστε aggregation για να δείτε πόσα κινητά υπάρχουν συνολικά.
use("codingfactory");
db.getCollection("users").aggregate([
  { $unwind: "$phone" },
  { $match: { "phone.type": "mobile" } },
  { $count: "totalMobilePhones" },
]);

// 19. Βρείτε το πλήθος των διαφορετικών ταχυδρομικών κωδικών.
use("codingfactory");
db.getCollection("users").distinct("address.po");
