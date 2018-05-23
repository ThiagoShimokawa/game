


// Global variables
   
      var canvas; // canvas
      var ctx; // context
      var desenho_box_X = 30; // current desenho_box_ position X
      var desenho_box_Y = 30; // current desenho_box_ position Y     
      var tamanho_box_X=510, tamanho_box_Y=510;
      var box_X=30, box_Y=30;
      var parede_x=10,parede_y=300;
      
      /*  Cursor .......................... */
      var imagem = new Image();
      imagem.src = "img/mira.fw.png";
      imagem = imagem;

      /*  Fundo .......................... */
      var imgFundo = new Image();
      imgFundo.src = "img/fundo.fw.png";
      imgFundo = imgFundo;

      /*  Parede .......................... */
      var imgParede = new Image();
      imgParede.src = "img/tijolo.fw.png";
      imgParede = imgParede;
      

      // Array com as coordenadas dos obstaculos. Para tela: 510 X 510 e movimentos de 30px
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
          ctx.drawImage(imgFundo, 0, 0);  
      }

      function desenhaQuadrado() {
        ctx.drawImage(imagem, desenho_box_X, desenho_box_Y);
      }

       function desenhaParede() {
        obstaculos.forEach(function(pos) {
          ctx.drawImage(imgParede, pos.x, pos.y);
        }, this);
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
          
          if(!c )
            desenho_box_X = desenho_box_X + box_X;

          if (desenho_box_X > (tamanho_box_X - box_X - 30)){ 
            desenho_box_X = tamanho_box_X - box_X - 30;
            msg()
          } 
        }else if(dir=="esquerda"){
          var c = verificarObstaculo(desenho_box_X - box_X , desenho_box_Y)
          if(!c )
            desenho_box_X = desenho_box_X - box_X;
          if (desenho_box_X < 30){ 
              desenho_box_X = 30;
              msg()
          }   
        }else if(dir=="cima"){
          var c = verificarObstaculo(desenho_box_X, desenho_box_Y - box_Y)
          if(!c )
              desenho_box_Y = desenho_box_Y - box_Y;
          if (desenho_box_Y < 30){ 
             desenho_box_Y = 30;
             msg()
          }   
        }else if(dir=="baixo"){
          var c = verificarObstaculo(desenho_box_X , desenho_box_Y + box_Y)
          if(!c )
            desenho_box_Y = desenho_box_Y + box_Y;
          if (desenho_box_Y > tamanho_box_Y - box_Y - 30){ 
             desenho_box_Y = tamanho_box_Y - box_Y - 30; 
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

