$(function () {

    var page = [];
    var index = 0;
    var temp;
    var size;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var dialogOperation = initDialog();
    function initDialog() {
        var dialogOperation = {
            autoOpen: false,//自动打开
            modal: false,//模态，开启会话框后能否操作原界面
            resizable: true,//能不能改大小
            position: { my: "right bottom", at: "right-15px bottom-15px", of: window },//出现位置
            maxWidth: 350,//最大宽度
            maxHeight: 700,//窗口最大高度
            minWidth: 300,//最小宽度
            minHeight: 200,//最小高度
            width: 300,
            height: 500,
            //按钮操作
            buttons: {
                //跳转按钮
                "跳转详细页面": function () {
                    window.open("http://www.baidu.com")
                },
                //退出
                "←": function () {
                    if(index - 1 > 0){
                        temp = $('#' + page[--index]);
                        var tempClass = [];
                        var classList = $('.ui-dialog');
                        size = classList.size();
                        for(var i = 0;i < size;i++){
                            var tempPage = classList[i];
                            if(page[index] === tempPage.attributes["aria-describedby"].value){
                                tempClass = tempPage;
                            }
                        }
                        dialogOperation.width = tempClass.offsetWidth - 8;
                        dialogOperation.height = tempClass.offsetHeight;
                        dialogOperation.position ={ my: "right bottom", at: "right-" + ((windowWidth - tempClass.offsetLeft - tempClass.offsetWidth).toFixed(0)) + "px" + " " + "bottom-" + ((windowHeight - tempClass.offsetTop - tempClass.offsetHeight).toFixed(0)) + "px", of: window };
                        temp.dialog("close");
                        page.pop();
                        $('#' + page[index - 1]).dialog(dialogOperation).dialog("open");
                    }
                }
            }
            //设置打开样式
            /*show:{
                effect: "blind",
                duration: 1000
            }
            //设置关闭样式
            hide:{
            effect: "explode",
                duration: 1000
            }*/
        };
        return dialogOperation;
    }
    //切换窗口中的内容的方法,把对应div内容放到窗口的div
    function changeHtml(change) {
        var changeHtml = $('#' + change);
        if(page[index - 1] !== change){
            if(index > 0){
                temp = $('#' + page[index - 1]);
                var tempClass = [];
                var classList = $('.ui-dialog');
                size = classList.size();
                for(var i = 0;i < size;i++){
                    var tempPage = classList[i];
                    if(page[index - 1] === tempPage.attributes["aria-describedby"].value){
                        tempClass = tempPage;
                    }
                }
                dialogOperation.width = tempClass.offsetWidth - 8;
                dialogOperation.height = tempClass.offsetHeight;
                dialogOperation.position ={ my: "right bottom", at: "right-" + ((windowWidth - tempClass.offsetLeft - tempClass.offsetWidth).toFixed(0)) + "px" + " " + "bottom-" + ((windowHeight - tempClass.offsetTop - tempClass.offsetHeight).toFixed(0)) + "px", of: window };
                temp.dialog("close");
                page[index++] = change;
                changeHtml.dialog(dialogOperation);
                changeHtml.dialog("open");
            }else {
                page[index++] = change;
                changeHtml.dialog(dialogOperation);
                changeHtml.dialog("open");
            }
        }
    }

    function reCreatePage(pageId){
        while(index - 1 >= 0){
            $('#' + page[index - 1]).dialog("close");
            dialogOperation = initDialog();
            page = [];
            index = 0;
        }
        $('#' + pageId).dialog(dialogOperation).dialog("open");
        page[index++] = pageId;
    }

    //加载新页面
    $('#help1').click(function () {
        reCreatePage("main");
    });

    $('#help2').click(function () {
        reCreatePage("operation_guide_page");
    });

    //页面跳转
    $('#cloud_services').click(function (event) {
        event.preventDefault();
        changeHtml('cloud_service_page');
    });

    $('#snapshot_create').click(function (event) {
        event.preventDefault();
        changeHtml('snapshot_create_page');
    });

    $('#block_store').click(function (event) {
        event.preventDefault();
        changeHtml('block_store_page');
    });

    $('#interaction_mode').click(function (event) {
        event.preventDefault();
        changeHtml('interaction_mode_page');
    });
});