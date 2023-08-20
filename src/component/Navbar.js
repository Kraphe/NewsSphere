import React, { useState } from 'react'
import News from './News';

const Navbar = () => {

    const [Category, setCategory] = useState('');
    const [Pagesize, SetPagesize] = useState(6);
    const [Country, setCountry] = useState('in');
    const changepagesize = (newPagesize) => {
      SetPagesize(newPagesize);
    };
    const changeCountry = (newCountry) => {
      setCountry(newCountry);
    };
    const changeCategory = (newCategory) => {
      setCategory(newCategory);
    };
    return (
      <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">NewsSphere</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    </ul>
                </div>

              <div class="btn-group ">
                <div class="dropdown mx-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {Pagesize}
                    </button>
                    <ul class="dropdown-menu">
                      <li><button type="button" class="btn btn-light" onClick={() => changepagesize(3)}>3</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changepagesize(6)}>6</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changepagesize(9)}>9</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changepagesize(12)}>12</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changepagesize(18)}>18</button></li>
                    </ul>
                  </div>

                  <div class="dropdown mx-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {Country}
                    </button>
                    <ul class="dropdown-menu">
                      <li><button type="button" class="btn btn-light" onClick={() => changeCountry('in')}>India (in)</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCountry('us')}>USA (us)</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCountry('jp')}>Japan (jp)</button></li>
                    </ul>
                  </div>

                  <div class="dropdown mx-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {Category === '' ? 'General' : Category}
                    </button>
                    <ul class="dropdown-menu">
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('')}>General</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('business')}>Buisness</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('entertainment')}>Entertainment</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('health')}>Health</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('sports')}>Sports</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('science')}>Science</button></li>
                      <li><button type="button" class="btn btn-light" onClick={() => changeCategory('technology')}>Technology</button></li>
                    </ul>
                  </div>
              </div>
            </nav>
           
            <News Pagesize={Pagesize} Category={Category} Country={Country} />
      </div>
    )
}

export default Navbar;