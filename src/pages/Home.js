import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = function ({ page }) {
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [country, setCountry] = useState(() =>
    window.localStorage.getItem('country')
  );
  const navigate = useNavigate();

  const handleFormEmail = function (event) {
    event.preventDefault();

    const {
      email: { value: emailAddress },
    } = event.target.elements;

    if (emailAddress) {
      alert(`
        here is the email : ${emailAddress}
    `);

      // if the email address is in the database than redirect the user to the 'page3'
      navigate('/page3');
    } else {
      setEmailErrorMsg('Please enter your email address');
    }
  };
  return (
    <div className="home-page">
      {country ? (
        <div>
          <h2>
            Welcome!, to <span className="page">{page}</span>
          </h2>

          <form action="" onSubmit={handleFormEmail}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address..."
              />

              <p id="country" className="error-msg">
                {emailErrorMsg}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                readOnly
                value={country}
              />
            </div>
            <button
              type="submit"
              className="form-btn"
              style={{ border: `2px solid green` }}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        (window.location.href = '/page2')
      )}
    </div>
  );
};
