/**
 * This code is machine generated.
 */
module.exports = function(RED) {
  var pf = RED.settings.functionGlobalContext.get("publishflows");
  if (typeof pf == "undefined") pf = [];
  pf.push(
    {
      "subflows": [
        {
          "name": "Subflow 1",
          "id": "af86984c.5564a8",
          "checked": "checked"
        }
      ],
      "tabs": [
        {
          "label": "Test 1 flow",
          "id": "5aa020b6.706c4",
          "checked": "checked"
        }
      ],
      "path": __dirname
    }
  );
  RED.settings.functionGlobalContext.set("publishflows", pf);
};
