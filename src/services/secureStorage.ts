import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'skillhub_access_token';

export const secureStorage = {
  async saveToken(token: string): Promise<void> {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
  },

  async getToken(): Promise<string | null> {
    return SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
  },

  async removeToken(): Promise<void> {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  },
};