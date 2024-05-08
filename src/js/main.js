// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import {coders} from './database.js'

const tbody = document.querySelector("tbody")


// function listawithinner(){
//     coders.forEach(coder =>{
//         tbody.innerHTML +=`
//         <tr>
//         <th scope="row">${coder.id}</th>
//         <td>${coder.name}</td>
//         <td>${coder.lastName}</td>
//         <td>${coder.email}
//     `
    
//     })
    
// }

function listawithBasicElemnet() {
    coders.forEach(coder => {
        const tr = document.createElement("tr")

        for (let i = 0; i < 4; i++) {
            const td = document.createElement("td")
            tr.appendChild(td)
            
        }

        // tr.firstElementChild.textContent=coder.id
        // tr.firstElementChild.nextElementSibling.textContent=coder.name
        // tr.firstElementChild.nextElementSibling.nextElementSibling.textContent=coder.lastName
        // tr.lastElementChild.textContent=coder.email

        tr.children[i].textContent = coder.id

        tbody.appendChild(tr)
    });
}
listawithBasicElemnet()
