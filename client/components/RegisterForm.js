import axios from 'axios';
import { useState } from 'react';

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register',
  });

  const { name, email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: '',
      success: '',
      buttonText: 'Register',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    axios
      .post(`http://localhost:1968/api/register`, {
        name,
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group pb-2">
        <input
          value={name}
          onChange={handleChange('name')}
          type="text"
          className="form-control"
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group pb-2">
        <input
          value={email}
          onChange={handleChange('email')}
          type="email"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>
      <div className="form-group pb-4">
        <input
          value={password}
          onChange={handleChange('password')}
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText} </button>
      </div>
      {JSON.stringify(state)}
    </form>
  );
};

export default RegisterForm;
