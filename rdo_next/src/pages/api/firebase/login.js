import Firebase from "@/components/Back/Firebase";
import initFirebase  from '@/components/Back/Firebase/initFirebase';

export default async function handler(req, res) {
  const { email, password } = req.body;
  const {auth} = await initFirebase
  const user = await Firebase(auth).login(email, password);
  return res.status(200).json({ user });
}
