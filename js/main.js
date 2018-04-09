var imgCount = 1;
var imgNo = document.querySelectorAll('.imgs');
var total = imgNo.length;

function photo(x) {
	var image = document.getElementById('1st21');

	imgCount = imgCount + x;

	if(imgCount > total){
		imgCount = 1;
	}

	if(imgCount < 1){

		imgCount = total;
	}	

	image.src = "img/img ("+ imgCount +").jpg";
	
	clearInterval(time); 								
	
		time =  window.setInterval(function photoA() { 	
			var image = document.getElementById('1st21');
			
			imgCount = imgCount + 1;
			
			if(imgCount > total){
				imgCount = 1;
			}
			if(imgCount < 1)
			{imgCount = total;
			}
				
			image.src = "img/img ("+ imgCount +").jpg";
			if(imgCount >= 21){
				imgCount = 1;
			}
		},2000);
	
	}
 
	var time = window.setInterval(function photoA() { 
	
		var image = document.getElementById('1st21');
	
		imgCount = imgCount + 1;
	
		if(imgCount > total){imgCount = 1;}
	
		if(imgCount < 1){imgCount = total;}	
	
		image.src = "img/img ("+ imgCount +").jpg";
		if(imgCount >= 21){
			imgCount = 1;
		}
	},2000);


	// second set
		var set2Count = 1;
		var set2No = document.querySelectorAll('.nxtset');
		var total2 = set2No.length;
		
		function photoB(x) {
			var image = document.getElementById('2nd21');
		
			set2Count = set2Count + x;
		
			if(set2Count > total2){
				set2Count = 1;
			}
		
			if(set2Count < 1){
		
				set2Count = total2;
			}	
		
			image.src = "img/img"+ set2Count +".jpg";
			
			clearInterval(time); 								
			
				time =  window.setInterval(function photoA() { 	
					var image = document.getElementById('2nd21');
					
					set2Count = set2Count + 1;
				
					if(set2Count > total2){
						set2Count = 1;
					}
					if(set2Count < 1)
					{set2Count = total2;
					}
						
					image.src = "img/img"+ set2Count +".jpg";
					if(set2Count >= 21){
						set2Countt = 1;
					}
				},2000);
			
			}
		 
			var time = window.setInterval(function photoA() { 
			
				var image = document.getElementById('2nd21');
			
				set2Count = set2Count + 1;
			
				if(set2Count > total2){set2Count = 1;}
			
				if(set2Count < 1){set2CountC = total2;}	
			
				image.src = "img/img"+ set2Count +".jpg";
				if(set2Count >= 21){
					set2Count = 1;
				}
			},2000);
			

			// last set
			var set3Count = 1;
			var set3No = document.querySelectorAll('.lastset');
			var total3 = set3No.length;
			
			function photoC(x) {
				var image = document.getElementById('3rd21');
			
				set3Count = set3Count + x;
			
				if(set3Count > total3){
					set3Count = 1;
				}
			
				if(set3Count < 1){
			
					set3Count = total3;
				}	
			
				image.src = "img/img0"+ set3Count +".jpg";
				
				clearInterval(time); 								
				
					time =  window.setInterval(function photoA() { 	
						var image = document.getElementById('3rd21');
						
						set3Count = set3Count + 1;
					
						if(set3Count > total3){
							set3Count = 1;
						}
						if(set3Count < 1)
						{set3Count = total3;
						}
							
						image.src = "img/img0"+ set3Count +".jpg";
						if(set3Count >= total3){
							set3Countt = 1;
						}
					},2000);
				
				}
			 
				var time = window.setInterval(function photoA() { 
				
					var image = document.getElementById('3rd21');
				
					set3Count = set3Count + 1;
				
					if(set3Count > total3){set3Count = 1;}
				
					if(set3Count < 1){set2Count = total3;}	
				
					image.src = "img/img0"+ set3Count +".jpg";
					if(set3Count >= total3){
						set3Count = 1;
					}
				},2000);

			window.onload(photoC(1));
			window.onload(photoB(1));
			window.onload(photo(1));