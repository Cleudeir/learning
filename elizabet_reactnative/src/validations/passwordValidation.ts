export default function passwordValidation(pass: string) {
  if (pass.length >= 8) {
    return true;
  } else {
    return false;
  }
}
