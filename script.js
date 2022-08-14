const check = function () {

    if (document.getElementById('password').value == "" && document.getElementById('confirmPassword').value == "") {
        document.getElementById('message').textContent = '';
        document.getElementById('password').style.borderWidth = '1px';
        document.getElementById('confirmPassword').style.borderWidth = '1px'
        document.getElementById('password').style.borderColor = '#999';
        document.getElementById('confirmPassword').style.borderColor = '#999';
        document.getElementById('password').style.borderColor = '#999';
        document.getElementById('password').focus()
        document.getElementById('confirmPassword').focus()
    } else if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
        document.getElementById('message').textContent = 'Passwords matching';
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').style.fontFamily = 'Roboto';
        document.getElementById("submit").disabled = false;
        document.getElementById('password').style.borderWidth = '2px';
        document.getElementById('confirmPassword').style.borderWidth = '2px'
        document.getElementById('password').style.borderColor = 'green';
        document.getElementById('confirmPassword').style.borderColor = 'green';
    } else {
        document.getElementById('message').textContent = 'Passwords do not match';
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').style.fontFamily = 'Roboto';
        document.getElementById("submit").disabled = true;
        document.getElementById('password').style.borderWidth = '2px';
        document.getElementById('confirmPassword').style.borderWidth = '2px'
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirmPassword').style.borderColor = 'red';
    }
}


const phone = function () {


    const regex = '^[0-9]*$';
    
    if (document.getElementById('tel').value.length == 10 && !document.getElementById('tel').value.match(regex)) {
        document.getElementById('tel').style.borderColor = 'red';
    }
    
    else if (document.getElementById('tel').value.length == 10 && document.getElementById('tel').value.match(regex)) {
        document.getElementById('tel').style.borderColor = 'green';
    }
      
    else if (document.getElementById('tel').value.length == 0 && document.getElementById('tel').value.length < 10) {
        document.getElementById('tel').style.borderColor = '#999'
    }

    else{
        document.getElementById('tel').style.borderColor='#1180FF'
    }

}