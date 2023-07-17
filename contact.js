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
           
        }
        else if(language=="turkey"){
           
            document.getElementById("a").innerHTML="Bizimle İrtebatta Kal ";
                    
            
        }
        else if (language=="arabic"){
            document.getElementById("a").innerHTML="ابقى على تواصل معنا";
          
        }
        localStorage.setItem("language",language);

    }
}
onload=new Translate();

