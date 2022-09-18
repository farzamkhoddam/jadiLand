import React from "react";
import Button from "../../components/ButtonLink";
import { PostSingleStyles } from "../../components/Post/PostStyles";
import LatestPosts from "../../components/Post/LatestPosts";
import BannerModule from "../../components/BannerModule/BannerModule";
import Image from "next/image";
import laptopPhoto from "./Images/laptopPhoto.jpeg";

const PostTemplate = (contentfulPost) => {
  const { title, createdAt, content, isBackEnabled } = contentfulPost;
  return (
    <>
      <section>
        <BannerModule title={"News"} enquire={false} learnMore={false}>
          <Image className="banner__image" src={laptopPhoto} alt={title} />
        </BannerModule>
        <PostSingleStyles>
          {title && <h1 className="blogsingle__title">{title}</h1>}
          {createdAt && (
            <p className="blogsingle__date">Posted on {createdAt}</p>
          )}
          {content && (
            <article className="blogsingle__content">
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></div>
              {isBackEnabled && (
                <div className="blogsingle__back">
                  <Button href="/news" text="Back to news" />
                </div>
              )}
            </article>
          )}
        </PostSingleStyles>
      </section>
      <LatestPosts HasAllNewsLink={false} />
    </>
  );
};

export default PostTemplate;
