


// Global variables
   
      var canvas; // canvas
      var ctx; // context
      var desenho_box_X = 0; // current desenho_box_ position X
      var desenho_box_Y = 0; // current desenho_box_ position Y     
      var tamanho_box_X=300, tamanho_box_Y=300;
      var box_X=30, box_Y=30;
      var parede_x=10,parede_y=300;

      var obstaculos=[
        {x:150, y:60},
        {x:150, y:90},
        {x:150, y:120},
      ];

      // This function is called on page load.


      function canvas() {

    
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
         
        setInterval(Atualizar, 10);
      
        window.addEventListener('keydown', _controles, true);
      }


      function desenhaFundo() {
          ctx.fillStyle = "gray";
          ctx.rect(0, 0, tamanho_box_X, tamanho_box_Y);
          ctx.fill();         
      }

      function desenhaQuadrado() {
        ctx.beginPath();     
        ctx.rect(desenho_box_X, desenho_box_Y, box_X, box_Y); 
        ctx.closePath();
        ctx.fillStyle = "green";
        ctx.fill(); 
      }


       function desenhaParede() {
        ctx.beginPath();     
        ctx.rect(150, 0, 30, 120); 
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill(); 
      }

      function Atualizar() {
        console.log("Atualizar");
        desenhaFundo();
        desenhaQuadrado();
         desenhaParede();

      }



      function canvasDraw(dir){
        
        var msg = function(){
          alert('Ops, vai pra onde ?')
        }


        if(dir == "direita"){
          var c = verificarObstaculo(desenho_box_X + box_X , desenho_box_Y + box_Y)
          console.log(c)
          if(!c )
            desenho_box_X = desenho_box_X + box_X;
          //if (desenho_box_X > tamanho_box_X - box_X){ 
           // desenho_box_X = tamanho_box_X - box_X;
           // msg()
         // } 
        }else if(dir=="esquerda"){
          if(desenho_box_X - box_X!=150 || desenho_box_Y + box_Y>120)
            desenho_box_X = desenho_box_X - box_X;
          if (desenho_box_X < 0){ 
              desenho_box_X = 0;
              msg()
          }   
        }else if(dir=="cima"){
          if(desenho_box_X + box_X!=180 || desenho_box_Y + box_Y>150)
              desenho_box_Y = desenho_box_Y - box_Y;
          if (desenho_box_Y < 0){ 
             desenho_box_Y = 0;
             msg()
          }   
        }else if(dir=="baixo"){
          desenho_box_Y = desenho_box_Y + box_Y;
          if (desenho_box_Y > tamanho_box_Y - box_Y){ 
             desenho_box_Y = tamanho_box_Y - box_Y; 
             msg()
          }   
        }
      }

      function verificarObstaculo(x,y){
        console.log("X = " + x)
        console.log("Y = " + y)

        var c = obstaculos.filter(v=>{
          console.log("x:"+v.x + " y:" + v.y , v.x == x && y == v.y )
          return v.x == x && y == v.y 
        })

        /*obstaculos.forEach(v=>{
          if(v.x == x){
            console.log("false")
            return false
          } */ 
          
        //})
        if(c.length > 0)
          return true
        return false  
      }

      function resetarCanvas(){
        $("#entrada").val('');
        desenho_box_X = 0; // current desenho_box_ position X
        desenho_box_Y = 0; // current desenho_box_ position Y     
        tamanho_box_X=300, tamanho_box_Y=300;
        box_X=30, box_Y=30;
        parede_x=10,parede_y=100;
      }




      function _controles(evt) {

         
       
       

        switch (evt.keyCode) {

          // Left 
        case 37:
          canvasDraw('esquerda')
          break;

          // Right 
        case 39:
          canvasDraw('direita')
          break;

          // Down 
        case 40:
          canvasDraw('baixo')
          break;

          // Up 
        case 38:
          canvasDraw('cima')
          break;

        }

        
      
      }






/*<body onload="canvas()">
<p id="demo"></p>

<canvas id="myCanvas" width="300" height="300">

</canvas>

</body>
</html>*/

