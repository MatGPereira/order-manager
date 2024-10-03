<script setup lang="ts"></script>

<template>
  <div class="h-dvh w-dvw grid place-items-center">
    <div class="bg-ice rounded shadow-lg p-8 overflow-hidden">
      <h1 class="text-2xl text-center mb-12">Trocar a senha</h1>
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
            for="password"
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
        <fieldset class="flex flex-col items-start">
          <label
            for="password-confirmation"
            class="text-base"
          >
            Confirmar senha
          </label>
          <div class="rounded border border-slate-300 w-full p-2 mt-1">
            <input
              placeholder="******"
              name="password-confirmation"
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
            Confirmar
          </button>
          <RouterLink
            to="/auth/login"
            class="
              text-sm relative inline-block before:content-[''] before:absolute
              before:w-0 hover:before:w-2/3 before:h-[2px] before:bottom-0
              before:bg-green-600 before:transition-all before:duration-300
              text-green-600
            "
          >
            Voltar
          </RouterLink>
        </fieldset>
      </form>
    </div>
  </div>
</template>
