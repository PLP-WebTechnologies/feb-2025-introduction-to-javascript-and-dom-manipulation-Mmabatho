// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 1. CHANGE TEXT CONTENT =====
    
    // Get references to elements
    const demoText = document.getElementById('demo-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const resetTextBtn = document.getElementById('reset-text-btn');
    
    // Store the original text
    const originalText = demoText.textContent;
    
    // Add event listener for changing text
    changeTextBtn.addEventListener('click', function() {
        // Change the text content dynamically
        demoText.textContent = 'Text changed! JavaScript can dynamically update content.';
        
        // You can also use innerHTML if you need to include HTML tags
        // demoText.innerHTML = 'Text changed! <strong>JavaScript</strong> can dynamically update content.';
    });
    
    // Add event listener for resetting text
    resetTextBtn.addEventListener('click', function() {
        demoText.textContent = originalText;
    });
    
    
    // ===== 2. MODIFY CSS STYLES =====
    
    // Get references to elements
    const styleBox = document.getElementById('style-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    const changeSizeBtn = document.getElementById('change-size-btn');
    const rotateBtn = document.getElementById('rotate-btn');
    const resetStyleBtn = document.getElementById('reset-style-btn');
    
    // Track if the box is rotated
    let isRotated = false;
    
    // Add event listener for changing color
    changeColorBtn.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Change the background color using style property
        styleBox.style.backgroundColor = randomColor;
    });
    
    // Add event listener for changing size
    changeSizeBtn.addEventListener('click', function() {
        // Check current width to toggle between sizes
        if (styleBox.style.width === '300px') {
            // Reset to original size
            styleBox.style.width = '200px';
            styleBox.style.height = '100px';
        } else {
            // Increase size
            styleBox.style.width = '300px';
            styleBox.style.height = '150px';
        }
    });
    
    // Add event listener for rotating
    rotateBtn.addEventListener('click', function() {
        if (isRotated) {
            // Reset rotation
            styleBox.style.transform = 'rotate(0deg)';
        } else {
            // Apply rotation
            styleBox.style.transform = 'rotate(45deg)';
        }
        // Toggle rotation state
        isRotated = !isRotated;
    });
    
    // Add event listener for resetting styles
    resetStyleBtn.addEventListener('click', function() {
        // Reset all styles to original
        styleBox.style.backgroundColor = '#3498db';
        styleBox.style.width = '200px';
        styleBox.style.height = '100px';
        styleBox.style.transform = 'rotate(0deg)';
        isRotated = false;
    });
    
    
    // ===== 3. ADD/REMOVE ELEMENTS =====
    
    // Get references to elements
    const elementContainer = document.getElementById('element-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const clearElementsBtn = document.getElementById('clear-elements-btn');
    
    // Counter for element IDs
    let elementCounter = 0;
    
    // Add event listener for adding elements
    addElementBtn.addEventListener('click', function() {
        // Increment counter
        elementCounter++;
        
        // Create a new element
        const newElement = document.createElement('div');
        
        // Set its properties
        newElement.className = 'dynamic-element';
        newElement.id = 'element-' + elementCounter;
        newElement.textContent = 'Dynamic Element ' + elementCounter;
        
        // Add a delete button inside the element
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.backgroundColor = '#e74c3c';
        
        // Add event listener to the delete button
        deleteBtn.addEventListener('click', function() {
            // Remove this specific element when its delete button is clicked
            elementContainer.removeChild(newElement);
        });
        
        // Append the delete button to the new element
        newElement.appendChild(deleteBtn);
        
        // Add the new element to the container
        elementContainer.appendChild(newElement);
    });
    
    // Add event listener for removing the last element
    removeElementBtn.addEventListener('click', function() {
        // Get all dynamic elements
        const elements = elementContainer.getElementsByClassName('dynamic-element');
        
        // Check if there are any elements to remove
        if (elements.length > 0) {
            // Remove the last element
            elementContainer.removeChild(elements[elements.length - 1]);
        }
    });
    
    // Add event listener for clearing all elements
    clearElementsBtn.addEventListener('click', function() {
        // Clear all child elements
        elementContainer.innerHTML = '';
        
        // Reset counter
        elementCounter = 0;
    });
});