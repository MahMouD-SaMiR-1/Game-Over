import { Ui } from "./ui.module.js";

export class Details {
	constructor(id) {
		document.getElementById("btnClose").addEventListener("click", () => {
			document.getElementById("details").classList.add("d-none");
			document.getElementById("games").classList.remove("d-none");
        });
        this.loading = document.querySelector(".loading");
        this.getDetails(id)
    }
    

    async getDetails(id) {
        this.loading.classList.remove("d-none")
        const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cafcb7d8b9msh9ccd56f3cf3fd76p11e696jsnf95a40bdffbc',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json()
        this.loading.classList.add("d-none");
        console.log(response);
        new Ui().displayDetails(response);
    }
}
