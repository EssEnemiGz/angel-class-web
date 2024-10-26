const getEmail = () => {
    const email = document.getElementById("email").value;
    if (email === "") {
        alert("You need to enter a email!")
        return;
    }

    fetch("https://mail.softkitacademy.com/get/email",
        {
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            method: "PUT",
            body: JSON.stringify(
                {
                    "key": "angel_class",
                    "email": email
                }
            )
        }
    ).then(response => {
        if (!response.ok) {
            alert("Error while sending the email");
            throw new Error(`Error: fetching`);
        }

        alert("Email sended, check you email");
    })
}