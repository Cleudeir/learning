interface Props {
  url: string;
  options?: any;
  setMessage: (value: string | null) => void;
  callBack: (value: any) => void;
}

export default async function request({
  url,
  options,
  setMessage,
  callBack,
}: Props) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (data.error) {
        console.error('error: ', data.error);
        setMessage(data.error);
      } else {
        setMessage(null);
        callBack(data);
      }
    } else {
      setMessage(response.statusText);
      console.error('error: ', response.statusText);
    }
  } catch (error: any) {
    console.error('error: ', error.message);
    setMessage('Sem acesso a Internet');
  }
}
