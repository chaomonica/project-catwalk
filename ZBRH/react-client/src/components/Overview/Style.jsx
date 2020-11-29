import React from 'react';
import Badge from '@material-ui/core/Badge';



const Style = ({ changeStyle, style, currentStyle }) => {

  return (
    <Badge color="primary" badgeContent={currentStyle === style ? '✓' : null}>
      <img
        alt={style.name}
        src={style.photos[0].thumbnail_url}
        className='styles'
        onClick={e => {
          e.preventDefault();
          changeStyle(style.style_id, e);
          console.log('styleId on click: ', style.style_id);
        }}
      />
    </Badge>
  );
};

export default Style;