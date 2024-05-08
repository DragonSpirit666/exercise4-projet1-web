// Justin Morand et Zachary Deschênes-Tremblay
const charactersData = require('../data');

/**
 * Donne la liste des personnages.
 *
 * @param {Object} req Informations de la requête.
 * @param {Object} res Réponse à la requête.
 */
module.exports.index = (req, res) => {
  res.json(charactersData);
};

/**
 * Ajoute un personnage.
 *
 * @param {Object} req Informations de la requête.
 * @param {Object} res Réponse à la requête.
 */
module.exports.store = (req, res) => {
  const { name, realname } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Le nom est requis' });
  } else {
    const id = charactersData.length + 1;
    const newCharacter = { id, name, realname };
    charactersData.push(newCharacter);
    res.status(201).json(newCharacter);
  }
};
/**
 * Met à jour un personnage.
 *
 * @param {Object} req Informations de la requête.
 * @param {Object} res Réponse à la requête.
 */
module.exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, realname } = req.body;
  const character = charactersData.find(char => char.id === id);

  if (!character) {
    const newCharacter = { id, name, realname };
    charactersData.push(newCharacter);
    res.status(201).json(newCharacter);
  } else {
    character.name = name;
    character.realname = realname;
    res.status(200).json(character);
  }
};
/**
 * Affiche un personnage.
 *
 * @param {Object} req Informations de la requête.
 * @param {Object} res Réponse à la requête.
 */
module.exports.show = (req, res) => {
  const id = parseInt(req.params.id);
  const character = charactersData.find(char => char.id === id);
  if (!character) {
    res.status(404).json({ error: 'Personnage pas trouvé' });
  } else {
    res.status(200).json(character);
  }
};
/**
 * Supprime un personnage.
 *
 * @param {Object} req Informations de la requête.
 * @param {Object} res Réponse à la requête.
 */
module.exports.delete = (req, res) => {
  res.status(405);
  const id = parseInt(req.params.id);
  const character = charactersData.find(char => char.id === id);
  if (!character) {
    res.status(404).json({ error: 'Personnage pas trouvé' });
  } else {
    charactersData.delete(req.params.id);
    res.status(200).json(character);
  }
};
