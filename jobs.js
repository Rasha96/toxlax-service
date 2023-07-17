class Trans{
    constructor(){
        
        document.getElementById("english").addEventListener("click",()=>{
            this.trans("english");
        });
        document.getElementById("turkey").addEventListener("click",()=>{
            this.trans("turkey");
        });
        document.getElementById("arabic").addEventListener("click",()=>{
            this.trans("arabic");
        });
        this.trans(localStorage.getItem("language"));
    }
    trans(language){
        if(language=="english"){
            document.getElementById("0").innerHTML="home";
            document.getElementById("1").innerHTML="About Us";
            document.getElementById("2").innerHTML="Service";
            document.getElementById("3").innerHTML="contact";
            document.getElementById("4").innerHTML="TOXLAX costumer servise";
            document.getElementById("10").innerHTML="Who among us doesn't use social media, whether for personal or professional purposes? Companies and public figures alike require social media managers to curate multimedia content, handle posts, and devise marketing strategies to leverage the millions of customers and followers on these platforms.";
            document.getElementById("6").innerHTML="In today's digital landscape, E-marketing jobs have become one of the most searched and sought-after positions by companies worldwide. The field of e-marketing offers abundant opportunities for freelancers, further boosting its demand. Notably, many companies now heavily rely on email marketing as a cornerstone of their overall marketing strategies, making expertise in this area highly valuable and in-demand.";
            document.getElementById("7").innerHTML="Graphic design goes beyond just 'graphics,' although that is one of its most popular aspects. It may also encompass designing engineering and architectural drawings, front-end interfaces for websites and applications, as well as interior design and more.";
            document.getElementById("8").innerHTML="Writing content in various forms: medical, scientific, sports, and others, in addition to journalism, correspondence, linguistic review, writing usage guides, explanatory brochures, educational materials for training courses, writing articles, reports, and more.";
            document.getElementById("9").innerHTML="Different companies need teams to support their customers and respond to their inquiries, or to inform them about the latest services and products the company offers. As the size of the company grows and its global presence expands, the need for specialized customer service teams, capable of communicating in various languages, becomes even greater.";
            document.getElementById("10a").innerHTML="Social Media Managemen:";
            document.getElementById("6a").innerHTML="Digital Marketing: ";
            document.getElementById("7a").innerHTML="Design: ";
            document.getElementById("8a").innerHTML="Writing and Editing: ";
            document.getElementById("9a").innerHTML="Customers Service: ";
            document.getElementById("5").innerHTML=" It encompasses software development, including website, application,  software programming, user interfaces, administration systems, software testing, operating infrastructure, and more.";
            document.getElementById("5a").innerHTML="Programming: ";
       
       
        }
        else if(language=="turkey"){
            document.getElementById("0").innerHTML="Anasayfa";
            document.getElementById("1").innerHTML='Hakımızda';
            document.getElementById("2").innerHTML="hizmetlerimiz";
            document.getElementById("3").innerHTML="iletişim";
            document.getElementById("4").innerHTML="TOXLAX müşteri hizmetleri";
            document.getElementById("10").innerHTML="Arasımızdan kim sosyal medya kullanmıyor, kişisel veya profesyonel amaçlarla? Şirketler ve ünlü kişilikler, sosyal medya yöneticilerine ihtiyaç duyarlar; çoklu ortam içeriğini düzenler, gönderilerle ilgilenir ve bu platformlardaki milyonlarca müşteri ve takipçiden yararlanmak için pazarlama stratejileri geliştirirler.";
            document.getElementById("6").innerHTML="Günümüz dijital ortamında, E-pazarlama işleri dünya genelindeki şirketler tarafından en çok aranan ve en çok talep gören pozisyonlardan biri haline gelmiştir. E-pazarlama alanı serbest çalışanlar için bol fırsatlar sunmakta ve bu da talebi artırmaktadır. Özellikle birçok şirket artık pazarlama stratejilerinin temel taşı olarak e-posta pazarlamasına ağırlık vermektedir, bu nedenle bu alanda uzmanlık son derece değerli ve talep gören bir nitelik haline gelmiştir.";
            document.getElementById("7").innerHTML="Grafik tasarım, sadece 'grafikler' üzerine sınırlı değildir, bununla birlikte bu en popüler yönlerinden biridir. Aynı zamanda mühendislik ve mimari çizimler tasarlamayı, web siteleri ve uygulamalar için ön yüz arayüzlerini tasarlamayı ve iç mimari tasarımı gibi diğer alanları da kapsayabilir.";
            document.getElementById("8").innerHTML="Tıbbi, bilimsel, spor ve diğer alanlarda içerik yazmak, gazetecilik, yazışmalar, dil incelemesi, kullanım kılavuzları yazmak, açıklayıcı broşürler, eğitim materyalleri hazırlamak, makaleler, raporlar ve daha fazlasını yazmak gibi çeşitli biçimlerde içerik hazırlama ve düzenleme işlerini içerir.";
            document.getElementById("9").innerHTML="Farklı şirketler, müşterilerini desteklemek, sorularına yanıt vermek veya şirketin sunduğu en yeni hizmetler ve ürünler hakkında bilgi vermek için ekiplere ihtiyaç duyar. Şirketin büyüklüğü ve küresel varlığı arttıkça, farklı dillerde iletişim kurabilen uzman müşteri hizmetleri ekiplerine olan ihtiyaç daha da artar.";
            document.getElementById("10a").innerHTML="Sosyal Medya Yönetimi: ";
            document.getElementById("6a").innerHTML="Dijital Pazarlama: ";
            document.getElementById("7a").innerHTML="Tasarım:";
            document.getElementById("8a").innerHTML="Yazı Yazma ve Düzenleme:";
            document.getElementById("9a").innerHTML="Müşteri Hizmetleri: ";
            document.getElementById("5").innerHTML=" Yazılım geliştirmeyi kapsar, bu da web sitesi, uygulama, yazılım programlama, kullanıcı arayüzleri, yönetim sistemleri, yazılım testleri, işletme altyapısı ve daha fazlasını içerir.";  
            document.getElementById("5a").innerHTML="Programlama: ";
            
        }
        else if (language=="arabic"){
            document.getElementById("0").innerHTML="الرئيسية";
            document.getElementById("1").innerHTML="من نحن";
            document.getElementById("2").innerHTML="خدمات";
            document.getElementById("3").innerHTML="للتواصل";
            document.getElementById("4").innerHTML=" توكسلاس خدمة عملاء ";
            document.getElementById("10").innerHTML=".من منا لا يستخدم وسائل التواصل الاجتماعي، سواء لأغراض شخصية أو مهنية؟ تحتاج الشركات والشخصيات العامة على حد سواء إلى مدراء لوسائل التواصل الاجتماعي لتحرير المحتوى المتعدد الوسائط، ومتابعة المنشورات، وتصميم استراتيجيات تسويقية للاستفادة من الملايين من العملاء والمتابعين على هذه المنصات";
            document.getElementById("6").innerHTML=" .في منظر التكنولوجيا الرقمية الحالي، أصبحت وظائف التسويق الإلكتروني واحدة من أكثر المناصب المبحوث عنها والمطلوبة من قِبَل الشركات حول العالم. يوفر مجال التسويق الإلكتروني فرصًا واسعة للعاملين الحر، مما يزيد من الطلب عليه. يجد العديد من الشركات الآن الاعتماد الكبير على التسويق عبر البريد الإلكتروني كأحد أركان استراتيجياتها الإعلانية الشاملة، مما يجعل الخبرة في هذا المجال قيمة عالية ومطلوبة";
            document.getElementById("7").innerHTML=" .يتجاوز التصميم الرسومي 'الجرافيكس' وإن كانت هي أشهرها، فقد يتضمن تصميم اللوحات الهندسية والمعمارية وتصميم الواجهات الأمامية للمواقع الإلكترونية والتطبيقات بالإضافة إلى التصميم الداخلي وغيرها";
            document.getElementById("8").innerHTML="كتابة المحتوى بأشكال مختلفة: طبية، علمية، رياضية وغيرها، بالإضافة إلى الصحافة والمراسلة والمراجعة اللغوية وكتابة دليل الاستخدام والكتيبات التوضيحية والمواد التعليمية للدورات التدريبية وكتابة المقالات والتقارير والمزيد"
            document.getElementById("9").innerHTML=".تحتاج الشركات المختلفة إلى فرق لدعم عملائها والرد على استفساراتهم، أو إعلامهم بأحدث الخدمات والمنتجات التي تقدمها الشركة. مع زيادة حجم الشركة وتوسع وجودها عالميًا، تصبح الحاجة إلى فرق متخصصة في خدمة العملاء وقادرة على التواصل بلغات مختلفة أكبر بكثير";
            document.getElementById("5").innerHTML=".اتشمل تطوير البرمجيات، بما في ذلك تطوير المواقع والتطبيقات، برمجة البرمجيات، واجهات المستخدم، أنظمة الإدارة، اختبارات البرمجيات، البنية التحتية للتشغيل، وأكثر من ذلك";
            document.getElementById("10a").innerHTML=":إدارة وسائل التواصل الاجتماعي";
            document.getElementById("6a").innerHTML=":التسويق الرقمي";
            document.getElementById("7a").innerHTML=":التصميم";
            document.getElementById("8a").innerHTML=":الكتابة والتحرير";
            document.getElementById("9a").innerHTML=":خدمة العملاء";
            document.getElementById("5").innerHTML=".تشمل تطوير البرمجيات، بما في ذلك تطوير المواقع والتطبيقات، برمجة البرمجيات، واجهات المستخدم، أنظمة الإدارة، اختبارات البرمجيات، البنية التحتية للتشغيل، وأكثر من ذلك";
            document.getElementById("5a").innerHTML=":البرمجة";
           
        }
        localStorage.setItem("language",language);

    }
}
onload=new Trans();
