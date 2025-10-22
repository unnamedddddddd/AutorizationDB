function GetUserData() {
   
    let login = GetUserLogin()
    let password = GetUserPassword()

   AddUserDB(login, password)
    
}

function AddUserDB(login, password) {
    const UserData = {
        id: 1,
        login,
        password
    }

    console.table(UserData)
}

function GetUserLogin() {
    const login = document.getElementById("login").value.trim();

    if (!login) {
        alert("Error login");
        return; 
    }
    return login;
}

function GetUserPassword() {
    const password = document.getElementById("password").value.trim();
    
    if (!password) {
        alert("Error password");
        return; 
    }
    return password;
}