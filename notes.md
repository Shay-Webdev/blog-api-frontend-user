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
