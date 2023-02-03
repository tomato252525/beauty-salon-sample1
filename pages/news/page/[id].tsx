import Head from "next/head"
import Header from "@/components/Header"
import Image from "next/image"
import { motion } from 'framer-motion'
import { client } from "@/libs/client"
import Link from "next/link"
import { Pagination } from '@/components/Pagination';


export type News = {
    id: string;
    title: string;
    category: Category;
};

export type Category = {
    id: string;
    name: string;
}

export const getStaticPaths = async () => {
    const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
    const data = await client.get({ endpoint: 'news' });

    const paths = range(1, Math.ceil(Number(data.totalCount) / 10)).map((i) => `/news/page/${i}`);
    return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: any } }) => {
    const numId = Number(context.params.id);
    const offset = (numId - 1) * 10;
    const limit = 10;
    const queries = { offset: offset, limit: limit };
    const data = await client.get({ endpoint: "news", queries: queries });
    const createDate = data.contents.map((content: { publishedAt: string }) =>
        new Date(Date.parse(content.publishedAt) + 32400000)
            .toLocaleDateString('ja-JP')
            .replace(/\//g, '/')
    );

    return {
        props: {
            news: data.contents,
            totalCount: data.totalCount,
            currentPageNumber: numId,
            createDate,
        },
    };
};

type Props = {
    news: News[];
    totalCount: number;
    currentPageNumber: number,
    createDate: string[];
};

export default function NewsPageId({ news, totalCount, currentPageNumber, createDate }: Props) {
    var i = 0;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
                <Image className="object-cover" src="/reserve-bg.jpg" layout="fill" alt="" />
            </div>
            <Head>
                <title>NEWS | Beauty Salon 1</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="text-white pt-16 md:pt-28">
                <div className="p-5" id="news">
                    <h1 className="text-6xl px-0 pb-10 font-bold md:px-14">NEWS</h1>
                    <div className="content">
                        {news.map((news) => (
                            <Link key={news.id} href={`../${news.id}`} scroll={false} className="flex my-3 md:my-7 md:pl-5 md:ml-16 text-sm md:text-base">
                                <div className="news-item-w">{createDate[i++]}</div>
                                <div className="news-item-w hidden md:block">[{news.category.name}]</div>
                                <div className="break-all">{news.title}</div>
                            </Link>
                        ))}
                        <div className="my-5 md:my-10 md:pl-5 md:ml-16">
                            <Pagination currentPageNumber={currentPageNumber} maxPageNumber={Math.ceil(totalCount / 10)} whatPage="news" />
                        </div>
                    </div>
                </div>
            </main>
        </motion.div >
    )
}