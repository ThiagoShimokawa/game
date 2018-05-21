/* description: Parses and executes mathematical expressions. */
%{%}
/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"direita"             return 'DIREITA'
"esquerda"            return 'ESQUERDA'
"cima"                return 'CIMA'
"baixo"               return 'BAIXO'
"resetar"             return 'RESETAR'
"marcar"              return 'MARCAR'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */



%start expressions

%% /* language grammar */

expressions
    : e EOF
        { return $1; }
    ;

e
    : 'DIREITA'
        {{
           $$ = canvasDraw($1);   
        }}  
    | 'ESQUERDA'
        {{
           $$ = canvasDraw($1);   
        }} 
    | 'CIMA'
        {{
           $$ = canvasDraw($1);   
        }}  
    | 'BAIXO'
        {{
           $$ = canvasDraw($1);   
        }}
    | 'RESETAR'
        {{
            $$ = resetarCanvas();
        }}
    | 'MARCAR'
        {{
            $$ = marcarDraw();
        }}
    ;
