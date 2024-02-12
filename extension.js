({
    name: "HX711", // Category Name
    description: "Get weight value from Load Cell",
    author: "microBlock",
    category: "Sensors",
    version: "1.1.0",
    icon: "/static/icon.png", // Category icon
    color: "#f45858", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="hx711_read">
                    <field name="sck">26</field>
                    <field name="dio">32</field>
                    <value name="sck">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                    <value name="dio">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ], 
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "HX711 Arduino Library@0.7.5"
    ]
});
