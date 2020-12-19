var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    res.send('Connexion-api-RNCO-system-privé')
    })

    module.exports = router;