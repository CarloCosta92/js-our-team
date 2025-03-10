const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// console.log(teamMembers);


// ciclo for per prendermi tutte le proprietà e pusharle nel mio html

const container= document.querySelector("div.container");

for(let i=0;i<teamMembers.length; i++){
  const teamMembersElements=document.createElement('div');
  teamMembersElements.classList.add('card-container');

  teamMembersElements.innerHTML = `            <div class="image">
                <img src="${teamMembers[i].img}" alt="${teamMembers[i].name}">
            </div>
             <div class="info">
                <h4>${teamMembers[i].name}</h4>
                <p>${teamMembers[i].role}</p>
                <div class="email">
                    <p>${teamMembers[i].email}</p>
               </div>
            </div>
         </div> `

  container.appendChild(teamMembersElements);

}

// test per legare struttura delle card 


// const div = document.querySelector("div.container");
// div.innerHTML += `<div class="card-container">
//             <div class="image">
//                 <img src="img/female1.png" alt="female1">
//             </div>
//             <div class="info">
//                 <h4>aa</h4>
//                 <p>a</p>
//                 <div class="email">
//                     <p>aaa</p>
//                 </div>
//             </div>
//         </div> `

