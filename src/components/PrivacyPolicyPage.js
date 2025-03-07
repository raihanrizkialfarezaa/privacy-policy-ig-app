import React, { useState } from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };
  
  const sections = [
    {
      title: "Ringkasan",
      content: "Kebijakan Privasi ini menjelaskan bagaimana aplikasi kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda saat Anda menggunakan layanan kami untuk membuat postingan Instagram melalui website Point of Sales kami."
    },
    {
      title: "Informasi yang Kami Kumpulkan",
      content: (
        <div>
          <p>Ketika Anda menggunakan aplikasi kami, kami dapat mengumpulkan jenis informasi berikut:</p>
          <ul>
            <li>Informasi akun Instagram Anda (melalui API Instagram setelah Anda memberikan izin)</li>
            <li>Konten yang Anda unggah dan posting melalui aplikasi kami</li>
            <li>Data penggunaan dan interaksi dengan aplikasi kami</li>
            <li>Informasi dari sistem Point of Sales Anda termasuk data produk yang dipilih untuk diposting</li>
            <li>Informasi perangkat dan browser yang Anda gunakan untuk mengakses aplikasi kami</li>
            <li>Informasi lokasi terbatas jika Anda mengaktifkan layanan lokasi</li>
          </ul>
        </div>
      )
    },
    {
      title: "Bagaimana Kami Menggunakan Informasi Anda",
      content: (
        <div>
          <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
          <ul>
            <li>Memungkinkan Anda membuat postingan Instagram langsung dari sistem Point of Sales</li>
            <li>Meningkatkan dan mengoptimalkan kinerja aplikasi kami</li>
            <li>Menyediakan dukungan pelanggan</li>
            <li>Menganalisis tren penggunaan untuk meningkatkan fitur dan fungsionalitas</li>
            <li>Memastikan keamanan dan integritas aplikasi dan data Anda</li>
            <li>Mematuhi kewajiban hukum</li>
          </ul>
        </div>
      )
    },
    {
      title: "Berbagi Informasi dengan Meta Platforms",
      content: (
        <div>
          <p>Sebagai aplikasi developer Facebook yang menggunakan API Instagram, kami mengikuti Kebijakan Platform Facebook dan memiliki tanggung jawab untuk menangani data pengguna dengan benar. Ketika Anda menggunakan aplikasi kami:</p>
          <ul>
            <li>Kami berinteraksi dengan Meta Platforms (Facebook dan Instagram) untuk memungkinkan posting konten ke akun Instagram Anda</li>
            <li>Kami hanya mengakses data yang diperlukan untuk fungsi aplikasi sesuai dengan izin yang Anda berikan</li>
            <li>Kami tidak menjual data Anda kepada pihak ketiga</li>
            <li>Kami hanya berbagi data dengan Meta Platforms sejauh yang diperlukan untuk fungsi aplikasi</li>
          </ul>
          <p>Semua penggunaan data mematuhi <a href="https://developers.facebook.com/terms">Kebijakan Platform Facebook</a> dan <a href="https://developers.facebook.com/docs/instagram-api/overview">Persyaratan API Instagram</a>.</p>
        </div>
      )
    },
    {
      title: "Keamanan Data",
      content: (
        <div>
          <p>Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi informasi Anda:</p>
          <ul>
            <li>Enkripsi data dalam transmisi menggunakan protokol SSL/TLS</li>
            <li>Penyimpanan data yang aman dengan akses terbatas</li>
            <li>Pemantauan sistem rutin untuk mendeteksi potensi kerentanan</li>
            <li>Peninjauan dan pembaruan kebijakan keamanan secara berkala</li>
            <li>Akses data dibatasi hanya untuk personel yang memerlukan akses untuk melakukan tugas mereka</li>
          </ul>
        </div>
      )
    },
    {
      title: "Penyimpanan Data dan Retensi",
      content: (
        <div>
          <p>Kami menyimpan data Anda hanya selama diperlukan untuk menyediakan layanan kami dan sesuai dengan kewajiban hukum:</p>
          <ul>
            <li>Data akun disimpan selama Anda menggunakan aplikasi kami</li>
            <li>Riwayat posting dan konten disimpan selama diperlukan untuk fungsi aplikasi</li>
            <li>Anda dapat meminta penghapusan data Anda kapan saja (lihat "Hak Anda" di bawah)</li>
            <li>Setelah akun dihapus, kami akan menghapus atau menganonimkan data Anda dalam waktu 30 hari</li>
          </ul>
        </div>
      )
    },
    {
      title: "Hak Anda",
      content: (
        <div>
          <p>Tergantung pada lokasi Anda, Anda mungkin memiliki hak berikut terkait dengan data Anda:</p>
          <ul>
            <li>Mengakses data pribadi yang kami miliki tentang Anda</li>
            <li>Meminta koreksi data yang tidak akurat</li>
            <li>Meminta penghapusan data Anda (dengan batasan tertentu)</li>
            <li>Keberatan terhadap pemrosesan data tertentu</li>
            <li>Meminta pembatasan penggunaan data Anda</li>
            <li>Meminta portabilitas data Anda</li>
            <li>Mencabut persetujuan untuk penggunaan data di masa depan</li>
          </ul>
          <p>Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak di bagian "Hubungi Kami".</p>
        </div>
      )
    },
    {
      title: "Cookie dan Teknologi Pelacakan",
      content: (
        <div>
          <p>Aplikasi kami menggunakan cookie dan teknologi pelacakan serupa untuk:</p>
          <ul>
            <li>Menjaga agar Anda tetap login ke akun Anda</li>
            <li>Memahami bagaimana Anda menggunakan aplikasi kami</li>
            <li>Meningkatkan pengalaman pengguna</li>
            <li>Mengoptimalkan kinerja aplikasi</li>
          </ul>
          <p>Anda dapat mengelola preferensi cookie Anda melalui pengaturan browser Anda. Namun, menonaktifkan cookie tertentu mungkin memengaruhi fungsionalitas aplikasi kami.</p>
        </div>
      )
    },
    {
      title: "Anak-anak",
      content: "Aplikasi kami tidak ditujukan untuk digunakan oleh individu di bawah usia 18 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda percaya bahwa kami telah mengumpulkan informasi dari anak, harap hubungi kami segera melalui informasi kontak di bagian 'Hubungi Kami'."
    },
    {
      title: "Pembaruan Kebijakan Privasi",
      content: "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan pada praktik kami atau karena alasan hukum lainnya. Kami akan memberi tahu Anda tentang perubahan signifikan dengan memposting kebijakan baru di aplikasi kami dan, jika diperlukan, melalui email. Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala."
    },
    {
      title: "Kepatuhan Terhadap Peraturan",
      content: (
        <div>
          <p>Aplikasi kami dirancang untuk mematuhi peraturan privasi data yang berlaku, termasuk namun tidak terbatas pada:</p>
          <ul>
            <li>General Data Protection Regulation (GDPR) untuk pengguna di Uni Eropa</li>
            <li>California Consumer Privacy Act (CCPA) untuk penduduk California</li>
            <li>Undang-Undang Perlindungan Data Pribadi Indonesia</li>
            <li>Kebijakan Platform dan Persyaratan Pengembang Facebook</li>
          </ul>
        </div>
      )
    },
    {
      title: "Hubungi Kami",
      content: (
        <div>
          <p>Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini atau praktik data kami, silakan hubungi kami di:</p>
          <div>
            <p>Email: reza.raihanrizki@gmail.com</p>
            <p>Alamat: Jl. Gedongan VII/12A, Mojokerto, Indonesia</p>
            <p>Telepon: +62-821-3183-1262</p>
          </div>
          <p>Kami akan merespons permintaan Anda sesegera mungkin, selambat-lambatnya dalam 30 hari.</p>
        </div>
      )
    }
  ];
  
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <div className="header-content">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            AppName
          </div>
          <nav className="navigation">
            <a href="#" className="nav-link active">Kebijakan Privasi</a>
          </nav>
        </div>
      </header>
      
      <main className="privacy-main">
        <div className="privacy-card">
          <div className="card-header">
            <h1 className="card-title">Kebijakan Privasi</h1>
            <p className="card-date">Terakhir diperbarui: 7 Maret 2025</p>
          </div>
          
          <div className="card-content">
            <p className="intro-text">
              Kami di autoposts berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan aplikasi integrasi Instagram dan Facebook kami dengan Point of Sales.
            </p>
            
            <div className="section-container">
              {sections.map((section, index) => (
                <div key={index} className="section">
                  <button
                    className="section-button"
                    onClick={() => toggleSection(index)}
                  >
                    <span>{section.title}</span>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ transform: expandedSection === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === index && (
                    <div className="section-content">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e5e5e5', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Dengan menggunakan aplikasi kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="privacy-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Tentang Kami</h3>
              <p>
                Aplikasi yang menghubungkan sistem Point of Sales Anda dengan Instagram untuk mempermudah promosi produk.
              </p>
            </div>
            <div className="footer-column">
              <h3>Tautan Penting</h3>
              <ul>
                <li><a href="#">Kebijakan Privasi</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Hubungi Kami</h3>
              <ul>
                <li className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>reza.raihanrizki@gmail.com</span>
                </li>
                <li className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+62-821-3183-1262</span>
                </li>
              </ul>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} autoposts. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;