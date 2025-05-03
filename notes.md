# plan for user frontend

## workflow

    1. user enters website
    2. if not logged in shows login or signup page
    3. if not registered sign up else log in
    4. sign up:
        -- user details for signing up to be user
            . username
            . email
            . password
            . isAuthor? (later)*
        --all in form with button/link
        -- validate users? how?
    5. login:
        -- user details for signing up to be user
            .email
            .password
        -- in form wiht btn/link
        -- validate users? how?
    6. home page:
        -- contians all published post cards
        -- click card -> navigates to each posts
    7. posts:
        -- contians:
            1. author name
            2. email id
            3. posted date
            4. edited date? if any :else - nothing
            5. posts
            6. all comments
    8. comments:
        --all comments with name and content
            --How? one div or individual cards and list of cards?

## routes

<http://localhost:3000/> (root route-not implemented)

GET POST <http://localhost:3000/users>
GET PUT <http://localhost:3000/users/:userId>
PUT <http://localhost:3000/users/author/:userId>

GET POST <http://localhost:3000/posts>
GET PUT DELETE <http://localhost:3000/posts/:postId>
GET <http://localhost:3000/posts/:userId/posts>

POST <http://localhost:3000/signup/posts>

GET POST <http://localhost:3000/posts/:postId/comments>
GET PUT DELETE <http://localhost:3000/posts/:postId/comments/:commentId>
/posts/:postId/comments
POST <http://localhost:3000/login>

DELETE <http://localhost:3000/logout>

POST <http://localhost:3000/token/refresh>

commentRoutes
.route('/')
.get(customJwtAuth, commentController.getAllComments)
.post(customJwtAuth, commentController.createComment);
commentRoutes
.route('/:commentId')
.get(customJwtAuth, commentController.getCommentById);
commentRoutes
.route('/:commentId')
.put(customJwtAuth, commentController.updateComment);
commentRoutes
.route('/:commentId')
.delete(customJwtAuth, commentController.deleteComment);

postRoutes
.route('/')
.get(customJwtAuth, postController.getAllPosts)
.post(customJwtAuth, postController.createPost);
postRoutes.route('/:postId').get(customJwtAuth, postController.getPostById);
postRoutes.route('/:postId').put(customJwtAuth, postController.updatePostById);
postRoutes
.route('/:postId')
.delete(customJwtAuth, postController.deletePostById);
postRoutes
.route('/:userId/posts')
.get(customJwtAuth, postController.getAllPostsByUser);

userRoutes
.route('/')
.get(customJwtAuth, userController.getAllUsers)
.post(userController.createUser);
userRoutes.route('/:userId').get(customJwtAuth, userController.getUserById);
userRoutes.route('/:userId').put(customJwtAuth, userController.updateUser);
userRoutes
.route('/author/:userId')
.put(customJwtAuth, userController.getUserDetails);

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/posts/:postId/comments', commentRoutes);
router.use('/signup', signupRoute);
router.use('/login', loginRoute);
router.use('/token', tokenRoutes);
router.use('/logout', logoutRoute);
export default router;
