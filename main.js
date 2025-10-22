const GetUserData = () => {
    const login = GetUserLogin()
    const password = GetUserPassword()

    AddUserDB(login, password)
}

const AddUserDB = (login, password) =>  {
    const UserData = {
        id: 1,
        login,
        password
    }

    console.table(UserData)
}

const GetUserLogin = () => {
    const login = document.getElementById("login").value.trim();

    if (!login) {
        alert("Error login");
        return; 
    }
    return login;
}

const GetUserPassword  = () => {
    const password = document.getElementById("password").value.trim();
    
    if (!password) {
        alert("Error password");
        return; 
    }
    return password;
}