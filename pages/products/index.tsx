import React from "react";
import Seo from "../../components/SEO";
import Layout from "../../components/Layout";
import ProductTemplate from "../../PageComponents/Products/ProductTemplate";
import { productsPage } from "../../constants/contents";

const Products = () => {
  const data = productsPage;
  return (
    <>
      <Seo title={data.title} />
      <Layout>
        <ProductTemplate {...data} />
      </Layout>
    </>
  );
};

export default Products;
