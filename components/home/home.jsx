import Link from 'next/link';

export default () => {
  return (
    <section className='border-3 border-black border-solid w-full h-unit-9xl flex justify-center items-center'>
        <Link href="/posts/article"><h1 className='text-2xl'>Home content</h1></Link>
    </section>
  );
}
