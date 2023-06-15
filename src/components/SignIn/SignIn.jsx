export default function SignIn() {
  return (
    <>
      <div className="welcome-class">
        <h1>Your Game & Film Audio Partner</h1>
        <p>
          Get the best sound effects with amazing sonic options on massive sound
          vaults, bundles, sound packs, game music & so much more.
          <a href="">Find out what’s new!</a>
        </p>
      </div>
      <div className="login">
        <label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
        <div className="btn-login">
          <button type="submit" id="signInButton">
            Sign In
          </button>
          <p className="signup-link">
            <a href="">Not a member?</a>
          </p>
        </div>
      </div>
    </>
  );
}
