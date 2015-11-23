var login = require('./login');

module.exports = function(passport,db){
	
	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('Serializing user: ' + user.username);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
		db.select().from('Users').where({id: id}).all().then(function(user){
			done(null,user);
		});
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport,db);
}