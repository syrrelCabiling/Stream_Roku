<?php
    require('connect.php');

    function getUser($conn) {
        // validate thet the POST method is working from our JS file
        $username = $_POST["username"];
        // echo $username; 

        $getUser = 'SELECT * FROM tbl_user where user_name="'.$username.'"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }

    function getMovie($conn) {
        // validate thet the POST method is working from our JS file
        $movie = $_POST["movie_name"];
        // echo $username; 

        $getMovie = 'SELECT * FROM tbl_movies where movie_name="'.$movie.'"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }

    
