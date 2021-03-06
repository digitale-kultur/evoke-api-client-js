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


import ApiClient from './ApiClient';
import ContactCategory from './model/ContactCategory';
import ContactMessage from './model/ContactMessage';
import Registration from './model/Registration';
import Rfc7807 from './model/Rfc7807';
import ContactApi from './api/ContactApi';
import RegistrationApi from './api/RegistrationApi';


/**
* This_API_provides_endpoints_used_by_the_Evoke_demoparty_website_brbra_hrefhttps__www_evoke_eu_imprint_Imprint_abra_hrefhttps__www_evoke_eu_privacy_Privacy_Information_a.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DigitaleKulturEvokeApiClientJs = require('index'); // See note below*.
* var xxxSvc = new DigitaleKulturEvokeApiClientJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DigitaleKulturEvokeApiClientJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DigitaleKulturEvokeApiClientJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DigitaleKulturEvokeApiClientJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ContactCategory model constructor.
     * @property {module:model/ContactCategory}
     */
    ContactCategory,

    /**
     * The ContactMessage model constructor.
     * @property {module:model/ContactMessage}
     */
    ContactMessage,

    /**
     * The Registration model constructor.
     * @property {module:model/Registration}
     */
    Registration,

    /**
     * The Rfc7807 model constructor.
     * @property {module:model/Rfc7807}
     */
    Rfc7807,

    /**
    * The ContactApi service constructor.
    * @property {module:api/ContactApi}
    */
    ContactApi,

    /**
    * The RegistrationApi service constructor.
    * @property {module:api/RegistrationApi}
    */
    RegistrationApi
};
