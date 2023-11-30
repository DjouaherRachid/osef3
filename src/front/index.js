// On utilise querySelector Pour selectionner le composant dont on va changer le contenu et le bouton qui activera ce changement
const div = document.querySelector("#data-to-replace");


// On crée une fonction qui va permettre la mise à jour de notre element de la DOM
function fetchContent(clicked_id) {
  // On fait la requête vers l'API:
  // Protocole: http
  // hostname: localhost (alias 'api' de docker-compose inaccessible depuis le client)
  // port: 8081 (Exposé pour l'API)
  // chemin: index.php/hello (Pour n'avoir que "hello", il faut utiliser le rewrite engine de Apache)
  switch (clicked_id) {
    case 'fetch-mom':
        fetch("http://localhost:8081/index.php/mom")
        .then((res) => {
          // Parser le retour de la requête en JSON
          res.json().then((content) => {
            // Afficher le contenu du retour de la requête
            div.innerHTML = content.message;
          });
        })
        // Afficher l'erreur s'il y en a une
        .catch((err) => console.log(err));
        break;

        case 'fetch-world':
            fetch("http://localhost:8081/index.php/world")
            .then((res) => {
              // Parser le retour de la requête en JSON
              res.json().then((content) => {
                // Afficher le contenu du retour de la requête
                div.innerHTML = content.message;
              });
            })
            // Afficher l'erreur s'il y en a une
            .catch((err) => console.log(err));
        break;

    case 'fetch-catto':
        fetch("http://localhost:8081/index.php/catto")
        .then((res) => {
          // Parser le retour de la requête en JSON
          res.json().then((content) => {
            // Afficher le contenu du retour de la requête
            div.innerHTML = content.message;
          });
        })
        // Afficher l'erreur s'il y en a une
        .catch((err) => console.log(err));
    break;

    case 'fetch-doggo':
        fetch("http://localhost:8081/index.php/doggo")
        .then((res) => {
          // Parser le retour de la requête en JSON
          res.json().then((content) => {
            // Afficher le contenu du retour de la requête
            div.innerHTML = content.message;
          });
        })
        // Afficher l'erreur s'il y en a une
        .catch((err) => console.log(err));
    break;
  
    default:
        break;
  }
}

 /* fetch("http://localhost:8081/index.php/mom")
    .then((res) => {
      // Parser le retour de la requête en JSON
      res.json().then((content) => {
        // Afficher le contenu du retour de la requête
        div.innerHTML = content.message;
      });
    })
    // Afficher l'erreur s'il y en a une
    .catch((err) => console.log(err));
} */

// Mettre la fonction sur le bouton pour le faire lancer l'appel API
button.onclick = fetchContent;