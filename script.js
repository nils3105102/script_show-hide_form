window.onload = function() {
    var form = document.getElementById("popup");
    var close = document.getElementById("close");
    var btn = document.getElementById("show"); 
    btn.onclick = popup;
    close.onclick = hide; 

    var tIn, tOut;
    function popup(){
        form.style.display = 'block';
        popupIn(1);
        
    }

    function popupIn (x) {
        //var op = form.style.opacity;
        var op;
        if (form.style.opacity) {
            op = parseFloat(form.style.opacity);
        } else {
            op = 0;
        }

        if (op < x) {

            clearInterval(tOut);
            op+=0.05;
            form.style.opacity = op;
            tIn = setTimeout(function() {
                popupIn(x);
            },10);
        }
    }    
    function hide(){
        //form.style.display = 'none';
        popupOut(0);
    }
    function popupOut(x) {
        var op;
        if (form.style.opacity) {
            op = parseFloat(form.style.opacity);
        } else {
            op = 0;
        }

        if (op > x) {
            clearInterval(tIn);
            op-=0.05;
            form.style.opacity = op;
            tOut = setTimeout(function() {
                popupOut(x);
            },10);
        }
        if (form.style.opacity == x) {
            form.style.display = 'none';
        }
    }

    //setTimeout(popup,3000);

}