/**
 * This code is machine generated.
 */
module.exports = function(RED) {
   function test1() {
     if (typeof RED.publishflows != 'undefined') {
       RED.publishflows.manifests.push(
         {
           "tabs": [
             {
               "label": "Test 1 Flow",
               "id": "5aa020b6.706c4",
               "checked": "checked"
             }
           ],
           "project": "test1"
         }
       );
     }
   }
   RED.nodes.registerType("test1", test1);
};
