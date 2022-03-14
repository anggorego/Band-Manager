# Band Manager API Documentation

## Endpoints :

List of available endpoints:

- `GET /bands`
- `GET /bands/:id`

&nbsp;

## 1.GET /bands

Description:
- Get all bands from database

_Response (200 - OK)_

```json
[
  {
        "id": 1,
        "name": "Linkin Park",
        "members": 5,
        "createdAt": "2022-03-14T09:21:18.078Z",
        "updatedAt": "2022-03-14T09:21:18.078Z"
    },
    {
        "id": 2,
        "name": "30 seconds to mars",
        "members": 5,
        "createdAt": "2022-03-14T09:21:18.078Z",
        "updatedAt": "2022-03-14T09:21:18.078Z"
    },
  ...,
]
```

&nbsp;

## 2.GET /bands/:id

Description:
- Get band by id  from database

_Response (200 - OK)_

```json
{
    "id": 1,
    "name": "Linkin Park",
    "member": 5,
    "createdAt": "2022-03-14T15:52:23.317Z",
    "updatedAt": "2022-03-14T15:52:23.317Z",
    "Personnels": [
        {
            "id": 1,
            "name": "Chester Bennington",
            "position": "Vocalists",
            "createdAt": "2022-03-14T15:52:23.326Z",
            "updatedAt": "2022-03-14T16:02:10.561Z",
            "band_id": 1
        }
    ]
}
```

_Response (404 - Not Found)_

```json
{
    "message": "bands not found"
}
```