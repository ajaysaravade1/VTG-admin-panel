$loginId=$_POST['loginId'];
$passwd=$_POST['passwd'];
if($username=="vtgadmin@gmail.com" && $password=="vtgadmin")
{    
    header('Location:.\login_demo.html');
}
else
{
    header('Location:.\index.html');
}
