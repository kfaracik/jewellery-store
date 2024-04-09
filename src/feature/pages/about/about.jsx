import React from "react";
import Divider from '@mui/material/Divider';
import "./AboutUsPage.css";

export const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="section">
        <h2 className="section-title">About Us</h2>
        <div className="section-content">
          <p>Welcome to our jewelry store!</p>
          <p>
            We are passionate about creating stunning and timeless jewelry
            pieces that reflect the beauty of life and love. Our team of skilled
            artisans handcrafts each piece with precision and care, using only
            the finest materials.
          </p>
          <p>
            At our store, we strive to provide exceptional customer service and
            offer a wide selection of exquisite jewelry for every occasion.
            Whether you're shopping for an engagement ring, a special gift, or a
            treat for yourself, we have something for everyone.
          </p>
          <p>
            Thank you for choosing our store for your jewelry needs. We look
            forward to helping you find the perfect piece that will be cherished
            for a lifetime.
          </p>
        </div>
      </div>

      <div className="section">
        <Divider />
        <h2 className="section-title">Technologies We Use</h2>
        <div className="section-content">
          <h3>Technologies and Libraries Used</h3>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Technologia</th>
                <th>Opis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React.js</td>
                <td>Frontend development</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Styling and layout (zastosowano kilka możliwości stylowania CSS)</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>Frontend scripting</td>
              </tr>
              <tr>
                <td>Webpack</td>
                <td>Module bundling</td>
              </tr>
              <tr>
                <td>HTML5</td>
                <td>Struktura dokumentu</td>
              </tr>
              <tr>
                <td>React Material</td>
                <td>Biblioteka komponentów</td>
              </tr>
              <tr>
                <td>Yarn</td>
                <td>Menadżer pakietów</td>
              </tr>
              <tr>
                <td>Framer Motion</td>
                <td>Animacje</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <Divider />
        <h2 className="section-title">Dlaczego Strona Spełnia Wymagania</h2>
        <div className="section-content">
          <h3>Poprawność i Kompatybilność</h3>
          <p>
            Strona jest zbudowana zgodnie z zasadami HTML5 i CSS, zapewniając
            poprawność deklaracji typu oraz nietrywialne formatowanie styli.
            Ponadto, przetestowaliśmy kompatybilność w różnych przeglądarkach,
            zapewniając, że strona wyświetla się poprawnie we wszystkich
            popularnych przeglądarkach.
          </p>
          <h3>Dostępność dla Niepełnosprawnych</h3>
          <p>
            Dostępność dla osób niepełnosprawnych, umożliwia nawigacja
            za pomocą klawisza tabulacji, co ułatwia poruszanie się po stronie
            osobom korzystającym z czytników ekranowych. Dodatkowo, wszystkie
            istotne obrazki posiadają odpowiednie teksty alternatywne, które są
            czytelne dla oprogramowania czytającego.
          </p>
          <h3>Zastosowanie Technologii</h3>
          <p>
            Oprócz HTML i CSS, wykorzystaliśmy różnorodne technologie, takie jak
            React.js, JavaScript i React Material, aby stworzyć dynamiczny i
            interaktywny serwis.
          </p>
          <h3>Spójny System Nawigacji</h3>
          <p>
            Serwis zawiera spójny i wygodny system nawigacji, który ułatwia
            użytkownikom poruszanie się po stronie i odnajdywanie potrzebnych
            informacji.
          </p>
          <h3>Wygodny Interfejs Użytkownika</h3>
          <p>
            Projektując stronę, kładziemy nacisk na wygodę użytkownika, zapewniając
            czytelne i przyjemne doświadczenie przeglądania treści. Unikamy
            nieczytelnych zestawień kolorów i mikroskopijnych czcionek, aby
            zapewnić komfort korzystania z serwisu.
          </p>
        </div>
      </div>
    </div>
  );
};
