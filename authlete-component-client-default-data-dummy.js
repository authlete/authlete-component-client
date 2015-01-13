function authlete_component_client_default_data_dummy() {
  return {
    "contacts": ["aaa@bbb.com", "ddd@eee.com", "ccc@ooo.com"],
    "clientType" : "PUBLIC",
    "applicationType": "WEB",
    "responseTypes" : [ "CODE" ],
    "grantTypes": [ "AUTHORIZATION_CODE" ],
    "idTokenSignAlg": "RS256",
    "idTokenEncryptionAlg": "RSA1_5",
    "idTokenEncryptionEnc": "A256CBC_HS512",
    "userInfoSignAlg": "RS256",
    "userInfoEncryptionAlg": "RSA1_5",
    "userInfoEncryptionEnc": "A256CBC_HS512",
    "requestSignAlg": "RS256",
    "requestEncryptionAlg": "RSA1_5",
    "requestEncryptionEnc": "A256CBC_HS512",
    "clientUris": [{"tag": "en", "value": "vEn"}, {"tag": "ja", "value": "vJa"}],
    "logoUris": [{"tag": "en", "value": "vEn"}, {"tag": "ja", "value": "vJa"}],
    "policyUris": [{"tag": "en", "value": "vEn"}, {"tag": "ja", "value": "vJa"}]
  }
}
