import { useEffect, useState } from 'react';


export default function GoTopButton() {
const [visible, setVisible] = useState(false);


useEffect(() => {
const checkScroll = () => {
setVisible(window.scrollY > 300);
};


window.addEventListener('scroll', checkScroll);
return () => window.removeEventListener('scroll', checkScroll);
}, []);


if (!visible) return null;


return (
<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
style={{
position:'fixed',
bottom:'30px', right:'30px',
background:'var(--color-sunrise-orange)',
color:'white', padding:'14px', borderRadius:'50%',
boxShadow:'var(--shadow-soft)'
}}>
↑
</button>
);
}