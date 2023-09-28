<?php
require_once 'pagination.php';
?>

<div class="container">
    <div class="d-flex my-5 justify-content-md-center">
        <?php
        foreach (getAllCategories() as $category) {
            echo "
            <a href='?pg=&category=" . $category['id'] . "'>
            <button class='btn btn-outline-secondary mx-2 my-sm-0' type='submit'>" . $category['name'] . "</button>
            </a>
            ";
        }
        ?>
    </div>

    <div class="row row-cols-5">
        <?php
        $category = isset($_GET['category']) ? preg_replace("/[^0-9]/", "", $_GET['category']) : '';

        $where = "";
        $arr = [];

        if (!empty($_GET['category'])) {
            $categoryExists = S::fetchColumn('id', 'categories', 'id=:id', [':id' => $category]);

            if ($categoryExists) {
                $where = "WHERE category=:category";
                $arr[':category'] = $category;
            }
        } elseif (!empty($_GET['search'])) {
            $where = "WHERE name LIKE :name";
            $arr[':name'] = '%'.$search.'%';
        }

        $max = 20;
        $start = ($page - 1) * $max;

        $videos = S::fetchAll('SELECT * FROM videos ' . $where . ' ORDER BY views DESC LIMIT '.$start.', '.$max, $arr);

        if ($videos) {
            $where = !empty($where) ? str_replace('WHERE', '', $where) : 'id>0';

            $countVideos = S::countObjects('videos', str_replace('WHERE', '', $where), $arr);
            $pagination = new Pagination($countVideos, $max);

            echo $pagination->display('mb-4');

            foreach ($videos as $video) {
                showVideo($video);
            }

            echo $pagination->display();
        } else {
            echo "<div class='display-6 w-100' style='text-align: center'><span style='color: #dc3545'>No results</span>. Please refine your search.</div>";
        }
        ?>
    </div>
</div>