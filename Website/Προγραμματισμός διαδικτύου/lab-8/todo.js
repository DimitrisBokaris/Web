console.log("todo.js has been loaded")

  fetch('http://127.0.0.1:3000/data/todos.txt')
  .then(response => response.text())
  .then(data => {
    var splitted = String(data).split("\n");
    for (i in splitted){
        var li = document.createElement("LI");
        li.innerHTML=splitted[i]

        document.getElementById("ul1").appendChild(li); 
        
    }
    
 
    /*
    var fs = require('fs');
    fs.writeFile('./data/todos.txt', 'This is my text', function (err) {
      if (err) throw err;
      console.log('Replaced!');
    });
    */
  });
  function addObserverIfDesiredNodeAvailable() {
    var ulelement = document.getElementById("ul1");
    if(!ulelement) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    var config = {childList: true};
    var doMyThings = function() {
      console.log('UL item inseted/deleted');
      var ul = document.getElementById("ul1");
      var items = ul.getElementsByTagName("li");
      console.log(items)
      let line = ""
      for (var i = 0; i < items.length; ++i) {
        line=line+items[i].innerText+"\n"
      } 
    const downloadToFile = (content, filename, contentType) => {
      const a = document.createElement('a');
      const file = new Blob([content], {type: contentType});
      
      a.href= URL.createObjectURL(file);
      a.download = filename;
      a.click();
    
      URL.revokeObjectURL(a.href);
    };
    downloadToFile(line, './data/todos.txt', 'text/plain');

    }  
    var observer = new MutationObserver(doMyThings);
    observer.observe(ulelement,config);
  
  };  
  addObserverIfDesiredNodeAvailable();
  function destroyClickedElement(event)
  {
    document.body.removeChild(event.target);
  }
