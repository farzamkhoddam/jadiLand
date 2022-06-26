import * as React from 'react';
import NavModule from './NavModule/NavModule';
import AnimMain from './AnimMain/AnimMain';
import Footer from './Footer/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { siteMetadata } from '../config';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteMetadata.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteMetadata.title} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <NavModule />
        <AnimMain>
          {children}
          <Footer />
        </AnimMain>
      </motion.div>
    </>
  );
};

export default Layout;
