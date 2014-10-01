/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util');


/**
 * Creates an instance of `Strategy`.
 *
 * This is if you want to mix and match basic and local auth. Like if you are
 * making an API and you want people to be able to set the Authorization header
 * or if you want them(or your code) to access the api while logged into a web
 * browser.
 *
 * Examples:
 *
 *     passport.use(new RequireUserStrategy());
 *
 * @constructor
 * @api public
 */
function Strategy() {
  passport.Strategy.call(this);
  this.name = 'requireuser';
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Pass authentication without verifying credentials.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req) {
  if (!req.user) {
    this.fail();
  } else {
    this.pass();
  }
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
