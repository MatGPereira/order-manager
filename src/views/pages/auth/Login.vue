<script setup lang="ts">
import background from '../../../assets/images/login/background.jpg';
</script>

<template>
  <div class="h-dvh w-dvw grid place-items-center">
    <div class="bg-ice rounded shadow-lg flex overflow-hidden">
      <figure class="max-w-[500px]">
        <img
          :src="background"
          alt=""
          class="h-full w-full brightness-75"
        />
      </figure>
      <div class="p-8">
        <h1 class="text-2xl text-center mb-12">Login</h1>
        <form class="flex flex-col gap-y-8 min-w-96">
          <fieldset class="flex flex-col items-start">
            <label
              for="email"
              class="text-base"
            >
              E-mail
            </label>
            <div class="rounded border border-slate-300 w-full p-2 mt-1">
              <input
                placeholder="email@dominio.com"
                name="email"
                required
                minlength="6"
                type="email"
                class="outline-none w-full bg-transparent"
              />
            </div>
          </fieldset>
          <fieldset class="flex flex-col items-start">
            <label
              for="email"
              class="text-base"
            >
              Senha
            </label>
            <div class="rounded border border-slate-300 w-full p-2 mt-1">
              <input
                placeholder="******"
                name="password"
                required
                minlength="6"
                type="password"
                class="outline-none w-full bg-transparent"
              />
            </div>
          </fieldset>
          <fieldset class="flex gap-y-4 items-center flex-col">
            <button
              type="submit"
              class="
                uppercase rounded w-full bg-green-600 text-ice border font-bold
                hover:bg-ice hover:border hover:border-green-600
                hover:text-green-600 px-4 py-2 transition-all
              "
            >
              Entrar
            </button>
            <RouterLink
              to="/auth/change-password"
              class="
                text-sm relative inline-block before:content-[''] before:absolute
                before:w-0 hover:before:w-2/3 before:h-[2px] before:bottom-0
                before:bg-green-600 before:transition-all before:duration-300
                text-green-600
              "
            >
              Esqueci minha senha
            </RouterLink>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
