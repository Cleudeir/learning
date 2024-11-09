import {initializeApp} from 'firebase/app';

export default async function fireBaseStart() {
	const firebaseConfig = {
		apiKey: '',
		authDomain: '',
		projectId: '',
		storageBucket: '',
		messagingSenderId: '',
		appId: '',
	};
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	return app;
}

