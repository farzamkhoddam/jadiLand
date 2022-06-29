import React from "react";
import BannerModule from "../components/BannerModule/BannerModule";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import Layout from "../components/Layout";
import Perk from "../components/PerksModule/Perk";
import PerksModule from "../components/PerksModule/PerksModule";
import LatestPosts from "../components/Post/LatestPosts";
import SEO from "../components/SEO";
import FeaturesCourses from "../components/Features/Features";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to GeekLand"
          subTitle="Using a combination of Gatsby and Contentful, GeekLand is ready to deploy and simple to use."
        />
        <BasicTextModule
          title="A super-fast theme that is easy to get started, using the power of
            GatsbyJS"
          content="Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product."
          href="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>

        <FeaturesCourses
          title="Featured Courses in GeekLand."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        {/* 
        <LatestPosts
          title="The Latest from GeekLand"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
        */}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
