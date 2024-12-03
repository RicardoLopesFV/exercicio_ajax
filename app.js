
// Função para buscar dados do perfil do GitHub
async function fetchGitHubProfile(username) {
  const url = `https://api.github.com/users/${username}`; // API do GitHub para buscar dados do perfil
  try {
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error("Erro ao buscar os dados do perfil.");
      }

      const data = await response.json();
      updateProfile(data); // Atualiza a página com os dados
  } catch (error) {
      console.error(error);
      alert("Não foi possível carregar as informações do perfil.");
  }
}

// Função para atualizar a página com os dados do perfil
function updateProfile(data) {
  document.getElementById("avatar").src = data.avatar_url;
  document.getElementById("name").textContent = data.name || "Nome não disponível";
  document.getElementById("username").textContent = `@${data.login}`;
  document.getElementById("repos").textContent = data.public_repos;
  document.getElementById("followers").textContent = data.followers;
  document.getElementById("following").textContent = data.following;
  document.getElementById("profile-link").href = data.html_url;
}

// Pega os dados do perfil "RicardoLopesFV"
fetchGitHubProfile("RicardoLopesFV");
