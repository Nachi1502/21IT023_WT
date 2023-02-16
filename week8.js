function doValidation(event)
{
    let x = document.getElementById('Email').value;
    let y = document.getElementById('Password').value;
    
    if(x.length == 0 || x[0]==' ')
    {
        document.getElementById('UsernameErr').textContent = 'Enter Username';
        event.preventDefault();
    }
    else{
        document.getElementById('UsernameErr').textContent = null;
    }

    if(y.length == 0 || y[0]== ' ')
    {
        document.getElementById('PasswordErr').textContent = 'Enter Password';
        event.preventDefault();
    }
    else{
        document.getElementById('PasswordErr').textContent = null;
    }

    

}
