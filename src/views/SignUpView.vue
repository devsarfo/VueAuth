<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full">
    <div class="grid grid-col-2 grid-flow-col gap-4">
      <div class="hidden md:block col-span-1">
        <div class="flex items-center justify-center h-screen bg-indigo-600">
          <p class="text-4xl text-center text-white p-10 font-medium">
          <img src="../assets/illustration.svg" class="h-60"/>
          <br>
          A few more clicks to <br> sign in to your account.
        </p>
        </div>
      </div>
      
      <div class="col-span-2 md:col-span-1 p-10 flex items-center justify-center h-screen">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img src="../assets/icon.svg" class="mx-auto h-64 w-auto"/>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500"> sign in to your account! </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="name" class="sr-only">Full Name Address</label>
                <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
              </div>
              <div>
                <label for="email-address" class="sr-only">E-mail Address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-mail Address" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
              <div>
                <label for="confirm-password" class="sr-only">Confirm Password</label>
                <input id="confirm-password" name="confirm-password" type="password" autocomplete="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
              </div>
            </div>

            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</template>