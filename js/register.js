// const TOKEN = "7486963640:AAE3sMEu0MPW7jPkUlxXqiklaRf6chWEW3I";
// const CHAT_ID = "586564605";
// const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// document.getElementById("form").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const number = document.getElementById("number").value.trim();
//     const course = document.getElementById("select_course").value;

//     if (!name || !number || course === "Kurs turi") {
//         alert("⚠ Iltimos, barcha maydonlarni to'ldiring.");
//         return;
//     }

//     let telegramMessage = `<b>Yangi ariza</b>\n`;
//     telegramMessage += `<b>Ism:</b> ${name}\n`;
//     telegramMessage += `<b>Telefon:</b> ${number}\n`;
//     telegramMessage += `<b>Kurs:</b> ${course}\n`;

//     try {
//         const response = await fetch(URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 chat_id: CHAT_ID,
//                 parse_mode: "HTML",
//                 text: telegramMessage
//             })
//         });

//         const data = await response.json();

//         if (data.ok) {
//             alert("✅ Ariza muvaffaqiyatli yuborildi!");
//             document.getElementById("form").reset();
//         } else {
//             console.error("Telegram API xatosi:", data);
//             alert("❌ Xabar yuborishda xatolik yuz berdi.");
//         }
//     } catch (error) {
//         console.error("Tarmoq xatosi:", error);
//         alert("❌ Tarmoq xatosi: " + error.message);
//     }
// });

const TOKEN = "7486963640:AAE3sMEu0MPW7jPkUlxXqiklaRf6chWEW3I";
const CHAT_ID = "586564605";
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const course = document.getElementById("select_course").value;

    if (!name || !number || course === "") {
        alert("⚠ Iltimos, barcha maydonlarni to'ldiring.");
        return;
    }

    let telegramMessage = `<b>Yangi ariza</b>\n`;
    telegramMessage += `<b>Ism:</b> ${name}\n`;
    telegramMessage += `<b>Telefon:</b> ${number}\n`;
    telegramMessage += `<b>Kurs:</b> ${course}\n`;

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, parse_mode: "HTML", text: telegramMessage })
        });

        const data = await response.json();

        if (data.ok) {
            showSuccessAlert();
            document.getElementById("form").reset();
        } else {
            console.error("Telegram API xatosi:", data);
            alert("❌ Xabar yuborishda xatolik yuz berdi.");
        }
    } catch (error) {
        console.error("Tarmoq xatosi:", error);
        alert("❌ Tarmoq xatosi: " + error.message);
    }
});
// Function to Show GSAP Animated Alert
function showSuccessAlert() {
    const alertBox = document.getElementById("success-alert");
    alertBox.style.display = "block";

    gsap.fromTo(alertBox, { y: -100, opacity: 0 }, { y: 20, opacity: 1, duration: 0.5, ease: "power3.out" });

    setTimeout(() => {
        gsap.to(alertBox, { opacity: 0, y: -100, duration: 1, ease: "power3.in", onComplete: () => {
            alertBox.style.display = "none";
        }});
    }, 3000);
}
