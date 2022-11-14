const container = document.querySelector('.result');
const renderTable = async () => {
    let users = 'http://localhost:3000/users';
    let companies = 'http://localhost:3000/companies';
    const res = await fetch(users);
    const user = await res.json();
    const res2 = await fetch(companies);
    const comp = await res2.json();
    let template = '';
        for(var i of comp){
            template += '<tr><td>';
            template += i.name;
            template += '</td><td>';
            for(var j of user){
                if(j.uris.company === i.uri){
                    template += j.name + '<br>';
                }
            }
            template += "</td></tr>";
        }
        container.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderTable());

