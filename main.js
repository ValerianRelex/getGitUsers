class View {
    constructor() {
        this.app = document.getElementById('app');

        this.title = this.createElement('h1', 'title');
        this.title.textContent = 'Поиск пользователей на сайте GitHub:'

        this.searchLine = this.createElement('div', 'search-line');
        this.searchInput = this.createElement('input', 'search-input');
        this.searchCounter = this.createElement('span', 'counter');

        this.searchLine.append(this.searchInput);
        this.searchLine.append(this.searchCounter);

        this.usersWrapper = this.createElement('div', 'users-wrapper');
        this.usersList = this.createElement('ul', 'users-list');
        this.usersWrapper.append(this.usersList);

        this.main = this.createElement('div', 'main');
        this.main.append(this.usersWrapper);


        this.app.append(this.title);
        this.app.append(this.searchLine);
        this.app.append(this.main);
    }

    createElement(elementTag, elementClass) {
        const element = document.createElement(elementTag);
        if (elementClass) { }
        element.classList.add(elementClass);
        return element;
    }
}

class Search {
    constructor() {

    }
}

new Search(new View);