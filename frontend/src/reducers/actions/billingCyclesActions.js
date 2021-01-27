import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api/billingcycles';

export function getList() {
  const request = axios.get(BASE_URL);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request,
  };
}
