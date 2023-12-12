function SignUp() {
  return (
    <div>
      <form class="login100-form validate-form">
        <span class="login100-form-title p-b-70">Welcome</span>
        <span class="login100-form-avatar">
          <img src="images/avatar-01.jpg" alt="AVATAR" />
        </span>
        <div
          class="wrap-input100 validate-input m-t-85 m-b-35"
          data-validate="Enter username"
        >
          <input class="input100" type="text" name="username" />
          <span class="focus-input100" data-placeholder="Username"></span>
        </div>
        <div
          class="wrap-input100 validate-input m-b-50"
          data-validate="Enter password"
        >
          <input class="input100" type="password" name="pass" />
          <span class="focus-input100" data-placeholder="Password"></span>
        </div>
        <div class="container-login100-form-btn">
          <button class="login100-form-btn">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
