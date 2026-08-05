const phoneNumber = "6285774059645"; // Ganti dengan nomor WhatsApp toko kamu

// DATA STOK LENGKAP
const stockData = [
    // PARFUM COWO
    {"name": "Adidas sport", "cat": "PARFUM COWO"}, {"name": "Cuddle", "cat": "PARFUM COWO"}, {"name": "Bulgari extrem", "cat": "PARFUM COWO"}, {"name": "Axe alaska", "cat": "PARFUM COWO"}, {"name": "Raffi ahmad", "cat": "PARFUM COWO"}, {"name": "Bulgarı aqua Marin", "cat": "PARFUM COWO"}, {"name": "Polo sport", "cat": "PARFUM COWO"}, {"name": "Sulthon", "cat": "PARFUM COWO"}, {"name": "Bulgarı aqua", "cat": "PARFUM COWO"}, {"name": "Zara black Silver", "cat": "PARFUM COWO"}, {"name": "cool water", "cat": "PARFUM COWO"}, {"name": "TOMMY hilfiger Men", "cat": "PARFUM COWO"}, {"name": "P. Hilton", "cat": "PARFUM COWO"}, {"name": "Dior", "cat": "PARFUM COWO"}, {"name": "Hugo bos", "cat": "PARFUM COWO"}, {"name": "Antonio Banderas", "cat": "PARFUM COWO"}, {"name": "Aigner black", "cat": "PARFUM COWO"}, {"name": "Aigner blue", "cat": "PARFUM COWO"}, {"name": "one direction", "cat": "PARFUM COWO"}, {"name": "Dunhil blue", "cat": "PARFUM COWO"}, {"name": "Sauvage dior", "cat": "PARFUM COWO"}, {"name": "212 men", "cat": "PARFUM COWO"}, {"name": "212 VIP MAN", "cat": "PARFUM COWO"}, {"name": "212 sexy man", "cat": "PARFUM COWO"}, {"name": "drakar", "cat": "PARFUM COWO"}, {"name": "kenzo batang", "cat": "PARFUM COWO"}, {"name": "kenzo bali", "cat": "PARFUM COWO"}, {"name": "roman wish", "cat": "PARFUM COWO"}, {"name": "Jaguar blue", "cat": "PARFUM COWO"}, {"name": "clinis epy", "cat": "PARFUM COWO"}, {"name": "CR 7", "cat": "PARFUM COWO"}, {"name": "versace eros", "cat": "PARFUM COWO"}, {"name": "Guci guilty", "cat": "PARFUM COWO"}, {"name": "Mont blank", "cat": "PARFUM COWO"},

    // PARFUM CEWE
    {"name": "adele", "cat": "PARFUM CEWE"}, {"name": "Black Pink", "cat": "PARFUM CEWE"}, {"name": "Instagram", "cat": "PARFUM CEWE"}, {"name": "celine dion", "cat": "PARFUM CEWE"}, {"name": "elisabet", "cat": "PARFUM CEWE"}, {"name": "Sugus Pink", "cat": "PARFUM CEWE"}, {"name": "Via Valen", "cat": "PARFUM CEWE"}, {"name": "Syahrini", "cat": "PARFUM CEWE"}, {"name": "Jesika Parker", "cat": "PARFUM CEWE"}, {"name": "Victoria scandal", "cat": "PARFUM CEWE"}, {"name": "nina Rici", "cat": "PARFUM CEWE"}, {"name": "Isey Miyake", "cat": "PARFUM CEWE"}, {"name": "Ola Ramlan", "cat": "PARFUM CEWE"}, {"name": "Roman wish", "cat": "PARFUM CEWE"}, {"name": "Harajuku love", "cat": "PARFUM CEWE"}, {"name": "charlie", "cat": "PARFUM CEWE"}, {"name": "Soft", "cat": "PARFUM CEWE"}, {"name": "Vs bomsell", "cat": "PARFUM CEWE"}, {"name": "Paris Hilton", "cat": "PARFUM CEWE"}, {"name": "Paris siren", "cat": "PARFUM CEWE"}, {"name": "Opiun", "cat": "PARFUM CEWE"}, {"name": "Bakarad", "cat": "PARFUM CEWE"}, {"name": "Anasui dream", "cat": "PARFUM CEWE"}, {"name": "Anasui fantasy", "cat": "PARFUM CEWE"}, {"name": "Anasui bambi", "cat": "PARFUM CEWE"}, {"name": "D&G l'imperetice", "cat": "PARFUM CEWE"}, {"name": "Escada sexi grafiti", "cat": "PARFUM CEWE"}, {"name": "Escada moon spek", "cat": "PARFUM CEWE"}, {"name": "Escada cherry", "cat": "PARFUM CEWE"}, {"name": "Avril lavigen", "cat": "PARFUM CEWE"}, {"name": "Avril rose", "cat": "PARFUM CEWE"}, {"name": "Incanto shine", "cat": "PARFUM CEWE"}, {"name": "Barbie", "cat": "PARFUM CEWE"}, {"name": "Nagita slavina", "cat": "PARFUM CEWE"}, {"name": "Ayu ting ting", "cat": "PARFUM CEWE"}, {"name": "Cinta laura", "cat": "PARFUM CEWE"}, {"name": "Maher zain", "cat": "PARFUM CEWE"}, {"name": "Katy perry", "cat": "PARFUM CEWE"}, {"name": "Bulgari amethyst", "cat": "PARFUM CEWE"}, {"name": "Taylor swift", "cat": "PARFUM CEWE"}, {"name": "Agnes mo", "cat": "PARFUM CEWE"}, {"name": "Guci flora", "cat": "PARFUM CEWE"}, {"name": "Grecious flora", "cat": "PARFUM CEWE"}, {"name": "Zara orchid", "cat": "PARFUM CEWE"}, {"name": "Zara gardenia", "cat": "PARFUM CEWE"}, {"name": "Vs so sexy", "cat": "PARFUM CEWE"}, {"name": "yves saint laurent", "cat": "PARFUM CEWE"}, {"name": "Vs romantic", "cat": "PARFUM CEWE"},

    // BEST SELLER
    {"name": "soft", "cat": "BEST SELLER"}, {"name": "Jlo Style", "cat": "BEST SELLER"}, {"name": "Taylor Sweet", "cat": "BEST SELLER"}, {"name": "Scandalus", "cat": "BEST SELLER"}, {"name": "angel nova", "cat": "BEST SELLER"}, {"name": "Bacarat", "cat": "BEST SELLER"}, {"name": "anasui dream", "cat": "BEST SELLER"}, {"name": "Black OPIUM", "cat": "BEST SELLER"}, {"name": "Burbery goddes", "cat": "BEST SELLER"}, {"name": "Scarlet", "cat": "BEST SELLER"}, {"name": "Memo Paris Marua", "cat": "BEST SELLER"}, {"name": "Prada Pradox", "cat": "BEST SELLER"}, {"name": "Vs bomsell", "cat": "BEST SELLER"}, {"name": "Diamont", "cat": "BEST SELLER"}, {"name": "Malaikat subuh", "cat": "BEST SELLER"}, {"name": "Kasturi Kijang", "cat": "BEST SELLER"}, {"name": "Glei", "cat": "BEST SELLER"}, {"name": "Bulgari Rose", "cat": "BEST SELLER"},

    // ANEKA RASA
    {"name": "Buble gum", "cat": "ANEKA RASA"}, {"name": "Vanila. bodys", "cat": "ANEKA RASA"}, {"name": "Melati", "cat": "ANEKA RASA"}, {"name": "Melon", "cat": "ANEKA RASA"}, {"name": "Cockis and cream", "cat": "ANEKA RASA"}, {"name": "Coklat Manis", "cat": "ANEKA RASA"}, {"name": "Lechy", "cat": "ANEKA RASA"}, {"name": "apel", "cat": "ANEKA RASA"}, {"name": "teh Keraton", "cat": "ANEKA RASA"}, {"name": "Manggo Lime", "cat": "ANEKA RASA"}, {"name": "Strawberry", "cat": "ANEKA RASA"}, {"name": "Coffe bali", "cat": "ANEKA RASA"}, {"name": "Capucino", "cat": "ANEKA RASA"}, {"name": "Khayali sweet banana", "cat": "ANEKA RASA"}, {"name": "Matcha", "cat": "ANEKA RASA"}, {"name": "Kopi luwak", "cat": "ANEKA RASA"}, {"name": "Greentea", "cat": "ANEKA RASA"},

    // ARTIS
    {"name": "Raffi ahmad", "cat": "ARTIS"}, {"name": "Noah", "cat": "ARTIS"}, {"name": "Black pink", "cat": "ARTIS"}, {"name": "Via Valen", "cat": "ARTIS"}, {"name": "Syahrini", "cat": "ARTIS"}, {"name": "Jesika Parker", "cat": "ARTIS"}, {"name": "Nina rici", "cat": "ARTIS"}, {"name": "Selena Gomez", "cat": "ARTIS"}, {"name": "Nagita", "cat": "ARTIS"}, {"name": "Juliet", "cat": "ARTIS"}, {"name": "Agnes mo", "cat": "ARTIS"}, {"name": "Ayu ting ting", "cat": "ARTIS"},

    // VINTAGE
    {"name": "BULGARI ROSE", "cat": "VINTAGE"}, {"name": "MALAIKAT SUBUH", "cat": "VINTAGE"}, {"name": "1000 BUNGA", "cat": "VINTAGE"}, {"name": "BUNGAN TANJUNG", "cat": "VINTAGE"}, {"name": "KASTURI KIJANG", "cat": "VINTAGE"}, {"name": "M . JAVARON", "cat": "VINTAGE"},

    // ARAB
    {"name": "RAUDHOH", "cat": "ARAB"}, {"name": "HAJAR ASWAD", "cat": "ARAB"}, {"name": "BUKIYAH OUD", "cat": "ARAB"}, {"name": "BAKARAT OUD", "cat": "ARAB"},

    // SABUN
    {"name": "SWITSAL", "cat": "SABUN"}, {"name": "LUX", "cat": "SABUN"}, {"name": "cusson", "cat": "SABUN"}
];

