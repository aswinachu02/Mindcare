const development = {
  ENV: "development",
  BASE_API: "http://localhost:8000/",
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyDzhGRjiqeNDSRQpMUOS8jI3G5FSr9Y7TE",
    authDomain: "mindcare-cusat.firebaseapp.com",
    projectId: "mindcare-cusat",
    storageBucket: "mindcare-cusat.appspot.com",
    messagingSenderId: "392108507225",
    appId: "1:392108507225:web:b6f0f0f8569c88a0087148",
    measurementId: "G-C1PEL20FL5",
  },
};

const test = {
  ...development,
  ENV: "testing",
  BASE_API: "http://localhost:8000/",
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyDzhGRjiqeNDSRQpMUOS8jI3G5FSr9Y7TE",
    authDomain: "mindcare-cusat.firebaseapp.com",
    projectId: "mindcare-cusat",
    storageBucket: "mindcare-cusat.appspot.com",
    messagingSenderId: "392108507225",
    appId: "1:392108507225:web:b6f0f0f8569c88a0087148",
    measurementId: "G-C1PEL20FL5",
  },
};

const production = {
  ...development,
  ENV: "production",
  BASE_API: "https://api.mindcare.com/",
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyDzhGRjiqeNDSRQpMUOS8jI3G5FSr9Y7TE",
    authDomain: "mindcare-cusat.firebaseapp.com",
    projectId: "mindcare-cusat",
    storageBucket: "mindcare-cusat.appspot.com",
    messagingSenderId: "392108507225",
    appId: "1:392108507225:web:b6f0f0f8569c88a0087148",
    measurementId: "G-C1PEL20FL5",
  },
};

const configs = {
  production,
  test,
  development,
};

const currentConfig = configs[process.env.NODE_ENV];
const config = {
  ENV: currentConfig.ENV,
  BASE_API: currentConfig.BASE_API,
  FIREBASE_CONFIG: currentConfig.FIREBASE_CONFIG,
};

export default config;
