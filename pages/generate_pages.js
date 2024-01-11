// Retrieve all properties from local storage
const allProperties = JSON.parse(localStorage.getItem('properties')) || [];

// Generate individual property pages
allProperties.forEach((propertyData, index) => {
    const propertyPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Property ${index + 1}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Property ${index + 1}</h1>
            ${renderPropertyDetails(propertyData)}
        </body>
        </html>
    `;

    // Save the generated content to a static file
    const fileName = `property_${index + 1}.html`;
    const blob = new Blob([propertyPageContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Function to render property details as HTML
function renderPropertyDetails(propertyData) {
    let detailsHTML = '<ul>';
    for (const [key, value] of Object.entries(propertyData)) {
        detailsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    detailsHTML += '</ul>';
    return detailsHTML;
}
