// react/next
import Image from "next/image";
// import Link from "next/link";
// json
import { useI18n } from "@/context/i18nContext";
// comp
// import MainItemList from "@/components/item/List";
// mui
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// number
import { fnAddComma, getDiscountPercent } from "@/utils/number";

const itemList = [
  {
    link: "/",
    tag: "new",
    src: "11",
    ctgr: "Bitz",
    name: "Staub New White Truffle deep plate, Ø24 cm",
    price: 50,
    oldPrice: 75,
  },
  {
    link: "/",
    tag: "",
    src: "12",
    ctgr: "Bloomingville",
    name: "Freckle side plate Ø20 cm, black",
    price: 80,
    oldPrice: 90,
  },
  {
    link: "/",
    tag: "hot",
    src: "3",
    ctgr: "Done by deer",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 131,
  },
  {
    link: "/",
    tag: "sale",
    src: "6",
    ctgr: "Rosenthal",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 144,
  },
];

export default function Event() {
  const { msg } = useI18n();

  return (
    <div className="event-area item-area col-4">
      <ul>
        {itemList.map((item) => (
          <li key={item.src}>
            {/* img */}
            <div className="bg-img">
              <Image
                src={`/img/event/event-${item.src}.jpg`}
                alt={item.name}
                width={250}
                height={250}
              />
            </div>
            {/* desc */}
            <div className="desc">
              <span className="ctgr">{item.ctgr}</span>
              <strong className="name">{item.name}</strong>
              <div className="price-wrap">
                <span className="discount">{getDiscountPercent(item.price, item.oldPrice)}</span>
                <div className="price">
                  {item.price && (
                    <span className="now">{`${msg.unit}${fnAddComma(item.price)}`}</span>
                  )}
                  {item.oldPrice && item.oldPrice !== item.price && (
                    <span className="org">{`${msg.unit}${fnAddComma(item.oldPrice)}`}</span>
                  )}
                </div>
                <div className="btn-area">
                  <button className="btn-more center btn rd lg" type="button">
                    More
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
