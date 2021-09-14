import Page from '../layout/page';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <Page>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Register</h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Register;
