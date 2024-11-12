function openWhatsApp() {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Include country code, e.g., 911234567890 for India
    const message = "Hello! I'm interested in your fashion products.";
    const url = `https://wa.me/${7590889608}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}