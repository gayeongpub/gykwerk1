"use client";

// react/next
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// mui
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
// cmp
import BreadCrumb from "@/components/layout/BreadCrumb";
// json
import { useI18n } from "@/context/i18nContext";
// number
import { fnAddComma, getDiscountPercent } from "@/utils/number";
// modal
// import Button from "@mui/material/Button";
import CustomDialog from "@/components/com/Dialog";

// cart
const cartList = [
  {
    company: "Company Number 1",
    shipping: 3000,
    arr: [
      {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        src: "/img/item/plates/item-1.webp",
        price: 55000,
        oldPrice: 62000,
        tag: 1,
      },
      {
        name: "Product Name 1-2",
        src: "/img/item/plates/item-2.webp",
        price: 125000,
        oldPrice: 111000,
      },
    ],
  },
  {
    company: "Company Number 2",
    shipping: 3000,
    arr: [
      {
        name: "Product Name 2-1",
        src: "/img/item/plates/item-3.webp",
        price: 55000,
        oldPrice: 62000,
        tag: 2,
      },
    ],
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Cart() {
  // json
  const { msg, orders } = useI18n();

  // dialog
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="cart in">
        <BreadCrumb />
        <div className="title-area">
          <h2 className="title-2 mt20 mb20">{msg.cart.title}</h2>
        </div>
        <div className="cont">
          <div className="list-area">
            <ul className="depth-1">
              {cartList.map((item, i) => (
                <li key={i} className="depth-1-li box-1">
                  <div className="company">
                    <div className="left">
                      <FormControlLabel
                        control={<Checkbox defaultChecked className="check" />}
                        label={item.company}
                      />
                      <Link
                        href="/"
                        title={item.company}
                        className="btn-link-home"
                      >
                        <HomeOutlinedIcon />
                      </Link>
                    </div>
                    <button className="btn rd white" type="button">
                      {msg.coupon}
                    </button>
                  </div>
                  <div className="depth-2">
                    <ul>
                      {item.arr.map((param, j) => {
                        const discount = getDiscountPercent(
                          param.price,
                          param.oldPrice
                        );
                        return (
                          <li key={j} className="depth-2-li">
                            <Checkbox
                              {...label}
                              defaultChecked
                              className="check"
                            />
                            <div className="details">
                              <div className="left">
                                <Link href="/">
                                  <div className="img">
                                    <Image
                                      src={param.src}
                                      alt={param.name}
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                  <div className="desc">
                                    <span className="tag">
                                      {param.tag && param.tag === 1
                                        ? msg.cart.afterConfirmation
                                        : msg.cart.freeExchangesReturns}
                                    </span>
                                    <strong className="name">
                                      {param.name}
                                    </strong>
                                    <div className="price-per">
                                      {discount > 0 && (
                                        <span className="discount">{`${discount}%`}</span>
                                      )}
                                      <span className="price">
                                        {`${msg.unit}${fnAddComma(
                                          param.price
                                        )}`}
                                      </span>
                                      <span className="old">
                                        {`${msg.unit}${fnAddComma(
                                          param.oldPrice
                                        )}`}
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                                <button
                                  type="button"
                                  className="btn"
                                  title="닫기"
                                />
                              </div>
                              <ul className="option-area">
                                <li>
                                  <span className="txt">개수: 1</span>
                                  <span className="txt">사이즈: M</span>
                                  <button
                                    type="button"
                                    className="btn"
                                    title="닫기"
                                  />
                                </li>
                                <li>
                                  <span className="txt">개수: 2</span>
                                  <span className="txt">사이즈: L</span>
                                  <button
                                    type="button"
                                    className="btn"
                                    title="닫기"
                                  />
                                </li>
                              </ul>
                              <div className="price-area">
                                <span className="tit">{orders.itemPrice}</span>
                                <strong>{msg.unit}180,000</strong>
                                <button type="button" className="btn rd sm">
                                  주문하기
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="shipping">
                      <span className="tit">{orders.shippingPrice}</span>
                      <strong>{`${msg.unit}${fnAddComma(
                        item.shipping
                      )}`}</strong>
                    </div>
                  </div>
                  <div className="total">
                    <ul>
                      <li>
                        <span className="tit">선택한 상품 금액</span>
                        <strong className="currency">0</strong>
                      </li>
                      <li className="plus">
                        <AddCircleOutlineOutlinedIcon />
                        <span className="tit">총 배송비</span>
                        <strong className="currency">0</strong>
                      </li>
                      <li className="minus">
                        <RemoveCircleOutlineOutlinedIcon />
                        <span className="tit">총 할인 금액</span>
                        <strong className="currency">0원</strong>
                      </li>
                    </ul>
                    <div className="order">
                      <span className="tit">
                        총 주문 금액 <b className="prm">0원</b>
                      </span>
                      <button type="button" className="btn rd">
                        {item.company} 0건 주문하기
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* total */}
          <div className="sticky">
            <div className="aaaaaaaaaaaaa">
              <div className="txt">
                <span>{orders.totalOrderPrice}</span>
                <b>{`${msg.unit}${fnAddComma(1234560)}`}</b>
              </div>
              <div className="txt">
                <span>{orders.totalShippingCost}</span>
                <b>{`${msg.unit}${fnAddComma(3500)}`}</b>
              </div>
              <div className="txt">
                <span>{orders.totalOrderPrice}</span>
                <b>{`${msg.unit}${fnAddComma(1238060)}`}</b>
              </div>
            </div>
            <div className="terms">
              <div className="terms-list">
                <FormControlLabel
                  required
                  control={<Checkbox className="check" />}
                  label="구매약관동의 1"
                />
                <button
                  type="button"
                  className="btn-more btn"
                  onClick={handleOpen}
                >
                  {msg.buttons.viewDetails}
                </button>
              </div>
              <div className="terms-list">
                <FormControlLabel
                  control={<Checkbox className="check" />}
                  label="구매약관동의 2"
                />
                <button
                  type="button"
                  className="btn-more btn"
                  onClick={handleOpen}
                >
                  {msg.buttons.viewDetails}
                </button>
              </div>
            </div>
            <button type="button" className="prm btn rd xl">
              {orders.order}
            </button>
          </div>
        </div>
      </div>

      {/* dialog */}
      <CustomDialog open={open} onClose={handleClose} title={msg.terms.termsOfService}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sequi
          optio molestiae ipsam porro autem ipsum quo nisi laborum quam, quidem
          voluptate ipsa! Harum molestiae rerum ullam optio iusto quos.
        </p>
      </CustomDialog>
    </>
  );
}
