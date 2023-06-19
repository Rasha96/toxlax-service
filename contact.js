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
            document.getElementById("a").innerHTML="Keep In Touch With Us";
            document.getElementById("b").innerHTML="Tell Us What You Fell";
            var input = document.getElementById ("c");
            input.placeholder = "Username";

            var input = document.getElementById ("d");
            input.placeholder="Email"

            var input = document.getElementById ("e");
            input.placeholder="Phone"
            document.getElementById("f").innerHTML="Send";
            var input = document.getElementById ("g");
            input.placeholder="Mesaj"
       
       
        }
        else if(language=="turkey"){
           
            document.getElementById("a").innerHTML="Bizimle İrtebatta Kal ";
            document.getElementById("b").innerHTML="Bize Ne Hisettiğini Söyle";

            var input = document.getElementById ("c");
            input.placeholder = "kullanıcı adı";

            var input = document.getElementById ("d");
            input.placeholder="Email"

            var input = document.getElementById ("e");
            input.placeholder="Telefon"
            document.getElementById("f").innerHTML="Gönder";
           
            var input = document.getElementById ("g");
            input.placeholder="Mesaj"
           
          
           
            
        }
        else if (language=="arabic"){
            document.getElementById("a").innerHTML="ابقى على تواصل معنا";
            document.getElementById("b").innerHTML="أخبرنا ماذا تشعر";
            var input = document.getElementById ("c");
            input.placeholder = "اسم المستخدم";

            var input = document.getElementById ("d");
            input.placeholder="البريد الالكتروني"

            var input = document.getElementById ("e");
            input.placeholder="الهاتف"
            
            document.getElementById("f").innerHTML="ارسال";
            var input = document.getElementById ("g");
            input.placeholder="رسالة"
           
        }
        localStorage.setItem("language",language);

    }
}
onload=new Translate();
