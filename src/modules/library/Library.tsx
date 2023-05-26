import "./Library.css";

function Library() {
  return (
    <>
      <header className="header">
        <div className="container">
          <input
            className="search"
            type="search"
            name="search"
            id="search"
            placeholder="Search music"
          />
          <div className="filter">
            <ul className="filter__list">
              <li className="filter__item">
                <button type="button" className="filter__button">
                  Filter
                </button>
              </li>
              <li className="filter__item">
                <button type="button" className="filter__button is-active">
                  Filter
                </button>
              </li>
              <li className="filter__item">
                <button type="button" className="filter__button">
                  Filter
                </button>
              </li>
              <li className="filter__item">
                <button type="button" className="filter__button">
                  Filter
                </button>
              </li>
              <li className="filter__item">
                <button type="button" className="filter__button">
                  Filter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="songs">
        <ul className="songs__list container">
          <li className="songs__item">
            <div className="song">
              <div className="song__title">Some song</div>
              <div className="song__author">Some author</div>
            </div>
            <div className="action">...</div>
          </li>
          <li className="songs__item">
            <div className="song">
              <div className="song__title">Some song</div>
              <div className="song__author">Some author</div>
            </div>
            <div className="action">...</div>
          </li>
          <li className="songs__item">
            <div className="song">
              <div className="song__title">Some song</div>
              <div className="song__author">Some author</div>
            </div>
            <div className="action">...</div>
          </li>
          <li className="songs__item">
            <div className="song">
              <div className="song__title">Some song</div>
              <div className="song__author">Some author</div>
            </div>
            <div className="action">...</div>
          </li>
          <li className="songs__item">
            <div className="song">
              <div className="song__title">Some song</div>
              <div className="song__author">Some author</div>
            </div>
            <div className="action">...</div>
          </li>
        </ul>
      </main>

      {/* <div className="menu">
        <ul className="menu__list container">
          <li className="menu__item">
            <a className="menu__link" href="/">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#search">
              Search
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/library">
              Library
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#profile">
              Profile
            </a>
          </li>
        </ul>
      </div> */}

      <div className="pop-up"></div>
    </>
  );
}

export default Library;
