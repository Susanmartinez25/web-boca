// Mostrar / ocultar contraseña
function togglePassword() {
    const $passwordField = $('#password');
    const type = $passwordField.attr('type') === 'password' ? 'text' : 'password';
    $passwordField.attr('type', type);
}

function toggleNewPassword() {
    const $passwordField = $('#new-password');
    const type = $passwordField.attr('type') === 'password' ? 'text' : 'password';
    $passwordField.attr('type', type);
}

// Validar login
function validateLogin() {
    const username = $('#username').val();
    const password = $('#password').val();
    const $error = $('#error');

    if (username === "system" && password === "Boca") {
        alert("Inicio de sesión exitoso");
        $error.hide();
    } else {
        $error.fadeIn();
    }
}

// Mostrar formularios
function showRegister() {
    $('.login-container').fadeOut(200, function () {
        $('#register-box').fadeIn(200);
    });
}

function showLogin() {
    $('.login-container').fadeOut(200, function () {
        $('#login-box').fadeIn(200);
    });
}

function showForgotPassword() {
    $('.login-container').fadeOut(200, function () {
        $('#forgot-password-box').fadeIn(200);
    });
}

// Registro
function registerUser() {
    const newUsername = $('#new-username').val();
    const newPassword = $('#new-password').val();

    if (newUsername && newPassword) {
        alert("Usuario registrado con éxito");
        showLogin();
    } else {
        alert("Por favor, complete todos los campos");
    }
}

// Recuperación de contraseña (solo simulado)
function recoverPassword() {
    const username = $('#forgot-username').val();
    if (username) {
        alert(`Se ha enviado un correo de recuperación para el usuario "${username}"`);
        showLogin();
    } else {
        alert("Por favor, ingrese su nombre de usuario.");
    }
}

