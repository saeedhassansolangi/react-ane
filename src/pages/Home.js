import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Home = function ({ page }) {
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [country, setCountry] = useState(() =>
    window.localStorage.getItem('country')
  );
  const navigate = useNavigate();
  const [serials, setSerials] = useState([]);
  const [formValues, setFormValues] = useState([
    { serialNumber: '', reason: '' },
  ]);

  useEffect(() => {
    axios
      .get(`/apis/correctserial.json`)
      .then((res) => {
        const { data } = res.data;
        setSerials(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { serialNumber: '', reason: '' }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleFormEmail = async function (event) {
    event.preventDefault();

    console.log(serials);

    const {
      email: { value: emailAddress },
    } = event.target.elements;

    if (emailAddress) {
      const email = emailAddress.toLowerCase();

      const res = await axios.get(`/apis/CorrectEmail.json`);

      if (res.data.email !== email) {
        setEmailErrorMsg('Not Found');
        return;
      }

      alert(JSON.stringify(formValues));

      navigate('/page3');
    } else {
      setEmailErrorMsg('Please enter your email address');
    }
  };
  return (
    <div
      className="home-page"
      style={{
        height: '100vh',
        overflowY: 'scroll',
        marginTop: '10px',
        scrollBehavior: 'smooth',
      }}
    >
      {country ? (
        <>
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

            <div className="serial-numbers">
              <div className="serials">
                <h3>Serial Numbers </h3>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addFormFields}
                >
                  +
                </button>
              </div>
              {formValues.map((formValue, i) => (
                <div className="serial-number" key={i}>
                  <div className="form-group">
                    <label htmlFor="serialNumber">Serial Number</label>

                    <select
                      name="serialNumber"
                      id="serialNumber"
                      onChange={(e) => handleChange(i, e)}
                    >
                      <option value="" disabled selected>
                        Select Serial Number
                      </option>
                      {serials.map((serial, index) => (
                        <option key={index} value={serial.serialnumber}>
                          {serial.serialnumber}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reason">Reason For Visit</label>

                    <select
                      name="reason"
                      id="reason"
                      onChange={(e) => handleChange(i, e)}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>

                  <button type="button" onClick={() => removeFormFields(i)}>
                    -
                  </button>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="form-btn"
              style={{ border: `2px solid green` }}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        navigator('/page2')
      )}
    </div>
  );
};
