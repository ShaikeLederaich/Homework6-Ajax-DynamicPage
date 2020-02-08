function loadHttp() {
  this.loadHttp = new XMLHttpRequest();
}

loadHttp.prototype.get = function (url, callback) {
  
  // let self = this;
  this.loadHttp.onload = () => {
    if (this.loadHttp.status == 200 && this.loadHttp.readyState == 4) {
      callback(null, this.loadHttp.responseText);
    } else {
      callback('Error: ' + this.loadHttp.status);
    }
  };
  this.loadHttp.open('GET', url, true);
  this.loadHttp.send();
};

export { loadHttp };
