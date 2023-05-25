import "./Library.css";

function Library() {
  return (
    <>
      <header className="header">
        <div className="container">
          <input className="search" type="search" name="search" id="search" placeholder="Search music" />
          <div className="filter">
            <ul className="filter__list">
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
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
          <li className="songs__item">Song</li>
        </ul>
      </main>

      <div className="menu">
        <ul className="menu__list container">
          <li className="menu__item">
            <a href="/">Home</a>
          </li>
          <li className="menu__item">
            <a href="/#search">Search</a>
          </li>
          <li className="menu__item">
            <a href="/library">Library</a>
          </li>
          <li className="menu__item">
            <a href="/#profile">Profile</a>
          </li>
        </ul>
      </div>

      <div className="pop-up"></div>
    </>
  );
}

export default Library;
