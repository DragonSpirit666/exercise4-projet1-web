const charactersData = require('../data');

module.exports.index = (req, res) => {
  // res.json({ msg: "get", query: req.query });
  res.json(charactersData);
};

module.exports.store = (req, res) => {
  res.json({ msg: "post", body: req.body });

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

  module.exports.update = (req, res) => {
    res.json({ msg: "update", body: req.body });
  };

  module.exports.show = (req, res) => {
    const id = parseInt(req.params.id);
    const character = charactersData.find(char => char.id === id);
    if (!character) {
      res.status(404).json({ error: 'Personnage pas trouvé' });
    } else {
      res.json(character);
    }
  };

  module.exports.delete = (req, res) => {
    res.status(405);
    res.json({ msg: "update", body: req.body });
  };
