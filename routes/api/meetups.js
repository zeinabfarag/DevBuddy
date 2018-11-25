const express = require("express");
const router = express.Router();
const meetup = require("../../database/models/meetups");
const meetups = require("../../client/src/components/groupevents/groups")


router.get('https://api.meetup.com/find/groups?text=' + this.state.query + "&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=" +
    API_KEY, (req, res, next) => {
        console.log("===== user!!======");
        console.log('results :' + meetups.res);
    });

module.exports = router;
