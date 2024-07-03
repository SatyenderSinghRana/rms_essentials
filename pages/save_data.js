function saveData() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        fetch('save_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, message: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchData();
            } else {
                alert('Failed to save data');
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function fetchData() {
    fetch('fetch_data.php')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('dataList');
        dataList.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `Name: ${item.name}, Message: ${item.message}`;
            dataList.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Fetch data when the page loads
window.onload = fetchData;


for table

CREATE TABLE your_table_name (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    message TEXT NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
