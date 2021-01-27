import React from 'react';

let Navigation = (props) => {
  let lastIndex = props.breadcrumbs.length - 1;

  let navLink = (page, index) => {
    if (index < props.breadcrumbs.length - 1) {
      return (
        <a href={page.url} className="nav-link">
          <span className="hover">{page.name}</span>
          <span className="space-around">›</span>
        </a>
      );
    } else {
      return (
        <a href={page.url} id="nav-link-last" className="nav-link">
          <span className="hover">{page.name}</span>
        </a>
      );
    }
  }

  return (
    <div id="nav-container">
        <ol className="nav-list inline-block">
            {
              props.breadcrumbs.map( (page, index) => (
                <li key={index} className="nav-item">
                  {navLink(page, index)}
                </li>  
              ))
            }
        </ol>
    </div>
  )
};

export default Navigation;