document.addEventListener("DOMContentLoaded", function () {
    // إنشاء عنصر الرسالة
    const welcomeMessage = document.createElement("div");
    welcomeMessage.className = "welcome-message";
    welcomeMessage.innerHTML = `
        <div class="welcome-content">
            <p>مرحباً بكم في المنصة البحرية التفاعلية!</p>
            <button id="closeMessage">متابعة</button>
        </div>
    `;

    // إضافة الرسالة إلى الصفحة
    document.body.appendChild(welcomeMessage);

    // إغلاق الرسالة عند النقر على الزر
    document.getElementById("closeMessage").addEventListener("click", function () {
        welcomeMessage.style.display = "none";
    });
});
