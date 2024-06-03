const host = location.hostname
const adresse = location.origin + '/backend/public/index.php/';
const url: string = location.origin.includes('geschool.barasoft-burkina.com')? adresse: '/';
export const environment = {
    production: true,
    // urlApi:"http://localhost/backend/public/index.php/",
    // urlApi:"http://"+host+"/backend/public/index.php/",
    // urlApi:"https://backend.geschool.barasoft-burkina.com/public/index.php/",
    // urlApi:"http://51.178.18.128:8201/"
    // urlApi:"http://geschool-backend.ddns.net/",
    // urlApi:"/"
    // urlApi: url
    urlApi: location.origin+':8000/'
};
