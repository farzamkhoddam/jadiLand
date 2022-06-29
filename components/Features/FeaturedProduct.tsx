import * as React from "react";
import Button from "../ButtonLink/ButtonLink";
import { FeaturedProductStyles } from "./FeaturesStyles";
import Link from "next/link";
import Image from "next/image";
import { FeaturedCoursesCard } from "../../Interfaces";

interface Props {
  feature: FeaturedCoursesCard;
}
const FeaturedProduct: React.FC<Props> = ({ feature }) => {
  const { headerImage, title, introduction } = feature;
  console.log("**** headerImage ===", typeof headerImage);
  return (
    <FeaturedProductStyles>
      <Link href="/navid">
        <>
          <img
            className="features__item--img"
            src={headerImage}
            alt="Product Image"
          />
          {title && introduction && (
            <div className="features__item--content">
              {title && <h4>{title}</h4>}
              {introduction && <p>{introduction}</p>}
              <Button text="Read More" arrow={true} />
            </div>
          )}
        </>
      </Link>
    </FeaturedProductStyles>
  );
};

export default FeaturedProduct;
