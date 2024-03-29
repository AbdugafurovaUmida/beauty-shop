import Head from "next/head";
// import { Inter } from '@next/font/google'
import Intro from "../components/Intro";
import PopularitySelect from "../components/PopularitySelect";
import SearchInput from "../components/SearchInput";
import ViewsButton from "../components/ViewsButton";
import BrandChackbox from "../components/BrandChackbox";
import { LinearDemo } from "../components/svg";
import { GridDemo } from "../components/svg";
import ColorChoose from "../components/ColorChoose";
import SocialContacts from "../components/SocialContacts";
import Partners from "../components/Partners";
import Tab from "../components/Tab"
import CategoryCheckbox from "../components/CategoryCheckbox";

// const inter = Inter({ subsets: ['latin'] })

const brandCheckbox = [
  {
    id: 0,
    name: "Body Spray",
  },
  {
    id: 1,
    name: "Skin Care",
  },
  {
    id: 2,
    name: "Body Spray ",
  },
  {
    id: 3,
    name: "Make Up ",
  },
  {
    id: 4,
    name: "Body Spray",
  },
  {
    id: 5,
    name: "Make Up ",
  },
  {
    id: 6,
    name: "BB Creams ",
  },
];

const color = [
  {
    id: 0,
    color: "#23856D",
    name: "Green",
  },
  {
    id: 1,
    color: "#47AD97",
    name: "Cosmetic ",
  },
  {
    id: 2,
    color: "#E74040",
    name: "Spa",
  },
  {
    id: 3,
    color: " #252B42",
    name: "BB Creams ",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Intro />
        <PopularitySelect />
        <SearchInput />
        <ViewsButton viewsIcon={<LinearDemo />} />
        <ViewsButton viewsIcon={<GridDemo />} />

        {brandCheckbox.map((el, index) => (
          <BrandChackbox data={el} key={index} />
        ))}
        {color.map((el, index) => (
          <ColorChoose props={el} key={index} />
        ))}
        <Tab/>
        <CategoryCheckbox />

        <Partners />
        <SocialContacts />
      </main>
    </>
  );
}
