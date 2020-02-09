// Implementasi dengan menggunakan Vanilla JavaScript

let pesanSalam = document.getElementsByTagName("h2")[0];

ubahSalam = () => {
	if (pesanSalam.textContent === "Halo Semuanya!") {
		pesanSalam.textContent = "Halo Gaes!";
	} else {
		pesanSalam.textContent = "Halo Semuanya!";
	}
}

