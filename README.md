# Index
* [Create User](#create-user)
* [Get User](#get--user)
* [Get All Users](#get-all-users)

## Create User
**URL**: `/user`
**Method**: `POST`

## Body
- **name** `number` *required*
- **email** `number` *required*
  
### Body Example
```json
{
    "name":"juan", 
    "email":"juan@juan.com"
}
```
  
## Response

- **user** `Object`
  - **_id** `string`
  - **name** `string`
  - **email** `string`
  - **uuid** `string`
  - **createdAt** `string`
  - **updatedAt** `string`
  - **__v** `number`
  
### Response Example
```json
{
    "user": {
        "_id": "6340ebd41e9485f0b590663f",
        "name": "juan",
        "email": "juan@juan.com",
        "uuid": "511b1e71-adf6-4fdb-a921-d3f1b29fff20",
        "createdAt": "2022-10-08T03:17:40.986Z",
        "updatedAt": "2022-10-08T03:17:40.986Z",
        "__v": 0
    }
}
```

## Get User
**URL**: `/user`
**Method**: `GET`

## Query Params
- **uuid** `string` *required*

## Query Example
- **URL**: `/user?uuid=511b1e71-adf6-4fdb-a921-d3f1b29fff20`

## Response

- **user** `Object`
  - **_id** `string`
  - **name** `string`
  - **email** `string`
  - **uuid** `string`
  - **createdAt** `string`
  - **updatedAt** `string`
  - **__v** `number`
  
### Response Example
```json
{
    "user": {
        "_id": "6340ebd41e9485f0b590663f",
        "name": "juan",
        "email": "juan@juan.com",
        "uuid": "511b1e71-adf6-4fdb-a921-d3f1b29fff20",
        "createdAt": "2022-10-08T03:17:40.986Z",
        "updatedAt": "2022-10-08T03:17:40.986Z",
        "__v": 0
    }
}
```

## Get All Users
**URL**: `/user/list`
**Method**: `GET`

## Response
- **Array** `user Object`
  - **_id** `string`
  - **name** `string`
  - **email** `string`
  - **uuid** `string`
  - **createdAt** `string`
  - **updatedAt** `string`
  - **__v** `number`
  
### Response Example
```json
[
    {
        "_id": "6340ebd41e9485f0b590663f",
        "name": "juan",
        "email": "juan@juan.com",
        "uuid": "511b1e71-adf6-4fdb-a921-d3f1b29fff20",
        "description": "default",
        "createdAt": "2022-10-08T03:17:40.986Z",
        "updatedAt": "2022-10-08T03:17:40.986Z",
        "__v": 0
    },
    {
        "_id": "6340f6ed185d1ddb3092c245",
        "name": "juan2",
        "email": "juan2@juan2.com",
        "uuid": "fbe92eb3-a4d5-4a18-ac14-0d698639e3a4",
        "createdAt": "2022-10-08T04:05:01.757Z",
        "updatedAt": "2022-10-08T04:05:01.757Z",
        "__v": 0
    },
    {
        "_id": "6340f6f6185d1ddb3092c247",
        "name": "juan3",
        "email": "juan3@juan3.com",
        "uuid": "72337d75-866b-4561-953b-d340fa3ec749",
        "createdAt": "2022-10-08T04:05:10.585Z",
        "updatedAt": "2022-10-08T04:05:10.585Z",
        "__v": 0
    }
]
```