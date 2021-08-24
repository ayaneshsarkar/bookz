import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Head = props => {
  return (
    <Fragment>
      <Helmet>
        <title>{ props.title }</title>
        <meta name="description" content={props.description || ''} />
      </Helmet>
    </Fragment>
  );
}

export default Head;