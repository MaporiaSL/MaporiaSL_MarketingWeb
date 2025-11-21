export default function TeamSection() {
const team = [
  { name: "Anuk Ranasinghe", role: "Frontend Developer", github: "https://github.com/anucr", linkedin: "" },
  { name: "Anuja Jayasinghe", role: "Frontend Developer", github: "https://github.com/Anuja-jayasinghe", linkedin: "https://www.linkedin.com/in/anuja-jayasinghe/" },
  { name: "Pudamya Yamini", role: "UI/UX & Flutter Specialist", github: "https://github.com/PudamyaYamini", linkedin: "http://www.linkedin.com/in/pudamya-de-silva-1a2ab7320" },
  { name: "Kaushal Senevirathne", role: "Frontend Developer", github: "https://github.com/KaushalSenevirathne", linkedin: "" },
  { name: "Sedani Lesara", role: "UI/UX & QA", github: "https://github.com/Sedani25", linkedin: "http://www.linkedin.com/in/sedani-lesara-sethumlee-956998395" },
  { name: "Hitheshi Kariyawasam", role: "UI/UX & Product Design", github: "https://github.com/hitheshik", linkedin: "" },
];


return (
<section className="section" id="team">
<div className="container">


<h2 style={{fontSize:'36px', fontWeight:700, textAlign:'center'}}>Our Team</h2>


<div style={{marginTop:'40px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'28px'}}>
{team.map((m,i) => (
<div key={i} style={{padding:'24px', background:'white', borderRadius:'var(--radius)', boxShadow:'var(--shadow-soft)'}}>
<h3 style={{fontSize:'20px', fontWeight:600}}>{m.name}</h3>
<p>{m.role}</p>


<div style={{display:'flex', gap:'16px', marginTop:'12px'}}>
<a href={m.github} target="_blank">GitHub</a>
<a href={m.linkedin} target="_blank">LinkedIn</a>
</div>
</div>
))}
</div>


</div>
</section>
);
}