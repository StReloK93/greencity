<template>
   <section class="h-full w-full flex items-center justify-center bg-gradient text-white relative">
      <main class="fixed top-0 right-16 m-2">
         <a title="Bosh sahifa" class="custom-btn my-2 shadow-sm" href="/" > Bosh sahifa <img src="/images/home.png" class="ml-3 w-5"></a>
      </main>
      <main class="py-12 w-1/2 shadow-xl flex border border-green-600">
         <div class="w-1/2 text-center pr-28 flex items-center">
            <aside class="flex flex-col items-center">
               <img src="/images/lotus.png"  class="inline w-1/3">
               <h3 class="text-blue font-dancing text-3xl font-bold uppercase">Yashil makon</h3>
            </aside>
         </div>
         <div class="w-1/2 px-16">
         <h3 class="text-3xl text-center mb-6 uppercase">Tizimga kirish</h3>
            <form @submit.prevent="$store.dispatch('login', data)">
               <h2 class="text-center my-2 text-red-600" v-if="$store.state.logined">
                  {{$store.state.logined}}
               </h2>
               <label for="login">Login</label>
               <div class="my-2">
                  <input id="login" type="text" v-model="data.email" class="text-gray-600 outline-none py-2 px-3 rounded-sm w-full" placeholder="Login"  required/>
               </div>
               <label for="parol">Parol</label>
               <div  class="my-2">
                  <input id="parol" type="password" v-model="data.password" class="text-gray-600 outline-none py-2 px-3 rounded-sm w-full" placeholder="Parol" required/>
               </div>
               <button type="submit" class="text-white shadow p-2 bg-green-700 w-full rounded-sm mt-4 uppercase font-bold">Kirish</button>
            </form>
         </div>
      </main>
   </section>
</template>
<script>
export default {
   data() {
      return {
         data: {}
      };
   },
   mounted() {
      store.state.logined = null
   },
};
</script>