window.onload = function(){
    var imgList = document.getElementById("imgList");
    var imgArr = document.getElementsByTagName("img");
    imgList.style.width = 520 * imgArr.length+"px";

    
     var navDiv = document.getElementById("navDiv");
     var outer = document.getElementById("outer");
    navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
    

     var index = 0;
     var allA = document.getElementsByTagName("a");
    allA[index].style.backgroundColor = "black";
    
    for (var i = 0; i< allA.length; i++){
        allA[i].num = i;
     
          allA[i].onclick = function(){
              index = this.num;
              imgList.style.left = -520 * index + "px"; 
              setA();
          };
      }
    function setA() {
        for (var i = 0; i < allA.length; i++){
            allA[i].style.backgroundColor = "";
               
        }
        allA[index].style.backgroundColor = "black";
    };
};