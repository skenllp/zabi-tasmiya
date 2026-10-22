// Firebase Configuration — Zabi & Tasmiya (Wishes Wall)
// Project: zabi-tasmiya

var firebaseConfig = {
  apiKey: "AIzaSyDHjUmwKyyEPv3dsGZyyB-TrR2jj3_U7Co",
  authDomain: "zabi-tasmiya.firebaseapp.com",
  databaseURL: "https://zabi-tasmiya-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zabi-tasmiya",
  storageBucket: "zabi-tasmiya.firebasestorage.app",
  messagingSenderId: "531502470554",
  appId: "1:531502470554:web:6c0f1c02fcfad27f811623"
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
}
