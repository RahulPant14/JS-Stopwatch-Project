
        //Coding Goes Here for stopWatch.

        var hr=0;
        var min=0;
        var sec=0;
        var count=0;
        document.querySelector(".start").addEventListener("click",function(){
            document.querySelector(".stop").removeAttribute("disabled");
            this.setAttribute("disabled","");
        
        const id=setInterval(i=>{
        document.getElementById("count").innerHTML = ++count;
    
    if(count == 100){
        sec=sec+1;
        count=0;

        if(sec == 60){
        min=min+1
        sec=0;

    }
        if(min == 60){
        hr=hr+1
        min=0;

    }

    }
    
    var secStr=sec;
    var minStr=min;
    var hrStr=hr;
    var countStr=count;

    if(countStr<10){
          countStr="0"+countStr
    }

    if(secStr<10){
          secStr="0"+secStr
    }

    if(minStr<10){
          minStr="0"+minStr
    }

    if(hrStr<10){
          hrStr="0"+hrStr
    }

    document.getElementById("sec").innerHTML = secStr;
    document.getElementById("min").innerHTML = minStr;
    document.getElementById("hr").innerHTML = hrStr;
    document.getElementById("count").innerHTML = countStr;
      
    
},10);
        document.querySelector(".stop").addEventListener("click",function(){
            document.querySelector(".reset").removeAttribute("disabled");
            document.querySelector(".start").removeAttribute("disabled");
            this.setAttribute("disabled","");
        
            clearInterval(id); 

            document.querySelector(".reset").addEventListener("click",function(){
            this.setAttribute("disabled","");
            hr=0;
            min=0;
            sec=0;
            count=0;
            document.getElementById("count").innerHTML= "00";
            document.getElementById("sec").innerHTML= "00";
            document.getElementById("min").innerHTML= "00";
            document.getElementById("hr").innerHTML= "00";
    })


    });

    });