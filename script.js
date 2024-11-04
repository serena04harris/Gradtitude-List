function addGratitude() {
    const gratitudeInput = document.getElementById('gratitudeInput').value.trim();
    const category = document.querySelector('input[name="category"]:checked');

    if (!gratitudeInput) {
        alert('Please enter your gratitude.');
        return;
    }

    const gratitudeList = document.getElementById('gratitudeList');
    const listItem = document.createElement('li');
    listItem.textContent = ` ${gratitudeInput}` + (category ? ` (Category: ${category.value})` : '');
    gratitudeList.appendChild(listItem);


    document.getElementById('gratitudeInput').value = '';
    if (category) {
        category.checked = false;
    }
}