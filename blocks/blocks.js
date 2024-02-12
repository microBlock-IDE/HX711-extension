let isKidBright = [ "kidbright", "openkb" ].findIndex(a => boardId.startsWith(a)) >= 0;

Blockly.defineBlocksWithJsonArray([
{
  "type": "hx711_read",
  "message0": "HX711 SCK pin: %1 DIO pin: %2 read raw",
  "args0": [
    isKidBright ? {
      "type": "field_dropdown",
      "name": "sck",
      "options": [
        [ "OUT1", "26" ],
        [ "OUT2", "27" ],
        [ "23", "23" ],
        [ "19", "19" ],
        [ "18", "18" ],
        [ "VN", "39" ]
      ]
    } : {
      "type": "input_value",
      "name": "sck",
      "check": "Number"
    },
    isKidBright ? {
      "type": "field_dropdown",
      "name": "dio",
      "options": [
        [ "IN1", "32" ],
        [ "IN2", "33" ],
        [ "IN3", "34" ],
        [ "IN4", "35" ],
        [ "OUT1", "26" ],
        [ "OUT2", "27" ],
        [ "23", "23" ],
        [ "19", "19" ],
        [ "18", "18" ],
        [ "VN", "39" ]
      ]
    } : {
      "type": "input_value",
      "name": "dio",
      "check": "Number"
    },
  ],
  "output": "Number",
  "colour": "#f45858",
  "tooltip": "Get raw value from HX711",
  "helpUrl": ""
}
]);
