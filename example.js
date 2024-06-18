// U08282838

function loadData() {
    d3.csv("data/purchase_orders.csv").then(function(data) {
        // Select the unordered list element
        const ul = d3.select("#Orders");

        // For each row in the data, creates a list item and appends it to the list
        data.forEach(function(order) {
            ul.append("li")
              .text(`${order.customerName} - Order ${order.orderId}: $${order.purchaseAmount}`);
        });
    }).catch(function(error) {
        console.error('Error loading the CSV file:', error);
    });
}

// Call the loadData function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadData);