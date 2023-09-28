<?php
require_once './controllers/login.php';

userCheck('isUser');

list($err, $success) = LoginController::init();

echo '<h4 class="my-4 text-center">Login</h4>';
echo validatePostResult($err, $success);
?>

<form class="login d-flex flex-wrap flex-column justify-content-center align-content-center align-items-stretch" method="POST" action="?pg=login">

    <div class="form-group my-2">
        <label for="nick">Your nickname (username):</label>
        <input type="text" id="nick" name="nick" class="form-control" placeholder="Username">
    </div>

    <div class="form-group my-2">
        <label for="pass">Password:</label>
        <input type="password" id="pass" name="pass" class="form-control" placeholder="Password">
    </div>
    <button class="btn btn-dark">Log In</button>
</form>