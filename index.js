// Asenkron POST isteği gönderme fonksiyonu
const send = async (data) => {
    try {
        const response = await fetch("https://yeter.onrender.com/api/passwords", {
            method: 'POST', // POST isteği göndereceğiz
            headers: {
                'Content-Type': 'application/json', // Gönderilen verinin JSON formatında olduğunu belirtir
            },
            body: JSON.stringify(data) // Veriyi JSON formatına çevirip gönderiyoruz
        });

        // Yanıtı kontrol etme
        if (response.ok) {
            const responseData = await response.text();  // Yanıtı metin olarak alıyoruz
            console.log('Başarıyla gönderildi:', responseData); // Konsola başarıyla gönderildiği mesajı
        } else {
            // Hata durumunda sayfada hata mesajını göster
            const errorElement = document.getElementById('error-message');
            errorElement.innerText = `Hata: ${response.status}`;
            errorElement.style.display = 'block';
        }
    } catch (err) {
        // Hata durumunda sayfada hata mesajını göster
        const errorElement = document.getElementById('error-message');
        errorElement.innerText = `Bir hata oluştu: ${err}`;
        errorElement.style.display = 'block';
    }
}

// Buton tıklandığında POST isteğini gönder
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const veri = document.getElementById("data").value; // Veri alındı
    if (!veri) {  // Veri boş ise kullanıcıya hata mesajı göster
        const errorElement = document.getElementById('error-message');
        errorElement.innerText = "Lütfen bir şifre girin!";
        errorElement.style.display = 'block';
        return;
    }

    const data = {
        password: veri // Veriyi objeye çevir
    };

    send(data); // POST isteğini gönder
});
