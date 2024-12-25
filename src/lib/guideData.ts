import { GuideItem } from "@/types/guideTypes";

export const guideData: GuideItem[] = [
  {
    id: 1,
    title: "Qeydiyyatdan Keçmək",
    description:
      "İlk addım olaraq, portala daxil olmaq üçün qeydiyyatdan keçin. Qeydiyyat prosesi sürətli və asan bir şəkildə həyata keçirilir.",
    steps: [
      "Ana səhifənin yuxarı sağ küncündə yerləşən 'Qeydiyyat' düyməsini basın.",
      "Email və şifrə daxil edin. Şifrəniz ən azı 8 simvoldan ibarət olmalı və böyük hərf, kiçik hərf və rəqəm daxil etməlidir.",
      "Şəxsi məlumatlarınızı doldurun, məsələn: ad, soyad və telefon nömrəsi.",
      "'Qaydaları qəbul edirəm' qutusunu işarələyin.",
      "Göndər düyməsinə basaraq email təsdiq bağlantısını alın.",
      "Emailinizi yoxlayın və təsdiq bağlantısına klikləyərək hesabınızı aktivləşdirin.",
    ],
  },
  {
    id: 2,
    title: "Sifariş Yaratmaq",
    description:
      "Portalda müştərilər üçün yeni sifarişlər yaratmaq üçün detallı addımları izləyin. Bu, əməliyyatlarınızın daha yaxşı idarə edilməsini təmin edəcəkdir.",
    steps: [
      "Sol menyudan 'Sifarişlər' bölməsini seçin.",
      "Səhifənin yuxarı sağ küncündə yerləşən 'Yeni Sifariş' düyməsini basın.",
      "Sifarişin adı, müştəri adı, vəzifə təyin edən şəxs və sifarişin detalları kimi əsas məlumatları daxil edin.",
      "Sifarişin prioritetini seçin: Yüksək, Orta və ya Aşağı.",
      "Başlanğıc və bitmə tarixlərini seçərək sifarişin zamanını təyin edin.",
      "Sifarişi təsdiq etmək üçün 'Yarat' düyməsinə basın və sifariş uğurla əlavə ediləcəkdir.",
      "Əlavə edilmiş sifarişləri 'Sifarişlər' səhifəsindən idarə edə bilərsiniz.",
    ],
  },
  {
    id: 3,
    title: "Analitika Görünüşü",
    description:
      "Portalın analitika bölməsi işinizin ümumi vəziyyətini anlamağa kömək edir. Burada müxtəlif qrafiklər və hesabatlar vasitəsilə məlumatların təhlilini həyata keçirə bilərsiniz.",
    steps: [
      "Sol menyudan 'Analitika' bölməsini seçin.",
      "Ana səhifədə müxtəlif qrafiklər və statistika göstəricilərini görəcəksiniz.",
      "Müştəri, sifariş və gəlir göstəricilərini ay-ay təhlil edin.",
      "Göstəriciləri fərqli zaman aralıqları üzrə seçərək məlumatları daha detallı təhlil edin.",
      "Məlumatları CSV və ya Excel formatında ixrac etmək üçün 'Yüklə' düyməsindən istifadə edin.",
      "Analitika bölməsində təqdim olunan məlumatlara əsasən biznes qərarlarınızı inkişaf etdirin.",
    ],
  },
  {
    id: 4,
    title: "Müştəriləri İdarə Etmək",
    description:
      "Müştərilərin idarə olunması portalın ən vacib xüsusiyyətlərindən biridir. Müştəri məlumatlarını əlavə etmək, dəyişmək və ya silmək üçün addımları izləyin.",
    steps: [
      "Sol menyudan 'Müştərilər' bölməsini seçin.",
      "Müştəri siyahısında yeni müştəri əlavə etmək üçün 'Yeni Müştəri' düyməsini basın.",
      "Müştərinin adını, emailini, telefon nömrəsini və digər detalları daxil edin.",
      "Müştəri haqqında qeydlər əlavə edin, məsələn, müştəri ilə son əlaqə tarixi və ya xüsusi tələb.",
      "Müştəri məlumatlarını redaktə etmək üçün siyahıdan müştərini seçin və 'Redaktə et' düyməsinə basın.",
      "Müştərini silmək üçün müvafiq müştərinin yanında olan 'Sil' düyməsinə basın və təsdiqləyin.",
    ],
  },
  {
    id: 5,
    title: "Bildirişləri İdarə Etmək",
    description:
      "Portalda mühüm bildirişlər və xatırlatmaları izləmək işinizi daha səmərəli edir. Bu bildirişlərdən düzgün istifadə etmək üçün təlimatları izləyin.",
    steps: [
      "Üst menyudan 'Bildirişlər' ikonuna klikləyin.",
      "Gözləyən və ya tamamlanmış bildirişləri siyahıdan nəzərdən keçirin.",
      "Bildirişlərə baxmaq üçün üzərinə klikləyin və detalları oxuyun.",
      "Bildirişi oxundu kimi qeyd etmək üçün 'Oxundu' düyməsinə basın.",
      "Xüsusi bir bildirişi silmək üçün siyahıdan müvafiq bildirişi seçin və 'Sil' düyməsinə basın.",
      "Yeni xatırlatmalar əlavə etmək üçün 'Yeni Xatırlatma' düyməsini basın və detalları daxil edin.",
    ],
  },
  {
    id: 6,
    title: "Təhlükəsizlik və Şifrələr",
    description:
      "Portalda təhlükəsizliyin təmin edilməsi mühüm məsələdir. Şifrənizin qorunmasını təmin etmək və hesabınızı təhlükəsiz saxlamaq üçün addımları izləyin.",
    steps: [
      "Hesabınız üçün güclü bir şifrə seçin. Şifrəniz ən azı 8 simvol, böyük hərf, kiçik hərf və rəqəm içərməlidir.",
      "Şifrənizi heç kimlə paylaşmayın və şübhəli email və ya zənglərə cavab verməyin.",
      "Şifrəni dəyişmək üçün profil səhifəsindən 'Şifrəni Dəyiş' seçimini edin.",
      "Təsdiq kodu almaq üçün emailinizi yoxlayın və kodu daxil edərək yeni şifrə yaradın.",
      "İki mərhələli təsdiqləmə funksiyasını aktivləşdirərək hesabınızı əlavə qoruma ilə təmin edin.",
    ],
  },
];
