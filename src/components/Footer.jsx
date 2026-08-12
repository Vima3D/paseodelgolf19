import React from "react";

export function Footer() {
  return (
    <footer className="footer-credits">
      <div className="container">
        <p className="attribution">
          © Copyright {new Date().getFullYear()}{" "}
          <a href="#">Paseo del Golf 19</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
