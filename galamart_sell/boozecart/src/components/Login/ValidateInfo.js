export default function validateInfo(values) {
  let errors = {};

  // if (!values.username.trim()) {
  //   errors.username = "Username is required";
  // }
  // if (!values.lastname.trim()) {
  //   errors.lastname = "Last Name required";
  // }
  // if (!values.country.trim()) {
  //   errors.country = "Country required";
  // }
  // if (!values.phonenumber.trim()) {
  //   errors.phonenumber = "Mobile Number required";
  // }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  return errors;
}
