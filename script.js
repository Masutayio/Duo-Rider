// Menu Hamburger
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

hamburgerMenu?.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});


// script.js

// Fonction pour enregistrer un nouvel utilisateur
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const photo = document.getElementById("photo").files[0]; // Gérer les fichiers
    const moto = document.getElementById("moto").value;
    const rythme = document.getElementById("rythme").value;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo); // Ajout de la photo de profil
    formData.append('moto', moto);
    formData.append('rythme', rythme);

    fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Rediriger ou afficher un message de succès
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});

// Exemple de tableau d'utilisateurs (normalement, tu obtiendrais cela d'une base de données)
const fetchUsers = () => {
    fetch('http://localhost:5000/api/users')
        .then(response => response.json())
        .then(users => {
            // Traitez et affichez les utilisateurs ici
            console.log(users);
        });
};

// Appel de la fonction pour récupérer les utilisateurs
fetchUsers();

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Connexion réussie ! Bienvenue sur Duo Rider.');
});

document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Profil enregistré !');
});

document.getElementById('searchForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Recherche en cours...');
});

// Formulaires de connexion, profil et recherche (ceci est un rappel)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Connexion réussie ! Bienvenue sur Duo Rider.');
});

document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Profil enregistré !');
});

document.getElementById('searchForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Recherche en cours...');
});
// Formulaire d'inscription
document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut
    alert('Inscription réussie ! Bienvenue sur Duo Rider.');
});
// Écouteur d'événement pour la soumission du formulaire de profil
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    const username = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;
    const photo = document.getElementById("photo").files[0];
    const theme = document.getElementById("theme").value;

    // Pour l'exemple, nous allons afficher les valeurs dans la console
    console.log("Nom d'utilisateur : ", username);
    console.log("Biographie : ", bio);
    console.log("Thème choisi : ", theme);

    // Ici, tu peux implémenter la logique pour sauvegarder les données (par exemple, dans une base de données)
    alert("Profil mis à jour !");
    
    // Changer le thème
    document.body.className = theme; // Change la classe du body selon le thème choisi
});
// Écouteur d'événement pour le champ de fichier
document.getElementById("photo").addEventListener("change", function(event) {
    const file = event.target.files[0]; // Récupère le fichier sélectionné
    const preview = document.getElementById("photoPreview"); // Sélectionne l'élément d'aperçu

    if (file) {
        const reader = new FileReader(); // Crée un nouvel objet FileReader

        reader.onload = function(e) {
            preview.src = e.target.result; // Définit la source de l'élément d'aperçu à l'image sélectionnée
            preview.style.display = "block"; // Affiche l'aperçu
        }

        reader.readAsDataURL(file); // Lit le fichier et déclenche onload
    } else {
        preview.src = ""; // Réinitialise l'aperçu si aucun fichier n'est sélectionné
        preview.style.display = "none"; // Masque l'aperçu
    }
});
// Exemple de tableau d'utilisateurs (normalement, tu obtiendrais cela d'une base de données)
const users = [
    { username: "biker123", moto: "Harley", rythme: "sportif", genre: "homme" },
    { username: "rider456", moto: "Yamaha", rythme: "tranquille", genre: "femme" },
    { username: "motoLover", moto: "Ducati", rythme: "mixte", genre: "homme" },
    // Ajoute d'autres utilisateurs ici
];

// Écouteur d'événement pour le formulaire de recherche
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    const username = document.getElementById("username").value.toLowerCase();
    const moto = document.getElementById("moto").value.toLowerCase();
    const rythme = document.getElementById("rythme").value;
    const genre = document.getElementById("genre").value;

    const results = users.filter(user => {
        return (
            (username === "" || user.username.toLowerCase().includes(username)) &&
            (moto === "" || user.moto.toLowerCase().includes(moto)) &&
            (rythme === "" || user.rythme === rythme) &&
            (genre === "" || user.genre === genre)
        );
    });

    displayResults(results); // Affiche les résultats de la recherche
});

// Fonction pour afficher les résultats
function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Réinitialise les résultats précédents

    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>Aucun utilisateur trouvé.</p>";
        return;
    }

    results.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className = "user-result";
        userDiv.innerHTML = `<strong>${user.username}</strong><br>Moto: ${user.moto}<br>Rythme: ${user.rythme}<br>Genre: ${user.genre}`;
        resultsDiv.appendChild(userDiv);
    });
}
// script.js

// Fonction pour se connecter
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur de connexion');
        }
    })
    .then(data => {
        console.log(data.message);
        // Ici, vous pourriez rediriger l'utilisateur vers la page de profil ou d'accueil
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Nom d utilisateur ou mot de passe incorrect');
    });
});
