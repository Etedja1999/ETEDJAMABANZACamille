function ajouterPanier(nom, prix) {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  const existant = panier.find(p => p.nom === nom);
  if (existant) {
    existant.qte += 1;
  } else {
    panier.push({ nom, prix, qte: 1 });
  }
  localStorage.setItem('panier', JSON.stringify(panier));
  alert(nom + ' ajouté au panier.');
}

window.onload = function () {
  const panier = JSON.parse(localStorage.getItem('panier')) || [];
  const contenu = document.getElementById('contenu-panier');
  const totalEl = document.getElementById('total');
  if (contenu && totalEl) {
    let total = 0;
    panier.forEach(p => {
      const ligne = document.createElement('p');
      ligne.textContent = `${p.nom} - ${p.qte} x ${p.prix} FC`;
      contenu.appendChild(ligne);
      total += p.qte * p.prix;
    });
    totalEl.textContent = 'Total: ' + total + ' FC';
  }
};
