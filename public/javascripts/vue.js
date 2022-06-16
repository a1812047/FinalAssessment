
var Myapp = new Vue({
    el:"#app",
    data:{
        CheckIn:"",
        CheckOut:"",
        Category:"Types of rooms",
        roomsSelected:[],
        currentRoom:{},
        TypeofRooms:{
            Standard:{
                image:'../images/Standard.jpg',
                Description:"This is a Standard room! Enjoy yoour stay",
                maxAdults:2,
                maxChildren:2,
                Price: '120AUD/night'
            },Double:{
                image:'../images/Double_room.jpg',
                Description:"This is a Double Room! Enjoy your stay? ",
                maxAdults:2,
                maxChildren:2,
                Price: '120AUD/night'
            },
            Deluxe:{
                image:'../images/Deluxe.jpg',
                Description:"This is a biggest room we have DeluXe! good for three!! Enjoy the room!!",
                maxAdults:3,
                maxChildren:2,
                Price: '150AUD/night'
            },
        }
            
       
    },
    methods:{
        setMinDate: function(){
            var date = new Date();
            let currentDate = date.getDate();
            let currentMonth = date.getMonth()+1;
            if (currentDate < 10){
                currentDate = '0'+currentDate;
            }
            if(currentMonth < 10){
                currentMonth = '0'+currentMonth;
            }
            const currentYear = date.getFullYear();
            const calendar = document.getElementById("calendar");
            calendar.setAttribute('min',currentYear+"-"+currentMonth+"-"+currentDate);
           
        },
        setMinDate2: function(){
            var date = new Date(this.CheckIn);
            console.log(date);
            let currentDate = date.getDate()+1;
            let currentMonth = date.getMonth()+1;
            if (currentDate < 10){
                currentDate = '0'+currentDate;
            }
            if(currentMonth < 10){
                currentMonth = '0'+currentMonth;
            }
            const currentYear = date.getFullYear();
            const calendar = document.getElementById("calendar2");
            calendar.setAttribute('min',currentYear+"-"+currentMonth+"-"+currentDate);
        },
        OnSelect: function(){
            console.log("you selected this value");
            if(this.Category === "Standard"){
                this.currentRoom = this.TypeofRooms.Standard;
                // document.getElementById("imageDisp").style.backgroundImage = 'url('+this.TypeofRooms.Standard.image+')';
            }else if(this.Category === "Double"){
                this.currentRoom = this.TypeofRooms.Double;
                // document.getElementById("imageDisp").style.backgroundImage = 'url('+this.TypeofRooms.Double.image+')';
            }else if(this.Category === "Deluxe"){
                this.currentRoom = this.TypeofRooms.Deluxe;
                // document.getElementById("imageDisp").style.backgroundImage = 'url('+this.TypeofRooms.Deluxe.image+')';
            }
            console.log(this.currentRoom);
             document.getElementById("imageDisp").style.backgroundImage = 'url('+this.currentRoom.image+')';


        }
    }
});

setInterval(setdate,100);
function setdate(){
    if(Myapp.CheckIn == ""){
        document.getElementById("calendar2").disabled = true;
    }else{
        document.getElementById("calendar2").disabled = false;
    }

    if(Myapp.CheckIn !== "" && Myapp.CheckOut !== ""){
        document.getElementById("search").disabled = false;
    }else{
        document.getElementById("search").disabled = true;
    }
}