const travelKm = document.getElementById("km");

const age = document.getElementById("age");

const generatedPrice = document.getElementById("generated_price");

const pricePerKm = 0.21;

const shownPrice = document.getElementById("shown_price");

const nameAndSurname = document.getElementById("input_name")

const passengerName = document.getElementById("name");

const discountType = document.getElementById("discount_type");

const wagon = document.getElementById("wagon");

const code = document.getElementById("code");

generatedPrice.addEventListener("click", function(){
    let insertedKm = travelKm.value * 1;
    let insertedAge = age.value * 1;
    let insertedName = nameAndSurname.value;

    const totalPrice = (insertedKm * pricePerKm).toFixed(2);

    if (!isNaN(insertedKm) && insertedAge >= 18 && insertedAge <= 65) {

        passengerName.innerHTML = `${insertedName}`;
        shownPrice.innerHTML = `${totalPrice}`;
        discountType.innerHTML = "Non sono applicati sconti"
        wagon.innerHTML = Math.floor(Math.random() * 8) + 1;
        code.innerHTML = Math.floor(Math.random() * 100) +1;

    } else if (insertedAge < 18) {
        const discountMinor = ((totalPrice * 20) / 100);
        const finalPrice = (totalPrice - discountMinor).toFixed(2);
    
        shownPrice.innerHTML = `Il prezzo del biglietto è: ${finalPrice}`;
    } else if ( insertedAge > 65) {
        const discountOver = ((totalPrice * 40) / 100);
        const finalPrice = (totalPrice - discountOver).toFixed(2);
    
        shownPrice.innerHTML = `Il prezzo del biglietto è: ${finalPrice}`;
    }

})







