import React from "react";
import Seo from "../../../components/SEO";
import styled from "styled-components/macro";
import BannerModule from "../../../components/BannerModule/BannerModule";
import Faq from "../../../components/Faq/Faq";
import FeaturesCourses from "../../../components/Courses/Features";
import imacKeyboard from "../Images/imac-keyboard.webp";
import Image from "next/image";
import { ProductGallery, ProductTemplateStyles } from "./styles";

const Producttemplate = (props) => {
  const {
    headerImage,
    title,
    price,
    introduction,
    description,
    faqs,
    gallery,
  } = props;
  return (
    <>
      <Seo title={title} />
      <BannerModule title={"Products"} enquire={false} learnMore={false}>
        <Image className="banner__image" src={imacKeyboard} alt={title} />
      </BannerModule>
      {gallery && (
        <div className="section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
        </div>
      )}
      <FeaturesCourses
        title="Featured Products from GeekLand."
        introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
      />
    </>
  );
};

export default Producttemplate;
