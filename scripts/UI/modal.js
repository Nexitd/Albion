const openBtn = document.getElementById("modal-btn"),
	modalWindow = document.getElementById("modal"),
	closeBtn = document.getElementById("close");

let modalTitle = document.getElementById("modal-title"),
	modalText = document.getElementById("modal-text"),
	inputFile = document.querySelector(".inputfile"),
	topicText = document.getElementById("modal-theme"),
	postBtn = document.getElementById("post");

openBtn.addEventListener("click", () => {
	modalWindow.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
	modalWindow.classList.toggle("show");
	modalText.value = "";
	modalTitle.value = "";
	inputFile.value = "";
	document.querySelector(".file-text").innerHTML = "";
});



// Validation

let date = `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`;

postBtn.addEventListener("click", () => {
	if (
		modalTitle.value == "" ||
		modalTitle.value == "" ||
		modalText.value == "" ||
		modalText.value == " " ||
		inputFile.value == "" ||
		inputFile.files.length > 1
	) {
		alert("Some fields are not filled in");
	} else {
		alert("Its okey");
		document.querySelector(".modal").addEventListener("submit", (event) => {
			event.preventDefault();
			const promise = sendDataCard(modalTitle.value, topicText.value, modalText.value, inputFile.files, date);
			modalText.value = "";
			modalTitle.value = "";
			inputFile.value = "";
			document.querySelector(".file-text").innerHTML = "";
		});
	}
});


// Понятия не имею че это за код

(function (document, window, index) {
	const inputs = document.querySelectorAll(".inputfile");
	Array.prototype.forEach.call(inputs, function (input) {
		let label = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener("change", function (e) {
			var fileName = "";
			if (this.files && this.files.length > 1)
				fileName = (
					this.getAttribute("data-multiple-caption") || ""
				).replace("{count}", this.files.length);
			else fileName = e.target.value.split("\\").pop();

			if (fileName) label.querySelector("span").innerHTML = fileName;
			else label.innerHTML = labelVal;
		});

		input.addEventListener("focus", function () {
			input.classList.add("has-focus");
		});
		input.addEventListener("blur", function () {
			input.classList.remove("has-focus");
		});
	});
})(document, window, 0);