db.persons.aggregate([
    {$match:{"dob.age":{$gt:50}}},
    {
        $group:{
            _id:"$gender",
            count:{$count:{}},
            avg_age:{$avg:"$dob.age"}
        }
    },
    {$sort:{count:-1}}

])

// [
//     { _id: 'female', count: 1125, avg_age: 61.90577777777778 },
//     { _id: 'male', count: 1079, avg_age: 62.066728452270624 }
//   ]




db.persons.aggregate([
    { $match: { 'dob.age': { $gt: 50 } } },
    {
      $group: {
        _id: { gender: '$gender' },
        numPersons: { $sum: 1 },
        avgAge: { $avg: '$dob.age' }
      }
    },
    { $sort: { numPersons: -1 } }
  ]).pretty();

//   [
//     {
//       _id: { gender: 'female' },
//       numPersons: 1125,
//       avgAge: 61.90577777777778
//     },
//     {
//       _id: { gender: 'male' },
//       numPersons: 1079,
//       avgAge: 62.066728452270624
//     }
//   ]



db.persons.aggregate([
  {
    $project: {
      date: {
        $convert: {
          input: "$dob.date",
          to: "date",
        },
      },
    },
  },
  {
    $limit:2
  }
]);
// [
//     {
//       _id: ObjectId("64d47247f33437e58ae0c67a"),
//       date: ISODate("1988-05-27T00:14:03.000Z")
//     },
//     {
//       _id: ObjectId("64d47247f33437e58ae0c67b"),
//       date: ISODate("1984-09-30T01:20:26.000Z")
//     }
//   ]



// use admin
// switched to db admin
admin> db.createUser({user:'soubhik',pwd:'123',roles:["userAdminAnyDatabase"]})
// { ok: 1 }
admin> db.auth('soubhik','123')
// { ok: 1 }
admin> db.createUser({user:'globalAdmin',pwd:'admin',roles:["dbAdminAnyDatabase"]})
// { ok: 1 }
db.createUser({ user: 'dev', pwd: 'dev', roles: [{role:"readWrite",db:"Users"},{role:"readWrite",db:"boxOffice"}] } )
// { ok: 1 }