import { setupTicketValidation } from './function-js/setupTicketValidation.js';

// Sélectionner les éléments nécessaires
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const mainTitle = document.querySelector('.head-title .left h1');
const mainContent = document.querySelector('.main-content');

// Initialisation par défaut du contenu
function loadDefaultContent() {
    const defaultItem = Array.from(allSideMenu).find(item => item.textContent.trim() === 'Dashboard');
    
    if (defaultItem) {
        defaultItem.parentElement.classList.add('active');
        const titleText = defaultItem.textContent.trim();
        mainTitle.textContent = titleText;
        updateMainContent(titleText);
    }
}

// Ajouter un événement de clic à chaque bouton du menu latéral
allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche la redirection

        // Gérer la classe active
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');

        // Mettre à jour le titre principal
        const titleText = item.textContent.trim();
        mainTitle.textContent = titleText;

        // Mettre à jour le contenu principal
        updateMainContent(titleText);
    });
});

// Fonction pour mettre à jour le contenu principal
function updateMainContent(titleText) {
    // Effacer le contenu actuel
    mainContent.innerHTML = '';

    // Insérer le contenu en fonction du bouton cliqué
    switch (titleText) {
        case 'Dashboard':
            mainContent.innerHTML = `
                <ul class="box-info">
                    <li>
                        <i class='bx bxs-calendar-check'></i>
                        <span class="text">
                            <h3>1020</h3>
                            <p>New Order</p>
                        </span>
                    </li>
                    <li>
                        <i class='bx bxs-group'></i>
                        <span class="text">
                            <h3>2834</h3>
                            <p>Visitors</p>
                        </span>
                    </li>
                    <li>
                        <i class='bx bxs-dollar-circle'></i>
                        <span class="text">
                            <h3>$2543</h3>
                            <p>Total Sales</p>
                        </span>
                    </li>
                </ul>

                <div class="table-data">
                    <div class="order">
                        <div class="head">
                            <h3>Recent Orders</h3>
                            <i class='bx bx-search'></i>
                            <i class='bx bx-filter'></i>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Date Order</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status completed">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status process">Process</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="img/people.png">
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td><span class="status completed">Completed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="todo">
                        <div class="head">
                            <h3>Todos</h3>
                            <i class='bx bx-plus'></i>
                            <i class='bx bx-filter'></i>
                        </div>
                        <ul class="todo-list">
                            <li class="completed">
                                <p>Todo List</p>
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </li>
                            <li class="completed">
                                <p>Todo List</p>
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </li>
                            <li class="not-completed">
                                <p>Todo List</p>
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </li>
                            <li class="completed">
                                <p>Todo List</p>
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </li>
                            <li class="not-completed">
                                <p>Todo List</p>
                                <i class='bx bx-dots-vertical-rounded'></i>
                            </li>
                        </ul>
                    </div>
                </div>`;
            break;
        case 'Valider E-ticket':
            mainContent.innerHTML = `
                <form id="search-form">
                    <div class="form-group">
                        <label for="ticket-code">Entrez le code du e-ticket :</label>
                        <input type="text" id="ticket-code" class="form-control" placeholder="Code e-ticket">
                        <button type="submit" class="btn btn-primary">Rechercher</button>
                    </div>
                </form>

                <div id="ticket-info" class="mt-4"></div>

                <button id="validate-button" class="btn btn-success mt-4" style="display: none;">Valider E-ticket</button>`;


				// Ajouter la logique JavaScript pour la recherche et la validation des tickets
				console.log("Setup Ticket Validation Function Called");
				setupTicketValidation();

            break;
        case 'Consulter E-ticket':
            mainContent.innerHTML = `<p>Accédez aux analyses de vos données.</p>`;
            break;
        case 'Consulter Stock':
            mainContent.innerHTML = `<p>Vérifiez vos messages ici.</p>`;
            break;
        case 'Alerter Niveau de Stock':
            mainContent.innerHTML = `<p>Gérez votre équipe ici.</p>`;
            break;
        default:
            mainContent.innerHTML = ``;
            break;
    }
}

// Appeler la fonction d'initialisation par défaut
loadDefaultContent();

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})

if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})


