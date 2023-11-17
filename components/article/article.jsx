import ArticleMeta from "./article-meta";
import ArticleSocials from "./article-socials";
import { Image } from "@nextui-org/react";
import BelowArticle from "./below-article";
import article from "../../pages/posts/article";

export default ({ content, id, title, imgSrc, category, keypoints, meta, imgCaption }) => {
  keypoints = keypoints || [];
  return (
    <article className="lg:border-l-1 lg:border-l-black lg:border-l-solid lg:border-r-1 lg:border-r-black lg:border-r-solid">
      <div className="max-w-[38rem] lg:max-w-[50rem] md-max-w-[30rem] p-5 mx-auto lg:ml-0">

        <h3 className="text-md mb-1 md:text-xl md:mb-3">{category}</h3>

        <h1 className="text-2xl mb-2 md:text-5xl md:mb-5 font-bold">{title}</h1>

        <ul className="list-square list-inside text-md mb-3 md:text-2xl md:mb-7">
          {keypoints.map((keypoint, index) => {
            return <li key={index}>{keypoint}</li>;
          })}
        </ul>

        <Image src={imgSrc} alt={title} radius="none" shadow="none" loading="eager" className="mb-1" />
        <span className="text-sm mb-4 block">{imgCaption}</span>

        <div className="flex gap-3 md:gap-7 md:flex-row flex-col">

          <div>
            <ArticleSocials />
          </div>

          <div>
            <ArticleMeta {...meta} />
            <div className="font-serif text-xl leading-8 whitespace-pre-line">{content}</div>
          </div>

        </div>

      </div>

      <BelowArticle {...meta} /> 

    </article>
  );
};
