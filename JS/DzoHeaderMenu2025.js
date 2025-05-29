function AddDzoMenu() {
    var newdiv = $('<div/>').attr('id', 'cover-menu-dzo');
    var strHtml =
        ` <div id="menu_dzo">
            <div id="menu_container">
                <div id="headerpc" class="header-menu">
                    <a href="https://dzogame.vn/" target="_blank" class="logo">
                        <img id="img-logo-dzo" src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/Original.webp" alt="Logo">
                    </a>
                    <nav class="nav">
                        <a class="parent-menu" href="https://dzogame.vn/dzonews" target="_blank">DzoNews</a>
                        <a class="parent-menu" href="https://dzostore.vn/" target="_blank">DzoStore</a>
                        <div class="dropdown">
                            <a href="#" class="dropdown-btn active">Sản Phẩm</a>
                            <div class="dropdown-content">
                                <div class="filter-bar">
                                    <button class="filter-btn active" data-filter="all"><i class="fas fa-th-large"></i> All Games</button>
                                    <button class="filter-btn" data-filter="pc"><i class="fas fa-desktop"></i> PC Games</button>
                                    <button class="filter-btn" data-filter="mobile"><i class="fas fa-mobile-alt"></i> Mobile Games</button>
                                </div>
                                <div class="product-grid">
                                    <a href="https://cuulongchiton.dzogame.vn/" target="_blank" class="product-item pc">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/9DU.png" alt="Cửu Long Chí Tôn">
                                        <span>Cửu Long Chí Tôn</span>
                                    </a>
                                    <a href="https://dzostore.vn/Melojam" target="_blank" class="product-item mobile">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/MLJ.png" alt="Melojam">
                                        <span>Melojam</span>
                                    </a>
                                    <a href="https://chiendia.dzogame.vn/" target="_blank" class="product-item mobile pc">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/CD.png" alt="Chiến Địa">
                                        <span>Chiến Địa</span>
                                    </a>
                                    <a href="https://oa.dzogame.vn/" target="_blank" class="product-item mobile">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/OAM.png" alt="Đấu Trường Onmyoji">
                                        <span>Đấu Trường Onmyoji</span>
                                    </a>
                                    <a href="https://hkm.dzogame.vn/" target="_blank" class="product-item mobile">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/HKM.png" alt="Hiệp Khách Mobile">
                                        <span>Hiệp Khách Mobile</span>
                                    </a>
                                    <a href="https://3k.dzogame.vn/" target="_blank" class="product-item pc">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/3K.png" alt="Tam Quốc Chí">
                                        <span>Tam Quốc Chí</span>
                                    </a>
                                    <a href="https://123.dzogame.vn/" target="_blank" class="product-item pc">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/123Dzogame.png" alt="123Dzo">
                                        <span>Cổng 123DzoGame</span>
                                    </a>
                                    <a href="https://ah.dzogame.vn/" target="_blank" class="product-item mobile">
                                        <img src="https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/WA.png" alt="123Dzo">
                                        <span>Anh Hùng Viễn Chinh</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav class="nav right">
                         <div class="dropdown">
                            <a href="#" class="dropdown-btn">Về Chúng Tôi</a>
                            <div class="dropdown-content-tk th">
                                <a href="https://dzogame.vn/about" target="_blank" class="menu-tk"><span class="icon dzo"></span>DzoGame</a>
                                <a href="https://dzogame.vn/job" target="_blank" class="menu-tk"><span class="icon job"></span>Tuyển Dụng</a>
                                <a href="#" target="_blank" class="menu-tk"><span class="icon gioithieu"></span>Liên Hệ</a>
                            </div>
                        </div>
                        <a class="parent-menu" href="https://vi.dzogame.vn/" target="_blank">Nạp Tiền</a>
                        <div class="dropdown">
                            <a href="#" class="dropdown-btn">Tài Khoản</a>
                            <div class="dropdown-content-tk">
                                <a href="https://id.dzogame.vn/" target="_blank" class="menu-tk"><span class="icon regist"></span>Đăng Nhập</a>
                                <a href="https://id.dzogame.vn/dang-ky" target="_blank" class="menu-tk"><span class="icon login"></span>Đăng Ký</a>
                                <a href="https://hotro.dzogame.vn/" target="_blank" class="menu-tk"><span class="icon support"></span>Hỗ Trợ</a>
                                <a href="https://id.dzogame.vn/huong-dan-tao-tai-khoan" target="_blank" class="menu-tk"><span class="icon instruct"></span>Hướng Dẫn</a>
                            </div>
                        </div>
                    </nav>
                    <div class="button">
                        <a href="https://dzogame.vn/launcher" target="_blank" class="btn-launcher"></a>
                    </div>
                </div>
                <div id="headermobile">
			    	<div class="nav-mobile">
			    		<div id="page-open-left-dzomenu">
			    			<a href="javascript:" id="left-dzomenu-mb-btn" class="open-left-dzomenu-button">
			    				<i class="fas fa-align-justify"></i>
			    				<i class="fas fa-times"></i>
			    			</a>
			    			<div id="left-dzomenu-mb">
			    				<nav class="navbar">
			    					<ul class="nav navbar-nav">
			    						<li><a href="https://dzogame.vn/dzonews" target="_blank"><span>DzoNews</span></a></li>
                                        <li><a href="https://dzostore.vn/" target="_blank"><span>DzoStore</span></a></li>
			    						<li><a href="https://dzogame.vn/san-pham"><span>Sản Phẩm</span></a></li>
                                        <li><a href="https://dzogame.vn/about" target="_blank"><span>Về Chúng Tôi</span></a></li>
                                        <li><a href="https://dzogame.vn/job" target="_blank"><span>Tuyển Dụng</span></a></li>
			    						<li><a href="#" target="_blank"><span>Liên Hệ</span></a></li>
			    						<li>
			    							<a class="icon-mb icon-mb-dzovi" href="https://vi.dzogame.vn/" target="_blank"></a>
			    							<a class="icon-mb icon-mb-sp" href="https://hotro.dzogame.vn/" target="_blank"></a>
			    							<a class="icon-mb icon-mb-gg-play" href="https://play.google.com/store/apps/dev?id=8075852694625463487" target="_blank"></a>
			    							<a class="icon-mb icon-mb-app-store" href="https://apps.apple.com/vn/developer/asiasoft-co-ltd/id959827394" target="_blank"></a>
			    						</li>
			    					</ul>
			    				</nav>
			    			</div>
			    		</div>
			    		<div class="logo-box">
			    			<a href="https://dzogame.vn" class="logo"></a>
			    		</div>
			    		<div id="page-open-right-dzomenu">
			    			<a href="javascript:" id="right-dzomenu-mb-btn" class="open-right-dzomenu-button">
			    				<i class="far fa-user"></i>
			    				<i class="fas fa-times"></i>
			    			</a>
			    			<div id="right-dzomenu-mb">
			    				<nav class="navbar">
			    					<!--<ul class="nav navbar-nav">

			    						<li><a href="mailto:info@dzogame.vn" target="_blank">Liên Hệ</a></li>
			    						<li><a href="https://www.facebook.com/dzogame.vn/" target="_blank">Facebook</a></li>
			    						<li><a href="https://www.youtube.com/channel/UCmO9fJWNGL1bwpCFu9YOysg" target="_blank">Youtube</a></li>
			    					</ul>-->
			    					<ul class="nav navbar-nav">

			    						<!--<li><a href="mailto:info@dzogame.vn" target="_blank">Liên Hệ</a></li>
			    						<li><a href="https://www.facebook.com/dzogame.vn/" target="_blank">Facebook</a></li>
			    						<li><a href="https://www.youtube.com/channel/UCmO9fJWNGL1bwpCFu9YOysg" target="_blank">Youtube</a></li>
			    						<li><a href="https://play.google.com/store/apps/dev?id=8075852694625463487" target="_blank"><span>CH Play</span></a></li>
			    						<li><a href="https://apps.apple.com/vn/developer/asiasoft-co-ltd/id959827394" target="_blank"><span>App Store</span></a></li>-->
			    						<li>
			    							<a class="icon-mb icon-mb-mail" href="mailto:info@dzogame.vn" target="_blank"></a>
			    							<a class="icon-mb icon-mb-fb" href="https://www.facebook.com/dzogame.vn/" target="_blank"></a>
			    							<a class="icon-mb icon-mb-yu" href="https://www.youtube.com/channel/UCmO9fJWNGL1bwpCFu9YOysg/" target="_blank"></a>
			    						</li>
			    					</ul>
			    				</nav>
			    			</div>
			    		</div>
			    	</div>
    		    </div>
            </div>
        </div>
        `;

    newdiv.html(strHtml);
    $('body').prepend(newdiv);
}

