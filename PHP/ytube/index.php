<?php
session_start();

require_once('config.php');
require_once('sql.php');
require_once('functions.php');

if (isUser) {
    $data = getData();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Videotube</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.jpg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>

        <nav class="navbar navbar-expand-lg pt-4">
            <div class="container">
                <a class="navbar-brand pb-5" href="?pg="><img src="images/VideoTubeLogo.png" title="VideoTube home" alt="site-logo"></a>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav d-flex mx-0">
                        <form method="GET" class="form-inline my-2 my-lg-0 d-flex mb-3">
                            <input class="form-control mr-sm-2" 
                            name="search" 
                            type="search" 
                            placeholder="Enter video name fragment ..."                         
                            value="<?= $search ?>"
                                aria-label="Search">
                            <button class="btn btn-danger my-sm-0" type="submit"><i class="bi bi-search"></i></button>
                        </form>
                    </div>
                    <div class="navbar-nav">
                        <?php if (!isUser): ?>
                            <button class='btn btn-dark mx-2 px-0' style='--bs-btn-padding-y: 0px; --bs-btn-padding-x: 10px; --bs-btn-font-size: 16px; --bs-btn-line-height: 20px;'><a class="nav-item nav-link" style="color: white" href="?pg=login"><i class="bi bi-arrow-down-circle"> </i>Log In</a></button>
                            <button class='btn btn-secondary mx-2 px-0' style='--bs-btn-padding-y: 0px; --bs-btn-padding-x: 10px; --bs-btn-font-size: 16px; --bs-btn-line-height: 20px;'><a class="nav-item nav-link" style="color: white" href="?pg=registration"><i class="bi bi-arrow-up-circle"> </i>Sign Up</a></button>
                        <?php endif; ?>

                        <?php if (isUser): ?>
                            <button class='btn btn-warning mx-2 px-0' style='--bs-btn-padding-y: 0px; --bs-btn-padding-x: 10px; --bs-btn-font-size: 16px; --bs-btn-line-height: 20px;'><a class="nav-item nav-link" href="?pg=addVideo"><i class="bi bi-upload"> </i>Add video</a></button>
                            <button class='btn btn-outline-secondary mx-2 px-0' style='--bs-btn-padding-y: 0px; --bs-btn-padding-x: 10px; --bs-btn-font-size: 16px; --bs-btn-line-height: 20px;'><a class="nav-item nav-link p-0" href="?pg=addVideo">
                            <a class="nav-item nav-link" style="color: black;" href="javascript:void(0)"><i class="bi bi-person-fill"> </i><?php echo $data['nick']?></a>
                            </button>
                            <button class='btn btn-outline-danger mx-2 px-0' style='--bs-btn-padding-y: 0px; --bs-btn-padding-x: 10px; --bs-btn-font-size: 16px; --bs-btn-line-height: 20px;'><a class="nav-item nav-link" href="?pg=logout"><i class="bi bi-x-lg"> </i>Log Out</a></button>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container">
            <?php

            $pg = isset($_GET['pg']) ? $_GET['pg'] : '';

            switch ($pg) {
                case '':
                    include './views/home.php';
                    break;
                case 'registration':
                    include './views/registration.php';
                    break;
                case 'login':
                    include './views/login.php';
                    break;
                case 'addVideo':
                    include './views/addVideo.php';
                    break;
                case 'logout':
                    session_destroy();
                    header('Location: ?pg=');
                    break;
                case 'video':
                    include './views/video.php';
                    break;
            }

            ?>
        </div>
    </main>
</body>

</html>