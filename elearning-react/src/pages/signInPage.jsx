import Navbar from "../components/navbar";
import SignInForm from "../components/signInForm";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import "../styles/signUp_&_signIn.css";

const SignInPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SignInForm />
      </main>
      <Footer />
      <NewsletterSection />
    </>
  );
};

export default SignInPage;
