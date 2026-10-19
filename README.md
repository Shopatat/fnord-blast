# Fnord Blast

Un clone inspiré de *Peggle Blast*, sans pubs, sans vies et sans attente, centré sur le pouvoir de **Fnord** : voir les deux prochains rebonds de la bille et enflammer les taquets au contact.

Jouer en ligne : https://shopatat.github.io/fnord-blast/

## Jouer

Ouvre `index.html` dans un navigateur.

- **Souris** : viser, **clic** : tirer (sur mobile : glisser pour viser, lever le doigt pour tirer)
- **R** : recommencer le niveau, **M** : couper le son, **Échap** : retour à la carte

## Règles

- 5 niveaux, 10 billes par niveau. Élimine tous les taquets **orange** et atteins le score demandé.
- Taquet **vert** : déclenche le pouvoir de Fnord tout de suite, puis pour les 2 tirs suivants (guide jusqu'au 2ᵉ rebond et taquets qui brûlent au contact).
- Le multiplicateur monte avec la part d'oranges éliminés (x2, x3, x5).
- Bille supp. quand un seul tir atteint 25 000, 75 000 puis 125 000 points.
- Dernier orange touché : **Fièvre extrême**, des bacs à 10 000 / 50 000 / 100 000 points apparaissent en bas.
- Billes restantes : +5 000 chacune. 1 à 3 étoiles selon le score ; la progression est gardée dans le navigateur.

## Version application (Windows)

```bash
cd app
npm install
npm run pack
```

L'exécutable est généré dans `app/dist/FnordBlast-win32-x64/FnordBlast.exe`.

## Idées suivantes

Autres personnages de Peggle Blast, objectifs spéciaux (gemmes, œufs de phénix), taquets mobiles, boosters gagnés en jouant, plus de niveaux.
