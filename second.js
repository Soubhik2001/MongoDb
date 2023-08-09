db.company.insertOne(
    {
        _id:1,
        name:"Argusoft",
        employee_count:350,
        status:"active",
        location:"Gujarat,India"
    }
)
// { acknowledged: true, insertedId: 1 }
db.company.find().pretty()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employee_count: 350,
//     status: 'active',
//     location: 'Gujarat,India'
//   }
// ]


db.company.insertMany(
    [
        {
            _id:2,
            name:"Kingfisher",
            employee_count:780,
            status:"inactive",
            location:"Mumbai,India"
        },
        {
            _id:3,
            name:"Air India",
            employee_count:17000,
            status:"active",
            location:"Delhi, India"
        }
    ]
)
// { acknowledged: true, insertedIds: { '0': 2, '1': 3 } }
db.company.find().pretty()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employee_count: 350,
//     status: 'active',
//     location: 'Gujarat,India'
//   },
//   {
//     _id: 2,
//     name: 'Kingfisher',
//     employee_count: 780,
//     status: 'inactive',
//     location: 'Mumbai,India'
//   },
//   {
//     _id: 3,
//     name: 'Air India',
//     employee_count: 17000,
//     status: 'active',
//     location: 'Delhi, India'
//   }
// ]


db.company.insertMany([{_id:2,name:"Kingfisher",employee_count:780,status:"inactive",location:"Mumbai,India"},{_id:3,name:"Air India",employee_count:17000,status:"active",location:"Delhi, India"},{_id:4,name:"Meta",employee_count:35000,status:"active",location:"USA"}])
// Uncaught:
// MongoBulkWriteError: E11000 duplicate key error collection: companyData.company index: _id_ dup key: { _id: 2 }
// Result: BulkWriteResult {
//   insertedCount: 0,
//   matchedCount: 0,
//   modifiedCount: 0,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {},
//   insertedIds: { '0': 2, '1': 3, '2': 4 }
// }
// Write Errors: [
//   WriteError {
//     err: {
//       index: 0,
//       code: 11000,
//       errmsg: 'E11000 duplicate key error collection: companyData.company index: _id_ dup key: { _id: 2 }',
//       errInfo: undefined,
//       op: {
//         _id: 2,
//         name: 'Kingfisher',
//         employee_count: 780,
//         status: 'inactive',
//         location: 'Mumbai,India'
//       }
//     }
//   }
// ]

db.company.insertMany([{_id:2,name:"Kingfisher",employee_count:780,status:"inactive",location:"Mumbai,India"},
{_id:5,name:"Apple",employee_count:20000,status:"active",location:"UL"}],{ordered:false})
// Uncaught:
// MongoBulkWriteError: E11000 duplicate key error collection: companyData.company index: _id_ dup key: { _id: 2 }
// Result: BulkWriteResult {
//   insertedCount: 1,
//   matchedCount: 0,
//   modifiedCount: 0,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {},
//   insertedIds: { '0': 2, '1': 5 }
// }
// Write Errors: [
//   WriteError {
//     err: {
//       index: 0,
//       code: 11000,
//       errmsg: 'E11000 duplicate key error collection: companyData.company index: _id_ dup key: { _id: 2 }',
//       errInfo: undefined,
//       op: {
//         _id: 2,
//         name: 'Kingfisher',
//         employee_count: 780,
//         status: 'inactive',
//         location: 'Mumbai,India'
//       }
//     }
//   }
// ]
db.company.find().pretty()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employee_count: 350,
//     status: 'active',
//     location: 'Gujarat,India'
//   },
//   {
//     _id: 2,
//     name: 'Kingfisher',
//     employee_count: 780,
//     status: 'inactive',
//     location: 'Mumbai,India'
//   },
//   {
//     _id: 3,
//     name: 'Air India',
//     employee_count: 17000,
//     status: 'active',
//     location: 'Delhi, India'
//   },
//   {
//     _id: 4,
//     name: 'Meta',
//     employee_count: 35000,
//     status: 'active',
//     location: 'USA'
//   },
//   {
//     _id: 5,
//     name: 'Apple',
//     employee_count: 20000,
//     status: 'active',
//     location: 'UL'
//   }
// ]

db.company.insertOne(
    {
        _id:6,
        name:"Netflix",
        employee_count:2000,
        status:"inactive",
        location:"California"
    },
    {
        w:1,
        j:true
    }
)
// { acknowledged: true, insertedId: 6 }
db.company.find().pretty()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employee_count: 350,
//     status: 'active',
//     location: 'Gujarat,India'
//   },
//   {
//     _id: 2,
//     name: 'Kingfisher',
//     employee_count: 780,
//     status: 'inactive',
//     location: 'Mumbai,India'
//   },
//   {
//     _id: 3,
//     name: 'Air India',
//     employee_count: 17000,
//     status: 'active',
//     location: 'Delhi, India'
//   },
//   {
//     _id: 4,
//     name: 'Meta',
//     employee_count: 35000,
//     status: 'active',
//     location: 'USA'
//   },
//   {
//     _id: 5,
//     name: 'Apple',
//     employee_count: 20000,
//     status: 'active',
//     location: 'UL'
//   },
//   {
//     _id: 6,
//     name: 'Netflix',
//     employee_count: 2000,
//     status: 'inactive',
//     location: 'California'
//   }
// ]

