# DigitaleKulturEvokeApiClientJs.RegistrationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRegistration**](RegistrationApi.md#createRegistration) | **POST** /registration/{year} | Create a new registration
[**deleteRegistration**](RegistrationApi.md#deleteRegistration) | **DELETE** /registration/{year}/{id} | Delete a single registration
[**numberOfRegistrations**](RegistrationApi.md#numberOfRegistrations) | **GET** /registration/{year}/count | Get the number of registrations
[**showAllCountries**](RegistrationApi.md#showAllCountries) | **GET** /registration/countries | Get a list of countries
[**showAllRegistrations**](RegistrationApi.md#showAllRegistrations) | **GET** /registration/{year} | Get a list of all registrations



## createRegistration

> Registration createRegistration(year, registration)

Create a new registration

### Example

```javascript
import DigitaleKulturEvokeApiClientJs from 'digitale-kultur/evoke-api-client-js';

let apiInstance = new DigitaleKulturEvokeApiClientJs.RegistrationApi();
let year = 2019; // Number | Year to query for
let registration = new DigitaleKulturEvokeApiClientJs.Registration(); // Registration | Information about the user to be added
apiInstance.createRegistration(year, registration, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year to query for | 
 **registration** | [**Registration**](Registration.md)| Information about the user to be added | 

### Return type

[**Registration**](Registration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRegistration

> Object deleteRegistration(year, id, key)

Delete a single registration

### Example

```javascript
import DigitaleKulturEvokeApiClientJs from 'digitale-kultur/evoke-api-client-js';

let apiInstance = new DigitaleKulturEvokeApiClientJs.RegistrationApi();
let year = 2019; // Number | Year to query for
let id = 1; // Number | ID to delete
let key = czC3BzTbyxHCNm1; // String | Hash to authenticate the deletion of this ID
apiInstance.deleteRegistration(year, id, key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year to query for | 
 **id** | **Number**| ID to delete | 
 **key** | **String**| Hash to authenticate the deletion of this ID | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## numberOfRegistrations

> Number numberOfRegistrations(year)

Get the number of registrations

### Example

```javascript
import DigitaleKulturEvokeApiClientJs from 'digitale-kultur/evoke-api-client-js';

let apiInstance = new DigitaleKulturEvokeApiClientJs.RegistrationApi();
let year = 2019; // Number | Year to query for
apiInstance.numberOfRegistrations(year, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year to query for | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showAllCountries

> Object showAllCountries()

Get a list of countries

### Example

```javascript
import DigitaleKulturEvokeApiClientJs from 'digitale-kultur/evoke-api-client-js';

let apiInstance = new DigitaleKulturEvokeApiClientJs.RegistrationApi();
apiInstance.showAllCountries((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showAllRegistrations

> [Registration] showAllRegistrations(year)

Get a list of all registrations

### Example

```javascript
import DigitaleKulturEvokeApiClientJs from 'digitale-kultur/evoke-api-client-js';

let apiInstance = new DigitaleKulturEvokeApiClientJs.RegistrationApi();
let year = 2019; // Number | Year to query for
apiInstance.showAllRegistrations(year, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year to query for | 

### Return type

[**[Registration]**](Registration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

