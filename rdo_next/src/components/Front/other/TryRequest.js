import CryptoJS from "crypto-js";

const keyEncryption = process.env.NEXT_PUBLIC_KEYENCRYPTION;
async function TryRequest() {
  let data = await loadData();

  async function sleep(seconds) {
    console.log("sleep ", seconds, " seconds");
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  async function loadData() {
    const remenber = localStorage.getItem("001425");
    console.log(remenber);
    const bytes = CryptoJS.AES.decrypt(remenber, keyEncryption);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    const result = await JSON.parse(originalText);
    console.log(result[0]);
    return result;
  }
  async function Try() {
    const time = 10;
    console.log("loop", data);
    await sleep(time);
    if (data && data.length > 0) {
      try {
        const [item] = data;
        const response = await fetch(`/api/db/${item.type}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        console.log("Request successful");
        await remove(item);
        Try();
      } catch (err) {
        console.log(`Error during request: ${err.message}`);
        await remove(item);
        Try();
      }
    } else {
      console.log("Nothing to do");
      await sleep(time);
      Try();
    }
  }
  Try();
  async function add(item) {
    const storageData = JSON.stringify([...data, item]);
    const ciphertext = CryptoJS.AES.encrypt(
      storageData,
      keyEncryption
    ).toString();
    localStorage.setItem("001425", ciphertext);
    data = JSON.parse(storageData);
  }

  async function remove(item) {
    const storageData = JSON.stringify(
      data.filter((_item) => _item.id !== item.id)
    );
    const ciphertext = CryptoJS.AES.encrypt(
      storageData,
      keyEncryption
    ).toString();
    localStorage.setItem("001425", ciphertext);
    data = JSON.parse(storageData);
  }
  return { loadData, Try, add, remove };
}

export default TryRequest();
