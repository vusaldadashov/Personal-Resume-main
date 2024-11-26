const btn = document.getElementById('button');
const form = document.getElementById('form');


const sendMyMail = (event) => {
    event.preventDefault();
    let from_name = document.getElementById('name');
    let to_name = "Vusal Dadashov";
    let email_id = document.getElementById('email');
    let message = document.getElementById('message');
    let successtext = document.getElementById('successtext');
    emailjs.send("service_9ptuutg","template_5etl2mm",{
        from_name: from_name.value,
        to_name: to_name,
        email_id: email_id.value,
        message: message.value,
        });
    from_name.value = "";
    email_id.value = "";
    message.value = "";
    successtext.style.opacity = "1"
    successtext.style.visibility = "visible"
    setTimeout(() => {
        successtext.style.opacity = "0"
    successtext.style.visibility = "hidden"
    }, 4000);
}