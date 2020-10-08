({
    name: "HX711", // Category Name
    description: "Get weight value from Load Cell",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#f45858", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="hx711_read">
                    <field name="sck">26</field>
                    <field name="dio">32</field>
                </block>
            `
        }
    ]
});
