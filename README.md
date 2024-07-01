<h1 align="center">SKELETOR REACT</h1>

<center>
    <img src="https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png" alt="Vue logo"/>
</center>

<h2>Description</h2>

<p>
    Ceci est un modèle d'application web que le FANLab utilise pour démarrer de nouveaux projets.
    <br/>
    Il est construit en suivant une architecture RESTful API.
    <br/>
    Il comprend 3 couches :
</p>

<ul>
    <li>Couche de présentation (Frontend)</li>
    <li>Couche de logique métier (API Backend)</li>
    <li>Couche de persistance des données (Base de données)</li>
</ul>

<h2>Détail des couches</h2>

<h3>Couche de présentation</h3>

<p>
    La couche de présentation est composée de composants Vue.
    <br/>
    Le code de la couche de présentation est contenu dans le dossier <code>client</code>.
    <br/><br/>
    Chaque composant est un fichier Vue qui contient une balise <code>template</code>, une balise <code>script</code> et une balise <code>style</code>.
    <br/>
    Les composants sont organisés dans un dossier <code>components</code>.
    <br/><br/>
    L'application est convertible en PWA (Progressive Web App) grâce à un service worker.
    <br/>
    Sur mobile, elle peut donc être installée et se comporter comme une application native.
</p>

<h3>Couche de logique métier</h3>

<p>
    La couche de logique métier est composée de routes API gérées par ExpressJS.
    <br/>
    Les services sont organisés dans un dossier <code>server/api</code> à la racine du projet.
    <br/><br/>
    Les services sont injectés dans les composants grâce à un contexte React.
    <br/>
    Ils sont donc accessibles dans toute l'application.
</p>

<h3>Couche de persistance des données</h3>

<p>
    La couche de persistance des données est composée de modèles qui intéragissent avec une base de données MariaDB.
    <br/>
    Chaque modèle est un fichier JavaScript qui exporte une classe.
    <br/>
    Les modèles sont organisés dans un dossier <code>server/models</code>.
    <br/><br/>
    Les modèles sont des classes qui représentent des entités métier.
    <br/>
    Ils sont utilisés par les services pour interagir avec la base de données.
</p>

<h2>Installation</h2>

<h2>Technologies utilisées</h2>

<ul>
    <li><a href="https://vuejs.org/">VueJS</a></li>
    <li><a href="https://router.vuejs.org/">Vue Router</a></li>
    <li><a href="https://vuex.vuejs.org/">Vuex</a></li>
    <li><a href="https://vite-pwa-org.netlify.app/">Vite PWA</a></li>
    <li><a href="https://nodejs.org/fr/">Node.js</a></li>
    <li><a href="https://expressjs.com/fr/">Express</a></li>
    <li><a href="https://mariadb.org/">MariaDB</a></li>
</ul>

<h2>Développement</h2>

<p>
    Pour démarrer le serveur de développement, exécutez la commande suivante :
    <br/>
    installez les dépendances avec :
    <br/>
    <code>npm install</code>
    <br/>
    et
    <br/>
    lancez le serveur de développement :
    <br/>
    <code>npm run dev</code>
</p>

<h2>Production</h2>

<h2>Tests</h2>

<h2>Contributeurs</h2>

<ul>
    <li><a target="_blank" href="https://github.com/clementfavarel">Clément FAVAREL</a></li>
</ul>
