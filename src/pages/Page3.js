import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Page3 = function ({ page }) {
  const navigate = useNavigate();
  const handleFormSearch = function (event) {
    event.preventDefault();
    const {
      doSomething: { value: searchValue },
    } = event.target.elements;

    navigate('/result', { state: { search: searchValue } });
  };

  return (
    <div className="page3">
      <h2>
        Welcome!, to <span className="page">{page}</span>
      </h2>

      <form action="" onSubmit={handleFormSearch}>
        <div className="form-group">
          <label htmlFor="doSomething"></label>
          <input type="search" name="doSomething" id="doSomething" required />
        </div>

        <button
          type="submit"
          className="form-btn btn-page3"
          style={{ border: `2px solid dodgerblue` }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
