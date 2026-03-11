// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// Do NOT modify component files — only edit this config.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  logoImage?: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "UGI",
  logoAccent: "AJANS",
  logoImage: "/images/ugiii.png",
  navLinks: [
    { label: "Hizmetlerimiz", href: "#services" },
    { label: "Paketler", href: "#packages" },
    { label: "Vizyon", href: "#finale" },
  ],
  ctaText: "Hemen Başla",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  yellowCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "UGI",
  titleLine2: "AJANS",
  subtitle: "Dijital dünyada markanızı öne çıkaracak profesyonel çözümler. Yenilikçi, hızlı ve etkileşimli.",
  ctaText: "Hizmetlerimizi Keşfet",
  ctaHref: "#services",
  backgroundImage: "/images/hero.jpg",
  gridRows: 6,
  gridCols: 8,
  yellowCells: [
    { row: 1, col: 2 },
    { row: 3, col: 5 },
    { row: 4, col: 1 },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "ÖNE ÇIKAN DENEYİM",
  headingMain: "DİJİTAL",
  headingAccent: "REHBER",
  productName: "Karaman 360 App",
  description: "Şehrin en gizli kalmış köşelerini, en popüler mekanlarını ve güncel etkinliklerini tek bir platformda toplayan, kullanıcı dostu dijital asistanınız.",
  price: "ÜCRETSİZ",
  features: [
    { value: "360°", label: "Sanal Tur" },
    { value: "7/24", label: "Canlı Destek" },
    { value: "GPS", label: "Akıllı Rota" },
  ],
  colorSwatches: ["#facc15", "#3b82f6", "#10b981"],
  colorSwatchesLabel: "Tema Seçenekleri",
  ctaText: "Uygulamayı İndir",
  productImage: "/images/product_image.png",
  productImageAlt: "Karaman 360 Dijital Rehber",
  decorativeText: "MODERN",
};

// ----------------------------------------------------------------------------
// Color Palette Section
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "MARKA RENKLERİ",
  headingMain: "ŞEHRİN",
  headingAccent: "TONLARI",
  colors: [
    {
      name: "Elma Kırmızısı",
      nameSecondary: "Bereket",
      color: "#ff1e1e",
      description: "Karaman'ın bereketli topraklarını ve meşhur elmasını temsil eder.",
    },
    {
      name: "Hisar Grisi",
      nameSecondary: "Tarih",
      color: "#4b5563",
      description: "Karaman Kalesi'nin kadim taşlarından esinlenilmiştir.",
    },
    {
      name: "Buğday Sarısı",
      nameSecondary: "Yaşam",
      color: "#fbbf24",
      description: "Ovanın altın sarısı başaklarını simgeler.",
    },
    {
      name: "Gece Mavisi",
      nameSecondary: "Huzur",
      color: "#1e3a8a",
      description: "Şehrin sessiz ve huzurlu gecelerini anlatır.",
    },
  ],
  bottomText: "Karaman'ın ruhunu yansıtan özel paletimiz.",
  decorativeText: "ESTETİK",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "DİKKAT ÇEKİN",
  headingMain: "UGI",
  headingAccent: "AJANS",
  tagline: "Dijital dünyada iz bırakmak, kuralları yeniden yazmak ve markanızı zirveye taşımak için buradayız. Sınırları zorlayan tasarımlar ve stratejilerle geleceği bugünden inşa ediyoruz.",
  features: ["Yenilikçi", "Hızlı", "Etkili"],
  ctaText: "Hemen Başla",
  ctaHref: "#services",
  image: "/images/brand_portrait.jpg",
  imageAlt: "UGI AJANS Vizyon",
  decorativeText: "VİZYON",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  logoImage?: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  legalLinks: { label: string; href: string }[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "UGI",
  logoAccent: "AJANS",
  logoImage: "/images/ugiii.png",
  brandDescription: "Şehrin en kapsamlı dijital platformu. Her köşede bir hikaye, her hikayede bir keşif.",
  socialLinks: [
    { platform: "instagram", href: "#", label: "Instagram" },
    { platform: "twitter", href: "#", label: "Twitter" },
    { platform: "youtube", href: "#", label: "YouTube" },
  ],
  linkSections: [
    { title: "Kurumsal", links: ["Hakkımızda", "Vizyon", "Ekibimiz"] },
    { title: "Destek", links: ["S.S.S", "İletişim", "Kullanım Kılavuzu"] },
  ],
  contact: {
    address: "Atatürk Bulvarı, No: 360, Karaman",
    phone: "+90 338 360 00 00",
    email: "merhaba@karaman360.com",
  },
  legalLinks: [
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Çerez Politikası", href: "#" },
  ],
  copyrightText: "Karaman 360. Tüm Hakları Saklıdır.",
  decorativeText: "FOOTER",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "UGI Ajans - Dijital Çözümler",
  description: "Markanızı dijital dünyada öne çıkaracak profesyonel hizmetler.",
  language: "tr",
};

