module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    // Handle USERNAME
    if (username.trim() === '') {
        errors.username = 'Username must not be empty';
    }
    // Handle PASSWORD
    if (password.trim() === '') {
        errors.password = 'Password must not be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}