db.company.insertOne(
    {
        _id:7,
        name:"Reliance Power",
        employee_count:500,
        status:"inactive",
        location:"Mumbai,India"
    },
    {
        w:1,
        j:false
    }
)
// { acknowledged: true, insertedId: 7 }
companyData> db.company.find().pretty()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employee_count: 350,
//     status: 'active',
//     location: 'Gujarat,India'
//   },
//   {
//     _id: 2,
//     name: 'Kingfisher',
//     employee_count: 780,
//     status: 'inactive',
//     location: 'Mumbai,India'
//   },
//   {
//     _id: 3,
//     name: 'Air India',
//     employee_count: 17000,
//     status: 'active',
//     location: 'Delhi, India'
//   },
//   {
//     _id: 4,
//     name: 'Meta',
//     employee_count: 35000,
//     status: 'active',
//     location: 'USA'
//   },
//   {
//     _id: 5,
//     name: 'Apple',
//     employee_count: 20000,
//     status: 'active',
//     location: 'UL'
//   },
//   {
//     _id: 6,
//     name: 'Netflix',
//     employee_count: 2000,
//     status: 'inactive',
//     location: 'California'
//   },
//   {
//     _id: 7,
//     name: 'Reliance Power',
//     employee_count: 500,
//     status: 'inactive',
//     location: 'Mumbai,India'
//   }
// ]

db.movieStarts.find({$and:[{"meta.rating":{$gt:9.2}},{"meta.runtime":{$lt:100}}]}).pretty()
// [
//     {
//       _id: ObjectId("64d33d4f6c42b1f5b7799053"),
//       title: 'Supercharged Teaching',
//       meta: { rating: 9.3, aired: 2016, runtime: 60 },
//       visitors: 370000,
//       expectedVisitors: 1000000,
//       genre: [ 'thriller', 'action' ]
//     }
//   ]


db.movieStarts.find({$or:[{"genre":"drama"},{"genre":"action"}]}).pretty()
// [
//   {
//     _id: ObjectId("64d33d4f6c42b1f5b7799052"),
//     title: 'The Last Student Returns',
//     meta: { rating: 9.5, aired: 2018, runtime: 100 },
//     visitors: 1300000,
//     expectedVisitors: 1550000,
//     genre: [ 'thriller', 'drama', 'action' ]
//   },
//   {
//     _id: ObjectId("64d33d4f6c42b1f5b7799053"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ]
//   },
//   {
//     _id: ObjectId("64d33d4f6c42b1f5b7799054"),
//     title: 'Teach me if you can',
//     meta: { rating: 8.5, aired: 2014, runtime: 90 },
//     visitors: 590378,
//     expectedVisitors: 500000,
//     genre: [ 'action', 'thriller' ]
//   }
// ]


db.exmoviestarts.find({genre:{$size:2}}).pretty()
// [
//   {
//     _id: ObjectId("64d351f77edfe832b182bb02"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ],
//     ratings: [ 10, 9, 9 ]
//   },
//   {
//     _id: ObjectId("64d351f77edfe832b182bb03"),
//     title: 'Teach me if you can',
//     meta: { rating: 8, aired: 2014, runtime: 90 },
//     visitors: 590378,
//     expectedVisitors: 500000,
//     genre: [ 'action', 'thriller' ],
//     ratings: [ 8, 8 ]
//   }
// ]

db.exmoviestarts.find({"meta.aired":2018})
// [
//   {
//     _id: ObjectId("64d351f77edfe832b182bb04"),
//     title: 'The Last Student Returns',
//     meta: { rating: 9.5, aired: 2018, runtime: 100 },
//     visitors: 1300000,
//     expectedVisitors: 1550000,
//     genre: [ 'thriller', 'drama', 'action' ],
//     ratings: [ 10, 9 ]
//   }
// ]

db.exmoviestarts.find({ratings:{$elemMatch:{$gt:8,$lt:10}}}).pretty()
// [
//   {
//     _id: ObjectId("64d351f77edfe832b182bb02"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ],
//     ratings: [ 10, 9, 9 ]
//   },
//   {
//     _id: ObjectId("64d351f77edfe832b182bb04"),
//     title: 'The Last Student Returns',
//     meta: { rating: 9.5, aired: 2018, runtime: 100 },
//     visitors: 1300000,
//     expectedVisitors: 1550000,
//     genre: [ 'thriller', 'drama', 'action' ],
//     ratings: [ 10, 9 ]
//   }
// ]


