function mapView() {
    document.getElementById('mapp').style.backgroundColor="#007bff";
    document.getElementById('list').style.backgroundColor="transparent";
    document.getElementById('list').style.border="none";
    if (document.getElementById('flex1')) {

        if (document.getElementById('flex1').style.display == 'none') {
            document.getElementById('flex1').style.display = 'none';
            document.getElementById('map').style.display = 'block';
        }
        else {
            document.getElementById('flex1').style.display = 'none';
            document.getElementById('map').style.display = 'block';
        }
    }
}

function listView(){
    document.getElementById('list').style.backgroundColor="#007bff";
    document.getElementById('mapp').style.backgroundColor="transparent";
    document.getElementById('mapp').style.border="none";
    if (document.getElementById('map')) {

        if (document.getElementById('map').style.display == 'none') {
            document.getElementById('map').style.display = 'block';
            document.getElementById('flex1').style.display = 'none';
        }
        else {
            document.getElementById('map').style.display = 'none';
            document.getElementById('flex1').style.display = 'block';
        }
    }

}