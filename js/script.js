
function slide()
{
  let q=document.getElementsByClassName("content");
  console.log(q);
  let i=Math.floor(Math.random()*q.length);
  for(let i=0;i<q.length;i++)
  {
	q[i].style.display="none";
  }
  q[i].style.display="block";
}
setInterval(slide,1000);