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

import ApiClient from '../ApiClient';

/**
 * The ContactMessage model module.
 * @module model/ContactMessage
 * @version 0.1.0
 */
class ContactMessage {
    /**
     * Constructs a new <code>ContactMessage</code>.
     * Contact message model
     * @alias module:model/ContactMessage
     */
    constructor() { 
        
        ContactMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactMessage} obj Optional instance to populate.
     * @return {module:model/ContactMessage} The populated <code>ContactMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactMessage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('g-recaptcha-response')) {
                obj['g-recaptcha-response'] = ApiClient.convertToType(data['g-recaptcha-response'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the contact message
 * @member {Number} id
 */
ContactMessage.prototype['id'] = undefined;

/**
 * ID of the contact category
 * @member {Number} category_id
 */
ContactMessage.prototype['category_id'] = undefined;

/**
 * Name/Nickname of the sender
 * @member {String} name
 */
ContactMessage.prototype['name'] = undefined;

/**
 * Email of the sender
 * @member {String} email
 */
ContactMessage.prototype['email'] = undefined;

/**
 * Subject by the sender
 * @member {String} subject
 */
ContactMessage.prototype['subject'] = undefined;

/**
 * Message by the sender
 * @member {String} message
 */
ContactMessage.prototype['message'] = undefined;

/**
 * reCaptcha response to be verified server side
 * @member {String} g-recaptcha-response
 */
ContactMessage.prototype['g-recaptcha-response'] = undefined;






export default ContactMessage;
