# Social Media Sample Project

## Database Setup

``` shell
 $ mysql -u root ( when password does not exist) 
 ``` 
``` shell
 $ mysql -u root -p ( when password exist) 
 ```

 ```mysql
create database cbsocialmediadb;

create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';

grant all privileges on cbsocialmediadb.*  to cbsocialuser;

flush privileges;
 ```

 ## Project Structure

 ### Backend(Server)

 ```backend
 src
├───controllers		# functions to connect routes to db operations
├───db			# db connection and model definitions
├───public		# html/js/css files for static part of site
├───routes		# express middlewares (route wise)				
└───utils		# username generation function
 ```

 
 ### Frontend(Client-Side)

 ```backend
 src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # own own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
 ```

 ## Business-Logic

 ### Users
 1.create users this will create a new user with a random username
### Posts
1.create post this will create a new post, required fields are

a. username (the author of this post)

b. title

c. body

2.show all posts list all existing posts, we should have following filtering support

a. filter by username

b. filter by userid (search by id of particular user)
 ### Comments
1.show all comments (under a post)

2.add a comment

## API Documentation

``users
``

***POST /users***

Creates a new user with random username and an user id

***GET /users/{userid}***

Get an user with a given user id

***GET /users/{username}***

Get an user with a given username

***GET /users/***

Get a list of all users

``Posts
``

***GET /posts***

Get all posts by everyone

***POST /posts***

Create a new post. Required fields in body -
```req
userId=
title=
body=
```
***GET /posts/{userid}***

Get all posts by particular userid

***POST /posts/{username}***

Get all posts by particular username

``Comments
``

***GET /comments/{postid}***

Get all comments on particular post

***POST /posts***

Create a new comment. Required fields in body -
```req
userId=
title=
body=
postId=
```
