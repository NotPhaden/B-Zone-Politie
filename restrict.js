// Verifică URL-ul curent
const allowedPath = "/B-Zone-Politie/";

if (!window.location.pathname.startsWith(allowedPath)) {
    // Dacă nu suntem pe B-Zone-Politie, redirecționează
    window.location.href = "https://notphaden.github.io/B-Zone-Politie/";
}