db.hospital.insertMany([
  {
    firstName: "David",
    lastName: "Johnson",
    age: 28,
    history: [
      {
        disease: "cold",
        treatment: "...",
      },
    ],
  },
  {
    firstName: "Samuel",
    lastName: "Jackson",
    age: 20,
    history: [
      {
        disease: "cough",
        treatment: "...",
      },
    ],
  },
  {
    firstName: "Max",
    lastName: "Miller",
    age: 45,
    history: [
      {
        disease: "flu",
        treatment: "...",
      },
    ],
  },
]);
// [
//     {
//       _id: ObjectId("64d200cab591805a27746284"),
//       firstName: 'David',
//       lastName: 'Johnson',
//       age: 28,
//       history: [ { disease: 'cold', treatment: '...' } ]
//     },
//     {
//       _id: ObjectId("64d200cab591805a27746285"),
//       firstName: 'Samuel',
//       lastName: 'Jackson',
//       age: 20,
//       history: [ { disease: 'cough', treatment: '...' } ]
//     },
//     {
//       _id: ObjectId("64d200cab591805a27746286"),
//       firstName: 'Max',
//       lastName: 'Simpson',
//       age: 45,
//       history: [ { disease: 'flu', treatment: '---' } ]
//     }
// ]



db.hospital.updateOne(
  {
    firstName: "Max",
  },
  {
    $set: {
      lastName: "Simpson",
      age: 42,
      history: [
        {
          disease: "influenza",
          treatment: "---"
        },
      ],
    }
  }
);
// [
//     {
//       _id: ObjectId("64d200cab591805a27746284"),
//       firstName: 'David',
//       lastName: 'Johnson',
//       age: 28,
//       history: [ { disease: 'cold', treatment: '...' } ]
//     },
//     {
//       _id: ObjectId("64d200cab591805a27746285"),
//       firstName: 'Samuel',
//       lastName: 'Jackson',
//       age: 20,
//       history: [ { disease: 'cough', treatment: '...' } ]
//     },
//     {
//       _id: ObjectId("64d200cab591805a27746286"),
//       firstName: 'Max',
//       lastName: 'Simpson',
//       age: 42,
//       history: [ { disease: 'influenza', treatment: '---' } ]
//     }
// ]

db.hospital.find({
  age:{$gt:30}
});
// [
//   {
//     _id: ObjectId("64d200cab591805a27746286"),
//     firstName: 'Max',
//     lastName: 'Simpson',
//     age: 42,
//     history: [ { disease: 'influenza', treatment: '---', medicine: '&&&&' } ]
//   }
// ]

db.hospital.deleteMany(
    {
        "history.disease":"cold"
    }
)
// [
//   {
//     _id: ObjectId("64d200cab591805a27746285"),
//     firstName: 'Samuel',
//     lastName: 'Jackson',
//     age: 20,
//     history: [ { disease: 'cough', treatment: '...' } ]
//   },
//   {
//     _id: ObjectId("64d200cab591805a27746286"),
//     firstName: 'Max',
//     lastName: 'Simpson',
//     age: 42,
//     history: [ { disease: 'influenza', treatment: '---', medicine: '&&&&' } ]
//   }
// ]