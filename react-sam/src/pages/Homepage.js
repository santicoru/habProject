import React from "react";
import logo from "../assets/images/SAMlogotipo.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main-homepage">
        <section className="photo-back">
          <h1>SOFTWARE A MEDIDA</h1>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
