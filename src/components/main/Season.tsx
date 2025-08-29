"use client";

// json
// import { useI18n } from "@/context/i18nContext";
// react/next
// import Image from "next/image";
// import Link from "next/link";
// comp
import MainItemList from "@/components/item/List";
import { Item } from "@/components/item/List";

const itemList: Item[] = [
  {
    tag: "new",
    link: "/",
    src: "11.webp",
    ctgr: "Bitz",
    name: "Staub New White Truffle deep plate, Ø24 cm",
    price: 50,
    oldPrice: 72,
  },
  {
    tag: "hot",
    link: "/",
    src: "12.webp",
    ctgr: "Bloomingville",
    name: "Freckle side plate Ø20 cm, black",
    price: 80,
    oldPrice: 92,
  },
  {
    tag: "new",
    link: "/",
    src: "3.webp",
    ctgr: "Done by deer",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 110,
  },
  {
    tag: "",
    link: "/",
    src: "4.webp",
    ctgr: "Rosenthal",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 110,
  },
  {
    tag: "",
    link: "/",
    src: "5.webp",
    ctgr: "Villa Collection",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 110,
  },
  {
    tag: "",
    link: "/",
    src: "6.webp",
    ctgr: "Seltmann Weiden",
    name: "Dots small plate 22 cm 4-pack, Creamy white",
    price: 275,
    oldPrice: 312,
  },
  {
    tag: "hot",
    link: "/",
    src: "7.webp",
    ctgr: "Serax",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  {
    tag: "new",
    link: "/",
    src: "8.webp",
    ctgr: "Eva Solo",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  {
    tag: "",
    link: "/",
    src: "9.webp",
    ctgr: "HKliving",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  {
    tag: "",
    link: "/",
    src: "10.webp",
    ctgr: "Seltmann Weiden",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  {
    tag: "",
    link: "/",
    src: "13.webp",
    ctgr: "Rosenthal",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  {
    tag: "",
    link: "/",
    src: "14.webp",
    ctgr: "Alessi",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
];

const sectionTitles = [
  "Top Selling",
  "Trending Products",
  "Recently added",
  "Top Rated",
];

export default function Season() {
  // const { msg, sections } = useI18n();

  const groupedItems: Item[][] = Array.from({ length: 4 }, (_, i) => 
  itemList.slice(i *3, i * 3 + 3)
  );

  return (
    <div className="season-area">
      <div className="depth-1">
        {groupedItems.map((group: Item[], i) => (
          <div key={i} className="depth-1-l">
            <h3 className="title-3 bb-prm">{sectionTitles[i]}</h3>
            <MainItemList itemList={group} typeClassName="type-list sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
