class searchView {
    _parentEl = document.querySelector('.search')

    getQuery() {
        const query = document.querySelector('.search__field').value
        this._clearInput();
        return query;
    }
    _clearInput() {
        return this._parentEl.querySelector('.search__field').value = ''
    }
    addHandler(handler) {
        this._parentEl.addEventListener('submit', (e) => {
            e.preventDefault();
            handler();
        })
    }

}


export default new searchView();