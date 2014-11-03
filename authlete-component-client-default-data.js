function authlete_component_client_default_data() {
  return {
    "clientType" : "PUBLIC",
    "responseTypes" : [ "CODE" ],
    "grantTypes": [ "AUTHORIZATION_CODE" ],
    "idTokenSignAlg": "RS256"
  }
}
