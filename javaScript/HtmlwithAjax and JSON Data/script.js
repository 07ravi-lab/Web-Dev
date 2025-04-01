// Load external HTML content
document.getElementById("loadContent").addEventListener("click", function() {
    fetch("content.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading HTML:", error));
});

// Load user JSON data
document.getElementById("loadData").addEventListener("click", function() {
    fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            let output = "<ul>";
            data.forEach(user => {
                output += `<li>${user.name} - ${user.email}</li>`;
            });
            output += "</ul>";
            document.getElementById("result").innerHTML = output;
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Load access JSON data
document.getElementById("loadAccess").addEventListener("click", function() {
    fetch("access.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("accessResult").textContent = JSON.stringify(data, null, 4);
        })
        .catch(error => console.error("Error fetching access data:", error));
});
