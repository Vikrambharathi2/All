
    $(document).ready(function() {
    $('#register-form').submit(function(event) {
      event.preventDefault();
  
      var usernameEmail = $('#username-email').val();
      var password = $('#password').val();
      var retypePassword = $('#retype-password').val();
  
      // Validation
      if (usernameEmail.length === 0 || password.length === 0 || retypePassword.length === 0) {
        $('#response').text('All fields are required');
        return;
      }
  
      if (password !== retypePassword) {
        $('#response').text('Passwords do not match');
        return;
      }
  
      $.ajax({
        type: 'POST',
        url: 'register.php',
        data: {
          usernameEmail: usernameEmail,
          password: password
        },
        success: function(response) {
          $('#response').text(response);
        },
        error: function(xhr, status, error) {
          console.log(xhr.responseText);
        }
      });
    });
  });