// ----------------------------------------------------------------------------
// Services Section
// ----------------------------------------------------------------------------
import { Monitor, Share2, Target, Users, Camera, ShoppingCart, Code, Globe, UserCheck } from "lucide-react";

export const servicesConfig = {
  sectionLabel: "HİZMETLERİMİZ",
  headingMain: "DİJİTAL",
  headingAccent: "ÇÖZÜMLER",
  decorativeText: "HİZMET",
  services: [
    {
      title: "Web Tasarım",
      description: "Mobil ve seo uyumlu web tasarım çözümlerimizle potansiyel müşterilerinize ulaşmanızı sağlıyoruz.",
      icon: Monitor,
    },
    {
      title: "Sosyal Medya Yönetimi",
      description: "Dijital medya ekibimizle markanızın hedefe ulaşması yolunda profesyonel paylaşımlara imza atıyoruz.",
      icon: Share2,
    },
    {
      title: "Google Ads Yönetimi",
      description: "Uzman ekibimizle doğru hesap yönetimi yaparak bütçenizi daha etkin kullanmanıza yardımcı oluyoruz.",
      icon: Target,
    },
    {
      title: "Marka Danışmanlığı",
      description: "A'dan Z'ye tüm süreçlerde profesyonel ve deneyimli ekibimizle markanızı zirveye çıkarmak için buradayız.",
      icon: Users,
    },
    {
      title: "Kurumsal Kimlik Tasarımı",
      description: "Logo tasarımından başlayarak baskıya yönelik tüm ihtiyaçlarınızın tasarımını gerçekleştiriyoruz.",
      icon: Camera,
    },
    {
      title: "E-Ticaret",
      description: "E-ticaret sitenizi kullanıcı deneyimleri doğrultusunda yenilikçi bakış açısıyla tasarlıyoruz.",
      icon: ShoppingCart,
    },
    {
      title: "Yazılım Hizmetleri",
      description: "Gelişmiş yazılım teknolojileri ve yenilikçi çözümlerimizle, işletmenizin ihtiyaçlarına özel tasarlanmış yazılımlar sunuyoruz.",
      icon: Code,
    },
    {
      title: "İnternet Hizmetleri",
      description: "İşletmenizi dijital dünyada öne çıkaracak, hızlı, güvenilir ve profesyonel internet hizmetleri sunuyoruz.",
      icon: Globe,
    },
    {
      title: "Danışmanlık",
      description: "Profesyonel danışmanlık hizmetlerimizle, sektörel deneyim ve uzmanlığımızı birleştirerek iş süreçlerinizi optimize ediyoruz.",
      icon: UserCheck,
    },
  ],
};

// ----------------------------------------------------------------------------
// Chat Widget configuration
// ----------------------------------------------------------------------------

