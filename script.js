// Đặt ngày đến Tết Nguyên Đán 2025
const newYear = new Date("January 29, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = newYear - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.querySelector(".countdown").innerHTML = "<h2>Chúc Mừng Năm Mới 2025 🎉!</h2>";
    }
}

// Cập nhật bộ đếm mỗi giây
setInterval(updateCountdown, 1000);
