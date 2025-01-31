import { Client } from "@/types/clientsTypes";
import { Order } from "@/types/ordersTypes";
import { AboutText } from "@/types/aboutTextsTypes";

// Clients
export const clients: Client[] = [
  {
    id: 1,
    name: "AzTexno MMC",
    description: "Sənaye istehsalı və logistika həlləri üzrə qlobal lider.",
    industry: "İstehsalat",
    contactPerson: "Cavid Əliyev",
    email: "cavid.aliyev@aztexno.az",
    phoneNumber: "+994-50-123-45-67",
    revenueGenerated: 500000,
    status: "Aktiv",
    website: "https://www.aztexno.az",
    lastInteractionDate: "15.06.2024",
    notes: "Yeni logistika layihəsi ilə bağlı təklif gözlənilir.",
    preferredCommunicationMethod: "Email",
    clientType: "Uzunmüddətli",
  },
  {
    id: 2,
    name: "Globus Texnologiya",
    description: "Proqram təminatı həllərində ixtisaslaşmış beynəlxalq şirkət.",
    industry: "Texnologiya",
    contactPerson: "Aytən Məmmədova",
    email: "ayten.m@globustech.az",
    phoneNumber: "+994-55-987-65-43",
    revenueGenerated: 750000,
    status: "Aktiv",
    website: "https://www.globustech.az",
    lastInteractionDate: "10.06.2024",
    notes: "Sistem yeniləmələri ilə bağlı dəstək xidmətləri müzakirə olunur.",
    preferredCommunicationMethod: "Telefon",
    clientType: "Qayıdan",
  },
  {
    id: 3,
    name: "Sağlam Həyat MMC",
    description:
      "Tibb və biotexnologiya sahəsində innovativ araşdırmalar aparan şirkət.",
    industry: "Səhiyyə",
    contactPerson: "Fərid Abbasov",
    email: "farid.abbasov@saglam.az",
    phoneNumber: "+994-12-789-12-34",
    revenueGenerated: 300000,
    status: "Gözləmədə",
    website: "https://www.saglam.az",
    lastInteractionDate: "20.06.2024",
    notes: "Yeni tədqiqat layihəsi üçün təkliflər gözlənilir.",
    preferredCommunicationMethod: "Email",
    clientType: "Yeni",
  },
  {
    id: 4,
    name: "İnnovasiya Texnologiyaları",
    description: "Texnologiya və mühəndislik sahəsində qabaqcıl şirkət.",
    industry: "Mühəndislik",
    contactPerson: "Rəşad Həsənov",
    email: "rashad.h@innovasiya.az",
    phoneNumber: "+994-51-456-35-19",
    revenueGenerated: 1200000,
    status: "Aktiv",
    website: "https://www.innovasiya.az",
    lastInteractionDate: "05.06.2024",
    notes:
      "İnfrastruktur optimallaşdırması ilə bağlı geniş təkliflər müzakirə olunur.",
    preferredCommunicationMethod: "Telefon",
    clientType: "Uzunmüddətli",
  },
  {
    id: 5,
    name: "Qarabağ İnşaat",
    description:
      "Müdafiə, aviasiya və infrastruktur layihələrində ixtisaslaşmış şirkət.",
    industry: "Müdafiə",
    contactPerson: "Əli Hüseynov",
    email: "eli.huseynov@qarabag.az",
    phoneNumber: "+994-70-456-78-90",
    revenueGenerated: 950000,
    status: "Aktiv",
    website: "https://www.qarabag.az",
    lastInteractionDate: "18.06.2024",
    notes: "Yeni müdafiə layihəsi üçün sənədlər təqdim edilib.",
    preferredCommunicationMethod: "Email",
    clientType: "Qayıdan",
  },
  {
    id: 6,
    name: "BioGen Araşdırma",
    description:
      "Genetik tədqiqat və texnologiyada müasir həllər təqdim edən şirkət.",
    industry: "Biotexnologiya",
    contactPerson: "Leyla Rzayeva",
    email: "leyla.rzayeva@biogen.az",
    phoneNumber: "+994-50-345-67-89",
    revenueGenerated: 400000,
    status: "Gözləmədə",
    website: "https://www.biogen.az",
    lastInteractionDate: "12.06.2024",
    notes: "Pilot genetik layihə üçün ilkin görüş keçiriləcək.",
    preferredCommunicationMethod: "Telefon",
    clientType: "Yeni",
  },
  {
    id: 7,
    name: "DataKom",
    description:
      "Məlumat saxlama və sıxma sahəsində innovativ texnologiya şirkəti.",
    industry: "Proqram təminatı",
    contactPerson: "Kamran Nəsibov",
    email: "kamran.nasibov@datakom.az",
    phoneNumber: "+994-55-123-51-48",
    revenueGenerated: 200000,
    status: "Aktiv",
    website: "https://www.datakom.az",
    lastInteractionDate: "14.06.2024",
    notes: "Məlumat sıxma texnologiyasının demo versiyası təqdim olunub.",
    preferredCommunicationMethod: "Email",
    clientType: "Yeni",
  },
  {
    id: 8,
    name: "EnerjiTexno",
    description:
      "Enerji həlləri və dayanıqlı inkişaf sahəsində fəaliyyət göstərən şirkət.",
    industry: "Enerji",
    contactPerson: "Nigar Məmmədli",
    email: "nigar.m@enerjitekno.az",
    phoneNumber: "+994-55-654-32-10",
    revenueGenerated: 600000,
    status: "Aktiv",
    website: "https://www.enerjitekno.az",
    lastInteractionDate: "22.06.2024",
    notes:
      "Yeni enerji layihələrinin maliyyələşdirilməsi ilə bağlı müzakirələr aparılır.",
    preferredCommunicationMethod: "Telefon",
    clientType: "Uzunmüddətli",
  },
  {
    id: 9,
    name: "AvtoSənaye MMC",
    description:
      "Avtomobil istehsalı və sənaye texnologiyalarında ixtisaslaşmış şirkət.",
    industry: "Avtomobil",
    contactPerson: "Orxan Quliyev",
    email: "orxan.guliyev@avtosanaye.az",
    phoneNumber: "+994-50-789-10-11",
    revenueGenerated: 850000,
    status: "Gözləmədə",
    website: "https://www.avtosanaye.az",
    lastInteractionDate: "25.06.2024",
    notes:
      "Yeni sənaye texnologiyalarının tətbiqi ilə bağlı görüş planlaşdırılır.",
    preferredCommunicationMethod: "Email",
    clientType: "Yeni",
  },
  {
    id: 10,
    name: "Sürətli Kuryer",
    description:
      "Logistika və çatdırılma sahəsində yüksək sürətli xidmətlər təklif edən şirkət.",
    industry: "Logistika",
    contactPerson: "Elçin Sadıqov",
    email: "elchin.sadiqov@suratlikuryer.az",
    phoneNumber: "+994-55-567-89-01",
    revenueGenerated: 450000,
    status: "Aktiv",
    website: "https://www.suratlikuryer.az",
    lastInteractionDate: "28.06.2024",
    notes:
      "Xidmətlərin coğrafiyasının genişləndirilməsi üzrə planlar müzakirə olunur.",
    preferredCommunicationMethod: "Telefon",
    clientType: "Qayıdan",
  },
];

