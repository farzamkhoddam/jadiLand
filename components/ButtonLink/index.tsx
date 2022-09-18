import Link from "next/link";
import * as React from "react";
import { MdArrowForward as Arrow } from "react-icons/md";
import { ButtonLinkStyles } from "./ButtonLinkStyles";

interface Props extends React.HTMLAttributes<HTMLLinkElement> {
  text: string;
  arrow?: boolean;
  href?: string | undefined;
  as?: HTMLElement | unknown;
}
const ButtonLink: React.FC<Props> = ({ text, arrow, href }) => {
  return (
    <Link href={href || ""}>
      <ButtonLinkStyles className="btn">
        {text}
        {arrow || href ? <Arrow style={{ marginLeft: "10px" }} /> : null}
      </ButtonLinkStyles>
    </Link>
  );
};

export default ButtonLink;
