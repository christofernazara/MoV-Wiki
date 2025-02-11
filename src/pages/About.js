import Cardbio from "../components/CardBio";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About({ about, isLogin, setIsLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  return (
    <>
      <NavbarComponent setIsLogin={setIsLogin} />
      <Cardbio about={about} />
      <FooterComponent />
    </>
  );
}

export default About;
