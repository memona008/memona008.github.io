function snippetTitle() {

    var titleIn = document.getElementById('titleIn');
    var titleOut = document.getElementById('titleOut');
    titleOut.value = titleIn.value;
    var titleOutPix = document.getElementById('titleOutPix');


    var titleNum = titleIn.value
    var titleCount = titleNum.length;
    document.getElementById("titleCount").innerHTML = titleCount + " Zeichen";
    titleOutPix.value = titleIn.value;



    document.getElementById('titleOutPix').innerHTML = document.getElementById('titleIn').value

    var span2 = $("span#titleOutPix");
	let txtArea2 = $("#titleIn");
    $("#titleCountPixel").text(span2.innerWidth()+ "px / 569px");



    if (span2.innerWidth() >= 566) {
        txtArea2.on("keydown", (ev) => {
            console.clear()
            if (ev.key != "Backspace" && ev.key != "Delete") {
                console.log("max Pixels reached!");
                if (!ellipsisAdded) {
                    ellipsisAdded = true
                    let currentText2 = txtArea2.val()
                    let newTxt2 = currentText2.substring(0, currentText2.length-1)+"..."						
                    txtArea2.val(newTxt2);					
                }
                return false;
            }
        })
    } else {
        $("#titleIn").off("keydown")
        ellipsisAdded = false;
    }


}
function snippetURL(){
	 var urlIn = document.getElementById('urlIn');
    var urlOut = document.getElementById('urlOut');
    urlOut.value = urlIn.value;	
}
function snippetDesc() {
    //copies input to output
    var metaIn = document.getElementById('metaIn');
    var metaOut = document.getElementById('metaOut');
    metaOut.value = metaIn.value;

    //copies input to counting space
   
    var metaOutPix = document.getElementById('metaOutPix');
    
    metaOutPix.value = metaIn.value;

    //pixel countdown
    document.getElementById('metaOutPix').innerHTML = document.getElementById('metaIn').value
    var span1 = $("span#metaOutPix");
    $("#metaCountPixel").text(span1.innerWidth() + "px / 920px");


    //character countdown
    var metaNum = metaIn.value
    var metaCount = metaNum.length;
    document.getElementById("metaCount").innerHTML = metaCount + " Zeichen";


    //stop input by pixel
    if (span1.innerWidth() >= 916) {
        let txtArea = $("#metaIn")
        txtArea.on("keydown", (ev) => {
            console.clear()
            if (ev.key != "Backspace" && ev.key != "Delete") {
                if (!ellipsisAdded) {
                    ellipsisAdded = true;
                    let currentText = txtArea.val();
                    let newTxt = currentText.substring(0, currentText.length-1)+"...";
                    txtArea.val(newTxt);
                }
                return false
            }
        })
    } else {
        $("#metaIn").off("keydown")
        ellipsisAdded = false;
    }


}
