<?php
include_once './controllers/addVideo.php';

list($err, $success) = AddVideoController::init();

echo '<h4 class="my-4 text-center">Add video</h4>';

echo validatePostResult($err, $success);
?>

<form class="addvideo d-flex flex-wrap flex-column justify-content-center align-content-center align-items-stretch" method="POST" action="?pg=addVideo">
    <div class="form-group my-2">
        <label for="vid">Id:</label>
        <input type="text" id="vid" name="vid" class="form-control" placeholder="Video id">
    </div>
    <div class="form-group my-2">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" class="form-control" placeholder="Video name">
    </div>
    <div class="form-group my-2">
        <label for="description">Description:</label>
        <input type="text" id="description" name="description" class="form-control" placeholder="Video description">
    </div>
    <div class="form-group my-2">
    <label for="category">Category:</label>
    <select class="form-control" id="category" name="category">
        <?php
        foreach(getAllCategories() as $category) {
            echo "<option value=".$category['id'].">".$category['name']."</option>";
        }
        ?>
    </select>
    </div>
    <button class="btn btn-danger">Add video</button>
</form>