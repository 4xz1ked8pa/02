var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport,db){

	passport.use('login', new LocalStrategy({passReqToCallback : true},
        function(req, username, password, done) { 
            // check in orientDB if a user with username exists or not
            db.select().from('Users').where({username: username}).all().then(function(user) {
				if (user.length != 1) {
					console.log('User '+username+' does not exist.');
					return done(null,false);
				} else {
					if (isValidPassword(user[0],password))
						return done(null,user[0]);
					else {
						console.log('Password is invalid')
						return done(null,false);
					}
				}
					
			});
        }
    ));	

	var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
	}
}