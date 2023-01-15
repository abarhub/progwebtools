# Monté de version

* Mise à jour d'angular
La documentation pour la monté de version d'angular est [ici](https://update.angular.io/)
```shell
ng update @angular/core @angular/cli
```
Si ça ne marche pas, il faut faire :
```shell
npm install
ng update --force @angular/core @angular/cli
```

* Mise à jour de material degin
```shell
ng update @angular/material
```

* Mise à jour de ngx-codemirror

```shell
npm install @ctrl/ngx-codemirror codemirror@5
```

* Mise à jour de ngx-filesaver

```shell
npm install file-saver ngx-filesaver
```

* Mise à jour de js-yaml

```shell
npm install js-yaml @types/js-yaml
```

* Analyse des problèmes de sécurité
  Pour analyser les problèmes de sécurité, il faut executer :
```shell
npm audit
```

Ensuite pour les corriger, il faut executer :
```shell
npm audit fix
```

* Test de la mise à jour

Il faut vérifier que tout fonctionne. Pour cela, il faut lancer l'application et vérifier qu'elle fonctionne.
Ensuite il faut lancer les tests unitaires avec la commande :
 ```shell
npm run test_no_ui
```
