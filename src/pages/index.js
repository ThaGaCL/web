import Image from "next/image";
import { Inter } from "next/font/google";
import NameAscii from "./components/NameAscii";
import Separator from "./components/Separator";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-10`}>
        <link rel="icon" href="/walking.gif" />
        <title>Thales</title>
        <Box className="flex flex-column justify-center items-center p-16">
        <Image
                src="/walking.gif"
                alt="Thales"
                width={200}
                height={200}
                className="rounded-full"
            />
            <NameAscii />
            <Image
                src="/walking.gif"
                alt="Thales"
                width={200}
                height={200}
                className="rounded-full"
            />
        </Box>
        <Separator />
        <NavBar />
        <Separator />
    </main>
  );
}
