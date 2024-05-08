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
  let { name, realname } = req.body;
  const id = parseInt(req.params.id);
  const character = charactersData.find(char => char.id === id);

  if (!character) {
    res.status(404).json({ error: 'Personnage pas trouvé' });
  } else {
    if (!realname) {
      realname = character.realname;
    } else if (!name) {
      name = character.name;
    }

    const newCharacter = { id, name, realname };
    charactersData.splice(charactersData.indexOf(character), 1);
    charactersData.push(newCharacter);
    res.json(newCharacter);
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
    res.json(character);
  }
};

/**
 * Supprime un personnage.
 *
 * @param {Object} req Informations de la requête.
 * @param {Object} res Réponse à la requête.
 */
module.exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  const character = charactersData.find(char => char.id === id);
  if (!character) {
    res.status(404).json({ error: 'Personnage pas trouvé' });
  } else {
    charactersData.splice(charactersData.indexOf(character), 1);
    res.json(character);
  }
};
