import React from 'react';
import RecipeReviewCard from './PortfolioCard';

export default function navbar() {
  return (
    <div className='mt-3'>
      <div className="row">
        <div className="col-12 text-center">
          <ul className="nav bg-dark text-light">
            <li className="nav-item">
              <a href='' className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <RecipeReviewCard />
            </li>
            {/* <li className="nav-item">
              <a href="./contact.html" className="nav-link">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

