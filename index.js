function vijay(){	
	$.ajax({
        type: "GET",
		async: false,
        url: 'http://10.80.50.234/Gadget/api/Gadget/',
		success: function (data) {
            txt = data;
			alert(txt);
        }
    });
	$('#MainContainer').html(txt);
	$('#tab-1').text('Tab 1');
	$('#tab-2').text('Tab 2');
	$('#tab-3').text('Tab 3');
	$('#tab-4').text('Tab 4');
	
	$('#tab1 p').text('This is tab 1');
	$('#tab2 p').text('This is tab 2');
	$('#tab3 p').text('This is tab 3');
	$('#tab4 p').text('This is tab 4');
	
	$('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
}