function LoadContent(){

	$.support.cors = true;
	// var net = new ActiveXObject ( "WScript.NetWork" );
	// var loggedUserName = net.UserName
	// $('#userName').html(net.UserName);

	$.ajax({
        type: "get",
		async: false,
		cache: false,
        url: 'http://localhost/GadgetAPI/api/Values', //'http://gprasad16430:9999/TangoeTrac/ServletVersion?userName='+loggedUserName,
		success: function (data) {           	
			
			$('#MainContainer').html(data);
			
			firstTabData();			
					
        },
		error:function(xhr, status, error){			
			$('#MainContainer').html('Unable to connect to the server');
		}
    });	
	
	$("#ticketsTab").click(function(e){	
		firstTabData();	
	})
	
	function firstTabData()
	{
		$.support.cors = true;
		
		$.ajax({
        type: "get",
		cache : false,
		async: false,
        url: 'http://localhost/GadgetAPI/api/Tickets',//'http://gprasad16430:9999/TangoeTrac/ServletVersion?userName='+loggedUserName,
		success: function (data) {
          		
			$('#ticketsTabContent').html(data);
			
        },
		error:function(xhr, status, error){			
			$('#ticketsTabContent').html("Unable to connect the server");
		}
		
	})
		
	}
	
	$("#projectsTab").click(function(e){
	secondTabData();
	})
	
	function secondTabData()
	{		
		$.support.cors = true;
	
		$.ajax({
        type: "get",
		async: false,
		cache:false,
        url: 'http://localhost/GadgetAPI/api/Projects',//'http://gprasad16430:9999/TangoeTrac/ServletVersion?userName=admin',
		success: function (data) {
          		
			$('#projectsTabContent').html(data);
			
        },
		error:function(xhr, status, error){			
			$('#projectsTabContent').html("Unable to connect to the server");
		}
		
	})
	}
	
	$("#backlogTab").click(function(e){
		thirdTabData();
	})
	
	function thirdTabData()
	{
		$.support.cors = true;
		$.ajax({
        type: "get",
		async: false,
		cache:false,
        url: 'http://localhost/GadgetAPI/api/Backlog',//'http://gprasad16430:9999/TangoeTrac/ServletVersion?userName=release.prep',
		success: function (data) {
            		
			$('#backlogTabContent').html(data);
			
        },
		error:function(xhr, status, error){			
			$('#backlogTabContent').html("Unable to connect to the server");
		}
		})
	}
	
	setInterval(function() {
      firstTabData();
	  secondTabData();
	  thirdTabData();
	  
}, 10000);
}
	
	
      
	
