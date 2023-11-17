import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default ({}) => {
    return (
        <Layout>
            <Head>
                <title>Foo bar</title>
            </Head>
            <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            <div>First post</div>
            <Link href="/">Back</Link>
            <Image
                src="/images/profile.jpg"
                width={144}
                height={144}
                alt="Foo"
            />
        </Layout>
    );
}