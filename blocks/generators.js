Blockly.Python['hx711_read'] = function(block) {
  Blockly.Python.definitions_['import_hx711'] = 'import HX711';

  var dropdown_sck = block.getFieldValue('sck');
  var dropdown_dio = block.getFieldValue('dio');

  var code = `HX711.raw(${dropdown_sck}, ${dropdown_dio})`;
  return [code, Blockly.Python.ORDER_NONE];
};
