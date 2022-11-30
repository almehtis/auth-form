<script lang="ts">
  import { emailRegex } from '../helpers/validate-email'

  let hasEmailError = false
  let emailInput = ''
  let passwordlInput = ''
  let isPasswordHidden = true
  const href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

  const validateEmail = (): boolean => {
    let isEmailValid = emailRegex.test(emailInput)
    return isEmailValid || emailInput.length === 0 ? hasEmailError = false : hasEmailError = true
  }

  const switchPasswordIcon = (): boolean => {
    const inputType = document.getElementById('password') as HTMLInputElement;
    inputType.focus()
    if(isPasswordHidden && inputType.type === 'password') {
      inputType.type = 'text'
      return isPasswordHidden = false
    } else {
      inputType.type = 'password'
      return isPasswordHidden = true
    }
  }
</script>


<form on:submit={() => location.assign('https://evilmartians.com/')}>
  <h1>Sign in</h1>

  <div class="input-block">
    <label for="email">Email</label>
    <input
      bind:value={emailInput}
      on:input={validateEmail}
      name="email"
      placeholder="example@alien.com"
      type="email"
    />

    {#if hasEmailError}
      <span class="error-message">Wrong email format</span>
    {/if}
  </div>

  <div class="input-block">
    <label for="email">Password</label>
    <input
      id="password"
      bind:value={passwordlInput}
      name="password"
      placeholder=&bull&bull&bull&bull&bull&bull
      type="password"
    >

    <button class="eye-button" on:click={switchPasswordIcon} type="button">
      {#if isPasswordHidden}
        <img src="icons/eye-open.svg" alt="Open eye icon">
      {:else}
        <img src="icons/eye-none.svg" alt="Crossed eye icon">
      {/if}
    </button>
    <a href={href}>Forgot password?</a>
  </div>

  <button
    class="submit-button"
    disabled={hasEmailError || emailInput.length === 0 || passwordlInput.length === 0}
    type="submit"
  >
    Sign in
  </button>
  <span class="or-block">OR</span>

  <div class="lower-block">
    <button
    class="github-button"
    on:click={() => location.assign('https://github.com/')}
    type="button"
    >
      <div class="github-button-entrails">
        <img src="icons/github-logo.svg" alt="Github logo">
        Sign in with GitHub account
      </div>
    </button>
    <span class="bottom-text">Not an alien yet? <a href={href}>Create account.</a></span>
  </div>
</form>

<style>
  form {
    display: grid;
    row-gap: 2rem;
    margin: auto;
    width: 25rem;
  }

  h1 {
    margin-left: -3px;
    font-size: 2rem;
  }

  .input-block {
    position: relative;
    font-size: 0.8rem;
    display: grid;
    row-gap: 1rem;
  }

  input {
    height: 2.5rem;
    border: 1px solid oklch(80% 0 0);
    border-radius: 0.25rem;
    padding: 0px 0.7rem;
    transition: border 0.2s linear;
  }

  input:hover {
    border: 1px solid oklch(0% 0 0);
  }

  input:focus {
    outline: none;
    border: 1px solid oklch(57.74% 0.163 280.84);
  }

  .eye-button {
    position: absolute;
    display: grid;
    right: 0.5rem;
    top: 3rem;
    background-color: oklch(100% 0 0);
    border: none;
    border-radius: 0.25rem;
    height: 1.7rem;
    width: 1.7rem;
    transition: background-color 0.2s linear;
  }

  .eye-button:hover {
    cursor: pointer;
    background-color: oklch(95% 0 0);
  }

  /* I think it's the better option to render this image properly on IOS devices */
  .eye-button > img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .error-message {
    position: absolute;
    bottom: -1.5rem;
    font-size: 0.8rem;
    color: oklch(61.22% 0.231 22.61);
  }

  .submit-button {
    background-color: oklch(57.74% 0.163 280.84);
    color: oklch(100% 0 0);
    font-size: inherit;
    border: none;
    border-radius: 0.25rem;
    height: 2.5rem;
    transition: background-color 0.2s linear;
  }

  .submit-button:hover {
    background-color: oklch(50.74% 0.163 280.84);
    cursor: pointer;
  }

  .submit-button:disabled {
    cursor: not-allowed;
    color: oklch(70% 0 0);
    background-color: oklch(93% 0 0);
  }

  .github-button {
    display: grid;
    place-items: center;
    background-color: oklch(100% 0 0);
    font-size: inherit;
    border: 1px solid oklch(80% 0 0);
    border-radius: 0.25rem;
    height: 2.5rem;
    transition: background-color 0.2s linear;
  }

  .github-button:hover {
    cursor: pointer;
    background-color: oklch(98% 0 0);
  }

  .github-button-entrails {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
    align-items: center;
    color: oklch(0% 0 0) !important; /* for IOS devices */
  }

  a {
    color: oklch(60.74% 0.163 280.84);
    text-decoration: none;
    max-width: fit-content;
    font-size: 0.8rem;
    transition: color 0.2s linear;
  }

  a:hover {
    color: oklch(70.74% 0.163 280.84);
  }

  .or-block {
    position: relative;
    text-align: center;
    color: oklch(80% 0 0);
    font-size: 0.7rem;
  }

  .or-block::before {
    position: absolute;
    display: block;
    content: "";
    background: oklch(80% 0 0);
    height: 1px;
    width: 45%;
    bottom: 50%;
    left: 0;
  }

  .or-block::after {
    position: absolute;
    display: block;
    content: "";
    background: oklch(80% 0 0);
    height: 1px;
    width: 45%;
    bottom: 50%;
    right: 0;
  }

  .lower-block {
    display: grid;
    row-gap: 2rem;
    text-align: center;
  }

  .bottom-text {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    form {
      margin-top: 1.5rem;
      max-width: fit-content;
    }
  }
</style>