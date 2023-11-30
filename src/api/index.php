<?php
// On renvoie du JSON, car c'est un API
header("Content-Type: application/json; charset=utf8");
// Autoriser le front(Et à vrai dire n'importe quel host) à utiliser cet API pour s'afficher
header("Access-Control-Allow-Origin: *");


// Récupérer la requête en cours de traitement et en isoler le path
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// séparer le path dans un tableau en se basant sur les '/'
$uri = explode( '/', $uri );


// On n'expose que la route "hello" pour le moment.
// Les autres renvoient une erreur "Not Found"

switch ($uri[2]) {
    case 'mom':
        header('HTTP/1.1 200 mom');
        echo "{ \"message\":\"Hi mom !\"}\n";
        //exit();
    break;

    case 'world':
        header('HTTP/1.1 200 world');
        echo "{ \"message\":\"Hi world!\"}\n";
        //exit();
    break;

    case 'doggo':
        header('HTTP/1.1 200 doggo');
        echo "{ \"message\":\"Hi doggo !\"}\n";
        //exit();
    break;

    case 'catto':
        header('HTTP/1.1 200 catto');
        echo "{ \"message\":\"Hi catto !\"}\n";
        //exit();
    break;

    default:
        header("HTTP/1.1 404 Not Found");
        //exit();
        break;
}

/*if ($uri[2] == 'mom') {
    // Si le chemin demandé est "hello", alors on renvoie le header HTTP "OK" et on renvoie un message en JSON.
    header('HTTP/1.1 200 OK');
    echo "{ \"message\":\"Hi mom !\"}\n";
    exit();
} else {
    header("HTTP/1.1 404 Not Found");
    exit();
}*/


?>