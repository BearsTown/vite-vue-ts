import { VAxios } from '../utils/VAxios.ts';

const photosHttp = new VAxios({
  baseURL: '/api-photos',
});

export default photosHttp;
