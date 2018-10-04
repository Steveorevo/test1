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
      "files": [
        {
          "isDirectory": "false",
          "name": "a unique file from test1.txt",
          "path": "/a unique file from test1.txt",
          "id": "a-unique-file-from-test1-txt",
          "checked": "checked"
        },
        {
          "isDirectory": "true",
          "name": "a unique folder from test1",
          "path": "/a unique folder from test1",
          "id": "a-unique-folder-from-test1",
          "checked": "checked"
        },
        {
          "isDirectory": "true",
          "name": "untitled folder",
          "path": "/untitled folder",
          "id": "untitled-folder",
          "checked": "checked"
        },
        {
          "isDirectory": "false",
          "name": "from test1 2.txt",
          "path": "/untitled folder/from test1 2.txt",
          "id": "untitled-folder-from-test1-2-txt",
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
