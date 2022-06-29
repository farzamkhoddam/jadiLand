import * as React from "react";
import staticImage from "../../static/abstract-building.jpg";
import gatsbyImage from "../../static/logos/gatsby-logo.svg";
import contentful from "../../static/logos/contentful-logo.svg";
import { PerksModuleStyles } from "./PerksModuleStyles";
import { MdOutlineClose as Cross } from "react-icons/md";
import Perk from "./Perk";
import Image from "next/image";
import { HTMLAttributes } from "react";

const PerksModule: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <Image
        className="perks__image--bg"
        src={staticImage}
        alt="Perks Module"
        layout="fill"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Built For Speed"
          content="By using GatsbyJS, the GeekLand site is super-fast out of the box"
        >
          <div className="gatsby-image-wrapper">
            <Image src={gatsbyImage} alt="Perk Image" />
          </div>
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Built For Content"
          content="Contentful helps you edit your application with ease as your business expands"
          className="gatsby-image-wrapper"
        >
          <div className="gatsby-image-wrapper">
            <Image src={contentful} alt="Perk Image" />
          </div>
        </Perk>
      </div>
    </PerksModuleStyles>
  );
};

export default PerksModule;
