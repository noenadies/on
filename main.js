

myFunction();
function myFunction() {
	// body...

	//alert(web);

			  $.ajax({
               
                url:   'web.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) { 
                  var as=Object.keys(data.inicio);
                  for(var i=0; i<as.length;i=i+1){
                    data.inicio[i].web
                 
                    window.location =data.inicio[i].web; 
                  }
                }
                });
      }
