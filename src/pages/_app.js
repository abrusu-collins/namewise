import "../styles/index.css";
import NavBar from "@/components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
