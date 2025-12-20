import "../CSS Files/About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>Hakkımızda</h1>
        <p className="about-hero-subtitle">Deniz Lezzetlerine Hoş Geldiniz</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>🐟 Biz Kimiz?</h3>
          <p>
            Deniz Lezzetleri, en taze ve en kaliteli balık ürünlerini özenle
            seçerek kullanıcılarına sunan bir deniz ürünleri platformudur.
          </p>
        </div>

        <div className="about-card">
          <h3>🎯 Misyonumuz</h3>
          <p>
            Amacımız; deniz ürünlerini sağlıklı, lezzetli ve güvenilir şekilde
            sofralarla buluşturmak ve kaliteyi standart haline getirmektir.
          </p>
        </div>

        <div className="about-card">
          <h3>⚓ Neden Biz?</h3>
          <ul>
            <li>Günlük ve taze tedarik</li>
            <li>Profesyonel işleme süreci</li>
            <li>Seçili ve güvenilir ürünler</li>
          </ul>
        </div>
      </div>

      <div className="about-footer">
        <h2>Denizin Tadı, Tazeliğiyle!</h2>
        <p>
          Her ürün, denizin taptaze ilhamıyla hazırlanmış gerçek bir lezzet
          deneyimi sunar.
        </p>
      </div>
    </section>
  );
}
