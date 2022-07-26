const tableContainer = document.querySelector("[data-table-body]")
const userTemplate = document.querySelector("[data-row]")

let users = []
const URL = 'https://jsonplaceholder.typicode.com/users'
fetch(URL)
    .then(res => res.json())
    .then(data => {
        
        data.forEach(el =>{
            let node = userTemplate.content.cloneNode(true).children[0]
            let id = node.querySelector("[data-id]")
            let name = node.querySelector("[data-name]")
            let email = node.querySelector("[data-email]")
            let address = node.querySelector("[data-address]")
            let phone = node.querySelector("[data-phone]")
            let website = node.querySelector("[data-website]")
            id.textContent = el.id
            name.textContent = el.name
            email.textContent = el.email
            address.textContent = el.address.street
            phone.textContent = el.phone
            website.textContent = el.website
            tableContainer.append(node)
        })
        document.querySelector(".table-head").classList.remove("d-none")
    })

document.querySelector("tbody[data-table-body]").addEventListener("click",function(el){
    let key = Object.keys(el.target.dataset)[0]
    if(key === 'website'){
        let link = el.target.textContent
        console.log(link)
        window.open("https://"+link,"_blank")
    }else{
        console.log("El",el)
        localStorage.setItem("userId",1)
        // window.open("user-details.html","_blank")
    }
})