db.sports.updateOne({name:"David"},{$set:{title:"Sports",requiresTeam:true}},{upsert:true})
// {
//   acknowledged: true,
//   insertedId: ObjectId("64d35f3dcd5ea2ce54d548ba"),
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 1
// }
db.sports.updateOne({name:"Sam"},{$set:{title:"Sports",requiresTeam:true}},{upsert:true})
// {
//   acknowledged: true,
//   insertedId: ObjectId("64d36028cd5ea2ce54d54965"),
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 1
// }
db.sports.find().pretty()
// [
//   {
//     _id: ObjectId("64d35e139971abae77b84944"),
//     name: 'Anna',
//     hobbies: [
//       { title: 'Sports', frequency: 2 },
//       { title: 'Yoga', frequency: 3 }
//     ],
//     phone: '80811987291',
//     age: null
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84945"),
//     name: 'Manuel',
//     hobbies: [
//       { title: 'Cooking', frequency: 5 },
//       { title: 'Cars', frequency: 2 }
//     ],
//     phone: '012177972',
//     age: 30
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84946"),
//     name: 'Chris',
//     hobbies: [ 'Sports', 'Cooking', 'Hiking' ]
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84947"),
//     name: 'Max',
//     hobbies: [
//       { title: 'Sports', frequency: 3 },
//       { title: 'Cooking', frequency: 6 }
//     ],
//     phone: 131782734
//   },
//   {
//     _id: ObjectId("64d35f3dcd5ea2ce54d548ba"),
//     name: 'David',
//     requiresTeam: true,
//     title: 'Sports'
//   },
//   {
//     _id: ObjectId("64d36028cd5ea2ce54d54965"),
//     name: 'Sam',
//     requiresTeam: true,
//     title: 'Sports'
//   }
// ]


db.sports.updateMany({requiresTeam:true},{$set:{'Number_of_players':2}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 2,
//   upsertedCount: 0
// }
db.sports.find().pretty()
// [
//   {
//     _id: ObjectId("64d35e139971abae77b84944"),
//     name: 'Anna',
//     hobbies: [
//       { title: 'Sports', frequency: 2 },
//       { title: 'Yoga', frequency: 3 }
//     ],
//     phone: '80811987291',
//     age: null
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84945"),
//     name: 'Manuel',
//     hobbies: [
//       { title: 'Cooking', frequency: 5 },
//       { title: 'Cars', frequency: 2 }
//     ],
//     phone: '012177972',
//     age: 30
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84946"),
//     name: 'Chris',
//     hobbies: [ 'Sports', 'Cooking', 'Hiking' ]
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84947"),
//     name: 'Max',
//     hobbies: [
//       { title: 'Sports', frequency: 3 },
//       { title: 'Cooking', frequency: 6 }
//     ],
//     phone: 131782734
//   },
//   {
//     _id: ObjectId("64d35f3dcd5ea2ce54d548ba"),
//     name: 'David',
//     requiresTeam: true,
//     title: 'Sports',
//     Number_of_players: 2
//   },
//   {
//     _id: ObjectId("64d36028cd5ea2ce54d54965"),
//     name: 'Sam',
//     requiresTeam: true,
//     title: 'Sports',
//     Number_of_players: 2
//   }
// ]


db.sports.updateMany({requiresTeam:true},{$set:{Number_of_players:{$inc:10}}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 2,
//   upsertedCount: 0
// }
db.sports.find().pretty()
// [
//   {
//     _id: ObjectId("64d35e139971abae77b84944"),
//     name: 'Anna',
//     hobbies: [
//       { title: 'Sports', frequency: 2 },
//       { title: 'Yoga', frequency: 3 }
//     ],
//     phone: '80811987291',
//     age: null
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84945"),
//     name: 'Manuel',
//     hobbies: [
//       { title: 'Cooking', frequency: 5 },
//       { title: 'Cars', frequency: 2 }
//     ],
//     phone: '012177972',
//     age: 30
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84946"),
//     name: 'Chris',
//     hobbies: [ 'Sports', 'Cooking', 'Hiking' ]
//   },
//   {
//     _id: ObjectId("64d35e139971abae77b84947"),
//     name: 'Max',
//     hobbies: [
//       { title: 'Sports', frequency: 3 },
//       { title: 'Cooking', frequency: 6 }
//     ],
//     phone: 131782734
//   },
//   {
//     _id: ObjectId("64d35f3dcd5ea2ce54d548ba"),
//     name: 'David',
//     requiresTeam: true,
//     title: 'Sports',
//     Number_of_players: { '$inc': 10 }
//   },
//   {
//     _id: ObjectId("64d36028cd5ea2ce54d54965"),
//     name: 'Sam',
//     requiresTeam: true,
//     title: 'Sports',
//     Number_of_players: { '$inc': 10 }
//   }
// ]