      /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
      var toolbox = document.getElementById("toolbox");
      
              var options = { 
                toolbox : toolbox, 
                collapse : false, 
                comments : false, 
                disable : false, 
                maxBlocks : Infinity, 
                trashcan : true, 
                horizontalLayout : false, 
                toolboxPosition : 'start', 
                css : true, 
                media : '_blocos/media/', 
                rtl : false, 
                scrollbars : false, 
                sounds : true, 
                oneBasedIndex : true, 
                zoom : {
                  controls : true, 
                  wheel : true, 
                  startScale : 1, 
                  maxScale : 3, 
                  minScale : 0.3, 
                  scaleSpeed : 1.2
                }
              };
      
      
      
              var blocos = [{
                "type": "tnt",
                "message0": "TNT",
                "output": null,
                "colour": 0,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "gelo",
                "message0": "Gelo",
                "output": null,
                "colour": 255,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "inicio",
                "message0": "Inicio",
                "nextStatement": null,
                "colour": 105,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "tijolo",
                "message0": "Tijolo",
                "output": null,
                "colour": 0,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "pedra",
                "message0": "Pedra",
                "output": null,
                "colour": 15,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "movimeto",
                "message0": "Mover para %1",
                "args0": [
                  {
                    "type": "field_dropdown",
                    "name": "NAME",
                    "options": [
                      [
                        "Cima",
                        "up"
                      ],
                      [
                        "Direita",
                        "left"
                      ],
                      [
                        "Baixo",
                        "down"
                      ],
                      [
                        "Esquerda",
                        "ringt"
                      ]
                    ]
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 180,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "marcar",
                "message0": "Marcar Obj %1 %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "NAME"
                  },
                  {
                    "type": "input_dummy"
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 330,
                "tooltip": "",
                "helpUrl": ""
              }]
      
      
              blocos.forEach(v=>{
                console.log(v.type)
                Blockly.Blocks[v.type] = {
                  init: function() {
                    this.jsonInit(
                      v
                    );
                  }
                };
      
              })
      
      
      
      
      
      
              /* Inject your workspace */ 
              var workspace = Blockly.inject("blocklyDiv", options);
      
              /* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */
      
              /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
              var workspaceBlocks = document.getElementById("blocklyDiv"); 
      
      
      
              /* Load blocks to workspace. */
              Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
      
      
              function onFirstComment(event) {
                /*if (event.type == Blockly.Events.CHANGE &&
                    event.element == 'comment' &&
                    !event.oldValue && event.newValue) {
                  alert('Congratulations on creating your first comment!')*/
                  console.log(event.element, event.newValue, event.newInputName)
                //console.log(event)
                //Blockly.JavaScript.variableDB_.getName(block.getFieldValue('mover'), Blockly.Variables.NAME_TYPE);
                  //workspace.removeChangeListener(onFirstComment);
                //}
              }
              workspace.addChangeListener(onFirstComment);