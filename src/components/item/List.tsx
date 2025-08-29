"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// mui
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export type Item = {
  // id: number;
  link: string;
  tag: string;
  src: string;
  ctgr: string;
  name: string;
  price: number;
  oldPrice?: number;
};

type ListProps = {
  typeClassName?: string;
  colClassName?: string;
  itemList: Item[];
};

export default function List({
  typeClassName = "type-card",
  colClassName = "col-5",
  itemList,
}: ListProps) {
  const [isFav, setIsFav] = useState<boolean[]>([]);

  useEffect(() => {
    if (itemList && itemList.length > 0) {
      setIsFav(new Array(itemList.length).fill(false));
    }
  }, [itemList]);

  const fnToggleFav = (index: number) => {
    setIsFav((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="item-area-wrap">
      <div className={`item-area ${typeClassName} ${colClassName}`}>
        <ul>
          {itemList.length > 0 &&
            itemList.map(({ tag, src, ctgr, name, price, oldPrice }, index) => (
              <li key={src}>
                {tag && <span className={`${tag} tag`}>{tag}</span>}
                <div className="img">
                  <Link href={`/pd/detail/${index}`} title={name}>
                    <Image
                      src={`/img/item/plates/item-${src}`}
                      alt={name}
                      width={300}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="desc">
                  <div className="top">
                    <span className="ctgr">{ctgr}</span>
                  </div>
                  <Link href={`/pd/detail/${index}`} title={name}>
                    <strong className="name">{name}</strong>
                  </Link>
                  <div className="price-area">
                    <div className="price">
                      {price && <span className="now">{`$${price}`}</span>}
                      {oldPrice && oldPrice !== price && (
                        <span className="org">{`$${oldPrice}`}</span>
                      )}
                    </div>
                    <div className="btn-area">
                      <button
                        className="btn-fav"
                        onClick={() => fnToggleFav(index)}
                        aria-pressed={isFav[index]}
                      >
                        {isFav[index] ? (
                          <FavoriteOutlinedIcon />
                        ) : (
                          <FavoriteBorderOutlinedIcon />
                        )}
                        <span className="blind">Favorite</span>
                      </button>
                      {/* <button className="btn-cart">
                        <ShoppingCartOutlinedIcon />
                        <span className="blind">Cart</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
