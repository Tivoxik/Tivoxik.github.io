function dane() {  

    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const email = document.getElementById('email').value;
    const adres = document.getElementById('adres').value;

    let dane = document.getElementById('dane').innerHTML = "Twoje dane do wysyłki to: " +imie+" "+nazwisko+", "+email+", "+adres

};

function produkty() {

    const samyang = parseInt(document.getElementById("sam").value);
    const samcena = 1790
    const cenasam = (samyang*samcena)
    const zeis = parseInt(document.getElementById("zeis").value);
    const zeiscena = 18800
    const cenazeis = (zeis*zeiscena)
    const sony = parseInt(document.getElementById("sony").value);
    const sonycena = 7940
    const cenasony = (sony*sonycena)
    const canon = parseInt(document.getElementById("canon").value);
    const canoncena = 32800
    const cenacanon = (canon*canoncena)

    const cena = (cenasam+cenazeis+cenasony+cenacanon)

    let produkty = document.getElementById('stuff').innerHTML = "Twoje produty to: "+"<br>"+ "Samyang sztuk " +samyang+" o łącznej wartości: "+cenasam+"<br>"+"Zeiss sztuk " +zeis+" o łącznej wartości: "+cenazeis+"<br>"+"Sony sztuk " +sony+" o łącznej wartości: "+cenasony+"<br>"+"Canon sztuk " +canon+" o łącznej wartości: "+cenacanon+"<br>"+"łączna wartość twoich zakupów to: "+cena

};

function method() {

    var payment = "" 
    if(document.getElementById("credit").checked == true)
    {
        var payment = "Karta Kredytowa";
    }

    else if(document.getElementById("paypal").checked == true)
    {
        var payment= "Paypal";
    }

    else if(document.getElementById("transfer").checked == true)
    {
        var payment = "Przelew bankowy";
    }

    let platnosc = document.getElementById('metoda').innerHTML = "Twój sposób płatności to: " +payment
};

function method2() {

    var wysylka = "" 
    if(document.getElementById("kurier").checked == true)
    {
        var wysylka = "Kurier DPD";
    }

    else if(document.getElementById("inpost").checked == true)
    {
        var wysylka= "Paczkomat InPost";
    }

    else if(document.getElementById("odbior").checked == true)
    {
        var wysylka = "Odbiór osobisty";
    }

    let sposob = document.getElementById('wysylka').innerHTML = "Twój sposób dostawy to: " +wysylka
};