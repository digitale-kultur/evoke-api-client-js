/**
 * Evoke Website API
 * This API provides endpoints used by the Evoke demoparty website. <br><br><a href='https://www.evoke.eu/imprint/'>Imprint</a><br><a href='https://www.evoke.eu/privacy/'>Privacy Information</a>
 *
 * OpenAPI spec version: 0.1.0
 * Contact: api@evoke.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EvokeWebsiteApi);
  }
}(this, function(expect, EvokeWebsiteApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EvokeWebsiteApi.ContactMessage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ContactMessage', function() {
    it('should create an instance of ContactMessage', function() {
      // uncomment below and update the code to test ContactMessage
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be.a(EvokeWebsiteApi.ContactMessage);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

    it('should have the property gRecaptchaResponse (base name: "g-recaptcha-response")', function() {
      // uncomment below and update the code to test the property gRecaptchaResponse
      //var instane = new EvokeWebsiteApi.ContactMessage();
      //expect(instance).to.be();
    });

  });

}));