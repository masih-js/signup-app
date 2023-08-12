const validate = (data, type) => {
    const errors = {};

    if(type === 'signup') {

        if(!data.name.trim()) {
            errors.name = "Username required";
        }else {
            delete(errors.name);
        };
    
        if(!data.email) {
            errors.email = "Email required";
        }else if(!/\S+@\S+\.\S+/.test(data.email)){
            errors.email = "Email address is not valid";
        }else {
            delete errors.email;
        };
    
        if(!data.password) {
            errors.password = "Password is required";
        }else if(data.password.length < 6) {
            errors.password = "Password need to be 6 characters or more";
        }else {
            delete errors.password;
        }
    
        if(!data.confirmPassword) {
            errors.confirmPassword = "Confirm the password";
        }else if(data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password do not match";
        }else {
            delete errors.confirmPassword;
        };
    
        if(data.isAccepted) {
            delete errors.isAccepted;
        }else {
            errors.isAccepted = "Accept our regulatioms"
        };

    }else if(type === 'login') {
        if(!data.email) {
            errors.email = "Email required";
        }else if(!/\S+@\S+\.\S+/.test(data.email)){
            errors.email = "Email address is not valid";
        }else {
            delete errors.email;
        };
    
        if(!data.password) {
            errors.password = "Password is required";
        }else if(data.password.length < 6) {
            errors.password = "Password need to be 6 characters or more";
        }else {
            delete errors.password;
        }
    }


    return errors;
};

module.exports = validate;