// Orders
export const orders: Order[] = [
  {
    id: 1,
    taskName: "Yeni Loqonun Dizaynı",
    description: "Acme Corp üçün müasir bir loqo yaradın.",
    priority: "Yüksək",
    assignee: "John Doe",
    startDate: "01.01.2024",
    dueDate: "15.01.2024",
    status: "Gözləmədə",
    comments: "İlkin layihə gələn həftə tələb olunur.",
    clientId: 1,
  },
  {
    id: 2,
    taskName: "Vebsayt Yenidən Dizaynı",
    description: "Globex üçün vebsaytın tamamilə yenidən dizayn edilməsi.",
    priority: "Orta",
    assignee: "Jane Smith",
    startDate: "05.01.2024",
    dueDate: "02.10.2024",
    status: "İcra edilir",
    comments: "Ana səhifənin ilkin çərçivəsi tamamlandı.",
    clientId: 2,
  },
  {
    id: 3,
    taskName: "Mobil Tətbiqin Hazırlanması",
    description: "Umbrella Ltd üçün çoxplatformalı tətbiq yaradın.",
    priority: "Yüksək",
    assignee: "Alice Brown",
    startDate: "10.01.2024",
    dueDate: "30.03.2024",
    status: "Gözləmədə",
    comments: "İstifadəçi dostu interfeysə diqqət yetirin.",
    clientId: 3,
  },
  {
    id: 4,
    taskName: "SEO Optimizasiyası",
    description:
      "Stark Industries üçün axtarış motorunun reytinqini yaxşılaşdırın.",
    priority: "Aşağı",
    assignee: "Bob White",
    startDate: "15.01.2024",
    dueDate: "20.02.2024",
    status: "İcra edilir",
    comments: "Açar sözlər və geri bağlantıları təhlil edin.",
    clientId: 4,
  },
  {
    id: 5,
    taskName: "Təhlükəsizlik Auditi",
    description: "Wayne Enterprises üçün təhlükəsizlik auditi aparın.",
    priority: "Yüksək",
    assignee: "Charlie Green",
    startDate: "18.01.2024",
    dueDate: "25.01.2024",
    status: "Tamamlandı",
    comments: "Audit hesabatı təqdim edildi.",
    clientId: 5,
  },
  {
    id: 6,
    taskName: "Məhsulun Başlama Kampaniyası",
    description: "Oscorp-un yeni məhsul xətti üçün kampaniya başlayın.",
    priority: "Orta",
    assignee: "Diana King",
    startDate: "20.01.2024",
    dueDate: "10.02.2024",
    status: "Gözləmədə",
    comments: "Sosial media reklamları hazırlanır.",
    clientId: 6,
  },
  {
    id: 7,
    taskName: "Backend API Hazırlanması",
    description:
      "Pied Piper platforması üçün miqyaslana bilən API-lər yaradın.",
    priority: "Yüksək",
    assignee: "Edward Taylor",
    startDate: "25.01.2024",
    dueDate: "30.04.2024",
    status: "Cancelled",
    comments: "Performansın optimallaşdırılmasına diqqət yetirin.",
    clientId: 7,
  },
];

