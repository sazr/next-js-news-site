import Layout from "../../components/layout";
import Article from "../../components/article/article";
import Head from "next/head";

const articleData = {
  id: "12123453",
  title: "Biden Jabs at China ‘Debt-Trap Diplomacy’ at Americas Summit",
  category: "Politics",
  imgSrc:
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ip9HR9S7k9mw/v1/2000x1334.jpg",
  imgCaption: "Joe Biden Photographer: Chris Kleponis/CNP/Bloomberg",
  keypoints: [
    "President pledges billions in support to build infrastructure",
    "Biden hosts gathering of leaders from Western Hemisphere",
  ],
  content: `President Joe Biden pledged billions in support to help build up infrastructure throughout the Western Hemisphere as he hosted leaders from the region, part of an administration push to offer an alternative to China’s efforts to expand its economic influence.

    Biden said the US International Development Finance Corporation and the Inter-American Development Bank, or IDB, would establish a “new investment platform to channel billions of dollars toward building sustainable infrastructure in the hemisphere,” as he met Friday with leaders at the inaugural Americas Partnership for Economic Prosperity Leaders’ Summit at the White House.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Auctor augue mauris augue neque gravida. Aenean sed adipiscing diam donec. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Nibh mauris cursus mattis molestie a. In nisl nisi scelerisque eu ultrices vitae. Etiam erat velit scelerisque in dictum non consectetur. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Risus nec feugiat in fermentum posuere urna nec. Molestie at elementum eu facilisis. Commodo elit at imperdiet dui accumsan sit amet nulla. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.

    Vel fringilla est ullamcorper eget nulla facilisi etiam. Mauris nunc congue nisi vitae suscipit. Amet purus gravida quis blandit turpis cursus in hac habitasse. Diam ut venenatis tellus in metus vulputate eu. Convallis posuere morbi leo urna. In nisl nisi scelerisque eu ultrices. Sem integer vitae justo eget magna fermentum. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Massa id neque aliquam vestibulum. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.

    Fusce id velit ut tortor pretium viverra suspendisse. Morbi tristique senectus et netus et. Ante metus dictum at tempor commodo ullamcorper a. Feugiat pretium nibh ipsum consequat nisl vel. Aliquet lectus proin nibh nisl condimentum id. In ante metus dictum at. Id donec ultrices tincidunt arcu non sodales neque sodales. Arcu non sodales neque sodales ut etiam sit amet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Risus in hendrerit gravida rutrum quisque non tellus. Tristique nulla aliquet enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sagittis orci a scelerisque purus semper.

    Turpis egestas integer eget aliquet nibh praesent tristique. At tellus at urna condimentum mattis pellentesque. Nisi quis eleifend quam adipiscing vitae proin sagittis. Pretium viverra suspendisse potenti nullam ac tortor. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Urna nunc id cursus metus aliquam eleifend mi. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Sem et tortor consequat id. Pellentesque id nibh tortor id. Nibh sed pulvinar proin gravida hendrerit lectus. Risus sed vulputate odio ut enim.

    Viverra justo nec ultrices dui sapien eget mi proin sed. Commodo ullamcorper a lacus vestibulum. Eget nullam non nisi est sit amet facilisis magna etiam. Ac turpis egestas integer eget aliquet nibh praesent. Eget arcu dictum varius duis. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Urna molestie at elementum eu facilisis sed odio morbi quis. Posuere morbi leo urna molestie at elementum eu facilisis sed. Sagittis orci a scelerisque purus semper. Ac tortor vitae purus faucibus ornare suspendisse sed. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Egestas purus viverra accumsan in nisl.`,
  meta: {
    authorName: "Eric Martin",
    authorUrl: "/authors/AOaOh6XkAJY/eric-martin",
    publishDate: "Updated on November 4, 2023 at 7:17 AM GMT+10",
    relatedArticles: [
      {
        title:
          "Iceland's Blue Lagoon on Alert for Magma Flows After Earthquakes",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRrL.09xuwSs/v1/300x225.jpg",
        url: "",
      },

      {
        title:
          "Israel Latest: Hezbollah Warns on Escalation, US Deploys Drones",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i0qBuKFMmGm8/v0/300x225.jpg",
        url: "",
      },

      {
        title:
          "S&P 500 Has Best Week in 2023 as Bond Yields Slide: Markets Wrap",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iwxou.DMjayg/v0/300x225.jpg",
        url: "",
      },

      {
        title: "Sam Bankman-Fried Convicted of Fraud in Stunning FTX Crash",
        imgSrc: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVIgE7n74hfM/v0/300x225.jpg",
        url: "",
      },
    ],
    popularArticles: [
      {
        title: "How to Make a Luxury Brand From Scratch",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_i1uB0Xh9Us/v1/600x450.jpg",
        authorName: "Ishika Mookerjee",
        url: "",
      },
      {
        title: "Junk Food's $30 Billion Opening Is India's Next Health Crisis",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRaUDTjkHK3I/v0/600x450.jpg",
        authorName: "Agnieszka de Sousa",
        url: "",
      },
      {
        title:
          "Silicon Valley City Wants to Ease Housing Crisis With $150,000 Cargo Containers",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izT5tBiRtiu0/v1/600x450.jpg",
        authorName: "Nadia Lopez",
        url: "",
      },
      {
        title:
          "Foxconn Makes Your iPhone. Now It Wants to Make Your Electric Car",
        imgSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCxhcXWZZxyc/v1/600x450.jpg",
        authorName: "Reed Stevenson",
        url: "",
      },
    ],
  },
};

export default () => {
  return (
    <Layout>
      <Head>
        <title>Foo bar</title>
      </Head>

      <Article {...articleData} />
    </Layout>
  );
};
