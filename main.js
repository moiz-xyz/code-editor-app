function check (){
   let data = localStorage.getItem("save");
    let save = data ? JSON.parse(data) : [];
   
   let found = save.some(save => save.email);
    if (found){
          window.location.href = "/editor/index.html";
    }
    if (!found){
        Swal.fire({
            icon: "error",
            title: "Signup",
            text: "You are not signed up",
            footer: '<a href="./Login& signup/signup.html">Signup?</a>'
          });
    }
    }
localStorage.clear();


