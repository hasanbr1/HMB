<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="D.css">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<?php

$fp="";
$ua="";

?>
    <div id="hi">
            <BR>
            <h1 style="padding-left: 150px;">login</h1>
            <form action="" method="post">
                <label for="email">e-mail :</label>
                <input type="email" required class="t" name="email"><br>
                <label for="pw">password :</label>
                <input type="password" required class="t" name="pw">  <br>
                <input type="submit" id="h" value="login" class="li" name="login" style="padding-left: 10px; z-index: 1;">
             
              </form>
             
                 <hr color="black" style="filter: opacity(3%);">
                
                         <BR><BR><BR><BR><BR>
                <p style="margin-left: 28%;">Don't have an account </p>
            <input type="button"  id="hh" value="signup" class="si">

       

        

        </div>



        <div id="by">
            <BR>
           <h1 style="text-align: center;">Signup</h1>
           <form action="" method="post">
            <label for="uname">User name :</label>
            <input type="text" required class="t" name="uname">
        
            <br> 
            <label for="email">e-mail :</label>
            <input type="email" required class="t" name="email">
        
           
              <br>
            <label for="pw">password :</label>
            <input type="password" required class="t" name="pw"> 
            <br>
            <input type="submit" id="ht" value="signup" class="li" style="padding-left: 10px;" name="signup">
           
           </form>
           
          <br><br>
            <hr color="black" style="filter: opacity(3%); z-index: 1;">
            <p style="margin-left: 23%;"> if you already have an account</p>
             <input type="button" id="hb" value="login" class="si">
       

  
         
        </div>
        <?php

  

$sonuc = "localhost";
$vtk = "root";
$ps = "";
$vta = "ders";
$bag = null;
$bag = new mysqli($sonuc, $vtk, $ps, $vta);
if ($bag->connect_error) {
    echo "404";
    exit();
}
if (!$sonuc) {
    echo "error";
}

if (isset($_POST['signup'])) {
    $email = $_POST['email'];
    $pw = $_POST['pw'];
    $uname = $_POST['uname'];

    $signup = $_POST['signup'];

    if (isset($signup)) {
        $sql = "SELECT * FROM `orenci` WHERE email='$email'";
        $result = mysqli_query($bag, $sql);
        if (!$result) {
            die("Error: " . mysqli_error($bag));
        }
        $say = mysqli_num_rows($result);
        if ($say == 1) {
            $ua = "This email is already used";
        } else {
            $sql = "INSERT INTO orenci(uname,email,pw) VALUES ('$uname','$email','$pw')";
            $sonucu = mysqli_query($bag, $sql);
            header("Location: main.html");
            exit();
        }
    }
}

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $pw = $_POST['pw'];

    $login = $_POST['login'];

    if (isset($login)) {

        $sql = "SELECT * FROM `orenci` WHERE email='$email' AND pw='$pw'";
        $result = mysqli_query($bag, $sql);
        $say = mysqli_num_rows($result);
        if ($say > 0) {
            header("Location: main.html");
            exit();
        } else {
           
            $fp = "The password  or email is wrong";

        }
    }
}

$bag->close();
?>
 <p class="er" style=" position: absolute; margin-left: 40%; z-index:2;"><?= $ua;?></p>
 <p class="er" style=" position: absolute; margin-left: 40%;z-index:2;"><?= $fp;?></p>
        <script src="D.js"></script>
</body>
</html>