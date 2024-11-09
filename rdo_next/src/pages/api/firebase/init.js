import  initFirebase  from '@/components/Back/Firebase/initFirebase';
import  Firebase from '@/components/Back/Firebase';

export default async function handler(req, res) {
  let { auth } = await initFirebase
  const user = await Firebase(auth).isLoged();
  res.status(200).json({user});
  // // Log in to a account
}
