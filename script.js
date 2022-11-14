const container = document.querySelector('.result');
const renderTable = async () => {
    let users = 'http://localhost:3000/users';
    let companies = 'http://localhost:3000/companies';


    const res = await fetch(users);
    const user = await res.json();

    const res2 = await fetch(companies);
    const comp = await res2.json();

    const together = [...user, ...comp]
       

    const dar = Object.keys(comp)


    

    let template = '';

    user.forEach(el1 => {
        const elo = Object.values(el1)
        const elo1 = elo[3]
        const elo2 = elo1['company']

        comp.forEach(el2 =>{
            console.log(el2)
        })

        console.log(elo2)
    }),


    user.forEach(post => {

            template += `
            <tr>
               <td>${post.name}</td>
               <td>${post.uris.company}</td>
           </tr>
            `
    }),

    container.innerHTML = template;

    console.log()
};

window.addEventListener("DOMContentLoaded", () => renderTable());

