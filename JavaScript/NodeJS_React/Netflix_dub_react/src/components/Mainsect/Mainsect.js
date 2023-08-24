import InputGetStarted from "./InputGetStarted";

const Mainsect = () => {
  return (
    <section className="container Mainsect">
      <h2>Unlimited movies, TV shows, and more</h2>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>
        <span>Ready to watch? Enter your email to create or restart your membership.</span>
      </p>
      <InputGetStarted placeholder="Email address" />
    </section>
  );
};

export default Mainsect;
