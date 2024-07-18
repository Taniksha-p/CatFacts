// let btn = document.querySelector("button");

// btn.addEventListener("click" , async () => {
//     let fact = await getfacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;

//     } catch (e) {
//         console.log("error - " , e);
//         return "no fact found" ;
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#getFactsBtn");
    const resultDiv = document.querySelector("#result");
    const url = "https://catfact.ninja/fact";

    btn.addEventListener("click", async () => {
        const fact = await getFacts();
        console.log(fact);
        displayFact(fact);
    });

    async function getFacts() {
        try {
            const response = await axios.get(url);
            return response.data.fact;
        } catch (error) {
            console.error("Error fetching the fact:", error);
            return "No fact found.";
        }
    }

    function displayFact(fact) {
        resultDiv.innerText = fact;
        resultDiv.classList.add("fadeIn");
        setTimeout(() => {
            resultDiv.classList.remove("fadeIn");
        }, 1000);
    }
});