jQuery(document).ready(function ($) {

    $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://dzogame.vn/DzoHeader/css/DzoHeaderMenu2025.css"
    }).appendTo("head");

    //$("<link>", {
    //    rel: "stylesheet",
    //    type: "text/css",
    //    href: "https://dzogame.vn/DzoHeader/css/all.min.css"
    //}).appendTo("head");

    $("<script>", {
        src: "https://dzogame.vn/DzoHeader/js/amlich.js",
        type: "text/javascript"
    }).appendTo("head");

    $('head').prepend('<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">');
    $("body").addClass("dzo-ready");
    AddDzoMenu();
    ShowHideHeader();

    $('#page-open-left-dzomenu a').click(function () {

        if (!$(this).hasClass('active')) {
            $('#right-dzomenu-mb').animate({ right: "-100%", opacity: "0" }, 0);
            $('#right-dzomenu-mb-btn').removeClass('active');

            $('#left-dzomenu-mb').animate({
                left: "0",
                opacity: "1"
            }, 300);
            $(this).addClass('active');
        }
        else {
            $('#left-dzomenu-mb').animate({
                left: "-100%",
                opacity: "0"
            }, 300);
            $(this).removeClass('active');
        }
    });

    $('#page-open-right-dzomenu a').click(function () {
        if (!$(this).hasClass('active')) {
            $('#left-dzomenu-mb').animate({ left: "-100%", opacity: "0" }, 0);
            $('#left-dzomenu-mb-btn').removeClass('active');

            $('#right-dzomenu-mb').animate({
                right: "0",
                opacity: "1"
            }, 300);
            $(this).addClass('active');
        }
        else {
            $('#right-dzomenu-mb').animate({
                right: "-100%",
                opacity: "0"
            }, 300);
            $(this).removeClass('active');
        }
    });

    $(".filter-btn").on("click", function () {
        // Xóa class active khỏi tất cả các nút
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        // Lọc sản phẩm
        const filter = $(this).data("filter");

        $(".product-item").each(function () {
            if (filter === "all" || $(this).hasClass(filter)) {
                $(this).show(); // Hiển thị sản phẩm phù hợp
            } else {
                $(this).hide(); // Ẩn sản phẩm không phù hợp
            }
        });
    });

    setTimeout(function () { changeimgDzoHeaderLogo(); }, 1000);
});

