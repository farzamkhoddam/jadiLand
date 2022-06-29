import * as React from "react";
import { FeaturedProductsStyles } from "./FeaturesStyles";
import FeaturedProduct from "./FeaturedProduct";

import Button from "../ButtonLink/ButtonLink";
import useFeaturedCourses from "../../hooks/useFeaturedCourses";

const Features = ({ title, introduction }) => {
  const featuredProduct = useFeaturedCourses();
  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}
      <div className="container container__tight container__scroll">
        {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />;
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button href="/products" text="All Products" />
      </div>
    </FeaturedProductsStyles>
  );
};

export default Features;
