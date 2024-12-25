import { PrivacyPolicyItem } from "@/types/privacyPolicyTypes";

export const privacyPolicyData: PrivacyPolicyItem[] = [
  {
    id: 1,
    title: "Məlumatların Toplanması",
    description:
      "Portalımız istifadəçilərin qeydiyyatı və xidmətlərdən istifadə zamanı bəzi məlumatları toplayır. Bu məlumatlar sizin razılığınız ilə alınır və saxlanılır.",
    details: [
      "Ad və soyad",
      "Email ünvanı",
      "Telefon nömrəsi",
      "İstifadəçi davranış məlumatları",
      "Coğrafi yerləşmə məlumatları",
      "IP ünvanı və cihaz məlumatları",
    ],
  },
  {
    id: 2,
    title: "Məlumatların İstifadəsi",
    description:
      "Toplanmış məlumatlar xidmətin keyfiyyətini artırmaq və daha yaxşı istifadəçi təcrübəsi təqdim etmək üçün istifadə edilir.",
    details: [
      "Müştəri dəstəyi xidməti üçün",
      "Portal funksionallığını təmin etmək üçün",
      "İstatistik təhlillər və araşdırmalar üçün",
      "Fırıldaqçılığın qarşısını almaq üçün",
      "Reklam və marketinq üçün fərdiləşdirilmiş təkliflər təqdim etmək",
    ],
  },
  {
    id: 3,
    title: "Məlumatların Təhlükəsizliyi",
    description:
      "Məlumatlarınızın təhlükəsizliyi bizim üçün çox vacibdir. Bunun üçün müasir texnologiyalardan və təhlükəsizlik standartlarından istifadə edirik.",
    details: [
      "SSL şifrələmə",
      "Məlumatlara yalnız səlahiyyətli şəxslərin çıxışı",
      "Regulyar təhlükəsizlik yoxlamaları",
      "Təhlükəsizlik insidentlərinin idarə olunması prosedurları",
      "Fiziki təhlükəsizlik tədbirləri",
    ],
  },
  {
    id: 4,
    title: "İstifadəçi Hüquqları",
    description:
      "İstifadəçilər məlumatlarının necə toplandığını və istifadə edildiyini idarə etmək hüququna malikdirlər.",
    details: [
      "Məlumatlara çıxış tələb etmək",
      "Məlumatların dəyişdirilməsini tələb etmək",
      "Məlumatların silinməsini tələb etmək",
      "Məlumatların istifadəsini məhdudlaşdırmaq",
      "Hər hansı marketinq kommunikasiyasından imtina etmək",
    ],
  },
  {
    id: 5,
    title: "Üçüncü Tərəflərlə Məlumat Mübadiləsi",
    description:
      "Məlumatlar yalnız zəruri hallarda və aşağıdakı məqsədlərlə üçüncü tərəflərlə paylaşılır:",
    details: [
      "Hüquq-mühafizə orqanlarının tələb etdiyi hallarda",
      "Xidmət təminatçılarımız və tərəfdaşlarımızla əməliyyatları həyata keçirmək üçün",
      "Analitik və marketinq məqsədləri üçün statistik məlumatlar təmin etmək",
    ],
  },
  {
    id: 6,
    title: "Məlumatların Saxlanma Müddəti",
    description:
      "Toplanan məlumatlar yalnız zəruri olduğu müddətcə saxlanılır və daha sonra təhlükəsiz şəkildə silinir.",
    details: [
      "Qeydiyyat məlumatları - hesab aktiv olduğu müddətdə",
      "Analitik məlumatlar - 2 il müddətində",
      "Maliyyə məlumatları - qanunla müəyyən edilmiş müddət ərzində",
    ],
  },
];
