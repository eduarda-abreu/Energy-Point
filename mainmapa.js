// Função para inicializar e renderizar o mapa
function initMap() {
    // Coordenadas do centro do mapa
    var sorocaba = {lat: -23.5019395, lng: -47.4984083};
    // Crie um mapa com zoom 12.75 centrado em Sorocaba
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12.75,
        center: sorocaba
    });
    var janela;
    // Marcadores dos postos de abastecimento elétrico
    var postos = [
        { lat: -23.450353935548662, lng: -47.4174664028633, nome: "Eletro Auto Posto Ipiranga Ithavuru", endereco: "Av. Holingsworth, 45 - Iporanga, Sorocaba - SP, 18087-105", site:"https://www.google.com/maps/place/Eletroposto+Auto+Posto+Ipiranga+Ithavuru/@-23.5297789,-47.5191546,10.76z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94cf5fc8c7a1fd41:0x40ce047f5182f662!8m2!3d-23.455577!4d-47.41833!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11pwlwt2ds?entry=ttu"},
        { lat: -23.467769822927647, lng: -47.427673448908855, nome: "Eletroposto Facens ", endereco: "Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino Matucci, Sorocaba - SP, 18087-125",site:"https://www.google.com/maps/dir//Eletroposto+Universidade+FACENS+-+Rodovia+Senador+José+Ermírio+de+Moraes,+1425+-+Jardim+Constantino+Matucci,+Sorocaba+-+SP,+18087-125/@-23.5159533,-47.5189566,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf5fde3b61542f:0x98b5b60ac2d5511!2m2!1d-47.428725!2d-23.470934?entry=ttu"},
        { lat: -23.487804613805956, lng: -47.4450254271863, nome: "Assaí Estação de Carregamento", endereco: "R. Maria Cinto de Biagi, 164 - Jardim Santa Rosália, Sorocaba - SP, 18095-410",site:"https://www.google.com/maps/place/Assaí+Estação+de+Carregamento/@-23.4817966,-47.4586016,14.01z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94cf6199aaaf8cad:0xaa31e318988d1ad!8m2!3d-23.4903138!4d-47.4448013!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11scpwqwjp?entry=ttu" },
        { lat: -23.49772726157969, lng: -47.477892115453, nome: "Estação de carregamento para veículos elétricos ", endereco: "Av. Dr. Afonso Vergueiro, 3090 - Vila Lucy, Sorocaba - SP, 18040-000",site:"https://www.google.com/maps/place/Estação+de+carregamento+para+veículos+elétricos/@-23.504909,-47.5057067,13.05z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94c58adab0210c9d:0x54cd72748d55afa0!8m2!3d-23.501317!4d-47.47899!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11t809_ktx?entry=ttu" },
        { lat: -23.515885644231336, lng: -47.49095713439132, nome: "Eletroposto Top Car centro automotivo cherry ", endereco: "Jardim Piazza Di Roma, Sorocaba - SP, 18050-000",site:"https://www.google.com/maps/place/Eletroposto+Top+Car+Centro+Automotivo+Cherry/@-23.5044528,-47.5067017,13.05z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94c58b1dd9332215:0x369cfd0154bab964!8m2!3d-23.5189619!4d-47.489814!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11pwlwz4nm?entry=ttu" },
        { lat:  -23.524683135404196, lng: -47.49259026175861, nome: "Eletroposto Confiança Supermarcado Charging station (Contém 2)", endereco: "Av. Dr. Armando Pannunzio, 1601 - Jardim Sao Carlos, Sorocaba - SP, 18050-000",site:"https://www.google.com/maps/place/Eletroposto+Confiança+Supermercados+Charging+Station/@-23.5044528,-47.5067017,13.05z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94c58b0239195a2d:0x189027088983779a!8m2!3d-23.527384!4d-47.489904!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11pwlxv6tw?en" },
        { lat: -23.534790165322935, lng: -47.468705774012, nome: "Eletroposto Mirai Patriani (total 2) ", endereco: "R. Antônio Perez Hernandez, 80 - Parque Campolim, Sorocaba - SP, 18048-000",site:"https://www.google.com/maps/place/Eletroposto+Mirai+Patriani/@-23.5044528,-47.5067017,13.05z/data=!4m10!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m5!1s0x94c58a6992f100c3:0x7c295317ccacd162!8m2!3d-23.53936!4d-47.4672997!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA?entry=ttu" },
        { lat: -23.533292876545186, lng: -47.464622955593775, nome: "Eletroposto Shopping Iguatemi Esplanada ", endereco: "Avenida Professora Izoraida Marques Peres, 401 - Jardim Maria Jose, Sorocaba - SP, 18110-650",site:"https://www.google.com/maps/place/Eletroposto+Shopping+Iguatemi+Esplanada/@-23.5044528,-47.5067017,13.05z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94c58a68d35f6ba5:0x8daa8effaf15c47f!8m2!3d-23.536186!4d-47.463813!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11nfj76yp2?entry=ttu" },
        { lat: -23.53560145533823, lng: -47.464445123089924, nome: "Eletroposto Volvo", endereco: "Av. Gisele Constantino, 1850 - Parque Bela Vista, Sorocaba - SP, 18110-650",site:" https://www.google.com/maps/place/Eletroposto+Volvo/@-23.527968,-47.4747647,15.05z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94c58a68c54d9fef:0xc19c160a9cf57616!8m2!3d-23.536079!4d-47.4644059!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11lgtnmk7f?entry=ttu" },
        { lat: -23.51713847141995, lng: -47.46371695469231 , nome: "Eletroposto Padaria Real Conveniência ", endereco: "Av. Antônio Carlos Comitre, 475 - Parque Campolim, Sorocaba - SP, 18047-620",site:"https://www.google.com/maps/place/Eletroposto+Padaria+Real+Conveniência/@-23.527968,-47.4747647,15.05z/data=!4m11!1m3!2m2!1spostos+de+abastecimento+eletrico+sorocaba!6e2!3m6!1s0x94c58a8bf959609b:0x3826f1f23fb94764!8m2!3d-23.52004!4d-47.464109!15sCilwb3N0b3MgZGUgYWJhc3RlY2ltZW50byBlbGV0cmljbyBzb3JvY2FiYZIBIWVsZWN0cmljX3ZlaGljbGVfY2hhcmdpbmdfc3RhdGlvbuABAA!16s%2Fg%2F11s5wnpgr4?entry=ttu" },
        { lat: -23.503764855899885, lng: -47.47940075367885, nome: "Eletroposto Tauste General Carneiro ", endereco: "Av. Gen. Carneiro, 1120 - Vila Lucy, Sorocaba - SP, 18043-003",site:"https://www.google.com/maps/place/Eletroposto+Tauste+General+Carneiro/@-23.5042121,-47.4821445,17z/data=!3m1!4b1!4m6!3m5!1s0x94c58adb3e79d9db:0xcfd8582f968797b3!8m2!3d-23.504217!4d-47.4795749!16s%2Fg%2F11t80b95wj?entry=ttu" },
        // Adicione mais postos conforme necessário
    ];

    // Adiciona marcadores para cada posto
    postos.forEach(function(posto) {
        var marker = new google.maps.Marker({
            position: {lat: posto.lat, lng: posto.lng},
            map: map,
            title: posto.nome
        });

        // Conteúdo da janela de informações
        var infoWindowContent = '<div>' +
            '<h2>' + posto.nome + '</h2>' +
            '<p><strong>Endereço:</strong> ' + posto.endereco + '</p>' +
            '<button style= "text-align: center; background-color: #e6b402; color: black; height: 40px; width:120px; border: 40px solid black, border-radius: 5px" onclick="window.location.href=\'' + posto.site + '\'">Me leve até lá!</button>' +
            '</div>';

        // Janela de informações do Google Maps
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });


        marker.addListener('click', function() {
            // Fecha a janela de informações anterior, se existir
            if (janela) {
                janela.close();
            }
            // Abre a nova janela de informações
            infoWindow.open(map, marker);
            // Atualiza a referência para a nova janela de informações
           janela  = infoWindow;
        });
    });
}



