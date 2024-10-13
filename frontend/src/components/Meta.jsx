import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({
  title = "Welcome to ProShop",
  description = "We sell the best products",
  keywords = "electronics, buy electronics",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Meta;
