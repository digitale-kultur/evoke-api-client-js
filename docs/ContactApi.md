# DigitaleKulturEvokeApiClient.ContactApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](ContactApi.md#createMessage) | **POST** /contact | Send a new message
[**showAllCategories**](ContactApi.md#showAllCategories) | **GET** /contact/categories | Get a list of all contact categories



## createMessage

> createMessage(contactMessage)

Send a new message

### Example

```javascript
import DigitaleKulturEvokeApiClient from 'digitale-kultur/evoke-api-client';

let apiInstance = new DigitaleKulturEvokeApiClient.ContactApi();
let contactMessage = new DigitaleKulturEvokeApiClient.ContactMessage(); // ContactMessage | Information about the message to be sent
apiInstance.createMessage(contactMessage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactMessage** | [**ContactMessage**](ContactMessage.md)| Information about the message to be sent | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showAllCategories

> [ContactCategory] showAllCategories()

Get a list of all contact categories

### Example

```javascript
import DigitaleKulturEvokeApiClient from 'digitale-kultur/evoke-api-client';

let apiInstance = new DigitaleKulturEvokeApiClient.ContactApi();
apiInstance.showAllCategories((error, data, response) => {
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

[**[ContactCategory]**](ContactCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

