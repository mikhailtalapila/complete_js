import previewView from "./previewView";
import View from "./View";

class BookmarksView extends View {
  _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it.";
  _message = "";
  _parentElement = document.querySelector(".bookmarks__list");
  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
  _generateMarkup = function () {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  };
}
export default new BookmarksView();
