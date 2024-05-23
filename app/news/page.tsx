import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from '@/dummynews';

const NewsPage = () => {

    return (
        <>
            <h1>NewsPage</h1>
            <ul className="news-list">
                { DUMMY_NEWS.map(({id, slug, title, image, date}) => (
                    <li key={id}>
                        <Link href={`/news/${slug}`}>
                            <img src={`/images/news/${image}`} alt={title} />
                            <h2>{title}</h2>
                            <em>{date}</em>
                        </Link>
                    </li>
                )) }
            </ul>
        </>
    )
}

export default NewsPage;