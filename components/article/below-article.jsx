import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default ({relatedArticles, popularArticles}) => {
  // console.log('', relatedArticles);
  relatedArticles = relatedArticles || [];
  popularArticles = popularArticles || [];

  return (
    <section className="px-5">
      <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-6">More From Bloomberg</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:max-w-[52rem] mb-2 md:mb-10">
        {relatedArticles.map((article, index) => {
            return <Card
            shadow="none"
            radius="none"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="border-0 border-b-1 border-b-black pb-5 flex flex-row gap-3 md:flex-col"
          >
            <CardBody className="overflow-visible p-0 flex-initial w-auto md:w-full">
              <Image
                shadow="sm"
                radius="none"
                alt={article.title}
                className="object-cover w-full h-[70px] md:h-[140px] p-0 m-0"
                src={article.imgSrc}
              />
            </CardBody>
            <CardFooter className="text-small text-left flex-col items-start px-0 py-0 md:py-3">
              <b>{article.title}</b>
            </CardFooter>
          </Card>
        })}
      </div>
      <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-6">Top Reads</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pb-10">
        {popularArticles.map((article, index) => {
            return <Card
            shadow="none"
            radius="none"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="border-0 border-b-1 border-b-black pb-2"
          >
            <CardBody className="overflow-visible p-0 flex-initial">
              <Image
                shadow="sm"
                radius="none"
                width="100%"
                alt={article.title}
                className="w-full object-cover h-[200px] p-0 m-0"
                src={article.imgSrc}
              />
            </CardBody>
            <CardFooter className="text-small text-left flex-col items-start px-0">
              <b>{article.title}</b>
              <p className="text-default-500">By {article.authorName}</p>
            </CardFooter>
          </Card>
        })}
      </div>
    </section>
  );
};
