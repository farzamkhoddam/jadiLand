import React, { useContext, useState } from 'react';
import MenuContext from '../../contexts/MenuContext';
import { motion } from 'framer-motion';
import { menuItems } from './NavConstants';
import { FiChevronDown as Chevron } from 'react-icons/fi';
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from './NavModuleStyles';
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from './NavAnim';
import { useConfig } from '../../hooks/useConfig';
import useFeaturedCourses from '../../hooks/useFeaturedCourses';
import Link from 'next/link';

const NavModule = () => {
  const featuredCourses = useFeaturedCourses();

  const [isOpen, setNav] = useContext(MenuContext);
  const [subNavIsOpen, setSubNav] = useState(false);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  const toggleSubNav = () => {
    setSubNav((subNavIsOpen) => !subNavIsOpen);
  };

  const {
    siteMetadata: { title },
  } = useConfig();

  return (
    <NavModuleStyles>
      <div className='nav'>
        <div className='container'>
          <HamburgerStyles
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            className={isOpen ? ' open' : ''}
          >
            <motion.span
              className='bar'
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className='bar'
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className='bar'
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          {title && (
            <LogoStyles>
              <Link href='/'>
                <>
                  {title}
                  <span>.</span>
                </>
              </Link>
            </LogoStyles>
          )}
        </div>
      </div>
      <motion.div
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={menuList}
        transition={{ type: 'ease', stiffness: 50, velocity: 50 }}
        className='menu'
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* navid activeClassName='menu__item--active' */}
              <Link onKeyDown={toggleNav} href={item.path}>
                <div onClick={toggleNav}>
                  {item.text}
                  <span>.</span>
                </div>
              </Link>
            </li>
          ))}
          {featuredCourses && (
            <li className={subNavIsOpen ? 'open' : 'closed'}>
              <button
                type='button'
                onClick={toggleSubNav}
                onKeyDown={toggleSubNav}
              >
                Products<span>.</span>
                <Chevron />
              </button>

              <SubNavStyles
                initial='closed'
                animate={subNavIsOpen ? 'open' : 'closed'}
                variants={subMenuNavVariants}
              >
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    href='/products'
                  >
                    <>
                      All Course<span>.</span>
                    </>
                  </Link>
                </li>
                <hr />
                {featuredCourses.map((item, index) => {
                  const { slug, title } = item;
                  return (
                    <li key={index}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        href={`/courses/${slug}`}
                      >
                        <>
                          {title}
                          <span>.</span>
                        </>
                      </Link>
                    </li>
                  );
                })}
              </SubNavStyles>
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  );
};

export default NavModule;
