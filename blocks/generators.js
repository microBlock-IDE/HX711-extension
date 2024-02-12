Blockly.Python['hx711_read'] = function(block) {
  Blockly.Python.definitions_['import_hx711'] = 'import HX711';

  var dropdown_sck = block.getFieldValue('sck') || Blockly.Python.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dio = block.getFieldValue('dio') || Blockly.Python.valueToCode(block, 'dio', Blockly.Python.ORDER_ATOMIC);

  var code = `HX711.raw(${dropdown_sck}, ${dropdown_dio})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['hx711_read'] = function(block) {
  Blockly.JavaScript.definitions_['include']['HX711.h'] = '#include <HX711.h>';

  Blockly.JavaScript.definitions_['define']['scale'] = `HX711 scale;`;

  var dropdown_sck = block.getFieldValue('sck') || Blockly.JavaScript.valueToCode(block, 'sck', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dio = block.getFieldValue('dio') || Blockly.JavaScript.valueToCode(block, 'dio', Blockly.Python.ORDER_ATOMIC);
  
  const functionName = Blockly.JavaScript.provideFunction_(
    'HX711_raw',
    [
      'long ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(int sck, int dio) {',
      '  static bool init = false;',
      '  if (!init) {',
      '    scale.begin(dio, sck);',
      '    init = true;',
      '  }',
      '  if (scale.wait_ready_timeout()) {',
      '    return scale.read();',
      '  }',
      '  return -2147483648L; // Max minus value of long',
      '}'
    ]
  );

  var code = `${functionName}(${dropdown_sck}, ${dropdown_dio})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

