import { api } from './rootApi';

export interface IUser {
  id: number;
  email: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ access: string; refresh: string; user: IUser }, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: '/api/auth/routes/login/',
        method: 'POST',
        body: {
          email,
          password,
        },
        auth: false,
      }),
    }),
    registerUser: builder.mutation<
      { access: string; refresh: string; user: IUser },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: '/api/auth/routes/register/',
        method: 'POST',
        body: {
          email,
          password,
        },
        auth: false,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
