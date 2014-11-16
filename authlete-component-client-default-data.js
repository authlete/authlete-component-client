function authlete_component_client_default_data() {
  return {
    "clientType" : "PUBLIC",
    "applicationType": "WEB",
    "responseTypes" : [ "CODE" ],
    "grantTypes": [ "AUTHORIZATION_CODE" ],
    "idTokenSignAlg": "RS256"
  }
}
