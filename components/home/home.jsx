import Head from 'next/head';
import Link from 'next/link';
// import styles from './home.module.css';
import Header from '../header/header';
import Footer from '../footer';
// import Spike from './_spike/spike';
// import SiteHeader from './_spike/spike_nav';

export default () => {
  return (
    <section className='border-3 border-black border-solid w-full h-unit-9xl flex justify-center items-center'>
        <Link href="/posts/article"><h1 className='text-2xl'>Home content</h1></Link>
    </section>
  );
}
