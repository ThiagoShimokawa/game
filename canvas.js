


// Global variables
   
      var canvas; // canvas
      var ctx; // context
      var desenho_box_X = 0; // current desenho_box_ position X
      var desenho_box_Y = 0; // current desenho_box_ position Y     
      var tamanho_box_X=300, tamanho_box_Y=300;
      var box_X=30, box_Y=30;
      var parede_x=10,parede_y=300;
      
      var imagem = new Image();
      imagem.src = "img/mira.fw.png"
      imagem = imagem
      

      // Array com as coordenadas dos obstaculos. Para tela: 300 X 300 e movimentos de 30px
      var obstaculos = [
        { x: 150, y: 60 },
        { x: 150, y: 90 },
        { x: 150, y: 120 },
      ];


      // This function is called on page load.
      function canvas() {

    
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
         
        setInterval( Atualizar, 10 );
      
        //window.addEventListener('keydown', _controles, true);
      }

      function desenhaFundo() {
          ctx.fillStyle = "gray";
          ctx.rect(0, 0, tamanho_box_X, tamanho_box_Y);
          ctx.fill();         
      }

      function desenhaQuadrado() {
        /*ctx.beginPath();     
        ctx.rect(desenho_box_X, desenho_box_Y, box_X, box_Y); 
        ctx.closePath();
        ctx.fillStyle = "green";
        ctx.fill();*/
        
        ctx.drawImage(imagem, desenho_box_X, desenho_box_Y);
      }

       function desenhaParede() {
        ctx.beginPath();     
        
        obstaculos.forEach(function(pos) {
          ctx.rect(pos.x, pos.y, 30, 30);
        }, this);

        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.fill(); 
      }

      function Atualizar() {
        console.log("Atualizar");
        desenhaFundo();
        desenhaParede();
        desenhaQuadrado();

      }

      function marcarDraw() {
        console.log({x: desenho_box_X, y: desenho_box_Y})
        obstaculos.push({x: desenho_box_X, y: desenho_box_Y})
      }

      function canvasDraw(dir){
        
        var msg = function(){
          alert('Ops, vai pra onde ?')
        }


        if(dir == "direita"){
          var c = verificarObstaculo(desenho_box_X + box_X , desenho_box_Y)
          //console.log(c)
          if(!c )
            desenho_box_X = desenho_box_X + box_X;
          if (desenho_box_X > tamanho_box_X - box_X){ 
            desenho_box_X = tamanho_box_X - box_X;
            msg()
          } 
        }else if(dir=="esquerda"){
          var c = verificarObstaculo(desenho_box_X - box_X , desenho_box_Y)
          if(!c )
            desenho_box_X = desenho_box_X - box_X;
          if (desenho_box_X < 0){ 
              desenho_box_X = 0;
              msg()
          }   
        }else if(dir=="cima"){
          var c = verificarObstaculo(desenho_box_X, desenho_box_Y - box_Y)
          if(!c )
              desenho_box_Y = desenho_box_Y - box_Y;
          if (desenho_box_Y < 0){ 
             desenho_box_Y = 0;
             msg()
          }   
        }else if(dir=="baixo"){
          var c = verificarObstaculo(desenho_box_X , desenho_box_Y + box_Y)
          if(!c )
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
        obstaculos = [
          { x: 150, y: 60 },
          { x: 150, y: 90 },
          { x: 150, y: 120 },
        ];  
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

