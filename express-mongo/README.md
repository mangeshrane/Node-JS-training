## EXERCISE

CRUD API development for UserModel
Get /users – all users
Get /users/:id – single user or 404 (Model.findById(), req.params.id)
Post /users – insert user  -> return status 201
Put /users – modify user based on key -> Model.updateOne(), body
Delete /users – delete all users ->Model.deleteMany()
Delete /users/:id – delete user with key Model.findByIdAndDelete()

### Nodemon

    Used to detect any code changes.

### Connecting to MONGO

Required:
	1. Datebase schema
	2. Database Model
	3. Database Entity

Schema:

	fname, lname, email, addresses[]
	const UserSchema = new mongoose.Schema(
    {
	_id: {
        type: String,
        unique: true,
        required: true
      },
      fname: {
        type: String,
        unique: false,
        required: true
      },
      lname: {
          type: String,
          unique: false,
          required: true
        },
      email: {
          type: String,
          unique: false,
          required: false
        },
       addresses : {
         type: Array,
         unique: false,
         required: false
       } 
    },
    { timestamps: true },
  );

	