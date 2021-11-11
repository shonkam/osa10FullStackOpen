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
        console.log('get accesstoken', accessToken);
      }
      else {
        console.log('no access token');
      }
    } catch (err) {
      console.log(err);
    }
  }

  async setAccessToken(accessToken) {
    console.log('auth', accessToken);
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        JSON.stringify(accessToken)
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

const newAuthStorage = async () => {
  const storageForAccessToken = new AuthStorage('storageForAccessToken');

  await storageForAccessToken.setAccessToken('testAccessToken');
  await storageForAccessToken.getAccessToken();
  await storageForAccessToken.removeAccessToken();
  await storageForAccessToken.getAccessToken();
};

newAuthStorage();

export default AuthStorage;