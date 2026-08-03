```javascript
const form =
    document.getElementById("form");

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const firstName =
            document
            .getElementById("firstName")
            .value;

        const lastName =
            document
            .getElementById("lastName")
            .value;

        const fatherName =
            document
            .getElementById("fatherName")
            .value;

        const motherName =
            document
            .getElementById("motherName")
            .value;

        const dob =
            document
            .getElementById("dob")
            .value;

        const education =
            document
            .getElementById("education")
            .value;

        const photo =
            document
            .getElementById("photo")
            .value;

        const gender =
            document.querySelector(
                'input[name="gender"]:checked'
            );

        const message =
            document
            .getElementById("message");

        if (
            firstName === "" ||
            lastName === "" ||
            fatherName === "" ||
            motherName === "" ||
            dob === "" ||
            education === "" ||
            photo === "" ||
            gender === null
        ) {
            message.textContent =
                "Please fill all fields!";
        }
        else {
            message.style.color =
                "green";

            message.textContent =
                "Registration Successful!";

            form.reset();
        }

    }
);
```
