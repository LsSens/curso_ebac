document.addEventListener("DOMContentLoaded", () => {
    const username = "LsSens";
    const apiUrl = `https://api.github.com/users/${username}`;

    async function fetchGithubData() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            document.querySelector(".profile-avatar").src = data.avatar_url;
            document.querySelector(".profile-name").textContent = data.name || "Nome não disponível";
            document.querySelector(".profile-username").textContent = `@${data.login}`;
            document.querySelector(".numbers-item:nth-child(1) h4").textContent = "Repositórios";
            document.querySelector(".numbers-item:nth-child(1)").append(data.public_repos);
            document.querySelector(".numbers-item:nth-child(2) h4").textContent = "Seguidores";
            document.querySelector(".numbers-item:nth-child(2)").append(data.followers);
            document.querySelector(".numbers-item:nth-child(3) h4").textContent = "Seguindo";
            document.querySelector(".numbers-item:nth-child(3)").append(data.following);
            document.querySelector(".profile-link").href = data.html_url;
        } catch (error) {
            console.error("Erro ao buscar os dados do GitHub:", error);
        }
    }

    fetchGithubData();
});
