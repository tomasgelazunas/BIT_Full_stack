<?php
class AddVideoController
{
    public static function init()
    {
        if (isValidPost(['vid', 'name', 'description', 'category'])) {
            $vid = $_POST['vid'];
            $name = $_POST['name'];
            $description = $_POST['description'];
            $category = $_POST['category'];

            if (strlen($vid) !== 11) {
                $err = "<div style='text-align: center'>To short video Id. It should be 11 char. Exp. <span>https://www.youtube.com/watch?v=</span><strong>NxW_X4kzeus</strong></div>";
            } elseif (self::isValidLength($name, 2, 100)) {
                $err = "<div style='text-align: center'>Wrong name length. It should contain atleast 2 and max. 100 characters.</div>";
            } elseif (self::isValidLength($description, 2, 1000)) {
                $err = "<div style='text-align: center'>Wrong description length. It should contain atleast 2 and max. 1000 characters.</div>";
            } else {
                self::saveVideo($vid, $name, $description, $category);
                $success = "<div style='text-align: center'>Video was successfully added!</div>";
            }
            return [isset($err) ? $err : '', isset($success) ? $success : ''];
        }
    }

    private static function isValidLength(string $string, int $minimum, int $maximum): bool
    {
        $l = strlen($string);

        return $l < $minimum OR $l > $maximum;
    }

    private static function saveVideo(string $vid, string $name, string $description, int $category): void
    {
        global $data;

        S::insert(
            'videos',
            'vid, name, description, category, uid',
            ':vid, :name, :description, :category, :uid',
            [
                ':vid' => $vid,
                ':name' => $name,
                ':description' => $description,
                ':category' => $category,
                ':uid' => $data['id']
            ]
        );
    }
}

?>