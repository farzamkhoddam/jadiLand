import * as React from 'react';
import ButtonLink from '../ButtonLink';
import { BasicTextModuleStyles } from './BasicTextModuleStyles';

const BasicTextModule = ({ title, content, href, linkText }) => {
  return (
    <BasicTextModuleStyles className='section'>
      <div className='container container__tight'>
        <div>
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: '60px' }}>{content}</p>}

          <ButtonLink text={linkText} href={href} />
        </div>
      </div>
    </BasicTextModuleStyles>
  );
};

export default BasicTextModule;
