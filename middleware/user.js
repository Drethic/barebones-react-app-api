const Users = require("../users/users-model.js");

module.exports = {

    validateUserData(action) {

        return async (req, res, next) => {
     
            if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
     
                res.status(404).json({message: "missing user data"});
     
            } else if(action === 'register' && (!req.body.name || !req.body.email || !req.body.password )) {
     
                res.status(404).json({message: "missing name, email or password field"});
     
            } 
            else if(action === 'login' && (!req.body.email || !req.body.password )) {
     
                res.status(404).json({message: "missing email or password field"});
     
            }
            else if(action === 'update' && (!req.body.name || !req.body.email || !req.body.password )) {
     
                res.status(404).json({message: "missing name, email or password field"});
     
            } else {
                next();
            }        
     
        }
    },

    validateUserId: () => { 
    
        return async (req, res, next) => {
           try {
              const user = await Users.findById(req.params.id);
              if(!user) { 
                 res.status(404).json({message: "Record not exist"});
              } else {
                 req.user = user;            
                 next();
              }
     
           } catch(err) {
              next(err);
           }
        }
     },

     isUserUnique: (action) =>  {

        return async (req, res, next) => {
            
            try {  
                    
                const payload = {
                    id: req.params.id || '',
                    email: req.body.email
                }
                
                const user = await Users.checkUser(payload);

                if(user) {
                    return res.status(404).json({message: "Email is already taken"});    
                } else {
                    next();             
                }
     
            } catch (err) {
                  next(err)
            }
        }
     }
}