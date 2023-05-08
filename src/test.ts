import todosHttp from './api/todosHttp.ts';
import { AxiosRequestConfig } from 'axios';

interface PostsReq {
  userId: number;
  title?: string;
  body?: string;
  temp?: object;
  role?: string[];
}

interface Todos {
  id: number;
  userId: number;
  title: string;
}

async function loadGet3() {
  const url = '/posts';

  const params: PostsReq = {
    userId: 10,
    temp: {
      a: 1,
    },
    role: ['admin', 'editor', 'manager'],
  };

  const config: AxiosRequestConfig = {
    params,
  };

  try {
    const response = await todosHttp.getAxios().get<Todos>(url, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

loadGet3().then((r) => {
  console.log(r);
});

const aaa = 111;
export default aaa;
