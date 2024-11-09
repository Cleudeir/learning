/* eslint-disable react-hooks/exhaustive-deps */
import { AppWrapper, useAppContext } from "@/components/Context";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  TryRequest  from '@/components/Front/other/tryRequest';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {  
  useEffect(()=>{TryRequest},[])
  
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
