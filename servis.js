class Translate{
    constructor(){
        
        document.getElementById("english").addEventListener("click",()=>{
            this.translate("english");
        });
        document.getElementById("turkey").addEventListener("click",()=>{
            this.translate("turkey");
        });
        document.getElementById("arabic").addEventListener("click",()=>{
            this.translate("arabic");
        });
        this.translate(localStorage.getItem("language"));
    }
    translate(language){
        if(language=="english"){
            document.getElementById("0").innerHTML="home";
            document.getElementById("1").innerHTML="About Us";
            document.getElementById("2").innerHTML="Service";
            document.getElementById("3").innerHTML="contact";
            document.getElementById("4").innerHTML="TOXLAX costumer servise";
            document.getElementById("5").innerHTML="We are here for you";
            document.getElementById("6").innerHTML="commercial services";
            document.getElementById("6a").innerHTML="Logo design";
            document.getElementById("7").innerHTML=" Programming development.";
            document.getElementById("8").innerHTML=" Advertising industry";
            document.getElementById("9").innerHTML=" Business advice.";
            document.getElementById("10").innerHTML="Consulting all business.";
            document.getElementById("11").innerHTML=" Website design for businesses, online stores and other websites.";
            document.getElementById("12").innerHTML="Invest your money with the latest modern projects.. ";
            document.getElementById("13").innerHTML="The best global attempts to sell electricity are on grid devices.";
            document.getElementById("14").innerHTML="General legal services";
            document.getElementById("14a").innerHTML="Tourist Residencies";
            document.getElementById("15").innerHTML="Student Residencies";
            document.getElementById("16").innerHTML="Work Residencies ";
            document.getElementById("17").innerHTML="Health Insurance";
            document.getElementById("18").innerHTML="Flight Reservations";
            document.getElementById("19").innerHTML="Hotel Reservations";
            document.getElementById("20").innerHTML="Daily/Monthly Furnished Apartments.";
            document.getElementById("21").innerHTML="Curative Tourism in collaboration with accredited Turkish healthcare facilities";
            document.getElementById("22").innerHTML="Students’ Services";
            document.getElementById("23").innerHTML="Students registration in public universities in all disciplines by signing legal agreement.";
            document.getElementById("24").innerHTML="rivate universities students’ registration.";
            document.getElementById("25").innerHTML="Schools students’ registration.";
            document.getElementById("26").innerHTML="Providing registration services in the Turkish language institute (TOMER).";
            document.getElementById("27").innerHTML="Airport pick-up services.";
            document.getElementById("28").innerHTML="Providing dormitory or furnished apartment renting services for the students, that matching the students requirements and needs.";
            document.getElementById("29").innerHTML=" Providing the needed legal residency and health insurance.";
            document.getElementById("30").innerHTML="Optaining special universities discounts.";
            document.getElementById("31").innerHTML="In Addition To VIP Services";
            document.getElementById("32").innerHTML=" Tourist Residencies";
            document.getElementById("33").innerHTML="Turkish citizenship";
            document.getElementById("34").innerHTML="Employment contracts in Europe Toxlax works to provide employment contracts in Poland, where employment contracts are for the purpose of issuing and facilitating visa procedures. Toxlax guarantees 90% of obtaining the visa, provided that the legal requirements for the visa are met";
            document.getElementById("35").innerHTML="Visa services Europe (Schengen) visa for all nationalities and Canada and USA visa";
           
       
       
        }
        else if(language=="turkey"){
           
            document.getElementById("0").innerHTML="Anasayfa";
            document.getElementById("1").innerHTML='Hakımızda';
            document.getElementById("2").innerHTML="hizmetlerimiz";
            document.getElementById("3").innerHTML="iletişim";
            document.getElementById("4").innerHTML="TOXLAX müşteri hizmetleri";
            document.getElementById("5").innerHTML="Biz senin için buradayız";
            document.getElementById("6").innerHTML="Ticari hizmetler";
            document.getElementById("6a").innerHTML="Logo tasarımı";
            document.getElementById("7").innerHTML="Programlama geliştirme.";
            document.getElementById("8").innerHTML=" Reklam endüstrisi";
            document.getElementById("9").innerHTML="İş tavsiyesi.";
            document.getElementById("10").innerHTML="Tüm iş danışmanlığı.";
            document.getElementById("11").innerHTML="İşletmeler, çevrimiçi mağazalar ve diğer web siteleri için web sitesi tasarımı.";
            document.getElementById("12").innerHTML="Paranızı en son modern projelerle yatırın.. ";
            document.getElementById("13").innerHTML="Elektrik satmaya yönelik en iyi küresel girişimler şebeke cihazlarındadır.";
            document.getElementById("14").innerHTML="Genel hukuk hizmetleri";
            document.getElementById("14a").innerHTML="Turistik Rezidanslar";
            document.getElementById("15").innerHTML="Öğrenci Yurtları";
            document.getElementById("16").innerHTML="İş Rezidansları ";
            document.getElementById("17").innerHTML="Sağlık Sigortası";
            document.getElementById("18").innerHTML="Uçuş Rezervasyonları";
            document.getElementById("19").innerHTML="Otel rezervasyonları";
            document.getElementById("20").innerHTML="Günlük/Aylık Eşyalı Daireler.";
            document.getElementById("21").innerHTML="Akredite Türk sağlık tesisleri ile işbirliği içinde Tedavi Turizmi";
            document.getElementById("22").innerHTML="Öğrenci Hizmetleri";
            document.getElementById("23").innerHTML="Devlet üniversitelerinde tüm disiplinlerde yasal sözleşme imzalayarak öğrenci kaydı.";
            document.getElementById("24").innerHTML="özel üniversite öğrenci kayıtları";
            document.getElementById("25").innerHTML="Okul öğrencilerinin kayıtları.";
            document.getElementById("26").innerHTML="Türk Dil Kurumu (TÖMER) nezdinde kayıt hizmeti verilmesi.";
            document.getElementById("27").innerHTML="Havaalanı karşılama hizmetleri.";
            document.getElementById("28").innerHTML="Öğrencilerin istek ve ihtiyaçlarına uygun yurt veya eşyalı daire kiralama hizmetinin verilmesi.";
            document.getElementById("29").innerHTML=" Gerekli yasal ikamet ve sağlık sigortasının sağlanması.";
            document.getElementById("30").innerHTML="Üniversitelere özel indirimlerden yararlanma.";
            document.getElementById("31").innerHTML="VIP Hizmetlerine Ek Olarak";
            document.getElementById("32").innerHTML=" Turistik Rezidanslar";
            document.getElementById("33").innerHTML="Türk vatandaşlığı";
            document.getElementById("34").innerHTML="Avrupa'da istihdam sözleşmeleri Toxlax, iş sözleşmelerinin vize prosedürlerini düzenleme ve kolaylaştırma amaçlı olduğu Polonya'da istihdam sözleşmeleri sağlamak için çalışır. Toxlax, vize için yasal gerekliliklerin karşılanması koşuluyla vizenin alınmasının %90'ını garanti eder.";
            document.getElementById("35").innerHTML="Vize hizmetleri Tüm uluslar için Avrupa (Schengen) vizesi ve Kanada ve ABD vizesi";
         
          
           
            
        }
        else if (language=="arabic"){
            document.getElementById("0").innerHTML="الرئيسية";
            document.getElementById("1").innerHTML="من نحن";
            document.getElementById("2").innerHTML="خدمات";
            document.getElementById("3").innerHTML="للتواصل";
            document.getElementById("4").innerHTML=" توكسلاس خدمة عملاء ";
            document.getElementById("5").innerHTML="نحن هنا من أجلك";
            document.getElementById("6").innerHTML="خدمات تجارية";
            document.getElementById("6a").innerHTML="تصميم شعار";
            document.getElementById("7").innerHTML=" تطوير البرمجة.";
            document.getElementById("8").innerHTML="مجال الدعاية";
            document.getElementById("9").innerHTML="نصائح تجارية.";
            document.getElementById("10").innerHTML="استشارة جميع الأعمال.";
            document.getElementById("11").innerHTML="تصميم مواقع الويب للشركات والمتاجر عبر الإنترنت ومواقع الويب الأخرى.";
            document.getElementById("12").innerHTML="استثمر أموالك بأحدث المشاريع الحديثة .. ";
            document.getElementById("13").innerHTML="أفضل المحاولات العالمية لبيع الكهرباء هي على أجهزة الشبكة.";
            document.getElementById("14").innerHTML="خدمات قانونية عامة";
            document.getElementById("14a").innerHTML="الاقامات السياحية";
            document.getElementById("15").innerHTML="مساكن الطلاب";
            document.getElementById("16").innerHTML="إقامات العمل ";
            document.getElementById("17").innerHTML="تأمين صحي";
            document.getElementById("18").innerHTML="حجوزات الطيران";
            document.getElementById("19").innerHTML="حجوزات فندقية";
            document.getElementById("20").innerHTML="شقق مفروشة يومية / شهرية.";
            document.getElementById("21").innerHTML="السياحة العلاجية بالتعاون مع مرافق الرعاية الصحية التركية المعتمدة";
            document.getElementById("22").innerHTML="خدمات الطلاب";
            document.getElementById("23").innerHTML="تسجيل الطلاب في الجامعات الحكومية في جميع التخصصات بتوقيع اتفاقية قانونية.";
            document.getElementById("24").innerHTML="تسجيل طلاب الجامعات الخاصة.";
            document.getElementById("25").innerHTML="تسجيل طلاب المدارس.";
            document.getElementById("26").innerHTML="تقديم خدمات التسجيل في معهد اللغة التركية (تومر).";
            document.getElementById("27").innerHTML="خدمات الاستقبال في المطار.";
            document.getElementById("28").innerHTML="توفير خدمات تأجير سكن الطلبة أو الشقق المفروشة بما يتناسب مع متطلبات الطلاب واحتياجاتهم.";
            document.getElementById("29").innerHTML="توفير الإقامة القانونية اللازمة والتأمين الصحي.";
            document.getElementById("30").innerHTML="الحصول على خصومات جامعية خاصة.";
            document.getElementById("31").innerHTML="بالإضافة إلى خدمات كبار الشخصيات";
            document.getElementById("32").innerHTML=" الاقامات السياحية";
            document.getElementById("33").innerHTML="الجنسية التركية";
            document.getElementById("34").innerHTML="عقود العمل في أوروبا تعمل Toxlax على توفير عقود العمل في بولندا ، حيث تكون عقود العمل لغرض إصدار وتسهيل إجراءات التأشيرة. تضمن Toxlax 90٪ من الحصول على التأشيرة ، بشرط استيفاء المتطلبات القانونية للتأشيرة";
            document.getElementById("35").innerHTML="تأشيرة خدمات التأشيرات الأوروبية (شنغن) لجميع الجنسيات وتأشيرة كندا والولايات المتحدة الأمريكية";
           
        }
        localStorage.setItem("language",language);

    }
}
onload=new Translate();
