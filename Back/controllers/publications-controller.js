const { request, response } = require("express");
const Publication = require("../models/publications-model");

const getPublication = async (req = request, res = response) => {
  try {
    const publications = await Publication.find().sort({ createdAt: -1 });

    res.json({
      msg: "Lista de Publicacions",
      publications,
    });
  } catch (error) {
    res.status(500).send({ message: `Process failure ${error.message}` });
  }
};

const postPublication = async (req = request, res = response) => {
  const { filename } = req.file;
  const { texto } = req.body;

  try {
    const publication = new Publication({
      imagen: filename,
      texto,
    });
    await publication.save();
    res.json({
      msg: "Publicación creada",
      publication,
    });
  } catch (error) {
    res.status(500).send({ message: `Process failure ${error.message}` });
  }
};

const putPublication = async (req = request, res = response) => {
  const { id } = req.params;
  const { texto, likes } = req.body;

  try {
    const publication = await Publication.findByIdAndUpdate(
      id,
      {
        texto,
        likes,
      },
      { new: true }
    );

    res.json({
      msg: "Publicación Atualizada",
      publication,
    });
  } catch (error) {
    res.status(500).send({ message: `Process failure ${error.message}` });
  }
};

module.exports = {
  getPublication,
  postPublication,
  putPublication,
};
