import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <section className="App-intro">
          <h1> Hey !</h1>
          <p> Je m'appelle Vidushan CHOORIYAKUMARAN. </p>
          <p>
            Je suis actuellement un étudiant en cinquième année à l'ESILV.
            Le site est actuellement en développement, pourquoi ne pas revenir plus tard ? ;) <br />
            En attendant, je vous invite à me contacter à travers mes réseaux sociaux.
          </p>
        </section>
        <section className="App-social">
          <a href="https://www.linkedin.com/in/c-vidushan/"><i class="fab fa-linkedin-in fa-6x"></i></a>
          <a href="https://www.facebook.com/vidushan.chooriyakumaran"><i class="fab fa-facebook-f fa-6x"></i></a>
          <a href="https://www.github.com/vidjul"><i class="fab fa-github fa-6x"></i></a>
        </section>
      </div>
    );
  }
}

export default App;