// var container = document.getElementById('map');
// 삼립지도
var container = document.querySelector('#map');
var options = {
    center: new kakao.maps.LatLng(37.4844534, 127.037315),
    level: 2
};

var map = new kakao.maps.Map(container, options);


var marker = new kakao.maps.Marker({  // 지도 중심좌표에 마커를 생성합니다
     
    position: map.getCenter() 
}); 

// 지도에 마커를 표시합니다
marker.setMap(map);

var text = document.querySelector('.text'); // 지도에 클릭 이벤트를 등록합니다

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {   // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다    
    
    // // 클릭한 위도, 경도 정보를 가져옵니다 
    // var latlng = mouseEvent.latLng; 
    
    // // 마커 위치를 클릭한 위치로 옮깁니다
    // marker.setPosition(latlng);
    
    // text.innerHTML = "위도 : " + latlng.getLat() + "<br>경도 : " + latlng.getLng();
    // 위도 : latlng.getLat()
    // 경도 : latlng.getLng()
});  
