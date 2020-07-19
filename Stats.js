let screencontent;
function fileAdded(screencontent){
	let file = document.getElementById("FileSelect").files[0];
	let reader= new FileReader();
	reader.readAsText(file)
	reader.onload = function (){
		var numbers = reader.result
		numbers = numbers.split("\n")
	//	console.log(numbers)
		let Data= new Object()
		let expression=/\"/g
		for(let i=0;i<numbers.length;i++){
			numbers[i] = numbers[i].split(",")
			numbers[i][0]= numbers[i][0].replace(expression,'')
			Data[numbers[i][0]]=numbers[i][1]
		}
		delete Data[""]
	//	console.log(Data)
		var vpos =20
		for(var element in Data){
			//console.log(element)
			let id=element
			//document.getElementById(element).style.top= vpos+"px"
			vpos+= 50
			if(element==="Elevation"){
				let timesUpMountain = parseFloat(Data[element])/1085 //Height of Snowdon in M
			//	console.log(timesUpMountain)
				timesUpMountain = timesUpMountain.toFixed(2)
			//	console.log(timesUpMountain)
				document.getElementById(element).innerHTML=id+": "+Data[element]+"<br>"+timesUpMountain+" X Snowdon, Wales, UK"
			}else{
			document.getElementById(element).innerHTML=id+": "+Data[element]
			}
		}
		document.getElementById("FileSelect").style.display = "none";
		let btn = document.createElement("Button")
		btn.innerHTML="Download"
		btn.className="button"
		//btn.onclick= production
		//document.getElementById("FileInput").appendChild(btn);
		var elmnt = document.getElementById("Information");
		var useHeight = elmnt.scrollHeight;
		var useWidth = elmnt.scrollWidth;
//		console.log(useHeight)
		let screencontent = html2canvas(document.getElementById("Information"),{useCORS: true,allowTaint: true,foreignObjectRendering: true, width: useWidth, height:useHeight, backgroundcolor:null,}).then(function(canvas) {
			screencontent = new Image()
			screencontent.src = canvas.toDataURL('image/jpeg', 1.0);
//			console.log(screencontent)
//			console.log(screencontent.src)
//			console.log("Screenshot")
			let btn = document.createElement("Button")
			btn.innerHTML="Download"
			btn.className="button"
	//		console.log("HI")
			btn.onclick= production
			document.getElementById("FileInput").appendChild(btn);
			function production(){
				console.log("Button Pressed")
				console.log(screencontent)
				var a = document.createElement("a");
				a.href = screencontent.src;
				a.setAttribute("download", "Test123456");
				a.click();
	//			console.log("Download")
		}
		})
	//	numbers.splice(0,1)
	//	numbers.splice(numbers.length-1,1)
	//	console.log(Data)
	}
  }