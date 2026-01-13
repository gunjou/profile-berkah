import React from "react";
import { useParams, Navigate } from "react-router-dom";
import articles from "../data/articles";
import ArticleContent from "../components/artikel/ArticleContent";
import ArticleSidebar from "../components/artikel/ArticleSidebar";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/artikel" replace />;
  }

  return (
    <>
      <section className="pt-32 pb-24 bg-white dark:bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ArticleContent article={article} />
          </div>

          <div className="lg:col-span-4">
            <ArticleSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetail;
