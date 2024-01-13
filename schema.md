## Schema

1. User

   - \_id : ObjectId
   - username : String
   - email : String
   - password (hashed) : String
   - posts : [Post]
   - comments: [Comment] \*\*\*
   - profilePicture: String \*\*\*
   - phone: String \*\*\*
   - createdAt: Date
   - updatedAt: Date

2. Post

   - \_id: ObjectId
   - user: User
   - caption: String
   - image: String
   - comments: [Comment]
   - likes: [User]
   - createdAt: Date
   - updatedAt: Date
   - deletedAt: Date / null

3. Comment
   - \_id
   - post: String
   - commentText: String
   - user: User
   - likes: [User]
   - createdAt: Date
   - updatedAt: Date
