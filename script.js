const text=document.getElementById("text");
const qr=document.getElementById("qr");
const img=document.getElementById("qr_img");

function qr_generator(){
    if(text.value.trim()===""){
        alert("Enter text or URL to genrate QR");
        return;
    }
    qr.style.display="flex";
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
}