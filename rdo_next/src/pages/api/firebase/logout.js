import Firebase from "@/components/Back/Firebase";
import initFirebase  from '@/components/Back/Firebase/initFirebase';

export default async function handler(req, res) {
  const {auth} = await initFirebase
  console.log("auth",auth)
  const user = await Firebase(auth).logout();
  return res.status(200).json({ user });
}
