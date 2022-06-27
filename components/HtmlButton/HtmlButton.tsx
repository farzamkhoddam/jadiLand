import Link from 'next/link';
import * as React from 'react';
import { MdArrowForward as Arrow } from 'react-icons/md';
import { HtmlButton } from './ButtonStyles';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  arrow?: boolean;
}
const Button: React.FC<Props> = ({ text, arrow, ...props }) => {
  return (
    <HtmlButton className='btn' {...props}>
      <>
        {text}
        {arrow ? <Arrow style={{ marginLeft: '10px' }} /> : null}
      </>
    </HtmlButton>
  );
};

export default Button;
