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
            document.getElementById("4").innerHTML="Who We Are?";
            document.getElementById("5").innerHTML="TOXLAX makes innovation and development an essential part of the company's culture, constantly improving its operations and embracing new technologies to enhance the customer experience.";
            document.getElementById("6").innerHTML="Centre of Excellence";
            document.getElementById("7").innerHTML="Building strong and sustainable relationships with customers by providing a unique and satisfying experience. And to achieve full customer satisfaction by meeting their needs and providing effective solutions to their problems by a professional team with cooperation and coordination to ensure exceptional service and meet customer expectations.TOXLAX considers innovation and development an essential part of the company's culture, constantly improving its operations and embracing new technologies to enhance the customer experience.It seeks to provide multiple and flexible communication channels that suit their needs at any time and from anywhere. Then, with work and effort, we became one of the reliable partners for many leading companies and organizations in Turkey and the Arab world.";
            document.getElementById("8").innerHTML="Our Values";
            document.getElementById("9").innerHTML="Integrity";
            document.getElementById("10").innerHTML="We focus on continuous development, and firmly believe that we must be better tomorrow than we are today.";
            document.getElementById("11").innerHTML="Ambition";
            document.getElementById("12").innerHTML="We are open and fair in everything we do. We overcome setbacks through transparent processes so that our clients understand the value of our collaboration..";
            document.getElementById("13").innerHTML="Client Orientation";
            document.getElementById("14").innerHTML="We aim to add value to our client’s business processes through each project we work on.";
            document.getElementById("15").innerHTML="Proactivity";
            document.getElementById("16").innerHTML="We are the kind of partner that motivates clients to always think bigger and better when it comes to digitalization";
         
       
       
        }
        else if(language=="turkey"){
           
            document.getElementById("0").innerHTML="Anasayfa";
            document.getElementById("1").innerHTML='Hakımızda';
            document.getElementById("2").innerHTML="hizmetlerimiz";
            document.getElementById("3").innerHTML="iletişim";
            document.getElementById("4").innerHTML="Biz Kimiz?";
            document.getElementById("5").innerHTML="TOXLAX, müşteri deneyimini geliştirmek için operasyonlarını sürekli iyileştirerek ve yeni teknolojileri benimseyerek yenilik ve gelişmeyi şirket kültürünün önemli bir parçası haline getiriyor.";
            document.getElementById("6").innerHTML="Mükemmeliyet Merkezi";
            document.getElementById("7").innerHTML="Eşsiz ve tatmin edici bir deneyim sunarak müşterilerle güçlü ve sürdürülebilir ilişkiler kurmak. Üstün hizmet sağlamak ve müşteri beklentilerini karşılamak için işbirliği ve koordinasyon ile profesyonel bir ekip tarafından ihtiyaçlarını karşılayarak ve sorunlarına etkin çözümler sunarak tam müşteri memnuniyetine ulaşmak. operasyonlarını ve müşteri deneyimini geliştirmek için yeni teknolojileri benimsiyor. Her zaman ve her yerden ihtiyaçlarına uygun çoklu ve esnek iletişim kanalları sağlamayı hedefliyor. Daha sonra çalışma ve çaba ile Türkiye ve Arap dünyasının önde gelen birçok şirket ve kuruluşunun güvenilir ortaklarından biri olduk.";
            document.getElementById("8").innerHTML="Değerlerimiz";
            document.getElementById("9").innerHTML="bütünlük";
            document.getElementById("10").innerHTML="Sürekli gelişime odaklanıyoruz ve yarın bugün olduğumuzdan daha iyi olmamız gerektiğine inanıyoruz.";
            document.getElementById("11").innerHTML="Hırs";
            document.getElementById("12").innerHTML="Yaptığımız her şeyde açık ve adiliz. Müşterilerimizin işbirliğimizin değerini anlamaları için şeffaf süreçlerle aksaklıkların üstesinden geliriz.";
            document.getElementById("13").innerHTML="Müşteri Oryantasyonu";
            document.getElementById("14").innerHTML="Üzerinde çalıştığımız her proje ile müşterilerimizin iş süreçlerine değer katmayı hedefliyoruz.";
            document.getElementById("15").innerHTML="Proaktivite";
            document.getElementById("16").innerHTML="Dijitalleşme söz konusu olduğunda müşterileri her zaman daha büyük ve daha iyi düşünmeye motive eden türden bir iş ortağıyız.";
         
          
           
            
        }
        else if (language=="arabic"){
            document.getElementById("0").innerHTML="الرئيسية";
            document.getElementById("1").innerHTML="من نحن";
            document.getElementById("2").innerHTML="خدمات";
            document.getElementById("3").innerHTML="للتواصل";
            document.getElementById("4").innerHTML="من نحن؟";
            document.getElementById("5").innerHTML="تجعل توكسلاكس الابتكار والتطوير جزءًا مهمًا من ثقافة الشركة من خلال تحسين عملياتها باستمرار واعتماد تقنيات جديدة لتحسين تجربة العملاء.";
            document.getElementById("6").innerHTML="مركز التميز";
            document.getElementById("7").innerHTML="بناء علاقات قوية ومستدامة مع العملاء من خلال تقديم تجربة فريدة ومرضية. لتحقيق الرضا الكامل للعملاء من خلال تلبية احتياجاتهم وتقديم حلول فعالة لمشاكلهم من قبل فريق محترف بالتعاون والتنسيق من أجل تقديم خدمة متفوقة وتلبية توقعات العملاء. تعتمد تقنيات جديدة لتحسين عملياتها وتجربة العملاء. تهدف إلى توفير قنوات اتصال متعددة ومرنة لتناسب احتياجاتهم في أي وقت وفي أي مكان. في وقت لاحق ، أصبحنا أحد الشركاء الموثوق بهم للعديد من الشركات والمؤسسات الرائدة في تركيا والعالم العربي ، مع العمل والجهد.";
            document.getElementById("8").innerHTML="قيمنا";
            document.getElementById("9").innerHTML="نزاهة";
            document.getElementById("10").innerHTML="نحن نركز على التحسين المستمر ونعتقد أننا يجب أن نكون أفضل غدًا مما نحن عليه اليوم.";
            document.getElementById("11").innerHTML="طموح";
            document.getElementById("12").innerHTML="نحن منفتحون ومنصفون في كل ما نقوم به. نتغلب على النكسات من خلال عمليات شفافة حتى يفهم عملاؤنا قيمة تعاوننا..";
            document.getElementById("13").innerHTML="عمل توجيه للزبائن";
            document.getElementById("14").innerHTML="نهدف إلى إضافة قيمة إلى العمليات التجارية لعملائنا من خلال كل مشروع نعمل عليه.";
            document.getElementById("15").innerHTML="استباقية";
            document.getElementById("16").innerHTML="نحن من النوع الذي يحفز العملاء على التفكير دائمًا بشكل أكبر وأفضل عندما يتعلق الأمر بالرقمنة";
         
           
        }
        localStorage.setItem("language",language);

    }
}
onload=new Translate();
