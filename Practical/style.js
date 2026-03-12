const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModel = document.getElementById("closeModal")

const form = document.getElementById("productForm");
const container = document.getElementById("productContainer");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");
const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");

const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");

let editIndex = null;

let products = JSON.parse(localStorage.getItem("products")) || [];

window.onload = () => {
    renderProducts();
};

window.onload = () => {
    renderProducts();
};

openModal.onclick = () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    form.reset();
    editIndex = null;
};

closeModal.onclick = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

form.onsubmit = (e) => {
    e.preventDefault();

    const product = {
        name: nameInput.value,
        image: imageInput.value,
        price: Number(priceInput.value),
        stock: stockInput.value
    };

    if (editIndex !== null) {
        products[editIndex] = product;
    } else {
        products.push(product);
    }

    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();

    form.reset();
    modal.classList.add("hidden");
    modal.classList.remove("flex");
};

function renderProducts() {
    container.innerHTML = "";

    let filteredProducts = [...products];

    const searchValue = searchInput.value.toLowerCase();
    if (searchValue) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchValue)
        );
    }

    if (sortSelect.value === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortSelect.value === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    filteredProducts.forEach((p) => {
        const index = products.indexOf(p);

        const card = document.createElement("div");
        card.className = "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden w-64";

        card.innerHTML = `
    <div class="bg-white rounded-lg shadow-md overflow-hidden w-64">

    <!-- Image Container -->
    <div class="w-64 h-40 flex flex-wrap items-center justify-center object-cover bg-gray-100">
        <img src="${p.image}" class="max-h-full max-w-full object-contain"/>
    </div>

    <div class="p-4">
        <h3 class="font-semibold text-slate-800">${p.name}</h3>
        <p class="text-sm text-slate-500 mt-1">Price: ₹${p.price}</p>
        <p class="text-sm text-slate-500">Stock: ${p.stock}</p>

        <div class="flex gap-2 mt-3">
            <button data-index="${index}" class="editBtn flex-1 bg-green-500 hover:bg-green-400 text-white py-1 rounded-md text-xs">
                Edit <i class="ri-pencil-fill"></i>
            </button>
            <button data-index="${index}" class="deleteBtn flex-1 bg-red-500 hover:bg-red-400 text-white py-1 rounded-md text-xs">
                Delete <i class="ri-delete-bin-fill"></i>   
            </button>
        </div>
    </div>

</div>
`;
        

        container.appendChild(card);
    });
}

container.onclick = (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains("deleteBtn")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }

    if (e.target.classList.contains("editBtn")) {
        const product = products[index];

        nameInput.value = product.name;
        imageInput.value = product.image;
        priceInput.value = product.price;
        stockInput.value = product.stock;

        editIndex = index;

        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
};

searchInput.addEventListener("input", renderProducts);

sortSelect.addEventListener("change", renderProducts);
