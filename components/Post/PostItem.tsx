import * as React from 'react';
import Button from '../HtmlButton/HtmlButton';
import { PostItemStyles } from './PostStyles';

const BlogItem = ({ node }, key) => {
  const { title, gatsbyPath, introduction, createdAt } = node;
  return (
    <PostItemStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {introduction && <p>{introduction}</p>}
      <div className='blogitem__meta'>
        <Button text='Read More' arrow={true} />
        <p>{createdAt}</p>
      </div>
    </PostItemStyles>
  );
};

export default BlogItem;