// About
export const aboutTexts: AboutText[] = [
  {
    id: 1,
    title: "Portalın Ümumi Məlumatı",
    content:
      "Bu portal müştəri və sifariş idarəçiliyini optimallaşdırmaq üçün hazırlanıb, irəliləyişi izləmək, performansı monitorinq etmək və interaktiv qrafiklər və panellər vasitəsilə məlumatları analiz etmək üçün vasitələr təklif edir. Portal sadə interfeys və intuitiv funksionallıq ilə hər səviyyədə istifadəçilər üçün uyğunlaşdırılıb. Onun məqsədi şirkətlərin çeviklik və idarəetmə keyfiyyətini artırmaqdan ibarətdir.",
  },
  {
    id: 2,
    title: "Missiya və Vizyon",
    content:
      "Bizim missiyamız istifadəçi dostu platforma təqdim edərək bizneslərə vəzifə idarəçiliyini və məlumat izləməsini asanlaşdırmaqdır. Vizyonumuz isə effektiv və miqyaslana bilən biznes əməliyyatları üçün əsas həllə çevrilməkdir. Biz inanırıq ki, texnologiya vasitəsilə hər bir biznes daha məhsuldar və təşkilanmış ola bilər, bu da ümumi məqsədlərə çatmaqda yardımcı olacaqdır.",
  },
  {
    id: 3,
    title: "Əsas Xüsusiyyətlər",
    content:
      "Portalda sifariş izləmə, müştəri idarəçiliyi, prioritet vəzifələrin təyin edilməsi, real vaxt yenilikləri və ətraflı analitika kimi funksiyalar mövcuddur. Bu vasitələr bizneslərin təşkilanmasını və effektivliyini artırmağa kömək edir. Eyni zamanda, şirkətlərin ehtiyaclarına uyğun özəlləşdirilə bilən modulların tətbiqi portalı daha universal edir.",
  },
  {
    id: 4,
    title: "Analitika və İcmallar",
    content:
      "Quraşdırılmış qrafiklər və məlumat vizualizasiyası vasitələri ilə bu portal bizneslərə performans metriklərini effektiv şəkildə izləmək və məlumatlı qərarlar qəbul etmək üçün hərəkətə keçə bilən icmallar təqdim edir. Məlumatlar real vaxtda yenilənir və bu, şirkətlərə daha çevik planlama imkanı yaradan unikal üsul təqdim edir.",
  },
  {
    id: 5,
    title: "Fərdiləşdirilə Bilənlik",
    content:
      "Portal yüksək səviyyədə fərdiləşdirilə bilər, bu da bizneslərin interfeysi və funksiyaları öz ehtiyaclarına uyğunlaşdırmasını təmin edir və mütərəqqi şirkət idarəetməsini asanlaşdırır. Həmçinin, fərdi sahələrə xas çözümlər əlavə edərək portaldan daha çox yararlanmaq mümkün olur.",
  },
  {
    id: 6,
    title: "Dəstək və Resurslar",
    content:
      "Bizim peşəkar dəstək komandamız onboarding, problemlərin həlli və funksiyaların fərdiləşdirilməsi ilə bağlı kömək etmək üçün mövcuddur. Portaldan maksimum yararlanmaq üçün ətraflı sənədlərmizdən istifadə edin. Həmçinin, video təlimatlar və tez-tez verilən suallar portalı daha istifadəyönlü edir.",
  },
  {
    id: 7,
    title: "Gələcək Genişlənmə",
    content:
      "Gələcəkdə bu portal SaaS məhsulu olaraq satışa təqdim ediləcək. Daha geniş biznes ehtiyaclarına uyğun yeni xüsusiyyətlər və təkmilləşdirmələrlə bağlı yenilikləri izləyin. Həmçinin, istifadəçi rəyləri əsasında portalı davamlı olaraq yeniləməyə davam edirik ki, o, daha çox sahə üçün istifadə edilə bilsin.",
  },
  {
    id: 8,
    title: "İnteqrasiya və Uyğunluq",
    content:
      "Portal digər biznes alətləri və sistemləri ilə asanlıqla inteqrasiya edilə bilər. Bu, məlumatların bir yerdə saxlanmasını və fərqli platformalar arasında effektiv əməkdaşlığı təmin edir. API dəstəyi və xüsusi inteqrasiya seçimləri şirkətlərin çevikliyini artırır.",
  },
  {
    id: 9,
    title: "Təhlükəsizlik və Məxfilik",
    content:
      "Portal ən yüksək təhlükəsizlik standartlarına uyğun olaraq hazırlanıb. Məlumatların şifrələnməsi, çoxsəviyyəli doğrulama və mütəmadi təhlükəsizlik yoxlamaları ilə istifadəçilərin məlumatlarının məxfiliyi təmin edilir. Həmçinin, təhlükəsizlik hadisələrinə qərşı qısa zamanda reaksiya vermə sistemi mövcuddur.",
  },
];

