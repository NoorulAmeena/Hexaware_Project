document.getElementById('generate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const topic = document.getElementById('topic').value.trim();

    if (topic === '') {
        alert('Please enter a topic to generate questions.');
    } else {
        // Simulate question generation process
        alert(`Questions generated for topic: ${topic}`);
    }
});
