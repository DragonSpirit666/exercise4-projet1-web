# Description
Cet API sert à accéder à des personnages variés.

# Démarrage
Vous devez entrez les commandes suivantes dans le dossier parent :
> npm i
> npm run start

## Liste des Personnages

Retourne la liste de tous les personnages.

- **URL** : `/personnages`
- **Méthode** : `GET`
- **Paramètres** : Aucun
- **Réponse** : Liste des personnages au format JSON

## Ajout d'un Personnage

Ajoute un nouveau personnage à la liste.

- **URL** : `/personnages`
- **Méthode** : `POST`
- **Paramètres** : Objet JSON avec les propriétés `name` (nom du personnage) et `realname` (nom réel du personnage).
- **Réponse** :
  - Code 201 si le personnage est ajouté avec succès, avec les détails du personnage ajouté au format JSON.
  - Code 400 si le champ `name` est manquant dans la requête.

## Affichage d'un Personnage

Retourne les détails d'un personnage spécifique.

- **URL** : `/personnages/:id`
- **Méthode** : `GET`
- **Paramètres** : Identifiant (`id`) du personnage dans l'URL.
- **Réponse** :
  - Code 200 avec les détails du personnage au format JSON si le personnage est trouvé.
  - Code 404 si le personnage n'est pas trouvé.

## Mise à Jour d'un Personnage

Met à jour les détails d'un personnage existant.

- **URL** : `/personnages/:id`
- **Méthode** : `PUT`
- **Paramètres** : Identifiant (`id`) du personnage dans l'URL et un objet JSON avec les propriétés `name` (nouveau nom du personnage) et/ou `realname` (nouveau nom réel du personnage).
- **Réponse** :
  - Code 200 avec les détails du personnage mis à jour au format JSON si le personnage est trouvé et mis à jour avec succès.
  - Code 404 si le personnage n'est pas trouvé.

## Suppression d'un Personnage

Supprime un personnage de la liste.

- **URL** : `/personnages/:id`
- **Méthode** : `DELETE`
- **Paramètres** : Identifiant (`id`) du personnage dans l'URL.
- **Réponse** :
  - Code 200 avec les détails du personnage supprimé au format JSON si le personnage est trouvé et supprimé avec succès.
  - Code 404 si le personnage n'est pas trouvé.

