import { defineStore } from "pinia";

import { ref } from "vue";

import type { IUser } from "@/core/@types/IUser";
import type { IAccessCredential } from "@/core/@types/IAccessCredential";

import { api } from "@/core/config/http";

const initialCurrentUserValue: IUser = {
  email: '',
  password: '',
};

const initialAccessCredentials: IAccessCredential = {
  accessToken: '',
  expiredIn: 0,
  refreshToken: '',
};

const useLoginStore = defineStore('login', () => {
  const currentUser = ref<IUser>(initialCurrentUserValue);
  const accessCredentials = ref<IAccessCredential>(initialAccessCredentials);

  async function login(): Promise<void> {
    const result = await api.post<IUser, IAccessCredential>(
      '/login',
      {
        email: currentUser.value.email,
        password: currentUser.value.password
      }
    );

    accessCredentials.value = result;
  }

  return {
    currentUser,
    login
  };
});

export { useLoginStore };
