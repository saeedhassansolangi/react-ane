import React from 'react';
import { countries } from '../country';
import { useNavigate } from 'react-router-dom';

export const Page2 = function ({ page }) {
  const [country, setCountry] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const navigate = useNavigate();

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const selectedCountry = event.target.elements.country.value;
    if (selectedCountry) {
      setCountry(selectedCountry);
      setErrorMsg('');
      window.localStorage.setItem('country', selectedCountry);
      navigate('/');
    } else {
      setCountry('');
      setErrorMsg('Required');
      window.localStorage.setItem('country', '');
    }
  };

  return (
    <div className="page2-page">
      <h2>
        Welcome!, to <span className="page">{page}</span>
      </h2>

      <h3>Please Select a Location below</h3>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="country">Location *</label>
          <select name="country" id="country">
            <option value="">Select</option>
            {countries.map((country) => {
              return (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <p id="country" className="error-msg">
            {errorMsg}
          </p>
        </div>

        <button
          type="submit"
          className="form-btn"
          style={{ border: `2px solid ${country ? 'green' : 'red'}` }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
