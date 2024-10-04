interface IAccessCredential {
  accessToken: string;
  expiredIn: number;
  refreshToken: string;
}

export type { IAccessCredential };
