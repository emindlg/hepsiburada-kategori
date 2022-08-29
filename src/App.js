import './App.css';
import sicon from '../src/images/searchicon.png';
import logo1 from '../src/images/hepsiburada.png';


function App() {
  return (
  <container>
    <div className="App">
      <div className="header">

        <img src={logo1} alt="alt" className="logo" />
        <navbar className="App-navbar">
          <img className="icon" src={sicon}></img>
          <input type="search" placeholder='Ürün, kategori veya marka ara'/>
        </navbar>
        <button type="button" >ARA</button>        

      </div>
      <footer className="header-foot">
          <div className="f1"></div>
          <div className="f2"></div>
          <div className="f3"></div>
          <div className="f4"></div>
          <div className="f5"></div>
          <div className="f6"></div>
      </footer>     
    </div>
    <div className="category">
      <ul className="category-list">
          <li className="elektronik">
            <a>Elektronik</a>          
            <ul className="elektronik-alt-menu">            
                <li>
                  Bilgisayar/Tablet <span className="sign">&gt;</span>
                </li>
                <li>
                  Yazıcılar &amp; Projeksiyon <span className="sign">&gt;</span>
                </li>
                <li>
                  Telefon &amp; Telefon Aksesuarları <span className="sign">&gt;</span>
                </li>
                <li>
                  Tv, Görüntü ve Ses Sistemleri<span className="sign">&gt;</span>
                </li>
                <li>
                  Beyaz Eşya<span className="sign">&gt;</span>
                </li>
                <li>
                  Klima ve Isıtıcılar<span className="sign">&gt;</span>
                </li>
                <li>
                  Elektrikli Ev Aletleri<span className="sign">&gt;</span>
                </li>
                <li>
                  Foto &amp; Kamera<span className="sign">&gt;</span>
                </li>
                <li>
                  Oyun &amp; Oyun Konsolları<span className="sign">&gt;</span>
                </li>           
            </ul>
          </li>            
          <li className="moda">
            <a>Moda</a>
            <ul className="moda-alt-menu">
              <div>
                <li><h4>Giyim</h4></li>           
                <li>
                  Elbise
                </li>
                <li>
                  Triko &amp; Kazak
                </li>
                <li>
                  Mont, Kaban
                </li>
                <li>
                  Sweatshirt
                </li>
                <li>
                  Bluz
                </li>
                <li>
                  Gömlek
                </li>
                <li>
                  Pantolon
                </li>
                <li>
                  Kadın Kot Ceket, Kot Etek
                </li>
                <li>
                  T-Shirt
                </li>           
                <li>
                  Ceket
                </li>           
                <li>
                  Etek
                </li>           
                <li>
                  Trençkot
                </li>
              </div> 
              <div>
              <li><h4>Kadın</h4></li>           
                <li>
                  Elbise
                </li>
                <li>
                  Triko &amp; Kazak
                </li>
                <li>
                  Mont, Kaban
                </li>
                <li>
                  Sweatshirt
                </li>
                <li>
                  Bluz
                </li>
                <li>
                  Gömlek
                </li>
                <li>
                  Pantolon
                </li>
                <li>
                  Kadın Kot Ceket, Kot Etek
                </li>
                <li>
                  T-Shirt
                </li>           
                <li>
                  Ceket
                </li>           
                <li>
                  Etek
                </li>           
                <li>
                  Trençkot
                </li>
              </div>
              <div>
              <li><h4>Erkek</h4></li>            
                <li>
                  Elbise
                </li>
                <li>
                  Triko &amp; Kazak
                </li>
                <li>
                  Mont, Kaban
                </li>
                <li>
                  Sweatshirt
                </li>
                <li>
                  Bluz
                </li>
                <li>
                  Gömlek
                </li>
                <li>
                  Pantolon
                </li>
                <li>
                  Kadın Kot Ceket, Kot Etek
                </li>
                <li>
                  T-Shirt
                </li>           
                <li>
                  Ceket
                </li>           
                <li>
                  Etek
                </li>           
                <li>
                  Trençkot
                </li>
              </div>
              <div>
              <li><h4>Spor</h4></li>            
                <li>
                  Elbise
                </li>
                <li>
                  Triko &amp; Kazak
                </li>
                <li>
                  Mont, Kaban
                </li>
                <li>
                  Sweatshirt
                </li>
                <li>
                  Bluz
                </li>
                <li>
                  Gömlek
                </li>
                <li>
                  Pantolon
                </li>
                <li>
                  Kadın Kot Ceket, Kot Etek
                </li>
                <li>
                  T-Shirt
                </li>           
                <li>
                  Ceket
                </li>           
                <li>
                  Etek
                </li>           
                <li>
                  Trençkot
                </li>
              </div>                          
            </ul>
          </li>
          <li className="ev">
            <a>Ev, Yaşam, Kırtasiye, Ofis</a>
            <ul className="ev-alt-menu">
              <div>
                <li><h4>Mutfak</h4></li>           
                <li>
                  Tava &amp; Tencere &amp; Düdüklü Tencere
                </li>
                <li>
                  Yemek &amp; Kahvaltı Takımı
                </li>
                <li>
                  Çatal, Kaşık, Bıçak Takımları
                </li>
                <li>
                  Yemek Hazırlık Gereçleri
                </li>
                <li>
                  Saklama &amp; Düzenleme
                </li>
                <li>
                  <h4>Mobilya</h4>                
                </li>
                <li>
                  Salon &amp; Oturma Odası
                </li>
                <li>
                  Yatak Odası
                </li>
                <li>
                  Çalışma Odası
                </li>           
                <li>
                  Antre &amp; Hol
                </li>           
                <li>
                  Mutfak
                </li>           
                <li>
                  Yemek Odası
                </li>
              </div> 
              <div>
                <li><h4>Ev Tekstili</h4></li>           
                <li>
                  Yatak
                </li>
                <li>
                  Yastık
                </li>
                <li>
                  Yorgan
                </li>
                <li>
                  Nevresim
                </li>
                <li>
                  Alez
                </li>
                <li>
                  <h4>Ev Dekorasyon</h4>
                </li>
                <li>
                  Tablo
                </li>
                <li>
                  Ayna
                </li>
                <li>
                  Duvar Kağıdı
                </li>           
                <li>
                  Mum
                </li>           
                <li>
                  Kokular
                </li>           
                <li>
                  Pratik Ürünler
                </li>
              </div>
              <div>
                <li><h4>Elektrikli Ev Aletleri</h4></li>           
                <li>
                  Elektrikli Mutfak Aletleri
                </li>
                <li>
                  Ütü
                </li>
                <li>
                  Süpürge
                </li>
                <li>
                  Çay Makineleri
                </li>
                <li>
                  Kahve Makineleri
                </li>
                <li>
                  Tost Makineleri
                </li>
                <li>
                  <h4>Ofis Mobilyaları</h4>
                </li>
                <li>
                  Ofis Masası
                </li>
                <li>
                  Ofis Dolabı
                </li>           
                <li>
                  Ofis Koltuğu
                </li>           
                <li>
                  Oyuncu Koltuğu
                </li>           
                <li>
                  Ofis Aksesuarları
                </li>
              </div>
              <div>
                <li><h4>Ev Tekstili</h4></li>           
                <li>
                  Yatak
                </li>
                <li>
                  Yastık
                </li>
                <li>
                  Yorgan
                </li>
                <li>
                  Nevresim
                </li>
                <li>
                  Alez
                </li>
                <li>
                  <h4>Ev Dekorasyon</h4>
                </li>
                <li>
                  Tablo
                </li>
                <li>
                  Ayna
                </li>
                <li>
                  Duvar Kağıdı
                </li>           
                <li>
                  Mum
                </li>           
                <li>
                  Kokular
                </li>           
                <li>
                  Pratik Ürünler
                </li>
              </div>                          
            </ul>
          </li>
          <li className="oto">
            <a>Oto, Bahçe, Yapı Market</a>
            <ul className="oto-alt-menu">
              <div>
                <li><h4>Oto Aksesuar</h4></li>           
                <li>
                  Yaz, Kış, Bakım Ürünleri
                </li>
                <li>
                  Motor Yağı ve Yakıtları
                </li>
                <li>
                  Akü ve Akü Aksesuarları
                </li>
                <li>
                  <h4>Yedek Parçalar</h4>
                </li>
                <li>
                  Far, Buji, Fren Balatası
                </li>
                <li>
                  Trafik İlk Yardım Seti               
                </li>
                <li>
                  <h4>Tüm Motosiklet Ürünleri</h4>
                </li>
                <li>
                  Motosiklet Modelleri
                </li>
                <li>
                  Motosiklet Aksesuarları
                </li>           
                <li>
                  <h4>Motosiklet Sürücü Giyim</h4>
                </li>           
                <li>
                  Kask, Mont, Eldiven, Yağmurluk
                </li>           
                <li>
                  Motosiklet Çantaları
                </li>
              </div> 
              <div>
                <li><h4>Bahçe</h4></li>           
                <li>
                  Bahçe Makineleri, Bahçe Mobilyaları
                </li>
                <li>
                  Mangal, Barbekü, Bahçe
                </li>
                <li>
                  Dekorasyon, Bahçe Aydınlatma
                </li>
                <li>
                  Çiçek Yetiştirme ve Bitki Bakımı
                </li>
                <li>
                <h4>Banyo &amp; Mutfak</h4>
                </li>
                <li>
                  Banyo Mobilyaları
                </li>
                <li>
                  Duşakabin, Duş Sistemleri
                </li>
                <li>
                  Banyo Aksesuarları
                </li>
                <li>
                  Batarya &amp; Musluk
                </li>           
                <li>
                  Banyo Tekstili
                </li>           
                <li>
                  Vitrifiye
                </li>           
                <li>
                  Tesisat Malzemeleri
                </li>
              </div>
              <div>
                <li><h4>Elektrik &amp; Tesisat</h4></li>           
                <li>
                  Led Ampul, Şerit Led
                </li>
                <li>
                  Tasarruflu Ampul
                </li>
                <li>
                  Grup Priz
                </li>
                <li>
                  Anahtar
                </li>
                <li>
                  Priz
                </li>
                <li>
                  Isı &amp; Nem Ölçer
                </li>
                <li>
                  <h4>Aydınlatma</h4>
                </li>
                <li>
                  Avize
                </li>
                <li>
                  Lambader
                </li>           
                <li>
                  <h4>Yurt Dışına Satış</h4>
                </li>           
                <li>
                  Yapı Market
                </li>           
                <li>
                  Oto Aksesuar
                </li>
              </div>
              <div>
                <li><h4>Yapı Market</h4></li>           
                <li>
                  Matkap
                </li>
                <li>
                  Freze
                </li>
                <li>
                  Taşlama
                </li>
                <li>
                  <h4>Hırdavat</h4>
                </li>
                <li>
                  Takım Çantası
                </li>
                <li>
                  İş Güvenliği Ürünleri
                </li>
                <li>
                  Boya Aksesuarları
                </li>
                <li>
                  <h4>Mekanik El Aletleri</h4>
                </li>
                <li>
                  El Testeresi
                </li>           
                <li>
                  Silikon Tabancası
                </li>           
                <li>
                  Jeneratör
                </li>           
                <li>
                  Lokma Takımı
                </li>
              </div>                          
            </ul>
          </li>            
          <li className="oyuncak">
            <a>Anne, Bebek, Oyuncak</a>
            <ul className="oyuncak-alt-menu">
              <div>
                <li>                
                  <h4>Anne Bebek Ürünleri</h4>
                </li>
                <li>                
                  <h4>Oyuncaklar</h4>
                </li>           
                <li>
                  Kız Çocuk Oyuncakları
                </li>
                <li>
                  Erkek Çocuk Oyuncakları
                </li>
                <li>
                  Bebek Oyuncakları
                </li>
                <li>
                  <h4>Popüler Markalar</h4>
                </li>
                <li>
                  Play Dogh
                </li>
                <li>
                  LEGO           
                </li>
                <li>
                  L.O.L
                </li>
                <li>
                  <h4>Karakter &amp; Figür Oyuncakları</h4>
                </li>
                <li>
                  <h4>Oyuncak Bebekler</h4>
                </li>           
                <li>
                  <h4>Oyuncak Arabalar</h4>
                </li>           
                <li>
                  <h4>Çocuk Kitapları</h4>
                </li>           
                
              </div> 
              <div>
                <li><h4>Bebek Odası &amp; Güvenlik</h4></li>           
                <li>
                  <h4>Bebek Güvenlik Ürünleri</h4>
                </li>
                <li>
                  Telsiz, Kamera, Ev İçi Güvenlik
                </li>
                <li>
                  <h4>Araç &amp; Gereç</h4>
                </li>
                <li>
                  Bebek Arabaları
                </li>
                <li>
                  Oto Koltukları &amp; Ana Kucakları
                </li>
                <li>
                  Mama Sandalyeleri
                </li>
                <li>
                  <h4>Emzirme &amp; Bebek Beslenme</h4>
                </li>
                <li>
                  Biberon
                </li>
                <li>
                  Emzik
                </li>           
                <li>
                  Mama Hazırlayıcısı
                </li>              
              </div>
              <div>
                <li><h4>Bebek Bakım &amp; Banyo &amp; Sağlık</h4></li>           
                <li>
                  Şampuan
                </li>
                <li>
                  Krem &amp; Losyon
                </li>
                <li>
                  Güneş Ürünleri
                </li>
                <li>
                  Ateş Ölçer
                </li>
                <li>
                  Bakım Çantaları
                </li>
                <li>
                  Buhar Makineleri
                </li>          
              </div>                        
            </ul>
          </li>
          <li className="spor">
            <a>Spor, Outdoor</a>
            <ul className="spor-alt-menu">
                <div>
                  <li><h4>Giyim</h4></li>           
                  <li>
                    Elbise
                  </li>
                  <li>
                    Triko &amp; Kazak
                  </li>
                  <li>
                    Mont, Kaban
                  </li>
                  <li>
                    Sweatshirt
                  </li>
                  <li>
                    Bluz
                  </li>
                  <li>
                    Gömlek
                  </li>
                  <li>
                    Pantolon
                  </li>
                  <li>
                    Kadın Kot Ceket, Kot Etek
                  </li>
                  <li>
                    T-Shirt
                  </li>           
                  <li>
                    Ceket
                  </li>           
                  <li>
                    Etek
                  </li>           
                  <li>
                    Trençkot
                  </li>
                </div> 
                <div>
                <li><h4>Kadın</h4></li>           
                  <li>
                    Elbise
                  </li>
                  <li>
                    Triko &amp; Kazak
                  </li>
                  <li>
                    Mont, Kaban
                  </li>
                  <li>
                    Sweatshirt
                  </li>
                  <li>
                    Bluz
                  </li>
                  <li>
                    Gömlek
                  </li>
                  <li>
                    Pantolon
                  </li>
                  <li>
                    Kadın Kot Ceket, Kot Etek
                  </li>
                  <li>
                    T-Shirt
                  </li>           
                  <li>
                    Ceket
                  </li>           
                  <li>
                    Etek
                  </li>           
                  <li>
                    Trençkot
                  </li>
                </div>
                <div>
                <li><h4>Erkek</h4></li>            
                  <li>
                    Elbise
                  </li>
                  <li>
                    Triko &amp; Kazak
                  </li>
                  <li>
                    Mont, Kaban
                  </li>
                  <li>
                    Sweatshirt
                  </li>
                  <li>
                    Bluz
                  </li>
                  <li>
                    Gömlek
                  </li>
                  <li>
                    Pantolon
                  </li>
                  <li>
                    Kadın Kot Ceket, Kot Etek
                  </li>
                  <li>
                    T-Shirt
                  </li>           
                  <li>
                    Ceket
                  </li>           
                  <li>
                    Etek
                  </li>           
                  <li>
                    Trençkot
                  </li>
                </div>
                <div>
                <li><h4>Spor</h4></li>            
                  <li>
                    Elbise
                  </li>
                  <li>
                    Triko &amp; Kazak
                  </li>
                  <li>
                    Mont, Kaban
                  </li>
                  <li>
                    Sweatshirt
                  </li>
                  <li>
                    Bluz
                  </li>
                  <li>
                    Gömlek
                  </li>
                  <li>
                    Pantolon
                  </li>
                  <li>
                    Kadın Kot Ceket, Kot Etek
                  </li>
                  <li>
                    T-Shirt
                  </li>           
                  <li>
                    Ceket
                  </li>           
                  <li>
                    Etek
                  </li>           
                  <li>
                    Trençkot
                  </li>
                </div>
                            
            </ul>
          </li>
          <li className="kozmetik">
            <a>Kozmetik, Kişisel Bakım</a>
            <ul className="kozmetik-alt-menu">
                <div>
                  <li><h4>Mutfak</h4></li>           
                  <li>
                    Tava &amp; Tencere &amp; Düdüklü Tencere
                  </li>
                  <li>
                    Yemek &amp; Kahvaltı Takımı
                  </li>
                  <li>
                    Çatal, Kaşık, Bıçak Takımları
                  </li>
                  <li>
                    Yemek Hazırlık Gereçleri
                  </li>
                  <li>
                    Saklama &amp; Düzenleme
                  </li>
                  <li>
                    <h4>Mobilya</h4>                
                  </li>
                  <li>
                    Salon &amp; Oturma Odası
                  </li>
                  <li>
                    Yatak Odası
                  </li>
                  <li>
                    Çalışma Odası
                  </li>           
                  <li>
                    Antre &amp; Hol
                  </li>           
                  <li>
                    Mutfak
                  </li>           
                  <li>
                    Yemek Odası
                  </li>
                </div> 
                <div>
                  <li><h4>Ev Tekstili</h4></li>           
                  <li>
                    Yatak
                  </li>
                  <li>
                    Yastık
                  </li>
                  <li>
                    Yorgan
                  </li>
                  <li>
                    Nevresim
                  </li>
                  <li>
                    Alez
                  </li>
                  <li>
                    <h4>Ev Dekorasyon</h4>
                  </li>
                  <li>
                    Tablo
                  </li>
                  <li>
                    Ayna
                  </li>
                  <li>
                    Duvar Kağıdı
                  </li>           
                  <li>
                    Mum
                  </li>           
                  <li>
                    Kokular
                  </li>           
                  <li>
                    Pratik Ürünler
                  </li>
                </div>
                <div>
                  <li><h4>Elektrikli Ev Aletleri</h4></li>           
                  <li>
                    Elektrikli Mutfak Aletleri
                  </li>
                  <li>
                    Ütü
                  </li>
                  <li>
                    Süpürge
                  </li>
                  <li>
                    Çay Makineleri
                  </li>
                  <li>
                    Kahve Makineleri
                  </li>
                  <li>
                    Tost Makineleri
                  </li>
                  <li>
                    <h4>Ofis Mobilyaları</h4>
                  </li>
                  <li>
                    Ofis Masası
                  </li>
                  <li>
                    Ofis Dolabı
                  </li>           
                  <li>
                    Ofis Koltuğu
                  </li>           
                  <li>
                    Oyuncu Koltuğu
                  </li>           
                  <li>
                    Ofis Aksesuarları
                  </li>
                </div>
                <div>
                  <li><h4>Ev Tekstili</h4></li>           
                  <li>
                    Yatak
                  </li>
                  <li>
                    Yastık
                  </li>
                  <li>
                    Yorgan
                  </li>
                  <li>
                    Nevresim
                  </li>
                  <li>
                    Alez
                  </li>
                  <li>
                    <h4>Ev Dekorasyon</h4>
                  </li>
                  <li>
                    Tablo
                  </li>
                  <li>
                    Ayna
                  </li>
                  <li>
                    Duvar Kağıdı
                  </li>           
                  <li>
                    Mum
                  </li>           
                  <li>
                    Kokular
                  </li>           
                  <li>
                    Pratik Ürünler
                  </li>
                </div>                          
            </ul>
          </li>
          <li className="market">
            <a>Süpermarket, Pet Shop</a>
            <ul className="market-alt-menu">
                <div>
                  <li><h4>Oto Aksesuar</h4></li>           
                  <li>
                    Yaz, Kış, Bakım Ürünleri
                  </li>
                  <li>
                    Motor Yağı ve Yakıtları
                  </li>
                  <li>
                    Akü ve Akü Aksesuarları
                  </li>
                  <li>
                    <h4>Yedek Parçalar</h4>
                  </li>
                  <li>
                    Far, Buji, Fren Balatası
                  </li>
                  <li>
                    Trafik İlk Yardım Seti               
                  </li>
                  <li>
                    <h4>Tüm Motosiklet Ürünleri</h4>
                  </li>
                  <li>
                    Motosiklet Modelleri
                  </li>
                  <li>
                    Motosiklet Aksesuarları
                  </li>           
                  <li>
                    <h4>Motosiklet Sürücü Giyim</h4>
                  </li>           
                  <li>
                    Kask, Mont, Eldiven, Yağmurluk
                  </li>           
                  <li>
                    Motosiklet Çantaları
                  </li>
                </div> 
                <div>
                  <li><h4>Bahçe</h4></li>           
                  <li>
                    Bahçe Makineleri, Bahçe Mobilyaları
                  </li>
                  <li>
                    Mangal, Barbekü, Bahçe
                  </li>
                  <li>
                    Dekorasyon, Bahçe Aydınlatma
                  </li>
                  <li>
                    Çiçek Yetiştirme ve Bitki Bakımı
                  </li>
                  <li>
                  <h4>Banyo &amp; Mutfak</h4>
                  </li>
                  <li>
                    Banyo Mobilyaları
                  </li>
                  <li>
                    Duşakabin, Duş Sistemleri
                  </li>
                  <li>
                    Banyo Aksesuarları
                  </li>
                  <li>
                    Batarya &amp; Musluk
                  </li>           
                  <li>
                    Banyo Tekstili
                  </li>           
                  <li>
                    Vitrifiye
                  </li>           
                  <li>
                    Tesisat Malzemeleri
                  </li>
                </div>
                <div>
                  <li><h4>Elektrik &amp; Tesisat</h4></li>           
                  <li>
                    Led Ampul, Şerit Led
                  </li>
                  <li>
                    Tasarruflu Ampul
                  </li>
                  <li>
                    Grup Priz
                  </li>
                  <li>
                    Anahtar
                  </li>
                  <li>
                    Priz
                  </li>
                  <li>
                    Isı &amp; Nem Ölçer
                  </li>
                  <li>
                    <h4>Aydınlatma</h4>
                  </li>
                  <li>
                    Avize
                  </li>
                  <li>
                    Lambader
                  </li>           
                  <li>
                    <h4>Yurt Dışına Satış</h4>
                  </li>           
                  <li>
                    Yapı Market
                  </li>           
                  <li>
                    Oto Aksesuar
                  </li>
                </div>
                <div>
                  <li><h4>Yapı Market</h4></li>           
                  <li>
                    Matkap
                  </li>
                  <li>
                    Freze
                  </li>
                  <li>
                    Taşlama
                  </li>
                  <li>
                    <h4>Hırdavat</h4>
                  </li>
                  <li>
                    Takım Çantası
                  </li>
                  <li>
                    İş Güvenliği Ürünleri
                  </li>
                  <li>
                    Boya Aksesuarları
                  </li>
                  <li>
                    <h4>Mekanik El Aletleri</h4>
                  </li>
                  <li>
                    El Testeresi
                  </li>           
                  <li>
                    Silikon Tabancası
                  </li>           
                  <li>
                    Jeneratör
                  </li>           
                  <li>
                    Lokma Takımı
                  </li>
                </div>                          
            </ul>
          </li>
          <li className="kitap">
            <a>Kitap, Müzik, Film, Hobi</a>
            <ul className="kitap-alt-menu">
              <div>
                <li>                
                  <h4>Anne Bebek Ürünleri</h4>
                </li>
                <li>                
                  <h4>Oyuncaklar</h4>
                </li>           
                <li>
                  Kız Çocuk Oyuncakları
                </li>
                <li>
                  Erkek Çocuk Oyuncakları
                </li>
                <li>
                  Bebek Oyuncakları
                </li>
                <li>
                  <h4>Popüler Markalar</h4>
                </li>
                <li>
                  Play Dogh
                </li>
                <li>
                  LEGO           
                </li>
                <li>
                  L.O.L
                </li>
                <li>
                  <h4>Karakter &amp; Figür Oyuncakları</h4>
                </li>
                <li>
                  <h4>Oyuncak Bebekler</h4>
                </li>           
                <li>
                  <h4>Oyuncak Arabalar</h4>
                </li>           
                <li>
                  <h4>Çocuk Kitapları</h4>
                </li>           
                
              </div> 
              <div>
                <li><h4>Bebek Odası &amp; Güvenlik</h4></li>           
                <li>
                  <h4>Bebek Güvenlik Ürünleri</h4>
                </li>
                <li>
                  Telsiz, Kamera, Ev İçi Güvenlik
                </li>
                <li>
                  <h4>Araç &amp; Gereç</h4>
                </li>
                <li>
                  Bebek Arabaları
                </li>
                <li>
                  Oto Koltukları &amp; Ana Kucakları
                </li>
                <li>
                  Mama Sandalyeleri
                </li>
                <li>
                  <h4>Emzirme &amp; Bebek Beslenme</h4>
                </li>
                <li>
                  Biberon
                </li>
                <li>
                  Emzik
                </li>           
                <li>
                  Mama Hazırlayıcısı
                </li>              
              </div>
              <div>
                <li><h4>Bebek Bakım &amp; Banyo &amp; Sağlık</h4></li>           
                <li>
                  Şampuan
                </li>
                <li>
                  Krem &amp; Losyon
                </li>
                <li>
                  Güneş Ürünleri
                </li>
                <li>
                  Ateş Ölçer
                </li>
                <li>
                  Bakım Çantaları
                </li>
                <li>
                  Buhar Makineleri
                </li>          
              </div>                        
            </ul>
          </li>
      </ul>
    </div>
    <div className="main">    
    </div>
  </container>
  );
}

export default App;
