window.onload = function(){

    //Toggle tabs

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab =>{
        tab.addEventListener('click',  () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            target.classList.add('active') 
        })
    })

    //Form

    const loginBtn = document.getElementById('login-btn')
    const formOverlay = document.getElementById('form-overlay')

    
        loginBtn.addEventListener('click', () =>  {
            if (formOverlay.style.display = "none") {
                formOverlay.style.display = "block";
              } else {
                formOverlay.style.display = "none";
              }
        })



        const submitBtn = document.getElementById('submit_btn')
        const authLogin = document.getElementById('auth_login')

        submitBtn.addEventListener('click', () =>  {
            if (formOverlay.style.display = "block") {
                formOverlay.style.display = "none";
              } else {
                formOverlay.style.display = "block";
              }

            if (authLogin.style.display = "none") {
                authLogin.style.display = "flex";
                loginBtn.style.display = "none"
            } else {
                authLogin.style.display = "none";
            }   
        })

        authLoginBtn = document.getElementById('auth_login_btn')

        authLoginBtn.addEventListener('click', () =>  {
            if (loginBtn.style.display = "none") {
                loginBtn.style.display = "block";
                authLogin.style.display = "none"
              } 
        })

    
    //Input name
    
    const inputName = document.getElementById('name')
    

    inputName.addEventListener('change', (inputValue) => {
        inputValue = inputName.value
        
        let authName = document.getElementById('auth_name').innerHTML = inputValue
        
        rememberMe(inputValue)
    })

   const checkBox = document.getElementById('remember')
   
   //Name in local storage

   rememberMe = function(inputValue){
    if(checkBox.checked = true){
        console.log('check')
        localStorage.setItem('check_name', inputValue)
        if (localStorage.getItem('check_name') != null){
            let checkName =  localStorage.getItem('check_name')
            console.log(checkName)
            let authName = document.getElementById('auth_name').innerHTML = checkName

        }else{
            let authName = document.getElementById('auth_name').innerHTML = inputValue    
        }
    } 
   }

   //Stay online

   let outerCheck = localStorage.getItem('check_name')
   console.log(outerCheck)

   if(outerCheck != null){
        let authName = document.getElementById('auth_name').innerHTML = outerCheck
        authLogin.style.display = "flex"
        loginBtn.style.display = "none"
   }

    
}