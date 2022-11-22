import "amazon-connect-streams";

let containerDiv = document.getElementById("container-div");
let instanceURL = "TBD";

connect.core.initCCP(containerDiv, {
    ccpUrl: instanceURL,
    loginPopup: true,
    loginPopupAutoClose: true,
    softphone: {
        allowFramedSoftphone: true,
    }
});