export const chatWidgetConfig = {
  whatsappNumber: "905000000000", // Update with correct number
  greetingHeader: "Size nasıl yardımcı olabiliriz?",
  options: [
    { id: 1, text: "Web Tasarımı Hakkında Bilgi İstiyorum" },
    { id: 2, text: "SEO ve Dijital Pazarlama Stratejileri Nelerdir?" },
    { id: 3, text: "Fiyat Teklifi Almak İstiyorum" },
    { id: 4, text: "Yeni Bir Proje İçin Görüşmek İstiyorum" },
  ]
};

// ----------------------------------------------------------------------------
// Packages Section configuration
// ----------------------------------------------------------------------------
import { Megaphone, Star, Crown, Zap, Boxes, MapPin, Image as ImageIcon, Briefcase, BadgePercent, LayoutGrid } from "lucide-react";

export const packagesConfig = {
  sectionLabel: "Web Sitesi Paketleri",
  headingMain: "Web Siteniz ile Yayına Geçin,",
  headingAccent: "Bir Adım Öne Geçin",
  description: "Web siteniz, dijital dünyadaki vitrininizdir. Profesyonel ve ihtiyaçlarınıza uygun bir web sitesiyle hedef kitlenize ulaşabilir, işletmenizin online görünürlüğünü artırabilirsiniz. Web site paketlerimiz, her sektöre uygun modern, kullanıcı dostu ve SEO uyumlu çözümler sunar.",
  
  valueProps: [
    { title: "Alan Adı ve Hosting", desc: "Tüm web sitesi paketlerimiz ücretsiz alan adı ve hosting ile birlikte sunulmaktadır.", icon: Globe },
    { title: "Onlarca Tasarım Seçeneği", desc: "Onlarca tasarım içerisinden seçim yapın ve hemen yayına geçin.", icon: LayoutGrid },
    { title: "Satış Yapmaya Başlayın", desc: "E-Ticaret paketimiz ile hemen satış yapmaya başlayın.", icon: ShoppingCart }
  ],

  pricingPlans: [
    {
      name: "Temel Paket",
      price: "12.000 ₺",
      icon: Star,
      isPopular: false,
      features: [
        "WordPress Alt Yapısı",
        "Ana Sayfa + 5 Sayfalık İçerik",
        "Mobil Uyumlu Tasarım",
        "10 Tema Arasından Seçim",
        "Ücretsiz SSL Sertifikası",
        "Temel SEO Yapılandırması",
        "Online Form"
      ],
      hostingFeatures: [
        "Ücretsiz Alan Adı (com.tr)",
        "Ücretsiz Web Hosting",
        "Kurumsal E-Posta (5 Adet)"
      ]
    },
    {
      name: "Pro Paket",
      price: "17.000 ₺",
      icon: Star, // Originally outline star
      isPopular: false,
      features: [
        "WordPress Alt Yapısı",
        "Ana Sayfa + 7 Sayfalık İçerik",
        "Mobil Uyumlu Tasarım",
        "20 Tema Arasından Seçim",
        "Ücretsiz SSL Sertifikası",
        "Temel SEO Yapılandırması",
        "Online Form",
        "Online Site Düzenleme",
        "Güvenlik Güncellemeleri",
        "Google Analytics + Facebook Pixel"
      ],
      hostingFeatures: [
        "Ücretsiz Alan Adı (com.tr)",
        "Ücretsiz Premium Web Hosting",
        "Kurumsal E-Posta (35 Adet)"
      ]
    },
    {
      name: "Ultra Paket",
      price: "24.000 ₺",
      icon: Crown,
      isPopular: false,
      features: [
        "WordPress Alt Yapısı",
        "Ana Sayfa + 30 Sayfalık İçerik",
        "Mobil Uyumlu Tasarım",
        "50 Premium Tema Arasından Seçim",
        "Ücretsiz SSL Sertifikası",
        "Gelişmiş SEO Yapılandırması",
        "Online Form",
        "Online Site Düzenleme",
        "Güvenlik Güncellemeleri",
        "Google Analytics + Facebook Pixel",
        "Google Shopping",
        "Yandex Meta"
      ],
      hostingFeatures: [
        "Ücretsiz Alan Adı (com/net/com.tr)",
        "Ücretsiz Premium Web Hosting",
        "Kurumsal E-Posta (100 Adet)"
      ]
    },
    {
      name: "E-Ticaret Paket",
      price: "60.000 ₺",
      icon: Star,
      isPopular: true, // Orange BG
      features: [
        "Özel Yazılım",
        "20 Sayfa",
        "Mobil Uyumlu Tasarım",
        "100 Premium Tema Arasından Seçim",
        "Ücretsiz SSL Sertifikası",
        "Gelişmiş SEO Yapılandırması",
        "Online Form",
        "Online Site ve Ürün Düzenleme",
        "Güvenlik Güncellemeleri",
        "Google Analytics + Facebook Pixel",
        "Google Shopping",
        "Yandex Web Master Tools"
      ],
      integrationFeatures: [
        "Kargo Entegrasyonu",
        "SMS Entegrasyonu (NETGSM)",
        "E-Fatura Entegrasyonu (Paraşüt - Yengeç)",
        "Sanal POS Entegrasyonu (iyzico - PayTR - Stripe - Wise)"
      ],
      hostingFeatures: [
        "Ücretsiz Alan Adı (com/net/com.tr)",
        "Ücretsiz E-Ticaret Hosting Paketi",
        "Limitsiz Kurumsal E-Posta"
      ]
    }
  ],

  tabs: [
    {
      id: "baslangic",
      label: "Başlangıç",
      icon: Zap,
      cards: [
        { title: "Ürün Listeleme", desc: "Ürünlerinizi hızlıca tanıtın, internette var olun.", icon: Boxes },
        { title: "Şube Listeleme", desc: "Fiziksel şubelerinizi harita desteğiyle gösterin.", icon: MapPin },
        { title: "Foto Galeri", desc: "Markanızı görsellerle daha iyi anlatın.", icon: ImageIcon },
        { title: "Kampanya Duyurusu", desc: "Fırsatları öne çıkararak dönüşüm oranını artırın.", icon: Megaphone }
      ]
    },
    {
      id: "super_baslangic",
      label: "Süper Başlangıç",
      icon: Zap, // With Lightning
      cards: [
        { title: "Ürün Listeleme", desc: "Etkili ürün tanıtımı ve SEO uyumlu listeleme.", icon: Boxes },
        { title: "Şube Listeleme", desc: "Tüm şubelerinizi kullanıcıya açıkça tanıtın.", icon: MapPin },
        { title: "Fiyat Listeleme", desc: "Güncel fiyatları kolayca paylaşın.", icon: BadgePercent },
        { title: "Ekip Tanıtımı", desc: "Ekibinizi tanıtarak güven oluşturun.", icon: Briefcase },
        { title: "Foto Galeri", desc: "Görsellerle markanızı güçlendirin.", icon: ImageIcon },
        { title: "Kampanya Duyurusu", desc: "Ziyaretçilerin ilgisini kampanyalarla çekin.", icon: Megaphone }
      ]
    },
    {
      id: "kurumsal",
      label: "Kurumsal",
      icon: Briefcase,
      cards: [
        { title: "Premium Ürün Yönetimi", desc: "Tüm ürünlerinizi gelişmiş filtrelerle sunun.", icon: Boxes },
        { title: "Çoklu Şube Yönetimi", desc: "Yüzlerce şubenizi tek panelden yönetin.", icon: MapPin },
        { title: "B2B Fiyatlandırma", desc: "Bayilerinize özel indirimli fiyatlar tanımlayın.", icon: BadgePercent },
        { title: "Gelişmiş Ekip Profili", desc: "Departmanlara özel ekip profilleri.", icon: Briefcase },
        { title: "Video ve Foto Galeri", desc: "Zengin medya içerikleriyle etkileyin.", icon: ImageIcon },
        { title: "Gelişmiş Kampanya", desc: "Zamana ve kitleye özel kampanyalar.", icon: Megaphone }
      ]
    }
  ]
};

