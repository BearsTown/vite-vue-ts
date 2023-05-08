import { VAxios } from '../utils/VAxios.ts';

const todosHttp = new VAxios({
  baseURL: '/api-todos',
});

export default todosHttp;
