const SEARCHBTN = document.querySelector(".nav__icon__search");
const SEARCHINPUT = document.querySelector(".nav__search");

SEARCHBTN.addEventListener("click", () => {
	SEARCHINPUT.classList.toggle("input--hide");
});

// product detail page

const viewProductBtn = document.querySelectorAll(".products__detail");

viewProductBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		const productId = e.target.id;
		window.location.href = `detail.html?id=${productId}`;
	});
});

const obtenerProductos = () => {
	return fetch(
		"https://my-json-server.typicode.com/EzequielMassa/Challenge-Ecommerce-Oracle-ONE/producto"
	).then((res) => res.json());
};
obtenerProductos().then((data) => console.log(data[0].nombre));
