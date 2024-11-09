/* eslint-disable no-promise-executor-return */
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
async function Api() {
	console.log('signIn');
	await sleep(50);
	return {
		token: 'sadsadsad112321j3bh21jhv321hv3213ghsakdas',
		user: {
			name: 'cleudeir',
			email: 'cleudeirsilva@gmail.com',
		},
	};
}

export default Api;
