


function init() {
    renderProjects()
    renderModals()
}



function renderProjects() {
    var projects = getProjs()
    var strHtmls = projects.map(function (project) {
        return `<div class="col-md-6 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.imgURL}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
        </div>`
    }).join('');
    $('.grid-container').html(strHtmls)
}



function renderModals() {
    var projects = getProjs()
    var strHtmls = projects
        .map(function (project) {
            return `<div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">${project.title}</p>
                  <img class="img-fluid d-block mx-auto" src="${project.imgURL}" alt="">
                  <p>${project.desc}</p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Link: <a target="_blank" href="${project.url}"> ${project.name}</a></li>
                    <li>Category: ${project.labels.join(', ')}</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>`;
        }).join('');
    $('.modals-containers').html(strHtmls);
}