// ----------------------------------------------------------------------------
// Backlink Packages Section configuration
// ----------------------------------------------------------------------------
export const backlinkPackagesConfig = {
  sectionLabel: "Backlink Paketleri",
  headingMain: "Garantili Backlink",
  headingAccent: "Paketleri 2025",
  description: "DDA seo paketleri: Bizden site alıyorsunuz ama biz sizi yine yalnız bırakmıyoruz. Bir web sitesinde olması gereken en kaliteli hizmetleri sunmaya devam ediyoruz. Müşterilerimizin sadece website alması değil o website ile başarı elde etmesi bizim en büyük temennilerimizden biridir. Bu kapsamda oluşturduğumuz web site seo paketlerimizi incelemenizi tavsiye ederiz.",
  
  promotionalBanner: {
    text: "SIRALAMA ARTIŞI İLE RAKİPLERİNİZİ GERİDE BIRAKIN",
  },

  pricingPlans: [
    {
      name: "Silver",
      level: "Düşük Rekabet",
      price: "3.000 ₺",
      icon: Star,
      isPopular: false,
      features: [
        "58 Adet Otoriter Backlink",
        "5 Anahtar Kelime (Maksimum)",
        "Detaylı Online Raporlama"
      ]
    },
    {
      name: "Gold",
      level: "Orta Rekabet",
      price: "7.500 ₺",
      icon: Crown,
      isPopular: false,
      features: [
        "91 Adet Otoriter Backlink",
        "7 Anahtar Kelime (Maksimum)",
        "Detaylı Online Raporlama",
        "Yabancı Dil Seçeneği"
      ]
    },
    {
      name: "Diamond",
      level: "En Yüksek Rekabet",
      price: "9.000 ₺",
      icon: Zap,
      isPopular: true,
      features: [
        "154 Adet Otoriter Backlink",
        "30 Anahtar Kelime (Maksimum)",
        "Yabancı Dil Seçeneği",
        "E-Ticaret Destekli",
        "Semrush Hata Analiz Raporu",
        "Site Sıralama Takibi",
      ]
    }
  ]
};

