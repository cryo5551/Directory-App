const namee = document.getElementById("name");
const DOB = document.getElementById("DOB");
const aadhar = document.getElementById("aadhar");
const mobile = document.getElementById("mobile");
const age = document.getElementById("age");
const dilete = document.getElementById("delete");
const save = document.getElementById("save");
const row1 = document.getElementById("row1-id");

console.log(DOB.value + age.value +JSON.stringify(DOB.value));


dilete.addEventListener("click", () => {
    row1.remove();

    let user_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    user_info = user_info.filter((e) => { return e.Aadhar_ID !== aadhar.value });

    localStorage.setItem("users", JSON.stringify(user_info));

});

save.addEventListener("click", () => {

    if (aadhar.value.length < 12 || aadhar.value.length > 12) alert("Please enter a valid ID");
    if (mobile.value.length < 10 || mobile.value.length > 10) alert("Please enter a valid mobile number");
    if (namee.value == "") alert("Please enter your name");
    if (age.value == 0) alert("Please enter your age");
    if (DOB.value == "") alert("Please enter a valid DOB");



    let user_info = new Array();

    user_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (user_info.some((e) => { return e.Aadhar_ID == aadhar.value })) {
        alert("duplicate data");
    }

    user_info.push({
        "Name": namee.value,
        "DOB": DOB.value,
        "Aadhar_ID": aadhar.value,
        "Mobile_Number": mobile.value,
        "age": age.value
    });

    localStorage.setItem("users", JSON.stringify(user_info));

})





const addRow = () => {
    const table = document.getElementById("table-id");

    const row = document.createElement("tr");

    // Create cells
    const c1 = document.createElement("td");
    const c2 = document.createElement("td");
    const c3 = document.createElement("td");
    const c4 = document.createElement("td");
    const c5 = document.createElement("td");
    const c6 = document.createElement("td");

    const t1 = document.createElement("input");
    t1.setAttribute("type", "text");
    const t2 = document.createElement("input");
    t2.setAttribute("type", "date");
    const t3 = document.createElement("input");
    t3.setAttribute("type", "text");
    const t4 = document.createElement("input");
    t4.setAttribute("type", "text");
    const t5 = document.createElement("input");
    t5.setAttribute("type", "number");
    t5.style.width = "5rem";
    const t6 = document.createElement("input");
    t6.setAttribute("type", "button");
    t6.setAttribute("value", "❌");
    const t7 = document.createElement("input");
    t7.setAttribute("type", "button");
    t7.setAttribute("value", "✅");

    t6.addEventListener("click", () => {
        row.remove();
        let user_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        user_info = user_info.filter((e) => { return e.Aadhar_ID !== t3.value });
        localStorage.setItem("users", JSON.stringify(user_info));
    });

    t7.addEventListener("click", () => {
        const name = t1.value;
        const DOB = t2.value;
        const ID = t3.value;
        const mobile = t4.value;
        const age = t5.value;

        if (ID.length < 12 || ID.length > 12) alert("Please enter a valid ID");
        if (mobile.length < 10 || mobile.length > 10) alert("Please enter a valid mobile number");
        if (name == "") alert("Please enter your name");
        if (age == 0) alert("Please enter your age");
        if (DOB == "") alert("Please enter a valid DOB");


        let user_info = new Array();

        user_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        if (user_info.some((e) => { return e.Aadhar_ID == ID })) {
            alert("duplicate data");
        }

        else {
            user_info.push({
                "Name": name,
                "DOB": DOB,
                "Aadhar_ID": ID,
                "Mobile_Number": mobile,
                "age": age
            });
        }

        localStorage.setItem("users", JSON.stringify(user_info));

    });



    // Insert data to cells
    c1.appendChild(t1);
    c2.appendChild(t2);
    c3.appendChild(t3);
    c4.appendChild(t4);
    c5.appendChild(t5);
    c6.appendChild(t6);
    c6.appendChild(t7);




    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);

    // Append row to table body
    table.appendChild(row);
}



function showData() {
    const info_container = document.getElementById("retrive-info-container");
    const aadhar = document.getElementById("aadhar-input");

    

    const information = document.createElement("div");
    information.className = "retrived-info";


    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");

    let user_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    user_info.forEach((e) => {
        if (e.Aadhar_ID == aadhar.value) {

            p1.innerText = `Name: ${e.Name}`;
            p2.innerText = `DOB: ${e.DOB}`;
            p3.innerText = `Age: ${e.age}`;
            p4.innerText = `Aadhar Number: ${e.Aadhar_ID}`;
            p5.innerText = `Mobile Number: ${e.Mobile_Number}`;

            information.appendChild(p1);
            information.appendChild(p2);
            information.appendChild(p3);
            information.appendChild(p4);
            information.appendChild(p5);

            info_container.appendChild(information);
        }
    });
    if (aadhar.value.length < 12 || aadhar.value.length > 12) alert("Please enter a valid ID");

    else if (p1.innerText === "") alert("No info available");
}


function deleteAll() {

    const text = "Do you want to delete all information?";
    if (confirm(text) == true) {
        localStorage.removeItem("users");
    }
    
    // let user_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    // user_info = [];
    // localStorage.setItem("users", JSON.stringify(user_info));

} 