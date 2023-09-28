<?php

class LoginController
{
    public static function init()
    {
        if (isValidPost(['nick', 'pass'])) {
            $nick = strtolower($_POST['nick']);
            $pass = $_POST['pass'];

            if (!userExists($nick)) {
                $err = "<div style='text-align: center'>User with this nickname does't exist.</div>";
            } elseif (!self::isPasswordCorrect($nick, $pass)) {
                $err = "<div style='text-align: center'>Wrong password!</div>";
            } else {
                self::logInUser($nick, $pass);

                header("Location: ?pg=");
            }
        }

        return [isset($err) ? $err : '', isset($success) ? $success : ''];
    }

    private static function isPasswordCorrect(string $nick, string $pass): bool
    {
        global $pepper;

        return S::fetchColumn('id', 'users', 'nick=:nick AND pass=:pass', [
            ':nick' => $nick,
            ':pass' => sha1($pepper . $pass . getSalt('nick', $nick))
        ]);
    }

    private static function logInUser(string $nick, string $pass): void
    {
        global $pepper;

        $_SESSION['loggedIn'] = true;
        $_SESSION['nick'] = $nick;
        $_SESSION['pass'] = sha1($pepper . $pass . getSalt('nick', $nick));
    }
}
?>