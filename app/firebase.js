import firebase from 'firebase'
import settings from './config/settings'

const firebaseConfig = {
  apiKey: settings.API_KEY, 
  authDomain: settings.AUTH_DOMAIN, 
  databaseURL: settings.DATABASE_URL, 
  storageBucket: settings.STORAGE_BUCKET
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp
