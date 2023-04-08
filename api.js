
function checkIfHovering()
{
    setTimeout(function(){
        var invite = document.getElementById("invite")

        if (invite.matches(':hover')) {
            invite.innerHTML = "Join Secret Server"
        }else {
            invite.innerHTML = "30 Day Discord Invite Link"
        }

        checkIfHovering()
    }, 10)
}


function LogWebsiteEntered()
{
    checkIfHovering()

    
}

window.onload = LogWebsiteEntered()