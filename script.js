var redmode = false
    function endrebakgrunn() {
        if (redmode == false) {
            document.getElementById('background').style.backgroundColor = 'black'
            document.getElementById('background').style.transistion = '2s'
            document.getElementById('text').style.color = 'red'
            document.getElementById("button-change-color").style.backgroundColor = "red"
            redmode = true
        }
        else {
            document.getElementById('background').style.backgroundColor = 'white'
            document.getElementById('background').style.transistion = '2s'
            document.getElementById('text').style.color = 'black'
            document.getElementById("button-change-color").style.backgroundColor = "white"
            redmode = false
        }

    }
    
    //darkmode mode function
    