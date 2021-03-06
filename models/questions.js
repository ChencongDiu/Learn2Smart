/*
* @Author: x
* @Date:   2018-02-06 15:55:51
* @Last Modified by:   ChencongDiu
* @Last Modified time: 2018-02-26 13:38:52
*/
const Question = require('../lib/mongo').Question;

module.exports = {
  // create a question
  create: function create(question) {
    return Question
      .create(question)
      .exec();
  },

  // delete question by _id
  deleteQuestionById: function deleteQuestionById(questionId) {
    return Question
      .deleteOne({_id: questionId})
      .exec()
  },

  // get all questions
  getQuestion: function getQuestion() {
    return Question
      .find()
      .sort({subject_id: 1, set_id: 1, session_id: 1, question_id: 1})
      .exec()
  },

  // get a question by _id
  getQuestionById: function getQuestionById(questionId) {
    return Question
      .findOne({_id: questionId})
      .exec()
  },

  // get questions by subject_id, set_id, session_id
  getQuestionBySubjectSetSession: function getQuestionBySubjectSetSession(subject_id, set_id, session_id) {
    return Question
      .find({subject_id: subject_id, set_id: set_id, session_id: session_id})
      .sort({question_id: -1})
      .exec()
  },

  // get a question by subject_id, set_id, session_id, question_id
  getQuestionBySubjectSetSessionQuestion: function getQuestionBySubjectSetSessionQuestion(subject_id, set_id, session_id, question_id) {
    return Question
      .find({subject_id: subject_id, set_id: set_id, session_id: session_id, question_id: question_id})
      .sort()
      .exec()
  }
};
