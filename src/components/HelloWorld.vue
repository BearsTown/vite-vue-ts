<script setup lang="ts">
  import { ref } from 'vue';
  import todosHttp from '../api/todosHttp.ts';
  import { AxiosRequestConfig } from 'axios';
  import aaa from '../test.ts';

  // defineProps<{ msg: string }>();

  const props = defineProps<{
    msg?: string;
    num: number;
  }>();

  const count = ref(10);

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

  async function loadGet1() {
    todosHttp
      .getAxios()
      .get<Todos>('/todos/1', {})
      .then((response) => {
        console.log(response.data);
      });

    try {
      const response = await todosHttp.getAxios().get<Todos>('/todos/1', {});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadGet2() {
    try {
      let asd = 111;
      const response = await todosHttp.get<Todos>('/todos/1', {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadGet3() {
    const params: PostsReq = {
      userId: 10,
      temp: {
        a: 1,
      },
      role: ['admin', 'editor', 'manager'],
    };

    const config: AxiosRequestConfig = {
      params,
      // params: qs.stringify(params),
    };

    try {
      const response = await todosHttp.get<Todos>('/posts', config);
      // const response = await todosHttp.get<Todos>(
      //   `/posts?${qs.stringify(params, { arrayFormat: 'comma' })}`,
      //   config,
      // );
      console.log(response.data.asd);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadPost1() {
    try {
      const data: PostsReq = {
        title: 'foo',
        body: 'bar',
        userId: 7,
      };

      const config: AxiosRequestConfig = {
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await todosHttp.post<Todos>('/posts', data, config);
      console.log(response.data.asd);
    } catch (error) {
      console.error(error);
    }
  }

  // loadGet1()
  // loadGet2()
  // loadGet3();

  // loadPost1();

  console.log(aaa);
</script>

<template>
  <h1>{{ props.msg }}</h1>
  <h1>{{ props.num * 100 }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
