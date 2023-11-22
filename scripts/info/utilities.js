let n=0,index=1;
function discount(){
    let Price=parseFloat(document.getElementById('total-price').innerText);
    if(Price>=30000&&n===0){
        let discountPrice=(Price*20)/100.0;
        document.getElementById('diccount-price').innerText=discountPrice.toFixed(2);
        document.getElementById('total').innerText=(Price-discountPrice).toFixed(2);
        n++;
    }else alert("You Can't Use Same Coupon Multiple Time");
}

function coupon(){
    const couponName=document.getElementById('coupon').value;
    console.log(couponName);
    if(couponName==="SELL200"){
        discount();
        document.getElementById('coupon').value='';
    }else{
        alert('Wrong Coupon Code');
    }
}
function On_Click(Name,Price){
    document.getElementById('Purchase-btn').removeAttribute('disabled');

    const productPrice=parseFloat(document.getElementById(Price).innerText);
    let TotalPrice=parseFloat(document.getElementById('total-price').innerText);
    TotalPrice+=productPrice;
    document.getElementById('total-price').innerText=TotalPrice.toFixed(2);
    document.getElementById('total').innerText=TotalPrice.toFixed(2);
    if(TotalPrice>=30000){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
    addEntry(Name,productPrice);
}

function addEntry(Name,Price){
    const name=document.getElementById(Name).innerText;
    console.log(name);
    const p=document.createElement('p');
    p.innerHTML=`${index++}. ${name} -- ${Price.toFixed(2)}TK`;
    const entry=document.getElementById('Entry');
    entry.appendChild(p);
}