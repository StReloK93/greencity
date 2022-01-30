<template>
   <section
      class="h-full flex items-center justify-center bg-gradient text-white"
   >
      <main class="py-16 w-1/2 shadow-xl flex border border-blue-600">
         <div class="w-1/2 text-center pr-28 flex items-center">
            <aside class="flex flex-col items-center">
               <img src="/images/lotus.png"  class="inline w-1/3">
               <h3 class="text-blue text-3xl font-bold uppercase">Yashil makon</h3>
            </aside>
         </div>
         <div class="w-1/2 px-16">
            <form @submit.prevent="logined">
               <label for="login">Login</label>
               <div class="my-2">
                  <input id="login" type="text" v-model="login" class="text-gray-600 outline-none py-2 px-3 rounded-sm w-full" placeholder="Login" />
               </div>
               <label for="parol">Parol</label>
               <div  class="my-2">
                  <input id="parol" type="password" v-model="password" class="text-gray-600 outline-none py-2 px-3 rounded-sm w-full" placeholder="Parol" />
               </div>
               <button type="submit" class="shadow p-2 bg-blue-500 w-full rounded-sm mt-4 uppercase font-bold">Kirish</button>
            </form>
         </div>
      </main>
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
      logined() {},
   },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.bg-gradient {
   background: linear-gradient(105deg, #e3e3e3 45%, #1c53a0 45.1%);
}
.text-blue{
   font-family: 'Dancing Script', cursive;
   color: #1c53a0;
}
</style>