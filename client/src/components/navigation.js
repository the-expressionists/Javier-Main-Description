import React from 'react';

let Navigation = (props) => (
    <div id="nav-container">
        <ol className="nav-list inline-block">
            {
              props.breadcrumbs.map( (page, index) => (
                <li key={index} className="nav-item">
                  <a href={page.url} className="nav-link">
                    <span>{page.name}</span>
                    <span className="space-around">›</span>
                  </a>
                </li>  
              ))
            }
        </ol>
    </div>
);

export default Navigation;