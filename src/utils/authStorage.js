import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:accessToken`
      );
      if (accessToken !== null) {

        console.log('hue', accessToken);
        return accessToken;
      }
      else {
        console.log('no access token');
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async setAccessToken(accessToken) {
    try {

      await AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        accessToken
      );
    } catch (err) {
      console.log(err);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(
        `${this.namespace}:accessToken`
      );
      console.log('removed access token');
    } catch (err) {
      console.log(err);
    }
  }
}
/*
const newAuthStorage = async () => {
  const storageForAccessToken = new AuthStorage('storageForAccessToken');

  await storageForAccessToken.setAccessToken('testAccessToken');
  await storageForAccessToken.getAccessToken();
  await storageForAccessToken.removeAccessToken();
  await storageForAccessToken.getAccessToken();
};

newAuthStorage();
*/
export default AuthStorage;