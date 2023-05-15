//fullpage 스크립트 + 앵커 스크립트
$(document).ready(function () {
    $("#fullpage").fullpage({
        anchors: ["intro", "profile", "ptf01", "ptf02", "ptf03", "footer"],
        menu: "#topMenu",
        //navigation: true,
        // scrollBar: true,
    });
    $(".case a").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        $(this).find("img").css({
            top:-(imgH-caseH)
        });
    });
    $(".case a").on("mouseleave", function(){
        $(this).find("img").css({
            top:0
        });
    });
        // 모바일 버튼 
        $(".m_btn").on("click", function(){
            $(".m_btn_menu").toggleClass("on")
            $(this).toggleClass("on")
        });
});


		var nt_example1 = $('#nt-example1').newsTicker({
			row_height: 80,
			max_rows: 1,
			duration: 4000,
			//prevButton: $('#nt-example1-prev'),
			//nextButton: $('#nt-example1-next')
		});

