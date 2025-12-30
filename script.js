const timer = document.getElementById("timer");

if (timer) {
    const newYear = new Date("January 1, 2026 00:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = newYear - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}