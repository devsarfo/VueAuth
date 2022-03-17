<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full">
    <div class="grid grid-col-2 grid-flow-col gap-4">
      <div class="hidden md:block col-span-1">
        <div class="flex items-center justify-center h-screen bg-indigo-600">
          <p class="text-4xl text-center text-white p-10 font-medium">
          <img src="../assets/login.svg" class="h-60"/>
          <br>
          A few more clicks to <br> reset account password.
        </p>
        </div>
      </div>
      
      <div class="col-span-2 md:col-span-1 p-10 flex items-center justify-center h-screen">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img src="../assets/icon.svg" class="mx-auto h-64 w-auto"/>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500"> sign in to your account! </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">E-mail Address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-mail Address" />
              </div>
            </div>

            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                RESET PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</template>