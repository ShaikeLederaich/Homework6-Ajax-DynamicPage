import { loadHttp } from './loadHttp.js';

class UI {
  static showNavsMenu(id, title, tooltip, placement, html, color) {
    let output = `
      <button type="button" id="${id}" class="nav-item btn btn-secondary" data-toggle="tooltip" data-placement="${placement}" title="${tooltip}" >
        <a class="nav-link" href="#">
        ${title}
        </a>
      </button>
    `;

    $('ul#myNavList').append(output);

    $('[data-toggle="tooltip"]').tooltip();

    $('ul#myNavList>button').css({
      padding: '2px 15px',
      margin: '10px 10px'
    });
    $(`ul#myNavList>button#${id}>a`).css({
      padding: '5px',
      color: `${color}`
    });
  }
  static loadContent(data) {
    $('button').each(function(index, element) {
      if (Number(this.id) + 1 === index) {
        let currBtn = this;
        $(this).on({
          click: function() {
            $.each(data, function(indexInArray, valueOfElement) {
              let page = valueOfElement;
              if (currBtn.id == indexInArray) {
                $.ajax({
                  type: 'GET',
                  url: `../HTMLPages/${page.HTMLName}`,
                  data: 'data',
                  dataType: 'text'
                }).done(response => {
                  console.clear();
                  console.log(response);
                  $('#postDynamicHTML').html(response);
                  $('h2#headline').text(`${page.Title}`);
                  $('#postDynamicHTML').css({
                    border: `8px double ${page.Color}`
                  });
                  $('#postDynamicHTML>p>img').css({
                    border: `8px double ${page.Color}`
                  });
                });
              }
            });
            setTimeout(() => {
              $('[data-toggle="tooltip"]').tooltip('hide');
            }, 1000);
          }
        });
      } else {
        $(this).on('click', function() {
          let output = `
            <h2 id="homeHeadline"
            class="display-3 text-center text-white font-weight-bold">
              Welcome To
              <br>
              <span class="display-1 font-weight-bold">
                SL Dynamic Pages
              </span>
            </h2>
            `;
          $('#postDynamicHTML').html(output);
          $('#postDynamicHTML').css({ border: 'none' });

          setTimeout(() => {
            $('[data-toggle="tooltip"]').tooltip('hide');
          }, 1000);
        });
      }
    });
  }
  static footerCopyrightCurrYear() {
    let d = new Date();
    $('#myFooter>#spn1').append(d.getFullYear());
  }
}

export { UI };
