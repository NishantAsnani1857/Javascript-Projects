import View from './View'
const icons = new URL('../../img/icons.svg', import.meta.url);

class BookMarkView extends View {
    _parentElement = document.querySelector('.bookmarks__list')
    _errorMessage = 'No Bookmarks .......'

    _generateMarkup() {
        const id = window.location.hash.slice(1)
        const markup = this._data.map((ele) => `<li class="preview">
      <a class="preview__link ${ele.id === id ? "preview__link--active":""}" href=#${ele.id}>
        <figure class="preview__fig">
          <img src="${ele.img}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${ele.title}</h4>
          <p class="preview__publisher">${ele.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>`).join('')
        return markup;
    }
}

export default new BookMarkView();