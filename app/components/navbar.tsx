'use client';

import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex bg-transparent px-10 py-10">
      <motion.div
        initial={{ y: '-400%' }}
        animate={{
          y: ['-400%', '0%'],
          transition: {
            type: 'spring',
            ease: 'easeIn',
            duration: 1.7,
            delay: 0.5,
          },
        }}
        className=" flex-1 overflow-y-hidden "
      >
        <ul className=" flex-1 justify-evenly font-sans font-bold flex">
          <li className="hover:underline underline-offset-1">
            <a href="/shop">SHOP</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="/men">MEN</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="/women">WOMEN</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="/kids">KIDS</a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: '-400%' }}
        animate={{
          y: ['-400%', '0%'],
          transition: {
            type: 'spring',
            ease: 'easeIn',
            duration: 1.7,
            delay: 0.5,
          },
        }}
      >
        <Link
          href="/"
          className="text-xl lg:text-3xl tracking-wide cursor-pointer "
        >
          MOXIE
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: '-400%' }}
        animate={{
          y: ['-400%', '0%'],
          transition: {
            type: 'spring',
            ease: 'easeIn',
            duration: 1.7,
            delay: 0.5,
          },
        }}
        className="flex-1 flex "
      >
        <div className="flex flex-1 ">
          <ul className="flex flex-1 justify-end gap-8 text-base items-center">
            <li className="hover:underline underline-offset-1">
              <a href="/about">ABOUT</a>
            </li>
            <li className="hover:underline underline-offset-1">
              <a href="/contact">CONTACT</a>
            </li>
            <li className="cursor-pointer">
              <FaSearch size={'20px'} />
            </li>
            <li className="cursor-pointer">
              <Link href={'/shop'}>
                <FaShoppingBag size={'20px'} />
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
