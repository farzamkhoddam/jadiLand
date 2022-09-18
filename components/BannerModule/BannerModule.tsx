import * as React from "react";
import { BannerModuleStyles } from "./BannerModuleStyles";
import ButtonLink from "../ButtonLink";
import { ReactNode } from "react";
import { HTMLAttributes } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import macbookImg from "../../public/static/macbook-color.jpg";
import Button from "../HtmlButton/HtmlButton";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle?: string;
  price?: string;
  enquire?: unknown;
  children?: ReactNode;
  learnMore?: boolean;
}
const BannerModule: React.FC<Props> = ({
  children,
  title,
  subTitle,
  price,
  enquire,
  learnMore = true,
}) => {
  const router = useRouter();
  function scrollToArea() {
    router.push("#topContent");
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <Image
            className="banner__image"
            src={macbookImg}
            alt="Banner Image"
            layout="fill"
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            <div className="banner__btns">
              {enquire && <ButtonLink text="Enquire Now" href="/contact" />}
              {learnMore && <Button onClick={scrollToArea} text="Learn More" />}
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  );
};

export default BannerModule;
