import React from "react";
import Seo from "../../components/SEO";
import Layout from "../../components/Layout";
import PostTemplate from "../../PageComponents/News/post-template";
import { newsPage } from "../../constants/contents";

const Post = () => {
  const data = newsPage;
  return (
    <>
      <Seo title={"news"} />
      <Layout>
        <PostTemplate {...data} isBackEnabled={false} />
      </Layout>
    </>
  );
};

export default Post;
