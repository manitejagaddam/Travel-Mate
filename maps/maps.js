let map,directionsService, directionsRenderer
let sourceAutocomplete,desAutocomplete
        function initMap(){
            map = new google.maps.Map(document.getElementById('map'),{
                center:{lat:37.7749,lng:-122.4194},
                zoom:13,
            })
            google.maps.event.addListener(map,"click", function(event){
                this.setOption({scrollwheel:true})
            })
            directionsService = new google.maps.DirectionsService()
            directionsRenderer = new google.maps.DirectionsRenderer()
            directionsRenderer.setMap(map)

            sourceAutocomplete = new google.maps.places.Autocomplete(
                document.getElementById('source')
            )
            desAutocomplete = new google.maps.places.Autocomplete(
                document.getElementById('dest')
            )
        }


        function calcRoute(){
            var source = document.getElementById('source').value
            var dest = document.getElementById('dest').value
            console.log(source)
            console.log(dest)

            let request = {
                origin:source,
                destination:dest,
                travelMode:'DRIVING'
            }

            directionsService.route(request,function(result,status){
                if(status == "OK"){
                    directionsRenderer.setDirections(result)
                }
            })
        }