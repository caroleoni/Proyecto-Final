const { Router } = require('express');
const users = require('./users')
const company = require('./company')
const techs = require('./techs')
const jobs = require('./jobs')
const appliedJob = require('./appliedJob.js')

const router = Router();

router.use('/users', users)
router.use('/company', company)
router.use('/techs', techs)
router.use('/jobs', jobs)
router.use('/appliedJob', appliedJob)

module.exports = router;