jQuery(window).scroll(function () {
    ShowHideHeader();
});

function ShowHideHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $("body").addClass("hide-dzomenu");
    }
    else {
        $("body").removeClass("hide-dzomenu");
    }
}

function changeimgDzoHeaderLogo() {

    // Lấy phần tử img qua id
    var $imgLogo = $("#img-logo-dzo");
    if (!$imgLogo.length) return; // Nếu không tìm thấy phần tử thì dừng thực thi

    // Lấy ngày hiện tại
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Lưu ý: getMonth() trả về giá trị từ 0 đến 11

    // Lấy src gốc ban đầu
    var newSrc = $imgLogo.attr("src");

    // Lấy ngày âm
    var currentLunarDate = getLunarDate(today.getDate(), today.getMonth() + 1, today.getFullYear());
    var lunarDay = currentLunarDate.day;
    var lunarMonth = currentLunarDate.month;
    var lunarYear = currentLunarDate.year;
    var isLeap = currentLunarDate.isLeap; // Nếu có trường này để biết tháng nhuận

    // Tết Âm lịch: mồng 1 tháng Giêng (không xét tháng nhuận)
    if (((lunarMonth === 12 && lunarDay >= 24) || (lunarMonth === 1 && lunarDay <= 10)) && !isLeap) {
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/Tet.webp";
    }

    // Tết Đoàn Ngọ: mồng 5 tháng 5 (không xét tháng nhuận)
    if ((lunarMonth === 5 && lunarDay >= 1 && lunarDay <= 5) && !isLeap) {
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/Doan-Ngo.webp";
    }

    // Tết Trung Thu: mồng 15 tháng 8 (không xét tháng nhuận)
    if ((lunarMonth === 8 && lunarDay >= 11 && lunarDay <= 15) && !isLeap) {
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/Mid-Autumn.webp";
    }


    // Kiểm tra và cập nhật đường dẫn ảnh theo ngày lễ dương lịch
    if ((month === 12 && day >= 26) || (month === 1 && day <= 10)) {
        // 01/01: Tết dương lịch
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/Tet.webp";
    } else if (month === 2 && day >= 10 && day <= 14) {
        // 14/02: Valentine
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/Valentines.webp";
    } else if (month === 3 && day >= 4 && day <= 8) {
        // 8/3: Quốc tế Phụ nữ
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/8-3.webp";
    } else if ((month === 4 && day >= 28) || (month === 5 && day <= 1)) {
        // 30-5 1-5
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/2-9.webp";
    } else if ((month === 8 && day >= 29) || (month === 9 && day <= 2)) {
        // 2/9: Quốc khánh Việt Nam
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/2-9.webp";
    } else if (month === 10 && day >= 16 && day <= 20) {
        // 20/10: Phụ nữ Việt Nam
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/8-3.webp";
    } else if (month === 12 && day >= 21 && day <= 25) {
        // 24/12: Giáng sinh
        newSrc = "https://dzogame.vn/DzoHeader/imgs/DzoHeaderMenu2025/ImgDzo/X-mas.webp";
    }

    // Cập nhật src của phần tử img
    $imgLogo.attr("src", newSrc);
}
