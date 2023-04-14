import { Button } from 'react-bootstrap';
import './Sidbar.scss';

const Sidbar = () => {
  return (
    <section className="sidebar_area">
      <h4 className="p-3 rounded mb-5">Filter Products By</h4>
      <aside className="sidebar_widget">
        <h3 className="widget_title">Search Product</h3>
        <hr />
        <input type="search" className="form-control" placeholder="Search . . ." />
      </aside>
      <aside className="sidebar_widget">
        <h3 className="widget_title">Categories</h3>
        <hr />
        <ul className="bg-none p-0 list">
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Men
            </label>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Women
            </label>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Children
            </label>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Infant
            </label>
          </li>
        </ul>
      </aside>
      <aside className="sidebar_widget">
        <h3 className="widget_title">Brands</h3>
        <hr />
        <ul className="bg-none p-0 list">
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Men
            </label>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Women
            </label>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Children
            </label>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" id="" /> Infant
            </label>
          </li>
        </ul>
      </aside>
      <aside className="sidebar_widget">
        <h3 className="widget_title">Tags</h3>
        <hr />
        <div className="tags">
          <a href="/">Eid</a>
          <a href="/">Color</a>
          <a href="/">Toys</a>
        </div>
      </aside>
      <aside className="sidebar_widget">
        <h3 className="widget_title">Rangewise</h3>
        <hr />
        <div className="range d-flex justify-content-flex-start align-items-center gap-3">
          <input type="text" name="" placeholder="Min" />
          <input type="text" name="" placeholder="Max" />
          <Button>Search</Button>
        </div>
      </aside>
    </section>
  );
};

export default Sidbar;
