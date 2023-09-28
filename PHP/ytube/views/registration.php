<?php
require_once './controllers/registration.php';

userCheck('isUser');

list($err, $success) = RegistrationController::init();

echo '<h4 class="my-4 text-center">Registration</h4>';
echo validatePostResult($err, $success);
?>

<form class="logup d-flex flex-wrap flex-column justify-content-center align-content-center align-items-stretch" method="POST" action="?pg=registration">

    <div class="form-group my-2">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" class="form-control" placeholder="Name">
    </div>

    <div class="form-group my-2">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" name="surname" class="form-control" placeholder="Surname">
    </div>

    <div class="form-group my-2">
        <label for="nick">Create your nickname (username):</label>
        <input type="text" id="nick" name="nick" class="form-control" placeholder="Nickname">
    </div>

    <div class="form-group my-2">
        <label for="pass">Password:</label>
        <input type="password" id="pass" name="pass" class="form-control" placeholder="Password">
    </div>

    <div class="form-group my-2">
        <label for="pass2">Repeat password:</label>
        <input type="password" id="pass2" name="pass2" class="form-control" placeholder="Repeat password">
    </div>
    <button class="btn btn-secondary">Create an account</button>
</form>