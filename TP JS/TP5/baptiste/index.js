// créer les constantes nécessaires
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// Empêcher le form d'être soumis
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

// exécuter la fonction quand le bouton 'Say hello' est cliqué
submitBtn.addEventListener('click', function() {
  // stocker le nom entré dans le web storage
  localStorage.setItem('name', nameInput.value);
  // exécuter nameDisplayCheck() pour afficher la
  // page personnalisée et changer le formulaire
  nameDisplayCheck();
});

// exécuter la fonction quand le bouton 'Forget' est cliqué
forgetBtn.addEventListener('click', function() {
  // supprimer l'item name du web storage
  localStorage.removeItem('name');
 // exécuter nameDisplayCheck() pour afficher la
 // page personnalisée et changer le formulaire
  nameDisplayCheck();
});

// définit la fonction nameDisplayCheck()
function nameDisplayCheck() {
  // vérifie si l'élément 'name' est stocké dans le web storage
  if(localStorage.getItem('name')) {
    // Si c'est le cas, affiche un accueil personnalisé
    let name = localStorage.getItem('name');
    //h1.textContent = 'Welcome, ' + name;
    personalGreeting.textContent = 'URL emploi du temps : ' + name + '';
    // cache la partie 'remember' du formulaire et affiche la partie 'forget'
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // Sinon, affiche un accueil générique
    //h1.textContent = 'Emploi du temps';
    personalGreeting.textContent = '';
    // cache la partie 'forget' du formulaire et affiche la partie 'remember'
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}











// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
//const form = document.querySelector('form');
//const submitBtn = document.querySelector('form button');

// Objet db pour stocker la BDD ouverte
let db;

window.onload = function() {
  nameDisplayCheck();//affichage URL emploi du temps

  // Ouvrir la BDD; elle sera créée si elle n'existe pas déjà
  // (voir onupgradeneeded)
  let request = window.indexedDB.open('notes', 1);

    // la base de données n'a pas pu être ouverte avec succès
  request.onerror = function() {
    console.log('Database failed to open');
  };

  // la base de données a été ouverte avec succès
  request.onsuccess = function() {
    console.log('Database opened successfully');

    // Stocke la base de données ouverte dans la variable db. On l'utilise par la suite
    db = request.result;

    // Exécute la fonction displayData() pour afficher les notes qui sont dans la BDD
    displayData();
  };

    // Spécifie les tables de la BDD si ce n'est pas déjà pas fait
  request.onupgradeneeded = function(e) {
    /*
    // Récupère une référence à la BDD ouverte
    let db = e.target.result;

    // Crée un objectStore pour stocker nos notes (une table)
    // Avec un champ qui s'auto-incrémente comme clé
    let objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement:true });

    // Définit les champs que l'objectStore contient
    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
    */
  };
  /*
  // Créer un gestionnaire onsubmit pour appeler la fonction addData() quand le formulaire est soumis
  //form.onsubmit = addData;
  */
};

// Définit la fonction addData()
function addData(e) {
  /*
  // empêcher le formulaire d'être soumis vers le serveur
  e.preventDefault();

  // récupérer les valeurs entrées dans les champs du formulaire
  // et les stocker dans un objet qui sera inséré en BDD
  let newItem = { title: titleInput.value, body: bodyInput.value };

  // ouvrir une transaction en lecture/écriture
  let transaction = db.transaction(['notes'], 'readwrite');

  // récupérer l'object store de la base de données qui a été ouvert avec la transaction
  let objectStore = transaction.objectStore('notes');

  // demander l'ajout de notre nouvel objet à l'object store
  var request = objectStore.add(newItem);
  request.onsuccess = function() {
    // vider le formulaire, pour qu'il soit prêt pour un nouvel ajout
    titleInput.value = '';
    bodyInput.value = '';
  };

  // attendre la fin de la transaction, quand l'ajout a été effectué
  transaction.oncomplete = function() {
    console.log('Transaction completed: database modification finished.');

    // mettre à jour l'affichage pour montrer le nouvel item en exécutant displayData()
    displayData();
  };

  transaction.onerror = function() {
    console.log('Transaction not opened due to error');
  };
  */
  }

// Définit la fonction deleteItem()
function deleteItem(e) {
  /*
  // Récupère l'id de l'entrée que l'on veut supprimer
  // On doit le convertir en nombre avant d'essayer de récupérer l'entrée correspondante dans IDB
  // les clés sont sensibles à la casse
  let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

  // Ouvre une transaction et supprime la note ayant l'id récupéré ci-dessus
  let transaction = db.transaction(['notes'], 'readwrite');
  let objectStore = transaction.objectStore('notes');
  let request = objectStore.delete(noteId);

  // Indique à l'utilisateur que l'entrée a été supprimée
  transaction.oncomplete = function() {
    // supprime l'élément parent du bouton, le li
    // pour qu'il ne soit plus affiché
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log('Note ' + noteId + ' deleted.');

    // Si la liste est vide, affiche un message qui l'indique
    if(!list.firstChild) {
      let listItem = document.createElement('li');
      listItem.textContent = 'No notes stored.';
      list.appendChild(listItem);
    }
  };
  */
}

// Définit la fonction displayData()
function displayData() {
  /*var iCalendarData = [
      'BEGIN:VCALENDAR',
      'CALSCALE:GREGORIAN',
      'PRODID:-//Example Inc.//Example Calendar//EN',
      'VERSION:2.0',
      'BEGIN:VEVENT',    
      'DTSTAMP:20080205T191224Z',
      'DTSTART:20081006',
      'SUMMARY:Planning meeting',
      'UID:4088E990AD89CB3DBB484909',
      'END:VEVENT',
      'END:VCALENDAR'
  ].join("\r\n");*/


  var url = localStorage.getItem('name');
  var iCalendarData;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
      iCalendarData = xmlhttp.responseText;
      var jcalData = ICAL.parse(iCalendarData);
      //console.log(jcalData);
      var vcalendar = new ICAL.Component(jcalData);
      //console.log(vcalendar);
      var vevent;
      var allEvents =vcalendar.getAllSubcomponents('vevent');
      console.log(allEvents);
      for(i in vcalendar.getAllSubcomponents('vevent')){
        var event = allEvents[i];
        //console.log(event);
        var summary = event.jCal[1][3];
        console.log(summary);
        /*for(summary in vevent.getAllProperties('summary')){
          console.log(summary);
        }*/
      }
      
      /*
      var vevent = vcalendar.getFirstSubcomponent('vevent');
      console.log(vevent);
      var summary = vevent.getFirstPropertyValue('summary');
      console.log(summary);*/
    }
  };
  xmlhttp.open("GET","https://cors-anywhere.herokuapp.com/"+url,true);
  xmlhttp.send();
  


  /*
  // Vide le contenu de la liste à chaque fois qu'on la met à jour
  // Si on ne le faisait pas, des duplicats seraient affichés à chaque ajout
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Ouvre l'object store puis récupère un curseur - qui va nous permettre d'itérer
  // sur les entrées de l'object store
  let objectStore = db.transaction('notes').objectStore('notes');
  objectStore.openCursor().onsuccess = function(e) {
    // Récupère une référence au curseur
    let cursor = e.target.result;

    // S'il reste des entrées sur lesquelles itérer, on exécute ce code
    if(cursor) {
      // Crée un li, h3, et p pour mettre les données de l'entrée puis les ajouter à la liste
      let listItem = document.createElement('li');
      let h3 = document.createElement('h3');
      let para = document.createElement('p');

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Récupère les données à partir du curseur et les met dans le h3 et p
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Met l'ID de l'entrée dans un attribut du li, pour savoir à quelle entrée il correspond
      // Ce sera utile plus tard pour pouvoir supprimer des entrées
      listItem.setAttribute('data-note-id', cursor.value.id);

      // Crée un bouton et le place dans le li
      let deleteBtn = document.createElement('button');
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = 'Delete';

      // Définit un gestionnaire d'événement pour appeler deleteItem() quand le bouton supprimer est cliqué
      deleteBtn.onclick = deleteItem;

      // Continue l'itération vers la prochaine entrée du curseur
      cursor.continue();
    } else {
      // Si la liste est vide, affiche un message "Aucune note n'existe"
      if(!list.firstChild) {
        let listItem = document.createElement('li');
        listItem.textContent = 'No notes stored.';
        list.appendChild(listItem);
      }
      // Il n'y a plus d'entrées dans le curseur
      console.log('Notes all displayed');
    }
  };
  */
}

