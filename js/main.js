var imageCount = 1;
var imgNo = document.querySelectorAll('.imgs');
var total = imgNo.length;
var x = 0;

function photo(x) {
	var image = document.getElementById('1st21');

	imageCount = imageCount + x;

	if(imageCount > total){
		imageCount = 1;
	}

	if(imageCount < 1){

		imageCount = total;
	}	

	image.src = "Img/img"+imageCount+".jpg";
	
	clearInterval(time); 								// clear interval stops the set interval.
	
		time =  window.setInterval(function photoA() { 		// givig the value of time the samfunction below starts the loop
			var image = document.getElementById('1st21');
			
			imageCount = imageCount + 1;
			
			if(imageCount > total){
				imageCount = 1;
			}
			if(imageCount < 1)
			{imageCount = total;
			}
				
			image.src = "Img/img"+ imageCount +".jpg";
		},2000);
	}
 
	var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
	
		var image = document.getElementById('1st21');
	
		imageCount = imageCount + 1;
	
		if(imageCount > total){
			imageCount = 1;
		}
	
		if(imageCount < 1){
			imageCount = total;
		}	
	
		image.src = "Img/img"+ imageCount +".jpg";
	},2000);

	// second set
	function photo(x) {
		var image = document.getElementById('2nd');
	
		imageCount = imageCount + x;
	
		if(imageCount > total){
			imageCount = 1;
		}
	
		if(imageCount < 1){
	
			imageCount = total;
		}	
	
		image.src = "Img/img"+imageCount+".jpg";
		
		clearInterval(time); 							
		
			time =  window.setInterval(function photoA() { 		

				var image = document.getElementById('2nd21');
				
				imageCount = imageCount + 1;
				
				if(imageCount > total){
					imageCount = 1;
				}
				if(imageCount < 1)
				{imageCount = total;
				}
					
				image.src = "Img/img"+ imageCount +".jpg";
			},2000);
		}
	 
		var time = window.setInterval(function photoA() {
		
			var image = document.getElementById('2nd21');
		
			imageCount = imageCount + 1;
		
			if(imageCount > total){
				imageCount = 1;
			}
		
			if(imageCount < 1){
				imageCount = total;
			}	
		
			image.src = "Img/img"+ imageCount +".jpg";
		},2000);

		// 3rd set
		function photo(x) {
			var image = document.getElementById('3rd21');
		
			imageCount = imageCount + x;
		
			if(imageCount > total){
				imageCount = 1;
			}
		
			if(imageCount < 1){
		
				imageCount = total;
			}	
		
			image.src = "Img/img"+imageCount+".jpg";
			
			clearInterval(time); 								// clear interval stops the set interval.
			
				time =  window.setInterval(function photoA() { 		// givig the value of time the samfunction below starts the loop
					var image = document.getElementById('3rd21');
					
					imageCount = imageCount + 1;
					
					if(imageCount > total){
						imageCount = 1;
					}
					if(imageCount < 1)
					{imageCount = total;
					}
						
					image.src = "Img/img"+ imageCount +".jpg";
				},2000);
			}
		 
			var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
			
				var image = document.getElementById('3rd21');
			
				imageCount = imageCount + 1;
			
				if(imageCount > total){
					imageCount = 1;
				}
			
				if(imageCount < 1){
					imageCount = total;
				}	
			
				image.src = "Img/img"+ imageCount +".jpg";
			},2000);
	window.onload = photo(x);