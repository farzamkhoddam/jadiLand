import Link from 'next/link';
import * as React from 'react';
import Button from '../HtmlButton/HtmlButton';
import { PostItemStyles } from './PostStyles';

const BlogItem = ({ node }, key) => {
  const { title, introduction, createdAt } = node;
  return (
    <Link key={key} href={'/navid'}>
      <PostItemStyles>
        <h4>{title}</h4>
        {introduction && <p>{introduction}</p>}
        <div className='blogitem__meta'>
          <Button text='Read More' arrow={true} />
          <p>{createdAt}</p>
        </div>
      </PostItemStyles>
    </Link>
  );
};

export default BlogItem;
