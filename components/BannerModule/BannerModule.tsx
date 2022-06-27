import * as React from 'react';
import { BannerModuleStyles } from './BannerModuleStyles';
import Button from '../Button/Button';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import macbookImg from '../../static/macbook-color.jpg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string;
  price?: string;
  enquire?: unknown;
  children?: ReactNode;
}
const BannerModule: React.FC<Props> = ({
  children,
  title,
  subTitle,
  price,
  enquire,
}) => {
  const router = useRouter();
  function scrollToArea() {
    router.push('#topContent');
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <Image
            className='banner__image'
            src={macbookImg}
            alt='Banner Image'
            layout='fill'
          />
        )}

        <div className='container'>
          <div className='banner__content'>
            {title && (
              <h1>
                {title}
                <span style={{ color: 'var(--primary)' }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className='price'>
                £{price}
                <span style={{ color: 'var(--primary)' }}>.</span>
              </h2>
            )}
            <div className='banner__btns'>
              {enquire && <Button text='Enquire Now' as={Link} to='/contact' />}
              <Button onClick={scrollToArea} text='Learn More' />
            </div>
          </div>
        </div>
        <div className='gradient'></div>
      </BannerModuleStyles>
      <span id='topContent'></span>
    </>
  );
};

export default BannerModule;
