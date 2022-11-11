const container = document.querySelector('.blogss');
const renderTable = async () => {
    let users = 'http://localhost:3000/users';
    let companies = 'http://localhost:3000/companies';


    const res = await fetch(users);
    const user = await res.json();

    const res2 = await fetch(companies);
    const comp = await res2.json();

    const together = [...user, ...comp];

    

    let template = '';


    user.forEach(post => {

            template += `
            <tr>
               <td>${post.uris.company}</td>
               <td>${post.name}</td>
           </tr>
            `
    })

    container.innerHTML = template;

    console.log(finde)
};

window.addEventListener("DOMContentLoaded", () => renderTable());

