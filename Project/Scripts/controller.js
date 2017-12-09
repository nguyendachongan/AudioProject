myApp.controller('MusicCtrl', function ($scope) {
    $scope.duration = '0:00';
    $scope.barstyle = {width: "0%"};
    $scope.audios=[
        {
            id:1,
            title:'Jue Qiang',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:2,
            title:'Crazy World',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:3,
            title:'Love-ing',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:4,
            title:'Second Life',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:5,
            title:'I',
            artist:'Jolin Tsai',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:7,
            title:'Party Animal',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:8,
            title:'Second Life',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:9,
            title:'I',
            artist:'Jolin Tsai',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:10,
            title:'Party Animal',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:11,
            title:'Party Animal',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        },
        {
            id:12,
            title:'Party Animal',
            artist:'Mayday',
            avataLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ',
            musicLink:'https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU'
        }
    ];
    $scope.init=function()
    {
        $scope.selected=1;
        $scope.title='Party Animal';
        $scope.artist='Mayday';
        $scope.avataLink='https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ';
        $scope.musicLink='https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU';
        $scope.audio = new Audio();
        $scope.audio.type = "audio/mpeg";
        $scope.audio.src = $scope.musicLink;
        $scope.isplaying = false;
        $scope.audio.addEventListener('timeupdate', timeupdate);
        $scope.timelineWidth = $(".progress")[0].offsetWidth;
    };
    console.log($scope.audios);
    $scope.select=function(a){
        $scope.selected=a.id;
        $scope.title=a.title;
        $scope.artist=a.artist;
        $scope.avataLink=a.avataLink;
        $scope.musicLink=a.musicLink;
        $scope.audio = new Audio();
        $scope.audio.type = "audio/mpeg";
        $scope.audio.src = $scope.musicLink;
        $scope.isplaying = false;
        $scope.audio.addEventListener('timeupdate', timeupdate);
        $scope.timelineWidth = $(".progress")[0].offsetWidth;
    }

    $scope.play = function () {
        if ($scope.isplaying) {
            $scope.audio.pause();
            $scope.isplaying = false;
        } else {
            $scope.audio.play();
            $scope.isplaying = true;
        }
    };


    $scope.setTime = function ($event) {

        // remove listener on audio
        $scope.audio.removeEventListener('timeupdate', timeupdate, true);
        var position = $event.clientX - $event.target.getBoundingClientRect().left + window.scrollX;
        console.log(position);
        $scope.time = (position / $scope.timelineWidth) * 100;
        $scope.audio.currentTime = ($scope.time * $scope.audio.duration) / 100;

        $scope.barstyle.width = $scope.time + "%";
    };

    $scope.reset = function () {
        $scope.audio.addEventListener('timeupdate', timeupdate);
    };

    function timeupdate() {
        var sec_num = $scope.audio.currentTime;
        var minutes = Math.floor(sec_num / 60);
        var seconds = sec_num - (minutes * 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        minutes += "";
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        seconds += "";

        var time = minutes + ':' + seconds.substring(0, 2);
        $scope.duration = time;

        $scope.barstyle.width = ($scope.audio.currentTime / $scope.audio.duration) * 100 + "%";
        $scope.$apply();
    };
});