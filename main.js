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
    const cenasony = (zeis*sonycena)
    const canon = parseInt(document.getElementById("canon").value);
    const canoncena = 32800
    const cenacanon = (zeis*canoncena)

    let produkty = document.getElementById('stuff').innerHTML = "Twoje produty to: " + "Samyang sztuk " +samyang+" o łącznej wartości: "+cenasam+", Zeis sztuk " +zeis+" o łącznej wartości: "+cenazeis+", Sony sztuk " +sony+" o łącznej wartości: "+cenasony+", Canon sztuk " +canon+" o łącznej wartości: "+cenacanon

};

function method() {

    if (condition) {
        
    }




    const credit = parseInt(document.getElementById("credit").value);

    const paypal = parseInt(document.getElementById("paypal").value);

    const transfer = parseInt(document.getElementById("transfer").value);

    const kurier = parseInt(document.getElementById("kurier").value);

    const inpost = parseInt(document.getElementById("inpost").value);

    const odbior = parseInt(document.getElementById("odbior").value);

    // let metoda_pl = document.getElementById("metoda").innerHTML = 'Wybrana metoda płatności:' + selectedPayment;
    // let wysylka = document.getElementById("wysylka").innerHTML = 'Wybrana metoda dostawy:' + selectedShipping;
};