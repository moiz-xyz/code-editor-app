function run (){
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML= html + "<style>" + css +"</style>";
    output.contentWindow.eval(js);
}   
function logout () {
    let data  = localStorage.getItem ("");
let save = data ? JSON.parse(data) :[];
let found = save.some(save => save.email);
if (found){
    Swal.fire({
        title: "Do you want to Logout?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
    localStorage.removeItem("save");
    setTimeout(() =>{
window.location.href = "../Login& signup/login index.html"
    }, 2000)
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          
        }
    });
}else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Data not found, please sign in?</a>'
      }).then(() => {
        setTimeout(() => {
          window.location.href = "../Login& signup/signup.html";
        }, 500);
      });
}

}