export const financesData = [
  // Gəlirlər (Incomes)
  {
    id: 1,
    title: "Müştəri Ödənişləri",
    content: "Müştərilərdən alınan ödənişlər və abunə haqları.",
    amount: 25000, // in AZN
    date: "2025-01-25",
    type: "incomes",
  },
  {
    id: 2,
    title: "Xidmət Gəlirləri",
    content:
      "Şirkət tərəfindən təqdim olunan xidmətlərdən əldə edilən gəlirlər.",
    amount: 18000,
    date: "2025-01-20",
    type: "incomes",
  },
  {
    id: 3,
    title: "Reklam Gəlirləri",
    content:
      "Platformada göstərilən reklamlar və sponsorluq müqavilələri nəticəsində əldə olunan gəlirlər.",
    amount: 12000,
    date: "2025-01-15",
    type: "incomes",
  },

  // Xərclər (Expenses)
  {
    id: 4,
    title: "İşçi Maaşları",
    content: "Şirkətin əməkdaşlarına ödənilən aylıq maaşlar və bonuslar.",
    amount: 20000,
    date: "2025-01-28",
    type: "expenses",
  },
  {
    id: 5,
    title: "İcarə və Kommunal Xərclər",
    content:
      "Ofisin icarəsi, elektrik, internet və digər kommunal xidmətlər üçün xərclər.",
    amount: 5000,
    date: "2025-01-27",
    type: "expenses",
  },
  {
    id: 6,
    title: "Texniki Dəstək və İnfrastruktur",
    content:
      "Server, proqram təminatı və digər texniki dəstək xidmətləri üçün xərclər.",
    amount: 7000,
    date: "2025-01-22",
    type: "expenses",
  },
  {
    id: 7,
    title: "Marketinq və Reklam",
    content:
      "Brendin tanıdılması üçün aparılan reklam və marketinq kampaniyaları.",
    amount: 4000,
    date: "2025-01-18",
    type: "expenses",
  },
];
