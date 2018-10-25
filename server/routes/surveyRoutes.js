const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Mailer = ('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post(
    '/api/surveys', requireLogin, requireCredits, (req, res) => {     
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        body,
        subject,
        recipients: recipients.split(',').map(email => ({ email: emai.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });

      const Mailer = new Mailer(survey, surveyTemplate(survey));
  });
};