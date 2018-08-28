// Pemecahan Uang 

var u = 670500;//uang yang akan dihitung
var a = 100000;//pecahan 100rb
var au = 0;
var b = 50000;//pecahan 50rb
var bu = 0;
var c = 20000;//pecahan 20rb
var cu = 0;
var d = 10000;//pecahan 10rb
var du = 0;
var e = 5000;//pecahan 5rb
var eu = 0;
var f = 2000;//pecahan 2rb
var fu = 0;
var g = 1000;//pecahan seribu
var gu = 0;
var h = 500;//pecahan 5 ratus
var hu = 0;
var i = 200;// pecahan 2 ratus
var iu = 0;
var j = 100;// pecahan seratus
var ju = 0;

console.log("Uang yang akan dipecah Rp." + u);
if (u !== 0) {
  while (u>=a){
    au++;
    u = u - a;
  }
  console.log("pecahan Rp. 100.000 ada : " + au);
  if (u !== 0) {
    while (u>=b) {
    bu++;
    u = u - b;
  }
    console.log("pecahan Rp. 50.000 ada : " + bu);
    if (u !== 0) {
      while (u>=c) {
      cu++;
      u = u - c;
      }
      console.log("pecahan Rp. 20.000 ada : " + cu);
      if (u !== 0) {
        while (u>=d) {
        du++;
        u = u - d;
        }
        console.log("pecahan Rp. 10.000 ada : " + du);
        }
        if (u !== 0) {
          while (u>=e) {
          eu++;
          u = u - e;
          }
          console.log("pecahan Rp. 5.000 ada : " + eu);
          if (u !== 0) {
            while (u>=f) {
            fu++;
            u = u - f;
            }
            console.log("pecahan Rp. 2.000 ada : " + fu);
            if (u !== 0) {
              while (u>=g) {
              gu++;
              u = u - g;
              }
              console.log("pecahan Rp. 1.000 ada : " + gu);
              if (u !== 0) {
                while (u>=h) {
                hu++;
                u = u - h;
                }
                console.log("pecahan Rp. 500 ada : " + hu);
                if (u !== 0) {
                  while (u>=i) {
                  iu++;
                  u = u - i;
                  }
                  console.log("pecahan Rp. 200 ada : " + iu);
                  if (u !== 0) {
                    while (u>=j) {
                    ju++;
                    u = u - j;
                    }
                    console.log("pecahan Rp. 100 ada : " + ju);
                    
                }          
              }       
            }      
          }
        }
      }
    }
  }
}
//else 


  

/*while(u > a) {
  au++
  console.log(au);
  console.log(u);
  u = u-a;
}*/


