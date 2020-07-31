/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';

function ButtonLink(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <a className={props.className} href={props.href}>
      Novo vídeo
    </a>
  );
}

export default ButtonLink;
