<template>
   <section>
      <form @submit.prevent="registered">
         <div>
            <input type="text" v-model="login" placeholder="login"/>
         </div>
         <div>
            <input type="password" v-model="password" placeholder="parol" />
         </div>
         <div>
            <input type="password" v-model="password" placeholder="parolni qaytadan tering" />
         </div>
         <button type="submit">ro'yhatdan otish</button>
      </form>
   </section>
</template>
<script>
export default {
   data() {
      return {
         login: null,
         password: null,
      };
   },
   methods: {
      registered() {},
   },
};
</script>
<style>
</style>