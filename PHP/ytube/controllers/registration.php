<?php
class RegistrationController
{
    public static function init()
    {
        global $pepper;

        if (isValidPost(['name', 'surname', 'nick', 'pass', 'pass2'])) {

            $name = ucwords($_POST['name']);
            $surname = ucwords($_POST['surname']);
            $nick = strtolower($_POST['nick']);
            $pass = $_POST['pass'];
            $pass2 = $_POST['pass2'];

            if (!self::isValidFieldsLength($name, $surname, $nick, $pass)) {
                $err = "<div style='text-align: center'>Your name/surname and nickname must be at least 3-30 characters long, and password must be 8-30 characters long.</div>";
            } elseif (self::isValidNameFormat($name)) {
                $err = "<div style='text-align: center'>Your Name can't contain any special characters. Only letters.</div>";
            } elseif (self::isValidSurnameFormat($surname)) {
                $err = "<div style='text-align: center'>Your Surname can't contain any special characters. Only letters.</div>";
            } elseif (self::isValidNickFormat($nick)) {
                $err = "<div style='text-align: center'>Your Nickname can't contain any special characters. Only numbers and letters.</div>";
            } elseif (!self::isValidPassFormat($pass)) {
                $err = "<div style='text-align: center'>For security purposes, the password field must contain at least one uppercase character, one number, and one special character.</div>";
            } elseif (!($pass === $pass2)) {
                $err = "<div style='text-align: center'>Passwords do not match!</div>";
            } elseif (userExists($nick)) {
                $err = "<div style='text-align: center'>A user with this nickname already exists. Please choose a different nickname.</div>";
            } else {
                $salt = randomString(8);
                $hashedPass = sha1($pepper . $pass . $salt);

                self::saveUser($name, $surname, $nick, $hashedPass, $salt);

                $success = "<div style='text-align: center'>Congratulations! Your registration is successfull. Now you can login :)</div>";
            }

            return [isset($err) ? $err : '', isset($success) ? $success : ''];
        }

    }

    private static function isValidFieldsLength(string $name, string $surname, string $nick, string $pass): bool
    {
        $namL = strlen($name);
        $surL = strlen($surname);
        $nL = strlen($nick);
        $pL = strlen($pass);

        return !($namL < 3 or $surL < 3 or $nL < 3 or $namL > 30 or $surL > 30 or $nL > 30 or $pL < 8 or $pL > 30);
    }



    private static function isValidNameFormat(string $name): bool
    {
        return preg_match('/[^a-zA-Z]/', $name);

    }

    private static function isValidSurnameFormat(string $surname): bool
    {
        return preg_match('/[^a-zA-Z]/', $surname);

    }

    private static function isValidNickFormat(string $nick): bool
    {
        return preg_match('/[^a-zA-Z0-9]/', $nick);

    }

    private static function isValidPassFormat(string $pass): bool
    {
        return (
            preg_match('#[0-9]#', $pass)
            and
            preg_match('#[A-Z]#', $pass)
            and
            preg_match('/[^a-zA-Z0-9]/', $pass)
        );
    }

    private static function saveUser(string $name, string $surname, string $nick, string $hashedPass, string $salt): void
    {
        S::insert(
            'users',
            'name, surname, nick, pass, salt',
            ':name, :surname, :nick, :pass, :salt',
            [
                ':name' => $name,
                ':surname' => $surname,
                ':nick' => $nick,
                ':pass' => $hashedPass,
                ':salt' => $salt               
            ]
        );
    }
}

?>