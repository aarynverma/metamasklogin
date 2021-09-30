import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import theme from "./theme";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import Count from "./components/Count";


export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider theme={theme}>
        <Layout>
        <p style={{ color: "white" }}>Click the Below Button : </p>
        <ConnectButton handleOpenModal={onOpen} />
        {/* Our Account modal will handle open state & closing */}
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Count/>
        </Layout>
    </ChakraProvider>
  )
}