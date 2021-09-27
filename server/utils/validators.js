module.exports.validateLoginInput = (email, password) => {
    const errors = {};
    // Handle USERNAME
    if (email.trim() === '') {
        errors.email = 'Username must not be empty';
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

