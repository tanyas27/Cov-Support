import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBOwBziy8CWNeZZRzlJFdfvj8wmAOdvVWo",
  authDomain: "cov-support.firebaseapp.com",
  databaseURL: "https://cov-support-default-rtdb.firebaseio.com",
  projectId: "cov-support",
  storageBucket: "cov-support.appspot.com",
  messagingSenderId: "993850695995",
  appId: "1:993850695995:web:a62916250df53a9eb2571e",
  measurementId: "G-S779WWG0JH"
};
  
firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();

const db = firebase.database();

export {db};

// function logEvent() {
//   // [START analytics_log_event]
//   firebase.analytics().logEvent('notification_received');
//   // [END analytics_log_event]
// }

// function logEventParams() {
//   const analytics = firebase.analytics();
  
//   // [START analytics_log_event_params]
//   analytics.logEvent('select_content', {
//     content_type: 'image',
//     content_id: 'P12453',
//     items: [{ name: 'Kittens' }]
//   });
//   // [END analytics_log_event_params]
// }

// function logEventCustomParams() {
//   const analytics = firebase.analytics();

//   // [START analytics_log_event_custom_params]
//   analytics.logEvent('goal_completion', { name: 'lever_puzzle'});
//   // [END analytics_log_event_custom_params]
// }

// function setUserProperties() {
//   // [START analytics_set_user_properties]
//   firebase.analytics().setUserProperties({favorite_food: 'apples'});
//   // [END analytics_set_user_properties]
// }