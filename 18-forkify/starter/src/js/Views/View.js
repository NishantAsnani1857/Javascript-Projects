const icons = new URL('../../img/icons.svg', import.meta.url);

export default class View {
  _parentElement = document.querySelector('.recipe');
  _data;
  _errorMessage = 'We could not find the recipe.....'

  render(data) {

    if (!data || (Array.isArray(data) && data.length === 0)) return this.generateError()

    this._data = data
    const markup = this._generateMarkup()
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }
  _clear() {
    this._parentElement.innerHTML = ''
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  renderSpinner = function () {
    const markup = `<div class="spinner">
        <svg>
          <use href="${icons.href}.svg#icon-loader"></use>
        </svg>
        </div>`
    this._parentElement.innerHTML = ''
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  generateError(message = this._errorMessage) {
    const markup = `<div class="error">
      <div>
        <svg>
          <use href="${icons.href}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div> -->`
    this._parentElement.innerHTML = ''
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

}
