import Navbar from "../components/navbar";
import SignUpForm from "../components/signUpForm";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsLetter";
import "../styles/signUp_&_signIn.css";

const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SignUpForm />
      </main>
      <Footer />
      <NewsletterSection />
    </>
  );
};

export default SignUpPage;