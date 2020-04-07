<?php


function getAllMovies(){
    $pdo = Database::getInstance()->getConnection();

    $get_Allmovies_query = 'SELECT * FROM tbl_movies';
    $movies_set = $pdo->query($get_Allmovies_query);
    $get_Allmovies_result = $movies_set->execute();

    $Allmovies = array();

    if($get_Allmovies_result) {
        while($movies = $movies_set->fetch(PDO::FETCH_ASSOC)){
            // parse all the users info like we did for a single and pass them into the users array
            $movies_display = array();

            $movies_display['id'] = $Allmovies['movies_id'];
            $movies_display['movies_cover'] = $Allmovies['movies_cover'];
            $movies_display['movies_title'] = $Allmovies['movies_title'];
            $movies_display['isadmin'] = $Allmovies['isadmin'];

           $Allmovies[] = $movies_display;
    
        }

        return json_encode($Allmovies);
    }else{
        return 'Sorry! There was a problem getting the movies!';
    }

}

// function getAllMovies(){
//     $pdo = Database::getInstance()->getConnection();

//     $get_movies_query = 'SELECT * FROM tbl_movies';
//     $movies = $pdo->query($get_movies_query);

//     if($movies){
//         return $movies;
//     }else{
//         return false;
//     }
// }
