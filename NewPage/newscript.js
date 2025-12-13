
            const switchDLButton = document.getElementById("dl-switch")

            switchDLButton.addEventListener("change", (e) => {
                if (e.target.checked) {
                    document.body.classList.add("dark-mode")
                }   else {
                    document.body.classList.remove("dark-mode")
                }
            });