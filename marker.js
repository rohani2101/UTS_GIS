
const map = L.map('map', {
    center: [-8.5946532,116.1409008],
    zoom: 12,
    // layers:[osm, Kantor_camat]
});

// Marker Cluster Group
const markers = L.markerClusterGroup();


// creat layer group kecamatan 
const ampenanlayer = L.layerGroup();
const sekarbelalayer = L.layerGroup();
const selapranglayer = L.layerGroup();
const sendubayalayer = L.layerGroup();
const cakralayer = L.layerGroup();
const mataramlayer = L.layerGroup();


// menampilkan data batas kecamatan
L.geoJSON(ampenanJSON, {
    style: function (feature) {
        return {
            color: "#ff7800", 
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        };
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(ampenanlayer);


L.geoJSON(sekarbelaJSON, {
    style: function (feature) {
        return {
            color: "#1569C7", 
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        };
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(sekarbelalayer);


L.geoJSON(selaparangJSON, {
    style: function (feature) {
        return {
            color: "#DAEE01", 
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        };
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(selapranglayer);


L.geoJSON(sendubayaJSON, {
    style: function (feature) {
        return {
            color: "#008000", 
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        };
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(sendubayalayer);


L.geoJSON(cakraJSON, {
    style: function (feature) {
        return {
            color: "#800080", 
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        };
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(cakralayer);


L.geoJSON(mataramJSON, {
    style: function (feature) {
        return {
            color: "#808080", 
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        };
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(mataramlayer);


//marker pemerintah
var desaIcon = L.icon({
iconUrl: "assets/images/building.png",
iconSize:     [38, 38], 
iconAnchor:   [22, 34], 
popupAnchor:  [-3, -36] 
});

// // menampilkan Fasilitas Pendidikan 
var greenIcon = L.icon({
iconUrl: "assets/images/back-to-school.png",
iconSize:     [38, 38], 
iconAnchor:   [22, 34], 
popupAnchor:  [-3, -36] 
});

// // menampilkan Fasilitas kesehatan
var kesehatanicon = L.icon({
iconUrl: "assets/images/hospital-building.png",
iconSize:     [38, 38], 
iconAnchor:   [22, 34], 
popupAnchor:  [-3, -36] 
});

// menampilan marker keamanan
var keamananaicon = L.icon({
iconUrl: "assets/images/keamanan.png",
iconSize:     [38, 38], 
iconAnchor:   [22, 34], 
popupAnchor:  [-3, -36] 
});

// menampilkan marker wisata
var wisataicon = L.icon({
iconUrl: "assets/images/wisata.jpg",
iconSize:     [38, 38], 
iconAnchor:   [22, 34], 
popupAnchor:  [-3, -36] 
});
var kantor_camat_ampenan = L.marker([-8.57937642466606, 116.082623181886], {icon: desaIcon}).bindPopup("Kantor camat ampenan") 
    kantor_camat_sekarbele = L.marker([-8.611033865140413, 116.07647588743923], {icon: desaIcon}).bindPopup("kantor camat sekarbele");
    kantor_camat_selaparang = L.marker([-8.56383872697988, 116.11794447024431], {icon: desaIcon}).bindPopup("Kantor camat selaparang") 
    kantor_camat_sendubaye = L.marker([-8.592937257048357, 116.15234245436524], {icon: desaIcon}).bindPopup("kantor camat sendubaye");
    kantor_camat_cakra = L.marker([-8.566104907903116, 116.135942102782], {icon: desaIcon}).bindPopup("Kantor camat cakra") 
    kantor_camat_mataram = L.marker([-8.59396572403385, 116.1128541543652], {icon: desaIcon}).bindPopup("kantor camat mataram");
var Kantor_camat = L.layerGroup([kantor_camat_ampenan,kantor_camat_sekarbele,kantor_camat_selaparang,kantor_camat_sendubaye,kantor_camat_cakra,kantor_camat_mataram]);


// marker sekoh
var sdn5_ampenan = L.marker([-8.565017600413286, 116.07828676659425],{icon:greenIcon}).bindPopup("SDN 5 ampenan"),
    MI_nahdatul_mujahidin = L.marker([-8.564586756041225, 116.08733263191874],{icon:greenIcon}).bindPopup(" mi nahdatul mujahidin"),
    tunas_harapan = L.marker([-8.567817531123136, 116.07882065658505],{icon:greenIcon}).bindPopup("TUNAS HARAPAN "),
    SDN_16_ampenan = L.marker([-8.567696409630546, 116.0941976301371],{icon:greenIcon}).bindPopup("SDN 16 AMPENAN"),
    yayasan_darul_islah_sekarbela= L.marker([-8.602237003247412, 116.0826963026539],{icon:greenIcon}).bindPopup("YAYASAN DAURUL ISLAM SEKARBELA"),
    SMK_Nurul_islam_sekarbela = L.marker([-8.59528857079689, 116.09038852172678],{icon:greenIcon}).bindPopup("SMK NURUL ISLAM SEKARBELA"),
    sekolah_nusa_alam = L.marker([-8.565833465765682, 116.11264782126406],{icon:greenIcon}).bindPopup("SEKOLAH NUSA ALAM"),
    smkn_1_mataram = L.marker([-8.563108393914995, 116.1176705982484],{icon:greenIcon}).bindPopup("SMKN 1 MATARAM");
    SDN_model_mataram= L.marker([-8.59264561540508, 116.1515925620217],{icon:greenIcon}).bindPopup("SDN MODEL MATARAM"),
    SMPN_10_mataram = L.marker([-8.601347009321653, 116.14471756855993],{icon:greenIcon}).bindPopup("SMP NEGRI 10 MATARAM"),
    SDN_1_cakra = L.marker([-8.584155615968527, 116.12826037480305],{icon:greenIcon}).bindPopup("SD NEGRI 1 CAKRA"),
    SMP_katolik_cakra = L.marker([-8.58640464271516, 116.12422633252444],{icon:greenIcon}).bindPopup("SMP KATOLIK KASUMA CAKRA");
    SMA_saraswati_mataram = L.marker([-8.585916052823945, 116.11248615492407],{icon:greenIcon}).bindPopup("SMA SARASWATI MATARAM"),
    SMAN_2_mataram = L.marker([-8.582671759618378, 116.08645978993981],{icon:greenIcon}).bindPopup("SMAN 2 MATARAM");
    SMP_IT_tunas_cendikia_mataram = L.marker([-8.587385307998366, 116.10909440127156],{icon:greenIcon}).bindPopup("SMP_IT_tunas_cendikia_mataram ");
var Pendidikan =L.layerGroup([SMP_IT_tunas_cendikia_mataram ,SMAN_2_mataram ,SMA_saraswati_mataram,SMP_katolik_cakra,SDN_1_cakra,SMPN_10_mataram ,SDN_model_mataram,sdn5_ampenan, MI_nahdatul_mujahidin,tunas_harapan,SDN_16_ampenan,yayasan_darul_islah_sekarbela,SMK_Nurul_islam_sekarbela,sekolah_nusa_alam,smkn_1_mataram]);

// marker kesehatan
var puskesmas_cakra = L.marker([-8.591096001406182, 116.14494401761674],{icon: kesehatanicon}).bindPopup("PUSKESMAS CAKRA"),
    Polindes_cakra_utara = L.marker([-8.576498487794058, 116.13395768970904],{icon: kesehatanicon}).bindPopup("POLINDES CAKRA UTARA"),
    Poskesdes_monjok = L.marker([-8.573390097216041, 116.11834470219422],{icon: kesehatanicon}).bindPopup("POSKESDES MONJOK"),
    Puskesmas_mataram= L.marker([-8.58261935155592, 116.10584882993301],{icon: kesehatanicon}).bindPopup("PUSKESMAS MATARAM"),
    RSUD_provinsi = L.marker([-8.607197041641179, 116.13232519564279],{icon: kesehatanicon}).bindPopup("RSUD PROVINSI NTB"),
    RS_bhayangkara_mataram= L.marker([-8.576263167781685, 116.08447469721334],{icon: kesehatanicon}).bindPopup("RS BHAYANGKARRA MATARAM");
    dinas_kesehatan_mataram = L.marker([-8.619289206846215, 116.09554684033807],{icon: kesehatanicon}).bindPopup("DINAS KESEHATAN KOTA MATARAM"),
    Puskesmas_pembantu_mapak = L.marker([-8.622515015348435, 116.07964932843687],{icon: kesehatanicon}).bindPopup("PUSKESMAS PEMBANTU MAPAK"),
    klinik_mataram_medika = L.marker([-8.585153499034863, 116.1130698458124],{icon: kesehatanicon}).bindPopup("KLINIK MATARAM MEDIKA"),
    RSUD_kota_mataram = L.marker([-8.599340564265384, 116.11417884713026],{icon: kesehatanicon}).bindPopup("RSUD KOTA MATARAM");
var kesehatan =L.layerGroup([puskesmas_cakra,Polindes_cakra_utara,Poskesdes_monjok,Puskesmas_mataram,RSUD_provinsi,RS_bhayangkara_mataram,dinas_kesehatan_mataram,Puskesmas_pembantu_mapak, klinik_mataram_medika,RSUD_kota_mataram ]);

// marker keamanan
var polsek_sandubaya = L.marker([-8.59059645728326, 116.14597803824955],{icon: keamananaicon}).bindPopup("POLSEK SANDUBAYA"),
    polsek_selaparang = L.marker([-8.577665776526095, 116.1195740303099],{icon: keamananaicon}).bindPopup("POLSEK SELAPARANG "),
    polsek_ampenan= L.marker([-8.584378501155278, 116.07719320515025],{icon: keamananaicon}).bindPopup("POLSEK AMPENAN"),
    polsek_mataram = L.marker([-8.59075662286731, 116.11402595543859],{icon: keamananaicon}).bindPopup("POLSEK MATARAM"),
    kepolisan_sub_sekarbela = L.marker([-8.61650949023277, 116.07732977209581],{icon: keamananaicon}).bindPopup("KEPOLISAN SUB SEKARBELE "),
    Makalah_Pertahanan_Dan_eamanan_Nasional= L.marker([-8.586890453439421, 116.12370461216088],{icon: keamananaicon}).bindPopup("Makalah Pertahanan Dan Keamanan Nasional");
var keamanan =L.layerGroup([polsek_sandubaya,polsek_selaparang,polsek_ampenan, polsek_mataram,kepolisan_sub_sekarbela,Makalah_Pertahanan_Dan_eamanan_Nasional]);

// marker wisata
var kota_tua_ampenan = L.marker([-8.567098600768285, 116.07689293947494],{icon: wisataicon}).bindPopup("KOTA TUA AMPENAN"),
    pantai_ampenan = L.marker([-8.56557088378189, 116.07225808238887],{icon: wisataicon}).bindPopup("PANTAI AMPENAN "),
    taman_mayura= L.marker([-8.58621895442578, 116.13519883643761],{icon: wisataicon}).bindPopup("TAMAN MAYURA");
    wisata_giongsiu_babakan = L.marker([-8.611470721934422, 116.13761286153263],{icon: wisataicon}).bindPopup("WISATA GIONG SIU BABAKAN"),
   kolam_jodoh = L.marker([-8.570356010616434, 116.10334698261323],{icon: wisataicon}).bindPopup("KOLAM JODOH "),
   Monumen_Mataram_Metro= L.marker([-8.612821492584306, 116.09722215576764],{icon: wisataicon}).bindPopup("Monumen Mataram Metro");
   pantai_gading= L.marker([-8.609148289704068, 116.07269336050243],{icon: wisataicon}).bindPopup("PANTAI GADING"),
    Tembolak = L.marker([-8.618652892022906, 116.09981585926968],{icon: wisataicon}).bindPopup("Tembolak Pelangi Mataram "),
    taman_udayana= L.marker([-8.572698563290988, 116.101966611292],{icon: wisataicon}).bindPopup("TAMAN UDAYANA");
   taman_sangkereang= L.marker([-8.5820119905298, 116.11822613583458],{icon: wisataicon}).bindPopup("TAMAN SANGKEREANG");
    // Tembolak = L.marker([-8.618652892022906, 116.09981585926968],{icon: umumIcon}).bindPopup("Tembolak Pelangi Mataram "),
    // taman_udayana= L.marker([-8.572698563290988, 116.101966611292],{icon: apotikIcon}).bindPopup("TAMAN UDAYANA");
var wisata =L.layerGroup([kota_tua_ampenan,pantai_ampenan,taman_mayura, wisata_giongsiu_babakan,kolam_jodoh, Monumen_Mataram_Metro,pantai_gading, Tembolak,taman_udayana,taman_sangkereang]);


// Menambahkan marker per kecamatan ke marker cluster
markers.addLayer(Kantor_camat);
markers.addLayer(Pendidikan);
markers.addLayer(kesehatan);
markers.addLayer(keamanan);
markers.addLayer(wisata);



const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Made with <i class="fa fa-heart text-danger"></i> by <a href="https://jihadul4kbar.github.io/" target="_blank">Jihadul Akbar</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'Made with <i class="fa fa-heart text-danger"></i> by <a href="https://jihadul4kbar.github.io/" target="_blank">Jihadul Akbar</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Made with <i class="fa fa-heart text-danger"></i> by <a href="https://jihadul4kbar.github.io/" target="_blank">Jihadul Akbar</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 });
    
// const map = L.map('map', {
//     center: [-8.5789437,116.1091808], 
//     zoom:12,
//     layers:[osm]
//  });

// Layer control
const baseMaps = {
    "Basepeta": osm,
    "OpenStreetMap.HOT": osmHOT,
    "Satellite": satellite
};

const overlayMaps = {
    "kantorcamat": Kantor_camat,
    "Pendidikan": Pendidikan,
    "kesehatan": kesehatan,
    "Keamana" : keamanan,
    "Wisata": wisata,
    "ampenan": ampenanlayer,  
    "sekarbela": sekarbelalayer,  
    "selaparang": selapranglayer,  
   "sendubaya": sendubayalayer,
    "cakra": cakralayer, 
    "mataram": mataramlayer, 

};


 const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//  map.on('click', function(e){
//     var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
//     console.log(e.latlng.lat, e.latlng.lng);
//  });

 var kota_mataram = L.geoJSON([kota_mataram], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    }
}).addTo(map);

markers.addTo(map);


        