const model = require("../../models");
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

const createArticle = async (req, res) => {
    try {
      const comment = await model.Comment.create(req.body);
      return res.status(201).json({
        comment
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

//   const getArticleByValidate = async (req, res) => {
//     try {
//       const { comment } = req.params;
//       const post = await model.Comment.findOne({
//         where: { validate: comment.validate = true },
//       });
//       if (comment) {
//         return res.status(200).json({ comment });
//       }
//       return res.status(403).send("Aucun commentaires");
//     } catch (error) {
//       return res.status(500).send(error.message);
//     }
//   };

  const getAllComments = async (req, res) => {
    try {
        const comment = await model.Comment.findAll();
        return res.status(200).json({ comment });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateComments = async (req, res) => {
  try {
    console.log(req.body)
    model.Comment.update(req.body, {
      where: { id: req.body.id }
    })
      .then(comments => {
        if (!comments) {
          return res.status(404).send( "comments Not found.");
        }
  
          res.status(200).send({
            comments
          });
        })
      .catch(err => {
        res.status(500).send({err });
      })}
  catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteComments = async (req, res) => {
  try {
    model.Comment.destroy({
      where: {
        id: req.body.id,
      }
    })
      .then(comments => {
        if (!comments) {
          return res.status(404).send( "comments Not found.");
        }
  
          res.status(200).send({
            comments
          });
        })
      .catch(err => {
        res.status(500).send({err });
      })}
  catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
    createArticle,
    // getArticleByValidate,
    getAllComments,
    updateComments,
    deleteComments
}

