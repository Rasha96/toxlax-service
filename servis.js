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
            document.getElementById("4").innerHTML="Why Us?";
            document.getElementById("5").innerHTML="What do we do for you?";
            document.getElementById("6").innerHTML="We are Toxlax Company We provide you with all the necessary requirements in order to maintain contact with customers and develop your business in a way that suits the continuously evolving practical environmen";
            document.getElementById("7").innerHTML="Hurry up";
            document.getElementById("8").innerHTML="to get a job";
            document.getElementById("9").innerHTML="We help you get a job opportunity in several fields in which you can prove your successes";
            document.getElementById("10").innerHTML="High Quality Work";
            document.getElementById("11").innerHTML="All our work is executed with the highest degree of efficiency.";
            document.getElementById("12").innerHTML="Professional Support";
            document.getElementById("13").innerHTML="Our team works diligently to ensure that all your questions are answered and your needs met.";
            document.getElementById("14").innerHTML="Qualified Team";
            document.getElementById("15").innerHTML="Our team is equipped with a diverse set of skills.";
            document.getElementById("16").innerHTML="What Our Clinets Say?";
            document.getElementById("17").innerHTML="I honestly could not be more pleased with this product. So creative and helpful.";
            document.getElementById("18").innerHTML="Toxlax has been wonderful. They have the best customer service and always go above and beyond to answer my questions and make sure my needs are met.";
            document.getElementById("19").innerHTML="I’ve never been more impressed with any other product before. I’ve tried so many of the other ones, and this is truly the one that stands out the most.";
          
         
       
       
        }
        else if(language=="turkey"){
            document.getElementById("0").innerHTML="Anasayfa";
            document.getElementById("1").innerHTML='Hakımızda';
            document.getElementById("2").innerHTML="hizmetlerimiz";
            document.getElementById("3").innerHTML="iletişim";
            document.getElementById("4").innerHTML="neden biz";
            document.getElementById("5").innerHTML="Sizin için ne yapıyoruz?";
            document.getElementById("6").innerHTML="Biz Toxlax Şirketiyiz Müşterilerle iletişiminizi sürdürmek ve işinizi sürekli gelişen pratik ortama uygun bir şekilde geliştirmek için gerekli tüm gereksinimleri sağlıyoruz.";
            document.getElementById("7").innerHTML="Acele et!";
            document.getElementById("8").innerHTML="iş almak için";
            document.getElementById("9").innerHTML="Başarılarınızı kanıtlayabileceğiniz birçok alanda iş fırsatı bulmanıza yardımcı oluyoruz";
            document.getElementById("10").innerHTML="Yüksek Kaliteli Çalışma";
            document.getElementById("11").innerHTML="Tüm çalışmalarımız en yüksek verimlilik derecesi ile yürütülür";
            document.getElementById("12").innerHTML="Profesyonel Destek";
            document.getElementById("13").innerHTML="Ekibimiz, tüm sorularınızın yanıtlanmasını ve ihtiyaçlarınızın karşılanmasını sağlamak için özenle çalışır.";
            document.getElementById("14").innerHTML="Nitelikli Ekip";
            document.getElementById("15").innerHTML="Ekibimiz çeşitli becerilerle donatılmıştır.";
            document.getElementById("16").innerHTML="Müşterilerimiz Ne Diyor?";
            document.getElementById("17").innerHTML="Açıkçası bu şirketten daha fazla memnun kalamazdım. Çok yaratıcı ve yardımsever.";
            document.getElementById("18").innerHTML="“Toxlax harikaydı. En iyi müşteri hizmetine sahipler ve sorularımı yanıtlamak ve ihtiyaçlarımın karşılandığından emin olmak için her zaman yukarıda ve öteye gidiyorlar.";
            document.getElementById("19").innerHTML="Daha önce başka hiçbir şirketten bu kadar etkilenmemiştim. Diğerlerinin çoğunu denedim ve bu gerçekten en çok öne çıkanı.";
            
       
           
            
        }
        else if (language=="arabic"){
            document.getElementById("0").innerHTML="الرئيسية";
            document.getElementById("1").innerHTML="من نحن";
            document.getElementById("2").innerHTML="خدمات";
            document.getElementById("3").innerHTML="للتواصل";
            document.getElementById("4").innerHTML="لماذا توكس لاكس";
            document.getElementById("5").innerHTML="ماذا نفعل من أجلك؟";
            document.getElementById("6").innerHTML="نحن شركة توكسلاكس نحن نوفر لك جميع المتطلبات اللازمة من أجل الحفاظ على الاتصال مع العملاء وتطوير أعمالك بطريقة تناسب البيئة العملية المتطورة باستمرار";
            document.getElementById("7").innerHTML="أسرع";
            document.getElementById("8").innerHTML="للحصول على وظيفة";
            document.getElementById("9").innerHTML="نساعدك في الحصول على فرصة عمل في عدة مجالات يمكنك أن تثبت فيها نجاحاتك";
            document.getElementById("10").innerHTML="عمل عالي الجودة";
            document.getElementById("11").innerHTML="يتم تنفيذ جميع أعمالنا بأعلى درجات الكفاءة.";
            document.getElementById("12").innerHTML="دعم احترافي";
            document.getElementById("13").innerHTML="يعمل فريقنا بجد لضمان الإجابة على جميع أسئلتك وتلبية احتياجاتك.";
            document.getElementById("14").innerHTML="فريق مؤهل";
            document.getElementById("15").innerHTML="فريقنا مجهز بمجموعة متنوعة من المهارات.";
            document.getElementById("16").innerHTML="ماذا يقول عملاؤنا؟";
            document.getElementById("17").innerHTML="بصراحة لا يمكن أن أكون أكثر سعادة بهذا المنتج. مبدع جدا ومفيد.";
            document.getElementById("18").innerHTML="لقد كان توكسلاكس رائعًا. لديهم أفضل خدمة عملاء ودائما يذهبون إلى أبعد من ذلك للإجابة على أسئلتي والتأكد من تلبية احتياجاتي.";
            document.getElementById("19").innerHTML="لم يسبق لي أن أعجبت بأي منتج آخر من قبل. لقد جربت الكثير من الأشياء الأخرى ، وهذا حقًا هو الأكثر تميزًا.";
            
           
        }
        localStorage.setItem("language",language);

    }
}
onload=new Trans();
