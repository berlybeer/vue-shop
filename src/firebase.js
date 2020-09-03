import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyA-mnHxI21WGTSLEcIartJtsRRcZMUlrLE',
	authDomain: 'vue-shop-c5eff.firebaseapp.com',
	databaseURL: 'https://vue-shop-c5eff.firebaseio.com',
	projectId: 'vue-shop-c5eff',
	storageBucket: 'vue-shop-c5eff.appspot.com',
	messagingSenderId: '1000400834220',
	appId: '1:1000400834220:web:400c565ca78d3a61c0d909',
	measurementId: 'G-CF8RBRD8X9',
}
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig)
firebase.analytics()
