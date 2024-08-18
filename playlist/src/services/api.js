import axios from 'axios';

const API_KEY = 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr';
const TENANT_KEY = 'TYKE070323';

export async function fetchPlaylists() {
  const response = await axios.post('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList', 
    {"Content_Type": 2}, 
    { headers: {
      'X-Api-Key': API_KEY,
      'X-Tenant-Key': TENANT_KEY
    }}
  );
  return response.data;
}

export async function fetchFeeds() {
  const response = await axios.post('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1', 
    {"Index": 1, "ContentType": [2], "IsTagged": false, "URL": ""}, 
    { headers: {
      'X-Api-Key': API_KEY,
      'X-Tenant-Key': TENANT_KEY
    }}
  );
  return response.data;
}
