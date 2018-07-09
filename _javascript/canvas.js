


// Global variables
   
      var canvas; // canvas
      var ctx; // context
      var cursor_eixo_X = 240; // Posição do cursor no eixo X
      var cursor_eixo_Y = 240; // Posição do cursor no eixo Y 
      var obstaculos = []; // Array com as coordenadas dos obstaculos.
      const tela_width_X = tela_height_Y = 510;
      const box_X = box_Y = 30; // Deslocamento padrão 30px
      
      /*  Cursor .......................... */
      var imgCursor = new Image();
      imgCursor.src = "_imagens/pa.fw.png";
      imgCursor = imgCursor;

      /*  Fundo .......................... */
      var imgFundo = new Image();
      imgFundo.src = "_imagens/fundo.fw.png";
      imgFundo = imgFundo;

      /*  Tijolo .......................... */
      var imgTijolo = new Image();
      imgTijolo.src = "_imagens/tijolo.fw.png";
      imgTijolo = imgTijolo;

      /*  Pedra .......................... */
      var imgPedra = new Image();
      imgPedra.src = "_imagens/pedra.fw.png";
      imgPedra = imgPedra;

      /*  TNT .......................... */
      var imgTNT = new Image();
      imgTNT.src = "_imagens/tnt.fw.png";
      imgTNT = imgTNT;

      /*  Gelo .......................... */
      var imgGelo = new Image();
      imgGelo.src = "_imagens/gelo.fw.png";
      imgGelo = imgGelo;
      

      function obstaculoPadrao(){
        obstaculos = [
          { x: 30, y: 30, tipo: 'pedra' },
          { x: 30, y: 60, tipo: 'pedra' },
          { x: 30, y: 90, tipo: 'pedra' },
          { x: 30, y: 120, tipo: 'tijolo' },
          { x: 30, y: 150, tipo: 'tijolo' },
          { x: 30, y: 180, tipo: 'pedra' },
          { x: 30, y: 210, tipo: 'tijolo' },
          { x: 30, y: 240, tipo: 'pedra' },
          { x: 30, y: 270, tipo: 'tijolo' },
          { x: 30, y: 300, tipo: 'pedra' },
          { x: 30, y: 330, tipo: 'tijolo' },
          { x: 30, y: 360, tipo: 'tijolo' },
          { x: 30, y: 390, tipo: 'pedra' },
          { x: 30, y: 420, tipo: 'tijolo' },
          { x: 30, y: 450, tipo: 'tijolo' },/* */
          { x: 450, y: 30, tipo: 'pedra' },
          { x: 450, y: 60, tipo: 'pedra' },
          { x: 450, y: 90, tipo: 'pedra' },
          { x: 450, y: 120, tipo: 'tijolo' },
          { x: 450, y: 150, tipo: 'tijolo' },
          { x: 450, y: 180, tipo: 'pedra' },
          { x: 450, y: 210, tipo: 'tijolo' },
          { x: 450, y: 240, tipo: 'pedra' },
          { x: 450, y: 270, tipo: 'tijolo' },
          { x: 450, y: 300, tipo: 'pedra' },
          { x: 450, y: 330, tipo: 'tijolo' },
          { x: 450, y: 360, tipo: 'tijolo' },
          { x: 450, y: 390, tipo: 'pedra' },
          { x: 450, y: 420, tipo: 'tijolo' },
          { x: 450, y: 450, tipo: 'tijolo' },/* */
          { x: 60, y: 450, tipo: 'pedra' },
          { x: 90, y: 450, tipo: 'pedra' },
          { x: 120, y: 450, tipo: 'pedra' },
          { x: 150, y: 450, tipo: 'tijolo' },
          { x: 180, y: 450, tipo: 'tijolo' },
          { x: 210, y: 450, tipo: 'pedra' },
          { x: 240, y: 450, tipo: 'tijolo' },
          { x: 270, y: 450, tipo: 'pedra' },
          { x: 300, y: 450, tipo: 'tijolo' },
          { x: 330, y: 450, tipo: 'pedra' },
          { x: 360, y: 450, tipo: 'tijolo' },
          { x: 390, y: 450, tipo: 'tijolo' },
          { x: 420, y: 450, tipo: 'pedra' },/* */
          { x: 150, y: 390, tipo: 'tijolo' },
          { x: 150, y: 420, tipo: 'tijolo' },/* */
          { x: 270, y: 390, tipo: 'tijolo' },
          { x: 270, y: 420, tipo: 'tijolo' },/* */
          { x: 270, y: 30, tipo: 'pedra' },
          { x: 270, y: 60, tipo: 'pedra' },
          { x: 270, y: 90, tipo: 'pedra' },
          { x: 270, y: 120, tipo: 'tijolo' },
          { x: 270, y: 150, tipo: 'tijolo' },
          { x: 270, y: 180, tipo: 'pedra' },
          { x: 270, y: 210, tipo: 'tijolo' },
          { x: 270, y: 240, tipo: 'pedra' },
          { x: 270, y: 270, tipo: 'tijolo' },
          { x: 270, y: 300, tipo: 'pedra' },
          { x: 270, y: 330, tipo: 'tijolo' },/* */
          { x: 90, y: 390, tipo: 'tnt' },
          { x: 90, y: 360, tipo: 'tnt' },
          { x: 90, y: 330, tipo: 'gelo' },/* */
          { x: 120, y: 330, tipo: 'pedra' },
          { x: 150, y: 330, tipo: 'tijolo' },
          { x: 180, y: 330, tipo: 'pedra' },
          { x: 210, y: 330, tipo: 'tijolo' },
          { x: 240, y: 330, tipo: 'pedra' },/* */
          { x: 210, y: 360, tipo: 'tijolo' },
          { x: 210, y: 390, tipo: 'pedra' },/* */
          { x: 90, y: 30, tipo: 'tijolo' },
          { x: 120, y: 30, tipo: 'pedra' },
          { x: 150, y: 30, tipo: 'tijolo' },
          { x: 180, y: 30, tipo: 'pedra' },
          { x: 210, y: 30, tipo: 'tijolo' },
          { x: 240, y: 30, tipo: 'pedra' },/* */
        ];
      }


      // This function is called on page load.
      function canvas() {
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
         
        setInterval( Atualizar, 10 );
        //obstaculoPadrao();
        window.addEventListener('keydown', _controles, true);
      }

      function desenhaFundo() {
          ctx.drawImage(imgFundo, 0, 0);  
      }

      function desenhaCursor() {
        ctx.drawImage(imgCursor, cursor_eixo_X, cursor_eixo_Y);
      }

       function desenhaParede() {
        obstaculos.forEach(function(pos) {
          if(pos.tipo == 'tijolo')
            ctx.drawImage(imgTijolo, pos.x, pos.y);

          else if(pos.tipo == 'pedra')
            ctx.drawImage(imgPedra, pos.x, pos.y);

          else if(pos.tipo == 'tnt')
            ctx.drawImage(imgTNT, pos.x, pos.y);

          else if(pos.tipo == 'gelo')
            ctx.drawImage(imgGelo, pos.x, pos.y);
          
        }, this);
      }

      function Atualizar() {
        desenhaFundo();
        desenhaParede();
        desenhaCursor();

      }

      function marcarDraw(obj) {
        console.log('x :' + cursor_eixo_X + ' y:' + cursor_eixo_Y + " - Obj: " + obj)
        obstaculos.push({x: cursor_eixo_X, y: cursor_eixo_Y, tipo: obj})
      }

      function canvasDraw(dir){
        console.log("Entrada: " + dir)

        var msg = function(){
          alert('Ops, vai pra onde ?')
        }


        if(dir == "direita"){
          var c = verificarObstaculo(cursor_eixo_X + box_X , cursor_eixo_Y)
          
          if(!c )
            cursor_eixo_X = cursor_eixo_X + box_X;

          if (cursor_eixo_X > (tela_width_X - box_X - 30)){ 
            cursor_eixo_X = tela_width_X - box_X - 30;
            msg()
          } 
        }else if(dir=="esquerda"){
          var c = verificarObstaculo(cursor_eixo_X - box_X , cursor_eixo_Y)
          if(!c )
            cursor_eixo_X = cursor_eixo_X - box_X;
          if (cursor_eixo_X < 30){ 
              cursor_eixo_X = 30;
              msg()
          }   
        }else if(dir=="cima"){
          var c = verificarObstaculo(cursor_eixo_X, cursor_eixo_Y - box_Y)
          if(!c )
              cursor_eixo_Y = cursor_eixo_Y - box_Y;
          if (cursor_eixo_Y < 30){ 
             cursor_eixo_Y = 30;
             msg()
          }   
        }else if(dir=="baixo"){
          var c = verificarObstaculo(cursor_eixo_X , cursor_eixo_Y + box_Y)
          if(!c )
            cursor_eixo_Y = cursor_eixo_Y + box_Y;
          if (cursor_eixo_Y > tela_height_Y - box_Y - 30){ 
             cursor_eixo_Y = tela_height_Y - box_Y - 30; 
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

        if(c.length > 0)
          return true
        return false  
      }

      function resetarCanvas(){
        $("#entrada").val('');
        cursor_eixo_X = cursor_eixo_Y = 240;
        obstaculos = [];
        //obstaculoPadrao();
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
            canvasDraw('baixo');
          break;

          // Up 
        case 38:
          canvasDraw('cima')
          break;

        /* Área de Teste - Construir labirinto. */
        // Imprimir lista de objetos do cenario
        case 68: // d
          var str = '';
          obstaculos.forEach(function(linha) {
            str += "{ x: " + linha.x + ", y: " + linha.y + ", tipo: '" + linha.tipo + "' }," + "<br />"
          }, this);
          document.getElementById("debugue").innerHTML = str;
          break;
 
        case 49: //t
        marcarDraw('tijolo')
        break;

        case 50: //g
        marcarDraw('gelo')
        break;
        
        case 51: //b
        marcarDraw('tnt')
        break;
        
        case 52: //p
        marcarDraw('pedra')
        break;

        }

      
      }