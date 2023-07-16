import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { resetPasswordReq } from './fetchApi';
// import css
import './ResetPassword.css';

const ResetPassword = () => {
    const [email, setemail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { resetPasswordLink } = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPasswordReq({email, resetPasswordLink, newPassword, confirmNewPassword });
      history.push('/');
    } catch (error) {
      setErrorMessage(error.response.data.error.newPassword);
    }
  };

  return (
    // <div>
    //   <h1>Reset Password</h1>
    //   <form onSubmit={handleSubmit}>
    //   <div>
    //       <label htmlFor="Email">Email</label>
    //       <input
    //         type="email"
    //         id="Email"
    //         value={email}
    //         onChange={(e) => setemail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="newPassword">New Password</label>
    //       <input
    //         type="password"
    //         id="newPassword"
    //         value={newPassword}
    //         onChange={(e) => setNewPassword(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="confirmNewPassword">Confirm New Password</label>
    //       <input
    //         type="password"
    //         id="confirmNewPassword"
    //         value={confirmNewPassword}
    //         onChange={(e) => setConfirmNewPassword(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <button type="submit">Reset Password</button>
    //     </div>
    //     {errorMessage && <div>{errorMessage}</div>}
    //   </form>
    // </div>
    <div className="reset-password-form">
  <h1 className="reset-password-heading">Reset Password</h1>
  <form onSubmit={handleSubmit} className="reset-password-form-element">
    <div className="reset-password-form-field">
      <label htmlFor="Email" className="reset-password-label">Email</label>
      <input
        type="email"
        id="Email"
        value={email}
        placeholder="Enter your email for confirmation"
        onChange={(e) => setemail(e.target.value)}
        className="reset-password-input"
        required={true}
      />
    </div>
    <div className="reset-password-form-field">
      <label htmlFor="newPassword" className="reset-password-label">New Password</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        placeholder="Enter your new password"
        onChange={(e) => setNewPassword(e.target.value)}
        className="reset-password-input"
        required={true}
      />
    </div>
    <div className="reset-password-form-field">
      <label htmlFor="confirmNewPassword" className="reset-password-label">Confirm New Password</label>
      <input
        type="password"
        id="confirmNewPassword"
        value={confirmNewPassword}
        placeholder="Confirm your new password"
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        className="reset-password-input"
        required={true}
      />
    </div>
    <div className="reset-password-form-field">
      <button type="submit" className="reset-password-button">Reset Password</button>
    </div>
    {errorMessage && <div className="reset-password-error">{errorMessage}</div>}
  </form>
</div>
  );
};

export default ResetPassword;
