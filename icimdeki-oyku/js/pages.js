// Sayfa İçerik Şablonları
const PAGES = {
  "/": `
    <section class="hero">
      <div class="wrap grid">
        <div>
          <span class="ey">Psikolojik danışmanlık • kişisel gelişim</span>
          <h1>İçindeki <em>öyküyü</em> keşfet.</h1>
          <p class="lead">Bazen değişim, kendine daha yakından bakabildiğin güvenli bir alanla başlar. İçimdeki Öykü; psikolojik danışmanlık ve online danışmanlık odağında bu sürece eşlik eder.</p>
          <div class="actions">
            <a class="pill primary spa" href="/iletisim">İlk adımı at</a>
            <a class="pill secondary spa" href="/surec">Süreç nasıl ilerler?</a>
          </div>
        </div>
        <div class="orbit">
          <img class="logo" src="assets/logo.webp" alt="Beyin ve çiçeklerden oluşan İçimdeki Öykü görsel kimliği">
          <span class="chip c1">Kendini fark et</span>
          <span class="chip c2">Öyküne alan aç</span>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="head">
          <div>
            <span class="ey">Yaklaşım</span>
            <h2>Kendini anlamaya açılan sakin bir alan.</h2>
          </div>
          <p>Psikolojik danışmanlık; hazır cevaplar sunmaktan çok, yaşadıklarını anlamlandırmana ve kendi kaynaklarını fark etmene yardımcı olan bir süreçtir.</p>
        </div>
        <div class="cards">
          <article class="card">
            <div class="num">01</div>
            <h3>Fark etmek</h3>
            <p>Düşüncelerini, duygularını ve tekrar eden örüntülerini daha net görmeye alan açar.</p>
          </article>
          <article class="card">
            <div class="num">02</div>
            <h3>Anlamlandırmak</h3>
            <p>Yaşantılar arasında bağ kurarak sana neyin iyi geldiğini ve neyin zorladığını keşfetmeyi destekler.</p>
          </article>
          <article class="card">
            <div class="num">03</div>
            <h3>İlerlemek</h3>
            <p>Kendi ihtiyaçlarınla daha uyumlu seçimler yapabilmek için süreci adım adım şekillendirirsin.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="quote">
          <p>“İçindeki öykü, duyulmayı hak eder.”</p>
        </div>
      </div>
    </section>

    <section class="band">
      <div class="wrap">
        <div class="head">
          <div>
            <span class="ey" style="color:#bfd6c2">Online danışmanlık</span>
            <h2>Mesafe, kendine ayırdığın alanın önüne geçmesin.</h2>
          </div>
          <p>Online psikolojik danışmanlık; bulunduğun yerden, uygun koşulları sağlayarak görüşme sürecine katılabilmeni mümkün kılar.</p>
        </div>
        <div class="steps">
          <div class="step">
            <b>01 • BAĞLANTI</b>
            <h3>İletişime geç</h3>
            <p>Uygunluk ve süreç hakkında bilgi almak için telefon veya WhatsApp üzerinden ulaş.</p>
          </div>
          <div class="step">
            <b>02 • PLANLAMA</b>
            <h3>Görüşmeyi planla</h3>
            <p>Görüşme biçimi ve uygun zaman karşılıklı iletişimle netleştirilir.</p>
          </div>
          <div class="step">
            <b>03 • SÜREÇ</b>
            <h3>Kendi öyküne dön</h3>
            <p>Görüşmeler, ihtiyaçların ve sürecin doğal akışı doğrultusunda şekillenir.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  "/hakkinda": `
    <section class="pagehero">
      <div class="wrap">
        <span class="ey">İçimdeki Öykü</span>
        <h1>Kendini duymaya ve anlamaya alan aç.</h1>
        <p class="lead">İçimdeki Öykü, psikolojik danışmanlık ve kişisel gelişim odağında bireyin kendi iç dünyasıyla daha bilinçli bir ilişki kurmasını destekleyen bir iletişim alanıdır.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap twocol">
        <div class="quote">
          <p>Her öykünün ritmi, ihtiyacı ve anlamı kendine özgüdür.</p>
        </div>
        <div class="copy">
          <h2>Merkeze seni koyan bir süreç.</h2>
          <p>Danışmanlık sürecinde amaç, sana ne yapman gerektiğini söylemek değil; yaşantılarını daha yakından inceleyebileceğin, düşüncelerini ifade edebileceğin ve kendi cevaplarına yaklaşabileceğin bir alan oluşturmaktır.</p>
          <p>İçerik ve görüşme akışı, ihtiyaçların doğrultusunda ele alınır. Online danışmanlıkta görüşme koşulları ve uygun zaman iletişim sırasında birlikte netleştirilir.</p>
          <div class="actions">
            <a class="pill primary spa" href="/iletisim">İletişime geç</a>
            <a class="pill secondary spa" href="/danismanlik">Danışmanlığı incele</a>
          </div>
        </div>
      </div>
    </section>
  `,

  "/danismanlik": `
    <section class="pagehero">
      <div class="wrap">
        <span class="ey">Danışmanlık</span>
        <h1>Yaşadıklarına başka bir yerden bakabilmek için.</h1>
        <p class="lead">Psikolojik danışmanlık; düşünceler, duygular ve yaşam deneyimleri üzerinde güvenli bir çerçevede çalışmayı mümkün kılan profesyonel bir görüşme sürecidir.</p>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="head">
          <div>
            <span class="ey">Çalışma biçimi</span>
            <h2>Online psikolojik danışmanlık</h2>
          </div>
          <p>Danışmanlık sürecine kendi konfor alanından, bulunduğun her yerden güvenle ve kolayca erişebilmeni sağlar.</p>
        </div>
        <div class="cards">
          <article class="card">
            <div class="num">01</div>
            <h3>Esnek erişim</h3>
            <p>Bulunduğun şehirden bağımsız olarak uygun bir ortamdan görüşmeye katılabilirsin.</p>
          </article>
          <article class="card">
            <div class="num">02</div>
            <h3>Kişiye özgü akış</h3>
            <p>Görüşmeler, tek tip bir kalıba değil; ihtiyaçların ve getirdiğin konular doğrultusunda ilerler.</p>
          </article>
          <article class="card">
            <div class="num">03</div>
            <h3>Farkındalık odağı</h3>
            <p>Yaşadıklarını, ilişkilerini ve içsel süreçlerini daha bütünlüklü fark etmeye alan açar.</p>
          </article>
        </div>
        <p class="note" style="margin-top:22px">Not: Bu sayfa tanı, tedavi veya sonuç garantisi sunmaz; bilgilendirme amaçlıdır.</p>
      </div>
    </section>
  `,

  "/surec": `
    <section class="pagehero">
      <div class="wrap">
        <span class="ey">Süreç</span>
        <h1>İlk mesajdan görüşmeye, sade ve anlaşılır.</h1>
        <p class="lead">Danışmanlık sürecine başlamak için karmaşık bir kayıt akışı yerine doğrudan iletişim kurulabilir.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap twocol">
        <div>
          <h2>Nasıl ilerler?</h2>
          <p class="lead">Görüşme planı, karşılıklı iletişimle netleşir.</p>
        </div>
        <div class="list">
          <div class="item">
            <b>1. İletişime geç</b>
            <p>Telefon veya WhatsApp üzerinden danışmanlık hakkında bilgi almak istediğini ilet.</p>
          </div>
          <div class="item">
            <b>2. Uygunluğu konuş</b>
            <p>Online görüşme biçimi, uygun zaman ve ihtiyaç duyduğun temel bilgiler netleştirilir.</p>
          </div>
          <div class="item">
            <b>3. Görüşmeye hazırlan</b>
            <p>Online görüşme için kendini rahat ifade edebileceğin, mümkün olduğunca sakin ve özel bir ortam seç.</p>
          </div>
          <div class="item">
            <b>4. Süreci birlikte şekillendir</b>
            <p>Görüşmelerin devamı ihtiyaçların ve karşılıklı değerlendirme doğrultusunda ele alınır.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  "/iletisim": `
    <section class="pagehero">
      <div class="wrap">
        <span class="ey">İletişim</span>
        <h1>İlk adım, bazen yalnızca bir mesajdır.</h1>
        <p class="lead">Online psikolojik danışmanlık hakkında bilgi almak veya görüşme için iletişim kurmak üzere aşağıdaki kanalları kullanabilirsin.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap contact">
        <div class="contactbox">
          <h2>Doğrudan iletişim</h2>
          <a href="tel:+905338437890">0533 843 78 90</a>
          <a href="https://wa.me/905338437890" target="_blank" rel="noreferrer">WhatsApp üzerinden yaz</a>
          <a href="https://www.instagram.com/icimdeki.oyku" target="_blank" rel="noreferrer">@icimdeki.oyku</a>
          <p class="note">Online danışmanlık ve görüşme planlaması için doğrudan iletişime geçebilirsin.</p>
        </div>
        <form class="form" id="contactForm">
          <h3>Mesajını hazırla</h3>
          <p class="note">Form mesajını WhatsApp için hazırlar; gönderim sen onayladıktan sonra WhatsApp üzerinden gerçekleşir.</p>
          <label>Adın
            <input name="name" required autocomplete="name" placeholder="Adın">
          </label>
          <label>Mesajın
            <textarea name="message" required placeholder="Danışmanlık hakkında bilgi almak istiyorum..."></textarea>
          </label>
          <button class="pill primary" type="submit">WhatsApp mesajını hazırla</button>
          <p class="note" id="status" role="status"></p>
        </form>
      </div>
    </section>
  `
};