let currentFilter = "ALL";

function renderRack() {
    const container = document.getElementById('rack-container');
    container.innerHTML = '';

    const filteredData = currentFilter === "ALL" 
        ? stockData 
        : stockData.filter(item => item.cat === currentFilter);

    const itemsPerRow = 10;
    const totalRows = Math.ceil(filteredData.length / itemsPerRow);

    for (let r = 0; r < totalRows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'shelf-row';

        for (let i = 0; i < itemsPerRow; i++) {
            const dataIndex = r * itemsPerRow + i;
            if (dataIndex >= filteredData.length) break;

            const item = filteredData[dataIndex];
            const bottleDiv = document.createElement('div');
            bottleDiv.className = 'bottle-item';
            bottleDiv.onclick = () => openModal(item.name, item.cat);

            // Baris paling atas (r === 0) tooltip di bawah, baris lain di atas
            const tooltipPosClass = (r === 0) ? 'tooltip-bottom' : 'tooltip-top';

            bottleDiv.innerHTML = `
                <span class="tooltip ${tooltipPosClass}">${item.name}</span>
                <img src="botol.jpg" alt="${item.name}">
            `;

            rowDiv.appendChild(bottleDiv);
        }

        container.appendChild(rowDiv);
    }
}

function filterCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === (cat === 'ALL' ? 'SEMUA STOK' : cat));
    });
    renderRack();
}

function openModal(name, category) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-category').innerText = `Kategori: ${category}`;
    document.getElementById('modal-desc').innerText = `Varian ${name} (${category}) dari 3R Imah Wangi Parfume. Menggunakan bibit berkualitas tanpa alkohol yang tahan lama dan aman dipakai harian/ibadah.`;
    
    const message = encodeURIComponent(`Halo 3R Imah Wangi, saya mau order parfum varian *${name}* (${category}). Boleh info harga dan ukurannya?`);
    document.getElementById('wa-link').href = `https://wa.me/${phoneNumber}?text=${message}`;

    document.getElementById('modal-detail').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-detail').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-detail');
    if (event.target === modal) {
        closeModal();
    }
}

// Tampilkan saat halaman pertama dimuat
renderRack();
