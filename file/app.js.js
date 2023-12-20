function myfunc(div,quantity,pri)
{
 let id = div.id;
 let quan = quantity;
 var total=0;
 const price= pri;
 var quantity=document.getElementById(quan).value;
 if(quantity>0){
 var total= price * quantity;
 document.getElementById(id).innerHTML="Pay ₹"+total;
}
}
myfunc();