import React from "react";
import PostItems from "./PostItems";
import PostItem from "./PostItem";
import useLatestBlogPost from "../../hooks/useFeaturedCourses";
import ButtonLink from "../ButtonLink";

interface Props {
  title?: string;
  introduction?: string;
  HasAllNewsLink?: boolean;
}

const LatestPosts: React.FC<Props> = ({
  title,
  introduction,
  HasAllNewsLink = true,
}) => {
  const latestBlogPost = useLatestBlogPost();
  return (
    <div className="section">
      <div className="container container__tight">
        {title || introduction ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
                <span>.</span>
              </h2>
            )}
            {introduction && <p>{introduction}</p>}
          </div>
        ) : null}

        <PostItems>
          {latestBlogPost.map((node, index) => {
            return <PostItem key={index} node={node} />;
          })}
        </PostItems>
        {HasAllNewsLink && (
          <div className="learn__more">
            <ButtonLink text="All News Items" href="/news" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestPosts;