// ----------------------------------------------------------------------------
// Social Media Packages Section configuration
// ----------------------------------------------------------------------------
export const socialMediaPackagesConfig = {
  sectionLabel: "Sosyal Medya",
  headingMain: "Sosyal Medya",
  headingAccent: "Hizmet Paketlerimiz",
  description: "Bizden bir sosyal medya paketi aldığınızda sizi yalnız bırakmıyoruz! Sosyal medya dünyasında başarılı olmanız için gereken en kaliteli hizmetleri sunmaya devam ediyoruz. Müşterilerimizin sadece bir sosyal medya stratejisi almakla kalmayıp, bu strateji ile gerçek başarıyı yakalamasını sağlamak bizim için en büyük öncelik!",
  
  pricingPlans: [
    {
      name: "Başlangıç",
      price: "13.000 ₺",
      icon: Star,
      isPopular: false,
      features: [
        { name: "Sayfa & Sektör Analizi", included: true },
        { name: "Facebook & Instagram Rakip Analizi", included: true },
        { name: "Sosyal Medya Kurumsal Kimlik", included: true },
        { name: "Hedef Kitle Tespiti & Oluşturma", included: true },
        { name: "Post Tasarımı 8 Adet / Aylık", included: true },
        { name: "Reels Videosu 2 Adet / Aylık", included: true },
        { name: "Meta Business Yönetimi", included: true },
        { name: "Instagram Takip & Paylaşım", included: true },
        { name: "Facebook Takip & Paylaşım", included: true },
        { name: "X (Twitter) Takip & Paylaşım", included: false },
        { name: "LinkedIn Takip & Paylaşım", included: false },
        { name: "Google Benim İşletmem Hesap Yönetimi", included: false },
        { name: "YouTube Hesap Takibi", included: false },
      ]
    },
    {
      name: "Standart",
      price: "18.000 ₺",
      icon: Star,
      isPopular: false,
      features: [
        { name: "Sayfa & Sektör Analizi", included: true },
        { name: "Facebook & Instagram Rakip Analizi", included: true },
        { name: "Sosyal Medya Kurumsal Kimlik", included: true },
        { name: "Hedef Kitle Tespiti & Oluşturma", included: true },
        { name: "Post Tasarımı 12 Adet / Aylık", included: true },
        { name: "Reels Videosu 4 Adet / Aylık", included: true },
        { name: "Meta Business Yönetimi", included: true },
        { name: "Instagram Takip & Paylaşım", included: true },
        { name: "Facebook Takip & Paylaşım", included: true },
        { name: "Aylık Özel Çalışma (BillBoard, insert vb) 3 Adet / Aylık", included: true },
        { name: "X (Twitter) Takip & Paylaşım", included: false },
        { name: "LinkedIn Takip & Paylaşım", included: false },
        { name: "Google Benim İşletmem Hesap Yönetimi", included: false },
        { name: "YouTube Hesap Takibi", included: false },
      ]
    },
    {
      name: "Gelişmiş",
      price: "20.000 ₺",
      icon: Crown,
      isPopular: true,
      features: [
        { name: "Sayfa & Sektör Analizi", included: true },
        { name: "Facebook & Instagram Rakip Analizi", included: true },
        { name: "Sosyal Medya Kurumsal Kimlik", included: true },
        { name: "Hedef Kitle Tespiti & Oluşturma", included: true },
        { name: "Post Tasarımı 16 Adet / Aylık", included: true },
        { name: "Reels Videosu 6 Adet / Aylık", included: true },
        { name: "Meta Business Yönetimi", included: true },
        { name: "Instagram Takip & Paylaşım", included: true },
        { name: "Facebook Takip & Paylaşım", included: true },
        { name: "X (Twitter) Takip & Paylaşım", included: true },
        { name: "LinkedIn Takip & Paylaşım", included: true },
        { name: "Google Benim İşletmem Hesap Yönetimi", included: true },
        { name: "Aylık Özel Çalışma (BillBoard, insert vb) 7 Adet / Aylık", included: true },
        { name: "YouTube Hesap Takibi", included: true },
        { name: "Aylık Drone Çekimi 3 Adet / Aylık", included: true },
      ]
    }
  ],
  customPlan: {
    name: "Özel",
    description: "Tamamı ile firma ihtiyaçlarınıza özel kişiselleştirilmiş plan",
    buttonText: "TEKLİF AL"
  }
};

// ----------------------------------------------------------------------------
// References Section configuration
// ----------------------------------------------------------------------------
export const referencesConfig = {
  sectionLabel: "Referanslarımız",
  heading: "Güvenini Kazandığımız Markalar",
  logos: [
    { name: "360", path: "images/logolar/360.png" },
    { name: "ANI", path: "images/logolar/ANI.png" },
    { name: "Detay Sigorta", path: "images/logolar/Detay Sigorta.png" },
    { name: "LOGO chubby", path: "images/logolar/LOGO chubby.png" },
    { name: "Oslo", path: "images/logolar/Oslo.png" },
    { name: "Pamir Villaları", path: "images/logolar/Pamir Villaları Logo.png" },
    { name: "Sıla Evde Bakım", path: "images/logolar/Sıla Evde Bakım 4.png" },
    { name: "ilkem", path: "images/logolar/ilkem.png" },
    { name: "Ulak", path: "images/logolar/ulak logo.png" },
    { name: "Kartap", path: "images/logolar/kartap logo.png" },
  ]
};
