var express = require('express');
var router = require("express").Router();

var usersController = require("../controller/users.controller");
var commentController = require("../controller/comments.controller");
var InformationsController = require("../controller/informations.controller");
const verifyToken = require("../validate.token");


router.get('/', (req, res) => {
    res.send('Connexion-api-RNCO-system-privé')
    })

    // user

    router.post('/createUser',verifyToken, usersController.createUser);
    router.post('/connexionUser', usersController.authWithToken);
    router.get('/allUser',verifyToken, usersController.getAllUser);
    router.post('/deleteUser',verifyToken, usersController.deleteUser);

    // comment

    router.post('/createComment', commentController.createArticle);
    router.get('/getAllComment', commentController.getAllComments);
    router.get('/getAllCommentByValidate', commentController.getCommentsByValidate);
    router.put('/updateComment',verifyToken, commentController.updateComments);
    router.post('/deleteComment',verifyToken, commentController.deleteComments);

     // informations

     router.post('/createInformations',verifyToken, InformationsController.createInformation);
     router.get('/getAllInformations',verifyToken, InformationsController.getAllInformations);
     router.post('/deleteInformations',verifyToken, InformationsController.deleteInformations);

    module.exports = router;