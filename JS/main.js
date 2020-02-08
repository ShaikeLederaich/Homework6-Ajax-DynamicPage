import { UI } from './UI.js';
import { loadHttp } from './loadHttp.js';

$(function() {
  createNavsButton();

  UI.footerCopyrightCurrYear();
});

const http = new loadHttp();

function createNavsButton() {
  http.get('../dataPage.json', function(err, response) {
    if (err) {
      console.log(err);
    } else {
      let pages = JSON.parse(response);
      $.each(pages, function(indexInArray, valueOfElement) {
        let pageId = indexInArray;
        let page = valueOfElement;

        UI.showNavsMenu(
          pageId,
          page.Title,
          page.Tooltip,
          page.TooltipPlacement,
          page.HTMLName,
          page.Color
        );
      });

      UI.loadContent(pages);
    }
  });
}
