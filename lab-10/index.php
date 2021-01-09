<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="main.css">
    <title>PHP</title>
</head>

<body>
    <?php
        if ((!empty($_POST['login']) && $_POST['login'] === 'admin') &&
        (!empty($_POST['password']) && $_POST['password'] === '1234qwer')) {
            echo "<h1>Добро пожаловать!</h1>";
            echo "<h3>Логин: " . $_POST['login'] . "</h3>";
            echo "<h3>Пароль: " . $_POST['password'] . "<h3>";
        } else {
           ?>
            <form method="POST">
                <p>Логин:</p><input type="text" name="login" placeholder="admin" /><br />
                <p>Пароль:</p><input type="password" name="password" placeholder="1234qwer" /><br />
                <input type="submit" value="Войти" />
            </form>
            <?php
            if (!empty($_SESSION['error_message'])) {
                echo "<p><b>Не удаётся войти.</b></p>";
                echo "<p>Пожалуйста, проверьте правильность написания логина и пароля.</p>";
            }
            $_SESSION['error_message'] = "Authorisation Error";
        }

        function all($table) {
            $pdo = new PDO("mysql:host=localhost; dbname=test", "root", "");
            $statement = $pdo->prepare("SELECT * FROM  $table");
            $statement->execute();
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }

        function getOne($table, $id) {
            $pdo = new PDO("mysql:host=localhost; dbname=test", "root", "");
            $statement = $pdo->prepare("SELECT * FROM $table WHERE id=:id");
            $statement->bindParam(":id", $id);
            $statement->execute();
            return $statement->fetch(PDO::FETCH_ASSOC);
        }

        function store($table, $data) {
            $pdo = new PDO("mysql:host=localhost; dbname=test", "root", "");
            $keys = array_keys($data);
            $stringOfKeys = implode(',', $keys);
            $placeholders = ":" . implode(', :', $keys);
            $statement = $pdo->prepare("INSERT INTO $table ($stringOfKeys) VALUES ($placeholders)");
            $statement->execute($data);
        }
        // Вывод таблицы tasks
        echo "<pre>";
        echo var_dump(all("tasks"));
        echo "</pre>";
        // Вывод одной задачи
        echo "<pre>";
        echo var_dump(getOne("tasks", 1));
        echo "</pre>";
        // Добавление задач
        $array = [
            "title" => "title",
            "content" => "content"
        ];
        store("tasks", $array);
    ?>
</body>

</html>