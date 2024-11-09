import React, { useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import SideBar from "./SideBar";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";
import useAppContext from "@/context";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  isLoading?: boolean;
  messageError?: string | null;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  isLoading = true,
  messageError,
}) => {
  const router = useRouter()
  const { user, setUser } = useAppContext()
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
    console.log('user: ', user);
  }, [user])
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div id="sideBar" className="flex flex-row w-full  min-h-[calc(100vh-60px)]">
        <div className="w-[40px] sm:w-[140px] rounded-md">
          <SideBar />
        </div>
        <main className="flex flex-col justify-start items-center w-[calc(100%-40px)] sm:w-[calc(100%-140px)]  h-auto rounded-md bg-gray-100 p-4">
          {isLoading ? (
            <>
              {!messageError && children}
              {messageError && <ErrorMessage messageError={messageError} />}
            </>
          ) : (
            <div className="text-center mt-4">
              <LoadingSpinner />
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}



export default Layout;
